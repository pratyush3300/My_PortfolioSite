
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import BackgroundBlobs from "@/components/BackgroundBlobs";

const About: React.FC = () => {
  const timelineItems = [
    {
      year: "Feb-2024 -- Apr-2025",
      role: "Web Developer (Co-Lead)",
      company: "Artificial Intelligence Student Operated Council",
      description: "Collaborated with cross-functional teams to design, develop, and maintain web applications, contributing to building AISOC’s official website.",
    },
    {
      year: "Jun-2024 -- Aug-2024",
      role: "Web Developer Intern",
      company: "Acmegrade",
      description: "Gained hands-on experience in backend development with PHP and basic Node.js, successfully designing and implementing a full-fledged e-commerce website.",
    },
    {
      year: "2020 - 2022",
      role: "Intermediate Education",
      company: "Heritage International School",
      description: "Completed my intermediate education with a focus on Science Stream.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="section-padding bg-muted relative overflow-hidden">
      {/* Add background blobs with reduced opacity for muted sections */}
      <BackgroundBlobs className="opacity-50" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">About Me</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground/80">
            A passionate Web Developer with
            experience of building modern web applications. Enjoy working with cross-functional teams to
            create solutions that meet technical requirements, enhance user experience, and deliver real value.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 shadow-lg">
                <img
                  src="https://i.postimg.cc/g2TcfvxB/mypic.jpg"
                  alt="Pratyush Prasoon"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </motion.div>

          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="heading-md mb-8"
            >
              My Journey
            </motion.h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:bg-secondary before:rounded-full"
                >
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-sm text-secondary font-medium mb-1">
                        {item.year}
                      </p>
                      <h4 className="text-lg font-semibold mb-1">
                        {item.role}
                      </h4>
                      <p className="text-foreground/70 text-sm mb-2">
                        {item.company}
                      </p>
                      <p className="text-foreground/80">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
