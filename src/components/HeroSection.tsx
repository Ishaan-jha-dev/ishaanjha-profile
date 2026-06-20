import React from 'react';
import { motion } from 'framer-motion';
import Magnet from './Magnet';
import ContactButton from './ContactButton';
import Navbar from './Navbar';

const PORTRAIT_URL =
  'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png';

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col h-screen overflow-x-clip"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Hero Heading */}
      <div className="overflow-hidden px-2">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="hero-heading font-black uppercase tracking-tight leading-none w-full text-center mt-6 sm:mt-4 md:-mt-5"
          style={{
            fontSize: 'clamp(8vw, 13vw, 13vw)',
            whiteSpace: 'nowrap',
          }}
        >
          Hi, i&apos;m Ishaan
        </motion.h1>
      </div>

      {/* Portrait — centered absolutely */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] pointer-events-none"
      >
        <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
          <img
            src={PORTRAIT_URL}
            alt="Ishaan Jha"
            className="w-full h-auto object-contain select-none"
            draggable={false}
          />
        </Magnet>
      </motion.div>

      {/* Bottom bar */}
      <div className="mt-auto flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 relative z-20">
        {/* Left: tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
          style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
        >
          a builder driven by crafting platforms and unforgettable products
        </motion.p>

        {/* Right: CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <ContactButton />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
