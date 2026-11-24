import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  isOrange: boolean;
  alpha: number;
}

/**
 * Full-viewport subtle animated background combining drifting radial color orbs
 * and a lightweight geometric particle constellation on <canvas>.
 * Automatically pauses when tab is hidden or prefers-reduced-motion is enabled.
 */
export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotionQuery.matches) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    const particleCount = width < 768 ? 16 : 30;
    const particles: Particle[] = Array.from({ length: particleCount }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.38,
      vy: (Math.random() - 0.5) * 0.34,
      radius: 1.4 + Math.random() * 1.8,
      isOrange: i % 2 === 0,
      alpha: 0.28 + Math.random() * 0.35,
    }));

    const maxDist = width < 768 ? 110 : 145;

    const render = () => {
      if (document.hidden || reducedMotionQuery.matches) {
        rafId = window.requestAnimationFrame(render);
        return;
      }

      const isDark = document.documentElement.classList.contains('dark');
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -10) p.x = width + 10;
        else if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        else if (p.y > height + 10) p.y = -10;

        // Draw subtle connecting lines between nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.hypot(dx, dy);
          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * (isDark ? 0.14 : 0.1);
            ctx.strokeStyle = p.isOrange
              ? `rgba(234, 88, 12, ${lineAlpha})`
              : `rgba(22, 163, 74, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }

        // Draw floating particle dot
        const dotAlpha = isDark ? p.alpha : p.alpha * 0.72;
        ctx.fillStyle = p.isOrange
          ? `rgba(251, 146, 60, ${dotAlpha})`
          : `rgba(74, 222, 128, ${dotAlpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      rafId = window.requestAnimationFrame(render);
    };

    rafId = window.requestAnimationFrame(render);
    window.addEventListener('resize', resize, { passive: true });

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Drifting ambient orange & green gradient spheres */}
      <div className="absolute -top-32 -start-24 w-[480px] h-[480px] rounded-full bg-[#EA580C]/10 dark:bg-[#EA580C]/14 blur-3xl animate-orbit-drift" />
      <div className="absolute top-[38%] -end-28 w-[440px] h-[440px] rounded-full bg-[#16A34A]/10 dark:bg-[#16A34A]/14 blur-3xl animate-orbit-drift-reverse" />
      <div className="absolute -bottom-32 start-[25%] w-[420px] h-[420px] rounded-full bg-[#EA580C]/8 dark:bg-[#16A34A]/12 blur-3xl animate-ambient-pulse" />

      {/* Subtle moving geometric particle network */}
      <canvas ref={canvasRef} className="block w-full h-full opacity-90" />
    </div>
  );
}
