import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const antes = [
  "Lead chega sem contexto",
  "Corretor demora para responder",
  "Curiosos ocupam o tempo da equipe",
  "Corretor precisa insistir pelo WhatsApp",
  "Visitas dependem da disponibilidade do corretor",
  "A imobiliária não sabe exatamente onde está perdendo vendas",
];
const depois = [
  "Lead atendido em minutos",
  "Comprador pré-qualificado",
  "Perfil e intenção identificados",
  "Orçamento e preferências mapeados",
  "Visita conduzida até o agendamento",
  "Corretor recebe a oportunidade com contexto",
];

export function Benefits() {
  return (
    <section className="relative px-6 py-28">
      <SectionHeading
        eyebrow="O Que Muda na Operação"
        title={
          <>
            Seu corretor para de procurar comprador.{" "}
            <span className="text-electric-gradient">E começa a receber comprador.</span>
          </>
        }
      />
      <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="relative h-full overflow-hidden rounded-2xl border border-danger/20 bg-surface-1 p-7">
            <p className="text-xs uppercase tracking-widest text-danger">Antes</p>
            <ul className="mt-5 space-y-3">
              {antes.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-danger/15 text-danger">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
                  </span>
                  <span className="text-muted-foreground">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative h-full overflow-hidden rounded-2xl border border-electric/30 bg-surface-1 p-7 shadow-[0_0_60px_-25px_oklch(0.62_0.24_264/0.8)]">
            <p className="text-xs uppercase tracking-widest text-electric-bright">Depois</p>
            <ul className="mt-5 space-y-3">
              {depois.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-electric/20 text-electric-bright">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-foreground/90">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
