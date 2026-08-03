'use client';

import { motion } from 'framer-motion';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    name: 'Priya Sharma',
    rating: 5,
    text: 'An absolutely magical experience. The attention to detail and warm hospitality made our anniversary celebration unforgettable. The sunset views are breathtaking.',
  },
  {
    name: 'Santhanu Bose',
    rating: 5,
    text: 'Gravity Homestays redefines luxury. Every moment felt curated with care. The spa treatments and fine dining exceeded all expectations. Truly world-class.',
  },
  {
    name: 'Ananya Patel',
    rating: 5,
    text: 'The perfect blend of modern comfort and traditional elegance. The garden suite was our sanctuary. We left feeling refreshed and already planning our return.',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 px-4 w-full overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-bg via-secondary-bg/50 to-primary-bg" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] bg-accent-gold/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 id="reviews-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-text-primary mb-4">
            Guest <span className="text-gradient">Stories</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-text-secondary max-w-2xl mx-auto px-4">
            Hear from our guests who have experienced the warmth and luxury of Gravity Homestays.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
