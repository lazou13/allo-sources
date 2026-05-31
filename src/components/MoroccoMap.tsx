import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { X } from "lucide-react";
import type { Translations } from "../i18n";

// Fix Leaflet default marker icon in Vite
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const CAT_COLORS: Record<string, string> = {
  "Agriculture": "#2d6a3f",
  "Hôtels & Resorts": "#0f2040",
  "Golf": "#059669",
  "Promoteurs": "#6d28d9",
  "Collectivités": "#b45309",
  "Industrie": "#374151",
};

function createCustomIcon(color: string) {
  return L.divIcon({
    className: "",
    html: `<div style="
      width:14px;height:14px;
      background:${color};
      border:2.5px solid white;
      border-radius:50%;
      box-shadow:0 1px 4px rgba(0,0,0,.35)
    "></div>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7],
  });
}

const POINTS = [
  { city: "Marrakech", client: "Allo Sources — Base principale", cat: "Collectivités", mission: "Base opérationnelle", lat: 31.6295, lng: -7.9811 },
  { city: "Benguerir", client: "OCP Benguerir", cat: "Industrie", mission: "Prospection industrielle", lat: 32.234, lng: -7.956, ref: true },
  { city: "Benguerir", client: "ONCF Benguerir", cat: "Collectivités", mission: "Étude infrastructure", lat: 32.244, lng: -7.946, ref: true },
  { city: "Marrakech", client: "Royal Mansour", cat: "Hôtels & Resorts", mission: "Alimentation en eau", lat: 31.626, lng: -8.000, ref: true },
  { city: "Marrakech", client: "Fondation Lalla Salma", cat: "Collectivités", mission: "Étude terrain", lat: 31.635, lng: -7.968, ref: true },
  { city: "Marrakech", client: "TGCC M Avenue", cat: "Promoteurs", mission: "Étude avant construction", lat: 31.650, lng: -7.983, ref: true },
  { city: "Samanah", client: "Golf Samanah", cat: "Golf", mission: "Irrigation golf", lat: 31.4968, lng: -8.2119, ref: true },
  { city: "Noria", client: "Golf Noria", cat: "Golf", mission: "Irrigation golf", lat: 31.558, lng: -8.011, ref: true },
  { city: "Khouribga", client: "Menara Holding", cat: "Promoteurs", mission: "Étude foncière", lat: 32.882, lng: -6.907, ref: true },
  { city: "Safi", client: "Projets industriels", cat: "Industrie", mission: "Prospection terrain", lat: 32.296, lng: -9.237 },
  { city: "Agadir", client: "Stade / Projets terrain", cat: "Collectivités", mission: "Étude terrain", lat: 30.427, lng: -9.598 },
  { city: "Benslimane", client: "Carrière / Projets", cat: "Industrie", mission: "Vérification puits", lat: 33.620, lng: -7.131 },
  { city: "Demnate", client: "Coopérative bio Demnate", cat: "Agriculture", mission: "Forage agricole", lat: 31.729, lng: -6.997 },
  { city: "Meknès", client: "Afric Agri", cat: "Agriculture", mission: "Prospection agricole", lat: 33.893, lng: -5.554, ref: true },
  { city: "Beni Mellal", client: "Delassus", cat: "Agriculture", mission: "Irrigation agricole", lat: 32.337, lng: -6.360, ref: true },
  { city: "Marrakech", client: "Domaine Royal Palm", cat: "Hôtels & Resorts", mission: "Alimentation domaine", lat: 31.603, lng: -8.014, ref: true },
];

function FitMarkers() {
  const map = useMap();
  useEffect(() => {
    const bounds = L.latLngBounds(POINTS.map(p => [p.lat, p.lng]));
    map.fitBounds(bounds, { padding: [30, 30] });
  }, [map]);
  return null;
}

export default function MoroccoMap({ tr }: { tr: Translations }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const m = tr.map;
  const categories = ["Agriculture", "Hôtels & Resorts", "Golf", "Promoteurs", "Collectivités", "Industrie"];
  const filtered = activeFilter === "all" ? POINTS : POINTS.filter(p => p.cat === activeFilter);

  return (
    <section className="py-20 bg-stone" id="carte">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="section-label mb-3">Présence terrain</p>
          <h2 className="section-title mb-4">{m.title}</h2>
          <p className="text-navy/60">{m.subtitle}</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          <button onClick={() => setActiveFilter("all")}
            className={`px-4 py-1.5 rounded-md text-sm font-medium border transition-all ${activeFilter === "all" ? "bg-navy text-white border-navy" : "bg-white text-navy/70 border-navy/15 hover:border-navy/40"}`}>
            {m.filterAll}
          </button>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 rounded-md text-sm font-medium border transition-all ${activeFilter === cat ? "text-white border-transparent" : "bg-white text-navy/70 border-navy/15 hover:border-navy/40"}`}
              style={activeFilter === cat ? { backgroundColor: CAT_COLORS[cat] } : {}}>
              {cat}
            </button>
          ))}
        </div>

        {/* Map */}
        <div className="rounded-xl overflow-hidden shadow-card border border-gray-100" style={{ height: "500px" }}>
          <MapContainer
            center={[31.7917, -7.0926]}
            zoom={6}
            style={{ height: "100%", width: "100%" }}
            scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <FitMarkers/>
            {filtered.map((pt, i) => (
              <Marker
                key={i}
                position={[pt.lat, pt.lng]}
                icon={createCustomIcon(CAT_COLORS[pt.cat] ?? "#0a1628")}>
                <Popup>
                  <div className="min-w-[180px]">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="inline-block w-2.5 h-2.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: CAT_COLORS[pt.cat] }}/>
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">{pt.cat}</span>
                    </div>
                    <p className="font-semibold text-gray-800">{pt.client}</p>
                    <p className="text-sm text-gray-500">{pt.city}</p>
                    <p className="text-sm text-gray-600 mt-1">{pt.mission}</p>
                    {pt.ref && <p className="text-xs text-blue-600 italic mt-1.5">Référence citée sur allo-sources.ma</p>}
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Legend */}
        <div className="mt-5 flex flex-wrap gap-4 justify-center">
          {Object.entries(CAT_COLORS).map(([cat, color]) => (
            <div key={cat} className="flex items-center gap-1.5 text-sm text-navy/60">
              <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: color }}/>
              {cat}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
