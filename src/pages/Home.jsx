import { Link } from "react-router-dom";
import profilePic from "../assets/profile.JPG";
import { motion } from "framer-motion";
import About from "../pages/About.jsx";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, staggerChildren: 0.5 },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};
const Home = () => {
  return (
    <div className="pb-4">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-6">
            <motion.img
              src={profilePic}
              width={500}
              height={500}
              alt="Sohaib Kamal"
              className="border border-s-stone-700 rounded-full"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}></motion.img>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center pt-7 lg:items-start lg:ml-16">
            <motion.h2
              variants={childVariants}
              className="pb-2 text-4xl tracking-tighter lg:text-8xl leading-none">
              Sohaib Kamal
            </motion.h2>

            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={childVariants}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
              I am a Full Stack Developer with a passion for building modern,
              scalable web and mobile applications. I love transforming complex
              problems into elegant, maintainable, and user-friendly solutions
              that deliver impact. My work spans frontend design, backend
              architecture, and full-stack deployments. I strive to write clean,
              efficient code and deliver production-ready digital experiences.
            </motion.p>
            <motion.a
              variants={childVariants}
              href="../public/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-white rounded-full p-4 text-m font-semibold text-stone-800 mb-10">
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
      <About />
    </div>
  );
};

export default Home;
