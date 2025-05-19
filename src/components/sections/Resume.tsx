// src/components/sections/Resume.tsx
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, FilePlus } from 'lucide-react';
import { addTextGradient } from '@/lib/css-animations';

const Resume: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const [pdfError, setPdfError] = useState(false);

  useEffect(() => {
    // Add animation style if it doesn't exist
    if (!document.getElementById('slide-up-animation')) {
      const style = document.createElement('style');
      style.id = 'slide-up-animation';
      style.textContent = `
        @keyframes slideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up {
          animation: slideUp 0.7s ease forwards;
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
        titleRef.current.classList.add('animate-slide-up');
      }
      
      setTimeout(() => {
        if (descriptionRef.current) {
          descriptionRef.current.classList.remove('opacity-0');
          descriptionRef.current.classList.add('animate-slide-up');
        }
        
        setTimeout(() => {
          if (buttonRef.current) {
            buttonRef.current.classList.remove('opacity-0');
            buttonRef.current.classList.add('animate-slide-up');
          }
          
          setTimeout(() => {
            if (previewRef.current) {
              previewRef.current.classList.remove('opacity-0');
              previewRef.current.classList.add('animate-slide-up');
            }
          }, 200);
        }, 200);
      }, 200);
    }, 300);
  }, []);

  // Handle PDF errors
  const handlePdfError = () => {
    setPdfError(true);
  };

  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 ref={titleRef} className="text-3xl font-bold mb-4 opacity-0 transition-all duration-500">Resume</h2>
          <p ref={descriptionRef} className="text-muted-foreground max-w-2xl mx-auto mb-8 opacity-0 transition-all duration-500">
            Download my resume or view it online
          </p>

          <div ref={buttonRef} className="mb-8 opacity-0 transition-all duration-500">
            <Button>
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>

          <div ref={previewRef} className="w-full max-w-4xl mx-auto h-[600px] border rounded-lg overflow-hidden opacity-0 transition-all duration-500">
            {pdfError ? (
              <div className="flex flex-col items-center justify-center h-full bg-muted/20">
                <FilePlus className="w-16 h-16 text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">Resume Preview</h3>
                <p className="text-muted-foreground text-center max-w-md px-4">
                  The resume preview is currently being updated. 
                  Please use the download button above to get the latest version.
                </p>
              </div>
            ) : (
              <iframe
                src="https://www.africau.edu/images/default/sample.pdf"
                className="w-full h-full"
                title="Resume Preview"
                onError={handlePdfError}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;