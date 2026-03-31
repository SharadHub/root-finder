/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '@/lib/supabase';

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true
    async function load() {
      setLoading(true)
      const { data: posts } = await db.getBlogPosts(12)
      if (!alive) return
      setBlogPosts(posts || [])
      setLoading(false)
    }
    load()
    return () => {
      alive = false
    }
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500" />
          <p className="mt-4 text-gray-600">Loading blog posts...</p>
        </div>
      </div>
    )
  }

  if (blogPosts.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">No blog posts found</h1>
        <p>Check back later for more updates!</p>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            📝 Travel Guides & Cultural Insights
          </h1>
          <p className="text-xl text-gray-600">
            Expert tips for finding culturally connected businesses worldwide
          </p>
        </div>

        {/* Featured Post */}
        <Link to={`/blog/${blogPosts[0].slug}`} className="block mb-12">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto">
                <img
                  src={blogPosts[0].featured_image}
                  alt={blogPosts[0].title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold mb-3 w-fit">
                  Featured
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3 hover:text-primary-500">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-600 mb-4">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>📅 {blogPosts[0].published_at}</span>
                  <span>•</span>
                  <span>{blogPosts[0].read_time_minutes} min read</span>
                  <span>•</span>
                  <span>👁️ {blogPosts[0].view_count.toLocaleString()} views</span>
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* All Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
            >
              <div className="relative h-48">
                <img
                  src={post.featured_image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.categories.map((cat: string) => (
                    <span key={cat} className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {cat}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-500">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span>📅 {post.published_at}</span>
                  <span>•</span>
                  <span>{post.read_time_minutes} min</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  )
}
