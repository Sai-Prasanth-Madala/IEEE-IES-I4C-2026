# I4C 2026 — IEEE IES Industrial Innovation Conclave

A React + Vite + Tailwind homepage for the IEEE IES Industrial Innovation
Conclave 2026 (I4C), built around a "blueprint / circuit-schematic" visual
language — grid backgrounds, PCB-style fiducial corner marks, and a circuit
trace motif that ties the sections together.

## Run it in VS Code

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  data.js               ← all event content (guests, speakers, schedule, etc.)
  index.css              ← Tailwind + blueprint grid / fiducial / via styles
  App.jsx                 ← assembles the homepage
  components/
    Navbar.jsx
    Hero.jsx
    CircuitTrace.jsx      ← decorative signature motif
    SectionTag.jsx
    About.jsx
    Highlights.jsx
    Avatar.jsx             ← initials placeholder (swap for real photos, see below)
    Guests.jsx
    Speakers.jsx
    AreasOfInterest.jsx
    Schedule.jsx
    Register.jsx
    Footer.jsx
```

## Things you'll likely want to edit

- **`src/data.js`** — every piece of copy (guest names, speaker orgs, areas of
  interest, schedule) lives here. Edit this one file to update the whole site.
- **`REGISTRATION_URL`** in `src/data.js` — currently points at the Google
  Form from the poster.
- **Schedule times** in `src/data.js` are indicative placeholders (the poster
  didn't specify a timed agenda) — replace with the real agenda once fixed.
- **Speaker/guest photos** — `Avatar.jsx` currently renders initials in a
  bordered box so nothing is fabricated. To use real photos: drop image files
  in `src/assets/`, `import` them, and swap `<Avatar initials={...} />` for
  `<img src={...} className="h-14 w-14 rounded-sm object-cover" />` in
  `Guests.jsx` / `Speakers.jsx`.
- **Colors/fonts** — design tokens are in `tailwind.config.js` under
  `theme.extend` (`ink`, `blue`, `teal`, `amber`, `paper`) and
  `fontFamily` (Space Grotesk / IBM Plex Sans / IBM Plex Mono, loaded via
  Google Fonts in `index.html`).

## Deploying

This is a static Vite build — `npm run build` outputs `dist/`, which you can
deploy to Vercel, Netlify, GitHub Pages, or any static host.
