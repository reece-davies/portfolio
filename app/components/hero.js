'use client'

import TextType from "./reactbits/TextType";
import FadeContent from "./reactbits/FadeContent";
import { DownloadIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import FallingText from './reactbits/FallingText';

export default function Hero() {
  const phrases = [
    "Software engineer, web developer…",
    "& Technology enthusiast"
  ]

  return (
    <section 
      id="hero" 
      className="
        min-h-screen 
        w-full 
        flex 
        flex-col 
        items-center 
        justify-center 
        text-center 
        py-20 
        px-2 
        sm:px-20
      "
    >

      {/* Main content wrapper */}
      <div className="flex flex-col items-center max-w-4xl gap-4">

        {/* Falling name animation */}
        <div
          className="
            relative
            h-40
            sm:h-44
            md:h-48
            w-full
            flex
            items-center
            justify-center
            overflow-visible
          "
        >
          <FallingText
            text="REECE DAVIES"
            highlightWords={["REECE", "DAVIES"]}
            highlightClass="highlighted"
            trigger="hover"
            backgroundColor="transparent"
            wireframes={false}
            gravity={0.35}
            fontSize="clamp(2.5rem, 8vw, 4rem)"
            mouseConstraintStiffness={0.9}
          />
        </div>

        <TextType 
          text={phrases}
          typingSpeed={75}
          pauseDuration={1600}
          showCursor={true}
          cursorCharacter="_"
          className="text-3xl sm:text-4xl font-bold"
        />


        {/* Subtitle / description */}
        <FadeContent 
          blur={false} 
          duration={3000} 
          easing="ease-out" 
          initialOpacity={0} 
          delay={700}
        >
          <p className="text-lg sm:text-xl max-w-xl text-gray-300">
            I design and develop reliable, user-focused applications across the web and beyond.
          </p>
        </FadeContent>


        {/* Call to action buttons */}
        <div className="mt-4 md:mt-10 flex flex-col md:flex-row justify-center gap-4">

          <a
            href="/Reece Davies CV 2.1 (tech).pdf"
            download
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-sky-600
              px-6
              py-3
              font-medium
              transition-all
              duration-300
              hover:bg-sky-500
              hover:scale-[1.02]
            "
          >
            <DownloadIcon />
            Download CV
          </a>


          <a
            href="#contact"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-zinc-700
              bg-zinc-900/40
              backdrop-blur-md
              px-6
              py-3
              font-medium
              transition-all
              duration-300
              hover:border-sky-500
              hover:text-sky-300
            "
          >
            Contact Me
            <ArrowRightIcon />
          </a>

        </div>

      </div>

    </section>
  );
}