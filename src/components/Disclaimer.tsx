import { ShieldCheck, Info } from "lucide-react";
import type { Translations } from "../i18n";

export default function Disclaimer({ tr }: { tr: Translations }) {
  const d = tr.disclaimer;
  return (
    <section className="py-12 bg-ocean-pale/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="card border-ocean/20 bg-white">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="w-6 h-6 text-ocean flex-shrink-0"/>
            <h2 className="text-xl font-display font-bold text-ocean">{d.title}</h2>
          </div>
          <p className="text-slate/70 leading-relaxed mb-4">{d.text}</p>
          <div className="flex items-start gap-2 bg-ocean-pale/50 rounded-xl p-4 border border-ocean/10">
            <Info className="w-4 h-4 text-ocean mt-0.5 flex-shrink-0"/>
            <p className="text-sm text-ocean/80 italic">{d.legalNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
