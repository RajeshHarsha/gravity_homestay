'use client';

import { Bed, Star } from 'lucide-react';
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
  const handleBookClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Dispatch custom event to pre-select room in EnquirySection
    window.dispatchEvent(new CustomEvent('select-room', { detail: title }));

    // Smooth scroll to enquiry section with offset for fixed header
    const enquirySection = document.getElementById('enquiry');
    if (enquirySection) {
      const yOffset = -80;
      const y = enquirySection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Mobile / Tablet: Horizontal Card (as requested in reference image) */}
      <div className="lg:hidden bg-white border-2 border-navy rounded-2xl p-3 sm:p-4 shadow-md flex items-center justify-between gap-3 sm:gap-4 transition-all">
        {/* Left column: Room Info */}
        <div className="flex-1 min-w-0 pr-1">
          {/* Rating */}
          <div className="flex items-center gap-1 mb-1">
            <Star className="w-3.5 h-3.5 fill-accent-gold text-accent-gold" />
            <span className="text-text-primary text-xs font-semibold">4.9</span>
          </div>

          {/* Title */}
          <h3 className="text-sm sm:text-base font-bold text-text-primary mb-0.5 leading-snug">
            {title}
          </h3>

          {/* Price */}
          <div className="flex items-baseline gap-1 mb-1.5">
            <span className="text-accent-gold font-bold text-sm sm:text-base">{price}</span>
            <span className="text-text-secondary text-[10px] font-normal">/ day</span>
          </div>

          {/* Description */}
          <p className="text-text-secondary text-[11px] sm:text-xs line-clamp-2 mb-2 leading-relaxed">
            {description}
          </p>

          {/* Amenities tags */}
          <div className="flex flex-wrap gap-1">
            {amenities.slice(0, 3).map((amenity, i) => (
              <span
                key={i}
                className="px-2 py-0.5 text-[9px] border border-accent-gold/25 text-accent-gold/90 bg-accent-gold/5 rounded-full font-medium"
              >
                {amenity}
              </span>
            ))}
          </div>
        </div>

        {/* Right column: Image with overlapping "Book" button */}
        <div className="relative flex-shrink-0 flex flex-col items-center">
          <div className="relative w-28 h-24 sm:w-32 sm:h-28 rounded-xl overflow-hidden border border-navy/20 shadow-sm bg-secondary-bg">
            {image ? (
              <Image
                src={image}
                alt={`${title} at Gravity Homestays`}
                fill
                className="object-cover"
                sizes="130px"
                loading="eager"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <Bed className="w-8 h-8 text-accent-gold/30" />
              </div>
            )}
          </div>

          {/* Overlapping Book CTA button (styled like ADD button in reference image) */}
          <button
            type="button"
            onClick={handleBookClick}
            className="mt-[-14px] z-10 px-5 py-1 bg-white hover:bg-accent-gold text-navy hover:text-white font-bold text-xs uppercase tracking-wider border-2 border-navy rounded-lg shadow-md transition-all active:scale-95 text-center cursor-pointer"
          >
            Book
          </button>
        </div>
      </div>

      {/* Desktop: Vertical Card in 4-column grid */}
      <div className="hidden lg:flex flex-col justify-between h-full bg-white border-2 border-navy rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
        <div>
          {/* Image */}
          <div className="relative h-44 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent z-10" />
            <div className="w-full h-full bg-gradient-to-br from-secondary-bg to-primary-bg relative">
              {image ? (
                <Image
                  src={image}
                  alt={`${title} at Gravity Homestays`}
                  fill
                  className="object-cover"
                  sizes="25vw"
                  loading="eager"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Bed className="w-8 h-8 text-accent-gold/30 mx-auto mb-1" />
                  <p className="text-text-secondary text-xs">Room Image</p>
                </div>
              )}
            </div>

            {/* Price tag */}
            <div className="absolute top-2.5 right-2.5 z-20">
              <div className="bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full shadow border border-accent-gold/20 text-center">
                <p className="text-accent-gold font-semibold text-sm leading-tight">{price}</p>
                <p className="text-text-secondary text-[9px]">per day</p>
              </div>
            </div>

            {/* Rating */}
            <div className="absolute top-2.5 left-2.5 z-20 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full shadow-sm">
              <Star className="w-3 h-3 fill-accent-gold text-accent-gold" />
              <span className="text-text-primary text-[10px] font-medium">4.9</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            <h3 className="text-base font-semibold text-text-primary mb-1 truncate">{title}</h3>
            <p className="text-text-secondary text-xs mb-3 line-clamp-2 leading-relaxed">{description}</p>

            {/* Amenities */}
            <div className="flex flex-wrap gap-1 mb-3">
              {amenities.slice(0, 3).map((amenity, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 text-[10px] border border-accent-gold/20 text-accent-gold/90 bg-accent-gold/5 rounded-full"
                >
                  {amenity}
                </span>
              ))}
            </div>

            {/* Book link */}
            <button
              type="button"
              onClick={handleBookClick}
              className="block w-full py-2 bg-navy/5 hover:bg-accent-gold text-navy hover:text-white border border-navy/20 font-medium text-xs rounded-lg text-center transition-all mt-2 cursor-pointer"
            >
              Book Room
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
