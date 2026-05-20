"use client";

import { useState } from "react";
import { Mail, Globe, Briefcase, ShoppingBag, Send, CheckCircle2 } from "lucide-react";
import type { ReactNode, SyntheticEvent } from "react";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.562 21.8 24 17.302 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

interface SocialLink {
  name: string;
  icon: ReactNode;
  href: string;
  color: string;
}

const SOCIALS: SocialLink[] = [
  {
    name: "GitHub",
    icon: <GitHubIcon className="w-4 h-4 text-slate-300" />,
    href: "https://github.com/Diego-Roman",
    color: "hover:border-slate-500 hover:bg-slate-800/60",
  },
  {
    name: "LinkedIn",
    icon: <LinkedInIcon className="w-4 h-4 text-blue-400" />,
    href: "https://www.linkedin.com/in/diego-aguirre-pinto-1950103b9/",
    color: "hover:border-blue-500/50 hover:bg-blue-500/10",
  },
  {
    name: "Upwork",
    icon: <Briefcase className="w-4 h-4 text-emerald-400" />,
    href: "https://www.upwork.com/freelancers/~016346001932b62455",
    color: "hover:border-emerald-500/50 hover:bg-emerald-500/10",
  },
  {
    name: "Fiverr",
    icon: <ShoppingBag className="w-4 h-4 text-teal-400" />,
    href: "https://www.fiverr.com/diego_roman_dev",
    color: "hover:border-teal-500/50 hover:bg-teal-500/10",
  },
  {
    name: "Workana",
    icon: <Globe className="w-4 h-4 text-violet-400" />,
    href: "https://www.workana.com/freelancer/2837384165e1b335ff0dec6a9a6fa317",
    color: "hover:border-violet-500/50 hover:bg-violet-500/10",
  },
];

export default function Contact() {
  const [email,        setEmail]        = useState("");
  const [message,      setMessage]      = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess,    setIsSuccess]    = useState(false);

  async function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      if (res.ok) {
        setIsSuccess(true);
      } else {
        alert("Hubo un error al enviar el mensaje. Intenta de nuevo.");
      }
    } catch {
      alert("Hubo un error al enviar el mensaje. Intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[42rem] bg-blue-600/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Label */}
        <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">
          Contacto
        </p>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-6">
          ¿Listo para llevar{" "}
          <span className="animate-gradient-x bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent">
            tu proyecto al siguiente nivel?
          </span>
        </h2>

        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Cuéntame tu idea o desafío. Construimos juntos la solución tecnológica que tu
          negocio necesita — desde el diseño hasta el deploy en producción.
        </p>

        {/* Form / Success card */}
        <div className="w-full max-w-xl mx-auto mb-14">
          {isSuccess ? (
            /* ── Success card ── */
            <div className="relative flex flex-col items-center gap-5 px-8 py-12 rounded-2xl border border-emerald-500/25 bg-slate-900/80 backdrop-blur-sm overflow-hidden shadow-2xl shadow-emerald-500/5">
              {/* Subtle glow behind the card */}
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent pointer-events-none" />

              {/* Animated check ring */}
              <div className="relative flex items-center justify-center">
                <span className="absolute w-20 h-20 rounded-full bg-emerald-500/15 animate-ping" />
                <div className="relative w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                </div>
              </div>

              {/* Text */}
              <div className="relative text-center">
                <h3 className="text-xl font-bold text-white mb-2">
                  ¡Mensaje enviado con éxito!
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">
                  Te responderé lo más pronto posible.
                </p>
              </div>

              {/* Decorative line */}
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

              <p className="relative text-slate-600 text-xs">
                Revisa tu carpeta de enviados para confirmar
              </p>
            </div>
          ) : (
            /* ── Contact form ── */
            <form onSubmit={handleSubmit} className="text-left space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="flex items-center gap-2 text-slate-400 text-sm font-medium mb-2"
                >
                  <Mail className="w-4 h-4 text-blue-400" />
                  Correo electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@correo.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-colors duration-200"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-slate-400 text-sm font-medium mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Cuéntame sobre tu proyecto o idea..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-colors duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex items-center justify-center gap-2 w-full px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-base hover:shadow-2xl hover:shadow-blue-500/40 hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100 disabled:shadow-none"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="w-5 h-5 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <circle
                        className="opacity-25"
                        cx="12" cy="12" r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    Enviar mensaje
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 max-w-sm mx-auto mb-10">
          <div className="flex-1 h-px bg-slate-800" />
          <span className="text-slate-600 text-sm">o encuéntrame en</span>
          <div className="flex-1 h-px bg-slate-800" />
        </div>

        {/* Social links */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {SOCIALS.map(({ name, icon, href, color }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2.5 px-5 py-3 rounded-xl border border-slate-800 bg-slate-900/50 text-slate-400 hover:text-white font-medium text-sm transition-all duration-200 ${color}`}
            >
              {icon}
              {name}
            </a>
          ))}
        </div>

        {/* Footer line */}
        <div className="border-t border-slate-800/60 pt-8">
          <p className="text-slate-600 text-sm" suppressHydrationWarning>
            © {new Date().getFullYear()} Diego Aguirre · Construido con{" "}
            <span className="text-blue-500">Next.js</span> &amp;{" "}
            <span className="text-cyan-500">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </section>
  );
}
