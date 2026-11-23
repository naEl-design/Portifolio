import { AnchorHTMLAttributes, ReactNode, useRef, useState } from 'react';

interface MagneticLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  strength?: number;
}

/**
 * Subtle magnetic cursor pull on desktop fine-pointer devices.
 * Automatically degrades to standard link behavior on touch & reduced-motion.
 */
export function MagneticLink({
  children,
  className = '',
  strength = 0.22,
  ...props
}: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (
      !window.matchMedia('(pointer: fine)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);

    const maxShift = 6;
    const clampedX = Math.max(-maxShift, Math.min(maxShift, relX * strength));
    const clampedY = Math.max(-maxShift, Math.min(maxShift, relY * strength));

    setOffset({ x: clampedX, y: clampedY });
  };

  const resetOffset = () => {
    setOffset({ x: 0, y: 0 });
  };

  return (
    <a
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetOffset}
      onBlur={resetOffset}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
      }}
      className={`transition-transform duration-200 ease-out will-change-transform ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
