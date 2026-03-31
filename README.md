# 🌍 RootFinder - Cultural Travel Directory Platform

A complete Next.js web application for finding hotels, cafes, and restaurants owned by specific ethnic communities (Chinese, Japanese, Korean) worldwide.

## 📋 Project Status

### ✅ Completed Components

1. **Project Structure**
   - Next.js 14 with TypeScript
   - Tailwind CSS styling
   - Supabase database integration
   - Proper folder structure

2. **Database Schema**
   - Businesses table with full metadata
   - Blog posts table
   - Reviews system
   - Cities directory
   - Email signups
   - Admin users

3. **Frontend (User-Facing)**
   - Homepage with hero section
   - Search bar with filters
   - Featured cities grid
   - How It Works section
   - Stats showcase
   - Featured businesses carousel
   - Latest blog posts preview
   - Email capture form
   - Directory listing page with filters
   - Business cards component
   - Responsive header and footer

4. **Layout Components**
   - Header with navigation
   - Footer with links and newsletter
   - Responsive mobile menu

###⏳ Remaining Components to Build

5. **Business Profile Page** (`/business/[slug]`)
   - Photo gallery
   - Full description
   - Google Maps integration
   - Reviews section
   - Booking CTA buttons
   - Related businesses

6. **Blog Pages**
   - Blog listing page (`/blog`)
   - Individual blog post page (`/blog/[slug]`)
   - Medium-style article layout
   - Related articles
   - Table of contents

7. **Admin Dashboard** (`/admin`)
   - Login authentication
   - Dashboard overview
   - Business management (add/edit/delete)
   - Blog post editor (WYSIWYG)
   - Media library
   - Review moderation
   - Analytics

8. **API Routes**
   - `/api/businesses` - CRUD operations
   - `/api/blog-posts` - CRUD operations
   - `/api/reviews` - Add/moderate reviews
   - `/api/email-signup` - Save email leads
   - `/api/upload` - Image upload handler

## 🚀 Quick Start

### Prerequisites

```bash
Node.js 18+ installed
npm or yarn package manager
Supabase account (free tier works)
```

### Installation

1. **Clone and Install Dependencies**
```bash
cd rootfinder
npm install
```

