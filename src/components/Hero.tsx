import type { Translations } from "../i18n";

interface Props { tr: Translations; lang: "fr" | "en"; }

export default function Hero({ tr, lang }: Props) {
  const h = tr.hero;
  const tagline = lang === "fr"
    ? "Expertise terrain, prospection géophysique et accompagnement avant forage."
    : "Field expertise, geophysical prospecting and pre-drilling guidance.";

  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-navy" id="accueil">
      {/* Background photo — Ken Burns slow zoom */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/forage-maroc.jpg"
          alt="Machine de forage — eau jaillissante au Maroc"
          className="w-full h-full object-cover object-center animate-ken-burns"
        />
        {/* Multi-layer overlay for depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/75 via-navy/55 to-navy/80" />
        <div className="absolute inset-0 bg-navy/25" />
      </div>

      {/* Gold hairline top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      {/* Main content — vertically centered */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Brand name */}
        <h1
          className="text-[3.5rem] sm:text-7xl md:text-8xl font-display font-bold text-white tracking-[0.06em] leading-none mb-4 opacity-0 animate-fade-up"
          style={{ textShadow: "0 2px 32px rgba(0,0,0,0.5)" }}
        >
          ALLO SOURCES
        </h1>

        {/* Since */}
        <p className="text-gold-light tracking-[0.3em] text-xs sm:text-sm uppercase font-medium mb-8 opacity-0 animate-fade-up-delay">
          {lang === "fr" ? "Depuis 2012 — Marrakech · Tout le Maroc" : "Since 2012 — Marrakech · All Morocco"}
        </p>

        {/* Main headline */}
        <p className="text-xl sm:text-2xl md:text-3xl text-white/88 font-light leading-relaxed mb-6 opacity-0 animate-fade-up-delay">
          {lang === "fr"
            ? <>Étude hydrogéologique &amp;<br className="hidden sm:block" /> recherche d'eau souterraine au Maroc</>
            : <>Hydrogeological study &amp;<br className="hidden sm:block" /> groundwater detection in Morocco</>
          }
        </p>

        {/* Subtitle */}
        <p className="text-white/45 text-sm sm:text-base max-w-xl mx-auto leading-relaxed opacity-0 animate-fade-up-delay2">
          {tagline}
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/30 text-[10px] tracking-[0.25em] uppercase">
          {lang === "fr" ? "Découvrir" : "Discover"}
        </span>
        <svg
          className="w-4 h-4 text-white/35 animate-scroll-hint"
          viewBox="0 0 16 16" fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Bottom fade to white for seamless transition */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
