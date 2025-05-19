import React, { useRef, useEffect } from "react";
import { setupCardHoverEffect } from "@/lib/css-animations";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ 
  children, 
  className = "" 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      setupCardHoverEffect(cardRef.current);
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className={`bg-card text-card-foreground rounded-lg border border-border p-6 transition-shadow duration-300 ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedCard; 