'use client'

export default function SkillsBanner() {
  const items = [
    "PHP",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "CSS",
    "C# .NET",
    "Python",
    "Machine Learning",
    "Java",
    "SQL",
    "MongoDB",
    "Tailwind CSS",

    "PHP",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "CSS",
    "C# .NET",
    "Python",
    "Machine Learning",
    "Java",
    "SQL",
    "MongoDB",
    "Tailwind CSS",
  ];

  return (
    <div className="relative overflow-hidden w-full h-12 mt-8">
      {/* Gradient fade overlays */}
      <div className="absolute left-0 top-0 h-full w-24 pointer-events-none bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-24 pointer-events-none bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

      {/* Scrolling content */}
      <div className="flex animate-infinite-scroll whitespace-nowrap">
        {items.map((item, idx) => (
          <span key={idx} className="mx-6 inline-flex items-center space-x-2 text-gray-300">
            {/* Example: you can replace this with actual icons */}
            <span className="text-sky-400">•</span>
            <span className="text-lg font-medium">{item}</span>
          </span>
        ))}
        {/* Duplicate for seamless looping */}
        {items.map((item, idx) => (
          <span key={`dup-${idx}`} className="mx-6 inline-flex items-center space-x-2 text-gray-300">
            <span className="text-sky-400">•</span>
            <span className="text-lg font-medium">{item}</span>
          </span>
        ))}
      </div>

      <style jsx>{`
        /* Tailwind custom animation */
        @keyframes infinite-scroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
}