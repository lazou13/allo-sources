import { Droplets, Phone, Globe, Facebook, MapPin } from "lucide-react";
import type { Translations } from "../i18n";

export default function Footer({ tr }: { tr: Translations }) {
  const f = tr.footer;
  return (
    <footer className="bg-navy/98 text-white py-12 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 font-display font-bold text-xl mb-3">
              <Droplets className="w-5 h-5 text-gold-light"/>
              Allo Sources
            </div>
            <p className="text-white/50 text-sm leading-relaxed">{f.tagline}</p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/35 mb-4">Contact</h4>
            <div className="space-y-2.5 text-sm text-white/60">
              <a href="tel:+212662093629" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-gold-light flex-shrink-0"/>{f.phone}
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold-light flex-shrink-0"/>{f.address}
              </div>
              <a href="https://allo-sources.ma" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <Globe className="w-4 h-4 text-gold-light flex-shrink-0"/>{f.site}
              </a>
              <a href="https://www.facebook.com/share/1F76RqBZ3n/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <Facebook className="w-4 h-4 text-gold-light flex-shrink-0"/>{f.facebook}
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/35 mb-4">Mention légale</h4>
            <p className="text-xs text-white/35 leading-relaxed">
              Les données présentées sont des estimations issues de l'étude terrain. Elles permettent de réduire les risques avant forage, sans constituer une garantie absolue de résultat.
            </p>
          </div>
        </div>
        <div className="border-t border-white/8 pt-6 text-center text-xs text-white/25">{f.rights}</div>
      </div>
    </footer>
  );
}
