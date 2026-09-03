import { Reveal } from "./Reveal";

export function Exclusivity() {
  return (
    <section className="relative px-6 py-28">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="mb-4 inline-block rounded-full glass px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
          Exclusividade Regional
        </p>
        <h2 className="text-balance font-display text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
          <span className="text-gradient">Uma imobiliária </span>
          <span className="text-electric-gradient">por região.</span>
        </h2>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-8 max-w-2xl space-y-4 text-center">
        <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
          Quando fechamos com sua imobiliária, não trabalhamos com outra concorrente direta na mesma
          região.
        </p>
        <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
          A estrutura de campanhas, IA, dados e otimizações passa a trabalhar exclusivamente para
          sua operação.
        </p>
      </Reveal>

      <Reveal delay={0.18} className="mx-auto mt-10 max-w-2xl">
        <div className="relative overflow-hidden rounded-2xl border border-danger/30 bg-surface-1 p-6 text-center md:p-8">
          <p className="text-xs uppercase tracking-widest text-danger">Mas existe um detalhe:</p>
          <p className="mt-3 font-display text-lg font-medium text-foreground md:text-xl">
            Se outra imobiliária da sua região fechar antes, não teremos outra vaga para você.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.24} className="mt-10 flex justify-center">
        <a
          href="https://lp.digitalscalio.com/forms"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-electric px-6 py-3 text-sm font-medium text-primary-foreground glow-electric transition-all hover:shadow-[0_0_50px_0_oklch(0.62_0.24_264/0.8)]"
        >
          <span className="relative z-10">Verificar Disponibilidade da Minha Região</span>
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
