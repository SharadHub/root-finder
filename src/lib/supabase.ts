// Supabase client configuration
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Fallback for build time if keys are missing
if (!supabaseUrl || !supabaseAnonKey || supabaseUrl.includes('yourproject')) {
  console.warn('⚠️ Supabase credentials missing. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local');
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder'
);

// Helper functions for database operations
export const db = {
  // Businesses
  async getBusinesses(filters: any = {}) {
    let query = supabase
      .from('businesses')
      .select('*')
      .eq('status', 'published');

    if (filters.city) query = query.eq('city', filters.city);
    if (filters.category) query = query.eq('category', filters.category);
    if (filters.ethnicity) query = query.eq('owner_ethnicity', filters.ethnicity);
    if (filters.rating) query = query.gte('rating', filters.rating);

    const { data, error } = await query.order('is_featured', { ascending: false });
    return { data, error };
  },

  async getBusinessBySlug(slug: string) {
    const { data, error } = await supabase
      .from('businesses')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published')
      .single();
    return { data, error };
  },

  async incrementBusinessViews(id: string) {
    const { error } = await supabase.rpc('increment_view_count', {
      row_id: id,
      table_name: 'businesses'
    });
    return { error };
  },

  // Blog Posts
  async getBlogPosts(limit = 10) {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('status', 'published')
      .order('published_at', { ascending: false })
      .limit(limit);
    return { data, error };
  },

  async getBlogPostBySlug(slug: string) {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published')
      .single();
    return { data, error };
  },

  // Cities
  async getCities() {
    const { data, error } = await supabase
      .from('cities')
      .select('*')
      .order('business_count', { ascending: false });
    return { data, error };
  },

  // Reviews
  async getReviewsByBusiness(businessId: string) {
    const { data, error } = await supabase
      .from('reviews')
      .select('*')
      .eq('business_id', businessId)
      .eq('status', 'approved')
      .order('created_at', { ascending: false });
    return { data, error };
  },

  // Email Signups
  async addEmailSignup(email: string, city?: string) {
    const { data, error } = await supabase
      .from('email_signups')
      .insert([{ email, interested_city: city }]);
    return { data, error };
  }
};
