'use client';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiFileText, FiImage, FiUsers, FiBarChart2, FiSettings } from 'react-icons/fi';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, verify with Supabase Auth
    if (email === 'admin@rootfinder.com' && password === 'demo') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials. Use: admin@rootfinder.com / demo');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <div className="flex justify-center">
              <span className="text-6xl">🌍</span>
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Admin Dashboard
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Sign in to manage your RootFinder website
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none rounded-t-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none rounded-b-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Sign in
              </button>
            </div>

            <div className="text-sm text-center text-gray-600">
              Demo: admin@rootfinder.com / demo
            </div>
          </form>
        </div>
      </div>
    );
  }

  // Dashboard Stats
  const stats = [
    { label: 'Total Businesses', value: '850', icon: FiHome, color: 'bg-blue-500' },
    { label: 'Blog Posts', value: '45', icon: FiFileText, color: 'bg-green-500' },
    { label: 'Total Reviews', value: '2,340', icon: FiUsers, color: 'bg-yellow-500' },
    { label: 'Monthly Visitors', value: '50,000', icon: FiBarChart2, color: 'bg-purple-500' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🌍</span>
              <span className="text-xl font-bold text-primary-500">RootFinder Admin</span>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/" className="text-gray-600 hover:text-gray-900">
                View Site →
              </Link>
              <button
                onClick={() => setIsAuthenticated(false)}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <stat.icon className="text-white" size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-xl hover:border-primary-500 hover:bg-primary-50 transition-colors">
              <FiHome className="text-primary-500 mb-2" size={32} />
              <span className="font-semibold text-gray-900">Add New Business</span>
            </button>
            <button className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-xl hover:border-primary-500 hover:bg-primary-50 transition-colors">
              <FiFileText className="text-primary-500 mb-2" size={32} />
              <span className="font-semibold text-gray-900">Write New Blog Post</span>
            </button>
            <button className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-xl hover:border-primary-500 hover:bg-primary-50 transition-colors">
              <FiImage className="text-primary-500 mb-2" size={32} />
              <span className="font-semibold text-gray-900">Upload Media</span>
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Businesses */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Businesses</h3>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-gray-200 last:border-0">
                  <div>
                    <p className="font-semibold text-gray-900">Business Name {i}</p>
                    <p className="text-sm text-gray-500">Tokyo, Japan • Hotel</p>
                  </div>
                  <button className="text-primary-500 hover:text-primary-600 text-sm font-semibold">
                    Edit →
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Blog Posts */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Blog Posts</h3>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-gray-200 last:border-0">
                  <div>
                    <p className="font-semibold text-gray-900">Blog Post Title {i}</p>
                    <p className="text-sm text-gray-500">Published • 1,234 views</p>
                  </div>
                  <button className="text-primary-500 hover:text-primary-600 text-sm font-semibold">
                    Edit →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-3">🚧 Admin Dashboard Under Construction</h3>
          <p className="text-blue-800 mb-4">
            The full admin dashboard with business and blog management is currently being built. 
            You can add these features by creating the following files:
          </p>
          <ul className="space-y-2 text-sm text-blue-700">
            <li>• <code className="bg-blue-100 px-2 py-1 rounded">/src/app/admin/businesses/page.tsx</code> - Manage all businesses</li>
            <li>• <code className="bg-blue-100 px-2 py-1 rounded">/src/app/admin/businesses/new/page.tsx</code> - Add new business form</li>
            <li>• <code className="bg-blue-100 px-2 py-1 rounded">/src/app/admin/blog/page.tsx</code> - Manage blog posts</li>
            <li>• <code className="bg-blue-100 px-2 py-1 rounded">/src/app/admin/blog/new/page.tsx</code> - Write new blog post</li>
            <li>• <code className="bg-blue-100 px-2 py-1 rounded">/src/app/api/**</code> - API routes for CRUD operations</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
