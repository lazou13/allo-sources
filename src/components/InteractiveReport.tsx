import { useState } from "react";
import { Phone, MessageCircle, FileText, Download, Maximize2, MapPin, BarChart3, CheckCircle2 } from "lucide-react";
import type { Translations } from "../i18n";

interface Props { tr: Translations; whatsappNumber: string; phone: string; }

function ScoreGauge({ score }: { score: number }) {
  const pct = score / 100;
  const r = 54;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - pct);
  const color = score >= 75 ? "#3a7d44" : score >= 50 ? "#f59e0b" : "#ef4444";

  return (
    <div className="flex flex-col items-center gap-2">
      <svg width="140" height="140" viewBox="0 0 140 140">
        <circle cx="70" cy="70" r={r} fill="none" stroke="#e5e7eb" strokeWidth="12"/>
        <circle cx="70" cy="70" r={r} fill="none" stroke={color} strokeWidth="12"
          strokeDasharray={circ} strokeDashoffset={offset}
          strokeLinecap="round" transform="rotate(-90 70 70)"
          style={{ transition: "stroke-dashoffset 1s ease" }}/>
        <text x="70" y="68" textAnchor="middle" className="font-bold" fill={color} fontSize="22" fontWeight="700">{score}</text>
        <text x="70" y="84" textAnchor="middle" fill="#6b7280" fontSize="10">/100</text>
      </svg>
    </div>
  );
}

