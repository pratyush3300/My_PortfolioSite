
import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-background border-t border-border py-8"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-4 md:mb-0"
          >
            <a 
              href="#home" 
              className="text-xl font-bold gradient-text"
            >
              John<span className="text-secondary">Doe</span>
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center md:text-left text-foreground/70 text-sm"
          >
            <p>© {currentYear} John Doe. All rights reserved.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-4 md:mt-0"
          >
            <nav className="flex space-x-6">
              <a href="#home" className="text-foreground/70 hover:text-secondary text-sm">
                Home
              </a>
              <a href="#about" className="text-foreground/70 hover:text-secondary text-sm">
                About
              </a>
              <a href="#projects" className="text-foreground/70 hover:text-secondary text-sm">
                Projects
              </a>
              <a href="#contact" className="text-foreground/70 hover:text-secondary text-sm">
                Contact
              </a>
            </nav>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
