import { defineCollection, z } from 'astro:content';
import { allowedTags, coreCategories } from '@/lib/tags';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(coreCategories),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    tags: z.array(z.enum(allowedTags)).default([]),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional()
  })
});

export const collections = {
  posts
};
