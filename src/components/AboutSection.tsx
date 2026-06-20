import React from 'react';
import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';
import ContactButton from './ContactButton';

const MOON_IMG = 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png';
const BOTTOM_LEFT_IMG = 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png';
const LEGO_IMG = 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png';
const GROUP_IMG = 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png';

const ABOUT_TEXT =
  "With a background in Digital Business at IIM Bangalore and Data Science at IIT Madras, I focus on building products, driving growth, and creating digital platforms that stand out. I've shipped full-stack platforms from zero to production in under 48 hours, led cross-functional teams, and built systems that handle everything from auth to analytics. I enjoy working with startups that aim to ship fast and scale smart. Let\u2019s build something incredible together!";

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      {/* Decorative corners */}
      {/* Top-left: Moon */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%]"
      >
        <img
          src={MOON_IMG}
          alt=""
          className="w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none select-none"
        />
      </FadeIn>

      {/* Bottom-left */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]"
      >
        <img
          src={BOTTOM_LEFT_IMG}
          alt=""
          className="w-[100px] sm:w-[140px] md:w-[180px] pointer-events-none select-none"
        />
      </FadeIn>

      {/* Top-right: Lego */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%]"
      >
        <img
          src={LEGO_IMG}
          alt=""
          className="w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none select-none"
        />
      </FadeIn>

      {/* Bottom-right: Group */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]"
      >
        <img
          src={GROUP_IMG}
          alt=""
          className="w-[130px] sm:w-[170px] md:w-[220px] pointer-events-none select-none"
        />
      </FadeIn>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-10 sm:gap-14 md:gap-16">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Animated paragraph + button */}
        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText
            text={ABOUT_TEXT}
            className="font-medium leading-relaxed max-w-[560px] text-[#D7E2EA]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />

          <ContactButton />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
