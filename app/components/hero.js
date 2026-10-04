'use client'

import TextType from "./reactbits/TextType";
import FadeContent from "./reactbits/FadeContent";
import ProfileCard from "./profilecard";
import { DownloadIcon, ArrowRightIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function Hero() {
  const phrases = [
    "Full-stack developer",
    "React, Next.js & Node.js",
    "Clean, maintainable code",
  ];

  return (
    <section
      id="hero"
      className="min-h-screen w-full flex items-center py-20 px-2 sm:px-10"
    >
      <div className="mx-auto w-full max-w-6xl flex flex-col gap-5">

        {/* Eyebrow (sits above the grid so the card aligns with the name) */}
        <FadeContent blur duration={1200} easing="ease-out" initialOpacity={0}>
          <p className="text-sm font-medium tracking-widest uppercase text-sky-400/80">
            Software Engineer
          </p>
        </FadeContent>

        {/* items-stretch makes both columns the same height */}
        <div className="grid items-stretch gap-12 lg:grid-cols-[1.2fr_1fr]">

          {/* Left: name through to CTA buttons */}
          <div className="flex flex-col items-start text-left gap-5">

            <FadeContent duration={1400} easing="ease-out" initialOpacity={0} delay={150}>
              <h1 className="text-5xl sm:text-7xl font-semibold tracking-tight text-zinc-50">
                Reece Davies
              </h1>
            </FadeContent>

            <TextType
              text={phrases}
              typingSpeed={60}
              pauseDuration={2000}
              showCursor
              cursorCharacter="_"
              className="text-xl sm:text-2xl text-zinc-400"
            />

            <FadeContent duration={2000} easing="ease-out" initialOpacity={0} delay={600}>
              <p className="text-base sm:text-lg max-w-lg text-zinc-400 leading-relaxed">
                I design and develop reliable, user-focused applications across the web and beyond.
              </p>
            </FadeContent>

            <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="/Reece Davies CV 2.1 (tech).pdf"
                download
                className="inline-flex items-center gap-2 rounded-xl bg-sky-700 px-6 py-3 font-medium text-white transition hover:bg-sky-600"
              >
                <DownloadIcon /> Download CV
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/25 backdrop-blur-md px-6 py-3 font-medium text-zinc-200 transition hover:border-zinc-500"
              >
                Contact me <ArrowRightIcon />
              </a>

              <div className="flex gap-4 text-zinc-500">
                <a
                  href="https://github.com/reece-davies"
                  aria-label="GitHub"
                  className="hover:text-zinc-200 transition"
                >
                  <GitHubLogoIcon width={22} height={22} />
                </a>
                <a
                  href="https://www.linkedin.com/in/reece-davies-063436110/"
                  aria-label="LinkedIn"
                  className="hover:text-zinc-200 transition"
                >
                  <LinkedInLogoIcon width={22} height={22} />
                </a>
              </div>
            </div>

          </div>

          {/* Right: code card (hidden below lg) */}
          <div className="hidden lg:flex justify-end">
            <ProfileCard />
          </div>

        </div>
      </div>
    </section>
  );
}