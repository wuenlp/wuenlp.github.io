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
    // 'pi' | 'postdoc' | 'phd' | 'master'
    group: z.enum(['pi', 'postdoc', 'phd', 'master', 'student', 'admin']),
    // sort order within group (lower = first)
    order: z.number().default(99),
    photo: z.string().optional(),   // URL or path under /public
    cartoon: z.string().optional(), // optional illustration shown on hover
    researchFocus: z.string().optional(),
    // --- Personal profile page (all optional; empty sections are hidden) ---
    bio: z.string().optional(),
    education: z.array(z.object({
      degree: z.string(),
      institution: z.string().optional(),
      period: z.string().optional(),
    })).optional(),
    experience: z.array(z.object({   // "Prior Jobs"
      role: z.string(),
      organization: z.string().optional(),
      period: z.string().optional(),
    })).optional(),
    importantFacts: z.array(z.object({
      label: z.string(),
      value: z.string(),
      icon: z.string().optional(),   // Material Symbols name, e.g. "pets"
    })).optional(),
    linkedinUrl: z.string().optional(),
    scholarUrl: z.string().optional(),
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
// One file per year (e.g. 2026.md) holds all that year's news under `items:`.
// Ordering on the page is by `date` (newest first) across every year file.
const newsItem = z.object({
  title: z.string(),
  date: z.date(),
  summary: z.string().optional(),   // the snippet text
  // For single-paper / general posts: the whole snippet links here.
  url: z.string().optional(),
  // For posts about multiple accepted papers: instead of linking the whole
  // snippet, each paper's title in the summary is linked. Give the `title`
  // exactly as it appears in the text. The link points to the ACL Anthology
  // PDF (`anthology`) when published, otherwise to `arxiv`.
  papers: z.array(z.object({
    title: z.string(),
    anthology: z.string().optional(),
    arxiv: z.string().optional(),
  })).optional(),
  image: z.string().optional(),
});

const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/news" }),
  schema: z.object({
    items: z.array(newsItem),
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
// A single file (src/content/courses/courses.md) holds all teaching, grouped by
// semester. Each course names the section it belongs to via `type`; each
// semester carries an explicit numeric `order` (higher = newer, shown first).
const level = z.enum(['bachelor', 'master']);
const courseSchema = z.object({
  title: z.string(),
  type: z.enum(['regular', 'seminar', 'praktikum']),  // section on the page
  // Target degree(s): a single value or a list, e.g. `master` or `[bachelor, master]`.
  level: z.union([level, z.array(level)]).optional(),
  ects: z.union([z.number(), z.string()]).optional(),  // e.g. 5, or "10 (or 5)"
  language: z.string().optional().default('English'),
  lecturers: z.string().optional(),
  url: z.string().optional(),
  description: z.string().optional(),
});

const courses = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/courses" }),
  schema: z.object({
    semesters: z.array(z.object({
      name: z.string(),          // e.g. "Winter Semester 26/27"
      order: z.number(),         // higher = newer; semesters are shown highest-first
      courses: z.array(courseSchema),
    })),
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
