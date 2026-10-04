'use client'

import FadeContent from "./reactbits/FadeContent";

// Edit these to change what the card shows
const fields = [
  { key: "focus", value: "Full-stack web" },
  { key: "stack", value: ["Next.js", "SQL", "Python"] },
  { key: "based", value: "Poole, Dorset" },
  { key: "status", value: "Open to opportunities" },
];

function Value({ value }) {
  if (Array.isArray(value)) {
    return (
      <>
        <span className="text-zinc-500">[</span>
        {value.map((v, i) => (
          <span key={v}>
            <span className="text-emerald-300/90">{`"${v}"`}</span>
            {i < value.length - 1 && <span className="text-zinc-500">, </span>}
          </span>
        ))}
        <span className="text-zinc-500">]</span>
      </>
    );
  }
  return <span className="text-emerald-300/90">{`"${value}"`}</span>;
}

export default function ProfileCard() {
  return (
    <FadeContent
      duration={1000}
      easing="ease-out"
      initialOpacity={0}
      delay={500}
      className="h-full w-full max-w-md"
    >
      <div className="flex h-full w-full flex-col rounded-2xl border border-zinc-800/60 bg-zinc-900/25 backdrop-blur-sm font-mono text-sm shadow-xl">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-zinc-700" />
          <span className="h-3 w-3 rounded-full bg-zinc-700" />
          <span className="h-3 w-3 rounded-full bg-zinc-700" />
          <span className="ml-2 text-xs text-zinc-500">reece.js</span>
        </div>

        {/* Code area (flex-1 fills the remaining height) */}
        <pre className="flex-1 p-5 leading-7 text-zinc-300 overflow-x-auto">
          <code>
            <span className="text-violet-300">const</span> reece{" "}
            <span className="text-zinc-500">= {"{"}</span>
            {"\n"}
            {fields.map(({ key, value }) => (
              <span key={key}>
                {"  "}
                <span className="text-sky-300">{key}</span>
                <span className="text-zinc-500">: </span>
                <Value value={value} />
                <span className="text-zinc-500">,</span>
                {"\n"}
              </span>
            ))}
            <span className="text-zinc-500">{"};"}</span>
          </code>
        </pre>

      </div>
    </FadeContent>
  );
}