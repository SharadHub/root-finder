export default function Stats() {
  const stats = [
    { number: '3,500+', label: 'Verified Businesses' },
    { number: '12,000+', label: 'Traveler Reviews' },
    { number: '50+', label: 'Cities Worldwide' },
    { number: '95%', label: 'Satisfaction Rate' }
  ];

  return (
    <section className="py-16 bg-primary-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-primary-100 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
