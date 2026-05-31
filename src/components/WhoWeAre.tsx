export default function WhoWeAre() {
  return (
    <section className="py-24 bg-offwhite" id="qui-sommes-nous">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-water/10 to-sand/20 rounded-2xl"/>
              <img
                src="/team-olivier-leo.jpg"
                alt="Olivier et Léo Gendrot — Allo Sources"
                className="relative w-full rounded-xl object-cover object-top shadow-lg"
                style={{ aspectRatio: "4/3" }}
              />
              <div className="absolute bottom-4 left-4 bg-petrol/90 backdrop-blur-sm rounded-lg px-4 py-2.5">
                <p className="text-white font-semibold text-sm">Olivier & Léo Gendrot</p>
                <p className="text-white/55 text-xs">Fondateurs — Allo Sources</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p className="text-water font-medium tracking-[0.15em] text-xs uppercase mb-4">Qui sommes-nous</p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-petrol leading-tight mb-6">
              Une entreprise familiale au service de vos projets depuis 2012
            </h2>
            <div className="space-y-4 text-petrol/65 leading-relaxed">
              <p>
                Allo Sources est une entreprise familiale basée à Marrakech, spécialisée dans la recherche d'eau
                souterraine et les études préalables aux forages.
              </p>
              <p>
                Depuis plus d'une décennie, <strong className="text-petrol font-semibold">Olivier et Léo Gendrot</strong> accompagnent
                agriculteurs, investisseurs, collectivités, hôtels et entreprises dans leurs projets liés à l'eau.
              </p>
              <p>
                Leur approche repose sur l'expérience terrain, la prospection géophysique et l'analyse des
                caractéristiques du sous-sol — afin d'aider leurs clients à prendre des décisions plus éclairées
                avant d'engager des travaux de forage.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { val: "2012", label: "Fondée" },
                { val: "1000+", label: "Missions" },
                { val: "85%", label: "Fiabilité" },
              ].map(s => (
                <div key={s.label} className="text-center bg-white rounded-xl p-4 shadow-sm border border-sand/30">
                  <p className="text-2xl font-bold text-water">{s.val}</p>
                  <p className="text-petrol/50 text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
