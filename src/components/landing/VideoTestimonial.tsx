import { useState } from "react";

export function VideoTestimonial({
  youtubeId,
  name,
  role,
  orientation = "vertical",
}: {
  youtubeId: string;
  name?: string;
  role?: string;
  orientation?: "vertical" | "horizontal";
}) {
  const [playing, setPlaying] = useState(false);
  const isVertical = orientation === "vertical";

  return (
    <div
      className={`relative mx-auto w-full max-w-sm overflow-hidden rounded-3xl glass-strong shadow-[0_0_60px_-25px_oklch(0.62_0.24_264/0.8)] ${
        isVertical ? "md:mx-0 md:w-[240px]" : "md:mx-0 md:w-[620px] md:max-w-none"
      }`}
    >
      <span className="absolute left-4 top-4 z-10 rounded-full glass px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-electric-bright">
        Feedback de Cliente
      </span>

      <div
        className={`relative w-full bg-surface-1 ${isVertical ? "aspect-[9/16]" : "aspect-video"}`}
      >
        {playing ? (
          <iframe
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&playsinline=1`}
            title={name ? `Feedback de ${name}` : "Feedback de cliente"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <>
            <img
              src={`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
              alt={name ? `Prévia do vídeo de ${name}` : "Prévia do vídeo"}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <button
              type="button"
              onClick={() => setPlaying(true)}
              aria-label="Reproduzir vídeo"
              className="group absolute inset-0 flex items-center justify-center bg-black/25 transition-colors hover:bg-black/35"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-electric text-primary-foreground shadow-[0_0_40px_0_oklch(0.62_0.24_264/0.8)] transition-transform group-hover:scale-105">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          </>
        )}
      </div>

      {(name || role) && (
        <div className="px-5 py-4">
          {name && <p className="font-display text-sm font-semibold">{name}</p>}
          {role && <p className="text-xs text-muted-foreground">{role}</p>}
        </div>
      )}
    </div>
  );
}
