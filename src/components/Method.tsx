import type { Translations } from "../i18n";

export default function Method({ tr }: { tr: Translations }) {
  const m = tr.method;
  return (
    <section className="py-16 bg-white" id="methode">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">{m.title}</h2>
          <p className="section-subtitle">{m.subtitle}</p>
        </div>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-ocean/20 via-ocean to-ocean/20 hidden md:block"/>
          <div className="space-y-6">
            {m.steps.map((step) => (
              <div key={step.num} className="flex gap-5 items-start group">
                {/* Number circle */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-ocean text-white flex items-center justify-center font-bold text-sm shadow-lg z-10 group-hover:bg-ocean-light transition-colors">
                  {step.num}
                </div>
                <div className="card flex-1 group-hover:border-ocean/30 transition-colors">
                  <h3 className="font-semibold text-ocean mb-1">{step.title}</h3>
                  <p className="text-sm text-slate/70">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
