'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-secondary-bg border-t border-accent-gold/20 py-8 px-4 w-full">
      {/* Background effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[400px] h-[150px] bg-accent-gold/5 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 text-center md:text-left"
          >
            <img
              src="/logo.png"
              alt="Gravity Homestays"
              className="h-16 w-auto object-contain mx-auto md:mx-0"
            />
            <p className="text-text-secondary text-xs sm:text-sm max-w-xs sm:max-w-sm hidden sm:block">
              Experience luxury that feels like home. Boutique stays crafted with warmth and elegance.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <ul className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Rooms', href: '#rooms' },
                { name: 'Amenities', href: '#amenities' },
                { name: 'Gallery', href: '#gallery' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-text-secondary hover:text-accent-gold transition-colors font-medium">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="pt-4 border-t border-accent-gold/15 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-text-secondary">
          <p className="text-center sm:text-left">
            © {currentYear} Gravity Homestays. All rights reserved.
          </p>
          <div>
            <a
              href="https://www.instagram.com/harsha_vardhan_naidu___/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-gold transition-colors"
            >
              Design & Developed by <span className="font-medium text-text-primary hover:text-accent-gold">Harsha_vardhan.raj</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
