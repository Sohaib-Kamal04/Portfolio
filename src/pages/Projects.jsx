import React, { useRef } from "react";
import { PROJECTS } from "../constants/index.js";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="group relative overflow-hidden rounded-2xl border border-stone-800/80 bg-stone-950/40 p-5 backdrop-blur-md transition-all duration-500 hover:border-stone-600/50 hover:shadow-[0_0_30px_rgba(120,119,198,0.15)] flex flex-col justify-between h-full"
    >
      {/* Spotlight Hover Glow */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(350px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(120,119,198,0.1),transparent)]" />

      <div className="relative z-10 space-y-4">
        {/* Project Image Container */}
        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative overflow-hidden rounded-xl border border-stone-800/60 bg-stone-900/50 aspect-video"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-neutral-950/30 group-hover:bg-transparent transition-colors duration-500" />
          </a>
        ) : (
          <div className="relative overflow-hidden rounded-xl border border-stone-800/60 bg-stone-900/50 aspect-video flex items-center justify-center">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-neutral-950/30 group-hover:bg-transparent transition-colors duration-500" />
          </div>
        )}

        {/* Project Header Info */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            {project.live ? (
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
              </a>
            ) : (
              <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors duration-300">
                {project.title}
              </h3>
            )}
            <div className="flex items-center gap-3">
              <a
                href={project.github || "https://github.com/Sohaib-Kamal04"}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full bg-stone-900/80 border border-stone-800 text-stone-400 hover:text-white hover:border-stone-600 transition-all duration-300"
                aria-label="GitHub Repository"
              >
                <Github className="h-4.5 w-4.5" />
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-full bg-stone-900/80 border border-stone-800 text-stone-400 hover:text-white hover:border-stone-600 transition-all duration-300"
                  aria-label="Live Demo"
                >
                  <ExternalLink className="h-4.5 w-4.5" />
                </a>
              )}
            </div>
          </div>
          <p className="text-stone-400 text-sm leading-relaxed min-h-[70px]">
            {project.description}
          </p>
        </div>
      </div>

      {/* Tech badges section */}
      <div className="relative z-10 pt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="text-xs bg-stone-900/80 border border-stone-800/80 px-2.5 py-1 rounded-md text-stone-300 font-medium tracking-wide transition-colors duration-300 group-hover:border-stone-700/80 group-hover:text-stone-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="pb-24 -mt-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center my-20"
      >
        <h2 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-4">
          Featured Projects
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto px-4">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
