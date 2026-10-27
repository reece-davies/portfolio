'use client'

import { useState, useRef, useEffect } from "react";
import { GitHubLogoIcon, ExternalLinkIcon, PlayIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import FadeContent from "./reactbits/FadeContent";

const projects = [
  {
    id: 1,
    name: "Met Office LMA Project",
    context: "Contributed to the Logging, Monitoring and Alerting (LMA) project at the Met Office, using the Elastic Stack to search, analyse and visualise large volumes of system data. The project supported the Cyber Security team's ability to identify and investigate potential threats by making relevant information more accessible and actionable.",
    image: "/projectimages/metoffice.png",
    video: "https://www.elastic.co/customers/met-office",
    tech: ["Elastic Stack"],
    featured: true,
  },
  {
    id: 2,
    name: "SafeGaze",
    context: "A sports facility observation system developed as my final-year BSc Computer Science project. SafeGaze explores how software can support the observation and monitoring of sporting environments, bringing together a purpose-built application to support the facility's operational needs.",
    image: "/projectimages/safegaze.jpeg",
    video: "https://youtu.be/xVNqltGqnRw?si=0bzdxiS1scWNCbg0",
    github: "https://github.com/reece-davies/SafeGaze-Computing-Project",
    tech: ["PHP", "SQL"],
  },
  {
    id: 3,
    name: "LoveBites",
    context: "A recipe management web application that helps users organise their recipes and build shopping lists around the meals they want to prepare. Built with Next.js and Firebase, the project also served as a practical exploration of Firebase integration within a modern web application.",
    image: "/projectimages/lovebites.jpeg",
    demo: "https://love-bites.vercel.app/",
    github: "https://github.com/reece-davies/LoveBites",
    tech: ["Next.js", "Firebase", "Tailwind CSS"],
  },
  {
    id: 4,
    name: "Machine Learning: Handwriting Detection",
    context: "A Python machine learning application that recognises handwritten characters drawn by the user through a custom graphical interface. The project combines character recognition with an interactive GUI, demonstrating the practical application of machine learning to user-provided input.",
    image: "/projectimages/machinelearning.png",
    github: "https://github.com/reece-davies/Python-AI-Handwriting-Detection",
    tech: ["Python", "Pandas", "NumPy", "Sklearn"],
  },
  {
    id: 5,
    name: "Ant Colony Simulation",
    context: "A C# simulation exploring ant colony behaviour and interactions with their environment. The simulation models how ants respond to nearby food sources and neighbouring colonies, providing a way to experiment with the collective behaviour that emerges from simple agent interactions.",
    image: "/projectimages/antcolonysimulation.jpeg",
    github: "https://github.com/reece-davies/Ant-Colony-Simulation",
    tech: ["C#", ".NET"],
  },
  {
    id: 7,
    name: "Inventory-Sync",
    context: `A full-stack inventory management application built with the MERN stack, featuring secure JWT-based authentication and real-time updates. Users can organise and categorise assets, assign custom statuses, and track inventory through structured data tables. The application is deployed on Render and demonstrates the integration of a React frontend with a Node.js, Express and MongoDB backend.
    The live demo is currently running without its backend services, so login and inventory management functionality are unavailable. Please refer to the source code for the full implementation.`,
    image: "/projectimages/inventorysync.PNG",
    demo: "https://inventory-sync-frontend.onrender.com/",
    github: "https://github.com/reece-davies/Inventory-Sync",
    tech: ["React", "Express", "Node.js", "MongoDB"],
  },
];

const hostOf = (url) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
};

const slugOf = (name) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const labelOf = (project) => (project.demo ? hostOf(project.demo) : slugOf(project.name));

function getPrimaryAction(project) {
  if (project.demo) return { href: project.demo, label: "Live demo", Icon: ExternalLinkIcon };
  if (project.video) return { href: project.video, label: "Watch demo", Icon: PlayIcon };
  return { href: project.github, label: "View code", Icon: GitHubLogoIcon };
}

