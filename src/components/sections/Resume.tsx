import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import BackgroundBlobs from "@/components/BackgroundBlobs";

const Resume: React.FC = () => {
  return (
    <section id="resume" className="section-padding relative overflow-hidden">
      {/* Add background blobs */}
      <BackgroundBlobs />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">Resume</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground/80">
            Download my resume to get a comprehensive view of my skills,
            experience, and qualifications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-primary/5 to-secondary/5 p-10 md:p-16 rounded-xl shadow-lg text-center relative overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>

          <h3 className="heading-md mb-6">Ready to see more about my experience?</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            My resume contains details about my work history, education,
            technical skills, and achievements. Feel free to download it for your
            reference.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
           <a href="https://drive.google.com/uc?export=download&id=1WFKaJf-p9YTNqwHPjQGm8eCV4eNaVvyI" target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              className="group relative bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 rounded-full px-10 py-6 shadow-lg hover:shadow-primary/20 hover:shadow-xl transition-all duration-300"
            >
              <span className="flex items-center">
                <Download className="mr-2 h-5 w-5 transition-transform group-hover:translate-y-0.5" />
                Download Resume
              </span>
              <span className="absolute inset-0 rounded-full animate-pulse-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Button>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="p-8 bg-card rounded-xl shadow-sm">
            <h3 className="heading-sm mb-6">Education</h3>
            <ul className="space-y-6">
              <li className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-secondary before:rounded-full">
                <p className="text-sm text-secondary font-medium">2022 - 2026</p>
                <h4 className="text-lg font-semibold">Bachelor's of Technology in IT</h4>
                <p className="text-muted-foreground">KIIT University</p>
              </li>
              <li className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-secondary before:rounded-full">
                <p className="text-sm text-secondary font-medium">2020-2022</p>
                <h4 className="text-lg font-semibold">Intermediate Education</h4>
                <p className="text-muted-foreground">Heritage International School</p>
              </li>
            </ul>
          </div>

          <div className="p-8 bg-card rounded-xl shadow-sm">
            <h3 className="heading-sm mb-6">Certifications</h3>
            <ul className="space-y-6">
              <li className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-primary before:rounded-full">
                <p className="text-sm text-primary font-medium">2024</p>
                <h4 className="text-lg font-semibold">Web Developer(Co-Lead)</h4>
                <p className="text-muted-foreground">AISOC, KIIT</p>
              </li>
              <li className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-primary before:rounded-full">
                <p className="text-sm text-primary font-medium">2024</p>
                <h4 className="text-lg font-semibold">Python Developer</h4>
                <p className="text-muted-foreground">AICTE Certified</p>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
