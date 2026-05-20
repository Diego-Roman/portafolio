import { Code2, Server, Zap, Brain, Cloud } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Category {
  icon: LucideIcon;
  gradient: string;
  title: string;
  skills: string[];
}

const CATEGORIES: Category[] = [
  {
    icon: Code2,
    gradient: "from-blue-500 to-indigo-500",
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "JavaScript"],
  },
  {
    icon: Server,
    gradient: "from-emerald-500 to-teal-500",
    title: "Backend & BD",
    skills: ["Python", "FastAPI", "Supabase", "PostgreSQL", "REST APIs"],
  },
  {
    icon: Zap,
    gradient: "from-amber-500 to-orange-500",
    title: "Automatización",
    skills: ["n8n", "Make.com", "Webhooks", "Workflows", "Zapier"],
  },
  {
    icon: Brain,
    gradient: "from-purple-500 to-pink-500",
    title: "Integraciones IA",
    skills: ["OpenAI", "Anthropic (Claude)", "Google Gemini", "LangChain", "RAG"],
  },
  {
    icon: Cloud,
    gradient: "from-sky-500 to-cyan-500",
    title: "Infraestructura & Tools",
    skills: ["Vercel", "Railway", "Docker", "Git / GitHub", "Linux"],
  },
];

export default function TechStack() {
  return (
    <section id="skills" className="py-24 relative">
      {/* Subtle section gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
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
          {CATEGORIES.map(({ icon: Icon, gradient, title, skills }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-slate-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 transition-all duration-300 overflow-hidden"
            >
              {/* Hover glow overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300 rounded-2xl`} />

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
                    className="px-3 py-1 text-xs font-medium rounded-full bg-slate-800 text-slate-300 border border-slate-700 group-hover:border-slate-600 transition-colors duration-200"
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
