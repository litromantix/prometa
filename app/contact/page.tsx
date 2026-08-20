import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import TenderForm from "@/components/contact/TenderForm";

export const metadata: Metadata = {
  title: "Global Contacts & Tender Inquiries | PROMETA Facade Systems",
  description:
    "Contact PROMETA's global engineering and fabrication headquarters in Ankara, Turkey. Submit Request for Proposals (RFQs), upload CAD/BOM architectural files, or connect with our specialized estimating departments.",
  keywords: [
    "contact facade manufacturer",
    "PROMETA contact Ankara",
    "RFQ structural glazing",
    "submit CAD architectural drawing",
    "facade tender submission",
  ],
};

const departments = [
  {
    title: "Estimations, Estimating & Costing Team",
    email: "pricing@prometainsaat.com.tr",
    scope:
      "Direct bidding, tender document assessments, bill-of-quantities evaluation, and initial production cost structures.",
  },
  {
    title: "Engineering & CAD Design Board",
    email: "engineering@prometainsaat.com.tr",
    scope:
      "Structural facade blueprints, engineering simulations, and interactive 3D computer rendering coordinates.",
  },
  {
    title: "HR, Subcontractors & Vendor Registry",
    email: "partners@prometainsaat.com.tr",
    scope:
      "Regional installation crews, equipment leasing partners, and raw glass/metal suppliers looking to register for upcoming projects.",
  },
];

const faqs = [
  {
    question:
      "How does PROMETA coordinate international installation logistics?",
    answer:
      "PROMETA holds extensive experience managing site assemblies in complex international territories—including major developments across Russia, Turkey, Azerbaijan, Algeria, and Libya. We dispatch dedicated engineering directors and installation leads to supervise local assembly teams or manage entire turnkey operations directly.",
  },
  {
    question:
      "What is the typical lead time for custom 3D CAD modeling simulations?",
    answer:
      "Initial 3D computer renderings and CAD drawing models are compiled and presented within 7 to 15 business days of raw design receipt, allowing for deep visualization of visual and technical qualities before production starts.",
  },
];

const mapQuery = encodeURIComponent(
  "Ostim OSB Mah. 1203 Sokak No: 10 Yenimahalle, Ankara, Turkey"
);

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-charcoal-950">
      <Navbar />

      {/* SECTION 1 — Hero */}
      <section
        className="relative flex min-h-[55vh] items-center bg-charcoal-950 bg-cover bg-center px-6 md:px-16 lg:px-24"
        style={{ backgroundImage: "url('/bg/prometa-bg1.png')" }}
      >
        <div className="absolute inset-0 bg-linear-to-t from-charcoal-950 via-charcoal-950/80 to-charcoal-950/40" />

        <div className="relative max-w-3xl animate-hero-in">
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-accent-400 md:text-sm">
            Global Contacts &amp; Inquiries
          </p>
          <h1 className="text-4xl font-light tracking-tight text-white sm:text-5xl md:text-6xl">
            Let&apos;s Discuss Your Next Structural Vision.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-cream-200">
            Connect with our engineering headquarters in Ankara to submit a
            tender, request a technical consultation, or route your inquiry
            directly to the specialized department.
          </p>
        </div>
      </section>

      {/* SECTION 2 — HQ coordinates + map */}
      <section className="grid gap-12 px-6 py-24 md:grid-cols-2 md:gap-16 md:px-16 md:py-32 lg:px-24">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-accent-400">
            Global Headquarters
          </p>
          <h2 className="text-3xl font-light text-white md:text-4xl">
            PROMETA İnşaat Taahhüt Cephe Sistemleri San. ve Tic. Ltd. Şti.
          </h2>

          <dl className="mt-10 space-y-6 text-cream-200">
            <div>
              <dt className="text-xs uppercase tracking-widest text-cream-400">
                HQ Address
              </dt>
              <dd className="mt-2 leading-relaxed">
                Ostim OSB Mah. 1203 Sokak No: 10
                <br />
                Yenimahalle / Ankara / Turkey
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-cream-400">
                Main Telephone Hub
              </dt>
              <dd className="mt-2">
                <a
                  href="tel:+903123861661"
                  className="transition-colors duration-300 hover:text-accent-400"
                >
                  +90 312 386 16 61
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-cream-400">
                Secure Fax Line
              </dt>
              <dd className="mt-2">+90 312 386 16 63</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-cream-400">
                Primary Corporate Inbox
              </dt>
              <dd className="mt-2">
                <a
                  href="mailto:info@prometainsaat.com.tr"
                  className="transition-colors duration-300 hover:text-accent-400"
                >
                  info@prometainsaat.com.tr
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-cream-400">
                Official Domain
              </dt>
              <dd className="mt-2">www.prometainsaat.com.tr</dd>
            </div>
          </dl>
        </div>

        <div className="min-h-80 w-full overflow-hidden border border-white/10 md:min-h-full">
          <iframe
            title="PROMETA Headquarters — Ankara, Turkey"
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            className="h-full min-h-80 w-full grayscale-[35%] invert-[92%] contrast-[90%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* SECTION 3 — Tender / RFQ form */}
      <section className="bg-bronze-900/40 px-6 py-24 md:px-16 md:py-32 lg:px-24">
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-accent-400">
          Request for Proposal
        </p>
        <h2 className="max-w-2xl text-3xl font-light text-white md:text-4xl">
          Submit a Tender or Project Inquiry
        </h2>
        <p className="mt-4 max-w-2xl text-cream-400">
          Walk through corporate credentials, project parameters, and
          architectural file uploads in three short steps.
        </p>

        <div className="mt-12">
          <TenderForm />
        </div>
      </section>

      {/* SECTION 4 — Departmental routing */}
      <section className="px-6 py-24 md:px-16 md:py-32 lg:px-24">
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-accent-400">
          Direct Routing
        </p>
        <h2 className="max-w-2xl text-3xl font-light text-white md:text-4xl">
          Reach the Right Department Directly
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {departments.map((dept) => (
            <div
              key={dept.title}
              className="border border-white/10 p-8 transition-colors duration-300 ease-premium hover:border-accent-500/60"
            >
              <h3 className="text-lg text-white">{dept.title}</h3>
              <a
                href={`mailto:${dept.email}`}
                className="mt-3 inline-block text-sm text-accent-400 transition-colors duration-300 hover:text-accent-500"
              >
                {dept.email}
              </a>
              <p className="mt-4 text-sm leading-relaxed text-cream-400">
                {dept.scope}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5 — FAQ */}
      <section className="bg-charcoal-900 px-6 py-24 md:px-16 md:py-32 lg:px-24">
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-accent-400">
          Frequently Asked
        </p>
        <h2 className="max-w-2xl text-3xl font-light text-white md:text-4xl">
          Global Tendering FAQs
        </h2>

        <div className="mt-12 max-w-3xl divide-y divide-white/10 border-y border-white/10">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-white">
                <span className="text-base md:text-lg">{faq.question}</span>
                <span className="shrink-0 text-xl text-accent-400 transition-transform duration-300 ease-premium group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-2xl leading-relaxed text-cream-200">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
