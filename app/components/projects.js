'use client'

import { GitHubLogoIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import FadeContent from "./reactbits/FadeContent";
import AnimatedContent from "./reactbits/AnimatedContent";

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "SafeGaze",
      context: "Final year BSc Computer Science project: a Sports Facility Observation System.",
      image: "/projectimages/safegaze.jpeg",
      link: "https://youtu.be/xVNqltGqnRw?si=0bzdxiS1scWNCbg0",
      github: "https://github.com/reece-davies/SafeGaze-Computing-Project",
      tech: ["PHP", "SQL"],
    },
    {
      id: 2,
      name: "Inventory-Sync",
      context: "MERN stack app for inventory management. Fully functional and deployed to Render.",
      image: "/projectimages/inventorysync.PNG",
      link: "https://inventory-sync-frontend.onrender.com/",
      github: "https://github.com/reece-davies/Inventory-Sync",
      tech: ["React", "Express", "Node.js", "MongoDB"],
    },
    {
      id: 3,
      name: "LoveBites",
      context: "Web app for recipe management and shopping list creation. Personal test project for Firebase functionality.",
      image: "/projectimages/lovebites.jpeg",
      link: "https://love-bites.vercel.app/",
      github: "https://github.com/reece-davies/LoveBites",
      tech: ["Next.js", "Firebase", "Tailwind CSS"],
    },
    {
      id: 4,
      name: "Ant Colony Simulation",
      context: "A C# project to simulate the behaviour of ant colonies and their response to food sources (within close proximity) and neighbouring colonies.",
      image: "/projectimages/antcolonysimulation.jpeg",
      link: "https://github.com/reece-davies/Ant-Colony-Simulation",
      github: "https://github.com/reece-davies/Ant-Colony-Simulation",
      tech: ["C#", ".NET"],
    },
    {
      id: 5,
      name: "Pixel Art Editor",
      context: "Simple pixel art editor created with Next.js.",
      image: "/projectimages/pixelarteditor.jpeg",
      link: "https://pixel-art-editor-theta.vercel.app/",
      github: "https://github.com/reece-davies/pixel-art-editor",
      tech: ["Next.js", "Tailwind CSS"],
    },
    {
      id: 6,
      name: "Machine Learning: Handwriting Detection",
      context: "Python project implementing machine learning with a custom GUI to recognise letters drawn by the user.",
      image: "/projectimages/machinelearning.png",
      link: "https://github.com/reece-davies/Python-AI-Handwriting-Detection",
      github: "https://github.com/reece-davies/Python-AI-Handwriting-Detection",
      tech: ["Python"],
    },
  ];

  return (
    <section
      id="projects"
      className="w-full py-14 px-2 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        <FadeContent
          blur={false}
          duration={1800}
          easing="ease-out"
          initialOpacity={0}
          delay={200}
        >

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Projects
          </h1>
        </FadeContent>
      </div>

      <AnimatedContent
        distance={150}
        direction="vertical"
        reverse={false}
        duration={1.2}
        initialOpacity={0}
        animateOpacity
        scale={1.02}
        threshold={0.2}
        delay={0.3}
      >
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {projects.map((project) => (

            <div
              key={project.id}
              className="
                group
                flex
                flex-col
                h-full
                rounded-3xl
                overflow-hidden
                border
                border-zinc-700
                bg-zinc-900/40
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-sky-500/40
                hover:bg-zinc-900/60
                hover:-translate-y-1
              "
            >

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative h-44 overflow-hidden">

                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />


                </div>
              </a>

              <div className="flex flex-1 flex-col p-6">

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2 className="text-2xl font-semibold transition-colors group-hover:text-sky-300">
                    {project.name}
                  </h2>
                </a>

                <p className="mt-3 leading-7 text-zinc-300">
                  {project.context}
                </p>

                <div className="mt-auto pt-8">
                  <div className="flex flex-wrap gap-2">

                    <div className="flex gap-3 mt-8">
                      {project.tech.map((tech) => (

                        <span
                          key={tech}
                          className="
                            rounded-full
                            border
                            border-zinc-700
                            bg-zinc-800/70
                            px-3
                            py-1
                            text-sm
                            text-zinc-300
                          "
                        >
                          {tech}
                        </span>

                      ))}

                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mt-8">

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex-1
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-sky-600
                      px-4
                      py-3
                      font-medium
                      transition
                      hover:bg-sky-500
                    "
                  >
                    <ExternalLinkIcon />
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-zinc-700
                      px-4
                      py-3
                      transition
                      hover:border-sky-500
                      hover:text-sky-300
                    "
                  >
                    <GitHubLogoIcon className="w-5 h-5" />
                  </a>

                </div>
              </div>
            </div>

          ))}

        </div>
      </AnimatedContent>
    </section>
  );
}