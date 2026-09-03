import { Reveal } from "./Reveal";

export function Problem() {
  return (
    <section className="relative px-6 py-28">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="mb-4 inline-block rounded-full glass px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
          O Problema
        </p>
        <h2 className="text-balance font-display text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
          <span className="text-gradient">Você não precisa de mais leads.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl font-display text-xl font-medium text-electric-bright md:text-2xl">
          Precisa parar de desperdiçar os que já chegam.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-10 max-w-2xl space-y-4 text-center">
        <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
          Sua imobiliária pode investir milhares de reais todos os meses para gerar leads.
        </p>
        <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
          Mas se o comprador demora horas para receber uma resposta, recebe uma mensagem genérica ou
          precisa insistir para conseguir atendimento, o problema não está no tráfego.
        </p>
        <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
          Está no que acontece depois que o lead chega.
        </p>
        <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
          E é aí que a maioria das imobiliárias perde dinheiro.
        </p>
      </Reveal>

      <Reveal delay={0.18} className="mx-auto mt-10 max-w-2xl">
        <div className="relative overflow-hidden rounded-2xl border border-electric/30 bg-surface-1 p-6 text-center shadow-[0_0_60px_-30px_oklch(0.62_0.24_264/0.9)] md:p-8">
          <p className="font-display text-lg font-semibold md:text-xl">
            <span className="text-gradient">Lead parado não paga comissão. </span>
            <span className="text-electric-gradient">Visita agendada paga.</span>
          </p>
        </div>
      </Reveal>
    </section>
  );
}
