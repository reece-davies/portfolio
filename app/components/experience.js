export default function Experience() {
  return (
    <section className="flex flex-col w-full py-10 gap-6">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold pt-10 pb-2">Experience</h1>

      <div className="px-0 sm:px-5 md:px-25">
        <h2 className="text-lg font-bold">Insync Insurance</h2>
        <p className="py-1 italic text-zinc-400">Operations Technician [02/2024 – present]</p>
        <ul className="list-disc list-outside px-8">
          <li>As an Operations Technician, I handle a range of tasks, including daily API user policy uploads and supporting the Accounts & Credit Control teams with refund requests and shortfall claims.</li>
          <li>A significant part of my role is to optimise internal processes and develop the supporting process guides, such as streamlining the New Starter & Leaver process for managers, Operations team and third party companies.</li>
          <li>I also serve as a fire warden, managing emergency resources like floor plans.</li>
          <li> Additionally, I collaborate with my manager to refine Acturis configuration and templates, ensuring SMS, email, and document templates are consistent, cost-effective, and compliant.</li>
        </ul>
      </div>

      <div className="px-0 sm:px-5 md:px-25">
        <h2 className="text-lg font-bold">Exeter Trampoline Academy</h2>
        <p className="py-1 italic text-zinc-400">Trampoline Coach & Head of Marketing [06/2020 – 07/2023]</p>
        <ul className="list-disc list-outside px-8">
          <li>While pursuing my athletic career full-time, I also worked as a Trampoline Coach at Exeter Trampoline Academy (ETA).</li>
          <li>After working for ETA for two years, I was appointed as Head of Marketing in September 2022 based on my prior experience and education in marketing from my MSc.</li>
          <li>From this position, I was responsible for managing the club's social media presence, producing monthly newsletters, and coordinating public relations efforts.</li>
          <li> In addition to my coaching duties, I successfully implemented a range of marketing strategies that helped increase brand awareness and attract new customers to the club.</li>
          <li> I also served as tech-support for ETA, specifically in regard to the deployment and management of SafeGaze, a software I developed for ETA in my final year of my BSc</li>
        </ul>
      </div>

      <div className="px-0 sm:px-5 md:px-25">
        <h2 className="text-lg font-bold">Met Office</h2>
        <p className="py-1 italic text-zinc-400">Cyber Security Analyst (IT Industrial Placement) [08/07/2019 – 26/06/2020]</p>
        <ul className="list-disc list-outside px-8">
          <li>I was awarded an Industrial Placement within the Met Office (Exeter). During this time, I worked as a cyber security analyst in the Cyber Security Operations Centre (CSOC).</li>
          <li>My team and I were responsible for the logging and monitoring of the security of Met Office’s internal systems.</li>
          <li>Additionally, I was involved in the deployment of The Logging, Monitoring and Alerting project (LMA Project) which makes use of Elastic Stack’s detection tools and resources for identifying malicious activity from within the organisation.</li>
          <li>My experience at the Met Office allowed me to develop as a professional and provided me with a deeper understanding of how to work collaboratively with a team in a technology-focused role.</li>
        </ul>
      </div>

    </section>
  );
}