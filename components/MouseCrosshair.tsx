"use client";

import { useEffect, useRef, useState } from "react";

const BOX_SIZE = 40; 
const HALF = BOX_SIZE / 2;

export default function DevCrosshair() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  // We use state for the label to ensure React handles the text updates smoothly
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId: number;
    let mouseX = -200;
    let mouseY = -200;
    let currentX = -200;
    let currentY = -200;
    const lerp = 0.15;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * lerp;
      currentY += (mouseY - currentY) * lerp;

      if (wrapperRef.current) {
        wrapperRef.current.style.setProperty("--cx", `${currentX}px`);
        wrapperRef.current.style.setProperty("--cy", `${currentY}px`);
        // Update state for the dev-tools label
        setCoords({ x: Math.round(currentX), y: Math.round(currentY) });
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

  const lineColor = "rgba(99, 102, 241, 0.15)";
  const braceColor = "rgba(21, 93, 252, 0.8)"; // Blue braces
  const coordColor = "rgba(255, 255, 255, 0.9)"; // White coordinates

  return (
    <div
      ref={wrapperRef}
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden font-mono text-[10px]"
      aria-hidden="true"
    >
      {/* ── Vertical Guide (X-Axis) ── */}
      <div
        className="absolute left-0 top-0 w-px h-full"
        style={{
          transform: "translateX(var(--cx, -200px))",
          background: `linear-gradient(to bottom, transparent, ${lineColor}, transparent)`,
        }}
      />

      {/* ── Horizontal Guide (Y-Axis) ── */}
      <div
        className="absolute top-0 left-0 h-px w-full"
        style={{
          transform: "translateY(var(--cy, -200px))",
          background: `linear-gradient(to right, transparent, ${lineColor}, transparent)`,
        }}
      />

      {/* ── The "Dev" Center Box ── */}
      <div
        className="absolute flex items-center justify-center"
        style={{
          width: BOX_SIZE,
          height: BOX_SIZE,
          left: `calc(var(--cx, -200px) - ${HALF}px)`,
          top: `calc(var(--cy, -200px) - ${HALF}px)`,
        }}
      >
        {/* Code Braces instead of camera corners */}
        <div className="absolute top-0 left-0 text-lg leading-none" style={{ color: braceColor }}>{"{"}</div>
        <div className="absolute bottom-0 right-0 text-lg leading-none" style={{ color: braceColor }}>{"}"}</div>

        {/* Center Pixel Dot */}
        <div className="w-1 h-1 rounded-full" style={{ backgroundColor: braceColor }} />

        {/* Real-time Coordinate Label (Floating Dev Tools) */}
        <div 
          className="absolute top-full left-full mt-2 ml-2 px-1.5 py-0.5 border flex flex-col gap-0.5 backdrop-blur-sm"
          style={{ 
            borderColor: braceColor, 
            backgroundColor: "rgba(0,0,0,0.6)",
            color: coordColor 
          }}
        >
          <div className="flex justify-between gap-4">
            <span>X: {coords.x}px</span>
            
          </div>
          <div className="flex justify-between gap-4">
            <span>Y: {coords.y}px</span>
          </div>
        </div>
      </div>
    </div>
  );
}   