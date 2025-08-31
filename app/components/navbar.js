"use client";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [socialOpen, setSocialOpen] = useState(false);
  const navDropdownRef = useRef(null);
  const socialDropdownRef = useRef(null);

  // Close dropdowns if clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (navDropdownRef.current && !navDropdownRef.current.contains(event.target)) {
        setNavOpen(false);
      }
      if (socialDropdownRef.current && !socialDropdownRef.current.contains(event.target)) {
        setSocialOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 p-5">
      {/* Navbar */}
      <nav className="flex items-center justify-evenly w-80 sm:w-120 md:w-150 max-w-screen px-6 py-4 rounded-full shadow-md backdrop-blur-md border border-dark-gray bg-dark-gray/60">
        {/* Navigation Button */}
        <div className="relative">
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="px-3 py-2 text-base rounded-md bg-transparent hover:bg-gray-700 focus:outline-none"
          >
            Navigation
          </button>

          {/* Navigation Dropdown */}
          {navOpen && (
            <ul
              ref={navDropdownRef}
              className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-40 rounded-md p-3 shadow-lg flex flex-col space-y-2 backdrop-blur-md border border-dark-gray bg-[#0a0a0a] z-50"
            >
              <li><a href="#landing-page" className="hover:underline">Landing Page</a></li>
              <li><a href="#experience" className="hover:underline">Experience</a></li>
              <li><a href="#skills" className="hover:underline">Skills</a></li>
              <li><a href="#projects" className="hover:underline">Projects</a></li>
              <li><a href="#contact-me" className="hover:underline">Contact Me</a></li>
            </ul>
          )}
        </div>

        {/* Social Button */}
        <div className="relative">
          <button
            onClick={() => setSocialOpen(!socialOpen)}
            className="px-3 py-2 text-base rounded-md bg-transparent hover:bg-gray-700 focus:outline-none"
          >
            Social
          </button>

          {/* Social Dropdown */}
          {socialOpen && (
            <ul
              ref={socialDropdownRef}
              className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-40 rounded-md p-3 shadow-lg flex flex-col space-y-2 backdrop-blur-md border border-dark-gray bg-[#0a0a0a] z-50"
            >
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a></li>
              <li><a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Vercel</a></li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
}