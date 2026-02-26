'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX, FiSearch } from 'react-icons/fi';

import { useRouter } from 'next/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/directory?query=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl">🌏</span>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
                RootFinder
              </span>
            </Link>

            {/* Desktop Search */}
            <form onSubmit={handleSearch} className="hidden lg:flex items-center bg-gray-100 px-3 py-1.5 rounded-full w-80">
              <FiSearch className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search hotels, cafes..."
                className="bg-transparent border-none focus:ring-0 text-sm w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/directory" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">
              Directory
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">
              About
            </Link>
            <Link
              href="/admin"
              className="bg-primary-500 text-white px-5 py-2.5 rounded-full hover:bg-primary-600 font-semibold transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              List Your Business
            </Link>
          </div>

          {/* Mobile buttons */}
          <div className="flex items-center gap-4 md:hidden">
            <button className="text-gray-700"><FiSearch size={22} /></button>
            <button
              className="text-gray-700 shadow-sm p-1 rounded-md"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="flex items-center bg-gray-100 px-3 py-2 rounded-lg mx-2">
              <FiSearch className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search hotels, cafes..."
                className="bg-transparent border-none focus:ring-0 text-sm w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>

            <div className="space-y-1">
              <Link
                href="/directory"
                className="block text-gray-700 hover:text-primary-500 py-2 px-3 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Directory
              </Link>
              <Link
                href="/blog"
                className="block text-gray-700 hover:text-primary-500 py-2 px-3 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="block text-gray-700 hover:text-primary-500 py-2 px-3 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/admin"
                className="block bg-primary-500 text-white px-4 py-3 rounded-xl text-center font-bold shadow-md mx-2 mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                List Your Business
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
