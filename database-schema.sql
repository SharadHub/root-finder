-- RootFinder Database Schema
-- Copy this SQL and run in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CITIES TABLE
CREATE TABLE cities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(100) NOT NULL,
  country VARCHAR(100) NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  description TEXT,
  photo_url VARCHAR(500),
  business_count INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- BUSINESSES TABLE
CREATE TABLE businesses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  category VARCHAR(50) NOT NULL, -- hotel, cafe, restaurant
  owner_ethnicity VARCHAR(50) NOT NULL, -- chinese, japanese, korean
  city_id UUID REFERENCES cities(id),
  city VARCHAR(100),
  country VARCHAR(100),
  address TEXT,
  lat DECIMAL(10, 8),
  lng DECIMAL(11, 8),
  phone VARCHAR(50),
  website VARCHAR(255),
  email VARCHAR(255),
  short_description VARCHAR(300),
  description TEXT,
  photos JSONB DEFAULT '[]', -- array of image URLs
  price_range VARCHAR(10), -- $, $$, $$$, $$$$
  is_verified BOOLEAN DEFAULT false,
  is_premium BOOLEAN DEFAULT false,
  is_featured BOOLEAN DEFAULT false,
  rating DECIMAL(2, 1) DEFAULT 0,
  review_count INT DEFAULT 0,
  view_count INT DEFAULT 0,
  booking_url VARCHAR(500),
  meta_title VARCHAR(100),
  meta_description VARCHAR(200),
  focus_keyword VARCHAR(100),
  status VARCHAR(20) DEFAULT 'draft', -- draft, published, archived
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- REVIEWS TABLE
CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_id UUID REFERENCES businesses(id) ON DELETE CASCADE,
  user_name VARCHAR(100) NOT NULL,
  user_email VARCHAR(255),
  rating INT CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  helpful_count INT DEFAULT 0,
  status VARCHAR(20) DEFAULT 'pending', -- pending, approved, rejected
  created_at TIMESTAMP DEFAULT NOW()
);

-- BLOG POSTS TABLE
CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  featured_image VARCHAR(500),
  excerpt TEXT,
  content TEXT NOT NULL,
  author VARCHAR(100) DEFAULT 'Admin',
  categories JSONB DEFAULT '[]', -- array of category strings
  tags JSONB DEFAULT '[]', -- array of tag strings
  is_featured BOOLEAN DEFAULT false,
  view_count INT DEFAULT 0,
  read_time_minutes INT DEFAULT 5,
  meta_title VARCHAR(100),
  meta_description VARCHAR(200),
  focus_keyword VARCHAR(100),
  status VARCHAR(20) DEFAULT 'draft', -- draft, published, archived
  published_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- EMAIL SIGNUPS TABLE
CREATE TABLE email_signups (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  interested_city VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW()
);

-- ADMIN USERS TABLE (simple authentication)
CREATE TABLE admin_users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(100),
  role VARCHAR(20) DEFAULT 'admin',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX idx_businesses_city ON businesses(city);
CREATE INDEX idx_businesses_category ON businesses(category);
CREATE INDEX idx_businesses_ethnicity ON businesses(owner_ethnicity);
CREATE INDEX idx_businesses_status ON businesses(status);
CREATE INDEX idx_businesses_slug ON businesses(slug);
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_blog_posts_status ON blog_posts(status);
CREATE INDEX idx_reviews_business ON reviews(business_id);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
   NEW.updated_at = NOW();
   RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add triggers for updated_at
CREATE TRIGGER update_businesses_updated_at BEFORE UPDATE ON businesses
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON blog_posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_cities_updated_at BEFORE UPDATE ON cities
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- SAMPLE DATA
-- Add sample cities
INSERT INTO cities (name, country, slug, description, business_count) VALUES
('Tokyo', 'Japan', 'tokyo', 'Japan''s bustling capital', 850),
('Kyoto', 'Japan', 'kyoto', 'Historic cultural center', 420),
('Honolulu', 'USA', 'honolulu', 'Hawaiian paradise', 380);

-- Add sample business
INSERT INTO businesses (
  name, slug, category, owner_ethnicity, city, country,
  address, lat, lng, phone, website,
  short_description, description, photos, price_range,
  rating, review_count, status, is_verified, is_premium
) VALUES (
  'Golden Dragon Hotel',
  'golden-dragon-hotel-kyoto',
  'hotel',
  'chinese',
  'Kyoto',
  'Japan',
  '123 Gion District, Higashiyama Ward',
  35.0116,
  135.7681,
  '+81-75-123-4567',
  'https://goldendragonkyoto.com',
  'Traditional Chinese-owned hotel in historic Gion district',
  'Located in the heart of Kyoto, Golden Dragon Hotel offers Mandarin-speaking staff, traditional Chinese breakfast, and easy access to major temples.',
  '["https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800"]',
  '$$',
  4.5,
  124,
  'published',
  true,
  true
);

-- Add sample blog post
INSERT INTO blog_posts (
  title, slug, featured_image, excerpt, content,
  categories, tags, status, published_at, read_time_minutes
) VALUES (
  '10 Best Chinese-Owned Hotels in Kyoto',
  'best-chinese-hotels-kyoto-2026',
  'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800',
  'Complete guide to Mandarin-friendly accommodations in Kyoto',
  'Full blog content here...',
  '["Kyoto Guide", "Hotels"]',
  '["kyoto", "chinese hotels", "japan travel"]',
  'published',
  NOW(),
  8
);

-- Add sample reviews
INSERT INTO reviews (business_id, user_name, rating, comment, status) VALUES
(
  (SELECT id FROM businesses WHERE slug = 'golden-dragon-hotel-kyoto'),
  'Wei Chen',
  5,
  'Perfect for Chinese travelers! Staff spoke Mandarin fluently.',
  'approved'
);
