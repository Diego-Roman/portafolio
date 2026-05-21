import Image from "next/image";
import { Award, ExternalLink } from "lucide-react";

interface Certificado {
  title: string;
  issuer: string;
  image: string;
  pdf?: string;
  tags: string[];
}

const certificados: Certificado[] = [
  {
    title: "Workflows Profesionales con n8n",
    issuer: "Platzi",
    image: "/certificados/diploma-n8n-profesional_page-0001.jpg",
    tags: ["n8n", "AI Automation", "Workflows"],
  },
  {
    title: "Automatizaciones Básicas con Make",
    issuer: "Platzi",
    image: "/certificados/diploma-make_page-0001.jpg",
    tags: ["Make", "APIs", "No-Code"],
  },
  {
    title: "Backend con Supabase",
    issuer: "Platzi",
    image: "/certificados/diploma-supabase_page-0001.jpg",
    tags: ["Supabase", "PostgreSQL", "Backend"],
  },
  {
    title: "Fundamentos de Python",
    issuer: "Platzi",
    image: "/certificados/diploma-fundamentos-python_page-0001.jpg",
    tags: ["Python", "Backend"],
  },
  {
    title: "Fundamentos de Docker",
    issuer: "Platzi",
    image: "/certificados/diploma-docker-fundamentos_page-0001.jpg",
    tags: ["Docker", "DevOps", "Containers"],
  },
  {
    title: "Bases de Datos y SQL",
    issuer: "Platzi",
    image: "/certificados/diploma-fundamentos-bbdd-sql_page-0001.jpg",
    tags: ["SQL", "Databases"],
  },
  {
    title: "Programación Orientada a Objetos",
    issuer: "Platzi",
    image: "/certificados/diploma-python-poo (1)_page-0001.jpg",
    tags: ["Python", "POO"],
  },
  {
    title: "Control de Versiones: Git y GitHub",
    issuer: "Platzi",
    image: "/certificados/diploma-gitgithub_page-0001.jpg",
    tags: ["Git", "GitHub"],
  },
];

export default function Certificados() {
  return (
    <section id="certificados" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-950/10 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Formación Continua
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Certificaciones &amp;{" "}
            <span className="animate-gradient-x bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-400 bg-clip-text text-transparent">
              Credenciales
            </span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-base">
            Aprendizaje constante en las tecnologías que utilizo para entregar
            soluciones de alto impacto.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {certificados.map((cert) => (
            <div
              key={cert.title}
              className="group relative flex flex-col rounded-2xl border border-violet-900/40 bg-slate-900/50 backdrop-blur-sm overflow-hidden hover:border-violet-600/60 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/20 transition-all duration-300"
            >
              {/* Corner brackets — EVA HUD style */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-violet-500/55 rounded-tl-2xl z-10 pointer-events-none" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-violet-500/55 rounded-tr-2xl z-10 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-fuchsia-500/40 rounded-bl-2xl z-10 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-fuchsia-500/40 rounded-br-2xl z-10 pointer-events-none" />

              {/* Top gradient bar */}
              <div className="h-0.5 w-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 flex-shrink-0" />

              {/* Certificate thumbnail — clickeable, opens PDF */}
              <a
                href={encodeURI(cert.pdf ?? cert.image)}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[4/3] w-full bg-slate-950/80 overflow-hidden flex-shrink-0 cursor-pointer"
                aria-label={`Abrir PDF: ${cert.title}`}
              >
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-contain p-2 group-hover:scale-[1.04] transition-transform duration-500"
                />

                {/* Static bottom fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none" />

                {/* Hover overlay — darkens + shows "Abrir PDF" */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-violet-600/85 border border-violet-400/50 flex items-center justify-center backdrop-blur-sm">
                      <ExternalLink className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white text-[10px] font-bold tracking-widest uppercase bg-slate-900/75 px-3 py-1 rounded-full backdrop-blur-sm">
                      Ver Certificado
                    </span>
                  </div>
                </div>
              </a>

              {/* Content */}
              <div className="flex flex-col flex-1 p-4 gap-3">
                {/* Issuer */}
                <div className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-fuchsia-400 flex-shrink-0" />
                  <span className="text-fuchsia-400 text-[10px] font-bold uppercase tracking-widest">
                    {cert.issuer}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-sm leading-snug flex-1">
                  {cert.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {cert.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-[#0f0d1e] text-violet-300 border border-violet-900/60 group-hover:border-violet-700/60 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
