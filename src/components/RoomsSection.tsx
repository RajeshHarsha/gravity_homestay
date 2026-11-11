'use client';

import { motion } from 'framer-motion';
import RoomCard from './RoomCard';

const rooms = [
  {
    title: 'Deluxe Room',
    description: 'Spacious and elegantly designed room with premium amenities for a luxurious experience.',
    price: '₹3,000',
    amenities: ['WiFi', 'AC', 'TV', 'Geyser'],
    image: 'https://www.parkregiskriskin.ae/wp-content/uploads/2020/07/room-deluxe-queen-2520x1400.jpg',
  },
  {
    title: 'Executive Room',
    description: 'Sophisticated and comfortable room featuring dedicated work space and upscale furnishings.',
    price: '₹3,500',
    amenities: ['WiFi', 'AC', 'Work Desk', 'TV'],
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Suite Room',
    description: 'Lavish suite featuring a private lounge, plush master bedroom, and premium hospitality.',
    price: '₹4,500',
    amenities: ['WiFi', 'AC', 'Living Area', 'Mini Bar'],
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: '2BHK',
    description: 'Fully furnished two-bedroom apartment with living hall and kitchen, ideal for families.',
    price: '₹6,000',
    amenities: ['2 Bedrooms', 'Kitchen', 'Living Hall', 'AC'],
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
  },
];

export default function RoomsSection() {
  return (
    <section className="relative py-10 sm:py-14 md:py-16 px-4 w-full">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-bg via-secondary-bg/50 to-primary-bg" />
      <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-accent-gold/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 md:mb-8"
        >
          <h2 id="rooms-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-text-primary mb-3">
            Our <span className="text-gradient">Luxury Rooms</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-text-secondary max-w-2xl mx-auto px-4">
            Each room is thoughtfully designed to provide the perfect blend of comfort, elegance, and modern amenities.
          </p>
        </motion.div>

        {/* Mobile / Tablet: Stack of horizontal cards (Swiggy / Zomato style like reference image) */}
        <div className="lg:hidden flex flex-col gap-3.5 max-w-xl mx-auto w-full">
          {rooms.map((room, index) => (
            <RoomCard key={index} {...room} index={index} />
          ))}
        </div>

        {/* Desktop: 4 cards in a single horizontal row */}
        <div className="hidden lg:grid grid-cols-4 gap-4 xl:gap-5 w-full">
          {rooms.map((room, index) => (
            <RoomCard key={index} {...room} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
