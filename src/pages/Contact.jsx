import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <div className="pb-24 -mt-20">
      <h2 className="my-20 text-center text-4xl lg:text-8xl">Contact</h2>

      <div className="max-w-4xl mx-auto text-center mb-16">
        <p className="text-xl lg:text-2xl text-stone-300 leading-relaxed">
          I'm always open to new opportunities and interesting discussions.
          Whether you have a project in mind, want to collaborate, or just want
          to chat about technology, feel free to reach out!
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="grid gap-6 md:grid-cols-1">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=cskamal004@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-6 rounded-lg border border-stone-700 bg-stone-900/50 hover:border-stone-500 hover:bg-stone-800/50 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-red-500/10 border border-red-500/20 group-hover:bg-red-500/20 transition-colors duration-300">
                <Mail className="h-6 w-6 text-red-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-stone-200 group-hover:text-white transition-colors duration-300">
                  Email
                </h3>
                <p className="text-stone-400 group-hover:text-stone-300 transition-colors duration-300">
                  cskamal004@gmail.com
                </p>
              </div>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-2 h-2 rounded-full bg-red-400"></div>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/sohaib-kamal-a99254342"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-6 rounded-lg border border-stone-700 bg-stone-900/50 hover:border-stone-500 hover:bg-stone-800/50 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors duration-300">
                <Linkedin className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-stone-200 group-hover:text-white transition-colors duration-300">
                  LinkedIn
                </h3>
                <p className="text-stone-400 group-hover:text-stone-300 transition-colors duration-300">
                  Connect with me professionally
                </p>
              </div>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
            </div>
          </a>

          <a
            href="https://github.com/Sohaib-Kamal04"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-6 rounded-lg border border-stone-700 bg-stone-900/50 hover:border-stone-500 hover:bg-stone-800/50 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-gray-500/10 border border-gray-500/20 group-hover:bg-gray-500/20 transition-colors duration-300">
                <Github className="h-6 w-6 text-gray-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-stone-200 group-hover:text-white transition-colors duration-300">
                  GitHub
                </h3>
                <p className="text-stone-400 group-hover:text-stone-300 transition-colors duration-300">
                  Check out my code and projects
                </p>
              </div>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            </div>
          </a>
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-stone-400 text-sm">
          Looking forward to hearing from you!
        </p>
      </div>
    </div>
  );
};

export default Contact;
