import { Link } from 'react-router-dom';

const cities = [
  {
    name: 'Tokyo',
    country: 'Japan',
    count: 850,
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800',
    slug: 'tokyo'
  },
  {
    name: 'Kyoto',
    country: 'Japan',
    count: 420,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800',
    slug: 'kyoto'
  },
  {
    name: 'Honolulu',
    country: 'USA',
    count: 380,
    image: 'https://images.unsplash.com/photo-1542259009477-d625272157b7?w=800',
    slug: 'honolulu'
  },
  {
    name: 'Osaka',
    country: 'Japan',
    count: 310,
    image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800',
    slug: 'osaka'
  },
  {
    name: 'Los Angeles',
    country: 'USA',
    count: 280,
    image: 'https://images.unsplash.com/photo-1534190239940-9ba8944ea261?w=800',
    slug: 'los-angeles'
  },
  {
    name: 'New York',
    country: 'USA',
    count: 250,
    image: 'https://images.unsplash.com/photo-1522083165195-3424ed129620?w=800',
    slug: 'new-york'
  },
];

export default function FeaturedCities() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            📍 Popular Destinations
          </h2>
          <p className="text-lg text-gray-600">
            Explore businesses in our most popular cities
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city) => (
            <Link
              key={city.slug}
              to={`/directory?city=${city.slug}`}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <img
                  src={city.image}
                  alt={city.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{city.name}</h3>
                  <p className="text-sm text-gray-200">{city.country}</p>
                  <p className="mt-2 text-sm font-semibold">{city.count} listings</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
