// src/App.tsx
import { useState, useEffect, useRef } from 'react';
// import Navbar from './components/layout/Navbar';
// import Hero from './components/sections/Hero';
import About from './components/sections/About';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CssBackground from './components/background/CssBackground';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Resume from './components/sections/Resume';
import Contact from './components/sections/Contact';
import Testimonials from './components/sections/Testimonials';
import Skills from './components/sections/Skills';
import Footer from './components/layout/Footer';
// import ColorfulBackground from './components/background/ColorfulBackground';
import { addTextGradient, setupButtonHoverEffect, setupCardHoverEffect } from './lib/css-animations';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const navLinksRef = useRef<HTMLDivElement>(null);

  // Check system preference on initial load
  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDarkMode);
    if (prefersDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Apply animation effects
  useEffect(() => {    
    // Apply hover effects to cards
    cardRefs.current.forEach(card => {
      if (card) {
        setupCardHoverEffect(card);
      }
    });
    
    // Apply hover effects to buttons
    buttonRefs.current.forEach(button => {
      if (button) {
        setupButtonHoverEffect(button);
      }
    });

    // Apply hover effects to nav links
    if (navLinksRef.current) {
      const links = navLinksRef.current.querySelectorAll('a');
      links.forEach(link => {
        setupButtonHoverEffect(link as HTMLElement);
      });
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      {/* Use the CSS-based background */}
      <CssBackground particleCount={150} />
      
      {/* Improved navbar with mobile menu */}
      <div className="fixed w-full top-0 z-50 backdrop-blur-sm border-b bg-background/80">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <span className="text-xl font-bold">DataAnalyst</span>
          
          {/* Desktop Navigation */}
          <div ref={navLinksRef} className="hidden md:flex items-center gap-6">
            {['Home', 'About', 'Projects', 'Resume', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
            <Button 
              onClick={toggleTheme}
              className="ml-2"
              variant="ghost"
              size="icon"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Button 
              onClick={toggleTheme}
              variant="ghost"
              size="icon"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button 
              onClick={toggleMenu}
              variant="ghost"
              size="icon"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-sm border-b">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {['Home', 'About', 'Projects', 'Resume', 'Contact'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-primary transition-colors py-2"
                    onClick={closeMenu}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      
      <main className="pt-16 relative z-10">
        {/* Hero Section */}
        <Hero />
        
        {/* About Section */}
        <About />
        
        {/* Skills Section */}
        <Skills />
        
        {/* Services Section */}
        <section id="services" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {['Dashboard Design', 'Data Analysis', 'Visualization'].map((item, index) => (
                <div 
                  key={item} 
                  ref={el => {
                    cardRefs.current[index] = el;
                  }}
                  className="bg-card border rounded-lg p-6 shadow-sm"
                >
                  <h3 className="text-xl font-semibold mb-2">{item}</h3>
                  <p className="text-muted-foreground">
                    Professional {item.toLowerCase()} services tailored to your business needs.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Projects Section */}
        <Projects />
        
        {/* Testimonials Section */}
        <Testimonials />
        
        {/* Resume Section */}
        <Resume />
        
        {/* Contact Section */}
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;