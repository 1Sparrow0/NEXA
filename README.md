# NEXA — White Single-Page Agency Website

A responsive Persian RTL single-page agency website built with Next.js App Router, React, TypeScript, Tailwind CSS v4 and Lucide icons.

## Requirements
- Node.js 20.9+ (current LTS recommended)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Production build
```bash
npm run build
npm run start
```

## Structure
```text
nexa-white-spa/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── AgencySite.tsx
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## Notes
- All main sections are on one page; navigation links scroll to section IDs.
- Mobile navigation, FAQ accordion and contact form demo use React state.
- The contact form is frontend-only and does not send messages to a backend yet.
- Portfolio cards are illustrative placeholders; replace them with approved screenshots and accurate case-study details before publishing.
