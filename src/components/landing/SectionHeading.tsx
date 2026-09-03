import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  sub,
}: {
  eyebrow?: string;
  title: ReactNode;
  sub?: ReactNode;
}) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-4 inline-block rounded-full glass px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
          {eyebrow}
        </p>
      )}
      <h2 className="text-balance font-display text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {sub && (
        <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">{sub}</p>
      )}
    </Reveal>
  );
}
