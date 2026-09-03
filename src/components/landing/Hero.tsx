"use client";
import { useEffect, useRef, useState } from "react";
import { MeshGradient, PulsingBorder } from "@paper-design/shaders-react";
import { m } from "framer-motion";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [, setIsActive] = useState(false);
  // O selo giratório é "hidden md:block" (nunca aparece no mobile). Em vez de só
  // escondê-lo com CSS, evitamos montar o WebGL do PulsingBorder no mobile —
  // mesmo resultado visual, sem o custo de inicialização na thread principal.
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => setIsActive(true);
    const handleMouseLeave = () => setIsActive(false);
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-background"
    >
      {/* SVG Filters */}
      <svg className="absolute inset-0 w-0 h-0">
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.005" numOctaves="1" seed="1" />
            <feDisplacementMap in="SourceGraphic" scale="0.3" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.02 0 1 0 0 0.02 0 0 1 0 0.05 0 0 0 0.9 0"
            />
          </filter>
          <filter id="gooey-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
            <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 19 -9" />
          </filter>
        </defs>
      </svg>

      {/* Shader background */}
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={["#050505", "#0a0a1a", "#1e1e5a", "#4f46e5", "#050505"]}
        speed={0.3}
      />
      <MeshGradient
        className="absolute inset-0 w-full h-full opacity-60 mix-blend-screen"
        colors={["#000000", "#1e1e5a", "#7dd3fc", "#4f46e5", "#000000"]}
        speed={0.2}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/30 to-background pointer-events-none" />

      {/* Main content */}
      <main className="relative z-20 flex min-h-screen flex-col items-start justify-center px-6 py-28 text-left">
        {/* Eyebrow */}
        <m.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block rounded-full glass px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-muted-foreground"
        >
          Exclusivo para Imobiliárias
        </m.p>

        {/* Headline */}
        <m.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 max-w-4xl text-balance font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-6xl"
        >
          <span className="text-electric-gradient">R$15 Milhões </span>
          <span className="text-gradient">em Oportunidades Reais de </span>
          <span className="text-electric-gradient">Venda </span>
          <span className="text-gradient">Agendadas Para Seus Corretores em </span>
          <span className="text-electric-gradient">45 Dias.</span>
        </m.h1>

        {/* Subhead */}
        <m.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white md:text-lg"
        >
          Se não entregar, a gente trabalha de graça até entregar. Garantido em contrato.
        </m.p>

        {/* Bullets */}
        <m.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="mt-6 flex max-w-2xl flex-col gap-2.5"
        >
          {[
            "Compradores qualificados, não leads curiosos",
            "Atendimento e pré-qualificação em minutos, 24/7",
            "Visitas qualificadas prontas na agenda dos seus corretores",
            "Exclusividade: 1 imobiliária por região",
          ].map((b) => (
            <li
              key={b}
              className="flex items-start gap-2.5 text-sm text-foreground/90 md:text-base"
            >
              <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-electric/20 text-electric-bright">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </span>
              {b}
            </li>
          ))}
        </m.ul>

        {/* CTA */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.36 }}
          className="mt-9 flex flex-col items-start gap-4"
        >
          <a
            href="https://lp.digitalscalio.com/forms"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-electric px-6 py-3 text-sm font-medium text-primary-foreground glow-electric transition-all hover:shadow-[0_0_50px_0_oklch(0.62_0.24_264/0.8)]"
          >
            <span className="relative z-10">Quero Esse Resultado na Minha Imobiliária</span>
            <svg
              className="relative z-10 transition-transform group-hover:translate-x-0.5"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>
          <p className="text-xs text-muted-foreground">
            Atendemos apenas 1 imobiliária por região. Verifique se a sua está disponível.
          </p>
        </m.div>
      </main>

      {/* Pulsing border with rotating text — bottom-right (desktop only, not just hidden: not mounted) */}
      {isDesktop && (
        <div className="absolute bottom-8 right-8 z-30 hidden md:block">
          <div className="relative h-20 w-20 flex items-center justify-center">
            <PulsingBorder
              colors={["#4f46e5", "#7dd3fc", "#a78bfa", "#22d3ee", "#3b82f6", "#60a5fa", "#818cf8"]}
              colorBack="#00000000"
              speed={1.5}
              roundness={1}
              thickness={0.1}
              softness={0.2}
              intensity={5}
              spotSize={0.1}
              pulse={0.1}
              smoke={0.5}
              smokeSize={4}
              scale={0.65}
              rotation={0}
              frame={9161408.251009725}
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
              }}
            />
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
              <defs>
                <path id="circle" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
              </defs>
              <text className="text-[6px] fill-foreground/80 font-display tracking-[0.3em] uppercase">
                <textPath href="#circle" startOffset="0%">
                  Scalio • IA • CRM • Tráfego • Scalio • IA • CRM • Tráfego •
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    values="0 50 50;360 50 50"
                    dur="20s"
                    repeatCount="indefinite"
                  />
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      )}
    </section>
  );
}
