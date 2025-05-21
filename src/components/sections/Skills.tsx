import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import BackgroundBlobs from "@/components/BackgroundBlobs";

interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "Languages";
}

const skills: Skill[] = [
  { name: "HTML/CSS", level: 90, category: "frontend" },
  { name: "JavaScript", level: 80, category: "frontend" },
  { name: "Tailwind CSS", level: 80, category: "frontend" },
  { name: "React", level: 80, category: "frontend" },
  { name: "TypeScript", level: 55, category: "frontend" },
  { name: "Node.js", level: 75, category: "backend" },
  { name: "MongoDB", level: 78, category: "backend" },
  { name: "SQL", level: 85, category: "backend" },
  { name: "GitHub", level: 88, category: "Languages" },
  { name: "Power BI", level: 70, category: "Languages" },
  { name: "C++ Language", level: 80, category: "Languages" },
  { name: "Machine Learning", level: 65, category: "Languages" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
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

const Skills: React.FC = () => {
  const frontendSkills = skills.filter(skill => skill.category === "frontend");
  const backendSkills = skills.filter(skill => skill.category === "backend");
  const otherSkills = skills.filter(skill => skill.category === "Languages");

  return (
    <section id="skills" className="section-padding bg-muted relative overflow-hidden">
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
          <h2 className="heading-lg mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground/80">
            I've developed expertise in various technologies across the full stack,
            with a focus on building modern, responsive web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <SkillCategory title="Frontend" skills={frontendSkills} />
          <SkillCategory title="Backend" skills={backendSkills} />
          <SkillCategory title="Tools & Languages" skills={otherSkills} />
        </div>
      </div>
    </section>
  );
};

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col"
    >
      <Card className="h-full flex flex-col">
        <CardContent className="p-6 flex flex-col flex-grow">
          <h3 className="heading-sm mb-6 text-center">{title}</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 flex-grow"
          >
            {skills.map((skill) => (
              <motion.div key={skill.name} variants={itemVariants}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-secondary">{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-secondary"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Skills;
