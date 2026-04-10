"use client";

import { useState, useEffect } from "react";

export default function ComingSoonPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#0a0804] overflow-hidden flex flex-col items-center justify-center px-6">
      {/* Noise texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "256px",
        }}
      />

      {/* Radial amber glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[900px] h-[900px] rounded-full bg-amber-800/10 blur-[160px]" />
      </div>

      {/* Top decorative line */}
      <div
        className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-700/40 to-transparent transition-opacity duration-1000 ${mounted ? "opacity-100" : "opacity-0"}`}
      />

      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-12 h-12 border-l border-t border-amber-700/30" />
      <div className="absolute top-8 right-8 w-12 h-12 border-r border-t border-amber-700/30" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-l border-b border-amber-700/30" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-r border-b border-amber-700/30" />

      {/* Floating orbs */}
      <div className="pointer-events-none absolute top-1/4 left-[10%] w-2 h-2 rounded-full bg-amber-500/20 animate-float-slow" />
      <div className="pointer-events-none absolute top-2/3 right-[15%] w-1 h-1 rounded-full bg-amber-400/30 animate-float-medium" />
      <div className="pointer-events-none absolute top-1/2 left-[20%] w-1.5 h-1.5 rounded-full bg-amber-600/20 animate-float-fast" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Eyebrow label */}
        <div
          className={` inline-flex items-center gap-1 transition-all mt-2 duration-700 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div className="h-px w-10 bg-amber-600/60" />
          <span className="text-xs tracking-[0.35em] uppercase text-amber-600/80 font-semibold">
            Cameroon Fintech Lab 
          </span>
          <div className="h-px w-10 bg-amber-600/60" />
        </div>

        {/* Main heading */}
        <h1
          className={`font-display text-7xl md:text-[9rem] lg:text-[11rem] font-bold text-amber-50 leading-none tracking-tighter  transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          Coming
        </h1>
        <h1
          className={`font-display text-7xl md:text-[9rem] lg:text-[11rem] font-bold leading-none tracking-tighter mb-5 transition-all duration-700 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{
            WebkitTextStroke: "1px rgba(217,119,6,0.5)",
            color: "transparent",
          }}
        >
          Soon
        </h1>

        {/* Subtitle */}
        <p
          className={`text-amber-100/40 text-base md:text-lg max-w-md leading-relaxed mb-16 font-light transition-all duration-700 delay-[400ms] ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          Advancing Financial innovation in Cameroon and CEMAC.
        </p>

        {/* Countdown */}
      </div>

      {/* Bottom bar */}
      <div
        className={`absolute bottom-8 left-0 right-0 flex items-center justify-center transition-all duration-700 delay-700 ${mounted ? "opacity-100" : "opacity-0"}`}
      >
        <p className="text-amber-50/15 text-xs tracking-[0.25em] uppercase">
          © 2026 · All rights reserved
        </p>
      </div>

      {/* Bottom line */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-700/40 to-transparent transition-opacity duration-1000 delay-500 ${mounted ? "opacity-100" : "opacity-0"}`}
      />
    </main>
  );
}
