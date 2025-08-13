import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import BackgroundBlobs from "@/components/BackgroundBlobs";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  githubLink: string;
  fullDescription: string;
}

const projects: Project[] = [
    {
    id: 1,
    title: "First Portfolio Website ",
    description: "Developing this portfolio provided an opportunity to learn and experiment with React.js.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["HTML&CSS", "JavaScript","React.js"],
    demoLink: "https://myportfolio-snowy-seven.vercel.app/",
    // githubLink: "https://github.com/pratyush3300/firstPortfolio",
    fullDescription: "• It showcases my deep understanding of web technologies, skills, projects, featuring smooth animations with a clean and responsive design.",
  },

  {
    id: 2,
    title: "Study Nest",
    description: "Built a full-featured academic support platform to access PYQs for students.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    tags: ["JavaScript", "BootStrap"],
    demoLink: "https://studynest-six.vercel.app/",
    // githubLink: "https://github.com/pratyush3300/Study_Nest",
    fullDescription: "Developed an academic platform offering PYQs filtered by branch, semester, and subject, featuring a voice assistant chatbot for easy use and real-time query resolution.",
  },

  {
    id: 3,
    title: "Movie Recommendation System",
    description: "This Movie Recommendation System is a content-based model built using Python, TF-IDF vectorization, and cosine similarity.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["Python", "Machine Learning"],
    demoLink: "https://github.com/pratyush3300/Movie_Recomendation/blob/main/Model_Presentation.pdf",
    githubLink: "https://github.com/pratyush3300/Movie_Recomendation",
    fullDescription: "A Content-Based Movie Recommendation System developed as part of my Applied Programming Lab (AP Lab) project. It recommends movies similar to a user-given title using textual metadata and natural language processing techniques.",
  },

   {
    id: 4,
    title: "MapFood Platform",
    description: "Built the MapFood platform during the internship period.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["React.js", "Tailwind CSS"],
    demoLink: "https://internproject-mu.vercel.app/",
    // githubLink: "https://github.com/pratyush3300/My_PortfolioSite",
    fullDescription: "This is my internship project at Acmegrade Pvt. Ltd, where I developed MapFood, a food discovery platform with interactive onboarding and responsive layout for a seamless experience.",
  },
  
  {
    id: 5,
    title: "COVID-19 Site",
    description: "This website provides a detailed insights into the local impact of the COVID-19.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["HTML&CSS", "BootStrap"],
    demoLink: "https://pratyush3300.github.io/Go_Corona/",
    // githubLink: "https://github.com/pratyush3300/Go_Corona",
    fullDescription: "It presents users to meet-up with our best doctors, preventive measures, and vital resources to help communities stay informed and safe.",
  },
  
  {
    id: 6,
    title: "Meery Christmas",
    description: "This project showcases a responsive Christmas-themed website.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    tags: ["HTML&CSS", "JavaScript", "BootStrap"],
    demoLink: "https://pratyush3300.github.io/Christmas/",
    // githubLink: "https://github.com/pratyush3300/Christmas",
    fullDescription: "The project showcases a responsive Christmas-themed website. The design incorporates festive elements that capture the spirit of the holiday season.",
  },
  {
    id: 7,
    title: "New Portfolio Website",
    description: "I recently developed a new modern version of my portfolio website.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["React.js", "TypeScript", "Tailwind CSS"],
    demoLink: "https://my-portfolio-site-lac-one.vercel.app/",
    // githubLink: "https://github.com/pratyush3300/My_PortfolioSite",
    fullDescription: "Unlike my previous version, this site leverages Tailwind's utility-first approach to build custom layouts more efficiently without writing lengthy custom CSS. Overall, the new portfolio looks more professional.",
  },
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = ["All", "BootStrap", "React.js", "Python", "Machine Learning", "JavaScript", "Tailwind CSS"];

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter(project => project.tags.includes(filter));

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Add background blobs */}
      <BackgroundBlobs />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground/80">
            Explore my recent projects and see my skills in action. Each project represents
            different challenges I've tackled and technologies I've mastered.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((tag) => (
            <Button
              key={tag}
              variant={filter === tag ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(tag)}
              className={`rounded-full ${filter === tag ? "bg-secondary hover:bg-secondary/90" : ""}`}
            >
              {tag}
            </Button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="overflow-hidden h-full flex flex-col project-card">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="project-overlay absolute inset-0 bg-black/70 opacity-0 transition-opacity flex items-center justify-center p-4">
                    <Button 
                      variant="secondary" 
                      onClick={() => setSelectedProject(project)}
                      className="z-10"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
                  <p className="text-foreground/70 mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-secondary/10 text-secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-3 mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      asChild
                    >
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      asChild
                    >
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
              <DialogDescription className="text-foreground/70">
                {selectedProject.description}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <p className="mb-4">{selectedProject.fullDescription}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex space-x-4">
                <Button asChild>
                  <a
                    href={selectedProject.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    Live Demo
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    View Code
                  </a>
                </Button>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default Projects;
