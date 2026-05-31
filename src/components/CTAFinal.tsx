import { Phone, MessageCircle, FileText } from "lucide-react";
import type { Translations } from "../i18n";

interface Props { tr: Translations; whatsappNumber: string; phone: string; }

export default function CTAFinal({ tr, whatsappNumber, phone }: Props) {
  const c = tr.cta;
  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(c.whatsappMsg)}`;

  return (
    <section className="py-20 bg-gradient-to-br from-ocean via-ocean-light to-[#1a5276] text-white" id="contact">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="text-4xl mb-4">💧</div>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{c.title}</h2>
        <p className="text-white/75 text-lg mb-10 leading-relaxed">{c.text}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href={`tel:${phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold bg-white text-ocean hover:bg-gray-50 transition-all shadow-xl active:scale-95 text-lg">
            <Phone className="w-5 h-5"/>
            {c.ctaCall}
          </a>
          <a href={waUrl} target="_blank" rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold bg-[#25D366] text-white hover:bg-[#1ebe5a] transition-all shadow-xl active:scale-95 text-lg">
            <MessageCircle className="w-5 h-5"/>
            {c.ctaWhatsapp}
          </a>
          <a href="#rapport"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold bg-white/15 text-white border border-white/30 hover:bg-white/25 transition-all active:scale-95 text-lg">
            <FileText className="w-5 h-5"/>
            {c.ctaReport}
          </a>
        </div>

        {/* Message WhatsApp prérempli */}
        <div className="mt-10 bg-white/10 backdrop-blur rounded-2xl p-5 text-left max-w-xl mx-auto">
          <p className="text-xs text-white/50 uppercase tracking-wide mb-2 font-medium">Message WhatsApp pré-rempli :</p>
          <p className="text-sm text-white/80 italic leading-relaxed">{c.whatsappMsg}</p>
        </div>
      </div>
    </section>
  );
}
