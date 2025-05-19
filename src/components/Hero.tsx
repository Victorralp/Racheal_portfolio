// src/components/Hero.tsx
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Typewriter from 'typewriter-effect';

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section className="min-h-screen flex items-center relative" id="home">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <Typewriter
                options={{
                  strings: ['Turning Data into Insightful Action'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Data Analyst specializing in transforming complex datasets into actionable insights
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href="#projects"
                className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                View My Work
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <img 
              src="<tool_call>ImageGetter.get(search_term='professional data analyst illustration minimalist', image_save_path='/data/chats/urv9ed/workspace/shadcn-ui/public/assets/hero-image.png', mode='create')</tool_call>" 
              alt="Data Analyst Hero" 
              className="max-w-full h-auto rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
