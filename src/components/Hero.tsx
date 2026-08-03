'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
        delay: 0.5,
      });

      gsap.from('.hero-subtitle', {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.8,
      });

      gsap.from('.hero-button', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
        delay: 1.2,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const heroBackgroundImage =
    'https://content.skyscnr.com/available/2621845743/2621845743_960x576.jpg';

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackgroundImage})` }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-primary-bg" />
      
      {/* Ambient light effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-gold/20 rounded-full blur-3xl animate-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-glow-soft/20 rounded-full blur-3xl animate-glow" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-6 md:mb-8"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-light tracking-[0.2em] md:tracking-[0.3em] text-gradient">
            GRAVITY
          </h1>
          <p className="text-xs sm:text-sm tracking-[0.3em] md:tracking-[0.5em] text-white/70 mt-2">HOMESTAYS</p>
        </motion.div>

        {/* Main heading */}
        <h2 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-light text-white leading-tight mb-4 md:mb-6">
          Experience Luxury
          <br />
          <span className="text-accent-gold font-medium">That Feels Like Home</span>
        </h2>

        {/* Subtitle */}
        <p className="hero-subtitle text-sm sm:text-base md:text-lg lg:text-xl text-white/85 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed px-4">
          Home stays crafted with warmth, comfort, and timeless elegance.
          <br className="hidden sm:block" />
          Where every moment becomes a cherished memory.
        </p>

        {/* CTA Buttons */}
        <div className="hero-button flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full px-4 mb-16 md:mb-24">
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-accent-gold text-primary-bg font-medium rounded-none overflow-hidden gold-glow transition-all duration-300 text-sm sm:text-base cursor-pointer"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Book Your Stay
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-glow-soft opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>

          {/* <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-accent-gold/30 text-text-primary font-medium rounded-none hover:bg-accent-gold/10 transition-all duration-300 gold-glow-subtle text-sm sm:text-base"
          >
            <span className="flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4" />
              Explore Rooms
            </span>
          </motion.button> */}
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-accent-gold/30 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-2 bg-accent-gold rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
