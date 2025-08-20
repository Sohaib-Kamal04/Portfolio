import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Contact = () => {
  return (
    <div className="pb-24 -mt-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl lg:text-8xl">
        Contact
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-center mb-16">
        <p className="text-xl lg:text-2xl text-stone-300 leading-relaxed">
          I'm always open to new opportunities and interesting discussions.
          Whether you have a project in mind, want to collaborate, or just want
          to chat about technology, feel free to reach out!
        </p>
      </motion.div>

      <div className="max-w-2xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="grid gap-6 md:grid-cols-1">
          {[
            {
              href: "https://mail.google.com/mail/?view=cm&fs=1&to=cskamal004@gmail.com",
              bg: "bg-red-500/10 border border-red-500/20 group-hover:bg-red-500/20",
              icon: <Mail className="h-6 w-6 text-red-400" />,
              title: "Email",
              desc: (
                <a
                  href="mailto:cskamal004@gmail.com"
                  className="underline text-stone-400 group-hover:text-stone-300 transition-colors duration-300">
                  cskamal004@gmail.com
                </a>
              ),
              dot: "bg-red-400",
            },
            {
              href: "https://www.linkedin.com/in/sohaib-kamal-a99254342",
              bg: "bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20",
              icon: <Linkedin className="h-6 w-6 text-blue-400" />,
              title: "LinkedIn",
              desc: "Connect with me professionally",
              dot: "bg-blue-400",
            },
            {
              href: "https://github.com/Sohaib-Kamal04",
              bg: "bg-gray-500/10 border border-gray-500/20 group-hover:bg-gray-500/20",
              icon: <Github className="h-6 w-6 text-gray-400" />,
              title: "GitHub",
              desc: "Check out my code and projects",
              dot: "bg-gray-400",
            },
          ].map((item, idx) => (
            <motion.a
              key={item.title}
              variants={cardVariants}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 rounded-lg border border-stone-700 bg-stone-900/50 hover:border-stone-500 hover:bg-stone-800/50 transition-all duration-300
        shadow-md hover:shadow-xl
      "
              whileHover={{
                scale: 1.035,
                y: -4,
                boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
              }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}>
              <div className="flex items-center gap-4">
                <div
                  className={`p-3 rounded-full ${item.bg} transition-colors duration-300`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-stone-200 group-hover:text-white transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-stone-400 group-hover:text-stone-300 transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`w-2 h-2 rounded-full ${item.dot}`}></div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
        className="mt-16 text-center">
        <p className="text-stone-400 text-sm">
          Looking forward to hearing from you!
        </p>
      </motion.div>
    </div>
  );
};

export default Contact;
