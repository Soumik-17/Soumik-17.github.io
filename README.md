# Soumik Bhul — Portfolio

A standalone React + Vite portfolio. The project is intentionally independent of Lovable and contains no Lovable runtime, telemetry, editor configuration, or branding.

## Run locally

Requirements: Node.js 18+ (Node.js 20+ recommended).

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite, usually `http://localhost:5173`.

For a production build:

```bash
npm run build
npm run preview
```

## Where to add your information

All portfolio content is centralized in:

`src/config/site.ts`

Edit these sections:

- `profile` — name, headline, subtitle, introduction, footer text
- `links` — GitHub, LinkedIn, email, resume, phone and WhatsApp
- `skillGroups` — skills shown in the Skills section
- `floatingSkills` — decorative skills floating in the hero
- `projects` — project title, category, description, technologies and links

## Where to add project screenshots

Put project images inside:

`public/projects/`

Then set each project's `image` in `src/config/site.ts` to something like:

```ts
image: "/projects/cfpb-dashboard.png",
```

You can also use an external image URL.

## Where to add your resume

Put the PDF in:

`public/resume.pdf`

Then change the `resume` value in `src/config/site.ts` to:

```ts
resume: "/resume.pdf",
```

## Placeholder behavior

Values beginning with `YOUR_` or `[` are treated as unfinished placeholders. The site will show a safe "Coming Soon" state instead of broken links.

## Main project structure

```text
src/
├── components/
│   └── portfolio/       # visible portfolio sections
├── config/
│   └── site.ts          # EDIT THIS FILE for your content
├── main.tsx             # app entry point
└── styles.css           # global styling
public/
├── projects/            # ADD project screenshots here
└── resume.pdf           # ADD resume here when ready
```
