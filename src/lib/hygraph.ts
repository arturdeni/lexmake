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

// Query con todos los proyectos y todos sus datos.
// Se usa en la home y el portfolio (WorkShowcase) y en getStaticPaths de la ficha,
// así cada build hace una sola petición para los proyectos.
export const GET_ALL_PROJECTS = `
  query GetAllProjects {
    projects(orderBy: date_DESC, first: 100) {
      id
      slug
      title
      description
      shortDescription
      services
      sector
      websiteUrl
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
      webScreenshots {
        url
        width
        height
      }
    }
  }
`;
