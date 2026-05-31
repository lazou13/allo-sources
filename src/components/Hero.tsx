import { Phone, MessageCircle, FileText, CheckCircle, Newspaper } from "lucide-react";
import type { Translations } from "../i18n";

interface Props {
  tr: Translations;
  whatsappNumber: string;
  phone: string;
}

export default function Hero({ tr, whatsappNumber, phone }: Props) {
  const h = tr.hero;
  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(tr.cta.whatsappMsg)}`;

  return (
    <section className="relative bg-gradient-to-br from-ocean via-ocean-light to-[#1a5276] text-white overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Water ripple accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" fill="none" stroke="white" strokeWidth="2"/>
          <circle cx="100" cy="100" r="60" fill="none" stroke="white" strokeWidth="2"/>
          <circle cx="100" cy="100" r="40" fill="none" stroke="white" strokeWidth="2"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: content */}
          <div className="animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
              {h.badge}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold leading-tight mb-5">
              {h.title}
            </h1>

            <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-xl">
              {h.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10">
              <a href={`tel:${phone}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold bg-white text-ocean hover:bg-gray-50 transition-all shadow-lg active:scale-95">
                <Phone className="w-5 h-5" />
                {h.ctaCall}
              </a>
              <a href={waUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold bg-[#25D366] text-white hover:bg-[#1ebe5a] transition-all shadow-lg active:scale-95">
                <MessageCircle className="w-5 h-5" />
                {h.ctaWhatsapp}
              </a>
              <a href="#rapport"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold bg-white/15 text-white border border-white/30 hover:bg-white/25 transition-all active:scale-95">
                <FileText className="w-5 h-5" />
                {h.ctaReport}
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              {[h.trust1, h.trust2, h.trust3, h.trust4, h.trust5].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg text-sm">
                  <CheckCircle className="w-3.5 h-3.5 text-green-300" />
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right: article press + photo card */}
          <div className="flex flex-col gap-4">
            {/* Press mention */}
            <div className="bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/20">
              <div className="flex items-center gap-2 mb-3">
                <Newspaper className="w-5 h-5 text-yellow-300" />
                <span className="text-sm font-semibold text-yellow-300">{h.articleBadge}</span>
              </div>
              <p className="text-white/90 text-sm italic leading-relaxed">
                « Nous avons des milliers de références dans tout le Maroc. Le taux de fiabilité de nos missions peut aller jusqu'à 85%. »
              </p>
              <p className="text-white/60 text-xs mt-2">— Olivier Gendrot, fondateur · {h.articleQuote}</p>
            </div>

            {/* Team photo placeholder */}
            <div className="bg-white/10 backdrop-blur rounded-2xl overflow-hidden border border-white/20">
              <div className="bg-gradient-to-br from-ocean-light/40 to-ocean/60 h-52 flex flex-col items-center justify-center gap-3">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-3xl">👨‍👦</div>
                <div className="text-center">
                  <p className="font-semibold text-sm">Olivier & Léo Gendrot</p>
                  <p className="text-white/70 text-xs">Allo Sources — Père et fils</p>
                </div>
              </div>
              <div className="p-4 text-sm text-white/70 text-center italic">
                Photo terrain — médias disponibles sur demande
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { val: "85%", label: "Fiabilité" },
                { val: "2012", label: "Fondé en" },
                { val: "1000+", label: "Références" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 backdrop-blur rounded-xl p-3 text-center border border-white/20">
                  <p className="text-2xl font-bold text-white">{s.val}</p>
                  <p className="text-white/70 text-xs mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 48L60 40C120 32 240 16 360 12C480 8 600 16 720 22C840 28 960 32 1080 30C1200 28 1320 20 1380 16L1440 12V48H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
