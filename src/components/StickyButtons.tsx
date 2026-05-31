import { Phone, MessageCircle } from "lucide-react";
import type { Translations } from "../i18n";

interface Props { tr: Translations; whatsappNumber: string; phone: string; }

export default function StickyButtons({ tr, whatsappNumber, phone }: Props) {
  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(tr.cta.whatsappMsg)}`;
  return (
    /* Mobile only — full width row pinned to bottom */
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex border-t border-white/10 shadow-2xl">
      <a href={waUrl} target="_blank" rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-4 font-semibold text-white bg-[#25D366] text-sm active:brightness-90">
        <MessageCircle className="w-5 h-5"/>
        {tr.sticky.whatsapp}
      </a>
      <a href={`tel:${phone}`}
        className="flex-1 flex items-center justify-center gap-2 py-4 font-semibold text-white bg-navy text-sm active:brightness-90">
        <Phone className="w-5 h-5"/>
        {tr.sticky.call}
      </a>
    </div>
  );
}
