import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  site: "https://lexmake.com", // Cambiar por tu dominio final
  compressHTML: true,
  experimental: {
    clientPrerender: true,
  },
});
