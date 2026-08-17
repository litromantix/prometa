import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ProjectsGallery from "@/components/projects/ProjectsGallery";
import { projects } from "./data";

export const metadata: Metadata = {
  title: "Global Projects Portfolio | PROMETA — Architectural Facade Achievements",
  description:
    "Explore PROMETA's global portfolio of elite architectural facade systems. Browse engineering case studies across healthcare, aviation, commercial, retail, and hospitality sectors, detailing our high-performance glass, custom metal claddings, and stainless steel systems.",
  keywords: [
    "facade portfolio",
    "structural glass projects",
    "aluminum cladding installation",
    "commercial curtain wall",
    "airport facade engineering",
    "hospital facade systems",
  ],
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-charcoal-950">
      <Navbar />

      {/* SECTION 1 — Hero */}
      <section
        className="relative flex min-h-[70vh] items-center bg-charcoal-950 bg-cover bg-center px-6 md:px-16 lg:px-24"
        style={{ backgroundImage: "url('/projects/ikb1-facade.jpg')" }}
      >
        <div className="absolute inset-0 bg-linear-to-t from-charcoal-950 via-charcoal-950/80 to-charcoal-950/40" />

        <div className="relative max-w-4xl animate-hero-in">
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-accent-400 md:text-sm">
            Global Architectural Landmarks
          </p>
          <h1 className="text-4xl font-light tracking-tight text-white sm:text-5xl md:text-7xl">
            Engineering Durability, Shaping Modern Skylines.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cream-200 md:text-xl">
            Discover how PROMETA translates complex architectural concepts
            into high-tolerance, physical realities. Our global portfolio
            highlights precision structural engineering, multi-material
            integration, and zero-error execution.
          </p>
        </div>
      </section>

      {/* SECTION 2 & 3 — Filterable portfolio */}
      <section className="px-6 py-24 md:px-16 md:py-32 lg:px-24">
        <ProjectsGallery projects={projects} />
      </section>

      {/* SECTION 5 — CTA */}
      <section className="bg-bronze-800 px-6 py-24 text-center md:px-16 md:py-32 lg:px-24">
        <h2 className="mx-auto max-w-2xl text-3xl font-light text-white md:text-5xl">
          Ready to Engineer Your Next Vision?
        </h2>
        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-cream-200">
          Let our specialized engineering team transform your architectural
          concepts into safe, striking, and durable physical reality. Request
          a consultation or submit your CAD drawings for custom 3D
          evaluation.
        </p>
        <Link
          href="/contact"
          className="group mt-10 inline-flex items-center gap-3 border border-white/25 px-7 py-4 text-sm uppercase tracking-widest text-white transition-all duration-300 ease-premium hover:border-accent-500 hover:bg-accent-500 hover:text-charcoal-950"
        >
          Submit Request for Proposal
          <span className="transition-transform duration-300 ease-premium group-hover:translate-x-1">
            →
          </span>
        </Link>
      </section>
    </main>
  );
}
