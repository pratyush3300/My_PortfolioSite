import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import BackgroundBlobs from "@/components/BackgroundBlobs";

interface Skill {
  name: string;
  level: number;
  category: "Web Technologies" | "Languages" | "Tools & Platforms";
}

const skills: Skill[] = [
  { name: "HTML/CSS", level: 90, category: "Web Technologies" },
  { name: "JavaScript", level: 80, category: "Web Technologies" },
  { name: "Bootstrap", level: 80, category: "Web Technologies" },
  { name: "React", level: 70, category: "Web Technologies" },
  { name: "TypeScript", level: 55, category: "Web Technologies" },
  { name: "C++", level: 85, category: "Languages" },
  { name: "Python", level: 85, category: "Languages"},
  { name: "C", level: 85, category: "Languages" },
  { name: "Node.js", level: 70, category: "Web Technologies" },
  { name: "SQL", level: 85, category: "Languages" },
  { name: "GitHub", level: 90, category: "Tools & Platforms" },
   { name: "Figma", level: 90, category: "Tools & Platforms" },
  { name: "Power BI", level: 70, category: "Tools & Platforms" },
  { name: "Jupyter Notebook", level: 90, category: "Tools & Platforms" },
  { name: "Google Collab", level: 90, category: "Tools & Platforms" },
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
  const WebTechnologiesSkills = skills.filter(skill => skill.category === "Web Technologies");
  const LanguagesSkills = skills.filter(skill => skill.category === "Languages");
  const otherSkills = skills.filter(skill => skill.category === "Tools & Platforms");

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
            I've developed expertise in various fields and technologies, with a focus on building modern, responsive web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <SkillCategory title="Web Technologies" skills={WebTechnologiesSkills} />
          <SkillCategory title="Languages" skills={LanguagesSkills} />
          <SkillCategory title="Tools & Platforms" skills={otherSkills} />
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
