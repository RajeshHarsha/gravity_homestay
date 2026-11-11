'use client';

import { motion } from 'framer-motion';
import GalleryFrame from './GalleryFrame';

const galleryItems = [
  { title: 'Sunset View Suite', image: '/hero-bg.webp' },
  { title: 'Open and spacious Terrace', image: 'https://assets.architecturaldigest.in/photos/653101334f57048204da8c23/16:9/w_1616,h_909,c_limit/Featured%20-%201620%20x%201080.png' },
  // { title: 'Luxury Spa' },
  // { title: 'Infinity Pool' },
  { title: 'Private Balcony', image: 'https://cdn.mos.cms.futurecdn.net/KwhqEapsam8DHhxCDzQk9K-952-80.jpg.webp' },
  // { title: 'Heritage Lobby' },
  // { title: 'Night View' },
  { title: 'Garden Path', image: 'https://st.hzcdn.com/simgs/pictures/decks/dolores-park-garden-img~1001cc8105c4f28f_14-1437-1-338f3d2.jpg' },
];

export default function GallerySection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 px-4 w-full overflow-hidden">
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
          className="text-center mb-8 md:mb-10"
        >
          <h2 id="gallery-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-text-primary mb-3">
            Visual <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-text-secondary max-w-2xl mx-auto px-4">
            Explore the spaces and experiences that make Gravity Homestays truly exceptional.
          </p>
        </motion.div>

        {/* Mobile: horizontal scroll slider */}
        <div className="sm:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-pl-4 pb-4 pt-1 -mx-4 px-4 scrollbar-hide">
          {galleryItems.map((item, index) => (
            <div key={index} className="snap-start flex-shrink-0 w-[82vw] max-w-[320px]">
              <GalleryFrame {...item} index={index} />
            </div>
          ))}
          <div className="flex-shrink-0 w-1" />
        </div>

        {/* Tablet+: grid */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {galleryItems.map((item, index) => (
            <GalleryFrame key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
