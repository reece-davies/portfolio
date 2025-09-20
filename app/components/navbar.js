"use client";
import { useState, useRef, useEffect } from "react";
import {GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon, VercelLogoIcon, InstagramLogoIcon} from "@radix-ui/react-icons"

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [socialOpen, setSocialOpen] = useState(false);
  const navDropdownRef = useRef(null);
  const socialDropdownRef = useRef(null);

  // Close dropdowns if clicking outside navbar
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
      <nav className="flex items-center justify-evenly w-80 sm:w-120 md:w-150 max-w-screen px-6 py-4 rounded-full shadow-md backdrop-blur-md border border-zinc-500">
        {/* Navigation Button */}
        <div className="relative">
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="px-3 py-2 text-base rounded-md bg-transparent focus:outline-none"
          >
            Navigation
          </button>

          {/* Navigation Dropdown */}
          {navOpen && (
            <ul
              ref={navDropdownRef}
              className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-40 rounded-xl p-3 shadow-lg flex flex-col space-y-2 backdrop-blur-md border border-zinc-500 bg-[#0a0a0a] z-50"
            >
              <li><a href="#hero" className="hover:underline">Hero</a></li>
              <li><a href="#profilesummary" className="hover:underline">Profile Summary</a></li>
              <li><a href="#experience" className="hover:underline">Experience</a></li>
              <li><a href="#projects" className="hover:underline">Projects</a></li>
              <li><a href="#skills" className="hover:underline">Skills</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          )}
        </div>

        {/* Social Button */}
        <div className="relative">
          <button
            onClick={() => setSocialOpen(!socialOpen)}
            className="px-3 py-2 text-base rounded-md bg-transparent focus:outline-none"
          >
            Social
          </button>

          {/* Social Dropdown */}
          {socialOpen && (
            <ul
              ref={socialDropdownRef}
              className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-40 rounded-xl p-3 shadow-lg flex flex-col space-y-2 backdrop-blur-md border border-zinc-500 bg-[#0a0a0a] z-50"
            >
              <li>
                <a
                  href="https://github.com/reece-davies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:underline"
                >
                  <GitHubLogoIcon className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/reece-davies-063436110/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:underline"
                >
                  <LinkedInLogoIcon className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/reece.dylavies/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:underline"
                >
                  <InstagramLogoIcon className="w-5 h-5" />
                  <span>Instagram</span>
                </a>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
}