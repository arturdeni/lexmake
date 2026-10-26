// src/types/project.ts
// Tipos basados en el schema de Hygraph

export interface HygraphAsset {
  url: string;
  width: number;
  height: number;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string | null;
  services: string[];
  sector: string | null;
  websiteUrl: string | null;
  date: string;
  mainImage: HygraphAsset;
  images: HygraphAsset[];
  webScreenshots: HygraphAsset[];
}

export interface ProjectsResponse {
  projects: Project[];
}
