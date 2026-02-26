import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'RootFinder - Find Hotels, Cafes & Restaurants Owned by Your Community',
  description: 'Discover Chinese, Japanese, and Korean-owned businesses worldwide. Search 3,500+ verified hotels, cafes, and restaurants in 50+ cities.',
  keywords: ['travel directory', 'ethnic businesses', 'Chinese hotels', 'Japanese restaurants', 'Korean cafes'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ID"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />

        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-YOUR_ID`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YOUR_ID');
          `}
        </Script>
      </head>
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
