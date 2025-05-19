// src/components/sections/About.tsx
import React, { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { addTextGradient, setupCardHoverEffect } from '@/lib/css-animations';

const About: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const skills = [
    { name: 'Python', level: 90 },
    { name: 'SQL', level: 85 },
    { name: 'Tableau', level: 80 },
    { name: 'Power BI', level: 75 },
    { name: 'Excel', level: 95 },
  ];

  const experience = [
    {
      year: '2022 - Present',
      title: 'Senior Data Analyst',
      company: 'Tech Corp',
      description: 'Leading data analytics initiatives and building dashboards',
    },
    {
      year: '2020 - 2022',
      title: 'Data Analyst',
      company: 'Data Solutions Inc',
      description: 'Performed data analysis and created visualization reports',
    },
  ];

  useEffect(() => {
    // Add the slide-in animation style if it doesn't exist
    if (!document.getElementById('slide-animation-style')) {
      const style = document.createElement('style');
      style.id = 'slide-animation-style';
      style.textContent = `
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes growWidth {
          from { width: 0; }
          to { width: 100%; }
        }
        .animate-slide-left {
          animation: slideInLeft 0.8s ease forwards;
        }
        .animate-slide-right {
          animation: slideInRight 0.8s ease forwards;
        }
        .animate-grow-width {
          animation: growWidth 0.8s ease forwards;
        }
      `;
      document.head.appendChild(style);
    }
    
    // Apply gradient text animation to heading
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
          if (experienceRef.current) {
            experienceRef.current.classList.remove('opacity-0');
            experienceRef.current.classList.add('animate-slide-left');
          }
          
          if (skillsRef.current) {
            skillsRef.current.classList.remove('opacity-0');
            skillsRef.current.classList.add('animate-slide-right');
          }
        }, 200);
      }, 200);
    }, 300);
    
    // Apply hover effects to cards
    cardRefs.current.forEach(card => {
      if (card) {
        setupCardHoverEffect(card);
      }
    });
  }, []);

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 ref={titleRef} className="text-3xl font-bold mb-4 opacity-0 transition-all duration-500">About Me</h2>
          <p ref={descriptionRef} className="text-muted-foreground max-w-2xl mx-auto opacity-0 transition-all duration-500">
            Passionate data analyst with 5+ years of experience in transforming complex data into actionable insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div ref={experienceRef} className="opacity-0 transition-all duration-500">
            <h3 className="text-xl font-semibold mb-4">Experience</h3>
            <div className="space-y-4">
              {experience.map((exp, index) => (
                <Card 
                  key={index} 
                  className="p-4"
                  ref={el => {
                    cardRefs.current[index] = el as HTMLDivElement;
                  }}
                >
                  <p className="text-sm text-primary">{exp.year}</p>
                  <h4 className="font-semibold">{exp.title}</h4>
                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                  <p className="text-sm mt-2">{exp.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <div ref={skillsRef} className="opacity-0 transition-all duration-500">
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div
                    className="h-2 bg-muted rounded-full animate-grow-width" 
                    style={{animation: `growWidth 0.8s ease forwards ${0.3 + index * 0.1}s`}}
                  >
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{
                        width: `${skill.level}%`,
                        animation: `growWidth 0.8s ease forwards ${0.5 + index * 0.1}s`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;