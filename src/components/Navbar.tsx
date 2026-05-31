import { useState } from "react";
import { Menu, X, Droplets, Phone } from "lucide-react";
import type { Lang, Translations } from "../i18n";

interface Props { tr: Translations; lang: Lang; setLang: (l: Lang) => void; }

export default function Navbar({ tr, lang, setLang }: Props) {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#prestations", label: tr.nav.services },
    { href: "#references", label: tr.nav.references },
    { href: "#rapport", label: tr.nav.report },
    { href: "#contact", label: tr.nav.contact },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-navy/98 backdrop-blur border-b border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 font-display font-bold text-white text-xl">
          <Droplets className="w-5 h-5 text-gold-light"/>
          Allo Sources
        </a>

        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-white/70">
          {links.map(l => (
            <a key={l.href} href={l.href} className="hover:text-white transition-colors">{l.label}</a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="px-3 py-1.5 rounded-md border border-white/20 text-sm font-semibold text-white/70 hover:text-white hover:border-white/40 transition-colors">
            {tr.nav.langLabel}
          </button>
          <a href="tel:+212662093629" className="btn-gold py-2 px-4 text-sm">
            <Phone className="w-4 h-4"/>
            +212 662-093629
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="px-2.5 py-1 rounded-md border border-white/20 text-xs font-semibold text-white/70">
            {tr.nav.langLabel}
          </button>
          <a href="tel:+212662093629" className="btn-gold py-2 px-3 text-xs gap-1">
            <Phone className="w-3.5 h-3.5"/>
          </a>
          <button onClick={() => setOpen(!open)} className="p-2 text-white/70 hover:text-white">
            {open ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-navy border-t border-white/10 px-4 pb-4 space-y-1">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-white/70 hover:text-white border-b border-white/8">
              {l.label}
            </a>
          ))}
          <a href="tel:+212662093629" className="btn-gold w-full justify-center mt-3 text-sm">
            <Phone className="w-4 h-4"/> +212 662-093629
          </a>
        </div>
      )}
    </nav>
  );
}
