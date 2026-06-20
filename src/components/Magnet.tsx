import React, { useRef, useCallback, useEffect } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isActive = useRef(false);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const el = wrapperRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      const inZone =
        e.clientX > rect.left - padding &&
        e.clientX < rect.right + padding &&
        e.clientY > rect.top - padding &&
        e.clientY < rect.bottom + padding;

      if (inZone) {
        if (!isActive.current) {
          el.style.transition = activeTransition;
          isActive.current = true;
        }
        el.style.transform = `translate3d(${dx / strength}px, ${dy / strength}px, 0)`;
      } else if (isActive.current) {
        el.style.transition = inactiveTransition;
        el.style.transform = 'translate3d(0, 0, 0)';
        isActive.current = false;
      }
    },
    [padding, strength, activeTransition, inactiveTransition]
  );

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div
      ref={wrapperRef}
      className={className}
      style={{ willChange: 'transform', display: 'inline-block' }}
    >
      {children}
    </div>
  );
};

export default Magnet;