function WindowChrome({ label, children }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900/40 backdrop-blur-md shadow-xl shadow-black/30">
      <div className="flex items-center gap-1.5 border-b border-zinc-700 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-700" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-700" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-700" />
        <span className="ml-2 truncate font-mono text-xs text-zinc-500">{label}</span>
      </div>
      {children}
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState(0);
  const slideRefs = useRef([]);

  // Track which project sits in the middle of the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(Number(entry.target.dataset.index));
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    slideRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const goTo = (index) =>
    slideRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" });

  return (
    <section id="projects" className="w-full py-14 px-2">
      <div className="mx-auto max-w-6xl">

        <FadeContent blur={false} duration={800} easing="ease-out" initialOpacity={0} delay={100}>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-10">
            Projects
          </h2>
        </FadeContent>

        <div className="lg:grid lg:grid-cols-[1fr_1.1fr] lg:gap-16">

          {/* Left: project details (scrolls) */}
          <div>
            {projects.map((project, index, featured) => {
              const primary = getPrimaryAction(project);
              const showCodeButton = primary.href !== project.github;
              const isActive = active === index;

              return (
                <article
                  key={project.id}
                  ref={(el) => (slideRefs.current[index] = el)}
                  data-index={index}
                  className={`
                    flex flex-col justify-center border-b border-zinc-800/60 py-10
                    last:border-0 lg:min-h-[55vh] lg:border-0 lg:py-8
                    transition-opacity duration-500 motion-reduce:transition-none
                    ${isActive ? "lg:opacity-100" : "lg:opacity-30"}
                  `}
                >
                  {/* Inline screenshot on small screens */}
                  <div className="mb-6 lg:hidden">
                    <WindowChrome label={labelOf(project)}>
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={project.image}
                          alt={`${project.name} screenshot`}
                          fill
                          sizes="100vw"
                          className="object-cover object-top"
                        />
                      </div>
                    </WindowChrome>
                  </div>

                  <span className="font-mono text-sm text-sky-400/80">
                    {String(index + 1).padStart(2, "0")}
                    {project.featured && (
                      <span className="ml-2 mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                        Featured project
                      </span>
                    )}
                  </span>

                  <h3 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-white">
                    {project.name}
                  </h3>

                  <p className="mt-4 max-w-xl text-lg leading-8 text-zinc-300">
                    {project.context}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href={primary.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-sky-500"
                    >
                      <primary.Icon />
                      {primary.label}
                    </a>

                    {showCodeButton && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.name} source code on GitHub`}
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/40 px-5 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-zinc-500"
                      >
                        <GitHubLogoIcon />
                        Code
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          {/* Right: pinned preview (desktop only) */}
          <div className="hidden lg:block">
            <div className="sticky top-32">
              <WindowChrome label={labelOf(projects[active])}>
                <div className="relative aspect-[16/10] overflow-hidden">
                  {projects.map((project, index) => (
                    <Image
                      key={project.id}
                      src={project.image}
                      alt={`${project.name} screenshot`}
                      fill
                      sizes="(min-width: 1024px) 55vw, 100vw"
                      priority={index === 0}
                      className={`
                        object-cover object-top
                        transition-all duration-700 ease-out motion-reduce:transition-none
                        ${index === active ? "opacity-100 scale-100" : "opacity-0 scale-[1.04]"}
                      `}
                    />
                  ))}
                </div>
              </WindowChrome>

              {/* Progress */}
              <div className="mt-5 flex items-center gap-4">
                <span className="font-mono text-xs text-zinc-500">
                  {String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                </span>
                <div className="flex flex-1 gap-1.5">
                  {projects.map((project, index) => (
                    <button
                      key={project.id}
                      onClick={() => goTo(index)}
                      aria-label={`Go to ${project.name}`}
                      className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                        index === active ? "bg-sky-500" : "bg-zinc-800 hover:bg-zinc-700"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        <p className="mt-10 text-sm text-zinc-500">
          More on my{" "}
          <a
            href="https://github.com/reece-davies"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sky-400 underline underline-offset-4 decoration-sky-500/40 hover:text-sky-300 hover:decoration-sky-300 transition"
          >
            GitHub <ArrowRightIcon />
          </a>
        </p>

      </div>
    </section>
  );
}