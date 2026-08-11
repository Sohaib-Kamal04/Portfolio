import React, { useRef } from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import { Calendar, Building2 } from "lucide-react";

const ExperienceCard = ({ experience, index }) => {
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
    <div className="relative pl-8 sm:pl-10 group">
      {/* Vertical Line Connector Node */}
      <div className="absolute left-0 top-1.5 flex items-center justify-center">
        <div className="w-5 h-5 rounded-full bg-stone-950 border-2 border-stone-800 group-hover:border-cyan-400 group-hover:scale-110 transition-all duration-300 z-10 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-stone-700 group-hover:bg-cyan-400 transition-colors" />
        </div>
      </div>

      {/* Experience Card */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        className="relative overflow-hidden rounded-2xl border border-stone-800/80 bg-stone-950/40 p-6 backdrop-blur-md transition-all duration-500 hover:border-stone-600/50 hover:shadow-[0_0_30px_rgba(120,119,198,0.12)] space-y-4"
      >
        {/* Spotlight Effect */}
        <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(350px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(120,119,198,0.08),transparent)]" />

        <div className="relative z-10">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-stone-900 pb-3">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors duration-300">
                {experience.role}
              </h3>
              <div className="flex items-center gap-2 text-stone-400 text-sm mt-1">
                <Building2 className="h-4 w-4 text-stone-500" />
                <span className="font-semibold text-stone-300">{experience.company}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-stone-400 text-sm bg-stone-900/60 border border-stone-800/80 px-3 py-1.5 rounded-full self-start md:self-center">
              <Calendar className="h-3.5 w-3.5 text-stone-500" />
              <span className="font-medium tracking-wide">{experience.year}</span>
            </div>
          </div>

          {/* Description list */}
          <div className="mt-4 text-stone-400 text-sm sm:text-base leading-relaxed space-y-3">
            {experience.description.map((bullet, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <span className="text-cyan-500 mt-1.5 text-xs">✦</span>
                <p>{bullet.replace(/^•\s*/, "")}</p>
              </div>
            ))}
          </div>

          {/* Technologies Used */}
          <div className="mt-6 pt-4 border-t border-stone-900 flex flex-wrap gap-2">
            {experience.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs bg-stone-900/80 border border-stone-800/80 px-2.5 py-1 rounded-md text-stone-300 font-medium tracking-wide transition-colors duration-300 group-hover:border-stone-700/80 group-hover:text-stone-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="pb-24 -mt-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center my-20"
      >
        <h2 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-4">
          Experience
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
      </motion.div>

      <div className="relative max-w-4xl mx-auto px-4">
        {/* Central Vertical timeline line */}
        <div className="absolute left-2.5 sm:left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-stone-800 via-stone-800 to-transparent" />

        <div className="space-y-12">
          {EXPERIENCES.map((experience, index) => (
            <ExperienceCard key={index} index={index} experience={experience} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
