import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Converse com a Gente",
    desc: "Clique no WhatsApp e responda algumas perguntas sobre sua operação.",
    icon: (
      <>
        <rect
          x="4"
          y="6"
          width="16"
          height="13"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        <path d="M8 10h8M8 13h5" stroke="currentColor" strokeWidth="1.5" />
      </>
    ),
  },
  {
    n: "02",
    title: "Receba o Diagnóstico",
    desc: "Analisamos seu funil atual e identificamos onde os leads estão sendo perdidos.",
    icon: (
      <>
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M21 21l-4.5-4.5" stroke="currentColor" strokeWidth="1.5" />
      </>
    ),
  },
  {
    n: "03",
    title: "Colocamos a Operação no Ar",
    desc: "Campanhas, IA, qualificação e agendamento começam a trabalhar juntos.",
    icon: (
      <path
        d="M3 4h18l-7 9v6l-4 2v-8L3 4z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="round"
      />
    ),
  },
];

export function HowToStart() {
  return (
    <section className="relative px-6 py-28">
      <SectionHeading title="Quer descobrir se funciona para sua imobiliária?" />
      <div className="relative mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-3">
        <div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px bg-gradient-to-r from-transparent via-electric/40 to-transparent md:block" />
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.12}>
            <div className="group relative h-full overflow-hidden rounded-2xl glass p-7 transition-all hover:border-electric/40 hover:shadow-[0_0_40px_-10px_oklch(0.62_0.24_264/0.6)]">
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-electric/20 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex items-center justify-between">
                <span className="font-display text-xs tracking-widest text-electric-bright">
                  {s.n}
                </span>
                <svg width="26" height="26" viewBox="0 0 24 24" className="text-electric-bright">
                  {s.icon}
                </svg>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.2} className="mx-auto mt-12 max-w-xl">
        <div className="relative overflow-hidden rounded-2xl border border-electric/30 bg-surface-1 p-6 text-center shadow-[0_0_60px_-30px_oklch(0.62_0.24_264/0.9)]">
          <p className="font-display text-lg font-semibold text-electric-gradient md:text-xl">
            Primeiras oportunidades na agenda em até 45 dias.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
