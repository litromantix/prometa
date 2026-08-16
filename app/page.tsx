import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section
        className="relative min-h-screen bg-charcoal-950 bg-cover bg-center"
        style={{ backgroundImage: "url('/prometa-bg.png')" }}>

        <div className="absolute inset-0 bg-linear-to-t from-charcoal-950 via-charcoal-950/55 to-charcoal-950/15" />

        <Hero />
      </section>
    </main>
  );
}