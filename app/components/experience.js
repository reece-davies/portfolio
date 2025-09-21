'use client'

import FadeContent from "./reactbits/FadeContent";

export default function Experience() {
  return (
    <section id="experience" className="flex flex-col w-full py-10 gap-6">
      <FadeContent blur={false} duration={1800} easing="ease-out" initialOpacity={0} delay={250}>
        <h1 className="text-4xl sm:text-5xl font-bold pt-10 pb-2">Experience</h1>
      </FadeContent>

      <div className="px-1 sm:px-5 md:px-25">
        <FadeContent blur={false} duration={1800} easing="ease-out" initialOpacity={0} delay={250}>
          <h2 className="text-lg font-bold">Insync Insurance</h2>
          <p className="py-1 italic text-zinc-400">Digital Service Desk Assistant [06/2025 – present]</p>
          <ul className="list-disc list-outside px-8">
            <li>Content</li>
          </ul>
        </FadeContent>
      </div>

      <div className="px-1 sm:px-5 md:px-25">
        <FadeContent blur={false} duration={1800} easing="ease-out" initialOpacity={0} delay={250}>
          <h2 className="text-lg font-bold">Insync Insurance</h2>
          <p className="py-1 italic text-zinc-400">Operations Technician [02/2024 – 06/2025]</p>
          <ul className="list-disc list-outside px-8">
            <li>Optimised internal processes and authored process guides, including a streamlined New Starter & Leaver workflow for managers, Operations, and third parties.</li>
            <li>Supported Accounts & Credit Control teams by processing API user policies, refund requests, and shortfall claims.</li>
            <li>Collaborated with management to refine Acturis configuration and templates, ensuring SMS, email, and documents were consistent, cost-effective, and compliant.</li>
            <li>Oversaw core systems operations including monitoring alerts, managing hardware distribution, and maintaining software updates, while also serving as a designated fire warden and trained first-aider.</li>
          </ul>
        </FadeContent>
      </div>

      <div className="px-1 sm:px-5 md:px-25">
        <FadeContent blur={false} duration={1800} easing="ease-out" initialOpacity={0} delay={250}>
          <h2 className="text-lg font-bold">Exeter Trampoline Academy</h2>
          <p className="py-1 italic text-zinc-400">Trampoline Coach & Head of Marketing [06/2020 – 07/2023]</p>
          <ul className="list-disc list-outside px-8">
            <li>Worked as a Trampoline Coach alongside pursuing my athletic career full-time.</li>
            <li>Promoted to <a className="text-sky-400 hover:text-sky-600 font-medium" href="https://www.instagram.com/exetertrampoline/?hl=en" target="_blank" rel="noopener noreferrer">Head of Marketing</a> in 2022, leveraging prior experience and MSc-level marketing education.</li>
            <li>Managed the club’s social media, newsletters, and public relations, implementing strategies that grew brand awareness and attracted new members.</li>
            <li>Provided technical support for <a className="text-sky-400 hover:text-sky-600 font-medium" href="https://youtu.be/xVNqltGqnRw?si=ciOPRYbddqoH_dcP" target="_blank" rel="noopener noreferrer">SafeGaze</a>, a software system I built as part of my BSc project, assisting with account setup and troubleshooting for the club.</li>
          </ul>
        </FadeContent>
      </div>

      <div className="px-1 sm:px-5 md:px-25">
        <FadeContent blur={false} duration={1800} easing="ease-out" initialOpacity={0} delay={250}>
          <h2 className="text-lg font-bold">Met Office</h2>
          <p className="py-1 italic text-zinc-400">Cyber Security Analyst (IT Industrial Placement) [07/2019 – 06/2020]</p>
          <ul className="list-disc list-outside px-8">
            <li>Awarded an Industrial Placement within the Met Office (Exeter), working in the Cyber Security Operations Centre (CSOC).</li>
            <li>Monitored and logged security of internal systems, implementing preventative measures to improve overall security.</li>
            <li>Was involved in the deployment of the <a className="text-sky-400 hover:text-sky-600 font-medium" href="https://www.elastic.co/customers/met-office" target="_blank" rel="noopener noreferrer">Logging, Monitoring and Alerting (LMA) Project</a>, using Elastic Stack detection tools to identify and report malicious activity.</li>
            <li>Gained professional experience in collaborative, technology-focused teams while strengthening practical cybersecurity skills and understanding of internal processes.</li>
          </ul>
        </FadeContent>
      </div>

    </section>
  );
}