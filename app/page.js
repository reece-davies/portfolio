import Hero from "./components/hero"
import Footer from "./components/footer"

export default function Home() {
  return (
    <div className="font-sans flex flex-col min-h-screen gap-16 sm:gap-24 px-8 sm:px-25">
      <main className="flex flex-col gap-[32px] row-start-2 items-start">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
