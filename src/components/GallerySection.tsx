'use client';

import { motion } from 'framer-motion';
import GalleryFrame from './GalleryFrame';

const galleryItems = [
  { title: 'Sunset View Suite' },
  { title: 'Garden Terrace' },
  { title: 'Fine Dining Restaurant' },
  // { title: 'Luxury Spa' },
  // { title: 'Infinity Pool' },
  { title: 'Private Balcony' },
  // { title: 'Heritage Lobby' },
  // { title: 'Night View' },
  { title: 'Garden Path' },
];

export default function GallerySection() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-bg via-secondary-bg/20 to-primary-bg" />
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] md:w-[600px] h-[300px] sm:h-[500px] md:h-[600px] bg-glow-soft/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-text-primary mb-4">
            Visual <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-text-secondary max-w-2xl mx-auto px-4">
            Explore the spaces and experiences that make Gravity Homestays truly exceptional.
          </p>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {galleryItems.map((item, index) => (
            <GalleryFrame key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
