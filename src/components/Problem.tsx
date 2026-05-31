import { AlertTriangle, CheckCircle2, TrendingDown } from "lucide-react";
import type { Translations } from "../i18n";

export default function Problem({ tr }: { tr: Translations }) {
  const p = tr.problem;
  return (
    <section className="py-16 bg-earth-pale" id="probleme">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-3 py-1.5 rounded-full text-sm font-medium mb-4">
              <AlertTriangle className="w-4 h-4" />
              Risque
            </div>
            <h2 className="section-title mb-4">{p.title}</h2>
            <p className="text-slate/70 leading-relaxed mb-6">{p.intro}</p>
            <ul className="space-y-3">
              {p.points.map((pt) => (
                <li key={pt} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                  <span className="text-slate">{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: stat card */}
          <div className="flex flex-col gap-4">
            <div className="card bg-ocean text-white rounded-2xl p-8 text-center shadow-xl">
              <TrendingDown className="w-10 h-10 mx-auto mb-3 text-white/70" />
              <p className="text-6xl font-bold mb-1">85%</p>
              <p className="text-white/80 font-medium text-lg mb-2">{p.statLabel}</p>
              <p className="text-white/60 text-sm">{p.statSource}</p>
            </div>
            <div className="card bg-white rounded-2xl p-5 border-l-4 border-ocean">
              <p className="text-sm text-slate/70 italic">
                « L'étude permet de réduire les risques et d'orienter la décision avant forage. »
              </p>
              <p className="text-xs text-slate/50 mt-2">— Allo Sources, depuis 2012</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
