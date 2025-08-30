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

    </section>
  );
}