// src/components/Projects.tsx
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";

const projects = [
  {
    title: "Sales Analysis Dashboard",
    description: "Interactive dashboard analyzing sales trends and patterns",
    image: "<tool_call>ImageGetter.get(search_term='sales dashboard visualization', image_save_path='/data/chats/urv9ed/workspace/shadcn-ui/public/assets/project1.png', mode='create')</tool_call>",
    link: "https://github.com/example/sales-dashboard"
  },
  {
    title: "Customer Segmentation",
    description: "ML-based customer segmentation analysis",
    image: "<tool_call>ImageGetter.get(search_term='customer segmentation visualization', image_save_path='/data/chats/urv9ed/workspace/shadcn-ui/public/assets/project2.png', mode='create')</tool_call>",
    link: "https://github.com/example/customer-segmentation"
  },
  {
    title: "Predictive Analytics",
    description: "Time series forecasting for business metrics",
    image: "<tool_call>ImageGetter.get(search_term='predictive analytics chart', image_save_path='/data/chats/urv9ed/workspace/shadcn-ui/public/assets/project3.png', mode='create')</tool_call>",
    link: "https://github.com/example/predictive-analytics"
  }
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref} className="py-20 min-h-screen bg-secondary/20" id="projects">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl font-bold mb-12 text-center"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 * index }}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Card>
                  <CardHeader>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <CardTitle className="mt-4">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-primary hover:underline">
                      View Project →
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
