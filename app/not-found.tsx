import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col bg-charcoal-950">
      <Navbar />
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-accent-400">
          Error 404
        </p>
        <h1 className="mt-6 text-4xl font-light tracking-tight text-white sm:text-5xl">
          This Blueprint Doesn&apos;t Exist.
        </h1>
        <p className="mt-6 max-w-md leading-relaxed text-cream-400">
          The page you&apos;re looking for may have been moved, renamed, or
          never built.
        </p>
        <Link
          href="/"
          className="group mt-10 inline-flex items-center gap-3 border border-white/25 px-7 py-4 text-sm uppercase tracking-widest text-white transition-all duration-300 ease-premium hover:border-accent-500 hover:bg-accent-500 hover:text-charcoal-950"
        >
          Return Home
          <span className="transition-transform duration-300 ease-premium group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </main>
  );
}
