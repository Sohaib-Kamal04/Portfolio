import { Link, NavLink } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 lg:px-16">
      <div className="flex items-center">
        <a href="/" aria-label="Home" className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </a>
      </div>

      <div className="hidden md:flex items-center gap-6 text-lg font-medium">
        <NavLink
          className={({ isActive }) =>
            `transition-colors duration-200 ${
              isActive
                ? "text-white border-b-2 border-stone-300 pb-1"
                : "text-stone-300 hover:text-white"
            }`
          }
          to="/"
          aria-label="Home">
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `transition-colors duration-200 ${
              isActive
                ? "text-white border-b-2 border-stone-300 pb-1"
                : "text-stone-300 hover:text-white"
            }`
          }
          to="/certifications"
          aria-label="Certifications">
          Certifications
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `transition-colors duration-200 ${
              isActive
                ? "text-white border-b-2 border-stone-300 pb-1"
                : "text-stone-300 hover:text-white"
            }`
          }
          to="/projects"
          aria-label="Projects">
          Projects
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `transition-colors duration-200 ${
              isActive
                ? "text-white border-b-2 border-stone-300 pb-1"
                : "text-stone-300 hover:text-white"
            }`
          }
          to="/experience"
          aria-label="Experience">
          Experience
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `transition-colors duration-200 ${
              isActive
                ? "text-white border-b-2 border-stone-300 pb-1"
                : "text-stone-300 hover:text-white"
            }`
          }
          to="/contact"
          aria-label="Contact">
          Contact
        </NavLink>
      </div>

      <div className="flex items-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/sohaib-kamal-a99254342"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Sohaib-Kamal04"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
