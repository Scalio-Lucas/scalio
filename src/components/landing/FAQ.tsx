import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "A IA substitui meus corretores?",
    a: "Não. A IA faz o trabalho que normalmente acontece antes do corretor: atendimento, qualificação e agendamento. O corretor continua responsável pela visita, negociação e fechamento.",
  },
  {
    q: "Funciona para lançamento e revenda?",
    a: "Sim. A operação pode ser estruturada para diferentes tipos de imóveis, regiões e perfis de comprador.",
  },
  {
    q: "Em quanto tempo aparecem os primeiros resultados?",
    a: "A estrutura começa a ser implementada na primeira semana. Os primeiros leads podem chegar nos primeiros dias de campanha e o objetivo é colocar visitas qualificadas na agenda em até 45 dias.",
  },
  {
    q: "E se minha imobiliária já investe em tráfego?",
    a: "Melhor ainda. A proposta não é simplesmente gerar mais leads. É extrair mais resultado dos leads que sua operação já recebe.",
  },
  {
    q: "O que acontece se vocês não entregarem?",
    a: "A garantia é estabelecida em contrato. Se o resultado acordado não for atingido, continuamos trabalhando sem cobrar nossa operação até entregar.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative px-6 py-28">
      <SectionHeading eyebrow="FAQ" title="Perguntas frequentes." />
      <div className="mx-auto mt-12 max-w-3xl space-y-3">
        {faqs.map((f, i) => (
          <Reveal key={f.q} delay={i * 0.05}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full overflow-hidden rounded-2xl glass text-left transition-all hover:border-electric/30"
            >
              <div className="flex items-center justify-between px-6 py-5">
                <span className="font-display text-base font-medium">{f.q}</span>
                <span
                  className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-electric/10 text-electric-bright transition-transform ${open === i ? "rotate-45" : ""}`}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </div>
              <div
                className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </div>
              </div>
            </button>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
