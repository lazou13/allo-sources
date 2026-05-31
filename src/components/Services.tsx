import { Search, Radio, MapPin, BarChart2, Map, CheckSquare, Home, MessageSquare } from "lucide-react";
import type { Translations } from "../i18n";

const ICONS = [Search, Radio, MapPin, BarChart2, Map, CheckSquare, Home, MessageSquare];

export default function Services({ tr }: { tr: Translations }) {
  const s = tr.services;
  return (
    <section className="py-20 bg-stone" id="prestations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="section-label mb-3">{s.title}</p>
          <h2 className="section-title mb-4">{s.title}</h2>
          <p className="text-navy/60 max-w-xl mx-auto">{s.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {s.items.map((item, i) => {
            const Icon = ICONS[i] ?? Search;
            return (
              <div key={item.title} className="card-premium p-6 group">
                <div className="w-11 h-11 rounded-lg bg-navy-pale flex items-center justify-center mb-4 group-hover:bg-navy group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5 text-navy group-hover:text-white transition-colors"/>
                </div>
                <h3 className="font-semibold text-navy mb-2 leading-snug">{item.title}</h3>
                <p className="text-navy/55 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
