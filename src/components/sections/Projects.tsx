// src/components/sections/Projects.tsx
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import AnimatedCard from '@/components/ui/animated-card';
import { addTextGradient, setupButtonHoverEffect } from '@/lib/css-animations';

const Projects: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  
  const projects = [
    {
      title: 'Sales Dashboard',
      description: 'Interactive dashboard showing real-time sales metrics and KPIs',
      tools: ['Python', 'Tableau', 'SQL'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Customer Segmentation',
      description: 'Machine learning model for customer segmentation analysis',
      tools: ['Python', 'Scikit-learn', 'Power BI'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Market Analysis',
      description: 'Comprehensive market analysis with predictive modeling',
      tools: ['R', 'Tableau', 'Excel'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
  ];

  useEffect(() => {
    // Apply gradient text animation to the title
    if (titleRef.current) {
      addTextGradient(titleRef.current);
    }
    
    // Animate the section elements with CSS transitions
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
    
    // Set up button animations
    if (cardsRef.current) {
      const buttons = cardsRef.current.querySelectorAll('a');
      buttons.forEach(button => {
        setupButtonHoverEffect(button as HTMLElement);
      });
    }
  }, []);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 ref={titleRef} className="text-3xl font-bold mb-4 opacity-0 transition-all duration-500">Projects</h2>
          <p ref={descriptionRef} className="text-muted-foreground max-w-2xl mx-auto opacity-0 transition-all duration-500">
            A collection of my data analysis projects and visualizations
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <AnimatedCard key={index} className="h-full flex flex-col">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs px-2 py-1 bg-primary/10 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </a>
                </Button>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;