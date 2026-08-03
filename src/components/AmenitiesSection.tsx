'use client';

import { motion } from 'framer-motion';
import AmenityTile from './AmenityTile';
import { Wifi, Car, Coffee, Utensils, Dumbbell, Heart, Shield, Clock } from 'lucide-react';

const amenities = [
  {
    icon: Wifi,
    title: 'High-Speed WiFi',
    description: 'Complimentary high-speed internet throughout the property for seamless connectivity.',
  },
  // {
  //   icon: Car,
  //   title: 'Valet Parking',
  //   description: 'Secure valet parking service available 24/7 for your convenience.',
  // },
  {
    icon: Coffee,
    title: 'In-Room Dining',
    description: 'Gourmet dining delivered to your room anytime, crafted by our expert chefs.',
  },
  // {
  //   icon: Utensils,
  //   title: 'Fine Dining',
  //   description: 'Experience exquisite cuisine at our award-winning on-site restaurant.',
  // },
  // {
  //   icon: Dumbbell,
  //   title: 'Fitness Center',
  //   description: 'State-of-the-art gym equipment for your wellness routine.',
  // },
  // {
  //   icon: Heart,
  //   title: 'Luxury Spa',
  //   description: 'Rejuvenate with our premium spa treatments and therapies.',
  // },
  {
    icon: Shield,
    title: '24/7 Security',
    description: 'Round-the-clock security ensuring your safety and peace of mind.',
  },
  {
    icon: Clock,
    title: 'Concierge Service',
    description: 'Personal concierge assistance for all your needs and requests.',
  },
];

export default function AmenitiesSection() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-bg via-secondary-bg/30 to-primary-bg" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] bg-accent-gold/5 rounded-full blur-3xl" />
      
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
