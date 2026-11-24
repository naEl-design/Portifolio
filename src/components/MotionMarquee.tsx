import { Fragment } from 'react';
import { PERSONAL_INFO } from '../data/portfolioConfig';
import { useLanguage } from '../context/LanguageContext';

interface MotionMarqueeProps {
  reverse?: boolean;
}

/**
 * Seamless GPU-composited horizontal kinetic marquee ribbon.
 * Uses clean unboxed typography with typographic separators and pauses on hover.
 */
export function MotionMarquee({ reverse = false }: MotionMarqueeProps) {
  const { t, isRtl } = useLanguage();

  const items = [
    t.hero.title,
    'HTML · CSS · JavaScript',
    t.skills.uiuxCategory,
    t.skills.frontendCategory,
    PERSONAL_INFO.location,
    t.projects.eyebrow,
  ];

  const renderTrack = (copyIndex: number) => (
    <div
      key={copyIndex}
      aria-hidden={copyIndex === 1}
      className="flex items-center shrink-0 gap-7 pe-7"
    >
      {items.map((label, idx) => {
        const isOrange = idx % 2 === 0;
        return (
          <Fragment key={`${copyIndex}-${idx}`}>
            <span
              dir={isRtl ? 'rtl' : 'ltr'}
              className="font-display text-xs sm:text-sm font-semibold tracking-wide text-slate-700 dark:text-emerald-100/85 whitespace-nowrap"
            >
              {label}
            </span>
            <span
              aria-hidden="true"
              className={`text-sm font-bold select-none ${
                isOrange
                  ? 'text-[#C2410C] dark:text-[#FB923C]'
                  : 'text-[#15803D] dark:text-[#4ADE80]'
              }`}
            >
              ·
            </span>
          </Fragment>
        );
      })}
    </div>
  );

  return (
    <div
      aria-label="Core craft highlights"
      className="group relative overflow-hidden border-t border-slate-200 dark:border-emerald-900/40 bg-[#F8FAF9] dark:bg-[#081610] py-3.5 select-none"
      style={{
        maskImage:
          'linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)',
      }}
    >
      {/* Keep physical marquee track LTR so translate3d(-50%) loops seamlessly even in RTL pages */}
      <div
        dir="ltr"
        className={`flex w-max will-change-transform group-hover:[animation-play-state:paused] ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
      >
        {renderTrack(0)}
        {renderTrack(1)}
      </div>
    </div>
  );
}
