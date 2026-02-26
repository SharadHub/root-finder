'use client';

interface DirectoryFiltersProps {
  filters: any;
  onFilterChange: (filters: any) => void;
}

export default function DirectoryFilters({ filters, onFilterChange }: DirectoryFiltersProps) {
  const categories = [
    { value: 'hotel', label: '🏨 Hotels' },
    { value: 'cafe', label: '☕ Cafes' },
    { value: 'restaurant', label: '🍜 Restaurants' }
  ];

  const ethnicities = [
    { value: 'chinese', label: '🇨🇳 Chinese' },
    { value: 'japanese', label: '🇯🇵 Japanese' },
    { value: 'korean', label: '🇰🇷 Korean' }
  ];

  const priceRanges = ['$', '$$', '$$$', '$$$$'];

  return (
    <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Filters</h2>

      {/* Category Filter */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-3">Category</h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label key={cat.value} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="category"
                value={cat.value}
                checked={filters.category === cat.value}
                onChange={(e) => onFilterChange({ category: e.target.value })}
                className="w-4 h-4 text-primary-500 focus:ring-primary-500"
              />
              <span className="ml-2 text-gray-700">{cat.label}</span>
            </label>
          ))}
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="category"
              value=""
              checked={filters.category === ''}
              onChange={(e) => onFilterChange({ category: '' })}
              className="w-4 h-4 text-primary-500 focus:ring-primary-500"
            />
            <span className="ml-2 text-gray-700">All Categories</span>
          </label>
        </div>
      </div>

      {/* Ethnicity Filter */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-3">Owner Ethnicity</h3>
        <div className="space-y-2">
          {ethnicities.map((eth) => (
            <label key={eth.value} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="ethnicity"
                value={eth.value}
                checked={filters.ethnicity === eth.value}
                onChange={(e) => onFilterChange({ ethnicity: e.target.value })}
                className="w-4 h-4 text-primary-500 focus:ring-primary-500"
              />
              <span className="ml-2 text-gray-700">{eth.label}</span>
            </label>
          ))}
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="ethnicity"
              value=""
              checked={filters.ethnicity === ''}
              onChange={(e) => onFilterChange({ ethnicity: '' })}
              className="w-4 h-4 text-primary-500 focus:ring-primary-500"
            />
            <span className="ml-2 text-gray-700">All</span>
          </label>
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-3">Price Range</h3>
        <div className="space-y-2">
          {priceRanges.map((price) => (
            <label key={price} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                value={price}
                checked={filters.priceRange.includes(price)}
                onChange={(e) => {
                  const newPriceRange = e.target.checked
                    ? [...filters.priceRange, price]
                    : filters.priceRange.filter((p: string) => p !== price);
                  onFilterChange({ priceRange: newPriceRange });
                }}
                className="w-4 h-4 text-primary-500 rounded focus:ring-primary-500"
              />
              <span className="ml-2 text-gray-700">{price}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Rating Filter */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-3">Minimum Rating</h3>
        <select
          value={filters.rating}
          onChange={(e) => onFilterChange({ rating: Number(e.target.value) })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <option value="0">Any Rating</option>
          <option value="3">3+ Stars</option>
          <option value="4">4+ Stars</option>
          <option value="4.5">4.5+ Stars</option>
        </select>
      </div>

      {/* Clear Filters */}
      <button
        onClick={() => onFilterChange({
          category: '',
          ethnicity: '',
          priceRange: [],
          rating: 0
        })}
        className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
      >
        Clear All Filters
      </button>
    </div>
  );
}
