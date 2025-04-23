import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://roblr.github.io",
  base: "/profile",
  //   trailingSlash: "never",
  server: { open: "/" },
});
