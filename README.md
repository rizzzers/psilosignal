# Psilosignal

A weekly newsletter website for Domenic Suppa, COO of Rose Hill Health Holdings. Covers psychedelic medicine science, regulation, and industry analysis.

Built with Next.js 16, Tailwind CSS, and Resend.

---

## Local development

**Prerequisites:** Node.js 18+, npm

```bash
# Clone and install
cd psilosignal
npm install

# Copy env example
cp .env.example .env.local

# Edit .env.local and add your Resend API key
# (see Resend setup below)

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment variables

| Variable | Required | Description |
|---|---|---|
| `RESEND_API_KEY` | Yes (for email) | Resend API key for subscriber notifications |

In production on Vercel, add these under Project Settings > Environment Variables.

---

## Resend setup

1. Create a free account at [resend.com](https://resend.com)
2. Create an API key under API Keys
3. Add the key as `RESEND_API_KEY` in `.env.local` (local) or Vercel env vars (production)
4. To send from a custom domain (e.g. `hello@psilosignal.com`), add and verify your domain in Resend's Domains section, then update the `from` address in `app/api/subscribe/route.ts`

The subscribe API route (`/api/subscribe`) sends a notification email to `ryan@ryanestes.info` whenever someone submits the signup form.

---

## Vercel deploy

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Under Project Settings > Environment Variables, add:
   - `RESEND_API_KEY` = your Resend API key
4. Deploy. Vercel auto-detects Next.js.

Every push to `main` triggers a production deploy automatically.

---

## Adding new blog posts

1. Create a new `.mdx` file in `content/blog/`
2. Use the filename as the URL slug (e.g. `my-new-post.mdx` becomes `/blog/my-new-post`)
3. Add frontmatter at the top:

```mdx
---
title: "Your post title here."
excerpt: "A one or two sentence summary for the blog card."
category: "Field Guide"
readTime: "8 min read"
publishedDate: "2026-06-10"
author: "Domenic Suppa"
---

Your post content here...
```

4. Write the body in standard Markdown. Headings, lists, bold, links all work.
5. The post appears automatically on `/blog` and `/blog/[slug]`, and the sitemap updates.

No code changes needed to add posts.

---

## Swapping placeholder content

Look for `// TODO:` comments in the source files:

| Location | What to update |
|---|---|
| `app/page.tsx` | Subscriber count (8,400+), Vol. 047 issue number, archive count (47 issues), testimonial names/quotes/roles |
| `app/blog/[slug]/page.tsx` | Subscriber count in post CTA |
| `app/blog/page.tsx` | No placeholders |

Search for `TODO` across the project to find all placeholder locations:

```bash
grep -r "TODO" app/ content/
```

---

## Project structure

```
psilosignal/
  app/
    page.tsx              # Home page
    layout.tsx            # Root layout, fonts, metadata, JSON-LD
    globals.css           # Brand CSS variables, gradients, grain overlays
    components/
      SignupForm.tsx       # Client-side signup form with loading/success/error states
    api/
      subscribe/
        route.ts          # POST handler, Resend integration
    blog/
      page.tsx            # Blog index
      [slug]/
        page.tsx          # Dynamic blog post page
    sitemap.ts            # Auto-generated sitemap
    robots.ts             # Robots.txt
  content/
    blog/
      *.mdx               # Blog post content files
  lib/
    blog.ts               # MDX file reading utilities
  public/
    assets/
      domenic.jpg         # Headshot (extracted from prototype)
    llms.txt              # AI crawler description
```

---

## Brand colors

| Variable | Hex | Usage |
|---|---|---|
| `--navy-dark` | `#19243F` | Primary text, buttons |
| `--navy-med` | `#3E4960` | Secondary text |
| `--navy-lite` | `#747F93` | Captions, labels |
| `--linen` | `#EFEDE4` | Section backgrounds |
| `--white` | `#FFFDF3` | Page background |
| `--sky-blue` | `#527FC1` | Accent, links |
| `--light-blue` | `#C4D1E8` | Chart, decorative |
| `--lavender` | `#B49DD5` | Gradient start |
| `--sunshine` | `#F2C875` | Gradient end, CTA label |

The signature gradient runs: lavender to sky-blue to sunshine (105deg).
