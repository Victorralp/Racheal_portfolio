// src/components/Resume.tsx
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref} className="py-20 min-h-screen" id="resume">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl font-bold mb-12 text-center"
        >
          Resume
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="bg-card p-8 rounded-lg shadow-lg"
          >
            <div className="mb-8 flex justify-between items-center">
              <h3 className="text-2xl font-semibold">John Doe</h3>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download CV
                </Button>
              </motion.div>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-semibold mb-4">Professional Summary</h4>
                <p className="text-muted-foreground">
                  Experienced Data Analyst with 5+ years of expertise in transforming complex data into actionable insights.
                  Proficient in Python, SQL, and various data visualization tools.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4">Skills</h4>
                <div className="grid grid-cols-2 gap-4">
                  <ul className="list-disc list-inside">
                    <li>Data Analysis</li>
                    <li>Statistical Modeling</li>
                    <li>Data Visualization</li>
                  </ul>
                  <ul className="list-disc list-inside">
                    <li>Python Programming</li>
                    <li>SQL & Database Management</li>
                    <li>Machine Learning</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
