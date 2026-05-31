import type { Translations } from "../i18n";

export default function Method({ tr }: { tr: Translations }) {
  const m = tr.method;
  return (
    <section className="py-20 bg-white" id="methode">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Processus</p>
          <h2 className="section-title mb-4">{m.title}</h2>
          <p className="text-navy/60">{m.subtitle}</p>
        </div>

        <div className="space-y-4">
          {m.steps.map((step, i) => (
            <div key={step.num} className="flex gap-5 items-start group">
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center font-bold text-sm shadow-md group-hover:bg-gold transition-colors">
                  {step.num}
                </div>
                {i < m.steps.length - 1 && <div className="w-0.5 h-6 bg-navy/10 mt-1"/>}
              </div>
              <div className="card-premium flex-1 p-5 group-hover:border-navy/20 transition-colors">
                <h3 className="font-semibold text-navy mb-1">{step.title}</h3>
                <p className="text-sm text-navy/55 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
