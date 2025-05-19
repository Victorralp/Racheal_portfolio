// src/components/sections/Contact.tsx
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Linkedin, Github } from 'lucide-react';
import { addTextGradient } from '@/lib/css-animations';

const Contact: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const connectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add slide animations if they don't exist
    if (!document.getElementById('slide-animations')) {
      const style = document.createElement('style');
      style.id = 'slide-animations';
      style.textContent = `
        @keyframes slideInLeft {
          from { transform: translateX(-50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideInRight {
          from { transform: translateX(50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        .animate-slide-left {
          animation: slideInLeft 0.8s ease forwards;
        }
        
        .animate-slide-right {
          animation: slideInRight 0.8s ease forwards;
        }
      `;
      document.head.appendChild(style);
    }

    // Apply gradient to title
    if (titleRef.current) {
      addTextGradient(titleRef.current);
    }

    // Animate elements with CSS transitions
    setTimeout(() => {
      if (titleRef.current) {
        titleRef.current.classList.remove('opacity-0');
        titleRef.current.classList.add('animate-fade-in');
      }
      
      setTimeout(() => {
        if (descriptionRef.current) {
          descriptionRef.current.classList.remove('opacity-0');
          descriptionRef.current.classList.add('animate-fade-in');
        }
        
        setTimeout(() => {
          if (formRef.current) {
            formRef.current.classList.remove('opacity-0');
            formRef.current.classList.add('animate-slide-left');
          }
          
          if (connectRef.current) {
            connectRef.current.classList.remove('opacity-0');
            connectRef.current.classList.add('animate-slide-right');
          }
        }, 200);
      }, 200);
    }, 300);
  }, []);

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 ref={titleRef} className="text-3xl font-bold mb-4 opacity-0 transition-all duration-500">Get in Touch</h2>
          <p ref={descriptionRef} className="text-muted-foreground max-w-2xl mx-auto opacity-0 transition-all duration-500">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div ref={formRef} className="space-y-6 opacity-0 transition-all duration-500">
            <form className="space-y-4">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Textarea placeholder="Your Message" className="min-h-[150px]" />
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          <div ref={connectRef} className="space-y-6 opacity-0 transition-all duration-500">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Connect With Me</h3>
              <div className="space-y-4">
                <a
                  href="mailto:contact@example.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  contact@example.com
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn Profile
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="w-5 h-5" />
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;