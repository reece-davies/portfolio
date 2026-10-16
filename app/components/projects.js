'use client'

import { GitHubLogoIcon, ExternalLinkIcon, PlayIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import FadeContent from "./reactbits/FadeContent";

const projects = [
  {
    id: 1,
    name: "SafeGaze",
    context: "Final year BSc Computer Science project: a Sports Facility Observation System.",
    image: "/projectimages/safegaze.jpeg",
    video: "https://youtu.be/xVNqltGqnRw?si=0bzdxiS1scWNCbg0",
    github: "https://github.com/reece-davies/SafeGaze-Computing-Project",
    tech: ["PHP", "SQL"],
    featured: true,
    first: true,
  },
  {
    id: 2,
    name: "LoveBites",
    context: "Web app for recipe management and shopping list creation. Personal test project for Firebase functionality.",
    image: "/projectimages/lovebites.jpeg",
    demo: "https://love-bites.vercel.app/",
    github: "https://github.com/reece-davies/LoveBites",
    tech: ["Next.js", "Firebase", "Tailwind CSS"],
    featured: true,
  },
  {
    id: 3,
    name: "Machine Learning: Handwriting Detection",
    context: "Python project implementing machine learning with a custom GUI to recognise letters drawn by the user.",
    image: "/projectimages/machinelearning.png",
    github: "https://github.com/reece-davies/Python-AI-Handwriting-Detection",
    tech: ["Python", "Pandas", "NumPy", "Sklearn"],
  },
  {
    id: 4,
    name: "Ant Colony Simulation",
    context: "A C# project to simulate the behaviour of ant colonies and their response to food sources (within close proximity) and neighbouring colonies.",
    image: "/projectimages/antcolonysimulation.jpeg",
    github: "https://github.com/reece-davies/Ant-Colony-Simulation",
    tech: ["C#", ".NET"],
  },
  {
    id: 5,
    name: "Pixel Art Editor",
    context: "Simple pixel art editor created with Next.js.",
    image: "/projectimages/pixelarteditor.jpeg",
    demo: "https://pixel-art-editor-theta.vercel.app/",
    github: "https://github.com/reece-davies/pixel-art-editor",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    id: 6,
    name: "Inventory-Sync",
    context: "MERN stack app for inventory management. Fully functional and deployed to Render.",
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

function getPrimaryAction(project) {
  if (project.demo) return { href: project.demo, label: "Live demo", Icon: ExternalLinkIcon };
  if (project.video) return { href: project.video, label: "Watch demo", Icon: PlayIcon };
  return { href: project.github, label: "View code", Icon: GitHubLogoIcon };
}

function ProjectCard({ project, featured, reversed, first }) {
  const primary = getPrimaryAction(project);
  const showCodeButton = primary.href !== project.github;
  const windowLabel = project.demo ? hostOf(project.demo) : slugOf(project.name);

  return (
    <div
      className={`
        group flex h-full flex-col rounded-3xl border border-zinc-800 bg-zinc-900/40
        backdrop-blur-md p-5 transition-colors duration-300 hover:border-sky-500/40
        ${featured ? `lg:flex-row lg:items-stretch lg:gap-8 lg:p-6 ${reversed ? "lg:flex-row-reverse" : ""}` : ""}
      `}
    >
      {/* Screenshot in a window frame */}
      <a
        href={primary.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.name}: ${primary.label}`}
        className={`block ${featured ? "lg:w-[52%] lg:shrink-0" : ""}`}
      >
        <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/60">
          <div className="flex items-center gap-1.5 border-b border-zinc-800 px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-zinc-700" />
            <span className="h-2 w-2 rounded-full bg-zinc-700" />
            <span className="h-2 w-2 rounded-full bg-zinc-700" />
            <span className="ml-2 truncate font-mono text-[11px] text-zinc-500">
              {windowLabel}
            </span>
          </div>
          <div
            className={`relative overflow-hidden
              ${featured ? "aspect-[16/9]" : "aspect-[19/9]"}
              `}
          >
            <Image
              src={project.image}
              alt={`${project.name} screenshot`}
              fill
              sizes={featured ? "(min-width: 1024px) 55vw, 100vw" : "(min-width: 768px) 50vw, 100vw"}
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
        </div>
      </a>

      {/* Content */}
      <div className={`flex flex-1 flex-col ${featured ? "mt-6 lg:mt-0 lg:py-2" : "mt-6"}`}>
        {first && (
          <span className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-300">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Featured project
          </span>
        )}
        <h3 className={`font-semibold text-white ${featured ? "text-2xl md:text-3xl" : "text-xl"}`}>
          {project.name}
        </h3>

        <p className={`mt-3 leading-7 text-zinc-300 ${featured ? "text-base md:text-md" : ""}`}>
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

        <div className="mt-auto flex flex-wrap gap-3 pt-6">
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
      </div>
    </div>
  );
}

export default function Projects() {
  // Featured projects are shown first, full width
  const ordered = [
    ...projects.filter((p) => p.featured),
    ...projects.filter((p) => !p.featured),
  ];

  return (
    <section id="projects" className="w-full py-14 px-2">
      <div className="mx-auto max-w-6xl">

        <FadeContent blur={false} duration={800} easing="ease-out" initialOpacity={0} delay={100}>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-10">
            Projects
          </h2>
        </FadeContent>

        <div className="grid gap-6 md:grid-cols-2">
          {ordered.map((project, index) => (
            <FadeContent
              key={project.id}
              blur={false}
              duration={800}
              easing="ease-out"
              initialOpacity={0}
              delay={150 + index * 80}
              className={`h-full ${project.featured ? "md:col-span-2" : ""}`}
            >
              <ProjectCard
                project={project}
                featured={!!project.featured}
                reversed={!!project.featured && index % 2 === 1}
                first={project.first}
              />
            </FadeContent>
          ))}
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
          .
        </p>

      </div>
    </section>
  );
}