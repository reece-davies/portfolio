import Hero from "./components/hero"
import Experience from "./components/experience"
import Skills from "./components/skills"
import Footer from "./components/footer"
import DotGrid from "./components/reactbits/DotGrid"

export default function Home() {
  return (
    <div className="font-sans flex flex-col min-h-screen">
      <section className="relative w-full flex">
        <div
          style={{ width: '100vw', height: '100vh', position: 'absolute', left: '0', top: '0' }}
          className="-z-10">
          <DotGrid
            dotSize={10}
            gap={15}
            baseColor="#1a1a1a"
            activeColor="#0ea5e9"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>

        <div className="w-full px-3 sm:px-25">
          <Hero />
        </div>
      </section>

      <main className="flex flex-col items-start px-3 sm:px-25 gap-2">
        <Experience />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
