import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { GlobePulse } from "@/components/ui/cobe-globe-pulse";

const cities: { name: string; location: [number, number] }[] = [
  { name: "São Paulo", location: [-23.55, -46.63] },
  { name: "Minas Gerais", location: [-19.92, -43.94] },
  { name: "Campinas", location: [-22.91, -47.06] },
  { name: "Sorocaba", location: [-23.5, -47.46] },
  { name: "Ribeirão Preto", location: [-21.17, -47.81] },
  { name: "Paraná", location: [-25.42, -49.27] },
  { name: "Santa Catarina", location: [-27.59, -48.55] },
  { name: "Rio Grande do Sul", location: [-30.03, -51.23] },
  { name: "Bahia", location: [-12.97, -38.5] },
  { name: "Pernambuco", location: [-8.05, -34.9] },
  { name: "Ceará", location: [-3.73, -38.52] },
  { name: "Distrito Federal", location: [-15.78, -47.93] },
  { name: "Goiás", location: [-16.68, -49.25] },
];

const markers = cities.map((c, i) => ({
  id: `pulse-${i}`,
  location: c.location,
  delay: i * 0.25,
  label: c.name,
}));

export function BrazilMap() {
  return (
    <section className="relative px-6 py-28">
      <SectionHeading
        eyebrow="Operação em Diferentes Regiões"
        title="Uma operação criada para imobiliárias que querem vender mais."
      />
      <Reveal className="mx-auto mt-14 max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl glass-strong p-8 md:p-12">
          <div className="grid items-center gap-10 md:grid-cols-[1fr_1.1fr]">
            <div className="relative mx-auto w-full max-w-md">
              <GlobePulse markers={markers} initialPhi={0.93} initialTheta={-0.1} speed={0.0015} />
            </div>
            <div>
              <ul className="grid grid-cols-2 gap-3">
                {cities.map((c) => (
                  <li
                    key={c.name}
                    className="flex items-center gap-2 rounded-xl border border-border/70 bg-surface-1 px-3 py-2.5 text-sm"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-electric animate-glow-pulse" />
                    {c.name}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted-foreground">
                A Scalio trabalha com imobiliárias em diferentes regiões do Brasil, adaptando a
                operação ao mercado, ticket, perfil de comprador e objetivo comercial de cada
                parceiro.
              </p>
              <div className="mt-5 inline-block rounded-xl border border-electric/30 bg-electric/5 px-4 py-3">
                <p className="font-display text-sm font-semibold text-electric-gradient">
                  1 imobiliária por região.
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Exclusividade para evitar conflito direto entre operações.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
