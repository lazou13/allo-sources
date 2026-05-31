import { ShieldCheck, Info } from "lucide-react";
import type { Translations } from "../i18n";

export default function Disclaimer({ tr }: { tr: Translations }) {
  const d = tr.disclaimer;
  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="card-premium p-6 md:p-8 border-l-4 border-gold">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="w-5 h-5 text-gold flex-shrink-0"/>
            <h2 className="text-lg font-semibold text-navy">{d.title}</h2>
          </div>
          <p className="text-navy/65 leading-relaxed mb-4">{d.text}</p>
          <div className="flex items-start gap-2 bg-gold-pale rounded-lg p-4">
            <Info className="w-4 h-4 text-gold-dark mt-0.5 flex-shrink-0"/>
            <p className="text-sm text-gold-dark/80 italic">{d.legalNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
