export default function Hero() {
    return (
        <section className="flex min-h-screen items-center px-8 md:px-16 lg:px-24">
        <div className="max-w-5xl">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/60">
            İnşaat Taahhüt Cephe Sistemleri
          </p>

          <h1 className="text-6xl font-light tracking-tight md:text-8xl">
            PROMETA
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/70 md:text-2xl">
            Premium architectural facade solutions for ambitious
            architectural projects.
          </p>

          <button className="mt-10 border border-white/30 px-7 py-4 text-sm uppercase tracking-widest transition hover:bg-white hover:text-[#4a3e3d]">
            Explore Projects
          </button>
        </div>
      </section>
    )
}