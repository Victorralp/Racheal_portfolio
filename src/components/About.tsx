// src/components/About.tsx
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "Python", level: 90 },
  { name: "SQL", level: 85 },
  { name: "Excel", level: 95 },
  { name: "Tableau", level: 80 },
  { name: "Power BI", level: 85 }
];

const experience = [
  {
    year: "2022-Present",
    title: "Senior Data Analyst",
    company: "Tech Corp",
    description: "Leading data analysis initiatives and creating interactive dashboards"
  },
  {
    year: "2020-2022",
    title: "Data Analyst",
    company: "Data Solutions Inc",
    description: "Performed statistical analysis and developed reporting systems"
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref} className="py-20 min-h-screen" id="about">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl font-bold mb-12 text-center"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6">Experience</h3>
            <div className="space-y-6">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 * index }}
                  className="border p-4 rounded-lg"
                >
                  <div className="font-medium text-primary">{item.year}</div>
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-sm text-muted-foreground">{item.company}</div>
                  <div className="mt-2 text-sm">{item.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-6">Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, width: 0 }}
                  animate={isInView ? { opacity: 1, width: "100%" } : {}}
                  transition={{ delay: 0.2 * index }}
                >
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 * index }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
