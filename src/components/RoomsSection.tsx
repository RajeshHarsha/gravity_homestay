'use client';

import { motion } from 'framer-motion';
import RoomCard from './RoomCard';

const rooms = [
  {
    title: 'Normal Room',
    description: 'Comfortable and cozy room perfect for a relaxing stay with all essential amenities.',
    price: '₹2,000',
    amenities: ['WiFi', 'AC', 'TV'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPK3ceE2XXnzCtunAsjp4XI5YCl6g7mBF_2E8h2egkTipR9VaHH2XhZV4q&s=10',
  },
  {
    title: 'Deluxe Room',
    description: 'Spacious and elegantly designed room with premium amenities for a luxurious experience.',
    price: '₹3,000',
    amenities: ['WiFi', 'AC', 'TV', 'Mini Bar'],
    image: 'https://www.parkregiskriskin.ae/wp-content/uploads/2020/07/room-deluxe-queen-2520x1400.jpg',
  },
];

export default function RoomsSection() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 px-4 w-full">
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
          className="text-center mb-12 md:mb-16"
        >
          <h2 id="rooms-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-text-primary mb-4">
            Our <span className="text-gradient">Luxury Rooms</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-text-secondary max-w-2xl mx-auto px-4">
            Each room is thoughtfully designed to provide the perfect blend of comfort, elegance, and modern amenities.
          </p>
        </motion.div>

        {/* Room cards */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl">
            {rooms.map((room, index) => (
              <RoomCard key={index} {...room} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
