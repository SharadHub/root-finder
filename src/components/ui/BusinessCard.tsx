import { Link } from 'react-router-dom';
import { FiStar, FiMapPin, FiPhone, FiGlobe } from 'react-icons/fi';
import type { Business } from '@/types';

interface BusinessCardProps {
  business: Business;
}

const ethnicityIcons: Record<string, string> = {
  'chinese': '🇨🇳',
  'japanese': '🇯🇵',
  'korean': '🇰🇷'
};

const categoryLabels: Record<string, string> = {
  'hotel': '🏨 Hotel',
  'cafe': '☕ Cafe',
  'restaurant': '🍜 Restaurant'
};

export default function BusinessCard({ business }: BusinessCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden">
      <div className="md:flex">
        {/* Image */}
        <div className="md:w-80 h-64 md:h-auto relative">
          <img
            src={business.photos[0] || '/placeholder.jpg'}
            alt={business.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {business.is_premium && (
            <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              ⭐ Featured
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex-1">
          <div className="flex items-start justify-between mb-3">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm text-gray-600">
                  {categoryLabels[business.category]}
                </span>
                <span className="text-sm px-3 py-1 bg-primary-100 text-primary-700 rounded-full font-semibold">
                  {ethnicityIcons[business.owner_ethnicity]} {business.owner_ethnicity.charAt(0).toUpperCase() + business.owner_ethnicity.slice(1)}-owned
                </span>
                {business.is_verified && (
                  <span className="text-sm text-green-600 font-semibold">✓ Verified</span>
                )}
              </div>
              <Link href={`/business/${business.slug}`}>
                <h3 className="text-2xl font-bold text-gray-900 hover:text-primary-500 transition-colors">
                  {business.name}
                </h3>
              </Link>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1 mb-1">
                <FiStar className="text-yellow-500 fill-current" />
                <span className="text-xl font-bold">{business.rating}</span>
              </div>
              <p className="text-sm text-gray-500">({business.review_count} reviews)</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-4">
            {business.short_description}
          </p>

          {/* Details */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-gray-600">
              <FiMapPin className="text-primary-500" />
              <span className="text-sm">{business.address}, {business.city}, {business.country}</span>
            </div>
            {business.phone && (
              <div className="flex items-center gap-2 text-gray-600">
                <FiPhone className="text-primary-500" />
                <span className="text-sm">{business.phone}</span>
              </div>
            )}
            {business.website && (
              <div className="flex items-center gap-2 text-gray-600">
                <FiGlobe className="text-primary-500" />
                <a href={business.website} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary-500">
                  Visit Website
                </a>
              </div>
            )}
          </div>

          {/* Price Range */}
          <div className="flex items-center justify-between">
            <div className="text-gray-600">
              <span className="font-semibold">Price: </span>
              <span className="text-primary-500 font-bold">{business.price_range}</span>
            </div>
            <Link
                  to={`/business/${business.slug}`}
              className="bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors font-semibold"
            >
              View Details →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
