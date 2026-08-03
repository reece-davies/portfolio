'use client'

import FadeContent from "./reactbits/FadeContent";

const experience = [
  {
    company: "Insync Insurance",
    role: "Digital Service Desk Assistant",
    dates: "06/2025 - Present",
    responsibilities: [
      <>
        Provide frontline support for{" "}
        <a
          href="https://www.iceinsuretech.com/ice-policy/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-400 underline underline-offset-4 decoration-sky-500/40 hover:text-sky-300 hover:decoration-sky-300 transition"
        >
          ICE Policy
        </a>{" "}
        (our digital products insurance software), diagnosing issues with configuration,
        XML/Python rating scripts, document generation, and analytics requests.
      </>,
      "Investigate and identify root causes of software issues, proposing solutions for approved changes, and escalating to internal developers or third-party vendors when required.",
      "Manage and resolve YouTrack tickets from internal users, ensuring timely and accurate responses while maintaining system integrity and compliance.",
      "Collaborate with cross-functional teams to support future enhancements and software improvements, bridging the gap between support and development."
    ]
  },
  {
    company: "Insync Insurance",
    role: "Operations Technician",
    dates: "02/2024 - 06/2025",
    responsibilities: [
      "Optimised internal processes and authored process guides, including a streamlined New Starter & Leaver workflow for managers, Operations, and third parties.",
      "Supported Accounts & Credit Control teams by processing API user policies, refund requests, and shortfall claims.",
      <>
        Collaborated with management to refine{" "}
        <a
          href="https://www.acturis.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-400 underline underline-offset-4 decoration-sky-500/40 hover:text-sky-300 hover:decoration-sky-300 transition"
        >
          Acturis
        </a>{" "}
        configuration and templates, ensuring SMS, email, and documents were consistent,
        cost-effective, and compliant.
      </>,
      "Oversaw core systems operations including monitoring alerts, managing hardware distribution, and maintaining software updates, while also serving as a designated fire warden and trained first-aider."
    ]
  },
  {
    company: "Exeter Trampoline Academy",
    role: "Trampoline Coach & Head of Marketing",
    dates: "06/2020 - 07/2023",
    responsibilities: [
      "Worked as a Trampoline Coach alongside pursuing my athletic career full-time.",
      <>
        Promoted to{" "}
        <a
          href="https://www.instagram.com/exetertrampoline/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-400 underline underline-offset-4 decoration-sky-500/40 hover:text-sky-300 hover:decoration-sky-300 transition"
        >
          Head of Marketing
        </a>{" "}
        in 2022, leveraging prior experience and MSc-level marketing education.
      </>,
      "Managed the club’s social media, newsletters, and public relations, implementing strategies that grew brand awareness and attracted new members.",
      <>
        Provided technical support for{" "}
        <a
          href="https://youtu.be/xVNqltGqnRw?si=ciOPRYbddqoH_dcP"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-400 underline underline-offset-4 decoration-sky-500/40 hover:text-sky-300 hover:decoration-sky-300 transition"
        >
          SafeGaze
        </a>{" "}
        , a software system I built as part of my BSc project, assisting with account setup
        and troubleshooting for the club.
      </>
    ]
  },
  {
    company: "Met Office",
    role: "Cyber Security Analyst (IT Industrial Placement)",
    dates: "07/2019 - 06/2020",
    responsibilities: [
      "Awarded an Industrial Placement within the Met Office (Exeter), working in the Cyber Security Operations Centre (CSOC).",
      "Monitored and logged security of internal systems, implementing preventative measures to improve overall security.",
      <>
        Was involved in the deployment of the{" "}
        <a
          href="https://www.elastic.co/customers/met-office"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-400 underline underline-offset-4 decoration-sky-500/40 hover:text-sky-300 hover:decoration-sky-300 transition"
        >
          Logging, Monitoring and Alerting (LMA) Project
        </a>
        , using Elastic Stack detection tools to identify and report malicious activity.
      </>,
      "Gained professional experience in collaborative, technology-focused teams while strengthening practical cybersecurity skills and understanding of internal processes."
    ]
  }
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full py-14 px-2"
    >
      <div className="mx-auto max-w-7xl">

        <FadeContent
          blur={false}
          duration={1800}
          easing="ease-out"
          initialOpacity={0}
          delay={200}
        >

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Experience
          </h1>

        </FadeContent>

        <div className="space-y-7">

          {experience.map((job, index) => (
            <FadeContent
              key={index}
              blur={false}
              duration={1800}
              easing="ease-out"
              initialOpacity={0}
              delay={250 + (index * 100)}
            >
              <div
                className="
                  rounded-3xl
                  border
                  border-zinc-700
                  bg-zinc-900/40
                  backdrop-blur-md
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-sky-500/40
                "
              >

                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">

                  <div>
                    <h2 className="text-2xl font-semibold text-white">
                      {job.company}
                    </h2>

                    <p className="mt-1 text-zinc-400 font-medium">
                      {job.role}
                    </p>
                  </div>

                  <div className="text-md text-zinc-400 whitespace-nowrap">
                    {job.dates}
                  </div>

                </div>

                <ul className="mt-8 space-y-3 list-disc pl-6 text-zinc-300 leading-7">

                  {job.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}

                </ul>

              </div>
            </FadeContent>
          ))}

        </div>
      </div>
    </section>
  );
}