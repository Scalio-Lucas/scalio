import { Reveal } from "./Reveal";

export function Turn() {
  return (
    <section className="relative px-6 py-28">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance font-display text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
          <span className="text-gradient">O problema não é gerar demanda. </span>
          <span className="text-electric-gradient">É transformar demanda em agenda.</span>
        </h2>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-8 max-w-2xl space-y-4 text-center">
        <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
          A maioria das imobiliárias investe em tráfego.
        </p>
        <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
          Poucas têm uma operação capaz de transformar esse tráfego em conversas qualificadas,
          oportunidades reais e visitas agendadas.
        </p>
        <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
          A Scalio entra justamente nesse ponto.
        </p>
      </Reveal>

      <Reveal delay={0.18} className="mx-auto mt-10 max-w-2xl">
        <div className="relative overflow-hidden rounded-2xl border border-electric/30 bg-surface-1 p-6 text-center shadow-[0_0_60px_-30px_oklch(0.62_0.24_264/0.9)] md:p-8">
          <p className="font-display text-lg font-semibold md:text-xl">
            <span className="text-gradient">Você gera a demanda. </span>
            <span className="text-electric-gradient">
              Nossa operação transforma interesse em visita.
            </span>
          </p>
        </div>
      </Reveal>
    </section>
  );
}
