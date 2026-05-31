import { useState } from "react";
import { ExternalLink } from "lucide-react";
import type { Translations } from "../i18n";

const ALL_CLIENTS = [
  { name: "OCP Benguerir", cat: "Industrie", logo: "⚙️" },
  { name: "Royal Mansour", cat: "Hôtels & Resorts", logo: "🏨" },
  { name: "Menara Holding", cat: "Promoteurs", logo: "🏗️" },
  { name: "TGCC", cat: "Promoteurs", logo: "🏗️" },
  { name: "Fondation Lalla Salma", cat: "Collectivités", logo: "🏛️" },
  { name: "Golf Samanah", cat: "Golf", logo: "⛳" },
  { name: "Golf Noria", cat: "Golf", logo: "⛳" },
  { name: "ONCF Benguerir", cat: "Collectivités", logo: "🚂" },
  { name: "Domaine Royal Palm", cat: "Hôtels & Resorts", logo: "🌴" },
  { name: "Delassus", cat: "Agriculture", logo: "🌿" },
  { name: "Afric Agri", cat: "Agriculture", logo: "🌾" },
];

const FILTERS = ["Tous", "Agriculture", "Hôtels & Resorts", "Golf", "Promoteurs", "Collectivités", "Industrie"];

export default function References({ tr }: { tr: Translations }) {
  const [filter, setFilter] = useState("Tous");
  const ref = tr.references;

  const visible = filter === "Tous" ? ALL_CLIENTS : ALL_CLIENTS.filter(c => c.cat === filter);

  return (
    <section className="py-16 bg-earth-pale" id="references">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="section-title">{ref.title}</h2>
          <p className="section-subtitle">{ref.subtitle}</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {FILTERS.map(f => (
            <button key={f} onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                filter === f ? "bg-ocean text-white" : "bg-white text-slate hover:bg-gray-50 border border-gray-200"
              }`}>
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {visible.map(client => (
            <div key={client.name} className="card bg-white text-center hover:border-ocean/30 hover:-translate-y-0.5 transition-all">
              <div className="text-3xl mb-2">{client.logo}</div>
              <p className="font-semibold text-sm text-ocean leading-snug">{client.name}</p>
              <p className="text-xs text-slate/50 mt-1">{client.cat}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <a href={ref.viewAllUrl} target="_blank" rel="noopener noreferrer"
            className="btn-secondary gap-2">
            <ExternalLink className="w-4 h-4"/>
            {ref.viewAll}
          </a>
        </div>
      </div>
    </section>
  );
}
