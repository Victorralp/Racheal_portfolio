// src/components/layout/Navbar.tsx
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { animateBackground, setupButtonAnimation, animateLogo } from '@/lib/anime-utils';

interface NavbarProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, isDarkMode }) => {
  const navItems = ['Home', 'About', 'Projects', 'Resume', 'Contact'];
  const navbarRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    // Apply subtle background animation to the navbar
    if (navbarRef.current) {
      // Use the utility function for background animation with navColors
      const navColors = [
        'rgba(110, 37, 214, 0.1)', // Purple
        'rgba(36, 107, 253, 0.1)', // Blue
        'rgba(29, 209, 161, 0.1)', // Green
        'rgba(255, 107, 107, 0.1)', // Red
        'rgba(255, 159, 26, 0.1)'  // Orange
      ];
      
      // Use the utility function
      animateBackground(navbarRef.current);
    }
    
    // Animate logo
    if (logoRef.current) {
      animateLogo(logoRef.current);
    }
    
    // Setup button animations
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      setupButtonAnimation(link as HTMLElement);
    });
  }, []);

  return (
    <nav 
      ref={navbarRef}
      className="fixed w-full top-0 z-50 backdrop-blur-sm border-b"
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <span 
          ref={logoRef}
          className="text-xl font-bold"
        >
          DataAnalyst
        </span>
        
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hidden md:block nav-link"
            >
              {item}
            </a>
          ))}
          
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="ml-2"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;