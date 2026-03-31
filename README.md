# RootFinder

Cultural travel directory for finding hotels, cafes, and restaurants owned by specific ethnic communities (Chinese, Japanese, Korean) worldwide.

## What’s included

- Next.js 14 + TypeScript
- Tailwind CSS styling
- Supabase (database + storage)
- Public directory pages (search and filtering)
- Blog previews and email signup flow

## Next up

- Business profile page (`/business/[slug]`) with gallery, reviews, and related businesses
- Blog pages (`/blog`, `/blog/[slug]`)
- Admin dashboard (`/admin`) for managing businesses, posts, and reviews

## Tech stack

- Frontend: Next.js (App Router), React, TypeScript
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
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_key # optional
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
  app/
    directory/
    business/[slug]/
    blog/[slug]/
    admin/
    api/
  components/
  lib/
  types/
database-schema.sql
tailwind.config.js
tsconfig.json
next.config.js
```

## Deployment

Recommended: deploy to Vercel and set the same environment variables used locally.

## License

MIT

