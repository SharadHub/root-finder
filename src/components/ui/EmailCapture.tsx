'use client';

import { useState } from 'react';

export default function EmailCapture() {
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // In production, call API to save to Supabase
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      setEmail('');
      setCity('');
    }, 1000);
  };

  if (submitted) {
    return (
      <section className="py-16 bg-gradient-to-br from-primary-500 to-secondary-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
          <p className="text-xl text-primary-100">
            We'll notify you when we launch in your city.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-primary-500 to-secondary-500 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get Notified When We Launch in Your City
        </h2>
        <p className="text-xl text-primary-100 mb-8">
          Join 15,000+ travelers staying updated
        </p>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <option value="">Select City</option>
              <option value="tokyo">Tokyo</option>
              <option value="kyoto">Kyoto</option>
              <option value="honolulu">Honolulu</option>
              <option value="osaka">Osaka</option>
              <option value="los-angeles">Los Angeles</option>
              <option value="new-york">New York</option>
              <option value="other">Other</option>
            </select>
            <button
              type="submit"
              disabled={loading}
              className="bg-white text-primary-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50"
            >
              {loading ? 'Submitting...' : 'Notify Me →'}
            </button>
          </div>
          <p className="text-sm text-primary-100 mt-4">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </form>
      </div>
    </section>
  );
}
