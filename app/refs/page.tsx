import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ReferencesTable from "@/components/refs/ReferencesTable";
import { contractorFilters, countries, references } from "./data";

export const metadata: Metadata = {
  title: "Global Credentials & Client References | PROMETA Facade Systems",
  description:
    "Explore PROMETA's official global reference list. Review our partnerships with world-renowned general contractors, including ENKA, TAV, Strabag, Polimeks, and Summa across landmark infrastructure, commercial, and healthcare developments.",
  keywords: [
    "facade references",
    "corporate credentials",
    "ENKA contractor projects",
    "TAV airports facade",
    "global building references",
  ],
};

const stats = [
  { value: `${countries.length}`, label: "Countries" },
  { value: `${references.length}`, label: "Landmark Reference Projects" },
  { value: `${contractorFilters.length}+`, label: "Global Contractor Partners" },
];

export default function ReferencesPage() {
  return (
    <main className="min-h-screen bg-charcoal-950">
      <Navbar />

      {/* SECTION 1 — Hero */}
      <section
        className="relative flex min-h-[70vh] items-center bg-charcoal-950 bg-cover bg-center px-6 md:px-16 lg:px-24"
        style={{ backgroundImage: "url('/bg/prometa-bg1.png')" }}
      >
        <div className="absolute inset-0 bg-linear-to-t from-charcoal-950 via-charcoal-950/80 to-charcoal-950/40" />

        <div className="relative max-w-4xl animate-hero-in">
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-accent-400 md:text-sm">
            Proven Credentials
          </p>
          <h1 className="text-4xl font-light tracking-tight text-white sm:text-5xl md:text-7xl">
            Partnering with Global Pioneers. Engineered for Excellence.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cream-200 md:text-xl">
            Behind every landmark skyline is a foundation of trusted
            partnerships. PROMETA works hand-in-hand with the world&apos;s
            leading general contractors, engineering firms, and municipal
            authorities to execute high-tolerance architectural visions.
          </p>

          <div className="mt-14 grid max-w-xl grid-cols-3 gap-8 border-t border-white/10 pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-light text-white md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-widest text-cream-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — Interactive reference database */}
      <section className="px-6 py-24 md:px-16 md:py-32 lg:px-24">
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-accent-400">
          Reference Directory
        </p>
        <h2 className="max-w-2xl text-3xl font-light text-white md:text-4xl">
          The Official PROMETA Reference Registry
        </h2>
        <p className="mt-4 max-w-2xl text-cream-400">
          Search or filter our complete project history by location or
          general contractor.
        </p>

        <div className="mt-12">
          <ReferencesTable references={references} />
        </div>
      </section>

      {/* SECTION 3 — Contractor partners */}
      <section className="bg-bronze-900/40 px-6 py-24 md:px-16 md:py-32 lg:px-24">
        <h2 className="text-3xl font-light text-white md:text-4xl">
          Our General Contractor Partners
        </h2>
        <p className="mt-4 max-w-xl text-cream-400">
          Delivering engineering excellence alongside the world&apos;s most
          trusted developers and builders.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          {contractorFilters.map((name) => (
            <span
              key={name}
              className="border border-white/15 px-6 py-3 text-sm uppercase tracking-widest text-cream-200"
            >
              {name}
            </span>
          ))}
        </div>
      </section>

      {/* SECTION 4 — CTA */}
      <section className="bg-bronze-800 px-6 py-24 text-center md:px-16 md:py-32 lg:px-24">
        <h2 className="mx-auto max-w-2xl text-3xl font-light text-white md:text-5xl">
          Ready to Tender Your Next Structural Project?
        </h2>
        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-cream-200">
          Discover how PROMETA integrates engineering excellence,
          high-precision CAD modeling, and global execution into a seamless,
          high-performance facade solution.
        </p>
        <Link
          href="/contact"
          className="group mt-10 inline-flex items-center gap-3 border border-white/25 px-7 py-4 text-sm uppercase tracking-widest text-white transition-all duration-300 ease-premium hover:border-accent-500 hover:bg-accent-500 hover:text-charcoal-950"
        >
          Initiate Tender Consultation
          <span className="transition-transform duration-300 ease-premium group-hover:translate-x-1">
            →
          </span>
        </Link>
      </section>
    </main>
  );
}
