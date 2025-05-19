import React, { useEffect, useRef } from 'react';
import { createParticlesBackground } from '@/lib/css-animations';

interface CssBackgroundProps {
  particleCount?: number;
}

const CssBackground: React.FC<CssBackgroundProps> = ({ particleCount = 50 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Clear existing particles and add new ones
      containerRef.current.innerHTML = '';
      
      // Add the background for data visualizations
      createParticlesBackground(containerRef.current, particleCount);
      
      // Fade in the background with a slight delay
      containerRef.current.style.opacity = '0';
      
      // Force repaint to trigger animations
      const forceRepaint = () => {
        if (containerRef.current) {
          void containerRef.current.offsetHeight;
          
          // Add fade-in effect
          animationFrameRef.current = requestAnimationFrame(() => {
            if (containerRef.current) {
              containerRef.current.style.transition = 'opacity 2s ease-in';
              containerRef.current.style.opacity = '1';
            }
          });
        }
      };
      
      // Slight delay before showing elements
      setTimeout(forceRepaint, 300);
    }
    
    // Cleanup function
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [particleCount]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      style={{ 
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.02), rgba(0,0,0,0.05))',
      }}
      aria-hidden="true"
    />
  );
};

export default CssBackground; 