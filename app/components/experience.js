export default function Experience() {
  return (
    <section className="bg-red-200 w-full py-10 px-1">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Experience</h1>
      <div className="flex flex-col max-w-4xl gap-6">
        
        {/* Subtitle / description */}
        <p className="text-lg sm:text-xl max-w-xl">
          I build modern, responsive websites and web apps using Next.js and TailwindCSS.
        </p>

        {/* Call to action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a
            href="#projects"
            className="py-1 px-3 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700 transition"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="py-1 px-3 border border-sky-600 text-sky-600 rounded-lg font-medium hover:bg-sky-700 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}