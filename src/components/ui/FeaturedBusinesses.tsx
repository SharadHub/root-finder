import Link from 'next/link';
import Image from 'next/image';
import { FiStar } from 'react-icons/fi';

// Mock data - in production, fetch from Supabase
const featuredBusinesses = [
  {
    id: '1',
    name: 'Golden Dragon Hotel',
    slug: 'golden-dragon-hotel-kyoto',
    category: 'hotel',
    ethnicity: 'Chinese',
    city: 'Kyoto',
    country: 'Japan',
    rating: 4.5,
    reviewCount: 124,
    priceRange: '$$',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    shortDescription: 'Traditional Chinese-owned hotel in historic Gion district'
  },
  {
    id: '2',
    name: 'Sakura Cafe',
    slug: 'sakura-cafe-tokyo',
    category: 'cafe',
    ethnicity: 'Japanese',
    city: 'Tokyo',
    country: 'Japan',
    rating: 4.8,
    reviewCount: 89,
    priceRange: '$',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800',
    shortDescription: 'Authentic Japanese-owned cafe with matcha specialties'
  },
  {
    id: '3',
    name: 'Seoul Kitchen',
    slug: 'seoul-kitchen-los-angeles',
    category: 'restaurant',
    ethnicity: 'Korean',
    city: 'Los Angeles',
    country: 'USA',
    rating: 4.6,
    reviewCount: 203,
    priceRange: '$$',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800',
    shortDescription: 'Family-owned Korean BBQ restaurant'
  },
];

const ethnicityIcons: Record<string, string> = {
  'Chinese': '🇨🇳',
  'Japanese': '🇯🇵',
  'Korean': '🇰🇷'
};

export default function FeaturedBusinesses() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ⭐ Featured Businesses
          </h2>
          <p className="text-lg text-gray-600">
            Top-rated businesses from our community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredBusinesses.map((business) => (
            <Link
              key={business.id}
              href={`/business/${business.slug}`}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={business.image}
                  alt={business.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold">
                  {ethnicityIcons[business.ethnicity]} {business.ethnicity}-owned
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <span className="capitalize">{business.category}</span>
                  <span>•</span>
                  <span>{business.priceRange}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-500">
                  {business.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {business.shortDescription}
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <FiStar className="text-yellow-500 fill-current" />
                    <span className="font-semibold">{business.rating}</span>
                    <span className="text-gray-500 text-sm">({business.reviewCount})</span>
                  </div>
                  <span className="text-sm text-gray-500">📍 {business.city}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/directory"
            className="inline-block bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
          >
            View All 3,500+ Listings →
          </Link>
        </div>
      </div>
    </section>
  );
}
