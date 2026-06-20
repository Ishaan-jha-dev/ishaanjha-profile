import React from 'react';
import { motion } from 'framer-motion';

const navLinks = ['About', 'Experience', 'Projects', 'Contact'];

const Navbar: React.FC = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative z-20 flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8"
    >
      {navLinks.map((link) => (
        <a
          key={link}
          href={`#${link.toLowerCase()}`}
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70 no-underline"
          style={{ textDecoration: 'none' }}
        >
          {link}
        </a>
      ))}
    </motion.nav>
  );
};

export default Navbar;
