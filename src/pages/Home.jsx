import { Link } from "react-router-dom";
import profilePic from "../assets/profile.JPG";
import About from "../pages/About.jsx";

const Home = () => {
  return (
    <div className="pb-4">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-6">
            <img
              src={profilePic}
              alt="Sohaib Kamal"
              className="border border-s-stone-700 rounded-full"></img>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center pt-7 lg:items-start lg:ml-16">
            <h2 className="pb-2 text-4xl tracking-tighter lg:text-8xl leading-none">
              Sohaib Kamal
            </h2>

            <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">
              Full Stack Developer
            </span>
            <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
              I am a Full Stack Developer with a passion for building modern,
              scalable web and mobile applications. I love transforming complex
              problems into elegant, maintainable, and user-friendly solutions
              that deliver impact. My work spans frontend design, backend
              architecture, and full-stack deployments. I strive to write clean,
              efficient code and deliver production-ready digital experiences.
            </p>
            <a
              href="../public/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-white rounded-full p-4 text-m font-semibold text-stone-800 mb-10">
              Download Resume
            </a>
          </div>
        </div>
      </div>
      <About />
    </div>
  );
};

export default Home;
