import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';

const projects = [
  {
    num: '01',
    category: 'Full-Stack · 48 Hours · Next.js',
    name: 'Nova Unplugged',
    type: 'Event Platform',
    col1img1: '/nova_landing.png',
    col1img2: '/nova_events.png',
    col2img: '/nova_dashboard.png',
  },
  {
    num: '02',
    category: 'Full-Stack · Gamified · Multi-Tool',
    name: 'DBE-OS',
    type: 'Student Platform',
    col1img1: '/dbeos_notes.png',
    col1img2: '/dbeos_tools.png',
    col2img: '/dbeos_dashboard.png',
  },
  {
    num: '03',
    category: 'Full-Stack · LMS · Startup School',
    name: 'Setu',
    type: 'Startup LMS',
    col1img1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    col1img2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    col2img:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
  },
];

const TOTAL = projects.length;

interface ProjectCardProps {
  project: (typeof projects)[0];
  index: number;
  totalRef: React.RefObject<HTMLDivElement | null>;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, totalRef }) => {
  const { scrollYProgress } = useScroll({
    target: totalRef,
    offset: ['start start', 'end end'],
  });

  const targetScale = 1 - (TOTAL - 1 - index) * 0.03;
  const scale = useTransform(
    scrollYProgress,
    [index / TOTAL, 1],
    [1, targetScale]
  );

  return (
    <div
      className="h-[85vh] flex items-start justify-center"
      style={{ paddingTop: `${index * 28}px` }}
    >
      <motion.div
        className="sticky w-full"
        style={{ top: '6rem', scale }}
      >
        <div
          className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8"
          style={{ backgroundColor: '#0C0C0C' }}
        >
          {/* Top row */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-baseline gap-4 sm:gap-6">
              <span
                className="hero-heading font-black leading-none"
                style={{ fontSize: 'clamp(3rem, 10vw, 120px)' }}
              >
                {project.num}
              </span>
              <div className="flex flex-col">
                <span
                  className="text-[#D7E2EA] font-light uppercase tracking-wider"
                  style={{ fontSize: 'clamp(0.7rem, 1.2vw, 1rem)', opacity: 0.6 }}
                >
                  {project.category}
                </span>
                <span
                  className="text-[#D7E2EA] font-black uppercase tracking-tight"
                  style={{ fontSize: 'clamp(1.2rem, 3vw, 3rem)' }}
                >
                  {project.name}
                </span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span
                className="text-[#D7E2EA] font-light uppercase tracking-widest"
                style={{ fontSize: 'clamp(0.65rem, 1vw, 0.9rem)', opacity: 0.5 }}
              >
                {project.type}
              </span>
              <LiveProjectButton />
            </div>
          </div>

          {/* Image grid */}
          <div className="flex gap-3 sm:gap-4">
            {/* Left column — 40% */}
            <div className="flex flex-col gap-3 sm:gap-4" style={{ flex: '0 0 40%' }}>
              <img
                src={project.col1img1}
                alt={project.name}
                className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
                style={{ height: 'clamp(130px, 16vw, 230px)' }}
              />
              <img
                src={project.col1img2}
                alt={project.name}
                className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
                style={{ height: 'clamp(160px, 22vw, 340px)' }}
              />
            </div>

            {/* Right column — 60% */}
            <div style={{ flex: '0 0 calc(60% - 12px)' }}>
              <img
                src={project.col2img}
                alt={project.name}
                className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="projects"
      className="relative rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-10"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      {/* Heading */}
      <FadeIn delay={0} y={40} className="mb-10 sm:mb-12 md:mb-16">
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      {/* Sticky card stack */}
      <div ref={containerRef} className="relative">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.num}
            project={project}
            index={index}
            totalRef={containerRef}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
