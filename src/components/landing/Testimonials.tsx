import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { VideoTestimonial } from "./VideoTestimonial";

const videos = [
  {
    src: "/videos/horizonte-house-paulo.mp4",
    name: "Paulo",
    role: "Sócio-proprietário · Horizonte House",
    orientation: "vertical" as const,
  },
  {
    src: "/videos/vinicius.mp4",
    name: "Vinícius",
    // TODO: adicionar cargo/empresa do Vinícius assim que confirmado.
    role: undefined as string | undefined,
    orientation: "vertical" as const,
  },
];

export function Testimonials() {
  return (
    <section className="relative px-6 py-28">
      <SectionHeading
        eyebrow="Quem Confia, Recomenda"
        title="A opinião de quem já viveu o resultado."
        sub="Veja o que acontece quando sua imobiliária para de apenas gerar leads e começa a transformar interesse em visitas qualificadas."
      />

      <div className="mx-auto mt-14 flex max-w-5xl flex-col items-center gap-8 md:flex-row md:items-center md:justify-center md:gap-6">
        {videos.map((v, i) => (
          <Reveal key={v.src} delay={i * 0.1}>
            <VideoTestimonial src={v.src} name={v.name} role={v.role} orientation={v.orientation} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.25} className="mx-auto mt-16 max-w-2xl text-center">
        <p className="text-xs text-muted-foreground/70">
          Resultados podem variar de acordo com região, investimento, operação comercial e perfil da
          imobiliária.
        </p>
      </Reveal>
    </section>
  );
}
