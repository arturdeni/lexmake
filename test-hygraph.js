// Test de conexión a Hygraph
import { GraphQLClient } from "graphql-request";

const endpoint = "https://api-ap-south-1.hygraph.com/v2/cmhsppt5y0a6e07uu6wtzfiun/master";
const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3NjI3OTQ3MTIsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmh5Z3JhcGguY29tL3YyL2NtaHNwcHQ1eTBhNmUwN3V1Nnd0emZpdW4vbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQtYXAtc291dGgtMS5oeWdyYXBoLmNvbS8iLCJzdWIiOiJiZmJhNGZmYi03OWIyLTQ3ZWUtOWQ2MS1lNjQ4NjY3YjdiY2QiLCJqdGkiOiJjbWh0ZWdobTIzeGs0MDdvZjFvdzRoaGQwIn0.zXmITnM7QqECu4ekTJ1N8NVQom_dWIt6a4q066TxhOgNqOnRyi38kng0kAkA3p4tdyjguHJBvb-A48xEfYTV2GVbsrRtHnXCXH9-iYSRjIdyqpHwFeG6NMxuCBOf2YURkVuBJcMTNoOgKuhRhZfNONcZN0V3l0BJtFUKvEdGPQkHytMejC47f9HGQUsjdp-n8zxbRKWg40ryaH5UMcyc3hZKt5L8H6OntGSyQXtLDGI1Zjcb4s20ia6STsSbwPclU8aYXlL70rGjZsehYC-on832chIkKWjnrD-VanRKVWqXb9oIXVlpQNwux6qPXum7kRrV37rcBSrtG1UUcdwPNF2NAFuk6z0nFwXR9qtQ8tBMXT0nOOhH1s8ibcYMxjc3t9O0aW0dqWi4Pc27MubA4aMWLZ3pjQAXsNYAZDDWoVXV15-IHr4Bl5BtyHQuSXAmqqycc5INU74Kq6RqwTWT4WryBvX-z7O_PSomQFscOIfrxHRQy4j9o01onq63jghFNk9b0orDpjljdxEV0h3NnGTXCQS47Dyvh0DTSQN-hd-jOUJFo59jmWjrZDbOi3J1yiTqWt_U9UZSNyqp5fWTqKC-XN5EnBqQBQZZucB9cJErbLxzR-FZNduldHPLgYoE90F7LpAK8LWqWFQ1dx7F7MxpZUkSUAaLmoGcAWYDr7A";

// Test CON autenticación usando el nuevo token
const hygraph = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const query = `
  query GetAllProjects {
    projects(orderBy: date_DESC) {
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

try {
  console.log("Testing connection to:", endpoint);
  const data = await hygraph.request(query);
  console.log("SUCCESS! Data:", JSON.stringify(data, null, 2));
} catch (error) {
  console.error("ERROR:", error.message);
  console.error("Full error:", error);
}
