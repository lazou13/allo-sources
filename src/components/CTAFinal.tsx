import { Phone, MessageCircle, FileText } from "lucide-react";
import type { Translations } from "../i18n";

interface Props { tr: Translations; whatsappNumber: string; phone: string; }

export default function CTAFinal({ tr, whatsappNumber, phone }: Props) {
  const c = tr.cta;
  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(c.whatsappMsg)}`;

  return (
    <section className="py-24 bg-navy relative overflow-hidden" id="contact">
      {/* Gold accent top */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent"/>

      {/* Subtle water pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1.5" fill="white"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)"/>
        </svg>
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <p className="section-label mb-4" style={{ color: "#d4a843" }}>Contact</p>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-5">{c.title}</h2>
        <p className="text-white/60 text-lg mb-10 leading-relaxed">{c.text}</p>

        {/* CTAs — stacked on mobile */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <a href={`tel:${phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg font-semibold bg-gold text-white hover:bg-gold-dark transition-all shadow-gold active:scale-95 text-base">
            <Phone className="w-5 h-5"/>
            {c.ctaCall}
          </a>
          <a href={waUrl} target="_blank" rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg font-semibold bg-[#25D366] text-white hover:bg-[#1ebe5a] transition-all shadow-md active:scale-95 text-base">
            <MessageCircle className="w-5 h-5"/>
            {c.ctaWhatsapp}
          </a>
          <a href="#rapport"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg font-semibold text-white border border-white/25 hover:border-white/50 hover:bg-white/8 transition-all active:scale-95 text-base">
            <FileText className="w-5 h-5"/>
            {c.ctaReport}
          </a>
        </div>

        {/* WhatsApp message preview */}
        <div className="bg-white/6 border border-white/12 rounded-xl p-5 text-left max-w-lg mx-auto">
          <p className="text-xs text-white/40 uppercase tracking-widest font-medium mb-2">Message WhatsApp pré-rempli</p>
          <p className="text-sm text-white/65 italic leading-relaxed">{c.whatsappMsg}</p>
        </div>
      </div>
    </section>
  );
}
