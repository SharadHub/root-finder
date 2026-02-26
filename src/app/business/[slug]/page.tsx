import Image from 'next/image';
import { FiStar, FiMapPin, FiPhone, FiGlobe, FiMail } from 'react-icons/fi';
import { db } from '@/lib/supabase';
import { notFound } from 'next/navigation';

export default async function BusinessPage({ params }: { params: { slug: string } }) {
  const { data: business, error } = await db.getBusinessBySlug(params.slug);

  if (!business || error) {
    notFound();
  }

  const { data: reviews = [] } = await db.getReviewsByBusiness(business.id);

  const ethnicityIcon = business.owner_ethnicity === 'chinese' ? '🇨🇳' : business.owner_ethnicity === 'japanese' ? '🇯🇵' : '🇰🇷';

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Photo Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="relative h-96 md:h-full">
            {business.photos?.[0] && (
              <Image
                src={business.photos[0]}
                alt={business.name}
                fill
                className="object-cover rounded-xl"
              />
            )}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {business.photos?.slice(1, 4).map((photo: string, index: number) => (
              <div key={index} className="relative h-44">
                <Image
                  src={photo}
                  alt={`${business.name} ${index + 2}`}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            ))}
            <button className="relative h-44 bg-gray-900 bg-opacity-50 rounded-xl flex items-center justify-center text-white font-semibold hover:bg-opacity-70 transition-opacity">
              View All Photos
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                      {ethnicityIcon} {business.owner_ethnicity.charAt(0).toUpperCase() + business.owner_ethnicity.slice(1)}-owned
                    </span>
                    {business.is_verified && (
                      <span className="text-green-600 font-semibold text-sm">✓ Verified</span>
                    )}
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {business.name}
                  </h1>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FiMapPin className="text-primary-500" />
                    <span>{business.address}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 mb-1">
                    <FiStar className="text-yellow-500 fill-current" size={24} />
                    <span className="text-2xl font-bold">{business.rating}</span>
                  </div>
                  <p className="text-sm text-gray-500">({business.review_count} reviews)</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
              <div className="prose max-w-none">
                {business.description?.split('\n\n').map((paragraph: string, index: number) => (
                  <p key={index} className="text-gray-600 mb-4">{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">📍 Location</h2>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center text-gray-500">
                Google Maps will be embedded here
                <br />
                Lat: {business.lat}, Lng: {business.lng}
              </div>
              <p className="mt-4 text-gray-600">{business.address}</p>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">⭐ Reviews ({business.review_count})</h2>

              {/* Add Review Form Placeholder */}
              <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                <h3 className="font-semibold mb-2">Write a Review</h3>
                <p className="text-sm text-gray-600 mb-4">Share your experience with the community!</p>
                <div className="flex gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map(i => <FiStar key={i} className="text-gray-300 cursor-pointer hover:text-yellow-500" size={20} />)}
                </div>
                <textarea className="w-full p-2 border rounded-md mb-2" placeholder="Tell us more..." rows={3}></textarea>
                <button className="bg-primary-500 text-white px-4 py-2 rounded-md text-sm font-semibold opacity-50 cursor-not-allowed">
                  Submit Review (Sign in Required)
                </button>
              </div>

              <div className="space-y-6">
                {(reviews && reviews.length > 0) ? (
                  reviews.map((review: any) => (
                    <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center font-semibold text-primary-700">
                            {review.user_name?.charAt(0) || 'U'}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{review.user_name}</p>
                            <p className="text-sm text-gray-500">{review.created_at ? new Date(review.created_at).toLocaleDateString() : 'Recent'}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <FiStar
                              key={i}
                              className={i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}
                              size={16}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700 mb-2">{review.comment}</p>
                      <button className="text-sm text-gray-500 hover:text-gray-700">
                        👍 Helpful ({review.helpful_count || 0})
                      </button>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 italic">No reviews yet. Be the first to review!</p>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-2">Price Range</p>
                <p className="text-2xl font-bold text-primary-500">{business.price_range}</p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                {business.phone && (
                  <a href={`tel:${business.phone}`} className="flex items-center gap-3 text-gray-700 hover:text-primary-500">
                    <FiPhone className="text-primary-500" />
                    <span>{business.phone}</span>
                  </a>
                )}
                {business.website && (
                  <a href={business.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-primary-500">
                    <FiGlobe className="text-primary-500" />
                    <span>Visit Website</span>
                  </a>
                )}
                {business.email && (
                  <a href={`mailto:${business.email}`} className="flex items-center gap-3 text-gray-700 hover:text-primary-500">
                    <FiMail className="text-primary-500" />
                    <span>Email</span>
                  </a>
                )}
              </div>

              {/* Booking Buttons */}
              <div className="space-y-3">
                <a
                  href={business.booking_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-primary-500 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
                >
                  Book on Booking.com →
                </a>
                <a
                  href="#"
                  className="block w-full bg-secondary-500 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-secondary-600 transition-colors"
                >
                  Check Prices on Agoda →
                </a>
              </div>

              <p className="text-xs text-gray-500 text-center mt-4">
                We may earn a commission from bookings
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
