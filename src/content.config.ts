// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { glob } from "astro/loaders";

// 3. Define your collection(s)
const portfolio = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/data/portfolio" }),
  schema: z.object({
    name: z.string(),
  }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { portfolio };
