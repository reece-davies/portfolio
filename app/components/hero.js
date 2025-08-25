import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center text-center py-20 px-6 sm:px-20">
      {/* Main content wrapper */}
      <div className="flex flex-col items-center max-w-4xl gap-6">
        {/* Greeting / title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
          Reece Davies
        </h1>

        {/* Subtitle / description */}
        <p className="text-lg sm:text-xl max-w-xl">
          I build modern, responsive websites and web apps using Next.js and TailwindCSS.
        </p>

        {/* Call to action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a
            href="#projects"
            className="p-1 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="p-1 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}