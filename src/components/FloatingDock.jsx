import React, { useEffect, useState } from "react";
import { Home, User, Briefcase, FolderGit2, Award, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingDock = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const navItems = [
    { id: "home", label: "Home", icon: <Home className="h-5 w-5" /> },
    { id: "about", label: "About", icon: <User className="h-5 w-5" /> },
    { id: "experience", label: "Experience", icon: <Briefcase className="h-5 w-5" /> },
    { id: "projects", label: "Projects", icon: <FolderGit2 className="h-5 w-5" /> },
    { id: "certifications", label: "Certifications", icon: <Award className="h-5 w-5" /> },
    { id: "contact", label: "Contact", icon: <Mail className="h-5 w-5" /> },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Triggers when the section takes up the center of the viewport
      threshold: 0.15,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => {
      navItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 w-auto max-w-[95vw]">
      <motion.div 
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="flex items-center gap-3 px-4 py-3 rounded-full bg-stone-900/70 border border-stone-800/80 backdrop-blur-xl shadow-2xl shadow-black/80"
      >
        {navItems.map((item, index) => {
          const isActive = activeSection === item.id;
          return (
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <button
                onClick={() => handleScrollTo(item.id)}
                aria-label={`Scroll to ${item.label}`}
                className={`relative p-3 rounded-full flex items-center justify-center transition-colors duration-300 ${
                  isActive 
                    ? "text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30" 
                    : "text-stone-400 hover:text-stone-100"
                }`}
              >
                {/* Active Indicator Glow */}
                {isActive && (
                  <motion.div
                    layoutId="activeGlow"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-md -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {item.icon}
              </button>

              {/* Tooltip */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.span
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: -45, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-1/2 -translate-x-1/2 bg-stone-900 border border-stone-800 px-3 py-1.5 rounded-md text-xs font-semibold text-stone-200 whitespace-nowrap shadow-lg select-none"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default FloatingDock;
