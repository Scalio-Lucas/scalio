import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { VideoTestimonial } from "./VideoTestimonial";

// Adicione o segundo vídeo real de feedback aqui assim que estiver disponível
// (arquivo em /public/videos/, mesmo padrão: { src, name, role }).
const videos = [
  {
    src: "/videos/horizonte-house-paulo.mp4",
    name: "Paulo",
    role: "Sócio-proprietário · Horizonte House",
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

      <div
        className={`mx-auto mt-14 grid max-w-4xl gap-6 ${
          videos.length > 1 ? "sm:grid-cols-2" : "max-w-sm"
        }`}
      >
        {videos.map((v, i) => (
          <Reveal key={v.src} delay={i * 0.1}>
            <VideoTestimonial src={v.src} name={v.name} role={v.role} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15} className="mx-auto mt-24 max-w-2xl text-center">
        <h3 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
          <span className="text-gradient">A opinião de quem confia no nosso trabalho.</span>
        </h3>
      </Reveal>

      <Reveal delay={0.2} className="mx-auto mt-10 max-w-2xl">
        <div className="relative overflow-hidden rounded-2xl glass p-7 md:p-8">
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            className="text-electric-bright opacity-60"
          >
            <path
              fill="currentColor"
              d="M7 7h4v4H8c0 2 1 3 3 3v3c-3 0-5-2-5-5V7zm8 0h4v4h-3c0 2 1 3 3 3v3c-3 0-5-2-5-5V7z"
            />
          </svg>
          <p className="mt-4 text-base leading-relaxed text-foreground/90 md:text-lg">
            "A gente estava com o pé muito atrás. Mas posso dizer: valeu muito a pena. Já fizemos
            venda em um mês e os leads estão vindo mais qualificados."
          </p>
          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-electric/15 font-display text-sm text-electric-bright">
              P
            </div>
            <div>
              <p className="text-sm font-medium">Paulo</p>
              <p className="text-xs text-muted-foreground">
                Sócio-proprietário, Horizonte House · 12 anos de mercado imobiliário
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.25} className="mx-auto mt-8 max-w-2xl text-center">
        <p className="text-xs text-muted-foreground/70">
          Resultados podem variar de acordo com região, investimento, operação comercial e perfil da
          imobiliária.
        </p>
      </Reveal>
    </section>
  );
}
