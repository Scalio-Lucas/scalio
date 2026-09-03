import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import valenteLogo from "@/assets/valente.png.asset.json";

export function Cases() {
  return (
    <section className="relative px-6 py-28">
      <SectionHeading title="Não foi um caso isolado." />
      <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
        {/* Valente Incorporadora */}
        <Reveal>
          <div className="group relative h-full overflow-hidden rounded-3xl glass-strong p-7">
            <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-electric/15 blur-3xl" />
            <div className="relative">
              <div className="flex h-14 items-center">
                <img
                  src={valenteLogo.url}
                  alt="Valente Incorporadora logo"
                  className="max-h-14 w-auto max-w-[160px] object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold">Valente Incorporadora</h3>

              <div className="mt-8 space-y-3">
                <div className="rounded-xl border border-border/70 bg-surface-1 p-4">
                  <p className="text-xs text-muted-foreground">Tempo de resposta</p>
                  <div className="mt-1.5 flex items-center gap-3">
                    <span className="text-sm text-muted-foreground line-through">48h</span>
                    <svg width="20" height="10" viewBox="0 0 18 10" className="text-electric">
                      <path
                        d="M0 5 H14 M10 1 L14 5 L10 9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                      />
                    </svg>
                    <span className="font-display text-lg font-semibold text-foreground">
                      3 min
                    </span>
                  </div>
                </div>
                <div className="rounded-xl border border-border/70 bg-surface-1 p-4">
                  <p className="text-xs text-muted-foreground">Visitas por mês</p>
                  <div className="mt-1.5 flex items-center gap-3">
                    <span className="text-sm text-muted-foreground line-through">6</span>
                    <svg width="20" height="10" viewBox="0 0 18 10" className="text-electric">
                      <path
                        d="M0 5 H14 M10 1 L14 5 L10 9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                      />
                    </svg>
                    <span className="font-display text-lg font-semibold text-foreground">22</span>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-xs uppercase tracking-widest text-electric-bright">
                3 meses · Mesma equipe
              </p>
            </div>
          </div>
        </Reveal>

        {/* Horizonte House */}
        <Reveal delay={0.1}>
          <div className="group relative h-full overflow-hidden rounded-3xl glass-strong p-7">
            <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-electric/15 blur-3xl" />
            <div className="relative">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                12 anos de mercado imobiliário
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold">Horizonte House</h3>

              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Já havia se frustrado com outras experiências de geração de clientes.
              </p>

              <div className="mt-8 rounded-xl border border-electric/30 bg-electric/5 p-5">
                <p className="font-display text-xl font-semibold text-electric-gradient">
                  Primeira venda no 1º mês.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
