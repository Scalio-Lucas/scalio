import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Atração por Perfil",
    desc: (
      <>
        Não buscamos qualquer lead. Criamos campanhas direcionadas ao comprador que sua imobiliária
        realmente quer atender — considerando região, ticket, tipo de imóvel e perfil de compra.
        Você deixa de disputar volume e começa a buscar intenção.
      </>
    ),
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
  {
    n: "02",
    title: "Pré-Qualificação com IA",
    desc: (
      <>
        Seu lead é atendido em minutos, não em horas. Nossa IA conversa com o comprador, entende o
        que ele procura, identifica orçamento, região e intenção de compra e separa curiosos de
        oportunidades reais. 24 horas por dia. 7 dias por semana.
      </>
    ),
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
        <circle cx="9" cy="12" r="1.2" fill="currentColor" />
        <circle cx="15" cy="12" r="1.2" fill="currentColor" />
        <path d="M12 2v4" stroke="currentColor" strokeWidth="1.5" />
      </>
    ),
  },
  {
    n: "03",
    title: "Visita Pronta na Agenda",
    desc: (
      <>
        O corretor entra quando a oportunidade já existe. Quando o comprador demonstra intenção, a
        IA conduz a conversa até o agendamento e envia as informações para o corretor: perfil,
        orçamento, preferências e horário. O corretor não precisa caçar o cliente. Ele só precisa
        aparecer e vender.
      </>
    ),
    icon: (
      <>
        <rect
          x="3"
          y="4"
          width="18"
          height="16"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        <path d="M3 9h18M8 14h3M8 17h6" stroke="currentColor" strokeWidth="1.5" />
      </>
    ),
  },
];

export function Method() {
  return (
    <section id="metodo" className="relative px-6 py-28">
      <SectionHeading
        eyebrow="Método Visita Certa"
        title="Do clique à visita em 3 etapas."
        sub="Uma operação criada para fazer o corretor entrar na conversa somente quando existe uma oportunidade real."
      />
      <div className="relative mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-3">
        {/* glowing connector */}
        <div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px bg-gradient-to-r from-transparent via-electric/40 to-transparent md:block" />
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.12}>
            <div className="group relative h-full overflow-hidden rounded-2xl glass p-7 transition-all hover:border-electric/40 hover:shadow-[0_0_40px_-10px_oklch(0.62_0.24_264/0.6)]">
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-electric/20 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex items-center justify-between">
                <span className="font-display text-xs tracking-widest text-electric-bright">
                  {s.n} — {s.title.toUpperCase()}
                </span>
                <svg width="28" height="28" viewBox="0 0 24 24" className="text-electric-bright">
                  {s.icon}
                </svg>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.2} className="mt-14 flex justify-center">
        <a
          href="https://wa.me/553173524168"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-electric px-6 py-3 text-sm font-medium text-primary-foreground glow-electric transition-all hover:shadow-[0_0_50px_0_oklch(0.62_0.24_264/0.8)]"
        >
          <span className="relative z-10">Quero Ver Se Funciona na Minha Imobiliária</span>
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
