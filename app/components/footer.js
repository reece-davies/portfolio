import PixelSnow from "./reactbits/PixelSnow";

export default function Footer() {
  return (
    <footer className="relative isolate mt-12 w-full overflow-hidden border-t border-white/10 bg-[#0a0a0a]">
      {/* Subtle snow easter egg */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 45%, black 100%)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 45%, black 100%)",
        }}
      >
        <PixelSnow
          color="#ffffff"
          variant="snowflake"
          density={0.3}
          speed={0.6}
          wind={0.1}
          flakeSize={2}
          pixelSize={2}
          glow={0.3}
          mouseInteraction
          sway={0.3}
          twinkle={0.2}
          accumulate={false}
          depth={0.5}
          brightness={0.6}
          fade={0}
          opacity={0.4}
          intro
          lightMode={false}
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-5 px-6 py-11 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <a
            href="#"
            className="text-lg font-medium tracking-wide text-neutral-200 transition-colors hover:text-white"
          >
            Reece Davies
          </a>
          <p className="mt-1 text-md text-neutral-500">
            Thanks for stopping by.
          </p>
        </div>

        <div className="flex items-center gap-5 text-sm text-neutral-500">
          <span>© {new Date().getFullYear()} Reece Davies</span>
          <a
            href="#"
            className="transition-colors hover:text-neutral-200"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}