export default function ProfileSummary() {
  return (
    <section id="profilesummary" className="flex flex-col w-full py-10 gap-6">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold pt-10 pb-2">Profile Summary</h1>

      <div className="px-1 sm:px-5 md:px-25">
        <p className="text-justify">
          I graduated with a BSc (Honours) Computer Science from Plymouth University and a MSc Management from the <a className="text-sky-400 hover:text-sky-600 font-medium" href="https://news-archive.exeter.ac.uk/2022/september/articles/universityofexeterbusines-1.html" target="_blank" rel="noopener noreferrer"> University of Exeter Business School</a>.
          My BSc fully encompassed software development with C# in the .NET framework, and also covered a wide range of topics and programming languages, including Python, Machine Learning, Java Design Patterns, and JavaScript, among others.
          Since graduating, I have continued to develop my programming skills by engaging in <a className="text-sky-400 hover:text-sky-600 font-medium" href="https://github.com/reece-davies" target="_blank" rel="noopener noreferrer">personal projects</a> and courses on new languages/frameworks (React Native, Node.js, & Advanced Python topics, to name a few).
          My experience in BSc Computer Science and MSc Management, combined with my ability to think creatively and work collaboratively, make me a strong candidate for roles in business, marketing, or technology.
        </p>
      </div>

    </section>
  );
}