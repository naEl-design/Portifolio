import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import {
  Braces,
  Code2,
  Eye,
  Figma,
  FileCode2,
  GraduationCap,
  Layers,
  Layout,
  MapPin,
  Palette,
  Smartphone,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Reveal, StaggerCard } from './Reveal';
import { TiltCard } from './TiltCard';

const SKILL_ICONS = [
  FileCode2,
  Palette,
  Braces,
  Figma,
  Smartphone,
  Eye,
  Layout,
  Layers,
];

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
      className="py-20 md:py-28 border-t border-slate-200 dark:border-emerald-900/40 bg-[#F8FAF9]/80 dark:bg-[#0C1D15]/45"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-12">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Background & Academic Foundation Narrative */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <p className="text-sm font-semibold text-[#C2410C] dark:text-[#FB923C] mb-2">
                  {t.experience.eyebrow}
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
                  {t.experience.heading}
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-emerald-100/75 leading-[1.75]">
                {t.experience.paragraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Core Academic Study Focuses (Clean unboxed typographic metadata) */}
              <div className="pt-4 border-t border-slate-200 dark:border-emerald-900/50">
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-medium text-[#15803D] dark:text-[#4ADE80]">
                  {t.experience.academicPillars.map((pillar, idx) => (
                    <span key={pillar} className="inline-flex items-center gap-2.5">
                      <span>{pillar}</span>
                      {idx < t.experience.academicPillars.length - 1 && (
                        <span
                          aria-hidden="true"
                          className="text-slate-300 dark:text-emerald-800"
                        >
                          ·
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Progressive Timeline (Academic Foundation + Frontend Skills) */}
            <div className="lg:col-span-7">
              <ol ref={timelineRef} className="relative ms-4 space-y-8">
                {/* Animated vertical timeline progress line + traveling vertical beam */}
                <span
                  aria-hidden="true"
                  className={`absolute start-0 top-2 bottom-2 w-px overflow-hidden bg-gradient-to-b from-[#EA580C]/60 via-emerald-600/45 to-emerald-700/15 origin-top transition-transform duration-700 ease-out ${
                    lineVisible ? 'scale-y-100' : 'scale-y-0'
                  }`}
                >
                  <motion.span
                    animate={{ y: ['-25%', '420%'] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
                    className="block w-full h-1/4 bg-gradient-to-b from-transparent via-[#EA580C] dark:via-[#FB923C] to-transparent"
                  />
                </span>

                {/* Node 1: Academic Foundation */}
                <li className="ps-8 relative">
                  <span
                    aria-hidden="true"
                    className={`absolute -start-4 top-2 w-8 h-8 rounded-full border bg-white dark:bg-[#06110C] flex items-center justify-center transition-all duration-500 border-emerald-600/50 text-[#15803D] dark:text-[#4ADE80] shadow-[0_0_14px_rgba(22,163,74,0.28)] ${
                      lineVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
                    }`}
                  >
                    <GraduationCap className="w-4 h-4" />
                  </span>

                  <StaggerCard index={0}>
                    <TiltCard maxTilt={3.5}>
                      <div className="rounded-[20px] border border-slate-200 dark:border-emerald-900/50 bg-white/95 dark:bg-[#06110C]/95 p-6 sm:p-7 transition-colors hover:border-[#15803D]/60 dark:hover:border-[#4ADE80]/60 hover:shadow-md">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <span className="text-xs font-semibold text-[#15803D] dark:text-[#4ADE80]">
                            {t.experience.academicHeading}
                          </span>
                          <span className="inline-flex items-center gap-1 font-mono text-xs text-slate-500 dark:text-emerald-200/70 tabular-nums">
                            <MapPin
                              className="w-3.5 h-3.5 text-[#C2410C] dark:text-[#FB923C]"
                              aria-hidden="true"
                            />
                            {t.experience.locationLabel}
                          </span>
                        </div>

                        <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                          {t.experience.schoolName}
                        </h3>

                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-200 dark:border-emerald-900/50">
                          <div className="rounded-[12px] border border-slate-200 dark:border-emerald-900/50 bg-[#F8FAF9] dark:bg-[#0C1D15] px-4 py-3">
                            <p className="text-sm font-semibold text-slate-900 dark:text-white">
                              {t.experience.tradeLabel}
                            </p>
                          </div>
                          <div className="rounded-[12px] border border-slate-200 dark:border-emerald-900/50 bg-[#F8FAF9] dark:bg-[#0C1D15] px-4 py-3">
                            <p className="font-mono text-sm font-semibold text-[#C2410C] dark:text-[#FB923C] tabular-nums">
                              {t.experience.levelLabel}
                            </p>
                          </div>
                        </div>
                      </div>
                    </TiltCard>
                  </StaggerCard>
                </li>

                {/* Node 2: Frontend Skills Overview */}
                <li className="ps-8 relative">
                  <span
                    aria-hidden="true"
                    style={{ transitionDelay: '120ms' }}
                    className={`absolute -start-4 top-2 w-8 h-8 rounded-full border bg-white dark:bg-[#06110C] flex items-center justify-center transition-all duration-500 border-orange-500/50 text-[#C2410C] dark:text-[#FB923C] shadow-[0_0_14px_rgba(234,88,12,0.28)] ${
                      lineVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
                    }`}
                  >
                    <Code2 className="w-4 h-4" />
                  </span>

                  <StaggerCard index={1}>
                    <div className="rounded-[20px] border border-slate-200 dark:border-emerald-900/50 bg-white/95 dark:bg-[#06110C]/95 p-6 sm:p-7">
                      <div className="flex items-center justify-between gap-2 mb-5">
                        <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                          {t.experience.skillsHeading}
                        </h3>
                        <span className="font-mono text-xs text-[#C2410C] dark:text-[#FB923C] tabular-nums">
                          0{t.experience.frontendSkills.length}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {t.experience.frontendSkills.map((skill, idx) => {
                          const Icon = SKILL_ICONS[idx] ?? Code2;
                          const isOrange = idx % 2 === 0;
                          return (
                            <div
                              key={skill.name}
                              style={{ animationDelay: `${idx * 0.35}s` }}
                              className="animate-card-bob"
                            >
                              <div className="group h-full rounded-[12px] border border-slate-200 dark:border-emerald-900/50 bg-[#F8FAF9] dark:bg-[#0C1D15] p-3.5 flex items-start gap-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#EA580C]/70 dark:hover:border-[#FB923C]/70 hover:shadow-sm">
                                <div
                                  className={`w-8 h-8 rounded-[8px] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110 ${
                                    isOrange
                                      ? 'bg-orange-100 dark:bg-[#EA580C]/20 text-[#C2410C] dark:text-[#FB923C]'
                                      : 'bg-emerald-100 dark:bg-[#16A34A]/20 text-[#15803D] dark:text-[#4ADE80]'
                                  }`}
                                >
                                  <Icon className="w-4 h-4" aria-hidden="true" />
                                </div>
                                <div className="min-w-0">
                                  <p className="font-display text-sm font-semibold text-slate-900 dark:text-white">
                                    {skill.name}
                                  </p>
                                  <p className="text-xs text-slate-600 dark:text-emerald-100/75 mt-0.5 leading-relaxed">
                                    {skill.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </StaggerCard>
                </li>
              </ol>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
