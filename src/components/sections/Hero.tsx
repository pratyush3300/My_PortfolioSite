
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import BackgroundBlobs from "@/components/BackgroundBlobs";

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background blobs */}
      <BackgroundBlobs />

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-secondary font-medium mb-4">Hello, I'm</p>
            <h1 className="heading-xl mb-6">
              <span className="gradient-text">Pratyush Prasoon</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8">
              Motivated and articulate engineer with hands-on experience in building and maintaining large-scale, secure, and high-availability systems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6"
              asChild
            >
              <a href="#contact">Get in touch</a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-secondary text-secondary hover:text-secondary-foreground hover:bg-secondary rounded-full px-8 py-6"
              asChild
            >
              <a href="#projects">View my work</a>
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-foreground/60 mb-2">Scroll down</span>
        <ArrowDown className="animate-bounce-slow text-primary w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;
