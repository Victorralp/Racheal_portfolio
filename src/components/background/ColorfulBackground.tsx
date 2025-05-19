import React, { useEffect, useRef } from 'react';
import { createParticles } from '@/lib/anime-utils';

interface ColorfulBackgroundProps {
  particleCount?: number;
}

const ColorfulBackground: React.FC<ColorfulBackgroundProps> = ({ 
  particleCount = 50 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      createParticles(containerRef.current, particleCount);
    }

    // Cleanup function
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [particleCount]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

export default ColorfulBackground; 