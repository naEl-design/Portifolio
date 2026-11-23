import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { DESIGN_PROCESS_STEPS } from '../data/portfolioConfig';
import { Reveal, StaggerCard } from './Reveal';

export function DesignProcessSection() {
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const activeConfigStep =
    DESIGN_PROCESS_STEPS[selectedIndex] ?? DESIGN_PROCESS_STEPS[0];
  const activeLocalizedStep = t.process.steps[selectedIndex] ?? {
    title: activeConfigStep.title,
    description: activeConfigStep.description,
    focus: '',
    output: '',
  };

  return (
    <section
      id="process"
      className="py-20 md:py-28 border-t border-slate-200 dark:border-emerald-900/40 bg-white dark:bg-[#06110C]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-8">
        <Reveal>
          <div className="max-w-2xl mb-10">
            <p className="text-sm font-semibold text-[#15803D] dark:text-[#4ADE80] mb-2">
              {t.process.eyebrow}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
              {t.process.heading}
            </h2>
          </div>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Horizontal connecting line on desktop */}
            <div
              aria-hidden="true"
              className="hidden lg:block absolute top-10 left-12 right-12 h-px bg-emerald-700/20 dark:bg-emerald-800/60 -z-10"
            />

            {DESIGN_PROCESS_STEPS.map((item, idx) => {
              const isOrangeStep = idx % 2 === 0;
              const isSelected = selectedIndex === idx;
              const localized = t.process.steps[idx] ?? {
                title: item.title,
                description: item.description,
                focus: '',
                output: '',
              };

              return (
                <StaggerCard key={item.step} index={idx}>
                  <button
                    type="button"
                    onClick={() => setSelectedIndex(idx)}
                    aria-pressed={isSelected}
                    className={`w-full h-full text-start rounded-[20px] border p-6 flex flex-col justify-between transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EA580C] ${
                      isSelected
                        ? 'border-[#EA580C] dark:border-[#FB923C] bg-orange-50/40 dark:bg-[#0C1D15] shadow-md'
                        : 'border-slate-200 dark:border-emerald-900/50 bg-[#F8FAF9] dark:bg-[#0C1D15] hover:border-[#EA580C]/60 dark:hover:border-[#FB923C]/60'
                    }`}
                  >
                    <div>
                      <div
                        className={`w-10 h-10 rounded-[12px] text-white font-mono text-xs font-semibold flex items-center justify-center mb-5 tabular-nums ${
                          isOrangeStep
                            ? 'bg-[#C2410C] dark:bg-[#EA580C]'
                            : 'bg-[#15803D] dark:bg-[#16A34A]'
                        }`}
                      >
                        {item.step}
                      </div>
                      <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                        {localized.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600 dark:text-emerald-100/75 leading-relaxed">
                        {localized.description}
                      </p>
                    </div>
                  </button>
                </StaggerCard>
              );
            })}
          </div>
        </Reveal>

        {/* Animated Selected Stage Detail Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeConfigStep.step}-${activeLocalizedStep.title}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22 }}
            className="rounded-[20px] border border-slate-200 dark:border-emerald-900/50 bg-[#F8FAF9] dark:bg-[#0C1D15] p-6 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div>
              <p className="text-xs font-mono text-[#C2410C] dark:text-[#FB923C]">
                {t.process.stepLabel} {activeConfigStep.step}
              </p>
              <p className="font-display text-lg font-bold text-slate-900 dark:text-white mt-1">
                {activeLocalizedStep.title}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500 dark:text-emerald-200/60">
                {t.process.focusLabel}
              </p>
              <p className="text-sm text-slate-700 dark:text-emerald-100/85 mt-1 leading-relaxed">
                {activeLocalizedStep.focus}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500 dark:text-emerald-200/60">
                {t.process.outputLabel}
              </p>
              <p className="text-sm font-medium text-[#15803D] dark:text-[#4ADE80] mt-1 leading-relaxed">
                {activeLocalizedStep.output}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
