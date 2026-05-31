import type { Translations } from "../i18n";

export default function Services({ tr }: { tr: Translations }) {
  const s = tr.services;
  return (
    <section className="py-16 bg-white" id="prestations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">{s.title}</h2>
          <p className="section-subtitle">{s.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {s.items.map((item) => (
            <div key={item.title}
              className="card group hover:border-ocean/30 hover:-translate-y-1 transition-all duration-200 cursor-default">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-ocean mb-2 text-sm leading-snug">{item.title}</h3>
              <p className="text-slate/60 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
