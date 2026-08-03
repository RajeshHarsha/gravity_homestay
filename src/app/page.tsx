'use client';

import dynamic from 'next/dynamic';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import RoomsSection from '@/components/RoomsSection';
import AmenitiesSection from '@/components/AmenitiesSection';
import GallerySection from '@/components/GallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import EnquirySection from '@/components/EnquirySection';
import Footer from '@/components/Footer';

// Dynamically import 3D components to avoid SSR issues
const Background3D = dynamic(() => import('@/components/Background3D'), {
  ssr: false,
  loading: () => null,
});

const SmoothScroll = dynamic(() => import('@/components/SmoothScroll'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-primary-bg">
      <SmoothScroll />
      <Navigation />
      <Background3D />
      
      {/* Hero Section */}
      <section id="home" className="relative">
        <Hero />
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="relative">
        <RoomsSection />
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="relative">
        <AmenitiesSection />
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="relative">
        <GallerySection />
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="relative">
        <TestimonialsSection />
      </section>

      {/* Enquiry Section */}
      <section id="contact" className="relative">
        <EnquirySection />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
