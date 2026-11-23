import { motion, useScroll, useSpring } from 'motion/react';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] pointer-events-none bg-transparent"
    >
      <motion.div
        style={{ scaleX }}
        className="h-full w-full origin-left rtl:origin-right bg-gradient-to-r from-[#EA580C] via-[#FB923C] to-[#16A34A]"
      />
    </div>
  );
}
