import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const before = ["300 LEADS", "30 RESPONDERAM", "15 VIRARAM VISITAS"];
const after = ["LEAD", "ATENDIMENTO EM MINUTOS", "QUALIFICAÇÃO", "VISITA AGENDADA"];

function Flow({ steps, danger }: { steps: string[]; danger?: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {steps.map((s, i) => (
        <div key={s} className="flex items-center gap-2">
          <div
            className={`rounded-xl border px-3 py-2 text-xs font-medium ${
              danger
                ? "border-danger/30 bg-danger/5 text-danger"
                : "border-electric/30 bg-electric/5 text-electric-bright shadow-[0_0_20px_-8px_oklch(0.62_0.24_264/0.7)]"
            }`}
          >
            {s}
          </div>
          {i < steps.length - 1 && (
            <svg
              width="18"
              height="10"
              viewBox="0 0 18 10"
              className={danger ? "text-danger/40" : "text-electric/60"}
            >
              <path
                d="M0 5 H14 M10 1 L14 5 L10 9"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

export function Funnel() {
  return (
    <section className="relative px-6 py-28">
      <SectionHeading
        eyebrow="Antes vs. Depois"
        title="O funil tradicional desperdiça o que custou caro para chegar."
      />
      <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="rounded-2xl border border-danger/20 bg-surface-1 p-6">
            <p className="mb-4 text-xs uppercase tracking-widest text-danger">Funil tradicional</p>
            <Flow steps={before} danger />
            <p className="mt-5 text-sm text-muted-foreground">O restante ficou pelo caminho.</p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative rounded-2xl border border-electric/30 bg-surface-1 p-6 shadow-[0_0_60px_-30px_oklch(0.62_0.24_264/0.9)]">
            <p className="mb-4 text-xs uppercase tracking-widest text-electric-bright">
              Com a Scalio
            </p>
            <Flow steps={after} />
            <p className="mt-5 text-sm text-muted-foreground">
              O corretor entra quando a oportunidade já existe.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
