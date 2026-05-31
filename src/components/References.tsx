import { useState } from "react";
import { ExternalLink } from "lucide-react";
import type { Translations } from "../i18n";

const CLIENTS = [
  { name: "OCP Group", shortName: "OCP", cat: "Industrie", domain: "ocpgroup.ma", initials: "OCP", color: "#1a5276", bg: "#d6eaf8" },
  { name: "Royal Mansour", shortName: "Royal Mansour", cat: "Hôtels & Resorts", domain: null, initials: "RM", color: "#6d4c41", bg: "#efebe9" },
  { name: "Menara Holding", shortName: "Menara", cat: "Promoteurs", domain: null, initials: "MH", color: "#4a235a", bg: "#f3e5f5" },
  { name: "TGCC", shortName: "TGCC", cat: "Promoteurs", domain: "tgcc.ma", initials: "TG", color: "#1b5e20", bg: "#e8f5e9" },
  { name: "Fondation Lalla Salma", shortName: "F. Lalla Salma", cat: "Collectivités", domain: null, initials: "FLS", color: "#880e4f", bg: "#fce4ec" },
  { name: "Golf Samanah", shortName: "Golf Samanah", cat: "Golf", domain: null, initials: "GS", color: "#2e7d32", bg: "#e8f5e9" },
  { name: "Golf Noria", shortName: "Golf Noria", cat: "Golf", domain: null, initials: "GN", color: "#33691e", bg: "#f1f8e9" },
  { name: "ONCF", shortName: "ONCF", cat: "Collectivités", domain: "oncf.ma", initials: "ONCF", color: "#b71c1c", bg: "#ffebee" },
  { name: "Domaine Royal Palm", shortName: "Royal Palm", cat: "Hôtels & Resorts", domain: null, initials: "RP", color: "#e65100", bg: "#fff3e0" },
  { name: "Delassus", shortName: "Delassus", cat: "Agriculture", domain: "delassus.ma", initials: "DEL", color: "#2e7d32", bg: "#e8f5e9" },
  { name: "Afric Agri", shortName: "Afric Agri", cat: "Agriculture", domain: null, initials: "AA", color: "#558b2f", bg: "#f1f8e9" },
];

const FILTERS = ["Tous", "Agriculture", "Hôtels & Resorts", "Golf", "Promoteurs", "Collectivités", "Industrie"];

function LogoBadge({ client }: { client: typeof CLIENTS[0] }) {
  return (
    <div
      className="w-14 h-14 rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0"
      style={{ backgroundColor: client.bg, color: client.color }}>
      {client.initials}
    </div>
  );
}

export default function References({ tr }: { tr: Translations }) {
  const [filter, setFilter] = useState("Tous");
  const ref = tr.references;
  const visible = filter === "Tous" ? CLIENTS : CLIENTS.filter(c => c.cat === filter);

  return (
    <section className="py-20 bg-white" id="references">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="section-label mb-3">Références</p>
          <h2 className="section-title mb-4">{ref.title}</h2>
          <p className="text-navy/60">{ref.subtitle}</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {FILTERS.map(f => (
            <button key={f} onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all border ${
                filter === f
                  ? "bg-navy text-white border-navy"
                  : "bg-white text-navy/70 border-navy/15 hover:border-navy/40"
              }`}>
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visible.map(client => (
            <div key={client.name} className="card-premium p-5 flex items-center gap-4">
              <LogoBadge client={client}/>
              <div>
                <p className="font-semibold text-navy leading-snug">{client.name}</p>
                <p className="text-xs text-navy/45 mt-0.5 font-medium uppercase tracking-wide">{client.cat}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href={ref.viewAllUrl} target="_blank" rel="noopener noreferrer"
            className="btn-outline gap-2">
            <ExternalLink className="w-4 h-4"/>
            {ref.viewAll}
          </a>
        </div>
      </div>
    </section>
  );
}
