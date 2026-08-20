import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ProgressSlider from "@/components/about/ProgressSlider";

export const metadata: Metadata = {
  title: "About Us | PROMETA — Elite Architectural Facade Systems & Fabrication",
  description:
    "Discover PROMETA, a global leader in the engineering, fabrication, and installation of premium facade claddings, architectural metalwork, and precision glass systems. Learn how our advanced 3D CAD modeling bridges the gap between vision and structural reality.",
  keywords: [
    "architectural facades",
    "facade engineering",
    "aluminum windows and doors",
    "custom metal fabrication",
    "perforated cladding",
    "3D CAD rendering Ankara",
  ],
};

const materials = [
  {
    headline: "Aluminium & Stainless Steel Fabrication",
    body: "We specialize in heavy and light aluminium and stainless steel fabrication. From structural framing systems to high-tolerance decorative elements, our metals are engineered to withstand extreme environmental loads while preserving aesthetic purity.",
    image: "/projects/handrail-balustrade.jpg",
  },
  {
    headline: "Architectural Composites & Masonry Integration",
    body: "We seamlessly integrate metals with other high-performance, complementary architectural materials. Our structural scopes incorporate specialized glass, marble, stone, and premium wood cladding to create layered, rich facade textures.",
    image: "/projects/brick-composite-facade.jpg",
  },
  {
    headline: "Custom Metal Work & Tensioned Cable Facades",
    body: "Our capabilities include complex perforated cladding systems, glass canopies, and stainless steel tension bars, cable systems, and point-fixing spider glass applications that maximize natural light transmission without compromising structural safety.",
    image: "/projects/spider-glass-fitting.jpg",
  },
];

