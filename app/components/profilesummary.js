'use client'

import FadeContent from "./reactbits/FadeContent";

export default function ProfileSummary() {
  return (
    <section
      id="profilesummary"
      className="w-full py-14 px-6"
    >
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <FadeContent
          blur={false}
          duration={1800}
          easing="ease-out"
          initialOpacity={0}
          delay={200}
        >
          <div className="text-center mb-8">

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Profile Summary
            </h1>

            <p className="mt-5 text-lg text-zinc-400 max-w-2xl mx-auto">
              Computer Science graduate with a passion for software engineering,
              full-stack development, and creating technology that delivers true value.
            </p>

          </div>
        </FadeContent>

        {/* Card */}
        <FadeContent
          blur={false}
          duration={1800}
          easing="ease-out"
          initialOpacity={0}
          delay={350}
        >
          <div
            className="
              rounded-3xl
              border
              border-zinc-700
              bg-zinc-900/40
              backdrop-blur-md
              p-8
              md:p-12
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-sky-500/40
            "
          >
            {/* Skills */}
            <div className="flex flex-wrap gap-3 mb-10">
              {[
                "BSc Computer Science",
                "MSc Management",
                ".NET",
                "React",
                "Node.js",
                "Python",
                "Machine Learning",
                "JavaScript"
              ].map((skill) => (
                <span
                  key={skill}
                  className="
                    rounded-full
                    border
                    border-zinc-700
                    bg-zinc-800/70
                    px-4
                    py-2
                    text-sm
                    text-zinc-200
                    transition
                    hover:border-sky-500
                    hover:text-sky-300
                  "
                >
                  {skill}
                </span>
              ))}

            </div>

            {/* Content */}
            <div className="space-y-6 text-lg leading-8 text-zinc-300">

              <p>
                I graduated with a <strong className="text-white">BSc (Honours) Computer Science</strong> from
                Plymouth University and an <strong className="text-white">MSc Management</strong> from the{" "}
                <a
                  href="https://news-archive.exeter.ac.uk/2022/september/articles/universityofexeterbusines-1.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-sky-400
                    underline
                    underline-offset-4
                    decoration-sky-500/40
                    hover:text-sky-300
                    hover:decoration-sky-300
                    transition
                  "
                >
                  University of Exeter Business School
                </a>.
              </p>

              <p>
                My academic background provided a strong foundation in software
                engineering through C# and the .NET framework while exploring a
                broad range of technologies including Python, Java, JavaScript,
                machine learning, and software design patterns.
              </p>

              <p>
                Since graduating, I've continued developing my skills through{" "}
                <a
                  href="https://github.com/reece-davies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-sky-400
                    underline
                    underline-offset-4
                    decoration-sky-500/40
                    hover:text-sky-300
                    hover:decoration-sky-300
                    transition
                  "
                >
                  personal projects
                </a>{" "}
                and professional courses covering React Native, Node.js,
                advanced Python, cloud technologies, and modern web
                development.
              </p>

              <p>
                Combining technical expertise with business knowledge enables me
                to approach problems from both engineering and commercial
                perspectives, allowing me to build software that is not only
                technically robust but also delivers meaningful value.
              </p>

            </div>
          </div>
        </FadeContent>

      </div>
    </section>
  );
}