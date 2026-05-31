import { useState } from "react";
import { Menu, X, Droplets } from "lucide-react";
import type { Lang } from "../i18n";
import type { Translations } from "../i18n";

interface Props {
  tr: Translations;
  lang: Lang;
  setLang: (l: Lang) => void;
}

export default function Navbar({ tr, lang, setLang }: Props) {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#prestations", label: tr.nav.services },
    { href: "#references", label: tr.nav.references },
    { href: "#rapport", label: tr.nav.report },
    { href: "#contact", label: tr.nav.contact },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-display font-bold text-ocean text-xl">
          <Droplets className="w-6 h-6 text-ocean-light" />
          Allo Sources
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-ocean transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        {/* Lang toggle + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="px-3 py-1.5 rounded-lg border border-ocean/30 text-sm font-semibold text-ocean hover:bg-ocean-pale transition-colors"
          >
            {tr.nav.langLabel}
          </button>
          <a href="tel:+212662093629" className="btn-primary py-2 px-4 text-sm">
            +212 662-093629
          </a>
        </div>

        {/* Mobile: lang + burger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="px-2.5 py-1 rounded-lg border border-ocean/30 text-xs font-semibold text-ocean"
          >
            {tr.nav.langLabel}
          </button>
          <button onClick={() => setOpen(!open)} className="p-2 text-slate">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pb-4 space-y-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-medium text-slate hover:text-ocean border-b border-gray-50"
            >
              {l.label}
            </a>
          ))}
          <a href="tel:+212662093629" className="btn-primary w-full justify-center mt-2 text-sm">
            +212 662-093629
          </a>
        </div>
      )}
    </nav>
  );
}
