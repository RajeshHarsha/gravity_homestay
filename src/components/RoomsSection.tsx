'use client';

import { motion } from 'framer-motion';
import RoomCard from './RoomCard';

const rooms = [
  // {
  //   title: 'The Sunset Suite',
  //   description: 'A luxurious suite with panoramic views of the sunset, featuring a private balcony and premium amenities.',
  //   price: '₹8,500',
  //   amenities: ['Private Balcony', 'Ocean View', 'Mini Bar'],
  //   image: '',
  // },
  {
    title: 'Garden Retreat',
    description: 'Nestled in lush gardens, this room offers tranquility and natural light with direct garden access.',
    price: '₹6,500',
    amenities: [ 'Tea Lounge', 'Workspace'],
    image: '',
  },
  {
    title: 'Heritage Room',
    description: 'Experience the charm of traditional architecture with modern comforts in our beautifully restored heritage room.',
    price: '₹5,500',
    amenities: ['Heritage Design', 'Antique Furniture'],
    image: '',
  },
];

export default function RoomsSection() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 px-4">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-bg via-secondary-bg/50 to-primary-bg" />
      <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-accent-gold/5 rounded-full blur-3xl" />
      
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
            Our <span className="text-gradient">Luxury Rooms</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-text-secondary max-w-2xl mx-auto px-4">
            Each room is thoughtfully designed to provide the perfect blend of comfort, elegance, and modern amenities.
          </p>
        </motion.div>

        {/* Room cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {rooms.map((room, index) => (
            <RoomCard key={index} {...room} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
