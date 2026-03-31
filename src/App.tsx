import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

import HomePage from '@/app/page'
import DirectoryPage from '@/app/directory/page'
import BusinessPage from '@/app/business/[slug]/page'
import BlogPage from '@/app/blog/page'
import BlogPostPage from '@/app/blog/[slug]/page'
import AdminPage from '@/app/admin/page'

function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Page not found</h1>
        <p className="text-gray-600">The link you followed doesn&apos;t exist.</p>
      </div>
    </div>
  )
}

function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">About</h1>
        <p className="text-gray-700 leading-relaxed">
          RootFinder is a cultural travel directory showcasing hotels, cafes, and restaurants owned by
          Chinese, Japanese, and Korean communities worldwide.
        </p>
      </div>
    </div>
  )
}

function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact</h1>
        <p className="text-gray-700 leading-relaxed">
          For now, please create an issue in the repository. Once the backend is finalized, this page
          can be wired to Supabase.
        </p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/directory" element={<DirectoryPage />} />
          <Route path="/business/:slug" element={<BusinessPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/directory/:slug" element={<Navigate to="/directory" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

