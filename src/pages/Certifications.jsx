import React, { useRef, useState } from "react";
import { CERTIFICATIONS } from "../constants/index.js";
import { ExternalLink, Award, X, Sparkles, ShieldCheck, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Local mapping of detailed skills for each certificate to display in the modal popup
const CERT_DETAILS_MAP = {
  "Full Stack JavaScript Developer Professional Certificate": {
    category: "Full Stack",
    skills: ["React & Node.js", "Express Services", "RESTful API Design", "SQL/NoSQL Databases", "DevOps & Cloud", "Git Version Control"],
    difficulty: "Advanced",
    duration: "6 Months Program"
  },
  "React Native Specialization": {
    category: "Mobile",
    skills: ["React Native", "Cross-Platform UI", "State Management (Context)", "Navigation & Routing", "API Integration", "Mobile Design System"],
    difficulty: "Advanced",
    duration: "4 Months Program"
  },
  "Tailwind CSS From Scratch - Learn by Building Projects": {
    category: "Frontend",
    skills: ["Utility-First CSS", "Responsive Grid/Flexbox", "Tailwind Custom Configs", "Transitions & Animations", "Landing Page Layouts"],
    difficulty: "Intermediate",
    duration: "Self-Paced Course"
  },
  "Introduction to User Experience Design": {
    category: "Design",
    skills: ["User Research", "Wireframing & Prototyping", "Usability Testing", "UX Lifecycle", "Information Architecture"],
    difficulty: "Beginner",
    duration: "Academic Module"
  },
  "React (Basic) Certificate": {
    category: "Frontend",
    skills: ["React State & Props", "Component Lifecycle", "Event Handling", "Conditional Rendering", "HackerRank Verified"],
    difficulty: "Intermediate",
    duration: "Skill Assessment"
  },
  "Software Engineer Intern Certificate": {
    category: "Engineering",
    skills: ["Problem Solving", "Algorithms & Logic", "Data Structures", "Code Optimization", "HackerRank Verified"],
    difficulty: "Intermediate",
    duration: "Skill Assessment"
  },
  "SQL (Intermediate) Certificate": {
    category: "Databases",
    skills: ["Complex Queries & Joins", "Subqueries", "Aggregations", "Data Filtering", "HackerRank Verified"],
    difficulty: "Intermediate",
    duration: "Skill Assessment"
  },
  "Java Basic Certificate": {
    category: "Languages",
    skills: ["Java OOP Principles", "Basic Syntax & Logic", "Exception Handling", "Data Types & Lists", "HackerRank Verified"],
    difficulty: "Beginner",
    duration: "Skill Assessment"
  }
};

const CertCard = ({ cert, index, onOpen }) => {
  const cardRef = useRef(null);
  const details = CERT_DETAILS_MAP[cert.title] || { category: "General", skills: ["Credential Verification"] };

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const isFeatured = cert.title.toLowerCase().includes("full stack javascript");

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      viewport={{ once: true, amount: 0.15 }}
      onClick={() => onOpen(cert)}
      className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 hover:scale-[1.02] cursor-pointer flex flex-col justify-between min-h-[220px] ${
        isFeatured 
          ? "border-cyan-500/30 bg-stone-950/60 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] md:col-span-2" 
          : "border-stone-850 bg-stone-950/20 hover:border-stone-700/80 hover:bg-stone-950/40 hover:shadow-[0_0_20px_rgba(120,119,198,0.06)]"
      }`}
    >
      {/* Spotlight Radial Hover Glow */}
      <div className={`pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
        isFeatured 
          ? "bg-[radial-gradient(400px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(34,211,238,0.12),transparent)]" 
          : "bg-[radial-gradient(300px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(120,119,198,0.08),transparent)]"
      }`} />

      <div className="relative z-10 p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {isFeatured && <Sparkles className="h-4 w-4 text-cyan-400 animate-pulse" />}
            <span className="text-[10px] text-stone-500 font-bold uppercase tracking-wider">
              {isFeatured ? "Spotlight Program" : "Certification"}
            </span>
          </div>
          <span className="text-[10px] text-stone-500 font-bold uppercase tracking-wider">Click for details</span>
        </div>

        <h3 className={`font-extrabold leading-snug tracking-tight group-hover:text-white transition-colors duration-300 ${
          isFeatured ? "text-2xl lg:text-3xl text-cyan-400" : "text-lg text-stone-200"
        }`}>
          {cert.title}
        </h3>
      </div>

      <div className="relative z-10 p-6 pt-0 border-t border-stone-900/60 mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-stone-900 border border-stone-850 flex items-center justify-center font-bold text-stone-300 text-xs">
            {cert.issuedBy.trim().charAt(0)}
          </div>
          <span className="text-stone-400 text-xs font-semibold">{cert.issuedBy}</span>
        </div>
        
        <div className="flex items-center gap-1 text-[10px] text-stone-500 font-bold uppercase tracking-wider">
          <ShieldCheck className="h-3.5 w-3.5 text-cyan-500/80" />
          <span>Verified</span>
        </div>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const selectedDetails = selectedCert ? (CERT_DETAILS_MAP[selectedCert.title] || { category: "General", skills: ["Credential verification program"] }) : null;

  return (
    <div className="pb-24 -mt-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center my-20"
      >
        <h2 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-4">
          Credentials
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
      </motion.div>

      {/* Interactive Cards grid */}
      <div className="px-4 max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
        {CERTIFICATIONS.map((cert, index) => (
          <CertCard 
            key={cert.title} 
            cert={cert} 
            index={index} 
            onOpen={setSelectedCert} 
          />
        ))}
      </div>

      {/* Details Lightbox Modal overlay */}
      <AnimatePresence>
        {selectedCert && selectedDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 bg-neutral-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-stone-800 bg-stone-950 p-6 md:p-8 space-y-6 shadow-2xl shadow-neutral-950/80"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-1.5 rounded-lg bg-stone-900 border border-stone-800 text-stone-400 hover:text-white transition-all"
                aria-label="Close details"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="space-y-4">
                <h3 className="text-2xl font-extrabold text-white leading-snug pr-6">
                  {selectedCert.title}
                </h3>
                <p className="text-stone-400 text-sm font-semibold flex items-center gap-2">
                  Issued by: <span className="text-stone-200">{selectedCert.issuedBy}</span>
                </p>
              </div>

              {/* Verified metadata items */}
              <div className="grid grid-cols-2 gap-4 bg-stone-900/40 border border-stone-900 p-4 rounded-xl text-xs">
                <div>
                  <p className="text-stone-500 font-bold uppercase tracking-wider">Difficulty</p>
                  <p className="text-stone-300 font-semibold mt-0.5">{selectedDetails.difficulty || "Verified"}</p>
                </div>
                <div>
                  <p className="text-stone-500 font-bold uppercase tracking-wider">Program Type</p>
                  <p className="text-stone-300 font-semibold mt-0.5">{selectedDetails.duration || "Assessment"}</p>
                </div>
              </div>

              {/* Skills checklist */}
              <div className="space-y-3">
                <p className="text-xs text-stone-500 font-bold uppercase tracking-wider">Verified Skills Acquired</p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {selectedDetails.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-stone-300 text-xs">
                      <div className="rounded-full bg-cyan-500/10 border border-cyan-500/25 p-0.5 text-cyan-400">
                        <Check className="h-3 w-3" />
                      </div>
                      <span className="font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to action */}
              <div className="pt-4 flex gap-4">
                <a
                  href={selectedCert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-stone-950 font-bold py-3 px-6 rounded-xl hover:bg-stone-200 transition-all duration-300 text-sm"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Certifications;
