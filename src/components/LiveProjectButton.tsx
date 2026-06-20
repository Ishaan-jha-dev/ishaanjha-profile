import React from 'react';

interface LiveProjectButtonProps {
  label?: string;
  className?: string;
}

const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({ label = 'Live Project', className = '' }) => {
  return (
    <button
      className={`rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest cursor-pointer px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base transition-colors duration-200 hover:bg-[#D7E2EA]/10 ${className}`}
    >
      {label}
    </button>
  );
};

export default LiveProjectButton;
