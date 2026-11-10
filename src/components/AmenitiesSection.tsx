'use client';

import { motion } from 'framer-motion';
import AmenityTile from './AmenityTile';
import { Wifi, Car, Utensils, Tv, Wind, Droplets, Video, Zap, Navigation } from 'lucide-react';

const amenities = [
  {
    icon: Wifi,
    title: 'High-Speed WiFi',
    description: 'Complimentary high-speed internet throughout the property for seamless connectivity.',
  },
  {
    icon: Navigation,
    title: 'Elevator',
    description: 'Easy access to all floors with modern elevator facilities.',
  },
  {
    icon: Car,
    title: 'Parking',
    description: 'Secure parking space available for guests and visitors.',
  },
  {
    icon: Tv,
    title: 'TV',
    description: 'Smart TV with cable/satellite channels for your entertainment.',
  },
  {
    icon: Wind,
    title: 'AC',
    description: 'Air-conditioned rooms for a comfortable stay in all seasons.',
  },
  {
    icon: Droplets,
    title: 'Geyser',
    description: 'Hot water available 24/7 with modern geyser facilities.',
  },
  {
    icon: Utensils,
    title: 'Kitchen Facilities',
    description: 'Fully equipped kitchen for your cooking needs.',
  },
  {
    icon: Video,
    title: '24/7 CCTV',
    description: 'Round-the-clock CCTV surveillance for enhanced security.',
  },
  {
    icon: Zap,
    title: 'Power Back Up',
    description: 'Uninterrupted power supply with backup generator.',
  },
];

export default function AmenitiesSection() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 px-4 w-full overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-bg via-secondary-bg/30 to-primary-bg" />
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
          <h2 id="amenities-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-text-primary mb-4">
            Premium <span className="text-gradient">Amenities</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-text-secondary max-w-2xl mx-auto px-4">
            Every detail has been carefully curated to ensure your stay is nothing short of extraordinary.
          </p>
        </motion.div>

        {/* Amenities grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch">
          {amenities.map((amenity, index) => (
            <AmenityTile key={index} {...amenity} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
