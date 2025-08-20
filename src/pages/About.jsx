import React from "react";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import {
  DiCss3,
  DiDocker,
  DiNodejsSmall,
  DiNpm,
  DiPhp,
  DiReact,
} from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import {
  RiHtml5Fill,
  RiJavascriptFill,
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiExpress,
  SiGithub,
  SiMongodb,
  SiMysql,
  SiVite,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { motion } from "framer-motion";

// Variants
const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, staggerChildren: 0.5 },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const techContainerVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      staggerChildren: 0.15,
    },
  },
};

const iconVariants = {
  hidden: { opacity: 0, x: -70 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const About = () => {
  const techCategories = [
    {
      title: "Frontend",
      technologies: [
        {
          icon: (
            <RiReactjsLine className="text-4xl lg:text-7xl text-cyan-400" />
          ),
          name: "React",
        },
        {
          icon: (
            <RiHtml5Fill className="text-4xl lg:text-7xl text-orange-500" />
          ),
          name: "HTML5",
        },
        {
          icon: <DiCss3 className="text-4xl lg:text-7xl text-blue-600" />,
          name: "CSS3",
        },
        {
          icon: (
            <RiJavascriptFill className="text-4xl lg:text-7xl text-yellow-400" />
          ),
          name: "JavaScript",
        },
        {
          icon: (
            <RiTailwindCssFill className="text-4xl lg:text-7xl text-cyan-500" />
          ),
          name: "Tailwind",
        },
        {
          icon: (
            <BiLogoTypescript className="text-4xl lg:text-7xl text-blue-500" />
          ),
          name: "TypeScript",
        },
        {
          icon: (
            <TbBrandReactNative className="text-4xl lg:text-7xl text-blue-400" />
          ),
          name: "React Native",
        },
      ],
    },
    {
      title: "Backend",
      technologies: [
        {
          icon: (
            <DiNodejsSmall className="text-4xl lg:text-7xl text-green-500" />
          ),
          name: "Node.js",
        },
        {
          icon: <SiExpress className="text-4xl lg:text-7xl text-gray-500" />,
          name: "Express",
        },
        {
          icon: <DiPhp className="text-4xl lg:text-7xl text-purple-600" />,
          name: "PHP",
        },
        {
          icon: <SiMongodb className="text-4xl lg:text-7xl text-green-600" />,
          name: "MongoDB",
        },
        {
          icon: <SiMysql className="text-4xl lg:text-7xl text-blue-700" />,
          name: "MySQL",
        },
        {
          icon: (
            <BiLogoPostgresql className="text-4xl lg:text-7xl text-sky-700" />
          ),
          name: "PostgreSQL",
        },
      ],
    },
    {
      title: "Tools & Technologies",
      technologies: [
        {
          icon: <DiDocker className="text-4xl lg:text-7xl text-blue-400" />,
          name: "Docker",
        },
        {
          icon: <FaGitAlt className="text-4xl lg:text-7xl text-orange-500" />,
          name: "Git",
        },
        {
          icon: <SiGithub className="text-4xl lg:text-7xl text-gray-400" />,
          name: "GitHub",
        },
        {
          icon: <VscVscode className="text-4xl lg:text-7xl text-blue-500" />,
          name: "VS Code",
        },
        {
          icon: <SiVite className="text-4xl lg:text-7xl text-yellow-500" />,
          name: "Vite",
        },
        {
          icon: <DiNpm className="text-4xl lg:text-7xl text-red-600" />,
          name: "NPM",
        },
      ],
    },
  ];

  return (
    <div className="pb-24">
      {/* Who I Am */}
      <h2 className="my-20 text-center text-6xl">Who I Am</h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-4xl mx-auto text-center leading-relaxed text-stone-300 space-y-6">
        <motion.p variants={childVariants}>
          I’m someone who sees technology as more than just lines of code — for
          me, it’s a way to{" "}
          <span className="text-cyan-400">create, solve, and connect</span>. My
          path in software engineering started with curiosity, and that
          curiosity quickly grew into a passion for building things that
          actually matter. Whether it’s a web app that simplifies daily life or
          a mobile app that brings people closer, I love the challenge of taking
          an idea and turning it into something real and useful.
        </motion.p>
        <motion.p variants={childVariants}>
          What excites me most is the{" "}
          <span className="text-cyan-400">end-to-end journey</span> — from
          sketching out a concept to writing clean code, designing smooth
          interactions, and watching people use what I’ve built. Every project
          teaches me something new, not just about tech, but about
          problem-solving, creativity, and persistence. At the core, I’m a
          builder, a learner, and someone who enjoys making digital experiences
          that feel effortless for others to use.
        </motion.p>
      </motion.div>

      {/* Technologies */}
      <h2 className="my-20 text-center text-6xl">Technologies I work with</h2>
      <div className="space-y-16">
        {techCategories.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="lg:w-1/4 flex-shrink-0 lg:mr-20">
              <h3 className="text-3xl font-semibold text-stone-200 lg:text-right lg:pr-8">
                {category.title}
              </h3>
              <div className="hidden lg:block w-full h-px bg-gradient-to-l from-stone-600 to-transparent mt-4"></div>
            </div>

            <div className="lg:w-3/4">
              <motion.div
                variants={techContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    variants={iconVariants}
                    key={techIndex}
                    className="p-4 group">
                    <div className="transition-transform duration-300 group-hover:scale-110">
                      {tech.icon}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
