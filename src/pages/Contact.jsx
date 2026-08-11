import React, { useRef, useState } from "react";
import { Mail, Github, Linkedin, MapPin, Phone, Copy, Check } from "lucide-react";
import { motion } from "framer-motion";
import { CONTACT } from "../constants";

const ContactCard = ({ icon, title, value, href, canCopy }) => {
  const cardRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleCopy = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const CardBody = () => (
    <>
      {/* Radial Hover Glow */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(350px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(120,119,198,0.1),transparent)]" />
      
      <div className="relative z-10 flex flex-col items-center text-center space-y-4">
        <div className="p-4 rounded-full bg-stone-900 border border-stone-800 text-cyan-400 group-hover:text-white group-hover:bg-cyan-500/20 group-hover:border-cyan-500/30 transition-all duration-300">
          {icon}
        </div>
        <div className="space-y-1">
          <p className="text-xs text-stone-500 font-bold uppercase tracking-wider">{title}</p>
          <p className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
            {value}
          </p>
        </div>
        
        {canCopy && (
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-800 text-stone-400 hover:text-white hover:border-stone-600 transition-all duration-300 text-xs font-semibold"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-green-400" />
                <span className="text-green-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>Copy Email</span>
              </>
            )}
          </button>
        )}
      </div>
    </>
  );

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden rounded-2xl border border-stone-800 bg-stone-950/40 p-8 block transition-all duration-500 hover:border-stone-600/50 hover:shadow-[0_0_30px_rgba(120,119,198,0.12)]"
    >
      <CardBody />
    </a>
  ) : (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden rounded-2xl border border-stone-800 bg-stone-950/40 p-8 transition-all duration-500 hover:border-stone-600/50 hover:shadow-[0_0_30px_rgba(120,119,198,0.12)]"
    >
      <CardBody />
    </div>
  );
};

const Contact = () => {
  return (
    <div className="pb-24 -mt-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center my-20"
      >
        <h2 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-4">
          Get In Touch
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 space-y-12">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xl text-stone-400 text-center max-w-2xl mx-auto leading-relaxed"
        >
          Let's create something <span className="text-cyan-400 font-semibold">extraordinary</span> together. 
          I am always open to discussing new software engineering roles, technical leadership opportunities, or collaborations.
        </motion.p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ContactCard
            icon={<Mail className="h-6 w-6" />}
            title="Email Address"
            value={CONTACT.email}
            href={`mailto:${CONTACT.email}`}
            canCopy={true}
          />
          <ContactCard
            icon={<Phone className="h-6 w-6" />}
            title="Phone Number"
            value={CONTACT.phone}
            href={`tel:${CONTACT.phone.replace(/\s+/g, "")}`}
          />
          <ContactCard
            icon={<MapPin className="h-6 w-6" />}
            title="Location"
            value={CONTACT.location}
          />
        </div>

        {/* Social Cards grid */}
        <div className="pt-6 border-t border-stone-900/60">
          <p className="text-center text-xs text-stone-500 font-bold uppercase tracking-widest mb-6">
            Connect via Social Channels
          </p>
          <div className="flex justify-center gap-6">
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-6 py-3 rounded-xl bg-stone-950 border border-stone-850 text-stone-400 hover:text-white hover:border-stone-600 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.1)] hover:scale-105"
            >
              <Linkedin className="h-5 w-5 text-blue-400" />
              <span className="font-semibold text-sm">LinkedIn</span>
            </a>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-6 py-3 rounded-xl bg-stone-950 border border-stone-850 text-stone-400 hover:text-white hover:border-stone-600 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:scale-105"
            >
              <Github className="h-5 w-5 text-stone-300" />
              <span className="font-semibold text-sm">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
