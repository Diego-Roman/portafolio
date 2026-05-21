import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
    >
      {/* Dot-grid background */}
      <div className="absolute inset-0 bg-dot-grid opacity-60" />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_50%,transparent_35%,#0b0f1a_100%)]" />

      {/* Glow orbs */}
      <div className="glow-orb absolute top-1/3 left-1/4 w-[36rem] h-[36rem] bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="glow-orb absolute bottom-1/3 right-1/4 w-[28rem] h-[28rem] bg-fuchsia-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="glow-orb absolute top-2/3 left-1/2 w-[20rem] h-[20rem] bg-cyan-600/6 rounded-full blur-3xl pointer-events-none" />

      {/* Scanline */}
      <div className="animate-scan-line" />

      {/* HUD corner brackets */}
      <div className="absolute top-24 left-8 w-8 h-8 border-t-2 border-l-2 border-violet-500/30 hidden lg:block" />
      <div className="absolute top-24 right-8 w-8 h-8 border-t-2 border-r-2 border-violet-500/30 hidden lg:block" />
      <div className="absolute bottom-16 left-8 w-8 h-8 border-b-2 border-l-2 border-violet-500/30 hidden lg:block" />
      <div className="absolute bottom-16 right-8 w-8 h-8 border-b-2 border-r-2 border-violet-500/30 hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Available badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Disponible para proyectos freelance
        </div>

        {/* HUD separator */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-violet-500/50" />
          <div className="w-1 h-1 rounded-full bg-violet-500/60" />
          <div className="h-px w-20 bg-gradient-to-r from-violet-500/50 via-fuchsia-500/30 to-transparent" />
          <div className="w-1 h-1 rounded-full bg-fuchsia-500/60" />
          <div className="h-px w-10 bg-gradient-to-l from-transparent to-cyan-500/40" />
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white tracking-tight mb-4 leading-none">
          Diego{" "}
          <span className="animate-gradient-x bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-400 bg-clip-text text-transparent">
            Aguirre
          </span>
        </h1>

        {/* Tagline */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300 mb-6 leading-snug">
          Desarrollador Full Stack &amp;{" "}
          <span className="text-fuchsia-400">Especialista en Automatización</span>
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Diseño interfaces modernas, construyo sistemas backend robustos y automatizo
          flujos de trabajo impulsados por IA para{" "}
          <span className="text-white font-semibold">escalar tu negocio.</span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white font-semibold text-base hover:shadow-2xl hover:shadow-violet-500/40 hover:scale-105 transition-all duration-300"
          >
            Ver Proyectos
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-xl border border-violet-900/60 text-slate-300 font-semibold text-base hover:border-violet-500/60 hover:text-white hover:bg-violet-950/30 transition-all duration-300"
          >
            Contactar
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-violet-700 hover:text-violet-400 transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </a>
    </section>
  );
}
