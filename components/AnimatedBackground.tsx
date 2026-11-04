"use client";

import { useEffect, useRef, useCallback } from "react";

// Floating code symbols for a fullstack developer vibe
const CODE_SYMBOLS = [
  "</>", "{}", "//", "=>", "[]", "()", "&&", "||", "!=", "==",
  "import", "async", "const", "return", "export", "class",
  "#", "$", "@", "GET", "POST", "API", "SQL", "npm", "git",
];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  symbol: string;
  opacity: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  fadeDirection: number;
}

interface GridNode {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  phase: number;
  speed: number;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const gridNodesRef = useRef<GridNode[]>([]);
  const isDarkRef = useRef(true);
  const timeRef = useRef(0);

  const initParticles = useCallback((width: number, height: number) => {
    const count = Math.min(Math.floor((width * height) / 40000), 30);
    const particles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        symbol: CODE_SYMBOLS[Math.floor(Math.random() * CODE_SYMBOLS.length)],
        opacity: Math.random() * 0.3 + 0.05,
        size: Math.random() * 6 + 8,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.005,
        fadeDirection: Math.random() > 0.5 ? 1 : -1,
      });
    }
    particlesRef.current = particles;
  }, []);

  const initGrid = useCallback((width: number, height: number) => {
    const spacing = 120;
    const nodes: GridNode[] = [];
    for (let x = 0; x < width + spacing; x += spacing) {
      for (let y = 0; y < height + spacing; y += spacing) {
        nodes.push({
          x: x + (Math.random() - 0.5) * 20,
          y: y + (Math.random() - 0.5) * 20,
          baseX: x,
          baseY: y,
          phase: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.003 + 0.001,
        });
      }
    }
    gridNodesRef.current = nodes;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const checkDark = () => {
      isDarkRef.current = document.documentElement.classList.contains("dark");
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
      initParticles(window.innerWidth, window.innerHeight);
      initGrid(window.innerWidth, window.innerHeight);
    };

    const drawGrid = (time: number) => {
      const nodes = gridNodesRef.current;
      const dark = isDarkRef.current;

      // Update node positions with gentle oscillation
      for (const node of nodes) {
        node.x = node.baseX + Math.sin(time * node.speed + node.phase) * 8;
        node.y = node.baseY + Math.cos(time * node.speed * 0.7 + node.phase) * 8;
      }

      // Draw connections between nearby nodes
      const connectionDist = 150;
      ctx.lineWidth = 0.5;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.08;
            if (dark) {
              ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
            } else {
              ctx.strokeStyle = `rgba(79, 70, 229, ${alpha * 0.6})`;
            }
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw node dots
      for (const node of nodes) {
        const pulse = Math.sin(time * 0.002 + node.phase) * 0.5 + 0.5;
        const alpha = 0.03 + pulse * 0.05;
        if (dark) {
          ctx.fillStyle = `rgba(99, 102, 241, ${alpha})`;
        } else {
          ctx.fillStyle = `rgba(79, 70, 229, ${alpha * 0.5})`;
        }
        ctx.beginPath();
        ctx.arc(node.x, node.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const drawParticles = () => {
      const dark = isDarkRef.current;
      const w = window.innerWidth;
      const h = window.innerHeight;

      for (const p of particlesRef.current) {
        // Update position
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;

        // Fade in/out
        p.opacity += p.fadeDirection * 0.001;
        if (p.opacity > 0.35) {
          p.fadeDirection = -1;
        } else if (p.opacity < 0.03) {
          p.fadeDirection = 1;
          // Respawn anywhere on the page
          p.x = Math.random() * w;
          p.y = Math.random() * h;
          p.vx = (Math.random() - 0.5) * 0.4;
          p.vy = (Math.random() - 0.5) * 0.4;
          p.symbol = CODE_SYMBOLS[Math.floor(Math.random() * CODE_SYMBOLS.length)];
        }

        // Wrap around edges
        if (p.y < -30) p.y = h + 20;
        if (p.y > h + 30) p.y = -20;
        if (p.x < -30) p.x = w + 20;
        if (p.x > w + 30) p.x = -20;

        // Draw
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.font = `${p.size}px 'Geist Mono', monospace`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        if (dark) {
          ctx.fillStyle = `rgba(165, 180, 252, ${p.opacity})`;
        } else {
          ctx.fillStyle = `rgba(79, 70, 229, ${p.opacity * 0.5})`;
        }
        ctx.fillText(p.symbol, 0, 0);
        ctx.restore();
      }
    };

    const drawGradientOrbs = (time: number) => {
      const dark = isDarkRef.current;
      const w = window.innerWidth;
      const h = window.innerHeight;

      // Orb 1 — blue accent, top-right area
      const orb1X = w * 0.75 + Math.sin(time * 0.0005) * 100;
      const orb1Y = h * 0.25 + Math.cos(time * 0.0007) * 80;
      const grad1 = ctx.createRadialGradient(orb1X, orb1Y, 0, orb1X, orb1Y, 300);
      if (dark) {
        grad1.addColorStop(0, "rgba(59, 130, 246, 0.06)");
        grad1.addColorStop(1, "rgba(59, 130, 246, 0)");
      } else {
        grad1.addColorStop(0, "rgba(59, 130, 246, 0.04)");
        grad1.addColorStop(1, "rgba(59, 130, 246, 0)");
      }
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, w, h);

      // Orb 2 — cyan accent, bottom-left area
      const orb2X = w * 0.2 + Math.cos(time * 0.0004) * 120;
      const orb2Y = h * 0.7 + Math.sin(time * 0.0006) * 90;
      const grad2 = ctx.createRadialGradient(orb2X, orb2Y, 0, orb2X, orb2Y, 250);
      if (dark) {
        grad2.addColorStop(0, "rgba(6, 182, 212, 0.05)");
        grad2.addColorStop(1, "rgba(6, 182, 212, 0)");
      } else {
        grad2.addColorStop(0, "rgba(6, 182, 212, 0.03)");
        grad2.addColorStop(1, "rgba(6, 182, 212, 0)");
      }
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, w, h);

      // Orb 3 — indigo accent, center area
      const orb3X = w * 0.5 + Math.sin(time * 0.0003 + 2) * 80;
      const orb3Y = h * 0.45 + Math.cos(time * 0.0005 + 1) * 60;
      const grad3 = ctx.createRadialGradient(orb3X, orb3Y, 0, orb3X, orb3Y, 350);
      if (dark) {
        grad3.addColorStop(0, "rgba(99, 102, 241, 0.04)");
        grad3.addColorStop(1, "rgba(99, 102, 241, 0)");
      } else {
        grad3.addColorStop(0, "rgba(99, 102, 241, 0.025)");
        grad3.addColorStop(1, "rgba(99, 102, 241, 0)");
      }
      ctx.fillStyle = grad3;
      ctx.fillRect(0, 0, w, h);
    };

    const animate = () => {
      checkDark();
      timeRef.current++;
      const time = timeRef.current;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      drawGradientOrbs(time);
      drawGrid(time);
      drawParticles();

      animationRef.current = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener("resize", resize);

    // Watch for theme changes
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
      observer.disconnect();
    };
  }, [initParticles, initGrid]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-50 pointer-events-none"
      aria-hidden="true"
    />
  );
}
