# StreamHub

A simple video streaming demo: a Laravel API serving a small video library
(seeded with public YouTube links), and a React (Vite) frontend with a
hero banner, category shelves, search, and a modal player.

```
streamhub/
├── backend/    Laravel API — see backend/README.md
└── frontend/   React (Vite) app — see frontend/README.md
```

## Quick start

**1. Backend**

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
touch database/database.sqlite
php artisan migrate --seed
php artisan serve
```

**2. Frontend** (in a second terminal)

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

Open `http://localhost:5173`.

## What's inside

- 8 demo videos across Film, Music, and Documentary categories, each backed
  by a real public YouTube ID (thumbnail, embed, and watch URLs are derived
  automatically from it — no hardcoded links to maintain).
- A read-only API: list videos (with search/category filters), fetch one
  video (bumps its view count), list categories.
- A dark, cinema-inspired UI (Fraunces display type + Inter body type, a
  warm amber accent) with a featured-video hero, horizontally scrolling
  category shelves, live search, and a YouTube player in a modal.

## Build note

This was built and verified in a sandboxed environment without access to
Packagist, so the backend's PHP was hand-written to Laravel 11's real project
structure and syntax-checked file by file (`php -l`, all clean) rather than
generated and booted via `composer install`. The frontend, by contrast, was
fully installed, linted, and production-built in the same sandbox — no
caveats there. Full detail is in `backend/README.md`.
