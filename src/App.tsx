import { useState } from "react";
import type { Lang } from "./i18n";
import { t } from "./i18n";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import Method from "./components/Method";
import InteractiveReport from "./components/InteractiveReport";
import MoroccoMap from "./components/MoroccoMap";
import About from "./components/About";
import References from "./components/References";
import Contact from "./components/Contact";
import StickyButtons from "./components/StickyButtons";
import Footer from "./components/Footer";

const PHONE = "+212662093629";
const WHATSAPP = "212662093629";

export default function App() {
  const [lang, setLang] = useState<Lang>("fr");
  const tr = t[lang];

  return (
    <div className="min-h-screen bg-white">
      <Navbar tr={tr} lang={lang} setLang={setLang}/>
      {/* 1 — Hero */}
      <Hero tr={tr} lang={lang}/>
      {/* 2 — Qui sommes-nous */}
      <WhoWeAre/>
      {/* 3 — Méthodologie */}
      <Method tr={tr}/>
      {/* 4 — Rapport interactif */}
      <section id="rapport">
        <InteractiveReport tr={tr} whatsappNumber={WHATSAPP} phone={PHONE}/>
      </section>
      {/* 5 — Carte interactive */}
      <MoroccoMap tr={tr}/>
      {/* 6 — À propos */}
      <About/>
      {/* 7 — Références clients */}
      <References tr={tr}/>
      {/* 8 — Contact */}
      <Contact/>
      {/* 9 — Footer */}
      <Footer/>
      <StickyButtons tr={tr} whatsappNumber={WHATSAPP} phone={PHONE}/>
    </div>
  );
}
