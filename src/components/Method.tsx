import { Search, MapPin, Wrench, BarChart2, FileText, Download } from "lucide-react";
import type { Translations } from "../i18n";

const ICONS = [Search, MapPin, Wrench, BarChart2, FileText, Download];

interface Props { tr: Translations }

export default function Method({ tr }: Props) {
  const m = tr.method;

  return (
    <section className="py-24 bg-white" id="methode">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-water font-medium tracking-[0.15em] text-xs uppercase mb-4">{m.label}</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-petrol mb-4">{m.title}</h2>
          <p className="text-petrol/55 max-w-xl mx-auto">{m.subtitle}</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-water/40 via-water/20 to-transparent -translate-x-1/2 hidden sm:block"/>

          <div className="space-y-0">
            {m.steps.map((step, i) => {
              const Icon = ICONS[i] ?? FileText;
              const isRight = i % 2 === 0;
              return (
                <div key={step.num} className={`relative flex items-start gap-6 sm:gap-0 ${isRight ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                  {/* Card */}
                  <div className={`flex-1 pb-10 ${isRight ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                    <div className="bg-white border border-sand/40 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-water/30 transition-all group inline-block w-full">
                      <div className={`flex items-center gap-3 mb-2 ${isRight ? "sm:flex-row-reverse" : ""}`}>
                        <div className="w-8 h-8 rounded-lg bg-water/10 flex items-center justify-center flex-shrink-0 group-hover:bg-water/20 transition-colors">
                          <Icon className="w-4 h-4 text-water"/>
                        </div>
                        <h3 className="font-semibold text-petrol text-sm">{step.title}</h3>
                      </div>
                      <p className="text-xs text-petrol/55 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  {/* Center dot desktop */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 top-5 z-10 w-10 h-10 rounded-full bg-white border-2 border-water items-center justify-center shadow-sm">
                    <span className="text-[10px] font-bold text-water">{step.num}</span>
                  </div>

                  {/* Mobile left number */}
                  <div className="flex-shrink-0 sm:hidden w-10 h-10 rounded-full bg-water/10 border border-water/30 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-water">{step.num}</span>
                  </div>

                  {/* Spacer opposite side */}
                  <div className="hidden sm:block flex-1"/>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
