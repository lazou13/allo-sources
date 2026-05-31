import { TrendingDown, CheckCircle2, AlertOctagon } from "lucide-react";
import type { Translations } from "../i18n";

export default function Problem({ tr }: { tr: Translations }) {
  const p = tr.problem;
  return (
    <section className="py-20 bg-white" id="probleme">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="section-label mb-3">Pourquoi une étude préalable ?</p>
            <h2 className="section-title mb-5">{p.title}</h2>
            <p className="text-navy/60 leading-relaxed mb-8">{p.intro}</p>
            <ul className="space-y-3">
              {p.points.map(pt => (
                <li key={pt} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sage mt-0.5 flex-shrink-0"/>
                  <span className="text-navy/80">{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            {/* Stat card */}
            <div className="bg-navy rounded-2xl p-8 text-center text-white shadow-xl">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="w-7 h-7 text-gold-light"/>
              </div>
              <p className="text-7xl font-bold text-gold-light mb-1">85%</p>
              <p className="text-white/70 font-medium text-lg mb-1">{p.statLabel}</p>
              <p className="text-white/40 text-xs">{p.statSource}</p>
            </div>

            {/* Quote */}
            <div className="border-l-4 border-gold pl-5 py-2">
              <p className="text-navy/70 italic leading-relaxed">
                « Nous avons des milliers de références dans tout le Maroc. »
              </p>
              <p className="text-navy/40 text-sm mt-2">— Olivier Gendrot, fondateur d'Allo Sources</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
