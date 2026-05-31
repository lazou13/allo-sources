import { Award, Users, MapPin, Shield } from "lucide-react";

const PILLARS = [
  { icon: Users,  title: "Entreprise familiale",         desc: "Fondée et dirigée par Olivier et Léo Gendrot, père et fils, engagés ensemble sur chaque mission." },
  { icon: MapPin, title: "Connaissance du terrain",      desc: "Plus de 13 ans d'interventions à travers tout le Maroc : plaines, zones montagneuses, terrains arides." },
  { icon: Award,  title: "Expérience éprouvée",          desc: "Plus de 1 000 missions réalisées. Taux de fiabilité terrain parmi les plus élevés du secteur au Maroc." },
  { icon: Shield, title: "Proximité client",             desc: "Un interlocuteur unique du premier contact jusqu'à la remise du rapport. Disponible, réactif, transparent." },
];

export default function About() {
  return (
    <section className="py-24 bg-petrol" id="apropos">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-water-light font-medium tracking-[0.15em] text-xs uppercase mb-4">À propos</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            L'expérience du terrain
          </h2>
          <p className="text-white/45 max-w-xl mx-auto">
            Derrière chaque rapport se trouvent deux hommes, leur matériel et des années d'expérience au contact du sous-sol marocain.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PILLARS.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="bg-white/6 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-water/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-water-light"/>
                </div>
                <h3 className="font-semibold text-white text-sm mb-2">{p.title}</h3>
                <p className="text-white/45 text-xs leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Article L'Économiste */}
        <div className="mt-14 bg-white/6 border border-white/10 rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <img
              src="/article-economiste.jpg"
              alt="Article L'Économiste — Allo Sources"
              className="w-full h-56 md:h-full object-cover object-top"
            />
            <div className="p-8 flex flex-col justify-center">
              <p className="text-water-light text-xs font-semibold tracking-widest uppercase mb-3">Presse</p>
              <p className="text-white/45 text-xs uppercase tracking-widest mb-2">L'Économiste — Juillet 2025</p>
              <h3 className="text-white text-xl font-display font-semibold leading-snug mb-4">
                « Quand les sourciers des temps modernes prennent le relais »
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                « Le taux de fiabilité de nos missions peut aller jusqu'à 85% » — Olivier Gendrot, cofondateur d'Allo Sources.
              </p>
              <a href="/article-economiste.jpg" download="article-economiste-allo-sources.jpg"
                className="inline-flex items-center gap-2 text-sm font-semibold text-water-light hover:text-white transition-colors w-fit">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                Télécharger l'article
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
