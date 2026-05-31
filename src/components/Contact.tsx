import { useState } from "react";
import { Phone, MessageCircle, Mail, MapPin, Send } from "lucide-react";
import type { Translations } from "../i18n";

const PHONE = "+212662093629";
const WHATSAPP = "212662093629";
const EMAIL = "allosources@gmail.com";

interface Props { tr: Translations }

export default function Contact({ tr }: Props) {
  const c = tr.contact;
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const waUrl = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(tr.cta.whatsappMsg)}`;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = `${c.name}: ${form.name}%0A${c.phone}: ${form.phone}%0AEmail: ${form.email}%0A${c.message}: ${form.message}`;
    window.location.href = `mailto:${EMAIL}?subject=${c.title} — ${form.name}&body=${body}`;
    setSent(true);
  }

  return (
    <section className="py-24 bg-offwhite" id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-water font-medium tracking-[0.15em] text-xs uppercase mb-4">{c.label}</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-petrol mb-4">{c.title}</h2>
          <p className="text-petrol/55 max-w-lg mx-auto">{c.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-sm border border-sand/30">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-10 text-center">
                <div className="w-14 h-14 rounded-full bg-water/10 flex items-center justify-center">
                  <Send className="w-6 h-6 text-water"/>
                </div>
                <p className="font-semibold text-petrol text-lg">{c.sentTitle}</p>
                <p className="text-petrol/55 text-sm">{c.sentDesc}</p>
                <button onClick={() => setSent(false)} className="text-xs text-water hover:underline mt-2">
                  {c.sentBack}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-petrol/70 mb-1.5">{c.name}</label>
                    <input
                      type="text" required placeholder={c.namePlaceholder}
                      value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className="w-full border border-sand/50 rounded-lg px-3.5 py-2.5 text-sm text-petrol placeholder-petrol/30 focus:outline-none focus:border-water/60 focus:ring-1 focus:ring-water/20 transition-colors bg-offwhite"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-petrol/70 mb-1.5">{c.phone}</label>
                    <input
                      type="tel" placeholder={c.phonePlaceholder}
                      value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      className="w-full border border-sand/50 rounded-lg px-3.5 py-2.5 text-sm text-petrol placeholder-petrol/30 focus:outline-none focus:border-water/60 focus:ring-1 focus:ring-water/20 transition-colors bg-offwhite"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-petrol/70 mb-1.5">{c.email}</label>
                  <input
                    type="email" placeholder={c.emailPlaceholder}
                    value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className="w-full border border-sand/50 rounded-lg px-3.5 py-2.5 text-sm text-petrol placeholder-petrol/30 focus:outline-none focus:border-water/60 focus:ring-1 focus:ring-water/20 transition-colors bg-offwhite"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-petrol/70 mb-1.5">{c.message}</label>
                  <textarea
                    rows={4} required placeholder={c.messagePlaceholder}
                    value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="w-full border border-sand/50 rounded-lg px-3.5 py-2.5 text-sm text-petrol placeholder-petrol/30 focus:outline-none focus:border-water/60 focus:ring-1 focus:ring-water/20 transition-colors bg-offwhite resize-none"
                  />
                </div>
                <button type="submit"
                  className="w-full bg-water text-white font-semibold py-3 rounded-lg hover:bg-water-dark transition-colors flex items-center justify-center gap-2 text-sm">
                  <Send className="w-4 h-4"/> {c.submit}
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <a href={`tel:${PHONE}`}
              className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm border border-sand/30 hover:border-water/30 transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-petrol flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-white"/>
              </div>
              <div>
                <p className="text-xs text-petrol/45 mb-0.5">{c.phoneLabel}</p>
                <p className="font-semibold text-petrol text-sm group-hover:text-water transition-colors">{PHONE}</p>
              </div>
            </a>

            <a href={waUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#25d366]/5 border border-[#25d366]/20 rounded-xl p-5 hover:border-[#25d366]/40 transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-[#25d366] flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-white"/>
              </div>
              <div>
                <p className="text-xs text-petrol/45 mb-0.5">WhatsApp</p>
                <p className="font-semibold text-petrol text-sm">{c.whatsappLabel}</p>
              </div>
            </a>

            <a href={`mailto:${EMAIL}`}
              className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm border border-sand/30 hover:border-water/30 transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-water/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-water"/>
              </div>
              <div>
                <p className="text-xs text-petrol/45 mb-0.5">{c.emailLabel}</p>
                <p className="font-semibold text-petrol text-sm group-hover:text-water transition-colors">{EMAIL}</p>
              </div>
            </a>

            <div className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-sand/30">
              <div className="w-10 h-10 rounded-lg bg-sand/30 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-sand-dark"/>
              </div>
              <div>
                <p className="text-xs text-petrol/45 mb-0.5">{c.locationLabel}</p>
                <p className="font-semibold text-petrol text-sm">{c.locationCity}</p>
                <p className="text-petrol/45 text-xs mt-0.5">{c.locationSub}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
