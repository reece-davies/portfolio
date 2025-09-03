export default function Skills() {
  return (
    <section className="flex flex-col w-full py-10 gap-6">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold pt-10 pb-2">Skills</h1>

      <div className="flex justify-between max-w-4xl mx-auto mt-5 gap-6">
      {/* Card 1 */}
      <div className="border border-zinc-500 rounded-lg p-6 flex-1 text-center">
        <h3 className="text-lg font-semibold mb-2">C# .NET</h3>
        <p className="text-sm text-gray-300">Software development using C# and the .NET framework</p>
      </div>

      {/* Card 2 */}
      <div className="border border-zinc-500 rounded-lg p-6 flex-1 text-center">
        <h3 className="text-lg font-semibold mb-2">Full Stack Web Development</h3>
        <p className="text-sm text-gray-300">Front-end and full-stack web development</p>
      </div>

      {/* Card 3 */}
      <div className="border border-neutral-500 rounded-lg p-6 flex-1 text-center">
        <h3 className="text-lg font-semibold mb-2">Python & Machine Learning</h3>
        <p className="text-sm text-gray-300">Python programming and foundational ML concepts</p>
      </div>
    </div>
    </section>
  );
}