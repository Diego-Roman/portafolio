import { Bot, BarChart3, Globe, ExternalLink } from "lucide-react";
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
  link?: string;
}

const PROJECTS: Project[] = [
  {
    icon: Bot,
    gradient: "from-violet-600 to-cyan-500",
    badge: "IA + Automatización",
    badgeStyle: "bg-violet-500/10 text-violet-400 border-violet-500/25",
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
    gradient: "from-fuchsia-600 to-pink-500",
    badge: "SaaS · CRM / ERP",
    badgeStyle: "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/25",
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
  {
    icon: Globe,
    gradient: "from-blue-500 to-sky-500",
    badge: "WordPress · Web Content",
    badgeStyle: "bg-blue-500/10 text-blue-400 border-blue-500/25",
    title: "Portal de Ayuda y Noticias — Omega Cargo Express",
    problem:
      "Omega Cargo Express necesitaba una sección de ayuda centralizada para reducir consultas repetitivas sobre procesos de envío, normativas aduaneras y novedades de su servicio internacional.",
    solution:
      "Desarrollo y estructuración de la sección de blogs, noticias y guías de envío utilizando WordPress. Arquitectura de contenido SEO-friendly con categorías y etiquetas optimizadas para posicionamiento orgánico.",
    highlights: [
      "Guías de envío internacionales claras y accesibles",
      "Blog con noticias y actualizaciones del servicio",
      "Arquitectura SEO optimizada para búsqueda orgánica",
    ],
    tags: ["WordPress", "SEO", "Web Content", "Logística"],
    link: "https://omegacargoexpress.ca/ayuda/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      {/* Subtle bg accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Casos de Estudio
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Proyectos que generan{" "}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              resultados reales
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base">
            Cada proyecto resuelve un problema concreto con tecnología moderna y un
            diseño orientado al impacto.
          </p>
        </div>

        {/* Cards — 1 col mobile / 2 col md / 3 col xl */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
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
              link,
            }) => (
              <div
                key={title}
                className="group relative rounded-2xl border border-violet-900/40 bg-slate-900/50 overflow-hidden hover:border-violet-700/60 hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-950/40 transition-all duration-300"
              >
                {/* Top color bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${gradient}`} />

                {/* Corner accents */}
                <div className="absolute top-1 left-0 w-5 h-5 border-l-2 border-violet-500/30 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-violet-500/20 rounded-br-2xl pointer-events-none" />

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

                    {/* ExternalLink — real href if project has a link */}
                    {link ? (
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg border border-violet-900/50 flex items-center justify-center text-slate-500 hover:text-violet-400 hover:border-violet-700 transition-colors flex-shrink-0 mt-0.5"
                        aria-label="Ver proyecto"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <div
                        className="w-8 h-8 rounded-lg border border-violet-900/30 flex items-center justify-center text-slate-700 flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    )}
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
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-violet-900/30">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-[#0f0d1e] text-slate-400 border border-violet-900/50 group-hover:border-violet-700/60 transition-colors duration-200"
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
