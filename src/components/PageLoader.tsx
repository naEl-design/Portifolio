import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

interface PageLoaderProps {
  reduceMotion?: boolean;
}

/**
 * Brief, non-blocking initial brand loading splash (skipped in reduced-motion).
 */
export function PageLoader({ reduceMotion = false }: PageLoaderProps) {
  const [visible, setVisible] = useState(() => {
    if (reduceMotion) return false;
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return false;
    }
    return true;
  });

  useEffect(() => {
    if (!visible) return;
    const timer = window.setTimeout(() => setVisible(false), 450);
    return () => window.clearTimeout(timer);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-[#06110C]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.24 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              <span>NAEL</span>
              <span className="text-[#EA580C]">.dev</span>
            </div>
            <div className="w-28 h-1 rounded-full bg-slate-200 dark:bg-emerald-950 overflow-hidden">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className="w-full h-full bg-gradient-to-r from-[#EA580C] to-[#16A34A]"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
