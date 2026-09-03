import { Counter } from "./Counter";
import { Reveal } from "./Reveal";

const stats = [
  { value: 80, prefix: "+R$", suffix: "M", label: "em VGV gerado" },
  { value: 749, prefix: "", suffix: "", label: "visitas qualificadas agendadas" },
  { value: 480, prefix: "+R$", suffix: "K", label: "em comissão gerada" },
];

export function Metrics() {
  return (
    <section className="relative px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border bg-border/50 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="bg-surface-1 p-8 text-center">
                <p className="font-display text-4xl font-semibold text-electric-gradient md:text-5xl">
                  <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 text-center text-xs text-muted-foreground">
            Resultados acumulados das imobiliárias parceiras da Scalio.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
