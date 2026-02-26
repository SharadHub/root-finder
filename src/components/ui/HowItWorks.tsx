export default function HowItWorks() {
  const steps = [
    {
      icon: '🔍',
      title: 'Search by Ethnicity',
      description: 'Filter hotels, cafes, and restaurants by owner ethnicity—Chinese, Japanese, Korean, and more.'
    },
    {
      icon: '⭐',
      title: 'Read Community Reviews',
      description: 'See authentic feedback from travelers like you. Know which places truly cater to cultural needs.'
    },
    {
      icon: '💰',
      title: 'Book with Confidence',
      description: 'Get exclusive deals and book directly through trusted partners. Save 10-20% on featured listings.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600">
            Find culturally connected businesses in three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-100 text-4xl mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
