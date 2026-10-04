"use client";

import { useState, useRef, useEffect } from "react";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  InstagramLogoIcon,
  ChevronDownIcon,
  ExternalLinkIcon,
  HomeIcon,
  PersonIcon,
  BackpackIcon,
  CodeIcon,
  LightningBoltIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";

const navLinks = [
  { id: "hero", label: "Home", Icon: HomeIcon },
  { id: "profilesummary", label: "Profile Summary", Icon: PersonIcon },
  { id: "experience", label: "Experience", Icon: BackpackIcon },
  { id: "projects", label: "Projects", Icon: CodeIcon },
  { id: "skills", label: "Skills", Icon: LightningBoltIcon },
  { id: "contact", label: "Contact", Icon: EnvelopeClosedIcon },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/reece-davies", Icon: GitHubLogoIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/reece-davies-063436110/", Icon: LinkedInLogoIcon },
  { label: "Instagram", href: "https://www.instagram.com/reece.dylavies/", Icon: InstagramLogoIcon },
];

function MenuTrigger({ label, open, onClick, menuId }) {
  return (
    <button
      onClick={onClick}
      aria-expanded={open}
      aria-controls={menuId}
      className={`
        inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-base
        transition-colors duration-200 focus:outline-none
        focus-visible:ring-2 focus-visible:ring-sky-500/60
        ${open ? "bg-white/10 text-white" : "text-zinc-300 hover:bg-white/5 hover:text-white"}
      `}
    >
      {label}
      <ChevronDownIcon
        className={`h-4 w-4 text-zinc-500 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      />
    </button>
  );
}

function MenuPanel({ open, menuId, children }) {
  return (
    <div
      id={menuId}
      className={`
        absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 origin-top
        rounded-2xl border border-zinc-600/70 bg-zinc-950/80 backdrop-blur-xl
        p-2 shadow-2xl shadow-black/40
        transition-all duration-200 ease-out
        ${open
          ? "visible opacity-100 scale-100 translate-y-0"
          : "invisible opacity-0 scale-95 -translate-y-1"}
      `}
    >
      <ul className="flex flex-col gap-0.5">{children}</ul>
    </div>
  );
}

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null); // "nav" | "social" | null
  const [activeId, setActiveId] = useState("hero");
  const containerRef = useRef(null);

  const toggle = (name) => setOpenMenu((prev) => (prev === name ? null : name));
  const close = () => setOpenMenu(null);

  // Close on outside click or Escape
  useEffect(() => {
    function handlePointerDown(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    }
    function handleKeyDown(event) {
      if (event.key === "Escape") setOpenMenu(null);
    }
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Highlight the section currently in view
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 p-5">
      <nav
        ref={containerRef}
        className="flex items-center justify-evenly w-80 sm:w-120 md:w-150 max-w-screen px-6 py-3 rounded-full shadow-md backdrop-blur-md bg-zinc-950/40 border border-zinc-600/70"
      >
        {/* Navigation */}
        <div className="relative">
          <MenuTrigger
            label="Navigation"
            open={openMenu === "nav"}
            onClick={() => toggle("nav")}
            menuId="nav-menu"
          />
          <MenuPanel open={openMenu === "nav"} menuId="nav-menu">
            {navLinks.map(({ id, label, Icon }) => {
              const active = activeId === id;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={close}
                    className={`
                      flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm
                      transition-colors duration-150
                      ${active ? "bg-white/5 text-white" : "text-zinc-400 hover:bg-white/5 hover:text-white"}
                    `}
                  >
                    <Icon className={`h-4 w-4 ${active ? "text-sky-400" : "text-zinc-500"}`} />
                    <span className="flex-1">{label}</span>
                    {active && <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />}
                  </a>
                </li>
              );
            })}
          </MenuPanel>
        </div>

        {/* Social */}
        <div className="relative">
          <MenuTrigger
            label="Social"
            open={openMenu === "social"}
            onClick={() => toggle("social")}
            menuId="social-menu"
          />
          <MenuPanel open={openMenu === "social"} menuId="social-menu">
            {socialLinks.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-zinc-400 transition-colors duration-150 hover:bg-white/5 hover:text-white"
                >
                  <Icon className="h-4 w-4 text-zinc-500" />
                  <span className="flex-1">{label}</span>
                  <ExternalLinkIcon className="h-3.5 w-3.5 text-zinc-600" />
                </a>
              </li>
            ))}
          </MenuPanel>
        </div>
      </nav>
    </div>
  );
}