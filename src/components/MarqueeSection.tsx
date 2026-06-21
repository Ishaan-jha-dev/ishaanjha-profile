import React, { useRef, useEffect, useState } from 'react';

import React, { useRef, useEffect, useState } from 'react';

const skills = [
  {
    name: 'Product Building',
    desc: 'End-to-end platform development from zero to production — owning product architecture, design, and GTM strategy.',
  },
  {
    name: 'Growth & Marketing',
    desc: 'Data-driven growth campaigns, social media strategy, cold outreach, and engagement optimization.',
  },
  {
    name: 'Data Science & Analytics',
    desc: 'Analytical insights, KPI tracking, algorithmic optimization, and data-driven decision systems.',
  },
  {
    name: 'Brand & GTM Strategy',
    desc: 'Crafting cohesive go-to-market strategies — from positioning to execution — that communicate a clear presence.',
  },
  {
    name: 'Startup Operations',
    desc: 'Cross-functional delivery coordination, community programs, cohort management, and milestone shipping.',
  },
];

// Duplicate skills to create a seamless loop
const row1 = [...skills, ...skills, ...skills, ...skills];
const row2 = [...skills.slice().reverse(), ...skills.slice().reverse(), ...skills.slice().reverse(), ...skills.slice().reverse()];

const MacCard = ({ skill }: { skill: typeof skills[0] }) => (
  <div className="rounded-2xl flex-shrink-0 flex flex-col border border-white/10 overflow-hidden shadow-2xl"
       style={{ width: '420px', height: '270px', backgroundColor: '#111111' }}>
    {/* Mac Window Header */}
    <div className="h-12 flex items-center px-5 border-b border-white/10 gap-2" style={{ backgroundColor: '#1A1A1A' }}>
      <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F56]"></div>
      <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E]"></div>
      <div className="w-3.5 h-3.5 rounded-full bg-[#27C93F]"></div>
    </div>
    {/* Content */}
    <div className="p-8 flex flex-col justify-center flex-grow">
      <h3 className="font-bold text-[#D7E2EA] mb-4 uppercase tracking-wide" style={{ fontSize: '1.4rem' }}>
        {skill.name}
      </h3>
      <p className="text-[#D7E2EA]/60 font-light leading-relaxed text-[1.1rem]">
        {skill.desc}
      </p>
    </div>
  </div>
);

const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(200);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const raw = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(raw);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden pt-24 sm:pt-32 md:pt-40 pb-10"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      <div className="flex flex-col gap-6">
        {/* Row 1 — moves RIGHT */}
        <div
          className="flex gap-6"
          style={{
            transform: `translateX(${offset - 400}px)`,
            willChange: 'transform',
          }}
        >
          {row1.map((skill, i) => (
            <MacCard key={i} skill={skill} />
          ))}
        </div>

        {/* Row 2 — moves LEFT */}
        <div
          className="flex gap-6"
          style={{
            transform: `translateX(${-(offset - 100)}px)`,
            willChange: 'transform',
          }}
        >
          {row2.map((skill, i) => (
            <MacCard key={i} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
