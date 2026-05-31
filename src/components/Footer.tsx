import { Droplets, Phone, Globe, Facebook, MapPin } from "lucide-react";
import type { Translations } from "../i18n";

export default function Footer({ tr }: { tr: Translations }) {
  const f = tr.footer;
  return (
    <footer className="bg-slate text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-display font-bold text-xl mb-3">
              <Droplets className="w-5 h-5 text-blue-400"/>
              Allo Sources
            </div>
            <p className="text-white/60 text-sm leading-relaxed">{f.tagline}</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-white/50">Contact</h4>
            <div className="space-y-2 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400"/>
                <a href="tel:+212662093629" className="hover:text-white transition-colors">{f.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400"/>
                <span>{f.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-400"/>
                <a href="https://allo-sources.ma" target="_blank" rel="noopener noreferrer"
                  className="hover:text-white transition-colors">{f.site}</a>
              </div>
              <div className="flex items-center gap-2">
                <Facebook className="w-4 h-4 text-blue-400"/>
                <a href="https://www.facebook.com/share/1F76RqBZ3n/" target="_blank" rel="noopener noreferrer"
                  className="hover:text-white transition-colors">{f.facebook}</a>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-white/50">Mention légale</h4>
            <p className="text-xs text-white/40 leading-relaxed">
              Les données présentées sont des estimations issues de l'étude terrain. Elles permettent de réduire les risques avant forage, sans constituer une garantie absolue de résultat.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs text-white/30">
          {f.rights}
        </div>
      </div>
    </footer>
  );
}
