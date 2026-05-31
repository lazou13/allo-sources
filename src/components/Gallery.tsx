import { Camera, Video, ImagePlus } from "lucide-react";
import type { Translations } from "../i18n";

// Placeholder media items — replace with real images/videos when available
const PLACEHOLDER_ITEMS = [
  { type: "photo", label: "Intervention terrain — région Marrakech" },
  { type: "photo", label: "Équipement géophysique en action" },
  { type: "video", label: "Démonstration de prospection" },
  { type: "photo", label: "Marquage du point de forage" },
  { type: "photo", label: "Rapport terrain — exemple" },
  { type: "video", label: "Résultat client — forage réussi" },
];

export default function Gallery({ tr }: { tr: Translations }) {
  const g = tr.gallery;
  return (
    <section className="py-16 bg-slate text-white" id="galerie">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">{g.title}</h2>
          <p className="text-white/60">{g.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {PLACEHOLDER_ITEMS.map((item, i) => (
            <div key={i}
              className="relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all group cursor-default"
              style={{ aspectRatio: "4/3" }}>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                {item.type === "video"
                  ? <Video className="w-10 h-10 text-white/30"/>
                  : <Camera className="w-10 h-10 text-white/30"/>}
                <span className="text-xs text-white/30 text-center px-3">{item.label}</span>
              </div>
              <div className="absolute top-2 right-2">
                <span className={`text-xs px-2 py-0.5 rounded-full ${item.type === "video" ? "bg-red-500/20 text-red-300" : "bg-blue-500/20 text-blue-300"}`}>
                  {item.type === "video" ? "Vidéo" : "Photo"}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-3 bg-white/5 rounded-2xl p-5 border border-white/10">
          <ImagePlus className="w-6 h-6 text-white/40"/>
          <p className="text-white/50 text-sm">{g.placeholder}</p>
        </div>
      </div>
    </section>
  );
}
