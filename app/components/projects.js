import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Projects() {
  return (
    <section className="flex flex-col w-full py-10 gap-6">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold pt-10 pb-2">Projects</h1>

      {/* Group 1 */}
      <div className="flex flex-col md:flex-row justify-between max-w-4xl mx-auto mt-5 gap-6 w-full">
        {/* Card 1 */}
        <div className="border border-zinc-500 rounded-2xl p-6 flex-1 start">
          <div>IMG</div>

          <h3 className="text-lg font-semibold mb-2 mt-4">Project Name</h3>
          <p className="text-gray-300">
            Project context
          </p>
          <div className="flex justify-between mt-2">
            <div className="flex items-center gap-2">
              <a className="text-sm bg-sky-800 px-2 py-1 rounded-lg">Language</a>
              <a className="text-sm bg-sky-800 px-2 py-1 rounded-lg">Framework</a>
            </div>
            <div>
              <GitHubLogoIcon className="w-6 h-full"/>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="border border-zinc-500 rounded-2xl p-6 flex-1 text-start">
          <div>IMG</div>

          <h3 className="text-lg font-semibold mb-4 mt-4">Project</h3>
          <p className="text-sm text-gray-300">
            Project context
          </p>
          <p>Languages/frameworks used</p>
          <GitHubLogoIcon className="w-5 h-5" />
        </div>

      </div>
    </section>
  );
}