'use client'

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";

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
      image: "/projectimages/placeholder.jpeg",
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
    <section className="flex flex-col w-full py-10 gap-6">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold pt-10 pb-2">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full mt-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-zinc-500 rounded-2xl flex flex-col overflow-hidden"
          >
            {/* Image */}
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="m-3">
              <Image
                src={project.image}
                alt={project.name}
                width={600}
                height={400}
                className="w-full h-48 object-cover rounded-xl"
              />
            </a>

            {/* Content */}
            <div className="flex flex-col flex-1 pt-2 px-6 pb-6">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <h3 className="text-lg font-semibold mb-2 hover:text-sky-400 transition-colors">
                  {project.name}
                </h3>
              </a>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <p className="text-gray-300">{project.context}</p>
              </a>

              {/* Footer */}
              <div className="flex justify-between items-center mt-auto pt-4">
                <div className="flex items-center gap-2 flex-wrap">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-sm bg-sky-800 px-2 py-1 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 transition-colors"
                >
                  <GitHubLogoIcon className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}