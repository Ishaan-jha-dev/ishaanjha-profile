import React from 'react';
import FadeIn from './FadeIn';
import ContactButton from './ContactButton';

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 text-center"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight mb-6"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Let&apos;s Build
        </h2>
      </FadeIn>

      <FadeIn delay={0.2} y={20}>
        <p
          className="text-[#D7E2EA] font-light uppercase tracking-wide leading-relaxed max-w-xl mb-12"
          style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.4rem)', opacity: 0.7 }}
        >
          Have a startup, product, or idea you want to bring to life? I&apos;m
          always open to building something incredible.
        </p>
      </FadeIn>

      <FadeIn delay={0.4} y={20}>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <ContactButton />
          <a
            href="mailto:ishaanjha.in@gmail.com"
            className="text-[#D7E2EA] font-light tracking-wider transition-opacity hover:opacity-70"
            style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)', opacity: 0.6 }}
          >
            ishaanjha.in@gmail.com
          </a>
        </div>
      </FadeIn>

      {/* Footer */}
      <div className="absolute bottom-6 left-0 right-0 flex flex-col sm:flex-row justify-between items-center px-6 md:px-10 gap-3">
        <span
          className="text-[#D7E2EA] font-light uppercase tracking-widest"
          style={{ fontSize: 'clamp(0.65rem, 1vw, 0.85rem)', opacity: 0.4 }}
        >
          © 2026 Ishaan Jha · IIM Bangalore × IIT Madras
        </span>
        <div className="flex items-center gap-6">
          {['LinkedIn', 'GitHub', 'Twitter'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-[#D7E2EA] font-light uppercase tracking-widest transition-opacity hover:opacity-70"
              style={{ fontSize: 'clamp(0.65rem, 1vw, 0.85rem)', opacity: 0.4, textDecoration: 'none' }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
