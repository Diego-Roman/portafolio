import { Code2, Server, Zap, Brain, Cloud, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Category {
  icon: LucideIcon;
  gradient: string;
  glowColor: string;
  title: string;
  skills: string[];
}

const CATEGORIES: Category[] = [
  {
    icon: Code2,
    gradient: "from-violet-500 to-indigo-600",
    glowColor: "group-hover:shadow-violet-900/30",
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "JavaScript"],
  },
  {
    icon: Server,
    gradient: "from-emerald-500 to-teal-500",
    glowColor: "group-hover:shadow-emerald-900/30",
    title: "Backend & BD",
    skills: ["Python", "FastAPI", "Supabase", "PostgreSQL", "Neon", "Render", "REST APIs"],
  },
  {
    icon: Zap,
    gradient: "from-amber-500 to-orange-500",
    glowColor: "group-hover:shadow-amber-900/30",
    title: "Automatización",
    skills: ["n8n", "Make.com", "Webhooks", "Workflows", "Zapier"],
  },
  {
    icon: Brain,
    gradient: "from-fuchsia-500 to-pink-500",
    glowColor: "group-hover:shadow-fuchsia-900/30",
    title: "Integraciones IA",
    skills: ["OpenAI", "Anthropic (Claude)", "Google Gemini", "LangChain", "RAG"],
  },
  {
    icon: Cloud,
    gradient: "from-cyan-500 to-sky-500",
    glowColor: "group-hover:shadow-cyan-900/30",
    title: "Infraestructura & Tools",
    skills: ["Vercel", "Railway", "Docker", "Git / GitHub", "Linux"],
  },
  {
    icon: Globe,
    gradient: "from-blue-500 to-blue-700",
    glowColor: "group-hover:shadow-blue-900/30",
    title: "CMS & Web Content",
    skills: ["WordPress", "SEO", "Blogs", "Gestión Web"],
  },
];

export default function TechStack() {
  return (
    <section id="skills" className="py-24 relative">
      {/* Subtle section gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Stack Tecnológico
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Herramientas que domino
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-base">
            Tecnologías cuidadosamente seleccionadas para entregar soluciones modernas,
            escalables y de alto rendimiento.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES.map(({ icon: Icon, gradient, glowColor, title, skills }) => (
            <div
              key={title}
              className={`group relative rounded-2xl border border-violet-900/40 bg-slate-900/50 p-6 hover:border-violet-700/60 hover:-translate-y-1 hover:shadow-xl ${glowColor} transition-all duration-300 overflow-hidden`}
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-violet-500/30 rounded-tl-2xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-violet-500/20 rounded-br-2xl pointer-events-none" />

              {/* Hover glow overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-300 rounded-2xl`} />

              {/* Icon */}
              <div
                className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 shadow-lg`}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>

              {/* Title */}
              <h3 className="relative text-white font-bold text-lg mb-4">{title}</h3>

              {/* Skill pills */}
              <div className="relative flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-[#0f0d1e] text-slate-300 border border-violet-900/50 group-hover:border-violet-700/60 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
