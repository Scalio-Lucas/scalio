import { Reveal } from "./Reveal";

export function Authority() {
  return (
    <section className="relative px-6 py-28">
      <Reveal className="mx-auto max-w-3xl">
        <div className="relative overflow-hidden rounded-3xl glass-strong p-8 md:p-12">
          <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-electric/15 blur-3xl" />
          <div className="relative flex flex-col items-center text-center">
            <p className="mb-4 inline-block rounded-full glass px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
              Quem Está Por Trás
            </p>

            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-electric/15 font-display text-2xl font-semibold text-electric-bright shadow-[0_0_40px_-10px_oklch(0.62_0.24_264/0.8)]">
              LF
            </div>

            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              <span className="text-gradient">Lucas Ferreira</span>
            </h2>
            <p className="mt-2 text-sm uppercase tracking-widest text-electric-bright">
              Fundador da Scalio Digital
            </p>

            <div className="mt-8 max-w-xl space-y-4">
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                Mais de 8 anos no mercado imobiliário digital.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                Mais de R$80 milhões em VGV gerado para imobiliárias parceiras.
              </p>
              <p className="text-base leading-relaxed text-foreground/90 md:text-lg">
                Mas existe algo mais importante:
              </p>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                O mesmo sistema que você está conhecendo agora foi usado para colocar você nesta
                página.
              </p>
              <p className="font-display text-base font-medium text-foreground md:text-lg">
                O anúncio trouxe você.
                <br />A IA atende você.
                <br />O funil identifica seu interesse.
                <br />E a nossa equipe recebe a oportunidade.
              </p>
            </div>

            <div className="mt-8 w-full max-w-xl rounded-2xl border border-electric/30 bg-surface-1 p-6 shadow-[0_0_60px_-30px_oklch(0.62_0.24_264/0.9)]">
              <p className="font-display text-lg font-semibold md:text-xl">
                <span className="text-gradient">Você não está comprando uma apresentação. </span>
                <span className="text-electric-gradient">Está vendo a operação funcionando.</span>
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
