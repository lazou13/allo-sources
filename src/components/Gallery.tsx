import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Translations } from "../i18n";

interface Props { tr: Translations; lang: "fr" | "en" }

const PHOTOS = [
  { src: "/gallery/bassin-solaire.jpg",     fr: "Bassin d'irrigation avec énergie solaire",  en: "Solar-powered irrigation basin" },
  { src: "/gallery/bassin-vert.jpg",        fr: "Grand bassin d'eau agricole",                en: "Large agricultural water basin" },
  { src: "/gallery/pompage.jpg",            fr: "Station de pompage — tuyauterie bleue",      en: "Pump station with blue pipework" },
  { src: "/gallery/forage-machine.jpg",     fr: "Travaux de forage en cours",                 en: "Active drilling works" },
  { src: "/gallery/camion-forage.jpg",      fr: "Camion-foreuse sur site",                    en: "Drilling truck on site" },
  { src: "/gallery/piscine-villa.jpg",      fr: "Piscine alimentée — villa privée",           en: "Water-fed pool — private villa" },
  { src: "/gallery/jardin-villa.jpg",       fr: "Jardin irrigué — domaine privé",             en: "Irrigated garden — private estate" },
  { src: "/gallery/chevaux.jpg",            fr: "Abreuvoir équin alimenté par forage",        en: "Equine trough fed by borehole" },
  { src: "/gallery/champ-irrigue.jpg",      fr: "Champ agricole irrigué par forage",          en: "Agricultural field irrigated by borehole" },
  { src: "/gallery/puits-profond.jpg",      fr: "Vue en profondeur d'un puits",               en: "Deep well cross-section view" },
  { src: "/gallery/puits-couvert.jpg",      fr: "Point d'eau aménagé — couverture verte",     en: "Developed water point — green cover" },
  { src: "/gallery/puits-grillage.jpg",     fr: "Puits sécurisé avec grillage",               en: "Secured well with iron grating" },
  { src: "/gallery/puits-ancien.jpg",       fr: "Diagnostic puits ancien",                    en: "Old well diagnostic" },
  { src: "/gallery/puits-traditionnel.jpg", fr: "Puits traditionnel en zone aride",           en: "Traditional well in arid zone" },
];

export default function Gallery({ tr, lang }: Props) {
  const g = tr.gallery;
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(dir: "left" | "right") {
    scrollRef.current?.scrollBy({ left: dir === "right" ? 310 : -310, behavior: "smooth" });
  }

  return (
    <section className="py-20 bg-white" id="galerie">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-water font-medium tracking-[0.15em] text-xs uppercase mb-3">
            {lang === "fr" ? "Galerie" : "Gallery"}
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-petrol mb-4">{g.title}</h2>
          <p className="text-petrol/55 max-w-lg mx-auto">{g.subtitle}</p>
        </div>

        {/* Video */}
        <div className="mb-8 rounded-2xl overflow-hidden shadow-lg border border-sand/30 bg-black">
          <video
            src="/gallery/video.mp4"
            controls
            playsInline
            preload="metadata"
            className="w-full block"
            style={{ maxHeight: "480px" }}
          />
        </div>

        {/* Photo carousel */}
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            aria-label="Précédent"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 hidden sm:flex w-9 h-9 bg-white border border-sand/50 rounded-full shadow-md items-center justify-center hover:bg-petrol hover:text-white hover:border-petrol transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={() => scroll("right")}
            aria-label="Suivant"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 hidden sm:flex w-9 h-9 bg-white border border-sand/50 rounded-full shadow-md items-center justify-center hover:bg-petrol hover:text-white hover:border-petrol transition-colors">
            <ChevronRight className="w-4 h-4" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto pb-2"
            style={{
              scrollSnapType: "x mandatory",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}>
            {PHOTOS.map(photo => (
              <div
                key={photo.src}
                className="flex-shrink-0 rounded-xl overflow-hidden border border-sand/30 shadow-sm group"
                style={{
                  scrollSnapAlign: "start",
                  width: "clamp(260px, 82vw, 320px)",
                  height: "210px",
                }}>
                <img
                  src={photo.src}
                  alt={lang === "fr" ? photo.fr : photo.en}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          <div className="absolute top-0 left-0 bottom-2 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none hidden sm:block" />
          <div className="absolute top-0 right-0 bottom-2 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none hidden sm:block" />
        </div>

        <p className="text-center text-petrol/30 text-xs mt-3 sm:hidden tracking-wide">
          {lang === "fr" ? "← Glisser pour voir toutes les photos →" : "← Swipe to see all photos →"}
        </p>

      </div>
    </section>
  );
}
