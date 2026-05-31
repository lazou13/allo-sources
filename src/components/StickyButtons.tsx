import { Phone, MessageCircle } from "lucide-react";
import type { Translations } from "../i18n";

interface Props { tr: Translations; whatsappNumber: string; phone: string; }

export default function StickyButtons({ tr, whatsappNumber, phone }: Props) {
  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(tr.cta.whatsappMsg)}`;

  return (
    <div className="sticky-cta md:hidden">
      <a href={waUrl} target="_blank" rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-white bg-[#25D366] shadow-xl text-sm active:scale-95">
        <MessageCircle className="w-5 h-5"/>
        {tr.sticky.whatsapp}
      </a>
      <a href={`tel:${phone}`}
        className="flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-white bg-ocean shadow-xl text-sm active:scale-95">
        <Phone className="w-5 h-5"/>
        {tr.sticky.call}
      </a>
    </div>
  );
}
