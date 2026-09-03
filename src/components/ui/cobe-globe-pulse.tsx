"use client";

import { useEffect, useRef, useCallback } from "react";
import createGlobe from "cobe";

interface PulseMarker {
  id: string;
  location: [number, number];
  delay: number;
  label?: string;
}

interface GlobePulseProps {
  markers?: PulseMarker[];
  className?: string;
  speed?: number;
  /** Initial phi (longitude) rotation in radians. Negative rotates west. */
  initialPhi?: number;
  /** Initial theta (latitude tilt) in radians. */
  initialTheta?: number;
}

const defaultMarkers: PulseMarker[] = [{ id: "pulse-1", location: [51.51, -0.13], delay: 0 }];

export function GlobePulse({
  markers = defaultMarkers,
  className = "",
  speed = 0.003,
  initialPhi = 0,
  initialTheta = 0.2,
}: GlobePulseProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointerInteracting = useRef<{ x: number; y: number } | null>(null);
  const dragOffset = useRef({ phi: 0, theta: 0 });
  const phiOffsetRef = useRef(0);
  const thetaOffsetRef = useRef(0);
  const isPausedRef = useRef(false);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    pointerInteracting.current = { x: e.clientX, y: e.clientY };
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
    isPausedRef.current = true;
  }, []);

  const handlePointerUp = useCallback(() => {
    if (pointerInteracting.current !== null) {
      phiOffsetRef.current += dragOffset.current.phi;
      thetaOffsetRef.current += dragOffset.current.theta;
      dragOffset.current = { phi: 0, theta: 0 };
    }
    pointerInteracting.current = null;
    if (canvasRef.current) canvasRef.current.style.cursor = "grab";
    isPausedRef.current = false;
  }, []);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (pointerInteracting.current !== null) {
        dragOffset.current = {
          phi: (e.clientX - pointerInteracting.current.x) / 300,
          theta: (e.clientY - pointerInteracting.current.y) / 1000,
        };
      }
    };
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [handlePointerUp]);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    let globe: ReturnType<typeof createGlobe> | null = null;
    let animationId: number;
    let phi = initialPhi;

    function init() {
      const width = canvas.offsetWidth;
      if (width === 0 || globe) return;

      globe = createGlobe(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width: width * 2,
        height: width * 2,
        phi: initialPhi,
        theta: initialTheta,
        dark: 1,
        diffuse: 1.5,
        mapSamples: 16000,
        mapBrightness: 8,
        baseColor: [0.35, 0.4, 0.55],
        markerColor: [0.31, 0.45, 1],
        glowColor: [0.1, 0.2, 0.5],
        markers: markers.map((m) => ({ location: m.location, size: 0.04 })),
        opacity: 0.95,
      });

      function animate() {
        if (!isPausedRef.current) phi += speed;
        globe!.update({
          phi: phi + phiOffsetRef.current + dragOffset.current.phi,
          theta: initialTheta + thetaOffsetRef.current + dragOffset.current.theta,
        });
        animationId = requestAnimationFrame(animate);
      }
      animate();
      setTimeout(() => canvas && (canvas.style.opacity = "1"));
    }

    if (canvas.offsetWidth > 0) {
      init();
    } else {
      const ro = new ResizeObserver((entries) => {
        if (entries[0]?.contentRect.width > 0) {
          ro.disconnect();
          init();
        }
      });
      ro.observe(canvas);
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      if (globe) globe.destroy();
    };
  }, [markers, speed, initialPhi, initialTheta]);

  return (
    <div className={`relative aspect-square w-full ${className}`}>
      <style>{`
        @keyframes pulse-expand {
          0% { transform: scale(0.3); opacity: 0.8; }
          100% { transform: scale(1.8); opacity: 0; }
        }
      `}</style>
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        style={{
          width: "100%",
          height: "100%",
          cursor: "grab",
          opacity: 0,
          transition: "opacity 1s ease",
          contain: "layout paint size",
        }}
      />
    </div>
  );
}
