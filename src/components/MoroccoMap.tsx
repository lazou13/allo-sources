import { useState } from "react";
import { X, MapPin } from "lucide-react";
import type { Translations } from "../i18n";

// Morocco outline SVG path (simplified approximation)
// ViewBox: 0 0 400 480 mapping lon[-13.5,0] lat[27,36]
const MOROCCO_PATH = "M228,11 L250,8 L270,12 L314,43 L344,69 L358,120 L366,180 L360,214 L340,250 L310,280 L280,300 L265,330 L240,355 L210,385 L185,415 L165,435 L148,455 L130,465 L110,465 L90,460 L70,455 L50,445 L30,430 L18,415 L8,395 L5,375 L12,355 L25,335 L40,320 L55,308 L70,300 L90,295 L100,282 L106,268 L110,250 L113,232 L112,215 L116,200 L120,185 L127,170 L135,158 L148,148 L160,140 L172,134 L182,128 L196,118 L204,106 L212,94 L218,80 L222,60 L225,40 L226,25 Z";

const CAT_COLORS: Record<string, string> = {
  "Agriculture": "#3a7d44",
  "Hôtels & Resorts": "#1e4a7c",
  "Golf": "#059669",
  "Promoteurs": "#7c3aed",
  "Collectivités": "#b45309",
  "Industrie": "#374151",
};

interface MapPoint {
  city: string; client: string; cat: string; mission: string; x: number; y: number; ref?: boolean;
}

interface Props { tr: Translations; }

