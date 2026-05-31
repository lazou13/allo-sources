import { Phone, Mail, MapPin, Globe, Facebook, ExternalLink } from "lucide-react";

const PHONE = "+212662093629";
const EMAIL = "allosources@gmail.com";

export default function Footer() {
  return (
    <footer className="bg-petrol pb-24 md:pb-0" id="footer">
      {/* Gold top accent */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-water/60 to-transparent"/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-14 pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Col 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded bg-water/25 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-water-light" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                </svg>
              </div>
              <span className="font-display font-bold text-lg text-white tracking-wide">ALLO SOURCES</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-5">
              Étude hydrogéologique et recherche d'eau souterraine au Maroc depuis 2012.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/share/1F76RqBZ3n/" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center hover:bg-white/15 transition-colors">
                <Facebook className="w-3.5 h-3.5 text-white/60"/>
              </a>
              <a href="https://allo-sources.ma" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center hover:bg-white/15 transition-colors">
                <Globe className="w-3.5 h-3.5 text-white/60"/>
              </a>
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-5">Services</h4>
            <ul className="space-y-2.5 text-sm text-white/50">
              {[
                "Prospection géophysique",
                "Étude hydrogéologique",
                "Tomographie électrique",
                "Rapport de forage",
                "Accompagnement avant forage",
              ].map(s => (
                <li key={s} className="hover:text-white/80 transition-colors cursor-default">{s}</li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-5">Navigation</h4>
            <ul className="space-y-2.5 text-sm text-white/50">
              {[
                { label: "Qui sommes-nous", href: "#qui-sommes-nous" },
                { label: "Méthodologie",    href: "#methode" },
                { label: "Rapport",         href: "#rapport" },
                { label: "Carte Maroc",     href: "#carte" },
                { label: "Références",      href: "#references" },
                { label: "Contact",         href: "#contact" },
              ].map(l => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-white/80 transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li>
                <a href={`tel:${PHONE}`} className="flex items-start gap-2.5 hover:text-white/80 transition-colors">
                  <Phone className="w-4 h-4 text-water/60 flex-shrink-0 mt-0.5"/>
                  {PHONE}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-start gap-2.5 hover:text-white/80 transition-colors">
                  <Mail className="w-4 h-4 text-water/60 flex-shrink-0 mt-0.5"/>
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-water/60 flex-shrink-0 mt-0.5"/>
                <span>Marrakech, Maroc<br/><span className="text-white/30 text-xs">Interventions dans tout le Royaume</span></span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/25">
          <p>© {new Date().getFullYear()} Allo Sources — Tous droits réservés</p>
          <p className="text-center">
            Les estimations présentées réduisent les risques avant forage sans constituer une garantie absolue de résultat.
          </p>
        </div>
      </div>
    </footer>
  );
}
