import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { addTextGradient } from '@/lib/css-animations';

const Footer: React.FC = () => {
  const logoRef = useRef<HTMLSpanElement>(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    if (logoRef.current) {
      addTextGradient(logoRef.current);
    }
  }, []);

  return (
    <footer className="py-10 border-t bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <span ref={logoRef} className="text-xl font-bold">DataAnalyst</span>
            <p className="text-muted-foreground text-sm">
              Providing data analysis and visualization services to help businesses make informed decisions.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Resume', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {['Data Analysis', 'Dashboard Design', 'Data Visualization', 'Reporting', 'Consulting'].map((item) => (
                <li key={item} className="text-muted-foreground text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-4 border-t border-border/40 text-center text-muted-foreground text-sm">
          <p>© {currentYear} DataAnalyst. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 