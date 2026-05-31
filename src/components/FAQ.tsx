import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import type { Translations } from "../i18n";

const FAQ_DATA = {
  fr: [
    {
      q: "Quelle est la différence entre un sourcier et une étude géophysique ?",
      a: "Un sourcier utilise des méthodes empiriques (baguettes, pendules) sans base scientifique vérifiable. Allo Sources utilise des équipements géophysiques professionnels — résistivité électrique, sondages électriques — qui mesurent objectivement les propriétés du sol. Les résultats sont documentés, cartographiés et justifiés.",
    },
    {
      q: "L'eau est-elle garantie après l'étude ?",
      a: "Non, et toute promesse contraire serait malhonnête. La géophysique réduit significativement les risques et oriente le point de forage de manière scientifique. Le taux de fiabilité de nos missions peut atteindre 85%. Mais la présence d'eau dépend aussi de la méthode de forage, du tubage, du matériel et des conditions géologiques locales.",
    },
    {
      q: "Dans quelles régions du Maroc intervenez-vous ?",
      a: "Nous intervenons dans tout le Maroc : Marrakech, Agadir, Casablanca, Benguerir, Khouribga, Meknès, Beni Mellal, Ouarzazate, Safi, Essaouira, et bien d'autres régions. Contactez-nous avec la localisation de votre terrain pour confirmer.",
    },
    {
      q: "Combien coûte une étude de terrain ?",
      a: "Le tarif dépend de la superficie du terrain, de la distance d'intervention et du type de mission (résidentiel, agricole, industriel). Pour une hectare par exemple, le tarif est différent que pour 300 hectares. Contactez-nous par WhatsApp ou téléphone avec la localisation et la superficie pour obtenir un devis.",
    },
    {
      q: "Que contient le rapport remis après l'intervention ?",
      a: "Le rapport inclut : la localisation GPS du point de forage recommandé, le potentiel hydrogéologique estimé, la profondeur cible, le débit estimé, les risques identifiés, les recommandations avant forage et les précautions à prendre. Consultez notre exemple de rapport interactif sur cette page.",
    },
    {
      q: "Combien de temps dure une intervention sur site ?",
      a: "Une intervention terrain dure en général entre 2 et 6 heures selon la superficie à étudier. Pour un grand domaine agricole ou une zone industrielle, plusieurs journées peuvent être nécessaires.",
    },
    {
      q: "Peut-on vérifier un puits ou forage existant non productif ?",
      a: "Oui, c'est l'une de nos prestations. Nous pouvons diagnostiquer un puits ou forage existant, identifier pourquoi il est peu ou pas productif, et recommander des solutions : approfondissement, nouveau point de forage, ou autre approche.",
    },
    {
      q: "Travaillez-vous avec les foreurs, ou séparément ?",
      a: "Nous travaillons en amont du foreur, de manière indépendante. Notre mission est d'identifier le meilleur emplacement avant forage. Nous pouvons ensuite rester disponibles pour répondre aux questions du foreur, mais nous ne sommes pas liés à une entreprise de forage particulière.",
    },
  ],
  en: [
    {
      q: "What is the difference between a water diviner and a geophysical study?",
      a: "A water diviner uses empirical methods (rods, pendulums) without verifiable scientific basis. Allo Sources uses professional geophysical equipment — electrical resistivity, electrical soundings — that objectively measures soil properties. Results are documented, mapped and justified.",
    },
    {
      q: "Is water guaranteed after the study?",
      a: "No, and any promise to the contrary would be dishonest. Geophysics significantly reduces risks and scientifically guides the drilling point. Our mission reliability rate can reach 85%. But the presence of water also depends on the drilling method, casing, equipment and local geological conditions.",
    },
    {
      q: "Which regions of Morocco do you cover?",
      a: "We operate across Morocco: Marrakech, Agadir, Casablanca, Benguerir, Khouribga, Meknès, Beni Mellal, Ouarzazate, Safi, Essaouira, and many other regions. Contact us with your land location to confirm.",
    },
    {
      q: "How much does a field study cost?",
      a: "The price depends on the land area, travel distance and type of mission (residential, agricultural, industrial). Contact us by WhatsApp or phone with the location and area for a quote.",
    },
    {
      q: "What does the report include?",
      a: "The report includes: GPS location of the recommended drilling point, estimated hydrogeological potential, target depth, estimated flow rate, identified risks, pre-drilling recommendations and precautions. View our interactive sample report on this page.",
    },
    {
      q: "How long does an on-site intervention take?",
      a: "A field intervention typically takes 2 to 6 hours depending on the area to be studied. For a large agricultural estate or industrial zone, several days may be required.",
    },
    {
      q: "Can you assess an existing unproductive well or borehole?",
      a: "Yes, this is one of our services. We can diagnose an existing well or borehole, identify why it is unproductive, and recommend solutions.",
    },
    {
      q: "Do you work with drillers, or separately?",
      a: "We work upstream of the driller, independently. Our mission is to identify the best location before drilling. We are not affiliated with any particular drilling company.",
    },
  ],
};

interface Props { tr: Translations; lang?: "fr" | "en"; }

export default function FAQ({ tr, lang = "fr" }: Props) {
  const [open, setOpen] = useState<number | null>(null);
  const items = FAQ_DATA[lang] ?? FAQ_DATA.fr;

  return (
    <section className="py-20 bg-stone" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="section-label mb-3">FAQ</p>
          <h2 className="section-title mb-4">
            {lang === "en" ? "Frequently asked questions" : "Questions fréquentes"}
          </h2>
          <p className="text-navy/60">
            {lang === "en"
              ? "Everything you need to know before a field study."
              : "Tout ce qu'il faut savoir avant une étude de terrain."}
          </p>
        </div>

        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={i} className={`card-premium overflow-hidden transition-all ${open === i ? "ring-1 ring-navy/20" : ""}`}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left">
                <span className="font-semibold text-navy leading-snug pr-2">{item.q}</span>
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-navy-pale flex items-center justify-center">
                  {open === i
                    ? <Minus className="w-4 h-4 text-navy"/>
                    : <Plus className="w-4 h-4 text-navy"/>}
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-5">
                  <div className="pt-3 border-t border-gray-100">
                    <p className="text-navy/65 leading-relaxed">{item.a}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
