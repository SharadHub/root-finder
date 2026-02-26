import Hero from '@/components/ui/Hero';
import FeaturedCities from '@/components/ui/FeaturedCities';
import HowItWorks from '@/components/ui/HowItWorks';
import FeaturedBusinesses from '@/components/ui/FeaturedBusinesses';
import LatestBlogPosts from '@/components/ui/LatestBlogPosts';
import Stats from '@/components/ui/Stats';
import EmailCapture from '@/components/ui/EmailCapture';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCities />
      <HowItWorks />
      <Stats />
      <FeaturedBusinesses />
      <LatestBlogPosts />
      <EmailCapture />
    </>
  );
}