export default function InteractiveReport({ tr, whatsappNumber, phone }: Props) {
  const [tab, setTab] = useState(0);
  const r = tr.report;
  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(tr.cta.whatsappMsg)}`;

  return (
    <section className="py-16 bg-gradient-to-b from-white to-ocean-pale">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="section-title">{r.title}</h2>
          <p className="section-subtitle">{r.subtitle}</p>
          <p className="text-xs text-slate/50 mt-2 italic">{r.disclaimer}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Tab bar */}
          <div className="flex overflow-x-auto border-b border-gray-100 bg-gray-50/50">
            {r.tabs.map((tab_label, i) => (
              <button key={tab_label}
                onClick={() => setTab(i)}
                className={`flex-shrink-0 px-4 md:px-6 py-3.5 text-sm font-medium transition-colors border-b-2 ${
                  tab === i
                    ? "border-ocean text-ocean bg-white"
                    : "border-transparent text-slate/60 hover:text-slate"
                }`}>
                {tab_label}
              </button>
            ))}
          </div>

          <div className="p-6 md:p-8">
            {/* Tab 0 — Summary */}
            {tab === 0 && (
              <div className="space-y-6">
                <h3 className="font-semibold text-ocean text-lg">{r.summary.title}</h3>
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div>
                    <p className="text-sm text-slate/60 mb-3">{r.summary.scoreLabel}</p>
                    <ScoreGauge score={82} />
                  </div>
                  <div className="space-y-2">
                    {r.summary.rows.map((row) => (
                      <div key={row.label} className="flex justify-between items-center py-2.5 border-b border-gray-50">
                        <span className="text-sm text-slate/70">{row.label}</span>
                        <span className="text-sm font-semibold text-ocean">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tab 1 — Map */}
            {tab === 1 && (
              <div className="space-y-5">
                <h3 className="font-semibold text-ocean text-lg">{r.map.title}</h3>
                {/* Fake satellite map */}
                <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-[#4a7c59] via-[#6b9e78] to-[#8ab48f] h-56 md:h-72">
                  <div className="absolute inset-0 opacity-20"
                    style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 20px,rgba(0,0,0,.1) 20px,rgba(0,0,0,.1) 21px), repeating-linear-gradient(90deg,transparent,transparent 20px,rgba(0,0,0,.1) 20px,rgba(0,0,0,.1) 21px)" }}/>
                  {/* North indicator */}
                  <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-xs font-bold text-ocean shadow">N</div>
                  {/* Recommended point */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg animate-pulse"/>
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-white text-xs font-semibold text-ocean px-2 py-0.5 rounded shadow whitespace-nowrap">
                      Point recommandé
                    </div>
                  </div>
                  {/* Zone circle */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-2 border-dashed border-white/60"/>
                  {/* Legend */}
                  <div className="absolute bottom-3 left-3 bg-white/90 rounded-lg p-2.5 text-xs space-y-1">
                    <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-red-500 flex-shrink-0"/><span>Point recommandé</span></div>
                    <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full border-2 border-ocean flex-shrink-0"/><span>Zone étudiée</span></div>
                  </div>
                  <p className="absolute bottom-3 right-3 text-white/60 text-xs italic">{r.map.note}</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-ocean-pale rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-1"><MapPin className="w-4 h-4 text-ocean"/><span className="text-sm font-medium text-ocean">{r.map.coordLabel}</span></div>
                    <p className="font-mono text-sm text-slate">{r.map.coords}</p>
                  </div>
                  <div className="bg-sage-pale rounded-xl p-4">
                    <p className="text-sm font-medium text-sage mb-1">{r.map.zoneLabel}</p>
                    <p className="text-sm text-slate">{r.map.zone}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2 — Analysis */}
            {tab === 2 && (
              <div className="space-y-5">
                <h3 className="font-semibold text-ocean text-lg">{r.analysis.title}</h3>
                <div className="space-y-3">
                  {r.analysis.rows.map((row) => {
                    const score = parseFloat(row.note);
                    const max = row.note.includes("/100") ? 100 : 10;
                    const pct = (score / max) * 100;
                    const color = pct >= 70 ? "bg-sage" : pct >= 50 ? "bg-yellow-400" : "bg-red-400";
                    return (
                      <div key={row.label} className="space-y-1.5">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate">{row.label}</span>
                          <span className="font-semibold text-ocean">{row.note}</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className={`h-full rounded-full ${color} transition-all duration-700`} style={{ width: `${pct}%` }}/>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Tab 3 — Recommendations */}
            {tab === 3 && (
              <div className="space-y-5">
                <h3 className="font-semibold text-ocean text-lg">{r.recommendations.title}</h3>
                <div className="space-y-3">
                  {r.recommendations.items.map((item) => (
                    <div key={item.label} className="flex gap-4 p-4 rounded-xl bg-ocean-pale/50 border border-ocean/10">
                      <span className="text-xl flex-shrink-0">{item.icon}</span>
                      <div>
                        <p className="text-sm font-semibold text-ocean">{item.label}</p>
                        <p className="text-sm text-slate/70 mt-0.5">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 4 — PDF Preview */}
            {tab === 4 && (
              <div className="space-y-6">
                <h3 className="font-semibold text-ocean text-lg">{r.pdf.title}</h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  {r.pdf.pages.map((pg) => (
                    <div key={pg.num} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow cursor-default">
                      <div className="bg-gradient-to-br from-ocean-pale to-white h-36 flex flex-col items-center justify-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-ocean/10 flex items-center justify-center">
                          <span className="font-bold text-ocean text-sm">{pg.num}</span>
                        </div>
                        <FileText className="w-8 h-8 text-ocean/40"/>
                      </div>
                      <div className="p-3">
                        <p className="font-semibold text-sm text-ocean">{pg.label}</p>
                        <p className="text-xs text-slate/60 mt-0.5">{pg.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate/40 italic text-center">{r.pdf.note}</p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <button className="btn-secondary gap-2 text-sm">
                    <Maximize2 className="w-4 h-4"/> {r.pdf.btnEnlarge}
                  </button>
                  <button className="btn-secondary gap-2 text-sm">
                    <Download className="w-4 h-4"/> {r.pdf.btnDownload}
                  </button>
                  <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(tr.cta.whatsappMsg)}`}
                    target="_blank" rel="noopener noreferrer" className="btn-whatsapp gap-2 text-sm">
                    <MessageCircle className="w-4 h-4"/> {r.pdf.btnRequest}
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Bottom CTA bar */}
          <div className="bg-ocean-pale/50 border-t border-ocean/10 px-6 py-4 flex flex-wrap gap-3 items-center justify-between">
            <p className="text-sm text-slate/70">Vous souhaitez une étude pour votre terrain ?</p>
            <div className="flex gap-2">
              <a href={`tel:${phone}`} className="btn-primary py-2 px-4 text-sm gap-1.5">
                <Phone className="w-4 h-4"/> Appeler
              </a>
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp py-2 px-4 text-sm gap-1.5">
                <MessageCircle className="w-4 h-4"/> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
