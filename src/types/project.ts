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
  category: string;
  date: string;
  mainImage: HygraphAsset;
  images: HygraphAsset[];
}

export interface ProjectsResponse {
  projects: Project[];
}

export interface ProjectResponse {
  project: Project;
}
