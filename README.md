# RootFinder

Cultural travel directory for finding hotels, cafes, and restaurants owned by specific ethnic communities (Chinese, Japanese, Korean) worldwide.

## What’s included

- React (Vite) + React Router
- Tailwind CSS styling
- Supabase (database + storage)
- Public directory pages (search and filtering)
- Blog previews and email signup flow

## Next up

- Business profile page (`/business/[slug]`) with gallery, reviews, and related businesses
- Blog pages (`/blog`, `/blog/[slug]`)
- Admin dashboard (`/admin`) for managing businesses, posts, and reviews

## Tech stack

- Frontend: React (Vite), JavaScript (React Router)
- Styling: Tailwind CSS
- Backend: Supabase (Postgres + Storage)

## Quick start

### Prerequisites

- Node.js 18+
- A Supabase project

### 1) Install dependencies

```bash
npm install
```

### 2) Set up Supabase

1. Open the Supabase SQL Editor in your project
2. Copy the contents of `database-schema.sql`
3. Execute the SQL

### 3) Configure environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```bash
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_key # optional
ADMIN_SECRET_KEY=your_secret_password
```

### 4) Run the app

```bash
npm run dev
```

Open `http://localhost:3000`.

## Project structure

```text
src/
  app/              # route components (React Router)
    directory/
    business/[slug]/
    blog/[slug]/
    admin/
    api/
  components/
  lib/
  types/
database-schema.sql
index.html
vite.config.js
tailwind.config.js
tsconfig.json
```

## Deployment

Recommended: deploy to Vercel and set the same environment variables used locally.

## License

MIT

