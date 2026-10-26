// src/lib/projects.ts
// Acceso a los proyectos de Hygraph durante el build.
import sharp from "sharp";
import { hygraph, GET_ALL_PROJECTS } from "./hygraph";
import { optimizeHygraphImage } from "./imageUtils";
import type { Project, ProjectsResponse } from "../types/project";

// Una sola petición por build, compartida entre todas las páginas
let projectsPromise: Promise<Project[]> | undefined;

export function getProjects(): Promise<Project[]> {
  projectsPromise ??= hygraph
    .request<ProjectsResponse>(GET_ALL_PROJECTS)
    .then((data) =>
      data.projects.map((project) => ({
        ...project,
        services: project.services ?? [],
        images: project.images ?? [],
        webScreenshots: project.webScreenshots ?? [],
      }))
    );
  return projectsPromise;
}

const FALLBACK_PALETTE = ["#000000", "#777777", "#cccccc"];
const paletteCache = new Map<string, Promise<string[]>>();

// 3 colores dominantes de una imagen: se reduce a 48×24 y se agrupan los píxeles
// por color (3 bits por canal); se devuelve la media de los 3 grupos más grandes.
export function getPalette(imageUrl: string): Promise<string[]> {
  if (!paletteCache.has(imageUrl)) {
    paletteCache.set(imageUrl, computePalette(imageUrl));
  }
  return paletteCache.get(imageUrl)!;
}

async function computePalette(imageUrl: string): Promise<string[]> {
  try {
    const small = optimizeHygraphImage(imageUrl, { width: 96, quality: 80, format: "png" });
    const res = await fetch(small);
    if (!res.ok) return FALLBACK_PALETTE;
    const { data } = await sharp(Buffer.from(await res.arrayBuffer()))
      .resize(48, 24, { fit: "fill" })
      .removeAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    const buckets = new Map<string, { n: number; r: number; g: number; b: number }>();
    for (let i = 0; i < data.length; i += 3) {
      const [r, g, b] = [data[i], data[i + 1], data[i + 2]];
      const key = `${r >> 5},${g >> 5},${b >> 5}`;
      const bucket = buckets.get(key) ?? { n: 0, r: 0, g: 0, b: 0 };
      bucket.n++;
      bucket.r += r;
      bucket.g += g;
      bucket.b += b;
      buckets.set(key, bucket);
    }

    const colors = [...buckets.values()]
      .sort((a, b) => b.n - a.n)
      .slice(0, 3)
      .map((c) => `rgb(${Math.round(c.r / c.n)}, ${Math.round(c.g / c.n)}, ${Math.round(c.b / c.n)})`);

    while (colors.length < 3) colors.push(colors[0] ?? FALLBACK_PALETTE[colors.length]);
    return colors;
  } catch {
    return FALLBACK_PALETTE;
  }
}

// "https://www.flowstark.com/" → "flowstark.com"
export const displayUrl = (url: string) =>
  url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