export default function MoroccoMap({ tr }: Props) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selected, setSelected] = useState<MapPoint | null>(null);
  const m = tr.map;
  const allFilter = m.filterAll;

  // Use fr translations for points (they're the same data)
  const points: MapPoint[] = [
    { city: "Marrakech", client: "Allo Sources — Base principale", cat: "Collectivités", mission: "Base opérationnelle", x: 163, y: 233 },
    { city: "Benguerir", client: "OCP Benguerir", cat: "Industrie", mission: "Prospection industrielle", x: 170, y: 210, ref: true },
    { city: "Benguerir", client: "ONCF Benguerir", cat: "Collectivités", mission: "Étude infrastructure", x: 175, y: 222, ref: true },
    { city: "Marrakech", client: "Royal Mansour", cat: "Hôtels & Resorts", mission: "Alimentation en eau", x: 158, y: 240, ref: true },
    { city: "Marrakech", client: "Fondation Lalla Salma", cat: "Collectivités", mission: "Étude terrain", x: 152, y: 244, ref: true },
    { city: "Marrakech", client: "TGCC M Avenue", cat: "Promoteurs", mission: "Étude avant construction", x: 168, y: 228, ref: true },
    { city: "Samanah", client: "Golf Samanah", cat: "Golf", mission: "Irrigation golf", x: 144, y: 250, ref: true },
    { city: "Noria", client: "Golf Noria", cat: "Golf", mission: "Irrigation golf", x: 156, y: 246, ref: true },
    { city: "Khouribga", client: "Menara Holding", cat: "Promoteurs", mission: "Étude foncière", x: 196, y: 165, ref: true },
    { city: "Safi", client: "Projets industriels", cat: "Industrie", mission: "Prospection terrain", x: 127, y: 197 },
    { city: "Agadir", client: "Stade / Projets terrain", cat: "Collectivités", mission: "Étude terrain", x: 116, y: 299 },
    { city: "Benslimane", client: "Carrière / Projets", cat: "Industrie", mission: "Vérification puits", x: 188, y: 133 },
    { city: "Demnate", client: "Coopérative bio Demnate", cat: "Agriculture", mission: "Forage agricole", x: 193, y: 230 },
    { city: "Beni Mellal", client: "Delassus", cat: "Agriculture", mission: "Irrigation agricole", x: 200, y: 190, ref: true },
    { city: "Meknès", client: "Afric Agri", cat: "Agriculture", mission: "Prospection agricole", x: 236, y: 115, ref: true },
    { city: "Marrakech", client: "Domaine Royal Palm", cat: "Hôtels & Resorts", mission: "Alimentation domaine", x: 162, y: 236, ref: true },
  ];

  const categories = ["Agriculture", "Hôtels & Resorts", "Golf", "Promoteurs", "Collectivités", "Industrie"];
  const filtered = activeFilter === "all" ? points : points.filter(p => p.cat === activeFilter);

  return (
    <section className="py-16 bg-white" id="carte">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="section-title">{m.title}</h2>
          <p className="section-subtitle">{m.subtitle}</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          <button onClick={() => setActiveFilter("all")}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${activeFilter === "all" ? "bg-ocean text-white" : "bg-gray-100 text-slate hover:bg-gray-200"}`}>
            {allFilter}
          </button>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${activeFilter === cat ? "text-white" : "bg-gray-100 text-slate hover:bg-gray-200"}`}
              style={activeFilter === cat ? { backgroundColor: CAT_COLORS[cat] } : {}}>
              {cat}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {/* SVG Map */}
          <div className="lg:col-span-2 relative">
            <div className="bg-ocean-pale/30 rounded-2xl p-4 border border-ocean/10">
              <svg viewBox="0 0 400 480" className="w-full max-h-96 md:max-h-none" style={{ maxHeight: "440px" }}>
                {/* Morocco outline */}
                <path d={MOROCCO_PATH} fill="#dbeafe" stroke="#93c5fd" strokeWidth="1.5" strokeLinejoin="round"/>

                {/* Markers */}
                {filtered.map((pt, i) => (
                  <g key={i} className="cursor-pointer" onClick={() => setSelected(pt)}>
                    <circle cx={pt.x} cy={pt.y} r="7" fill={CAT_COLORS[pt.cat] ?? "#0d2b4e"}
                      stroke="white" strokeWidth="2" opacity="0.9"
                      className="hover:opacity-100 transition-opacity"/>
                    {pt.ref && (
                      <circle cx={pt.x} cy={pt.y} r="11" fill="none"
                        stroke={CAT_COLORS[pt.cat] ?? "#0d2b4e"} strokeWidth="1.5" opacity="0.4"/>
                    )}
                  </g>
                ))}
              </svg>

              {/* Legend */}
              <div className="mt-3 flex flex-wrap gap-2 justify-center">
                {Object.entries(CAT_COLORS).map(([cat, color]) => (
                  <div key={cat} className="flex items-center gap-1 text-xs text-slate/70">
                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: color }}/>
                    {cat}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Info panel / list */}
          <div className="space-y-2 max-h-[440px] overflow-y-auto pr-1">
            {selected ? (
              <div className="card border-ocean/20 relative">
                <button onClick={() => setSelected(null)} className="absolute top-3 right-3 p-1 hover:bg-gray-100 rounded">
                  <X className="w-4 h-4 text-slate/60"/>
                </button>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: CAT_COLORS[selected.cat] }}/>
                  <span className="text-xs font-medium text-slate/60 uppercase tracking-wide">{selected.cat}</span>
                </div>
                <h4 className="font-semibold text-ocean mb-1">{selected.client}</h4>
                <div className="flex items-center gap-1 text-sm text-slate/60 mb-2">
                  <MapPin className="w-3.5 h-3.5"/> {selected.city}
                </div>
                <p className="text-sm text-slate/70">{selected.mission}</p>
                {selected.ref && (
                  <p className="text-xs text-ocean/70 mt-2 italic">Référence citée sur allo-sources.ma</p>
                )}
              </div>
            ) : (
              <p className="text-sm text-slate/50 text-center py-4">Cliquez sur un point pour voir le détail</p>
            )}

            <div className="space-y-1.5">
              {filtered.slice(0, 8).map((pt, i) => (
                <button key={i} onClick={() => setSelected(pt)}
                  className={`w-full text-left p-3 rounded-xl border transition-colors text-sm hover:bg-ocean-pale/50 ${selected === pt ? "border-ocean bg-ocean-pale/50" : "border-gray-100"}`}>
                  <div className="flex items-start gap-2">
                    <span className="w-2.5 h-2.5 rounded-full mt-1 flex-shrink-0" style={{ backgroundColor: CAT_COLORS[pt.cat] }}/>
                    <div>
                      <p className="font-medium text-slate text-xs leading-snug">{pt.client}</p>
                      <p className="text-slate/50 text-xs">{pt.city}</p>
                    </div>
                  </div>
                </button>
              ))}
              {filtered.length > 8 && (
                <p className="text-xs text-slate/50 text-center pt-1">+{filtered.length - 8} autres interventions</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
