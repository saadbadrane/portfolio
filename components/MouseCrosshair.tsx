"use client";

import { useEffect, useRef } from "react";

/**
 * Halo lumineux orange -> violet qui suit la souris en douceur.
 * - Un grand halo flou (glow) en arriere-plan, faible opacite.
 * - Un petit point net au centre.
 * Le tout suit le curseur avec un effet de lerp (trainee douce).
 * Ne s'affiche pas sur mobile (gere par le wrapper).
 */
export default function MouseCrosshair() {
  const haloRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let mouseX = -200;
    let mouseY = -200;
    // Le point suit vite, le halo suit plus lentement (effet de trainee)
    let dotX = -200;
    let dotY = -200;
    let haloX = -200;
    let haloY = -200;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // point : reactif
      dotX += (mouseX - dotX) * 0.35;
      dotY += (mouseY - dotY) * 0.35;
      // halo : plus lent => trainee douce
      haloX += (mouseX - haloX) * 0.12;
      haloY += (mouseY - haloY) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%)`;
      }
      if (haloRef.current) {
        haloRef.current.style.transform = `translate(${haloX}px, ${haloY}px) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
      aria-hidden="true"
    >
      {/* Grand halo flou orange -> violet */}
      <div
        ref={haloRef}
        className="absolute top-0 left-0"
        style={{
          width: 180,
          height: 180,
          borderRadius: "9999px",
          background:
            "radial-gradient(circle, rgba(249,115,22,0.18) 0%, rgba(124,58,237,0.14) 45%, rgba(124,58,237,0) 70%)",
          filter: "blur(8px)",
          willChange: "transform",
        }}
      />

      {/* Petit point net au centre, lui aussi en degrade */}
      <div
        ref={dotRef}
        className="absolute top-0 left-0"
        style={{
          width: 10,
          height: 10,
          borderRadius: "9999px",
          background: "linear-gradient(135deg, #f97316, #7c3aed)",
          boxShadow: "0 0 8px rgba(249,115,22,0.6), 0 0 12px rgba(124,58,237,0.5)",
          willChange: "transform",
        }}
      />
    </div>
  );
}