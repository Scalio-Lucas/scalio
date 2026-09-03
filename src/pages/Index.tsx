import { lazy, Suspense } from "react";
import { Backdrop } from "@/components/landing/Backdrop";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Metrics } from "@/components/landing/Metrics";
import { LazyMount } from "@/components/landing/LazyMount";

// Tudo abaixo da dobra é carregado em chunks separados (lazy) e só monta quando
// a seção está perto de entrar na viewport (LazyMount). Isso tira o peso de
// download + execução de JS da carga inicial (o que a página precisa pra
// pintar o Hero). Nenhuma seção, copy, vídeo ou animação foi removida — só o
// MOMENTO em que cada uma é baixada/executada.
const Problem = lazy(() =>
  import("@/components/landing/Problem").then((m) => ({ default: m.Problem })),
);
const Funnel = lazy(() =>
  import("@/components/landing/Funnel").then((m) => ({ default: m.Funnel })),
);
const Turn = lazy(() => import("@/components/landing/Turn").then((m) => ({ default: m.Turn })));
const Method = lazy(() =>
  import("@/components/landing/Method").then((m) => ({ default: m.Method })),
);
const CaseHighlight = lazy(() =>
  import("@/components/landing/CaseHighlight").then((m) => ({ default: m.CaseHighlight })),
);
const Testimonials = lazy(() =>
  import("@/components/landing/Testimonials").then((m) => ({ default: m.Testimonials })),
);
const Benefits = lazy(() =>
  import("@/components/landing/Benefits").then((m) => ({ default: m.Benefits })),
);
const BrazilMap = lazy(() =>
  import("@/components/landing/BrazilMap").then((m) => ({ default: m.BrazilMap })),
);
const Authority = lazy(() =>
  import("@/components/landing/Authority").then((m) => ({ default: m.Authority })),
);
const Guarantee = lazy(() =>
  import("@/components/landing/Guarantee").then((m) => ({ default: m.Guarantee })),
);
const Exclusivity = lazy(() =>
  import("@/components/landing/Exclusivity").then((m) => ({ default: m.Exclusivity })),
);
const HowToStart = lazy(() =>
  import("@/components/landing/HowToStart").then((m) => ({ default: m.HowToStart })),
);
const FAQ = lazy(() => import("@/components/landing/FAQ").then((m) => ({ default: m.FAQ })));
const FinalCTA = lazy(() =>
  import("@/components/landing/FinalCTA").then((m) => ({ default: m.FinalCTA })),
);
const Footer = lazy(() =>
  import("@/components/landing/Footer").then((m) => ({ default: m.Footer })),
);

export default function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden noise">
      <Backdrop />
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <LazyMount>
          <Suspense fallback={null}>
            <Problem />
          </Suspense>
        </LazyMount>
        <LazyMount>
          <Suspense fallback={null}>
            <Funnel />
          </Suspense>
        </LazyMount>
        <LazyMount>
          <Suspense fallback={null}>
            <Turn />
          </Suspense>
        </LazyMount>
        <section id="como">
          <LazyMount id="metodo">
            <Suspense fallback={null}>
              <Method />
            </Suspense>
          </LazyMount>
        </section>
        <LazyMount id="cases">
          <Suspense fallback={null}>
            <CaseHighlight />
          </Suspense>
        </LazyMount>
        <LazyMount>
          <Suspense fallback={null}>
            <Testimonials />
          </Suspense>
        </LazyMount>
        <LazyMount>
          <Suspense fallback={null}>
            <Benefits />
          </Suspense>
        </LazyMount>
        <LazyMount>
          <Suspense fallback={null}>
            <BrazilMap />
          </Suspense>
        </LazyMount>
        <LazyMount>
          <Suspense fallback={null}>
            <Authority />
          </Suspense>
        </LazyMount>
        <LazyMount>
          <Suspense fallback={null}>
            <Guarantee />
          </Suspense>
        </LazyMount>
        <LazyMount>
          <Suspense fallback={null}>
            <Exclusivity />
          </Suspense>
        </LazyMount>
        <LazyMount>
          <Suspense fallback={null}>
            <HowToStart />
          </Suspense>
        </LazyMount>
        <LazyMount id="faq">
          <Suspense fallback={null}>
            <FAQ />
          </Suspense>
        </LazyMount>
        <LazyMount id="contato">
          <Suspense fallback={null}>
            <FinalCTA />
          </Suspense>
        </LazyMount>
      </main>
      <LazyMount>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </LazyMount>
    </div>
  );
}
