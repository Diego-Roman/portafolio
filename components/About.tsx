import { CheckCircle2 } from "lucide-react";

const HIGHLIGHTS = [
  "Soluciones End-to-End: desde el wireframe hasta el deploy en producción",
  "Interfaces de usuario intuitivas y atractivas con React y Next.js",
  "Arquitecturas backend escalables y mantenibles en Python",
  "Automatización de procesos complejos con IA y herramientas no-code",
];

const PILLARS = [
  { emoji: "🎨", title: "Frontend",           desc: "React, Next.js, Tailwind — interfaces que convierten visitantes en clientes" },
  { emoji: "⚙️", title: "Backend & APIs",     desc: "Python, arquitecturas REST robustas, seguras y fáciles de escalar"          },
  { emoji: "🤖", title: "IA & Automatización",desc: "n8n, Make.com, OpenAI, Claude — flujos inteligentes que trabajan solos"     },
  { emoji: "☁️", title: "Infraestructura",    desc: "Vercel, Railway, Docker — deploy confiable y pipelines CI/CD"              },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <div>
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Sobre Mí
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-6">
              Soluciones digitales{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                de extremo a extremo
              </span>
            </h2>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              Mi enfoque no está en la teoría, sino en la{" "}
              <span className="text-white font-medium">ejecución rápida y eficiente</span>. Me
              especializo en construir soluciones tecnológicas modernas: desde{" "}
              <span className="text-white font-medium">
                asistentes de IA conversacionales integrados en WhatsApp
              </span>
              , hasta{" "}
              <span className="text-white font-medium">
                plataformas SaaS y automatizaciones de flujos de trabajo completos
              </span>
              . Utilizo herramientas como Next.js, Python, Supabase y n8n para entregar{" "}
              <span className="text-white font-medium">
                productos escalables que resuelven problemas reales de negocio.
              </span>
            </p>

            <ul className="space-y-3">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Visual card */}
          <div>
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-8 overflow-hidden">
              {/* Inner glow */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />

              <div className="relative space-y-5">
                {PILLARS.map(({ emoji, title, desc }) => (
                  <div
                    key={title}
                    className="group flex items-start gap-4 p-3 rounded-xl hover:bg-slate-800/40 transition-colors duration-200 cursor-default"
                  >
                    <div className="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700 group-hover:border-blue-500/40 flex items-center justify-center text-xl flex-shrink-0 transition-colors duration-200">
                      {emoji}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm mb-0.5">{title}</div>
                      <div className="text-slate-500 text-sm leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
