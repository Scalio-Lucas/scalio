import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section id="contato" className="relative px-6 py-32">
      <Reveal className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-electric/30 bg-gradient-to-b from-surface-1 to-background p-12 text-center md:p-20">
          {/* spotlight */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/30 blur-[120px]" />
            <div className="absolute inset-0 grid-bg opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
          </div>
          <div className="relative">
            <p className="inline-block rounded-full glass px-3 py-1 text-[11px] uppercase tracking-widest text-muted-foreground">
              Pronto Para Mudar Sua Operação?
            </p>
            <h2 className="mt-6 text-balance font-display text-4xl font-semibold leading-tight md:text-6xl">
              <span className="text-gradient">Pare de entregar leads para seus corretores. </span>
              <span className="text-electric-gradient">Entregue visitas qualificadas.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
              Uma operação de aquisição, qualificação e agendamento trabalhando 24/7 para sua
              imobiliária.
            </p>
            <a
              href="https://wa.me/553173524168"
              className="group relative mt-10 inline-flex items-center gap-2 overflow-hidden rounded-full bg-electric px-7 py-4 text-sm font-medium text-primary-foreground glow-electric transition-all hover:shadow-[0_0_60px_0_oklch(0.62_0.24_264/0.9)]"
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
            <p className="mt-5 text-xs text-muted-foreground">
              1 imobiliária por região · Diagnóstico gratuito · Resposta em minutos
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
