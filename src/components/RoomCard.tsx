'use client';

import { Bed, Bath, Maximize, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface RoomCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  amenities: string[];
  index: number;
}

export default function RoomCard({ title, description, price, image, amenities }: RoomCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-white border-4 border-navy shadow-xl">
      {/* Image */}
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent z-10" />
        <div className="w-full h-full bg-gradient-to-br from-secondary-bg to-primary-bg relative">
          {image ? (
            <Image
              src={image}
              alt={`${title} at Gravity Homestays`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
              loading="eager"
              priority
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <Bed className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-accent-gold/30 mx-auto mb-2" />
                <p className="text-text-secondary text-xs sm:text-sm">Room Image</p>
              </div>
            </div>
          )}
        </div>

        {/* Price tag */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20">
          <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg border border-accent-gold/20">
            <p className="text-accent-gold font-semibold text-sm sm:text-base">{price}</p>
            <p className="text-text-secondary text-[10px] sm:text-xs">per day</p>
          </div>
        </div>

        {/* Rating */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 flex items-center gap-1">
          <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-accent-gold text-accent-gold" />
          <span className="text-text-primary text-xs sm:text-sm font-medium">4.9</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-light text-text-primary mb-2">{title}</h3>
        <p className="text-text-secondary text-xs sm:text-sm mb-4 line-clamp-2">{description}</p>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-4">
          {amenities.slice(0, 3).map((amenity, i) => (
            <span
              key={i}
              className="px-2 py-1 sm:px-3 sm:py-1 text-[10px] sm:text-xs border border-accent-gold/20 text-accent-gold/80 rounded-full"
            >
              {amenity}
            </span>
          ))}
        </div>

        {/* Room specs */}
        <div className={cn(
          "flex items-center gap-3 sm:gap-4 text-text-secondary text-xs sm:text-sm",
          "border-t border-accent-gold/20 pt-3 sm:pt-4"
        )}>
          <div className="flex items-center gap-1">
            <Maximize className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>45 m²</span>
          </div>
          <div className="flex items-center gap-1">
            <Bed className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>King</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Ensuite</span>
          </div>
        </div>
      </div>
    </div>
  );
}
