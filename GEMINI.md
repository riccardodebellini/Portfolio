# GEMINI.md

## Project Overview

This is a [Next.js](https://nextjs.org/) project, bootstrapped with `create-next-app`. It appears to be a personal
portfolio website for "Riccardo Debellini". The project uses TypeScript, Tailwind CSS, and ESLint. The UI components are
from [Shadcn/ui](https://ui.shadcn.com/).

The main page is `src/app/page.tsx`, and the layout is defined in `src/app/layout.tsx`. The layout includes a sticky
header with navigation links to "Home", "Progetti" (Projects), and "Contatti" (Contacts), as well as a link to a GitHub
profile.

## Building and Running

To get the project up and running, use the following commands:

* **Development:** `npm run dev`
* **Build:** `npm run build`
* **Start:** `npm run start`
* **Lint:** `npm run lint`

## Development Conventions

* **Styling:** The project uses Tailwind CSS for styling. Utility classes are used directly in the JSX.
* **Components:** Reusable UI components are located in `src/components/ui`.
* **Linting:** ESLint is used for code quality. The configuration is in `eslint.config.mjs`.
* **TypeScript:** The project is written in TypeScript. The configuration is in `tsconfig.json`.
* **Running:** do not run `npm run ...` unless prompted to do so (eg, do not run it after changing files, unless
  prompted to do so)