import { Camera, Video, ImagePlus } from "lucide-react";
import type { Translations } from "../i18n";

const PLACEHOLDERS = [
  { type: "photo", label: "Intervention terrain — Marrakech" },
  { type: "photo", label: "Équipement géophysique" },
  { type: "video", label: "Démonstration prospection" },
  { type: "photo", label: "Marquage du point de forage" },
  { type: "photo", label: "Rapport terrain" },
  { type: "video", label: "Résultat client" },
];

export default function Gallery({ tr }: { tr: Translations }) {
  const g = tr.gallery;
  return (
    <section className="py-20 bg-navy" id="galerie">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="section-label mb-3" style={{ color: "#d4a843" }}>Terrain</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">{g.title}</h2>
          <p className="text-white/45">{g.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
          {PLACEHOLDERS.map((item, i) => (
            <div key={i} className="relative bg-white/5 border border-white/8 rounded-xl overflow-hidden"
              style={{ aspectRatio: "4/3" }}>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                {item.type === "video"
                  ? <Video className="w-8 h-8 text-white/20"/>
                  : <Camera className="w-8 h-8 text-white/20"/>}
                <span className="text-xs text-white/25 text-center px-3 leading-snug">{item.label}</span>
              </div>
              <div className="absolute top-2.5 right-2.5">
                <span className={`text-xs px-2 py-0.5 rounded-md font-medium ${
                  item.type === "video"
                    ? "bg-red-500/15 text-red-300"
                    : "bg-white/10 text-white/40"}`}>
                  {item.type === "video" ? "Vidéo" : "Photo"}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 bg-white/5 border border-white/8 rounded-xl p-5">
          <ImagePlus className="w-5 h-5 text-white/25"/>
          <p className="text-white/35 text-sm">{g.placeholder}</p>
        </div>
      </div>
    </section>
  );
}