const pillars = [
  {
    headline: "Proven Global Footprint",
    body: "Trusted by elite general contractors across the world—from Enka in Moscow and Istanbul, to TAV Airports, Polimeks in Ashgabat, Strabag in Baku, and Summa in Tripoli.",
    icon: (
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 0c2.5 2.7 4 6.2 4 10s-1.5 7.3-4 10M12 2c-2.5 2.7-4 6.2-4 10s1.5 7.3 4 10M2.5 9h19M2.5 15h19" />
    ),
  },
  {
    headline: "Complex Sector Expertise",
    body: "Extensive, diverse experience spanning high-profile sectors including healthcare (Infectious Clinical Hospital, Moscow), aviation (Adnan Menderes Airport), luxury retail (Kuntsevo Plaza), and premier hospitality (JW Marriott Baku).",
    icon: (
      <path d="M3 21V9l9-6 9 6v12M3 21h18M9 21v-6h6v6M9 12h.01M15 12h.01M12 12h.01" />
    ),
  },
  {
    headline: "Turnkey Execution",
    body: "We oversee the entire lifecycle of your facade system—from engineering consultations and raw material procurement to custom CNC fabrication and ultimate on-site structural assembly.",
    icon: (
      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8-3a8 8 0 0 1-.15 1.53l2.02 1.58-2 3.46-2.38-.96a8.07 8.07 0 0 1-1.33.77l-.36 2.53H9.2l-.36-2.53a8.07 8.07 0 0 1-1.33-.77l-2.38.96-2-3.46 2.02-1.58A8 8 0 0 1 5 12a8 8 0 0 1 .15-1.53L3.13 8.9l2-3.46 2.38.96c.42-.31.87-.57 1.33-.77L9.2 3.1h5.6l.36 2.53c.46.2.91.46 1.33.77l2.38-.96 2 3.46-2.02 1.58c.1.5.15 1.01.15 1.53Z" />
    ),
  },
  {
    headline: "Rigorous Quality Compliance",
    body: "Our systems comply with the most stringent European and international safety, seismic, thermal insulation, and fire resistance standards.",
    icon: (
      <path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Zm-2.5 10.5 2 2 4-4.5" />
    ),
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-charcoal-950">
      <Navbar />

      {/* SECTION 1 — Hero */}
      <section
        className="relative flex min-h-[85vh] items-center bg-charcoal-950 bg-cover bg-center px-6 md:px-16 lg:px-24"
        style={{ backgroundImage: "url('/bg/prometa-bg2.png')" }}
      >
        <div className="absolute inset-0 bg-linear-to-t from-charcoal-950 via-charcoal-950/70 to-charcoal-950/30" />

        <div className="relative max-w-4xl animate-hero-in">
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-accent-400 md:text-sm">
            Architectural Facade Systems &amp; Tailored Metalwork
          </p>
          <h1 className="text-4xl font-light tracking-tight text-white sm:text-5xl md:text-7xl">
            Bridging the Gap Between Concept and Structural Reality.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cream-200 md:text-xl">
            From initial 3D computer renderings to high-tolerance physical
            installation, PROMETA engineers elite, durable facade systems for
            the world&apos;s most demanding commercial and public developments.
          </p>
          <a
            href="#engineering-advantage"
            className="group mt-10 inline-flex items-center gap-3 border border-white/25 px-7 py-4 text-sm uppercase tracking-widest text-white transition-all duration-300 ease-premium hover:border-accent-500 hover:bg-accent-500 hover:text-charcoal-950"
          >
            View Our Engineering Advantage
            <span className="transition-transform duration-300 ease-premium group-hover:translate-y-1">
              ↓
            </span>
          </a>
        </div>
      </section>

      {/* SECTION 2 — Corporate profile */}
      <section className="grid gap-12 px-6 py-24 md:grid-cols-2 md:gap-16 md:px-16 md:py-32 lg:px-24">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-accent-400">
            Corporate Profile
          </p>
          <h2 className="text-3xl font-light text-white md:text-4xl">
            Elite Engineering for Global Landmarks
          </h2>
          <div className="mt-8 space-y-6 leading-relaxed text-cream-200">
            <p>
              <strong className="font-medium text-white">PROMETA</strong> is a
              highly specialized organization, operating at the leading edge
              of the architectural facade industry. We principally engage in
              the complete supply, fabrication, and precision installation of
              elite aluminium window and door systems, perforated aluminium
              and steel facade claddings, handrails, balustrating systems,
              column coverings, canopies, and other architectural and
              decorative materials for large-scale commercial and public
              developments.
            </p>
            <p>
              Our reputation is built upon our ability to manage
              high-complexity projects from start to finish. We bring
              structural durability, thermal efficiency, and striking visual
              aesthetics to public spaces, hospitals, transit terminals, and
              corporate headquarters worldwide. At PROMETA, we do not simply
              install cladding—we partner with architects, developers, and
              general contractors to turn ambitious blueprints into iconic,
              lasting realities.
            </p>
          </div>
        </div>

        <div className="relative min-h-80 w-full overflow-hidden border border-white/10 bg-bronze-900 md:min-h-full">
          <Image
            src="/projects/ikb1-facade.jpg"
            alt="Perforated aluminium facade cladding, Infectious Clinical Hospital No. 1, Moscow"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <span className="absolute bottom-4 left-4 bg-charcoal-950/70 px-3 py-1.5 text-xs uppercase tracking-widest text-cream-200">
            Infectious Clinical Hospital No. 1, Moscow
          </span>
        </div>
      </section>

      {/* SECTION 3 — 3D CAD advantage */}
      <section
        id="engineering-advantage"
        className="scroll-mt-20 bg-bronze-900/40 px-6 py-24 md:px-16 md:py-32 lg:px-24"
      >
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <ProgressSlider
            beforeSrc="/projects/hospital-progress.jpg"
            beforeLabel="Structural installation, Emergency Hospital Complex"
            afterSrc="/projects/hospital-finished.jpg"
            afterLabel="Completed facade, Emergency Hospital Complex"
          />

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-accent-400">
              Engineering Workflow
            </p>
            <h2 className="text-3xl font-light text-white md:text-4xl">
              Zero-Tolerance Precision: The 3D CAD Advantage
            </h2>
            <div className="mt-8 space-y-6 leading-relaxed text-cream-200">
              <p>
                At PROMETA, precision begins long before a single sheet of
                metal is cut. We understand that in modern architecture,
                success lies in the elimination of error at the design stage.
              </p>
              <p>
                We take great care to construct highly detailed{" "}
                <strong className="font-medium text-white">
                  3D computer renderings as CAD drawings
                </strong>
                . This meticulous process provides a comprehensive initial
                model of the product, placing immense emphasis on both the
                strict technical parameters and visual qualities beforehand.
              </p>
              <p>
                These complex models are carefully examined, simulated, and
                discussed in depth with our clients. This collaborative
                process ensures an effective, clear visualization of the
                final product prior to physical realization. By
                stress-testing the architectural designs digitally, we
                guarantee the exact visual and structural effectiveness of
                the actual outcome on site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Material & craftsmanship mastery */}
      <section className="px-6 py-24 md:px-16 md:py-32 lg:px-24">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-accent-400">
            Craftsmanship
          </p>
          <h2 className="text-3xl font-light text-white md:text-4xl">
            Material Integration &amp; Structural Versatility
          </h2>
          <p className="mt-4 text-cream-400">
            Championing structural steel, architectural glass, and
            multi-material composites.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {materials.map((card) => (
            <div
              key={card.headline}
              className="group relative overflow-hidden border border-white/10 p-8 transition-colors duration-300 ease-premium hover:border-accent-500/60"
            >
              <Image
                src={card.image}
                alt={card.headline}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover opacity-20 transition-opacity duration-500 ease-premium group-hover:opacity-45"
              />
              <div className="absolute inset-0 bg-charcoal-950/60 transition-colors duration-500 ease-premium group-hover:bg-charcoal-950/40" />

              <div className="relative">
                <h3 className="text-lg text-white">{card.headline}</h3>
                <p className="mt-4 text-sm leading-relaxed text-cream-200">
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5 — Why partner with PROMETA */}
      <section className="bg-charcoal-900 px-6 py-24 md:px-16 md:py-32 lg:px-24">
        <h2 className="max-w-2xl text-3xl font-light text-white md:text-4xl">
          Why Leading Developers Choose PROMETA
        </h2>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div key={pillar.headline}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.4}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mb-4 h-7 w-7 text-accent-500"
              >
                {pillar.icon}
              </svg>
              <h3 className="text-sm uppercase tracking-wide text-white">
                {pillar.headline}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream-400">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6 — CTA */}
      <section className="bg-bronze-800 px-6 py-24 text-center md:px-16 md:py-32 lg:px-24">
        <h2 className="mx-auto max-w-2xl text-3xl font-light text-white md:text-5xl">
          Let&apos;s Engineer Your Next Landmark.
        </h2>
        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-cream-200">
          Share your architectural drawings or specifications with our
          engineering team, and let us prepare a customized 3D visualization
          and quotation.
        </p>
        <Link
          href="/contact"
          className="group mt-10 inline-flex items-center gap-3 border border-white/25 px-7 py-4 text-sm uppercase tracking-widest text-white transition-all duration-300 ease-premium hover:border-accent-500 hover:bg-accent-500 hover:text-charcoal-950"
        >
          Request a Technical Consultation
          <span className="transition-transform duration-300 ease-premium group-hover:translate-x-1">
            →
          </span>
        </Link>
      </section>
    </main>
  );
}
