'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState } from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AmenityTileProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export default function AmenityTile({ icon: Icon, title, description, index }: AmenityTileProps) {
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative h-full"
    >
      <motion.div
        animate={{
          y: isHovered ? -10 : 0,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.4 }}
        className={cn(
          "relative h-full flex flex-col p-6 sm:p-8 rounded-2xl",
          "bg-white border-4 border-navy",
          "transition-all duration-500",
          isHovered ? "shadow-2xl shadow-accent-gold/25" : "shadow-xl"
        )}
      >
        {/* Icon container */}
        <motion.div
          animate={{
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? 5 : 0,
          }}
          transition={{ duration: 0.4 }}
          className="relative w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6"
        >
          <div className="absolute inset-0 bg-accent-gold/20 rounded-full blur-xl animate-glow" />
          <div className="relative w-full h-full bg-gradient-to-br from-accent-gold/20 to-transparent rounded-full flex items-center justify-center border border-accent-gold/30">
            <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-accent-gold" />
          </div>
        </motion.div>

        {/* Content */}
        <h3 className="text-lg sm:text-xl font-medium text-text-primary mb-2 sm:mb-3">{title}</h3>
        <p className="text-text-secondary text-xs sm:text-sm leading-relaxed flex-1">{description}</p>

        {/* Hover glow effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent rounded-2xl pointer-events-none"
        />
      </motion.div>
    </motion.div>
  );
}
