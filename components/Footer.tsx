import Link from "next/link";

const navLinks = [
  { href: "/about", label: "About us" },
  { href: "/projects", label: "Projects" },
  { href: "/refs", label: "References" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-charcoal-900 px-6 py-14 md:px-16 lg:px-24">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-lg tracking-wide text-white">PROMETA</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream-400">
            Elite architectural facade systems and precision metalwork,
            engineered from Ankara for landmark developments worldwide.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-10 gap-y-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-accent-400">
              Site
            </p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream-200 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-accent-400">
              Headquarters
            </p>
            <address className="mt-4 max-w-56 text-sm not-italic leading-relaxed text-cream-200">
              Ostim OSB Mah. 1203 Sokak No: 10
              <br />
              Yenimahalle / Ankara / Turkey
            </address>
            <a
              href="mailto:info@prometainsaat.com.tr"
              className="mt-2 inline-block text-sm text-cream-200 transition-colors duration-300 hover:text-white"
            >
              info@prometainsaat.com.tr
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-6 text-xs text-cream-400">
        © {year} PROMETA İnşaat Taahhüt Cephe Sistemleri San. ve Tic. Ltd.
        Şti. All rights reserved.
      </div>
    </footer>
  );
}
