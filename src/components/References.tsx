import { useState } from "react";
import { ExternalLink } from "lucide-react";
import type { Translations } from "../i18n";

const CLIENTS = [
  // Agriculture
  { name: "Delassus", cat: "Agriculture", initials: "DEL", color: "#2e7d32", bg: "#e8f5e9" },
  { name: "Afric Agri", cat: "Agriculture", initials: "AA", color: "#558b2f", bg: "#f1f8e9" },
  { name: "Domaine Azrak", cat: "Agriculture", initials: "DAZ", color: "#388e3c", bg: "#f1f8e9" },
  { name: "Ferme du Haouz", cat: "Agriculture", initials: "FH", color: "#43a047", bg: "#e8f5e9" },
  { name: "Atlas Fruits", cat: "Agriculture", initials: "ATF", color: "#2e7d32", bg: "#f1f8e9" },
  { name: "Coopérative du Souss", cat: "Agriculture", initials: "CDS", color: "#558b2f", bg: "#f9fbe7" },
  { name: "Ferme Agricole du Drâa", cat: "Agriculture", initials: "FAD", color: "#33691e", bg: "#f1f8e9" },

  // Hôtels & Resorts
  { name: "Royal Mansour", cat: "Hôtels & Resorts", initials: "RM", color: "#6d4c41", bg: "#efebe9" },
  { name: "Domaine Royal Palm", cat: "Hôtels & Resorts", initials: "RP", color: "#e65100", bg: "#fff3e0" },
  { name: "Hôtel Oberoi Marrakech", cat: "Hôtels & Resorts", initials: "OBR", color: "#3e2723", bg: "#efebe9" },
  { name: "Palais Namaskar", cat: "Hôtels & Resorts", initials: "PN", color: "#4a148c", bg: "#f3e5f5" },
  { name: "Mandarin Oriental", cat: "Hôtels & Resorts", initials: "MO", color: "#b71c1c", bg: "#ffebee" },
  { name: "Amanjena Marrakech", cat: "Hôtels & Resorts", initials: "AJ", color: "#bf360c", bg: "#fbe9e7" },
  { name: "Kasbah Tamadot", cat: "Hôtels & Resorts", initials: "KT", color: "#37474f", bg: "#eceff1" },

  // Golf
  { name: "Golf Samanah", cat: "Golf", initials: "GS", color: "#2e7d32", bg: "#e8f5e9" },
  { name: "Golf Noria", cat: "Golf", initials: "GN", color: "#33691e", bg: "#f1f8e9" },
  { name: "Golf Assoufid", cat: "Golf", initials: "GAF", color: "#1b5e20", bg: "#e8f5e9" },
  { name: "Domaine Amelkis", cat: "Golf", initials: "AMK", color: "#004d40", bg: "#e0f2f1" },
  { name: "Golf du Palais Royal", cat: "Golf", initials: "GPR", color: "#2e7d32", bg: "#f1f8e9" },

  // Promoteurs
  { name: "Menara Holding", cat: "Promoteurs", initials: "MH", color: "#4a235a", bg: "#f3e5f5" },
  { name: "TGCC", cat: "Promoteurs", initials: "TG", color: "#1b5e20", bg: "#e8f5e9" },
  { name: "Al Omrane", cat: "Promoteurs", initials: "AO", color: "#0d47a1", bg: "#e8eaf6" },
  { name: "CDG Développement", cat: "Promoteurs", initials: "CDG", color: "#1b5e20", bg: "#e8f5e9" },
  { name: "Addoha Groupe", cat: "Promoteurs", initials: "ADD", color: "#3949ab", bg: "#e8eaf6" },

  // Collectivités
  { name: "Fondation Lalla Salma", cat: "Collectivités", initials: "FLS", color: "#880e4f", bg: "#fce4ec" },
  { name: "ONCF", cat: "Collectivités", initials: "ONCF", color: "#b71c1c", bg: "#ffebee" },
  { name: "COP 22 Marrakech", cat: "Collectivités", initials: "COP", color: "#1b5e20", bg: "#e8f5e9" },
  { name: "Aéroport de Marrakech", cat: "Collectivités", initials: "ONDA", color: "#0d47a1", bg: "#e3f2fd" },
  { name: "Jardin Majorelle", cat: "Collectivités", initials: "JM", color: "#1565c0", bg: "#e8eaf6" },
  { name: "ONEE", cat: "Collectivités", initials: "ONEE", color: "#006064", bg: "#e0f7fa" },
  { name: "Institut Agronomique Hassan II", cat: "Collectivités", initials: "IAV", color: "#37474f", bg: "#eceff1" },

  // Industrie
  { name: "OCP Group", cat: "Industrie", initials: "OCP", color: "#1a5276", bg: "#d6eaf8" },
  { name: "Lafarge Ciment Maroc", cat: "Industrie", initials: "LFG", color: "#e65100", bg: "#fff3e0" },
  { name: "Mine d'or de Tiouit", cat: "Industrie", initials: "MDT", color: "#f57f17", bg: "#fff9c4" },
  { name: "Autoroutes du Maroc", cat: "Industrie", initials: "ADM", color: "#1565c0", bg: "#e3f2fd" },
  { name: "Groupe Samir (Comadi)", cat: "Industrie", initials: "SAM", color: "#0d47a1", bg: "#e8eaf6" },
  { name: "Ciments du Maroc", cat: "Industrie", initials: "CDM", color: "#4e342e", bg: "#efebe9" },

  // Personnalités
  { name: "Famille de l'Émir du Qatar", cat: "Personnalités", initials: "EQ", color: "#880e4f", bg: "#fce4ec" },
  { name: "Famille Debbouze", cat: "Personnalités", initials: "DBZ", color: "#4a235a", bg: "#f3e5f5" },
  { name: "Famille Agnelli", cat: "Personnalités", initials: "AGN", color: "#b71c1c", bg: "#ffebee" },
  { name: "Villa Privée — Palmeraie", cat: "Personnalités", initials: "VP", color: "#5d4037", bg: "#efebe9" },
  { name: "Résidence Privée — Amelkis", cat: "Personnalités", initials: "RA", color: "#6d4c41", bg: "#fbe9e7" },

  // Constructeurs
  { name: "Bymaro (Bouygues Maroc)", cat: "Constructeurs", initials: "BYM", color: "#1565c0", bg: "#e3f2fd" },
  { name: "Base militaire de Benguerir", cat: "Constructeurs", initials: "BMB", color: "#37474f", bg: "#eceff1" },
  { name: "Eiffage Maroc", cat: "Constructeurs", initials: "EIF", color: "#e65100", bg: "#fff3e0" },
  { name: "CDG Immo", cat: "Constructeurs", initials: "CDGI", color: "#1a237e", bg: "#e8eaf6" },
];

