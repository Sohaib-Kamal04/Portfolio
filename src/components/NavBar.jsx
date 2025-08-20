import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-8 py-4 lg:px-16 relative">
      {/* Logo */}
      <div className="flex items-center">
        <a href="/" aria-label="Home" className="flex items-center">
          <img src={logo} alt="Logo" className="h-15 w-auto" />
        </a>
      </div>

      {/* Desktop Nav */}
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

      {/* Social Links */}
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

        {/* Hamburger (Mobile only) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/90 flex flex-col items-center gap-6 py-6 text-lg font-medium md:hidden z-50">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-white border-b-2 border-stone-300 pb-1"
                : "text-stone-300 hover:text-white"
            }>
            Home
          </NavLink>
          <NavLink
            to="/certifications"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-white border-b-2 border-stone-300 pb-1"
                : "text-stone-300 hover:text-white"
            }>
            Certifications
          </NavLink>
          <NavLink
            to="/projects"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-white border-b-2 border-stone-300 pb-1"
                : "text-stone-300 hover:text-white"
            }>
            Projects
          </NavLink>
          <NavLink
            to="/experience"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-white border-b-2 border-stone-300 pb-1"
                : "text-stone-300 hover:text-white"
            }>
            Experience
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-white border-b-2 border-stone-300 pb-1"
                : "text-stone-300 hover:text-white"
            }>
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
