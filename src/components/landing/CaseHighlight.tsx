import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const rows = [
  { label: "Leads / mês", before: "400 leads/mês", after: "200 leads/mês" },
  { label: "Visitas", before: "20 visitas", after: "50 visitas qualificadas" },
  { label: "Tempo de resposta", before: "45 minutos", after: "Menos de 3 minutos" },
  { label: "Vendas / mês", before: "1 venda/mês", after: "5 vendas/mês" },
  { label: "VGV", before: "R$1 milhão em VGV", after: "R$3 milhões em VGV" },
];

export function CaseHighlight() {
  return (
    <section id="cases" className="relative px-6 py-28">
      <SectionHeading
        eyebrow="Case de Sucesso"
        title="De R$1 milhão para R$3 milhões em VGV."
        sub="Com os mesmos 2 corretores."
      />

      <Reveal delay={0.08} className="mx-auto mt-10 max-w-2xl space-y-4 text-center">
        <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
          A Nova Imobiliária tinha um cenário comum:
        </p>
        <p className="font-display text-lg font-medium text-foreground/90 md:text-xl">
          400 leads/mês → 20 visitas → 1 venda → R$1 milhão em VGV.
        </p>
        <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
          O problema não era falta de demanda. Era o desperdício entre o lead e a visita.
        </p>
      </Reveal>

      <Reveal delay={0.14} className="mx-auto mt-12 max-w-4xl">
        <div className="overflow-hidden rounded-2xl glass-strong">
          <div className="grid grid-cols-3 border-b border-border px-4 py-4 text-xs uppercase tracking-widest text-muted-foreground md:px-6">
            <div>Métrica</div>
            <div className="text-center text-danger">Antes</div>
            <div className="text-center font-display text-sm font-semibold text-electric-bright">
              Depois
            </div>
          </div>
          {rows.map((r, i) => (
            <div
              key={r.label}
              className={`grid grid-cols-3 items-center px-4 py-4 text-sm md:px-6 ${i % 2 ? "bg-surface-1/50" : ""}`}
            >
              <div className="text-muted-foreground">{r.label}</div>
              <div className="text-center text-muted-foreground line-through decoration-danger/40">
                {r.before}
              </div>
              <div className="text-center font-display font-semibold text-foreground">
                {r.after}
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.2} className="mx-auto mt-10 max-w-2xl">
        <div className="relative overflow-hidden rounded-2xl border border-electric/30 bg-surface-1 p-6 text-center shadow-[0_0_60px_-30px_oklch(0.62_0.24_264/0.9)] md:p-8">
          <p className="font-display text-xl font-semibold md:text-2xl">
            <span className="text-gradient">Metade dos leads. </span>
            <span className="text-electric-gradient">5x mais vendas.</span>
          </p>
          <p className="mt-2 font-display text-lg text-muted-foreground md:text-xl">
            Os mesmos 2 corretores.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
