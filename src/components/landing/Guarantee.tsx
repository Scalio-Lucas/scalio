import { Reveal } from "./Reveal";

const badges = ["Métricas acompanhadas no CRM.", "Resultado rastreável.", "Sem letra miúda."];

export function Guarantee() {
  return (
    <section className="relative px-6 py-28">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="mb-4 inline-block rounded-full glass px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
          Nosso Compromisso
        </p>
        <h2 className="text-balance font-display text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
          <span className="text-gradient">Se a gente não entregar, </span>
          <span className="text-electric-gradient">a gente continua trabalhando.</span>
        </h2>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-8 max-w-2xl space-y-4 text-center">
        <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
          Você investe no tráfego.
        </p>
        <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
          Nós colocamos nossa equipe, tecnologia e operação para fazer o sistema funcionar.
        </p>
        <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
          Se o resultado contratado não for alcançado dentro do prazo, continuamos trabalhando sem
          cobrar nossa operação até entregar.
        </p>
      </Reveal>

      <Reveal delay={0.16} className="mx-auto mt-10 max-w-2xl">
        <div className="relative overflow-hidden rounded-2xl border border-electric/30 bg-surface-1 p-6 text-center shadow-[0_0_60px_-30px_oklch(0.62_0.24_264/0.9)] md:p-8">
          <p className="font-display text-xl font-semibold text-electric-gradient md:text-2xl">
            Garantia assinada em contrato.
          </p>
        </div>
      </Reveal>

      <Reveal
        delay={0.22}
        className="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-3"
      >
        {badges.map((b) => (
          <span key={b} className="rounded-full glass px-4 py-2 text-xs text-muted-foreground">
            {b}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.28} className="mt-10 flex justify-center">
        <a
          href="https://wa.me/553173524168"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-electric px-6 py-3 text-sm font-medium text-primary-foreground glow-electric transition-all hover:shadow-[0_0_50px_0_oklch(0.62_0.24_264/0.8)]"
        >
          <span className="relative z-10">Quero Ver Se Minha Região Está Disponível</span>
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
      </Reveal>
    </section>
  );
}
