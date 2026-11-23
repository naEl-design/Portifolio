import { useEffect, useRef, useState } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TIMELINE_ITEMS } from '../data/portfolioConfig';
import { Reveal, StaggerCard } from './Reveal';

export function ExperienceSection() {
  const { t } = useLanguage();
  const timelineRef = useRef<HTMLOListElement>(null);
  const [lineVisible, setLineVisible] = useState(false);

  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setLineVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setLineVisible(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      className="py-20 md:py-28 border-t border-slate-200 dark:border-emerald-900/40 bg-[#F8FAF9] dark:bg-[#0C1D15]/55"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className="text-sm font-semibold text-[#C2410C] dark:text-[#FB923C] mb-2">
                {t.experience.eyebrow}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
                {t.experience.heading}
              </h2>
              <p className="mt-4 text-sm text-slate-600 dark:text-emerald-100/75 leading-relaxed">
                {t.experience.helperPrefix}{' '}
                <code
                  dir="ltr"
                  className="font-mono text-xs text-[#15803D] dark:text-[#4ADE80]"
                >
                  src/data/portfolioConfig.ts
                </code>
                .
              </p>
            </div>

            {/* Progressive Vertical Timeline */}
            <div className="lg:col-span-8">
              <ol ref={timelineRef} className="relative ms-4 space-y-8">
                {/* Animated vertical timeline progress line */}
                <span
                  aria-hidden="true"
                  className={`absolute start-0 top-2 bottom-2 w-px bg-gradient-to-b from-[#EA580C]/60 via-emerald-600/45 to-emerald-700/15 origin-top transition-transform duration-700 ease-out ${
                    lineVisible ? 'scale-y-100' : 'scale-y-0'
                  }`}
                />

                {TIMELINE_ITEMS.map((item, idx) => {
                  const isEdu = item.type === 'Education';
                  const Icon = isEdu ? GraduationCap : Briefcase;
                  const localized = t.experience.items[idx] ?? {
                    typeLabel: item.type,
                    title: item.title,
                    organization: item.organization,
                    period: item.period,
                    description: item.description,
                  };

                  return (
                    <li key={item.id} className="ps-8 relative">
                      <span
                        aria-hidden="true"
                        style={{ transitionDelay: `${idx * 120}ms` }}
                        className={`absolute -start-4 top-2 w-8 h-8 rounded-full border bg-white dark:bg-[#06110C] flex items-center justify-center transition-all duration-500 ${
                          lineVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
                        } ${
                          isEdu
                            ? 'border-emerald-600/50 text-[#15803D] dark:text-[#4ADE80] shadow-[0_0_14px_rgba(22,163,74,0.28)]'
                            : 'border-orange-500/50 text-[#C2410C] dark:text-[#FB923C] shadow-[0_0_14px_rgba(234,88,12,0.28)]'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </span>

                      <StaggerCard
                        index={idx}
                        className="rounded-[20px] border border-slate-200 dark:border-emerald-900/50 bg-white dark:bg-[#06110C] p-6 transition-colors hover:border-[#EA580C]/60 dark:hover:border-[#FB923C]/60 hover:shadow-md"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <span
                            className={`text-xs font-semibold ${
                              isEdu
                                ? 'text-[#15803D] dark:text-[#4ADE80]'
                                : 'text-[#C2410C] dark:text-[#FB923C]'
                            }`}
                          >
                            {localized.typeLabel}
                          </span>
                          <span className="font-mono text-xs text-slate-500 dark:text-emerald-200/60 tabular-nums">
                            {localized.period}
                          </span>
                        </div>

                        <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                          {localized.title} —{' '}
                          <span className="font-medium text-slate-600 dark:text-emerald-100/80">
                            {localized.organization}
                          </span>
                        </h3>

                        <p className="mt-2.5 text-sm text-slate-600 dark:text-emerald-100/75 leading-relaxed">
                          {localized.description}
                        </p>
                      </StaggerCard>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
