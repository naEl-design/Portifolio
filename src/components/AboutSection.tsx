import { motion } from 'motion/react';
import {
  ArrowDown,
  Code,
  Compass,
  Eye,
  Figma,
  Layout,
  Layers,
  Search,
  Sparkles,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioConfig';
import { useLanguage } from '../context/LanguageContext';
import { Reveal, StaggerCard } from './Reveal';
import { TiltCard } from './TiltCard';

const CARD_ICONS = [Eye, Code, Layers, Compass];
const PIPELINE_ICONS = [Search, Layout, Figma, Code];

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="py-20 md:py-28 border-t border-slate-200 dark:border-emerald-900/40 bg-[#F8FAF9]/80 dark:bg-[#0C1D15]/45"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-12">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Biography */}
            <div className="lg:col-span-7 space-y-5">
              <p className="text-sm font-semibold text-[#C2410C] dark:text-[#FB923C]">
                {t.about.eyebrow}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
                {t.about.heading}
              </h2>

              <div className="space-y-4 text-base text-slate-600 dark:text-emerald-100/75 leading-[1.75]">
                {t.about.paragraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-emerald-900/50 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-xs font-medium text-slate-500 dark:text-emerald-200/60">
                    {t.about.focusLabel}
                  </p>
                  <p className="font-medium text-slate-900 dark:text-white mt-0.5">
                    {t.about.focusValue}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 dark:text-emerald-200/60">
                    {t.about.basedInLabel}
                  </p>
                  <p className="font-medium text-slate-900 dark:text-white mt-0.5">
                    {PERSONAL_INFO.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Layered Research -> Wireframe -> Prototype -> Development Composition */}
            <div className="lg:col-span-5">
              <TiltCard maxTilt={4}>
                <div className="rounded-[20px] border border-slate-200 dark:border-emerald-900/50 bg-white/95 dark:bg-[#06110C]/95 p-6 space-y-4 shadow-sm">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-emerald-200/60 pb-1">
                    <span>{t.about.wireframeTitle}</span>
                    <span className="text-[#15803D] dark:text-[#4ADE80] font-medium">
                      {t.about.uiPlusCode}
                    </span>
                  </div>

                  {/* Sequential 4-stage visual cards with live flowing connectors */}
                  <div className="space-y-1.5">
                    {t.about.pipeline.map((stageLabel, idx) => {
                      const StageIcon = PIPELINE_ICONS[idx] ?? Search;
                      const isOrange = idx % 2 === 0;
                      return (
                        <div key={idx}>
                          <StaggerCard
                            index={idx}
                            className="group rounded-[12px] border border-slate-200 dark:border-emerald-900/50 bg-[#F8FAF9] dark:bg-[#0C1D15] px-4 py-3 flex items-center justify-between gap-3 hover:border-[#EA580C]/60 dark:hover:border-[#FB923C]/60 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-8 h-8 rounded-[8px] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110 ${
                                  isOrange
                                    ? 'bg-orange-100 dark:bg-[#EA580C]/20 text-[#C2410C] dark:text-[#FB923C]'
                                    : 'bg-emerald-100 dark:bg-[#16A34A]/20 text-[#15803D] dark:text-[#4ADE80]'
                                }`}
                              >
                                <StageIcon className="w-4 h-4" aria-hidden="true" />
                              </div>
                              <span className="font-display text-sm font-semibold text-slate-900 dark:text-white">
                                {stageLabel}
                              </span>
                            </div>
                            <span className="font-mono text-[11px] text-slate-400 dark:text-emerald-200/50 tabular-nums">
                              0{idx + 1}
                            </span>
                          </StaggerCard>
                          {idx < t.about.pipeline.length - 1 && (
                            <div
                              aria-hidden="true"
                              className="flex justify-center py-0.5"
                            >
                              <motion.div
                                animate={{ y: [0, 3, 0], opacity: [0.45, 1, 0.45] }}
                                transition={{
                                  duration: 1.6,
                                  repeat: Infinity,
                                  delay: idx * 0.45,
                                  ease: 'easeInOut',
                                }}
                                className={
                                  isOrange
                                    ? 'text-[#EA580C]/70 dark:text-[#FB923C]/75'
                                    : 'text-[#15803D]/70 dark:text-[#4ADE80]/75'
                                }
                              >
                                <ArrowDown className="w-3.5 h-3.5" />
                              </motion.div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Clean HTML / CSS / JS Representation with subtle blinking terminal caret */}
                  <div
                    dir="ltr"
                    className="rounded-[12px] border border-slate-200 dark:border-emerald-900/50 bg-[#F8FAF9] dark:bg-[#0C1D15] p-3.5 space-y-1.5 font-mono text-xs text-slate-700 dark:text-emerald-100/80 text-left"
                  >
                    <div className="flex items-center gap-2 font-sans font-medium text-[#15803D] dark:text-[#4ADE80] mb-1">
                      <Code className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{t.about.codeSnippetTitle}</span>
                    </div>
                    <p>
                      <span className="text-[#C2410C] dark:text-[#FB923C]">const</span> ui ={' '}
                      <span className="text-[#15803D] dark:text-[#4ADE80]">&apos;Responsive &amp; Clear&apos;</span>;
                      <span
                        aria-hidden="true"
                        className="inline-block w-1.5 h-3.5 ms-1 align-middle bg-[#EA580C] dark:bg-[#FB923C] animate-caret-blink"
                      />
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-emerald-100/75">
                    <Sparkles className="w-4 h-4 text-[#C2410C] dark:text-[#FB923C]" aria-hidden="true" />
                    <span>{t.about.codeReadyText}</span>
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        </Reveal>

        {/* 4 Floating Moving Core Craft Principle Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.about.cards.map((card, index) => {
            const Icon = CARD_ICONS[index] ?? Eye;
            const isOrange = index % 2 === 0;
            return (
              <div
                key={index}
                style={{ animationDelay: `${index * 0.6}s` }}
                className="animate-card-bob"
              >
                <StaggerCard
                  index={index}
                  className="group h-full rounded-[20px] border border-slate-200 dark:border-emerald-900/50 bg-white/95 dark:bg-[#06110C]/90 p-5 transition-colors hover:border-[#EA580C]/70 dark:hover:border-[#FB923C]/70 hover:shadow-md"
                >
                  <div
                    className={`w-10 h-10 rounded-[12px] flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-105 group-hover:-translate-y-0.5 ${
                      isOrange
                        ? 'bg-orange-100 dark:bg-[#EA580C]/20 text-[#C2410C] dark:text-[#FB923C]'
                        : 'bg-emerald-100 dark:bg-[#16A34A]/20 text-[#15803D] dark:text-[#4ADE80]'
                    }`}
                  >
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
                    {card.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-600 dark:text-emerald-100/75 leading-relaxed">
                    {card.description}
                  </p>
                </StaggerCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
