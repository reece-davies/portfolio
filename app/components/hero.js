import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center justify-center text-center sm:text-left py-20 px-6 sm:px-20">
      {/* Main content wrapper */}
      <div className="z-10 flex flex-col items-center sm:items-start max-w-4xl gap-6">
        {/* Greeting / title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
          TITLE
        </h1>

        {/* Subtitle / description */}
        <p className="text-lg sm:text-xl text-gray-600 max-w-xl">
          I build modern, responsive websites and web apps using Next.js and TailwindCSS.
        </p>

        {/* Call to action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}