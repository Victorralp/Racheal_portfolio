// src/components/sections/Hero.tsx
import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { addTextGradient, setupButtonHoverEffect } from '@/lib/css-animations';

const Hero: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const profileImgRef = useRef<HTMLImageElement>(null);
  const buttonsContainerRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  
  useEffect(() => {
    // Apply gradient text animation to the heading
    if (headingRef.current) {
      addTextGradient(headingRef.current);
    }
    
    // Setup button animations
    if (buttonsContainerRef.current) {
      const buttons = buttonsContainerRef.current.querySelectorAll('a');
      buttons.forEach(button => {
        setupButtonHoverEffect(button as HTMLElement);
      });
    }
    
    // Add animation class to elements to make them appear with CSS transitions
    setTimeout(() => {
      if (profileImgRef.current) {
        profileImgRef.current.classList.remove('opacity-0');
        profileImgRef.current.classList.add('animate-fade-in');
      }
      
      setTimeout(() => {
        if (headingRef.current) {
          headingRef.current.classList.remove('opacity-0');
          headingRef.current.classList.add('animate-fade-in');
        }
        
        setTimeout(() => {
          if (subtitleRef.current) {
            subtitleRef.current.classList.remove('opacity-0');
            subtitleRef.current.classList.add('animate-fade-in');
          }
          
          setTimeout(() => {
            if (buttonsContainerRef.current) {
              buttonsContainerRef.current.classList.remove('opacity-0');
              buttonsContainerRef.current.classList.add('animate-fade-in');
            }
          }, 200);
        }, 200);
      }, 200);
    }, 200);
    
    // Add staggered animation keyframes
    if (!document.getElementById('fade-in-animation')) {
      const style = document.createElement('style');
      style.id = 'fade-in-animation';
      style.textContent = `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease forwards;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <div>
          <img
            ref={profileImgRef}
            src="/assets/profile.jpg"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-primary opacity-0 transition-all duration-500"
          />
          
          <h1 ref={headingRef} className="text-4xl md:text-6xl font-bold mb-4 opacity-0 transition-all duration-500">
            Turning Data into 
            <span className="ml-2">
              <Typewriter
                options={{
                  strings: ['Insights', 'Action', 'Value'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>

          <p ref={subtitleRef} className="text-muted-foreground text-lg mb-8 opacity-0 transition-all duration-500">
            Data Analyst | Visualization Expert | Problem Solver
          </p>

          <div
            ref={buttonsContainerRef}
            className="flex gap-4 justify-center mb-12 opacity-0 transition-all duration-500"
          >
            <Button asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>

          <div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;