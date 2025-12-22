// src/lib/hygraph.ts
import { GraphQLClient } from "graphql-request";

// Cliente de GraphQL para Hygraph
export const hygraph = new GraphQLClient(
  import.meta.env.HYGRAPH_CONTENT_API,
  {
    headers: {
      Authorization: `Bearer ${import.meta.env.HYGRAPH_PERMANENT_AUTH_TOKEN}`,
    },
  }
);

// Query para obtener todos los proyectos (para la página de portfolio)
export const GET_ALL_PROJECTS = `
  query GetAllProjects {
    projects(orderBy: date_DESC, first: 100) {
      id
      slug
      title
      description
      category
      date
      mainImage {
        url
        width
        height
      }
    }
  }
`;

// Query para obtener un proyecto específico por slug (para la página de detalle)
export const GET_PROJECT_BY_SLUG = `
  query GetProjectBySlug($slug: String!) {
    project(where: { slug: $slug }) {
      id
      slug
      title
      description
      category
      date
      mainImage {
        url
        width
        height
      }
      images {
        url
        width
        height
      }
    }
  }
`;
