'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface GalleryFrameProps {
  image?: string;
  title: string;
  index: number;
}

export default function GalleryFrame({ image, title }: GalleryFrameProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group cursor-pointer w-full h-full"
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl",
          "border-2 border-navy",
          "bg-white",
          "transition-all duration-300",
          isHovered ? "shadow-2xl shadow-navy/20 -translate-y-1" : "shadow-md"
        )}
      >
        {/* Image */}
        <div className="aspect-[4/3] bg-gradient-to-br from-secondary-bg to-primary-bg flex items-center justify-center relative overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt={`${title} at Gravity Homestays`}
              fill
              className={cn(
                "object-cover transition-transform duration-500",
                isHovered ? "scale-105" : "scale-100"
              )}
              sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw"
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

          {/* Title bar at bottom */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent p-3 sm:p-4 pt-8">
            <p className="text-white font-medium text-xs sm:text-sm drop-shadow-sm">
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
