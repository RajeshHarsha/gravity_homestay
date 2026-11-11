'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wifi, Car, Utensils, Tv, Wind, Droplets, Video, Zap, Navigation, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const amenities = [
  {
    icon: Wifi,
    title: 'High-Speed WiFi',
    description: 'Complimentary high-speed internet throughout the property.',
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
    description: 'Smart TV with cable/satellite channels for entertainment.',
  },
  {
    icon: Wind,
    title: 'AC',
    description: 'Air-conditioned rooms for a comfortable stay.',
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
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAmenity = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="relative py-8 sm:py-10 md:py-12 px-4 w-full overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-bg via-secondary-bg/30 to-primary-bg" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] bg-accent-gold/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 id="amenities-heading" className="text-2xl sm:text-3xl md:text-4xl font-light text-text-primary mb-2">
            Premium <span className="text-gradient">Amenities</span>
          </h2>
          <p className="text-xs sm:text-sm text-text-secondary max-w-xl mx-auto px-4">
            Every detail has been carefully curated to ensure your stay is nothing short of extraordinary.
          </p>
          <p className="text-[11px] sm:text-xs text-accent-gold/80 mt-1.5 font-light">
            Tap any amenity to view details
          </p>
        </motion.div>

        {/* Single unified amenities card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border-2 border-navy rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl shadow-accent-gold/5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 items-start">
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon;
              const isExpanded = expandedIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03, duration: 0.4 }}
                >
                  <button
                    type="button"
                    onClick={() => toggleAmenity(index)}
                    aria-expanded={isExpanded}
                    className={cn(
                      "w-full text-left p-2.5 sm:p-3 rounded-xl border transition-all duration-300 group cursor-pointer",
                      isExpanded
                        ? "bg-secondary-bg/60 border-accent-gold/40 shadow-sm"
                        : "hover:bg-secondary-bg/40 border-transparent hover:border-accent-gold/20"
                    )}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                        <div
                          className={cn(
                            "w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-all duration-300 flex-shrink-0",
                            isExpanded
                              ? "bg-accent-gold text-primary-bg"
                              : "bg-accent-gold/10 border border-accent-gold/20 text-accent-gold group-hover:bg-accent-gold group-hover:text-primary-bg"
                          )}
                        >
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <h3
                          className={cn(
                            "text-xs sm:text-sm md:text-base font-medium transition-colors truncate",
                            isExpanded
                              ? "text-accent-gold"
                              : "text-text-primary group-hover:text-accent-gold"
                          )}
                        >
                          {amenity.title}
                        </h3>
                      </div>
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 text-text-secondary transition-transform duration-300 flex-shrink-0",
                          isExpanded
                            ? "rotate-180 text-accent-gold"
                            : "opacity-40 group-hover:opacity-80"
                        )}
                      />
                    </div>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <p className="text-text-secondary text-xs mt-2 pt-2 border-t border-accent-gold/15 leading-relaxed">
                            {amenity.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
