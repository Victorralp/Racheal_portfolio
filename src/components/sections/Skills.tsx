import React, { useEffect, useRef, useState } from 'react';
import { addTextGradient } from '@/lib/css-animations';

interface Skill {
  name: string;
  level: number;
  category: 'technical' | 'visualization' | 'database' | 'analysis';
}

const Skills: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const skills: Skill[] = [
    // Technical skills
    { name: 'Python', level: 90, category: 'technical' },
    { name: 'R', level: 85, category: 'technical' },
    { name: 'SQL', level: 92, category: 'database' },
    { name: 'Excel', level: 95, category: 'technical' },
    { name: 'Statistics', level: 88, category: 'analysis' },
    
    // Visualization skills
    { name: 'Tableau', level: 85, category: 'visualization' },
    { name: 'Power BI', level: 80, category: 'visualization' },
    { name: 'D3.js', level: 70, category: 'visualization' },
    { name: 'Data Storytelling', level: 85, category: 'visualization' },
    
    // Database skills
    { name: 'MySQL', level: 90, category: 'database' },
    { name: 'PostgreSQL', level: 85, category: 'database' },
    { name: 'MongoDB', level: 75, category: 'database' },
    
    // Analysis skills
    { name: 'Data Mining', level: 82, category: 'analysis' },
    { name: 'Predictive Modeling', level: 80, category: 'analysis' },
    { name: 'A/B Testing', level: 87, category: 'analysis' },
    { name: 'Machine Learning', level: 78, category: 'analysis' },
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'technical', name: 'Technical' },
    { id: 'visualization', name: 'Visualization' },
    { id: 'database', name: 'Database' },
    { id: 'analysis', name: 'Analysis' },
  ];
  
  useEffect(() => {
    // Add animation styles if they don't exist
    if (!document.getElementById('skills-animation')) {
      const style = document.createElement('style');
      style.id = 'skills-animation';
      style.textContent = `
        @keyframes growBar {
          from { width: 0; }
          to { width: var(--skill-level); }
        }
        
        .skill-bar {
          width: 0;
          transition: width 0.5s ease;
        }
        
        .animate-skill-bar {
          animation: growBar 1s ease forwards;
        }
      `;
      document.head.appendChild(style);
    }
    
    // Apply gradient to title
    if (titleRef.current) {
      addTextGradient(titleRef.current);
    }
    
    // Animate elements
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
        
        // Animate skill bars
        const skillBars = document.querySelectorAll('.skill-bar');
        skillBars.forEach((bar, index) => {
          setTimeout(() => {
            bar.classList.add('animate-skill-bar');
          }, index * 100);
        });
      }, 200);
    }, 300);
  }, []);
  
  // Re-animate skill bars when category changes
  useEffect(() => {
    // Reset and animate skill bars
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach((bar) => {
      bar.classList.remove('animate-skill-bar');
    });
    
    setTimeout(() => {
      skillBars.forEach((bar, index) => {
        setTimeout(() => {
          bar.classList.add('animate-skill-bar');
        }, index * 100);
      });
    }, 50);
  }, [activeCategory]);
  
  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'technical': return 'bg-blue-500';
      case 'visualization': return 'bg-green-500';
      case 'database': return 'bg-amber-500';
      case 'analysis': return 'bg-purple-500';
      default: return 'bg-primary';
    }
  };
  
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 ref={titleRef} className="text-3xl font-bold mb-4 opacity-0 transition-all duration-500">
            Data Skills
          </h2>
          <p ref={descriptionRef} className="text-muted-foreground max-w-2xl mx-auto opacity-0 transition-all duration-500">
            Specialized skills in data analysis, visualization, and database technologies
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === category.id 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted hover:bg-muted/80'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div ref={chartRef} className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div 
                  className={`skill-bar h-full rounded-full ${getCategoryColor(skill.category)}`}
                  style={{'--skill-level': `${skill.level}%`} as React.CSSProperties}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 