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
import Gallery from "./components/Gallery";
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
      <Hero tr={tr} lang={lang}/>
      <WhoWeAre tr={tr}/>
      <Method tr={tr}/>
      <section id="rapport">
        <InteractiveReport tr={tr} whatsappNumber={WHATSAPP} phone={PHONE}/>
      </section>
      <MoroccoMap tr={tr}/>
      <About tr={tr}/>
      <Gallery tr={tr} lang={lang}/>
      <References tr={tr}/>
      <Contact tr={tr}/>
      <Footer tr={tr}/>
      <StickyButtons tr={tr} whatsappNumber={WHATSAPP} phone={PHONE}/>
    </div>
  );
}
