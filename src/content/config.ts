import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    titleVi: z.string(),
    summary: z.string(),
    summaryVi: z.string(),
    year: z.string(),
    role: z.string(),
    roleVi: z.string(),
    domain: z.string(),
    domainVi: z.string(),
    stack: z.array(z.string()),
    metrics: z.array(
      z.object({
        label: z.string(),
        labelVi: z.string(),
        value: z.string(),
      })
    ),
    coverImage: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    githubUrl: z.string().optional(),
    liveUrl: z.string().optional(),
    evidenceUrl: z.string().optional(),
    paperAward: z.string().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
