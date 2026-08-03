'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Send, Calendar, Users } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface EnquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  specialRequest: string;
}

export default function EnquirySection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [totalDays, setTotalDays] = useState<number | null>(null);
  
  // Get today's date in YYYY-MM-DD format for min attribute
  const today = new Date().toISOString().split('T')[0];
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<EnquiryFormData>();

  const checkIn = watch('checkIn');
  const checkOut = watch('checkOut');

  // Calculate total days when dates change
  useEffect(() => {
    if (checkIn && checkOut) {
      const startDate = new Date(checkIn);
      const endDate = new Date(checkOut);
      const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setTotalDays(diffDays > 0 ? diffDays : null);
    } else {
      setTotalDays(null);
    }
  }, [checkIn, checkOut]);

  const WHATSAPP_NUMBER = '918074127898'; // Replace with actual WhatsApp number

  const onSubmit = async (data: EnquiryFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Create WhatsApp message
    const message = `
*New Enquiry - Gravity Homestays*

*Name:* ${data.fullName}
*Phone:* ${data.phone}
*Email:* ${data.email}

*Stay Duration:* ${data.checkIn} to ${data.checkOut}
*Total Days:* ${totalDays || 'N/A'}
*Guests:* ${data.guests}

*Special Request:*
${data.specialRequest || 'None'}
    `.trim();

    // Open WhatsApp with the message
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    setIsSuccess(true);
    toast.success('Enquiry submitted successfully!');
    reset();
    setTotalDays(null);
    
    setTimeout(() => setIsSuccess(false), 3000);
    setIsSubmitting(false);
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
  };

  const handleCallClick = () => {
    window.open(`tel:${WHATSAPP_NUMBER}`, '_self');
  };

  const handleEmailClick = () => {
    window.open('mailto:info@gravityhomestays.com', '_self');
  };

  return (
    <section className="relative py-16 sm:py-24 md:py-32 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-bg via-secondary-bg/30 to-primary-bg" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] md:w-[1000px] h-[500px] sm:h-[700px] md:h-[1000px] bg-accent-gold/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-text-primary mb-4">
            Live Luxury <span className="text-gradient">& Comfort</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-text-secondary max-w-2xl mx-auto px-4">
            Experience the perfect blend of elegance and warmth. Your dream getaway awaits at Gravity Homestays.
          </p>
        </motion.div>

        {/* Floating reception desk form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Main form panel */}
          <div className="bg-white border-4 border-navy rounded-2xl p-6 sm:p-8 md:p-12 shadow-2xl shadow-accent-gold/10">
            {/* Success overlay */}
            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center z-10"
              >
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent-gold/20 flex items-center justify-center">
                    <Send className="w-10 h-10 text-accent-gold" />
                  </div>
                  <h3 className="text-2xl font-medium text-text-primary mb-2">Enquiry Sent!</h3>
                  <p className="text-text-secondary">We'll be in touch shortly.</p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-text-secondary">Full Name</label>
                  <input
                    {...register('fullName', { required: 'Name is required' })}
                    placeholder="John Doe"
                    className={cn(
                      "w-full px-4 py-3 bg-secondary-bg/50 border border-accent-gold/30 rounded-lg",
                      "text-text-primary placeholder:text-text-secondary/30",
                      "focus:border-accent-gold/50 focus:outline-none transition-colors",
                      errors.fullName && "border-red-500/50"
                    )}
                  />
                  {errors.fullName && (
                    <p className="text-red-400 text-xs">{errors.fullName.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-text-secondary">Phone</label>
                  <input
                    {...register('phone', { required: 'Phone is required' })}
                    placeholder="+91 98765 43210"
                    className={cn(
                      "w-full px-4 py-3 bg-secondary-bg/50 border border-accent-gold/30 rounded-lg",
                      "text-text-primary placeholder:text-text-secondary/30",
                      "focus:border-accent-gold/50 focus:outline-none transition-colors",
                      errors.phone && "border-red-500/50"
                    )}
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-xs">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm text-text-secondary">Email</label>
                <input
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  placeholder="john@example.com"
                  className={cn(
                    "w-full px-4 py-3 bg-secondary-bg/50 border border-accent-gold/30 rounded-lg",
                    "text-text-primary placeholder:text-text-secondary/30",
                    "focus:border-accent-gold/50 focus:outline-none transition-colors",
                    errors.email && "border-red-500/50"
                  )}
                />
                {errors.email && (
                  <p className="text-red-400 text-xs">{errors.email.message}</p>
                )}
              </div>

              {/* Check-in and Check-out */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-text-secondary flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    min={today}
                    {...register('checkIn', { 
                      required: 'Check-in date is required',
                      validate: (value) => {
                        const selectedDate = new Date(value);
                        const currentDate = new Date(today);
                        return selectedDate >= currentDate || 'Check-in date cannot be in the past';
                      }
                    })}
                    className={cn(
                      "w-full px-4 py-3 bg-secondary-bg/50 border border-accent-gold/30 rounded-lg",
                      "text-text-primary",
                      "focus:border-accent-gold/50 focus:outline-none transition-colors",
                      errors.checkIn && "border-red-500/50"
                    )}
                  />
                  {errors.checkIn && (
                    <p className="text-red-400 text-xs">{errors.checkIn.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-text-secondary flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    min={checkIn || today}
                    {...register('checkOut', { 
                      required: 'Check-out date is required',
                      validate: (value) => {
                        const selectedDate = new Date(value);
                        const currentDate = new Date(today);
                        const checkInDate = checkIn ? new Date(checkIn) : currentDate;
                        return selectedDate >= checkInDate || 'Check-out date must be after check-in date';
                      }
                    })}
                    className={cn(
                      "w-full px-4 py-3 bg-secondary-bg/50 border border-accent-gold/30 rounded-lg",
                      "text-text-primary",
                      "focus:border-accent-gold/50 focus:outline-none transition-colors",
                      errors.checkOut && "border-red-500/50"
                    )}
                  />
                  {errors.checkOut && (
                    <p className="text-red-400 text-xs">{errors.checkOut.message}</p>
                  )}
                </div>
              </div>

              {/* Total days display */}
              {totalDays !== null && totalDays > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-2 px-4 bg-accent-gold/10 border border-accent-gold/20 rounded-lg"
                >
                  <p className="text-accent-gold font-medium text-sm">
                    Total Stay: <span className="text-lg">{totalDays}</span> day{totalDays !== 1 ? 's' : ''}
                  </p>
                </motion.div>
              )}

              {/* Guests */}
              <div className="space-y-2">
                <label className="text-sm text-text-secondary flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Number of Guests
                </label>
                <select
                  {...register('guests', { required: 'Number of guests is required' })}
                  className={cn(
                    "w-full px-4 py-3 bg-secondary-bg/50 border border-accent-gold/30 rounded-lg",
                    "text-text-primary",
                    "focus:border-accent-gold/50 focus:outline-none transition-colors",
                    errors.guests && "border-red-500/50"
                  )}
                >
                  <option value="">Select guests</option>
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5+">5+ Guests</option>
                </select>
                {errors.guests && (
                  <p className="text-red-400 text-xs">{errors.guests.message}</p>
                )}
              </div>

              {/* Special Request */}
              <div className="space-y-2">
                <label className="text-sm text-text-secondary">Special Request (Optional)</label>
                <textarea
                  {...register('specialRequest')}
                  placeholder="Any special requirements or preferences..."
                  rows={3}
                  className="w-full px-4 py-3 bg-secondary-bg/50 border border-accent-gold/30 rounded-lg text-text-primary placeholder:text-text-secondary/30 focus:border-accent-gold/50 focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-accent-gold text-primary-bg font-medium rounded-lg gold-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-bg/30 border-t-primary-bg rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Enquiry
                  </>
                )}
              </motion.button>
            </form>

            {/* Contact options */}
            <div className="mt-8 pt-8 border-t border-accent-gold/20">
              <p className="text-center text-text-secondary text-sm mb-4">
                Or reach us directly
              </p>
              <div className="flex justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleWhatsAppClick}
                  className="p-3 bg-white border-2 border-navy rounded-lg hover:bg-secondary-bg transition-colors"
                  aria-label="WhatsApp"
                >
                  <Image src="/icons/whatsapp.png" alt="WhatsApp" width={24} height={24} className="w-6 h-6 object-contain" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCallClick}
                  className="p-3 bg-white border-2 border-navy rounded-lg hover:bg-secondary-bg transition-colors"
                  aria-label="Call"
                >
                  <Image src="/icons/call.svg" alt="Call" width={24} height={24} className="w-6 h-6 object-contain" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleEmailClick}
                  className="p-3 bg-white border-2 border-navy rounded-lg hover:bg-secondary-bg transition-colors"
                  aria-label="Email"
                >
                  <Image src="/icons/email.png" alt="Email" width={24} height={24} className="w-6 h-6 object-contain" />
                </motion.button>
              </div>
            </div>
          </div>

          {/* Floating shadow */}
          <div className="absolute inset-0 bg-accent-gold/20 blur-3xl -z-10 rounded-2xl scale-95" />
        </motion.div>
      </div>
    </section>
  );
}
