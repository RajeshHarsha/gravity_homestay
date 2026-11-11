import Hero from '@/components/Hero';
import RoomsSection from '@/components/RoomsSection';
import AmenitiesSection from '@/components/AmenitiesSection';
import GallerySection from '@/components/GallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import EnquirySection from '@/components/EnquirySection';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import ClientComponents from '@/components/ClientComponents';

export default function Home() {
  return (
    <main className="min-h-screen bg-primary-bg w-full mx-auto">
      <StructuredData />
      <ClientComponents />

      {/* Hero Section */}
      <section id="home" className="relative w-full" aria-label="Hero section with main call to action">
        <Hero />
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="relative w-full scroll-mt-20 sm:scroll-mt-24" aria-labelledby="rooms-heading">
        <RoomsSection />
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="relative w-full scroll-mt-20 sm:scroll-mt-24" aria-labelledby="amenities-heading">
        <AmenitiesSection />
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="relative w-full scroll-mt-20 sm:scroll-mt-24" aria-labelledby="gallery-heading">
        <GallerySection />
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="relative w-full scroll-mt-20 sm:scroll-mt-24" aria-labelledby="reviews-heading">
        <TestimonialsSection />
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Enquiry Section */}
      <section id="enquiry" className="relative w-full scroll-mt-20 sm:scroll-mt-24" aria-labelledby="enquiry-heading">
        <EnquirySection />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
