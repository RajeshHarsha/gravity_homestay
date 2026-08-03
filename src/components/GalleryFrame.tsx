'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface GalleryFrameProps {
  image?: string;
  title: string;
  index: number;
}

export default function GalleryFrame({ image, title, index }: GalleryFrameProps) {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-4, 4]);

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
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      style={{ rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative group cursor-pointer"
    >
      <motion.div
        animate={{
          y: isHovered ? -15 : 0,
        }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {/* Frame */}
        <div
          className={cn(
            "relative overflow-hidden rounded-lg",
            "border-2 border-navy",
            "bg-white",
            "transition-all duration-500",
            isHovered ? "border-navy shadow-2xl shadow-navy/30" : "shadow-xl"
          )}
        >
          {/* Image */}
          <motion.div
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.6 }}
            className="aspect-[4/3] bg-gradient-to-br from-secondary-bg to-primary-bg flex items-center justify-center relative"
          >
            {image ? (
              <Image
                src={image}
                alt={`${title} at Gravity Homestays - ${title.toLowerCase()}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
              />
            ) : (
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-accent-gold/30 rounded-lg mx-auto mb-2 sm:mb-3 flex items-center justify-center">
                  <span className="text-accent-gold/50 text-xl sm:text-2xl">📷</span>
                </div>
                <p className="text-text-secondary text-xs sm:text-sm">{title}</p>
              </div>
            )}
          </motion.div>

          {/* Light sweep effect on hover */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: isHovered ? '100%' : '-100%' }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-gold/10 to-transparent pointer-events-none"
          />

          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent"
          />

          {/* Title reveal */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4"
          >
            <p className="text-text-primary font-medium text-xs sm:text-sm">{title}</p>
          </motion.div>
        </div>

        {/* Frame shadow */}
        <motion.div
          animate={{
            scale: isHovered ? 1.05 : 1,
            opacity: isHovered ? 0.3 : 0.15,
          }}
          className="absolute inset-0 bg-accent-gold/20 blur-xl -z-10 rounded-lg"
        />
      </motion.div>
    </motion.div>
  );
}