2. **Set Up Supabase Database**
   - Create a new project at [supabase.com](https://supabase.com)
   - Go to SQL Editor
   - Copy and paste the entire `database-schema.sql` file
   - Execute the SQL

3. **Configure Environment Variables**
```bash
cp .env.example .env.local
```

Edit `.env.local`:
```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_key (optional)
ADMIN_SECRET_KEY=your_secret_password
```

4. **Run Development Server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
rootfinder/
├── src/
│   ├── app/                    
│   │   ├── layout.tsx 
│   │   ├── page.tsx
│   │   ├── globals.css  
│   │   ├── directory/     
│   │   │   └── page.tsx       
│   │   ├── business/     
│   │   │   └── [slug]/         
│   │   ├── blog/     
│   │   │   ├── page.tsx        
│   │   │   └── [slug]/         
│   │   ├── admin/         
│   │   │   ├── page.tsx       
│   │   │   ├── businesses/     
│   │   │   └── blog/           
│   │   └── api/      
│   │       └── *             
│   ├── components/
│   │   ├── layout/          
│   │   │   ├── Header.tsx  
│   │   │   └── Footer.tsx  
│   │   ├── ui/                 
│   │   │   ├── Hero.tsx        
│   │   │   ├── FeaturedCities.tsx 
│   │   │   ├── HowItWorks.tsx  
│   │   │   ├── Stats.tsx       
│   │   │   ├── FeaturedBusinesses.tsx 
│   │   │   ├── LatestBlogPosts.tsx 
│   │   │   ├── EmailCapture.tsx 
│   │   │   ├── DirectoryFilters.tsx
│   │   │   └── BusinessCard.tsx
│   │   └── admin/           
│   │       └── *               
│   ├── lib/
│   │   └── supabase.ts      
│   └── types/
│       └── index.ts     
├── database-schema.sql    
├── tailwind.config.js     
├── tsconfig.json             
└── next.config.js              
```

## 🎨 Design System

### Colors

```javascript
Primary (Teal): #0EA5A5    // Trust, travel
Secondary (Gold): #F4A261   // Cultural warmth
Accent (Navy): #264653      // Professionalism
Background: #F9F6F2         // Soft cream
```

### Typography

- Headings: Bold, large sizes (text-3xl to text-6xl)
- Body: System fonts (Segoe UI, Roboto, Helvetica)
- Accent elements: Emojis for visual appeal

## 🔧 Technology Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL (Supabase)
- **Auth**: Supabase Auth (for admin)
- **File Storage**: Supabase Storage
- **Icons**: React Icons
- **Deployment**: Vercel (recommended)

## 📝 Next Steps to Complete

### Priority 1: Business Profile Page

**File**: `src/app/business/[slug]/page.tsx`

Features needed:
- Photo gallery with lightbox
- Full business description
- Google Maps embed
- Reviews list with ratings
- Booking CTA buttons
- Related businesses carousel

### Priority 2: Admin Dashboard

**Files**: `src/app/admin/**/*`

Features needed:
- Simple login (email + password)
- Dashboard overview with stats
- Business management:
  - Add new business form
  - Edit existing business
  - Delete business
  - Upload images
- Blog management:
  - Rich text editor (Medium-style)
  - Add/edit/delete posts
  - Preview before publishing
  - SEO fields (meta title, description)
- Review moderation

### Priority 3: Blog Pages

**Files**: `src/app/blog/**/*`

Features needed:
- Blog listing with pagination
- Individual blog post page
- Related articles
- Social sharing buttons
- Comment system (optional)

### Priority 4: API Routes

**Files**: `src/app/api/**/*`

Endpoints needed:
- `/api/businesses` - CRUD for businesses
- `/api/blog-posts` - CRUD for blog posts
- `/api/reviews` - Submit and moderate reviews
- `/api/email-signup` - Save email signups
- `/api/upload` - Handle image uploads

## 📊 Sample Data

To test the website, insert sample data:

```sql
-- Insert sample cities
INSERT INTO cities (name, country, slug, description, business_count) VALUES
('Tokyo', 'Japan', 'tokyo', 'Japan''s bustling capital', 850),
('Kyoto', 'Japan', 'kyoto', 'Historic cultural center', 420),
('Honolulu', 'USA', 'honolulu', 'Hawaiian paradise', 380);

-- Insert sample business
INSERT INTO businesses (
  name, slug, category, owner_ethnicity, city, country,
  short_description, photos, price_range, rating, review_count, status
) VALUES (
  'Golden Dragon Hotel',
  'golden-dragon-hotel-kyoto',
  'hotel',
  'chinese',
  'Kyoto',
  'Japan',
  'Traditional Chinese-owned hotel in historic Gion district',
  '["https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800"]',
  '$$',
  4.5,
  124,
  'published'
);
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

### Build for Production

```bash
npm run build
npm run start
```

## 💰 Monetization Setup

### 1. Google AdSense

Add to `src/app/layout.tsx`:
```javascript
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ID"></script>
```

### 2. Affiliate Links

Update in Business Profile:
```javascript
const bookingUrl = `https://booking.com/hotel?aid=${process.env.BOOKING_COM_AFFILIATE_ID}`;
```

### 3. Premium Listings

Add Stripe integration for business subscriptions.

## 📈 SEO Optimization

- ✅ Meta tags configured
- ✅ Semantic HTML structure
- ✅ Image alt tags
- ⏳ Add structured data (Schema.org)
- ⏳ Generate sitemap.xml
- ⏳ Add robots.txt

## 🔒 Security

- Environment variables for secrets
- Input validation on forms
- SQL injection prevention (Supabase handles this)
- Rate limiting on API routes (to add)
- Admin authentication (to add)

## 📧 Support

For questions or issues, create an issue in the repository.

## 📄 License

MIT License - feel free to use for your project!

---

## 🎯 Quick Launch Checklist

- [x] Install dependencies
- [x] Set up Supabase database
- [x] Configure environment variables
- [ ] Build remaining pages (business profile, blog, admin)
- [ ] Add sample data to database
- [ ] Test all features
- [ ] Deploy to Vercel
- [ ] Set up domain name
- [ ] Configure Google Analytics
- [ ] Enable AdSense
- [ ] Launch! 🚀

---
