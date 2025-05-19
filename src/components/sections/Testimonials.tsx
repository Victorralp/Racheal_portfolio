import React, { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { addTextGradient } from '@/lib/css-animations';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechGrowth Inc.',
      content: 'The dashboards delivered were exceptional. They not only visualized our data clearly but helped identify key growth opportunities we hadn\'t seen before.',
      image: 'https://randomuser.me/api/portraits/women/21.jpg',
    },
    {
      name: 'Michael Chang',
      role: 'Operations Manager',
      company: 'GlobalSys Solutions',
      content: 'The detailed analysis provided insights that helped us reduce operational costs by 23%. The data-driven approach was exactly what we needed.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      name: 'Elena Rodriguez',
      role: 'CEO',
      company: 'Innovate Financial',
      content: 'Working with this data analyst transformed how we approach decision making. The custom reports and visualizations are now critical to our strategy.',
      image: 'https://randomuser.me/api/portraits/women/45.jpg',
    },
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);
  
  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  useEffect(() => {
    // Add animation styles if they don't exist
    if (!document.getElementById('testimonial-animations')) {
      const style = document.createElement('style');
      style.id = 'testimonial-animations';
      style.textContent = `
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-testimonial {
          animation: fadeIn 0.5s ease forwards;
        }
      `;
      document.head.appendChild(style);
    }
    
    // Apply gradient to the title
    if (titleRef.current) {
      addTextGradient(titleRef.current);
    }
    
    // Animate elements when they appear
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
      }, 200);
    }, 300);
  }, []);
  
  // Add animation when testimonial changes
  useEffect(() => {
    if (testimonialRef.current) {
      testimonialRef.current.classList.remove('animate-testimonial');
      void testimonialRef.current.offsetWidth; // Force reflow
      testimonialRef.current.classList.add('animate-testimonial');
    }
  }, [activeIndex]);
  
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 ref={titleRef} className="text-3xl font-bold mb-4 opacity-0 transition-all duration-500">
            Client Testimonials
          </h2>
          <p ref={descriptionRef} className="text-muted-foreground max-w-2xl mx-auto opacity-0 transition-all duration-500">
            Hear what clients have to say about my data analysis and visualization services
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card 
            ref={testimonialRef} 
            className="p-8 relative overflow-hidden"
          >
            <Quote className="absolute top-4 left-4 text-primary/20 w-12 h-12" />
            
            <div className="flex flex-col md:flex-row items-center gap-6 pt-6">
              <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1">
                <blockquote className="text-lg mb-4 italic">
                  "{testimonials[activeIndex].content}"
                </blockquote>
                <div className="font-semibold">{testimonials[activeIndex].name}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 gap-4">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={handlePrev}
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <span 
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      index === activeIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>
              
              <Button 
                variant="outline" 
                size="icon" 
                onClick={handleNext}
                aria-label="Next testimonial"
              >
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 