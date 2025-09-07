import Hero from "./components/hero"
import Experience from "./components/experience"
import Skills from "./components/skills"
import Footer from "./components/footer"
import DotGrid from "./components/reactbits/DotGrid"

export default function Home() {
  return (
    <div className="font-sans flex flex-col min-h-screen gap-16 sm:gap-24 px-3 sm:px-25">
      <main className="flex flex-col items-start">

        <section className="relative w-full flex">
          <div
            style={{ width: '100%', height: '600px', position: 'absolute' }}
            className="-z-10">
            <DotGrid
              dotSize={10}
              gap={15}
              baseColor="#2E2E2E"
              activeColor="#0ea5e9"
              proximity={120}
              shockRadius={250}
              shockStrength={5}
              resistance={750}
              returnDuration={1.5}
            />
          </div>

          <Hero />
        </section>

        <Experience />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
