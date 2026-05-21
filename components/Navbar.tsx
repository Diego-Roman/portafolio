"use client";

import { useState, useEffect } from "react";
import { Code2, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#about",    label: "Sobre Mí"   },
  { href: "#skills",   label: "Habilidades"},
  { href: "#projects", label: "Proyectos"  },
  { href: "#contact",  label: "Contacto"   },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0f1a]/90 backdrop-blur-xl border-b border-violet-900/40 shadow-xl shadow-violet-950/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-lg shadow-violet-500/30">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg text-white">
              Diego<span className="text-violet-400">.</span>
              <span className="text-slate-400 font-normal">dev</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="relative text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200 group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-fuchsia-400 group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center px-5 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white hover:shadow-lg hover:shadow-violet-500/30 hover:scale-105 transition-all duration-200"
            >
              Hablemos
            </a>
            <button
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-violet-900/60 text-slate-400 hover:text-white hover:border-violet-700 transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0d0e1f]/98 backdrop-blur-xl border-b border-violet-900/40 px-4 pt-2 pb-4 space-y-1">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center py-3 px-2 text-slate-300 hover:text-white rounded-lg hover:bg-violet-950/40 transition-colors font-medium"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 flex items-center justify-center py-3 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white font-semibold"
          >
            Hablemos
          </a>
        </div>
      </div>
    </nav>
  );
}
