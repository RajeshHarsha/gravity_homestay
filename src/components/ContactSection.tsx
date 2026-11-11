'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-12 sm:py-16 px-4 w-full overflow-hidden scroll-mt-20 sm:scroll-mt-24" aria-labelledby="contact-heading">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-bg via-secondary-bg/20 to-primary-bg" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-accent-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 id="contact-heading" className="text-2xl sm:text-3xl md:text-4xl font-light text-text-primary mb-2">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-text-secondary max-w-xl mx-auto px-4">
            Reach out to us for reservations, inquiries, or visit us at our property.
          </p>
        </motion.div>

        {/* Side-by-side compact cards for Contact and Location */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Card 1: Contact Details & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border-2 border-navy rounded-2xl p-5 sm:p-6 shadow-xl shadow-accent-gold/5 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-4 flex items-center gap-2">
                <span className="w-2 h-5 bg-accent-gold rounded-full inline-block" />
                Contact Information
              </h3>

              <div className="space-y-4">
                {/* Location / Address */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center text-accent-gold flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-text-primary font-semibold text-xs sm:text-sm mb-0.5">Address</h4>
                    <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                      11-9-29/2b, near BJP party office, Daspalla Hills, Panduranga Puram, Visakhapatnam, 530002
                    </p>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center text-accent-gold flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-text-primary font-semibold text-xs sm:text-sm mb-0.5">Phone</h4>
                    <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-xs sm:text-sm">
                      <a href="tel:+918886222497" className="text-text-secondary hover:text-accent-gold font-medium transition-colors">
                        +91 88862 22497
                      </a>
                      <span className="text-accent-gold/50">•</span>
                      <a href="tel:+918886222498" className="text-text-secondary hover:text-accent-gold font-medium transition-colors">
                        +91 88862 22498
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center text-accent-gold flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-text-primary font-semibold text-xs sm:text-sm mb-0.5">Email</h4>
                    <p className="text-xs sm:text-sm">
                      <a
                        href="mailto:gravityhomestays@gmail.com?subject=Enquiry%20Request"
                        className="text-text-secondary hover:text-accent-gold font-medium transition-colors break-all"
                      >
                        gravityhomestays@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Follow Us / Social Links */}
            <div className="pt-4 mt-5 border-t border-accent-gold/15 flex items-center justify-between">
              <span className="text-text-primary font-semibold text-xs uppercase tracking-wider">
                Follow Us
              </span>
              <div className="flex gap-2.5">
                <motion.a
                  href="https://www.facebook.com/people/Gravity-homestays/61592655687621/?sk=directory_links"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.08, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-secondary-bg/60 border border-accent-gold/25 rounded-lg text-text-secondary hover:text-accent-gold hover:border-accent-gold transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/gravityhomestays_888/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.08, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-secondary-bg/60 border border-accent-gold/25 rounded-lg text-text-secondary hover:text-accent-gold hover:border-accent-gold transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="https://wa.me/918886222497"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.08, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-secondary-bg/60 border border-accent-gold/25 rounded-lg text-text-secondary hover:text-accent-gold hover:border-accent-gold transition-colors"
                  aria-label="WhatsApp"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Location Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border-2 border-navy rounded-2xl p-5 sm:p-6 shadow-xl shadow-accent-gold/5 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-1 flex items-center gap-2">
                <span className="w-2 h-5 bg-accent-gold rounded-full inline-block" />
                Find Us on Map
              </h3>
              <p className="text-text-secondary text-xs sm:text-sm mb-3">
                Click anywhere on the map to open directions in Google Maps.
              </p>
            </div>

            <div className="relative w-full h-[220px] sm:h-[250px] md:h-[270px] rounded-xl overflow-hidden border border-navy/50">
              <a
                href="https://maps.app.goo.gl/gHJiABZtMzc38Nyw6"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block w-full h-full cursor-pointer"
                aria-label="Open Gravity Homestays location on Google Maps"
              >
                <iframe
                  src="https://maps.google.com/maps?q=17.716228,83.316191&hl=en&z=17&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Gravity Homestays Location"
                  className="pointer-events-none w-full h-full"
                />
                {/* Hover overlay badge */}
                <div className="absolute inset-0 bg-primary-bg/0 group-hover:bg-primary-bg/20 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-primary-bg/95 text-accent-gold border border-accent-gold/40 px-3.5 py-1.5 rounded-lg text-xs font-medium shadow-lg flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    Open in Google Maps
                  </span>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