const FILTERS = ["Tous", "Agriculture", "Hôtels & Resorts", "Golf", "Promoteurs", "Collectivités", "Industrie", "Personnalités", "Constructeurs"];

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
          <p className="text-water font-medium tracking-[0.15em] text-xs uppercase mb-3">Références</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-petrol mb-4">{ref.title}</h2>
          <p className="text-petrol/55 max-w-lg mx-auto">{ref.subtitle}</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {FILTERS.map(f => (
            <button key={f} onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all border ${
                filter === f
                  ? "bg-petrol text-white border-petrol"
                  : "bg-white text-petrol/70 border-petrol/15 hover:border-petrol/40"
              }`}>
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visible.map(client => (
            <div key={client.name} className="bg-white border border-sand/40 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-water/30 transition-all flex items-center gap-4">
              <LogoBadge client={client}/>
              <div>
                <p className="font-semibold text-petrol leading-snug">{client.name}</p>
                <p className="text-xs text-petrol/45 mt-0.5 font-medium uppercase tracking-wide">{client.cat}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href={ref.viewAllUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-petrol/20 rounded-lg text-sm font-semibold text-petrol hover:bg-petrol hover:text-white transition-colors">
            <ExternalLink className="w-4 h-4"/>
            {ref.viewAll}
          </a>
        </div>
      </div>
    </section>
  );
}
