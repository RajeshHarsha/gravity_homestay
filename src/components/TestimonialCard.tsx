'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  name: string;
  rating: number;
  text: string;
  index: number;
}

export default function TestimonialCard({ name, rating, text, index }: TestimonialCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [3, -3]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-3, 3]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      style={{ rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative h-full"
    >
      <motion.div
        animate={{
          y: isHovered ? -8 : 0,
        }}
        transition={{ duration: 0.4 }}
        className="relative h-full"
      >
        {/* Luxury brochure-style card */}
        <div
          className={cn(
            "relative h-full flex flex-col p-6 sm:p-8 rounded-xl",
            "bg-white border-4 border-navy",
            "transition-all duration-500",
            isHovered ? "shadow-2xl shadow-accent-gold/25" : "shadow-xl"
          )}
        >
          {/* Quote icon */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-20">
            <Quote className="w-8 h-8 sm:w-12 sm:h-12 text-accent-gold" />
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-3 sm:mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "w-3 h-3 sm:w-4 sm:h-4",
                  i < rating ? "fill-accent-gold text-accent-gold" : "text-accent-gold/30"
                )}
              />
            ))}
          </div>

          {/* Testimonial text */}
          <p className="text-text-primary text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 font-light flex-1">
            "{text}"
          </p>

          {/* Author */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-accent-gold/30 to-transparent flex items-center justify-center border border-accent-gold/30">
              <span className="text-accent-gold font-medium text-base sm:text-lg">
                {name.charAt(0)}
              </span>
            </div>
            <div>
              <p className="text-text-primary font-medium text-sm sm:text-base">{name}</p>
            </div>
          </div>

          {/* Gold accent line */}
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent-gold via-glow-soft to-transparent opacity-50" />
        </div>

        {/* 3D shadow */}
        <motion.div
          animate={{
            scale: isHovered ? 1.02 : 1,
            opacity: isHovered ? 0.25 : 0.1,
          }}
          className="absolute inset-0 bg-accent-gold/20 blur-2xl -z-10 rounded-xl"
        />
      </motion.div>
    </motion.div>
  );
}
