'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiSearch } from 'react-icons/fi';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('all');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery) params.set('query', searchQuery);
    if (category !== 'all') params.set('category', category);
    router.push(`/directory?${params.toString()}`);
  };

  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-secondary-500/10 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Find Hotels, Cafes & Restaurants
            <br />
            <span className="text-primary-500">Owned by Your Community</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            Travel with cultural confidence. Search 3,500+ Chinese, Japanese, and Korean-owned 
            businesses in 50+ cities worldwide.
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="bg-white rounded-2xl shadow-xl p-3 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1 relative">
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Where are you traveling? (e.g., Tokyo, Kyoto)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="px-6 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
              >
                <option value="all">All Categories</option>
                <option value="hotel">Hotels</option>
                <option value="cafe">Cafes</option>
                <option value="restaurant">Restaurants</option>
              </select>
              <button
                type="submit"
                className="bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
              >
                Search
              </button>
            </div>
          </form>

          {/* Trust Badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>3,500+ Verified Businesses</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🌏</span>
              <span>50+ Cities</span>
            </div>
            <div className="flex items-center gap-2">
              <span>⭐</span>
              <span>12,000+ Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
