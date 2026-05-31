import { useState } from "react";
import type { Lang } from "./i18n";
import { t } from "./i18n";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import References from "./components/References";
import MoroccoMap from "./components/MoroccoMap";
import InteractiveReport from "./components/InteractiveReport";
import Method from "./components/Method";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Disclaimer from "./components/Disclaimer";
import FAQ from "./components/FAQ";
import CTAFinal from "./components/CTAFinal";
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
      <References tr={tr}/>
      <MoroccoMap tr={tr}/>
      <section id="rapport">
        <InteractiveReport tr={tr} whatsappNumber={WHATSAPP} phone={PHONE}/>
      </section>
      <Method tr={tr}/>
      <Services tr={tr}/>
      <Gallery tr={tr}/>
      <FAQ tr={tr} lang={lang}/>
      <Disclaimer tr={tr}/>
      <CTAFinal tr={tr} whatsappNumber={WHATSAPP} phone={PHONE}/>
      <Footer tr={tr}/>
      <StickyButtons tr={tr} whatsappNumber={WHATSAPP} phone={PHONE}/>
    </div>
  );
}
