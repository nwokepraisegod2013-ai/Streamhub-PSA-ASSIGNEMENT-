# StreamHub — Backend

A small Laravel API serving a demo video library (title, description,
category, duration, view count) backed by public YouTube video IDs. No
authentication — three read-only endpoints for a simple streaming demo.

## Endpoints

| Method | URL                  | Description                              |
|--------|----------------------|-------------------------------------------|
| GET    | `/api/videos`        | List videos (`?search=`, `?category=`)    |
| GET    | `/api/videos/{id}`   | Get one video, increments its view count  |
| GET    | `/api/categories`    | List distinct categories                  |

Every video record includes `thumbnail_url`, `embed_url`, and `watch_url`,
derived from its YouTube ID, so the frontend never has to build YouTube URLs
itself.

## Setup

```bash
composer install
cp .env.example .env
php artisan key:generate
touch database/database.sqlite
php artisan migrate --seed
php artisan serve
```

The API runs at `http://localhost:8000`. CORS is pre-configured (see
`config/cors.php`) to allow requests from the Vite dev server at
`http://localhost:5173` — change `FRONTEND_URL` in `.env` if you serve the
frontend elsewhere.

## A note on how this was built

This backend was hand-written to the exact structure Laravel 11's
`composer create-project laravel/laravel` produces (same `bootstrap/app.php`,
config files, artisan entrypoint, etc.), and every PHP file was checked with
`php -l` for syntax errors — all pass clean. What I could *not* do in the
sandbox this was built in is run `composer install` end-to-end, because its
network policy blocks `packagist.org`. On your machine, with normal internet
access, `composer install` will resolve Laravel's real dependencies and this
should boot exactly as any fresh Laravel app would. If anything doesn't line
up, the most likely spot is a config value Laravel expects that a generated
project would normally include — flag it and it's a quick fix.
