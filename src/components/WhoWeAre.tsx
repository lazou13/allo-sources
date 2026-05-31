import type { Translations } from "../i18n";

interface Props { tr: Translations }

export default function WhoWeAre({ tr }: Props) {
  const w = tr.whoWeAre;
  const stats = [
    { val: "2012",  label: w.statFounded },
    { val: "1000+", label: w.statMissions },
    { val: "85%",   label: w.statReliability },
  ];

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
                <p className="text-white font-semibold text-sm">{w.caption}</p>
                <p className="text-white/55 text-xs">{w.captionSub}</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p className="text-water font-medium tracking-[0.15em] text-xs uppercase mb-4">{w.label}</p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-petrol leading-tight mb-6">
              {w.title}
            </h2>
            <div className="space-y-4 text-petrol/65 leading-relaxed">
              <p>{w.p1}</p>
              <p>{w.p2}</p>
              <p>{w.p3}</p>
            </div>

            <p className="mt-5 text-sm font-semibold text-petrol border-l-2 border-water pl-3 py-0.5">{w.pioneer}</p>

            <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-xl flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
                  <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-amber-800 mb-0.5">{w.antiImitation}</p>
                <p className="text-xs text-amber-700/80 leading-relaxed">{w.antiImitationDesc}</p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map(s => (
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
