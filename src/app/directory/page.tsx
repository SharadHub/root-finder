'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import DirectoryFilters from '@/components/ui/DirectoryFilters';
import BusinessCard from '@/components/ui/BusinessCard';
import type { Business } from '@/types';
import { db } from '@/lib/supabase';

import { Suspense } from 'react';

function DirectoryContent() {
  const searchParams = useSearchParams();
  // ... rest of the existing state and effects ...
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    query: searchParams.get('query') || '',
    city: searchParams.get('city') || '',
    category: searchParams.get('category') || '',
    ethnicity: searchParams.get('ethnicity') || '',
    priceRange: [] as string[],
    rating: 0
  });

  useEffect(() => {
    const fetchBusinesses = async () => {
      setLoading(true);
      try {
        const { data, error } = await db.getBusinesses(filters);
        if (error) throw error;

        let filteredData = data || [];
        if (filters.query) {
          const q = filters.query.toLowerCase();
          filteredData = filteredData.filter(b =>
            b.name.toLowerCase().includes(q) ||
            b.short_description?.toLowerCase().includes(q) ||
            b.description?.toLowerCase().includes(q)
          );
        }

        setBusinesses(filteredData);
      } catch (err) {
        console.error('Error fetching businesses:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBusinesses();
  }, [filters]);

  const handleFilterChange = (newFilters: any) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Directory
          </h1>
          <p className="text-lg text-gray-600">
            {businesses.length} businesses found
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <DirectoryFilters
              filters={filters}
              onFilterChange={handleFilterChange}
            />
          </div>

          {/* Business Results */}
          <div className="lg:col-span-3">
            {loading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
                <p className="mt-4 text-gray-600">Loading businesses...</p>
              </div>
            ) : businesses.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-xl">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No businesses found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your filters or search query
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {businesses.map((business) => (
                  <BusinessCard key={business.id} business={business} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DirectoryPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>
    }>
      <DirectoryContent />
    </Suspense>
  );
}
