import { Bot, BarChart3, ExternalLink } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Project {
  icon: LucideIcon;
  gradient: string;
  badge: string;
  badgeStyle: string;
  title: string;
  problem: string;
  solution: string;
  highlights: string[];
  tags: string[];
}

const PROJECTS: Project[] = [
  {
    icon: Bot,
    gradient: "from-blue-600 to-cyan-500",
    badge: "IA + Automatización",
    badgeStyle: "bg-blue-500/10 text-blue-400 border-blue-500/25",
    title: "Asistente de Logística con IA",
    problem:
      "Las empresas de logística perdían horas rastreando envíos manualmente y respondiendo consultas repetitivas a través de múltiples canales dispersos.",
    solution:
      "Sistema automatizado de rastreo de envíos con integración de flujos en WhatsApp y correos electrónicos, complementado con un panel de control web en tiempo real que centraliza toda la operación.",
    highlights: [
      "Reducción del 80% en consultas manuales",
      "Notificaciones automáticas multicanal en tiempo real",
      "Panel de control centralizado con métricas clave",
    ],
    tags: ["n8n", "WhatsApp API", "Next.js", "Python", "Supabase", "OpenAI"],
  },
  {
    icon: BarChart3,
    gradient: "from-violet-600 to-pink-500",
    badge: "SaaS · CRM / ERP",
    badgeStyle: "bg-violet-500/10 text-violet-400 border-violet-500/25",
    title: "FlowSales AI",
    problem:
      "PYMEs sin acceso a herramientas CRM/ERP integradas, dependiendo de hojas de cálculo y procesos fragmentados para gestionar todo su ciclo de ventas.",
    solution:
      "Plataforma SaaS tipo CRM/ERP con interfaz web fluida y responsiva, bots de Telegram para gestión mobile en tiempo real y base de datos robusta en Supabase con lógica de negocio en Python.",
    highlights: [
      "Pipeline de ventas visual drag & drop",
      "Automatización de seguimientos y recordatorios",
      "Reportes y analíticas en tiempo real",
    ],
    tags: ["Next.js", "Supabase", "Telegram Bot", "Python", "TypeScript", "Railway"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      {/* Subtle bg accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/25 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Casos de Estudio
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Proyectos que generan{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              resultados reales
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base">
            Cada proyecto resuelve un problema concreto con tecnología moderna y un
            diseño orientado al impacto.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {PROJECTS.map(
            ({
              icon: Icon,
              gradient,
              badge,
              badgeStyle,
              title,
              problem,
              solution,
              highlights,
              tags,
            }) => (
              <div
                key={title}
                className="group relative rounded-2xl border border-slate-800 bg-slate-900/50 overflow-hidden hover:border-slate-700 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40 transition-all duration-300"
              >
                {/* Top color bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${gradient}`} />

                <div className="p-7 sm:p-8">
                  {/* Header row */}
                  <div className="flex items-start justify-between mb-6 gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg flex-shrink-0`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="min-w-0">
                        <span
                          className={`inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full border ${badgeStyle} mb-1`}
                        >
                          {badge}
                        </span>
                        <h3 className="text-white font-bold text-lg leading-tight">{title}</h3>
                      </div>
                    </div>
                    <button
                      className="w-8 h-8 rounded-lg border border-slate-700 flex items-center justify-center text-slate-500 hover:text-white hover:border-slate-500 transition-colors flex-shrink-0 mt-0.5"
                      aria-label="Ver proyecto"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Problem / Solution */}
                  <div className="space-y-3 mb-6">
                    <div className="rounded-xl bg-rose-500/5 border border-rose-500/15 p-4">
                      <div className="text-xs font-bold text-rose-400 uppercase tracking-widest mb-1.5">
                        Problema
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">{problem}</p>
                    </div>
                    <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/15 p-4">
                      <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-1.5">
                        Solución
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">{solution}</p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-6">
                    {highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2.5 text-slate-300 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/70">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-800 text-slate-400 border border-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
