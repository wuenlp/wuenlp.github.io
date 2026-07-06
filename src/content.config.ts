import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

// --- Publications ---
const publications = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/publications" }),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    venue: z.string(),
    date: z.date(),
    pdfUrl: z.string().optional(),
    codeUrl: z.string().optional(),
    bibtex: z.string().optional(),
  })
});

// --- Team Members ---
const team = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/team" }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    // 'researcher' | 'student-researcher' | 'admin'
    group: z.enum(['researcher', 'student-researcher', 'admin']),
    // sort order within group (lower = first)
    order: z.number().default(99),
    photo: z.string().optional(),   // URL or path under /public
    researchFocus: z.string().optional(),
    profileUrl: z.string().optional(),
    publicationsUrl: z.string().optional(),
    websiteUrl: z.string().optional(),
  })
});

// --- Research Areas ---
const researchAreas = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/research-areas" }),
  schema: z.object({
    title: z.string(),
    icon: z.string(),   // Material Symbols name, e.g. "translate"
    order: z.number().default(99),
  })
});

// --- Projects ---
const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    // 'featured' renders as a big card, 'small' as a small card, 'cta' as the dark CTA card
    size: z.enum(['featured', 'small', 'cta']),
    order: z.number().default(99),
    badge: z.string().optional(),    // e.g. "EU Funded"
    badgeColor: z.enum(['primary', 'secondary', 'tertiary']).optional().default('secondary'),
    imageUrl: z.string().optional(),
    linkUrl: z.string().optional(),
  })
});

// --- News / Announcements ---
const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    image: z.string().optional(),
  })
});

// --- Site-wide settings (single file: src/content/settings/site.md) ---
const settings = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/settings" }),
  schema: z.object({
    siteName: z.string(),
    heroTagline: z.string().optional(),
    heroHeadlineLine1: z.string(),
    heroHeadlineLine2: z.string(),
    heroBody: z.string(),
    heroImageUrl: z.string().optional(),
    featuredResearchTitle: z.string(),
    featuredResearchBody: z.string(),
    contactEmail: z.string().optional(),
    footerCopyright: z.string(),
    imprintUrl: z.string().optional(),
    privacyUrl: z.string().optional(),
    universityUrl: z.string().optional(),
  })
});

// --- Courses (Teaching page) ---
const courses = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/courses" }),
  schema: z.object({
    title: z.string(),
    semester: z.string(),      // e.g. "Summer 2025"
    type: z.string(),          // e.g. "Lecture", "Seminar", "Practical"
    ects: z.number().optional(),
    language: z.string().optional().default('English'),
    lecturers: z.string().optional(),
    url: z.string().optional(),
    order: z.number().default(99),
  })
});

export const collections = {
  publications,
  team,
  'research-areas': researchAreas,
  projects,
  news,
  settings,
  courses,
};
