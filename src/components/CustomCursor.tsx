import { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [pressed, setPressed] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointerQuery = window.matchMedia('(pointer: fine)');
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const evaluate = () => {
      setEnabled(finePointerQuery.matches && !reducedMotionQuery.matches);
    };

    evaluate();
    finePointerQuery.addEventListener('change', evaluate);
    reducedMotionQuery.addEventListener('change', evaluate);
    return () => {
      finePointerQuery.removeEventListener('change', evaluate);
      reducedMotionQuery.removeEventListener('change', evaluate);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let rafId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      const target = e.target as HTMLElement | null;
      const isInteractive = Boolean(
        target?.closest('a, button, [role="tab"], input, textarea, [data-cursor="expand"]')
      );
      setExpanded(isInteractive);
    };

    const handleMouseDown = () => setPressed(true);
    const handleMouseUp = () => setPressed(false);
    const handleMouseLeave = () => setVisible(false);

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.2;
      ringY += (mouseY - ringY) * 0.2;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      rafId = window.requestAnimationFrame(animateRing);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    rafId = window.requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.cancelAnimationFrame(rafId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 z-[70] pointer-events-none -ml-4 -mt-4 w-8 h-8 rounded-full border transition-[opacity,width,height,margin,border-color,background-color] duration-200 ease-out ${
          visible ? 'opacity-100' : 'opacity-0'
        } ${
          expanded
            ? 'w-11 h-11 -ml-[22px] -mt-[22px] border-[#EA580C]/70 dark:border-[#FB923C]/80 bg-[#EA580C]/8'
            : 'border-emerald-700/40 dark:border-emerald-300/35'
        } ${pressed ? 'scale-90' : 'scale-100'}`}
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 z-[70] pointer-events-none -ml-1 -mt-1 w-2 h-2 rounded-full bg-[#EA580C] dark:bg-[#FB923C] transition-opacity duration-150 ${
          visible ? 'opacity-90' : 'opacity-0'
        } ${expanded ? 'scale-75' : 'scale-100'}`}
      />
    </>
  );
}
