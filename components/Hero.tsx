export default function Hero() {
    return (
        <section className="flex min-h-screen items-center px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl relative animate-hero-in">
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-cream-400 md:text-sm">
            İnşaat Taahhüt Cephe Sistemleri
          </p>

          <h1 className="text-5xl font-light tracking-tight text-white sm:text-6xl md:text-8xl">
            PROMETA
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cream-200 md:text-2xl">
            Premium architectural facade solutions for ambitious
            architectural projects.
          </p>

          <button className="group mt-10 inline-flex items-center gap-3 border border-white/25 px-7 py-4 text-sm uppercase tracking-widest text-white transition-all duration-300 ease-premium hover:border-accent-500 hover:bg-accent-500 hover:text-charcoal-950">
            Explore Projects
            <span className="transition-transform duration-300 ease-premium group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </section>
    )
}
