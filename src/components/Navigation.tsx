'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 30, 60, 1)', 'rgba(255, 251, 245, 0.9)']
  );

  const borderColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(212, 162, 76, 0)', 'rgba(212, 162, 76, 0.2)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        style={{
          backgroundColor,
          borderColor,
        }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 w-full",
          isScrolled ? "py-3" : "py-4"
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between w-full">
          {/* Logo */}
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
            aria-label="Gravity Homestays - Go to home"
          >
            <img
              src="/logo.png"
              alt="Gravity Homestays Logo"
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={cn(
                  "transition-colors text-base font-bold tracking-wide focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-offset-2 rounded",
                  isScrolled ? "text-text-secondary hover:text-accent-gold" : "text-white hover:text-accent-gold"
                )}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
              className="px-4 sm:px-6 py-2 bg-accent-gold text-primary-bg text-base font-bold rounded-none hover:bg-glow-soft transition-colors focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-offset-2"
            >
              Book Now
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn("md:hidden p-2", isScrolled ? "text-text-primary" : "text-white")}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 bg-primary-bg/95 backdrop-blur-lg md:hidden pt-20 sm:pt-24 px-4 border-t border-accent-gold/20"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <div className="flex flex-col items-center gap-4 sm:gap-6 max-w-md mx-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-text-primary text-lg sm:text-xl hover:text-accent-gold transition-colors w-full py-2 focus:outline-none focus:ring-2 focus:ring-accent-gold rounded"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
              className="w-full max-w-xs px-8 py-3 bg-accent-gold text-primary-bg font-medium rounded-none focus:outline-none focus:ring-2 focus:ring-accent-gold"
            >
              Book Now
            </a>
          </div>
        </motion.div>
      )}
    </>
  );
}
