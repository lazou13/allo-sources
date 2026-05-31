import { useState } from "react";
import type { Lang } from "./i18n";
import { t } from "./i18n";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Services from "./components/Services";
import InteractiveReport from "./components/InteractiveReport";
import MoroccoMap from "./components/MoroccoMap";
import References from "./components/References";
import Method from "./components/Method";
import Gallery from "./components/Gallery";
import Disclaimer from "./components/Disclaimer";
import CTAFinal from "./components/CTAFinal";
import StickyButtons from "./components/StickyButtons";
import Footer from "./components/Footer";

export default function App() {
  const [lang, setLang] = useState<Lang>("fr");
  const tr = t[lang];

  const phone = "+212662093629";
  const whatsappNumber = "212662093629";

  return (
    <div className="min-h-screen bg-white">
      <Navbar tr={tr} lang={lang} setLang={setLang} />
      <Hero tr={tr} whatsappNumber={whatsappNumber} phone={phone} />
      <Problem tr={tr} />
      <Services tr={tr} />
      <section id="rapport">
        <InteractiveReport tr={tr} whatsappNumber={whatsappNumber} phone={phone} />
      </section>
      <MoroccoMap tr={tr} />
      <References tr={tr} />
      <Method tr={tr} />
      <Gallery tr={tr} />
      <Disclaimer tr={tr} />
      <CTAFinal tr={tr} whatsappNumber={whatsappNumber} phone={phone} />
      <Footer tr={tr} />
      <StickyButtons tr={tr} whatsappNumber={whatsappNumber} phone={phone} />
    </div>
  );
}
