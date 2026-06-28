import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.string(),
    excerpt: z.string(),
    featured: z.boolean().default(false),
    gradient: z.string().default('linear-gradient(135deg, #0f2744 0%, #1d4ed8 100%)'),
    author: z.string().default('Drift Team'),
  }),
});

export const collections = { articles };
