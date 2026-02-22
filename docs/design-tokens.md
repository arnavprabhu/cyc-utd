# Design system – tokens and typography

## Typography

- **Primary font:** Geist Sans (via `--font-geist-sans`), applied to `body` in [app/globals.css](app/globals.css). Fallback: `ui-sans-serif, system-ui, sans-serif`.
- **Mono (optional):** Geist Mono via `--font-geist-mono` for code or data.
- **Scale:** Use Tailwind text utilities: `text-lg` for intro paragraphs, clear `h1` / `h2` / `h3` hierarchy. Section headings: eyebrow (e.g. `text-xs uppercase tracking-[0.3em] text-muted-foreground`) + title (e.g. `text-4xl tracking-tight text-primary`).

## Colors (CSS variables in globals.css)

- **Primary:** `--primary` / `--primary-foreground` – main brand and CTAs. Light: blue (~221.2 83.2% 53.3%); dark: slightly brighter blue.
- **Secondary / muted:** `--secondary`, `--muted`, `--muted-foreground` – supporting text and backgrounds.
- **Surfaces:** `--background`, `--foreground`, `--card`, `--border`, `--input`, `--ring`.
- **Radius:** `--radius` (0.5rem) for cards and buttons; `lg` / `md` / `sm` in [tailwind.config.ts](tailwind.config.ts) derive from it.

Use semantic tokens (e.g. `bg-primary`, `text-muted-foreground`) rather than raw HSL in components. Ensure contrast meets WCAG AA for body and primary buttons in both light and dark.

## Components

- **Buttons:** Primary (default) for main CTAs (e.g. "Apply for consulting", "Join the cohort"); `variant="outline"` or `variant="secondary"` for "Learn more", "See case studies".
- **Cards:** Reuse [components/ui/card.tsx](components/ui/card.tsx); consistent padding and `--radius`.
- **Sections:** Standard spacing `py-20` / `sm:py-28`, `max-w-screen-xl`, `px-4` / `lg:px-6`. Eyebrow + title + description pattern where applicable.
- **Forms:** Existing form components with inline validation and toasts; show loading state on submit.

## Tone

Professional and approachable. Use clear, action-oriented CTAs; avoid jargon. Example: "Let's build impact together."
