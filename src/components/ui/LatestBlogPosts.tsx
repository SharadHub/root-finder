import Link from 'next/link';
import Image from 'next/image';

// Mock data - in production, fetch from Supabase
const blogPosts = [
  {
    id: '1',
    title: '10 Best Chinese-Owned Hotels in Kyoto',
    slug: 'best-chinese-hotels-kyoto-2026',
    excerpt: 'Complete guide to Mandarin-friendly accommodations in Kyoto\'s historic districts.',
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800',
    author: 'Admin',
    date: 'Jan 15, 2026',
    readTime: 8,
    category: 'Kyoto Guide'
  },
  {
    id: '2',
    title: 'Where to Find Authentic Japanese Food in Hawaii',
    slug: 'authentic-japanese-restaurants-hawaii',
    excerpt: 'Discover Japanese-owned restaurants serving authentic cuisine across the Hawaiian islands.',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800',
    author: 'Admin',
    date: 'Jan 12, 2026',
    readTime: 6,
    category: 'Hawaii Guide'
  },
  {
    id: '3',
    title: 'Korean Cafes in Los Angeles: A Complete Guide',
    slug: 'korean-cafes-los-angeles-guide',
    excerpt: 'From Koreatown to hidden gems, explore the best Korean-owned cafes in LA.',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800',
    author: 'Admin',
    date: 'Jan 10, 2026',
    readTime: 7,
    category: 'LA Guide'
  },
];

export default function LatestBlogPosts() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            📝 Latest Travel Guides
          </h2>
          <p className="text-lg text-gray-600">
            Expert insights and cultural travel tips
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  {post.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-500">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>📅 {post.date}</span>
                  <span>•</span>
                  <span>{post.readTime} min read</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="inline-block bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
          >
            Read All Articles →
          </Link>
        </div>
      </div>
    </section>
  );
}
