# StreamHub — Frontend

A small React (Vite) screening-room UI for the StreamHub API: a hero banner for
the featured title, category shelves, search, and a modal YouTube player.

## Setup

```bash
npm install
cp .env.example .env   # points at the Laravel API, defaults to http://localhost:8000/api
npm run dev
```

Opens at `http://localhost:5173`. Make sure the `streaming-backend` API is
running first (see its own README) — the app fetches videos from it on load.

## Build

```bash
npm run build    # outputs to dist/
npm run preview  # serve the production build locally
```
