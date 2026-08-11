import Karigar from "../assets/projects/karigar.PNG";
import CrispCleaning from "../assets/projects/crisp_cleaning.png";
import DermaVista from "../assets/projects/dermavista.png";

export const EXPERIENCES = [
  {
    year: "Dec 2025 - Present",
    role: "Technical Lead",
    company: "Fyntryx Solutions",
    description: [
      "Directed the technical roadmap for the Crisp Cleaning platform, expanding the initial project scope from a static lead-generation site into a comprehensive, multi-tenant operational management system.",
      "Collaborated directly with international stakeholders to define business requirements, architecting complex logic such as custom customer reward tiers and timezone-aware scheduling (accommodating Daylight Saving Time).",
      "Engineered the full development lifecycle, ensuring seamless integration between client requirements, system architecture, and final deployment.",
    ],
    technologies: ["Next.js", "Node.js", "MongoDB", "Prisma", "React Native", "Flutter"],
  },
  {
    year: "Sep 2025 - Nov 2025",
    role: "Full Stack Developer",
    company: "Fyntryx Solutions",
    description: [
      "Architected a robust backend utilizing Node.js, MongoDB, and Prisma to power three distinct role-based interfaces (Admin, Customer, and Cleaner dashboards) for job tracking, assignments, and secure payouts.",
      "Migrated the initial React architecture to Next.js, significantly improving site performance and SEO while building a responsive, high-conversion frontend.",
      "Integrated third-party APIs to handle complex platform features, including Stripe for automated payment processing and Geoapify for precise, location-based service routing.",
    ],
    technologies: ["Next.js", "Node.js", "MongoDB", "Prisma", "Stripe", "Geoapify"],
  },
  {
    year: "June 2025 - July 2025",
    role: "Data Analyst Intern",
    company: "Systems Ltd",
    description: [
      "Built scalable data warehouses and streamlined automated ETL workflows using Power BI, SQL, and DAX to deliver accurate business intelligence dashboards for enterprise clients.",
    ],
    technologies: ["Power BI", "SQL", "DAX", "Power Query", "ETL"],
  },
];

export const PROJECTS = [
  {
    title: "DermaVista",
    image: DermaVista,
    description:
      "A 100% offline edge-computing AI diagnostic system using a quantized MobileNetV3 CNN, executing heavy 4D tensor mathematics on background Dart Isolates to prevent main-thread UI blocking, resolving critical GPU memory exhaustion, and building a Pre-Inference Gatekeeper using Google ML Kit.",
    technologies: ["Flutter", "Dart", "TensorFlow Lite", "Python", "Google ML Kit"],
  },
  {
    title: "Crisp Cleaning",
    image: CrispCleaning,
    description:
      "A comprehensive, multi-tenant operational SaaS management system migrated to Next.js, incorporating role-based interfaces, timezone-aware scheduling, Stripe automation, and precise Geoapify service routing.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Prisma", "Stripe", "Geoapify"],
    live: "https://www.crispcleaning.com.au/",
  },
  {
    title: "KariGar",
    image: Karigar,
    description:
      "A platform that connects customers with verified service providers and material suppliers in Pakistan, offering an easy way to book skilled workers and purchase construction materials.",
    technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
  },
];

export const CONTACT = {
  email: "cskamal19004@gmail.com",
  phone: "+92 3160195565",
  location: "Islamabad Capital Territory, Pakistan",
  linkedin: "https://www.linkedin.com/in/sohaibkamal",
  github: "https://github.com/Sohaib-Kamal04",
};

export const CERTIFICATIONS = [
  {
    title: "Full Stack JavaScript Developer Professional Certificate",
    issuedBy: "IBM",
    url: "https://coursera.org/share/e7c2d76faa71c8bfade45b014a5dde94",
  },
  {
    title: "React Native Specialization",
    issuedBy: "Meta",
    url: "https://coursera.org/share/3ccaeeb8705ef0eb8239f08ee1c28615",
  },
  {
    title: "Tailwind CSS From Scratch - Learn by Building Projects",
    issuedBy: "Packt",
    url: "https://coursera.org/share/afdafe9fcdcd1f662a7507438c021891",
  },
  {
    title: "Introduction to User Experience Design",
    issuedBy: "Georgia Institute of Technology ",
    url: "https://coursera.org/share/71f75c3eedf2ef9a7d45547798e32f5a",
  },
  {
    title: "React (Basic) Certificate",
    issuedBy: "HackerRank",
    url: "https://www.hackerrank.com/certificates/fbade638e6ce",
  },
  {
    title: "Software Engineer Intern Certificate",
    issuedBy: "HackerRank",
    url: "https://www.hackerrank.com/certificates/b330686ea627",
  },
  {
    title: "SQL (Intermediate) Certificate",
    issuedBy: "HackerRank",
    url: "https://www.hackerrank.com/certificates/157bae365d21",
  },
  {
    title: "Java Basic Certificate",
    issuedBy: "HackerRank",
    url: "https://www.hackerrank.com/certificates/cb1e247d2500",
  },
];
