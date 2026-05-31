import { Phone, MessageCircle, FileText, CheckCircle, Newspaper, Download } from "lucide-react";
import type { Translations } from "../i18n";

interface Props { tr: Translations; whatsappNumber: string; phone: string; lang: "fr" | "en"; }

export default function Hero({ tr, whatsappNumber, phone, lang }: Props) {
  const h = tr.hero;
  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(tr.cta.whatsappMsg)}`;
  const stats = lang === "fr"
    ? [{ val: "85%", label: "Fiabilité" }, { val: "2012", label: "Fondé" }, { val: "1000+", label: "Missions" }]
    : [{ val: "85%", label: "Reliability" }, { val: "2012", label: "Founded" }, { val: "1000+", label: "Missions" }];

  return (
    <section className="relative bg-navy min-h-[100svh] flex items-center overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0">
        <img src="/team-olivier-leo.jpg" alt="Olivier et Léo Gendrot — Allo Sources terrain"
          className="w-full h-full object-cover object-center opacity-20"/>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40"/>
      </div>

      {/* Gold top accent */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold via-gold-light to-transparent"/>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="animate-fade-in-up">
          <p className="section-label mb-4" style={{ color: "#d4a843" }}>{h.badge}</p>

          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white leading-[1.1] mb-6">
            {h.title}
          </h1>

          <p className="text-lg text-white/65 mb-8 leading-relaxed">{h.subtitle}</p>

          {/* CTAs — stacked on mobile */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-10">
            <a href={`tel:${phone}`} className="btn-gold text-base px-7 py-4 justify-center sm:justify-start">
              <Phone className="w-5 h-5"/>{h.ctaCall}
            </a>
            <a href={waUrl} target="_blank" rel="noopener noreferrer"
              className="btn-whatsapp text-base px-7 py-4 justify-center sm:justify-start">
              <MessageCircle className="w-5 h-5"/>{h.ctaWhatsapp}
            </a>
            <a href="#rapport"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg font-semibold text-white border border-white/25 hover:border-white/60 hover:bg-white/8 transition-all text-base">
              <FileText className="w-5 h-5"/>{h.ctaReport}
            </a>
          </div>

          {/* Trust pills */}
          <div className="flex flex-wrap gap-2">
            {[h.trust1, h.trust2, h.trust3, h.trust4, h.trust5].map(trust => (
              <span key={trust}
                className="inline-flex items-center gap-1.5 bg-white/8 border border-white/12 px-3 py-1.5 rounded-md text-sm text-white/70">
                <CheckCircle className="w-3.5 h-3.5 text-gold-light flex-shrink-0"/>
                {trust}
              </span>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-4 lg:pl-8">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            {stats.map(s => (
              <div key={s.label} className="bg-white/8 border border-white/12 backdrop-blur rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-gold-light">{s.val}</p>
                <p className="text-white/45 text-xs mt-1 font-medium">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Article L'Économiste */}
          <div className="bg-white/8 border border-white/12 backdrop-blur rounded-xl overflow-hidden">
            <img src="/article-economiste.jpg" alt="Article L'Économiste — Allo Sources"
              className="w-full h-36 object-cover object-top"/>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Newspaper className="w-4 h-4 text-gold-light flex-shrink-0"/>
                <span className="text-xs font-semibold text-gold-light uppercase tracking-wide">{h.articleBadge}</span>
              </div>
              <p className="text-white/65 text-xs italic leading-relaxed mb-3">
                « Taux de fiabilité de nos missions peut aller jusqu'à 85% »
                <span className="block text-white/35 mt-1 not-italic">— L'Économiste, juillet 2025</span>
              </p>
              <a href="/article-economiste.jpg" download="article-economiste-allo-sources.jpg"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-light hover:text-gold transition-colors">
                <Download className="w-3.5 h-3.5"/>
                Télécharger l'article
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"/>
    </section>
  );
}
