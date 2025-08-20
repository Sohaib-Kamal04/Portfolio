import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="pb-4 -mt-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="my-20 text-center text-8xl">
        Experience
      </motion.h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/8 pt-1">
              <p className="mb-2 text-m text-stone-400">{experience.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="wfull max-w-xl lg:w-3/4">
              <h2 className="text-2xl mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-stone-500">
                  {experience.company}
                </span>
              </h2>
              <p className="mb-4 text-stone-400">
                <ul>
                  {experience.description.map((line, index) => (
                    <li key={index}>{line}</li>
                  ))}
                </ul>
              </p>
              {experience.technologies.map((tech, index) => (
                <span
                  className="mr-2 mt-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                  key={index}>
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
