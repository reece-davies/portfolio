'use client'

import Image from "next/image";
import TextType from "./reactbits/TextType";
import FadeContent from "./reactbits/FadeContent";

export default function Hero() {
  const phrases = [
    "Hi, I’m Reece Davies...",
    "Software engineer, web developer…",
    "& Technology enthusiast"
  ]

  return (
    <section id="hero" className="min-h-screen w-full flex flex-col items-center justify-center text-center py-20 px-6 sm:px-20">
      {/* Main content wrapper */}
      <div className="flex flex-col items-center max-w-4xl gap-6">
        {/* Greeting / title */}
        <TextType 
          text={phrases}
          typingSpeed={75}
          pauseDuration={1600}
          showCursor={true}
          cursorCharacter="_"
          className="text-3xl sm:text-4xl font-bold"
        />

        {/* Subtitle / description */}
        <FadeContent blur={false} duration={3000} easing="ease-out" initialOpacity={0} delay={700}>
          <p className="text-lg sm:text-xl max-w-xl text-gray-300">
            I design and develop reliable, user-focused applications across the web and beyond.
          </p>
        </FadeContent>

        {/* Call to action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a
            href="#projects"
            className="py-1 px-3 bg-sky-600 text-white rounded-lg hover:bg-sky-800 transition"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="py-1 px-3 border border-sky-600 text-sky-600 rounded-lg font-medium hover:bg-sky-800 hover:border-none hover:text-white transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}