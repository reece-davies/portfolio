'use client'

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "Project One",
      context: "Project context...",
      image: "/projectimages/placeholder.jpeg",
      link: "https://example.com/project-one",
      github: "https://github.com/",
      tech: ["JavaScript", "Next.js"],
    },
    {
      id: 2,
      name: "Project Two",
      context: "Another project context...",
      image: "/projectimages/placeholder.jpeg",
      link: "https://example.com/project-two",
      github: "https://github.com/",
      tech: ["Python"],
    },
    {
      id: 3,
      name: "Project Three",
      context: "More project context...",
      image: "/projectimages/placeholder.jpeg",
      link: "https://example.com/project-three",
      github: "https://github.com/",
      tech: ["Javascript", "React", "Tailwind CSS"],
    },
    {
      id: 4,
      name: "Project Four",
      context: "Even more project context...",
      image: "/projectimages/placeholder.jpeg",
      link: "https://example.com/project-four",
      github: "https://github.com/",
      tech: ["C#", ".NET"],
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