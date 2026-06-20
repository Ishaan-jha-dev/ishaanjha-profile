import React from 'react';
import FadeIn from './FadeIn';

const services = [
  {
    num: '01',
    name: 'Product Building',
    desc: 'End-to-end platform development from zero to production — owning product architecture, design, and GTM strategy for startups and entrepreneurs.',
  },
  {
    num: '02',
    name: 'Growth & Marketing',
    desc: 'Data-driven growth campaigns, social media strategy, cold outreach, and engagement optimization to expand reach and maximize conversions.',
  },
  {
    num: '03',
    name: 'Data Science & Analytics',
    desc: 'Analytical insights, KPI tracking, algorithmic optimization, and data-driven decision systems to accelerate growth at every stage.',
  },
  {
    num: '04',
    name: 'Brand & GTM Strategy',
    desc: 'Crafting cohesive go-to-market strategies — from positioning to execution — that communicate a clear, compelling, and memorable presence.',
  },
  {
    num: '05',
    name: 'Startup Operations',
    desc: 'Cross-functional delivery coordination, community programs, cohort management, and milestone shipping to build and scale fast-moving teams.',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      {/* Heading */}
      <FadeIn delay={0} y={40}>
        <h2
          className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{
            fontSize: 'clamp(3rem, 12vw, 160px)',
            color: '#0C0C0C',
          }}
        >
          Skills
        </h2>
      </FadeIn>

      {/* Service list */}
      <div className="max-w-5xl mx-auto">
        {services.map((service, i) => (
          <FadeIn key={service.num} delay={i * 0.1} y={30}>
            <div
              className="flex items-start gap-6 sm:gap-10 md:gap-14 py-8 sm:py-10 md:py-12"
              style={{
                borderTop: i === 0 ? '1px solid rgba(12,12,12,0.15)' : 'none',
                borderBottom: '1px solid rgba(12,12,12,0.15)',
              }}
            >
              {/* Number */}
              <span
                className="font-black leading-none flex-shrink-0"
                style={{
                  fontSize: 'clamp(3rem, 10vw, 140px)',
                  color: '#0C0C0C',
                  lineHeight: 1,
                }}
              >
                {service.num}
              </span>

              {/* Name + description */}
              <div className="flex flex-col justify-center pt-1 sm:pt-2 md:pt-3">
                <span
                  className="font-medium uppercase text-[#0C0C0C] leading-tight mb-2 sm:mb-3"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </span>
                <span
                  className="font-light leading-relaxed max-w-2xl text-[#0C0C0C]"
                  style={{
                    fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                    opacity: 0.6,
                  }}
                >
                  {service.desc}
                </span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
