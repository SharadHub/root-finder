/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

function getBlogPost(slug: string) {
  // Mock data - fetch from Supabase in production
  return {
    id: '1',
    title: '10 Best Chinese-Owned Hotels in Kyoto (2026 Complete Guide)',
    slug: 'best-chinese-hotels-kyoto-2026',
    featured_image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200',
    excerpt: 'Planning a trip to Kyoto and looking for accommodations with Mandarin-speaking staff? Here\'s our complete guide.',
    content: `Planning a trip to Kyoto and looking for accommodations with Mandarin-speaking staff? You're in the right place.

In this comprehensive guide, we'll cover:
- Top-rated Chinese-owned hotels in Kyoto
- Price ranges and locations
- Booking tips and insider recommendations
- Cultural amenities that matter

## Why Choose Chinese-Owned Hotels in Kyoto?

When traveling to Japan, having staff who speak your language makes a huge difference. Chinese-owned hotels in Kyoto offer:

- **Mandarin-speaking staff** available 24/7
- **Traditional Chinese breakfast** options
- **Chinese TV channels** and streaming services
- **Cultural understanding** of dietary preferences and customs

## 1. Golden Dragon Hotel ⭐⭐⭐⭐⭐

Located in the historic Gion district, Golden Dragon Hotel is our #1 pick for Chinese travelers visiting Kyoto.

**Why We Love It:**
- Mandarin-speaking staff available round-the-clock
- Traditional Chinese breakfast included with your stay
- Walking distance to Kiyomizu-dera Temple (5 minutes)
- Modern rooms with traditional Japanese tatami options

**Pricing:** $$ (¥12,000-18,000/night)

**Location:** 123 Gion District, Higashiyama Ward

[View Golden Dragon Hotel Details →](/business/golden-dragon-hotel-kyoto)

## 2. Kyoto Mandarin Inn ⭐⭐⭐⭐

A boutique hotel in central Kyoto, perfect for business and leisure travelers.

**Highlights:**
- Prime location near Kyoto Station
- Bilingual concierge service
- Chinese restaurant on-site
- Free airport shuttle

**Pricing:** $$ (¥10,000-15,000/night)

## 3. Silk Road Hotel Kyoto ⭐⭐⭐⭐⭐

Luxury accommodations with impeccable service and cultural amenities.

**What Makes It Special:**
- Michelin-recommended Chinese restaurant
- Traditional tea ceremony room
- Spa with Chinese wellness treatments
- VIP airport transfers

**Pricing:** $$$ (¥25,000-35,000/night)

## Booking Tips

### Best Time to Book

Book at least 2-3 months in advance for:
- Cherry blossom season (March-April)
- Autumn foliage season (October-November)
- Chinese New Year holidays

### How to Save Money

1. **Direct Booking**: Some hotels offer 10-15% discount for direct bookings
2. **Extended Stays**: Many offer weekly discounts
3. **Off-Peak Travel**: Visit in summer or winter for lower rates

### Questions to Ask

When booking, make sure to ask about:
- Mandarin-speaking staff availability
- Chinese breakfast options
- Proximity to public transportation
- Chinese TV channels

## Final Thoughts

Kyoto offers incredible accommodations for Chinese travelers. Whether you choose the luxury of Silk Road Hotel or the budget-friendly Mandarin Inn, you'll feel right at home.

**Ready to book?** Browse all Chinese-owned hotels in Kyoto on our [directory page](/directory?city=kyoto&ethnicity=chinese&category=hotel).

---

*Have you stayed at any of these hotels? Share your experience in the comments below!*`,
    author: 'Admin',
    published_at: 'Jan 15, 2026',
    read_time_minutes: 8,
    categories: ['Kyoto Guide', 'Hotels', 'Travel Tips'],
    tags: ['kyoto', 'chinese hotels', 'japan travel', 'accommodation guide'],
    view_count: 12450,
    meta_title: '10 Best Chinese-Owned Hotels in Kyoto 2026 | RootFinder',
    meta_description: 'Discover the best Chinese-owned hotels in Kyoto with Mandarin-speaking staff. Complete guide with prices, locations & booking links.'
  };
}

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = slug ? getBlogPost(slug) : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Post not found</h1>
          <p className="text-gray-600">Please check the URL and try again.</p>
        </div>
      </div>
    )
  }

  return (
    <article className="min-h-screen bg-white">
      {/* Featured Image */}
      <div className="relative h-96 w-full">
        <img
          src={post.featured_image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map((cat) => (
              <span key={cat} className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
                {cat}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center font-semibold text-primary-700">
                A
              </div>
              <span>By {post.author}</span>
            </div>
            <span>•</span>
            <span>📅 {post.published_at}</span>
            <span>•</span>
            <span>{post.read_time_minutes} min read</span>
            <span>•</span>
            <span>👁️ {post.view_count.toLocaleString()} views</span>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-gray-600 mb-3">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  to={`/blog?tag=${tag}`}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </div>

          {/* Share Buttons */}
          <div className="mt-8 flex items-center gap-4">
            <span className="text-gray-600 font-semibold">Share:</span>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Facebook
            </button>
            <button className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600">
              Twitter
            </button>
            <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800">
              Copy Link
            </button>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">📚 Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Link
                key={i}
                  to="/blog/sample-post"
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="relative h-40">
                    <img
                      src={`https://images.unsplash.com/photo-${1500000000000 + i}?w=600`}
                      alt="Related post"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Sample Related Post Title</h3>
                  <p className="text-sm text-gray-500">5 min read</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
