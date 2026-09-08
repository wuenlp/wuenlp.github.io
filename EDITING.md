# Editing the WüNLP website

This site is built with [Astro](https://astro.build). **You do not need to know Astro or write any code** — almost everything on the site is plain **Markdown files** in `src/content/`. Editing means changing text in those files.

When a change reaches the `main` branch, the site rebuilds and redeploys to <https://wuenlp.github.io> automatically (takes ~1–2 minutes).

---

## The two ways to edit

### A) In the browser (easiest, recommended)
1. Ask Goran for **write access** to the `wuenlp/wuenlp.github.io` repo.
2. On GitHub, open the file you want to change and click the **pencil icon** (✏️ "Edit this file").
3. Make your change, then click **Commit changes…**
4. Choose **"Create a new branch and start a pull request"**, then open the PR. Once it's merged into `main`, the site updates itself.

> Tip: For tiny fixes you can commit straight to `main`, but a broken file will break the deploy — a pull request is safer.

### B) On your computer (if you'll edit a lot)
```bash
git clone https://github.com/wuenlp/wuenlp.github.io.git
cd wuenlp.github.io
npm install
npm run dev      # live preview at http://localhost:4321
```
Edit files, watch the preview update, then commit and push (ideally on a branch + PR).

---

## Where things live

| I want to edit… | File(s) |
|---|---|
| **My profile / team card** | `src/content/team/<your-file>.md` |
| **News** | `src/content/news/2026.md` (one file per year) |
| **Publications** | `src/content/publications/*.md` (one file per paper) |
| **Teaching / courses** | `src/content/courses/courses.md` |
| **Site-wide text, contact email, footer** | `src/content/settings/site.md` |
| **Images** | put the file in `public/…` and reference it with a leading `/` |

---

## A few rules that keep the site from breaking

The text between the two `---` lines at the top of a file is **YAML**. It's picky:

- **Indentation is 2 spaces** (never tabs). Keep list items lined up.
- Put **quotes** around any value with a colon, `#`, or other punctuation: `title: "LLMs: a survey"`.
- **Dates** are `YYYY-MM-DD` (e.g. `2026-04-15`).
- For **long text**, use `>-` and indent the text underneath (see examples below).
- If a value is a web link, keep the whole URL, e.g. `url: "https://…"`.

If the site fails to build after a change, the deploy is skipped and the live site stays as it was. You can see errors under the repo's **Actions** tab.

---

## How-to: edit your profile

Your profile is one file in `src/content/team/`, e.g. `01-glavas.md`. The file name (minus the leading number) is also your profile URL: `01-glavas.md` → `/team/glavas`.

```markdown
---
name: "Your Name"
role: "PhD Researcher"           # your title
group: phd                       # pi | postdoc | phd | master | student | admin
order: 3                         # position within your group (lower = higher up)
photo: "/team/yourname.jpg"      # put the image in public/team/
cartoon: "/team/yourname_cartoon.jpg"   # optional; shown on hover
researchFocus: "One fun line shown on your card."

# Social links (leave as "#" or delete the line if you don't have one)
linkedinUrl: "https://www.linkedin.com/in/…"
scholarUrl: "https://scholar.google.com/citations?user=…"
websiteUrl: "https://…"

# ---- Your personal profile page (all optional) ----
bio: >-
  A short paragraph about you and your research. Write it across
  multiple indented lines; they get joined into one paragraph.

education:
  - degree: "Ph.D. in Computer Science"
    institution: "University of Würzburg"
    period: "2024 – present"
  - degree: "M.Sc. in Computer Science"
    institution: "Some University"
    period: "2021 – 2023"

experience:                       # "Prior Jobs"
  - role: "Research Intern"
    organization: "Some Lab"
    period: "2022"

importantFacts:                   # the fun section
  - label: "Pet"
    value: "A cat named Softmax"
    icon: "pets"
  - label: "Fuel"
    value: "Tea, gallons of it"
    icon: "emoji_food_beverage"
---
```

- Any section you leave out simply won't appear.
- **Icons** for Important Facts are Google Material Symbols. See the list of good options in `src/content/team/list_of_icons.txt`, or browse them all at <https://fonts.google.com/icons>. Use the icon's name, e.g. `icon: "translate"`.
- **Photos:** add your image to `public/team/` and point `photo:` at it with a leading slash.

To **add a new team member**, copy an existing file in `src/content/team/`, rename it (e.g. `11-yourname.md`), and edit the fields.

---

## How-to: add a news item

Open the file for the current year, e.g. `src/content/news/2026.md`, and add one entry under `items:`. Order doesn't matter — the page always sorts newest-first by `date`.

```markdown
  - title: "We won a best paper award!"
    date: 2026-09-01
    url: "https://link-to-the-announcement-or-paper"   # optional
    summary: >-
      One or two sentences describing the news. The whole snippet on the
      News page links to the url above.
```

**News about several accepted papers?** Instead of linking the whole item, link each paper title. List the papers, and the title text in the `summary` gets linked automatically (Anthology PDF if published, otherwise arXiv):

```markdown
  - title: "Three papers accepted at ACL 2026"
    date: 2026-05-15
    summary: >-
      Our papers "Paper One" and "Paper Two" were accepted to the Main
      Conference, and "Paper Three" to Findings.
    papers:
      - title: "Paper One"
        anthology: "https://aclanthology.org/2026.acl-long.123.pdf"
      - title: "Paper Two"
        arxiv: "https://arxiv.org/abs/2601.01234"
      - title: "Paper Three"        # no link yet — the title just stays plain text
```

> The `title:` inside `papers:` must match the wording in the `summary` **exactly** (it's matched as text).

For a **new year**, create `src/content/news/2027.md` with the same `items:` structure.

---

## How-to: add a publication

Create a new file in `src/content/publications/`, e.g. `74-my-paper.md`:

```markdown
---
title: "Title of the Paper"
authors: "First Author, Second Author, …, Goran Glavaš"
venue: "ACL 2026"
date: 2026-07-01
pdfUrl: "https://aclanthology.org/…"    # optional
codeUrl: "https://github.com/…"         # optional
---
```

---

## How-to: add or change a course

All teaching is in `src/content/courses/courses.md`, grouped by semester. Add a course under the right semester's `courses:` list:

```markdown
      - title: "Introduction to NLP"
        type: regular            # regular | seminar | praktikum
        level: [bachelor, master]   # bachelor, master, or both
        ects: 5
        language: "English"
        lecturers: "Prof. Dr. Goran Glavaš"
        url: "https://link-to-course-page"   # whole card links here
        description: "One-line description of the course."
```

Add a new semester by copying an existing `- name: …` block and giving it a higher `order:` (higher = shown first).

---

## Getting help

- Not sure if your edit is valid? Open a **pull request** instead of committing to `main` — nothing goes live until it's merged, and the build check will flag mistakes.
- Stuck on YAML formatting, or something doesn't render? Ping Goran, or copy an existing entry and change it piece by piece.
