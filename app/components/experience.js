'use client'

import FadeContent from "./reactbits/FadeContent";

const InlineLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-sky-400 underline underline-offset-4 decoration-sky-500/40 hover:text-sky-300 hover:decoration-sky-300 transition"
  >
    {children}
  </a>
);

const experience = [
  {
    company: "Insync Insurance",
    roles: [
      {
        title: "Digital Service Desk Developer",
        dates: "Jun 2025 – Present",
        current: true,
        tech: ["ICE Policy", "Python", "SQL", "XML"],
        bullets: [
          <>
            Provide frontline support for{" "}
            <InlineLink href="https://www.iceinsuretech.com/ice-policy/">ICE Policy</InlineLink>{" "}
            (our digital products insurance software), diagnosing issues with configuration,
            XML/Python rating scripts, document generation, and analytics requests.
          </>,
          "Investigate and identify root causes of software issues, proposing solutions for approved changes, and escalating to internal developers or third-party vendors when required.",
          "Manage and resolve YouTrack tickets from internal users, ensuring timely and accurate responses while maintaining system integrity and compliance.",
          "Collaborate with cross-functional teams to support future enhancements and software improvements, bridging the gap between support and development.",
        ],
      },
      {
        title: "Operations Technician",
        dates: "Feb 2024 – Jun 2025",
        tech: ["Acturis", "Process documentation", "Software maintenance"],
        bullets: [
          "Optimised internal processes and authored process guides, including a streamlined New Starter & Leaver workflow for managers, Operations, and third parties.",
          "Supported Accounts & Credit Control teams by processing API user policies, refund requests, and shortfall claims.",
          <>
            Collaborated with management to refine{" "}
            <InlineLink href="https://www.acturis.com/">Acturis</InlineLink>{" "}
            configuration and templates, ensuring SMS, email, and documents were consistent,
            cost-effective, and compliant.
          </>,
          "Oversaw core systems operations including monitoring alerts, managing hardware distribution, and maintaining software updates, while also serving as a designated fire warden and trained first-aider.",
        ],
      },
    ],
  },
  {
    company: "Exeter Trampoline Academy",
    roles: [
      {
        title: "Trampoline Coach & Head of Marketing",
        dates: "Jun 2020 – Jul 2023",
        tech: ["Social media", "Newsletters", "Technical support"],
        bullets: [
          "Worked as a Trampoline Coach alongside pursuing my athletic career full-time.",
          <>
            Promoted to{" "}
            <InlineLink href="https://www.instagram.com/exetertrampoline/?hl=en">Head of Marketing</InlineLink>{" "}
            in 2022, leveraging prior experience and MSc-level marketing education.
          </>,
          "Managed the club’s social media, newsletters, and public relations, implementing strategies that grew brand awareness and attracted new members.",
          <>
            Provided technical support for{" "}
            <InlineLink href="https://youtu.be/xVNqltGqnRw?si=ciOPRYbddqoH_dcP">SafeGaze</InlineLink>, a software system I built as part of my BSc project, assisting with account setup
            and troubleshooting for the club.
          </>,
        ],
      },
    ],
  },
  {
    company: "Met Office",
    roles: [
      {
        title: "Cyber Security Analyst (IT Industrial Placement)",
        dates: "Jul 2019 – Jun 2020",
        tech: ["Elastic Stack", "Security monitoring"],
        bullets: [
          "Awarded an Industrial Placement within the Met Office (Exeter), working in the Cyber Security Operations Centre (CSOC).",
          "Monitored and logged security of internal systems, implementing preventative measures to improve overall security.",
          <>
            Was involved in the deployment of the{" "}
            <InlineLink href="https://www.elastic.co/customers/met-office">Logging, Monitoring and Alerting (LMA) Project</InlineLink>
            , using Elastic Stack detection tools to identify and report malicious activity.
          </>,
          "Gained professional experience in collaborative, technology-focused teams while strengthening practical cybersecurity skills and understanding of internal processes.",
        ],
      },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="w-full py-14 px-2">
      <div className="mx-auto max-w-6xl">

        <FadeContent blur={false} duration={800} easing="ease-out" initialOpacity={0} delay={100}>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-10">
            Experience
          </h2>
        </FadeContent>

        <ol className="relative ml-2 border-l border-zinc-800 space-y-10">
          {experience.map((group, gi) => (
            <li key={group.company} className="relative pl-6 md:pl-10">

              {/* Timeline dot */}
              <span className="absolute -left-[5.5px] top-9 h-2.5 w-2.5 rounded-full bg-sky-500 ring-4 ring-[#0a0a0a]" />

              <FadeContent
                blur={false}
                duration={800}
                easing="ease-out"
                initialOpacity={0}
                delay={150 + gi * 100}
              >
                <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md p-6 md:p-8 transition-colors duration-300 hover:border-sky-500/40">

                  <h3 className="text-2xl font-semibold text-white">{group.company}</h3>

                  <div className="mt-6 space-y-8">
                    {group.roles.map((role, ri) => (
                      <div
                        key={role.title}
                        className={ri > 0 ? "border-t border-zinc-800 pt-8" : ""}
                      >
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 md:gap-4">
                          <p className="text-lg font-medium text-zinc-200">{role.title}</p>
                          <div className="flex items-center gap-2 text-sm text-zinc-400 whitespace-nowrap">
                            {role.current && (
                              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs text-emerald-300">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                Current
                              </span>
                            )}
                            {role.dates}
                          </div>
                        </div>

                        <ul className="mt-4 space-y-2.5 list-disc pl-5 text-zinc-300 leading-7 marker:text-zinc-600">
                          {role.bullets.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {role.tech.map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-400"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </FadeContent>
            </li>
          ))}
        </ol>

        <p className="mt-10 text-sm text-zinc-500">
          Full history available in my{" "}
          <InlineLink href="/Reece Davies CV 2.1 (tech).pdf">CV</InlineLink>.
        </p>

      </div>
    </section>
  );
}