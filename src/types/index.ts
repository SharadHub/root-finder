// TypeScript type definitions for RootFinder

export interface Business {
  id: string;
  name: string;
  slug: string;
  category: 'hotel' | 'cafe' | 'restaurant';
  owner_ethnicity: 'chinese' | 'japanese' | 'korean' | 'other';
  city_id?: string;
  city: string;
  country: string;
  address?: string;
  lat?: number;
  lng?: number;
  phone?: string;
  website?: string;
  email?: string;
  short_description?: string;
  description?: string;
  photos: string[];
  price_range?: '$' | '$$' | '$$$' | '$$$$';
  is_verified: boolean;
  is_premium: boolean;
  is_featured: boolean;
  rating: number;
  review_count: number;
  view_count: number;
  booking_url?: string;
  meta_title?: string;
  meta_description?: string;
  focus_keyword?: string;
  status: 'draft' | 'published' | 'archived';
  created_at: string;
  updated_at: string;
}

export interface Review {
  id: string;
  business_id: string;
  user_name: string;
  user_email?: string;
  rating: number;
  comment?: string;
  helpful_count: number;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  featured_image?: string;
  excerpt?: string;
  content: string;
  author: string;
  categories: string[];
  tags: string[];
  is_featured: boolean;
  view_count: number;
  read_time_minutes: number;
  meta_title?: string;
  meta_description?: string;
  focus_keyword?: string;
  status: 'draft' | 'published' | 'archived';
  published_at?: string;
  created_at: string;
  updated_at: string;
}

export interface City {
  id: string;
  name: string;
  country: string;
  slug: string;
  description?: string;
  photo_url?: string;
  business_count: number;
  created_at: string;
  updated_at: string;
}

export interface EmailSignup {
  id: string;
  email: string;
  interested_city?: string;
  created_at: string;
}

export interface SearchFilters {
  query?: string;
  city?: string;
  category?: string;
  ethnicity?: string;
  priceRange?: string[];
  rating?: number;
  page?: number;
  limit?: number;
}
