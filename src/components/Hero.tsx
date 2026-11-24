import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  ArrowDownRight,
  Code2,
  Layers,
  MapPin,
  PenTool,
  Smartphone,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioConfig';
import { useLanguage } from '../context/LanguageContext';
import { MagneticLink } from './MagneticLink';

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Hero() {
  const { t } = useLanguage();
  const [imageFailed, setImageFailed] = useState(false);
  const showCustomPhoto = Boolean(PERSONAL_INFO.profilePhotoUrl) && !imageFailed;
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const visualParallaxY = useTransform(scrollYProgress, [0, 1], [0, 38]);
  const blobParallaxY = useTransform(scrollYProgress, [0, 1], [0, -45]);

  const pillarIcons = [PenTool, Code2, Smartphone];

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative overflow-hidden pt-14 pb-20 md:pt-24 md:pb-24 bg-white/70 dark:bg-[#06110C]/65"
    >
      {/* Seamless Drifting Grid Backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        style={{
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 35%, black 35%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 70% at 50% 35%, black 35%, transparent 100%)',
        }}
      >
        <div
          className="absolute -inset-[52px] opacity-[0.44] dark:opacity-[0.2] animate-grid-drift will-change-transform"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(21,128,61,0.13) 1px, transparent 1px), linear-gradient(to bottom, rgba(21,128,61,0.13) 1px, transparent 1px)',
            backgroundSize: '52px 52px',
          }}
        />
      </div>

      {/* Orbiting & Scroll-Parallax Ambient Glows */}
      <motion.div
        aria-hidden="true"
        style={{ y: blobParallaxY }}
        className="pointer-events-none absolute -top-28 right-0 w-[460px] h-[460px] -z-10"
      >
        <div className="w-full h-full rounded-full bg-[#EA580C]/12 dark:bg-[#EA580C]/18 blur-3xl animate-orbit-drift" />
      </motion.div>

      <motion.div
        aria-hidden="true"
        style={{ y: blobParallaxY }}
        className="pointer-events-none absolute bottom-0 -left-16 w-[380px] h-[380px] -z-10"
      >
        <div className="w-full h-full rounded-full bg-[#16A34A]/12 dark:bg-[#16A34A]/16 blur-3xl animate-ambient-pulse" />
      </motion.div>

      {/* Subtle Floating Ambient Motes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <span className="hidden md:block absolute top-24 left-[12%] w-1.5 h-1.5 rounded-full bg-[#EA580C]/45 animate-float-slow" />
        <span className="hidden md:block absolute top-40 right-[42%] w-1.5 h-1.5 rounded-full bg-[#16A34A]/45 animate-float-slow-reverse" />
        <span className="hidden md:block absolute bottom-28 left-[46%] w-1.5 h-1.5 rounded-full bg-[#16A34A]/35 animate-float-slow" />
        <span className="hidden md:block absolute top-64 left-[28%] w-1 h-1 rounded-full bg-[#FB923C]/50 animate-float-slow-reverse" />
        <span className="hidden md:block absolute bottom-44 right-[14%] w-1.5 h-1.5 rounded-full bg-[#4ADE80]/40 animate-orbit-drift" />
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Staggered Typography & Magnetic CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2.5">
              {/* Step 2: Location & Name Badge (0.18s) */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.18, ease: EASE_OUT }}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#15803D] dark:text-[#4ADE80]"
              >
                <span>{PERSONAL_INFO.name}</span>
                <span aria-hidden="true" className="text-slate-400 dark:text-emerald-700">
                  ·
                </span>
                <span className="inline-flex items-center gap-1 text-slate-600 dark:text-emerald-100/75 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#C2410C] dark:text-[#FB923C]" aria-hidden="true" />
                  {PERSONAL_INFO.location}
                </span>
              </motion.p>

              {/* Step 3: Professional Title (0.28s) */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.42, delay: 0.28, ease: EASE_OUT }}
                className="font-display text-lg sm:text-xl font-semibold text-slate-800 dark:text-white/90"
              >
                {t.hero.title}
              </motion.p>
            </div>

            {/* Step 4: Main Tagline H1 (0.38s) */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, delay: 0.38, ease: EASE_OUT }}
              className="font-display font-bold tracking-tight text-slate-900 dark:text-white text-balance leading-[1.08]"
              style={{ fontSize: 'clamp(2.25rem, 4.4vw, 3.65rem)' }}
            >
              {t.hero.tagline}
            </motion.h1>

            {/* Step 5: Supporting Description (0.5s) */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.5, ease: EASE_OUT }}
              className="text-base sm:text-lg text-slate-600 dark:text-emerald-100/75 leading-[1.7] max-w-[58ch]"
            >
              {t.hero.supportingText}
            </motion.p>

            {/* Step 6: Magnetic CTA Buttons (0.62s) */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.62, ease: EASE_OUT }}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
              <MagneticLink
                href="#projects"
                className="group relative overflow-hidden inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#C2410C] hover:bg-[#9A3412] dark:bg-[#EA580C] dark:hover:bg-[#C2410C] rounded-[12px] shadow-[0_8px_24px_-8px_rgba(234,88,12,0.5)] hover:shadow-[0_12px_28px_-6px_rgba(234,88,12,0.65)] hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EA580C]"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/25 to-transparent"
                />
                <span className="relative z-10">{t.hero.viewWork}</span>
                <ArrowDownRight
                  className="relative z-10 w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  aria-hidden="true"
                />
              </MagneticLink>

              <MagneticLink
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#15803D] dark:text-white bg-white dark:bg-[#0C1D15] border border-emerald-700/30 dark:border-emerald-700/70 hover:border-[#15803D] dark:hover:border-[#4ADE80] hover:-translate-y-0.5 rounded-[12px] shadow-xs hover:shadow-md transition-all duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#15803D]"
              >
                {t.hero.contactMe}
              </MagneticLink>
            </motion.div>
          </div>

          {/* Right Column: Scroll-Parallax Layered Profile Visual */}
          <motion.div
            style={{ y: visualParallaxY }}
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.42, ease: EASE_OUT }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[385px] aspect-square flex items-center justify-center">
              {/* Soft radial glow behind profile frame */}
              <div
                aria-hidden="true"
                className="absolute inset-6 rounded-full bg-gradient-to-tr from-[#EA580C]/20 via-transparent to-[#16A34A]/20 blur-2xl animate-ambient-pulse"
              />

              {/* Outer gradient border frame */}
              <div className="relative w-[84%] h-[84%] rounded-[20px] p-[1px] bg-gradient-to-br from-[#EA580C]/50 via-slate-200 dark:via-emerald-800/60 to-[#16A34A]/50 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.22)] dark:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.75)]">
                <div className="w-full h-full rounded-[19px] bg-white dark:bg-[#0C1D15] p-3.5 flex items-center justify-center relative">
                  {showCustomPhoto ? (
                    <img
                      src={PERSONAL_INFO.profilePhotoUrl}
                      alt={`Portrait of ${PERSONAL_INFO.name}`}
                      onError={() => setImageFailed(true)}
                      className="w-full h-full object-cover rounded-[12px]"
                    />
                  ) : (
                    <div
                      role="img"
                      aria-label={`${t.hero.photoPlaceholder} — ${PERSONAL_INFO.name}`}
                      className="w-full h-full rounded-[12px] bg-gradient-to-br from-orange-50 via-white to-emerald-50 dark:from-[#EA580C]/16 dark:via-[#08150F] dark:to-[#15803D]/22 border border-slate-200/80 dark:border-emerald-800/60 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden"
                    >
                      {/* Counter-rotating precision craft orbital rings around SN emblem */}
                      <div className="relative flex items-center justify-center mb-4">
                        <div
                          aria-hidden="true"
                          className="absolute -inset-4 rounded-full border border-dashed border-[#EA580C]/40 dark:border-[#FB923C]/40 animate-spin-slow"
                        />
                        <div
                          aria-hidden="true"
                          className="absolute -inset-7 rounded-full border border-dotted border-[#15803D]/30 dark:border-[#4ADE80]/30 animate-spin-reverse-slow"
                        />
                        <div className="relative w-28 h-28 rounded-full p-[2px] bg-gradient-to-br from-[#EA580C] to-[#16A34A] shadow-lg transition-transform duration-300 hover:scale-105">
                          <div className="w-full h-full rounded-full bg-gradient-to-br from-[#C2410C] to-[#15803D] flex items-center justify-center">
                            <span className="font-display text-3xl font-bold tracking-wider text-white select-none">
                              {PERSONAL_INFO.initials}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="font-display text-base font-semibold text-slate-900 dark:text-white">
                        {PERSONAL_INFO.name}
                      </p>
                      <p className="text-xs text-slate-600 dark:text-emerald-100/70 mt-0.5">
                        {t.hero.photoPlaceholder}
                      </p>
                    </div>
                  )}

                  {/* Floating UI Card: UI/UX Design (continuous GPU float + micro tilt) */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.58, ease: EASE_OUT }}
                    className="absolute -top-4 -start-4 sm:-start-6"
                  >
                    <div className="animate-float-slow rounded-[12px] border border-slate-200/90 dark:border-emerald-800/70 bg-white/95 dark:bg-[#0C1D15]/90 backdrop-blur-md px-3.5 py-2.5 shadow-lg flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-[8px] bg-orange-100 dark:bg-[#EA580C]/20 text-[#C2410C] dark:text-[#FB923C] flex items-center justify-center shrink-0">
                        <PenTool className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <div className="leading-tight">
                        <p className="text-xs font-semibold text-slate-900 dark:text-white whitespace-nowrap">
                          {t.hero.floatingUiTitle}
                        </p>
                        <p className="text-[11px] text-slate-500 dark:text-emerald-100/70 whitespace-nowrap">
                          {t.hero.floatingUiSub}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating UI Card: Frontend Code (continuous reverse GPU float + micro tilt) */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.68, ease: EASE_OUT }}
                    className="absolute -bottom-4 -end-3 sm:-end-6"
                  >
                    <div className="animate-float-slow-reverse rounded-[12px] border border-slate-200/90 dark:border-emerald-800/70 bg-white/95 dark:bg-[#0C1D15]/90 backdrop-blur-md px-3.5 py-2.5 shadow-lg flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-[8px] bg-emerald-100 dark:bg-[#16A34A]/20 text-[#15803D] dark:text-[#4ADE80] flex items-center justify-center shrink-0">
                        <Code2 className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <div className="leading-tight">
                        <p className="text-xs font-semibold text-slate-900 dark:text-white whitespace-nowrap">
                          {t.hero.floatingCodeTitle}
                        </p>
                        <p className="text-[11px] text-slate-500 dark:text-emerald-100/70 whitespace-nowrap">
                          {t.hero.floatingCodeSub}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Structural Depth Accent Icon */}
                  <motion.div
                    aria-hidden="true"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.64, ease: EASE_OUT }}
                    className="hidden sm:flex absolute top-6 -end-5 w-10 h-10 rounded-[12px] border border-slate-200/90 dark:border-emerald-800/70 bg-white/95 dark:bg-[#0C1D15]/90 backdrop-blur-md items-center justify-center text-[#15803D] dark:text-[#4ADE80] shadow-md animate-float-slow"
                  >
                    <Layers className="w-4 h-4" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Hero Focus Cards */}
        <div className="mt-14 pt-8 border-t border-slate-200 dark:border-emerald-900/40 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {t.hero.pillars.map((card, idx) => {
            const Icon = pillarIcons[idx] ?? PenTool;
            const isOrange = idx % 2 === 0;
            return (
              <div
                key={idx}
                style={{ animationDelay: `${idx * 0.65}s` }}
                className="animate-card-bob"
              >
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.42, delay: 0.68 + idx * 0.08, ease: EASE_OUT }}
                  className="h-full rounded-[12px] border border-slate-200 dark:border-emerald-900/50 bg-[#F8FAF9]/95 dark:bg-[#0C1D15]/90 p-4 flex items-start gap-3.5 transition-all duration-200 hover:-translate-y-1 hover:border-[#EA580C]/60 dark:hover:border-[#FB923C]/60 hover:shadow-md"
                >
                  <div
                    className={`w-9 h-9 rounded-[8px] flex items-center justify-center shrink-0 ${
                      isOrange
                        ? 'bg-orange-100 dark:bg-[#EA580C]/20 text-[#C2410C] dark:text-[#FB923C]'
                        : 'bg-emerald-100 dark:bg-[#16A34A]/20 text-[#15803D] dark:text-[#4ADE80]'
                    }`}
                  >
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-slate-900 dark:text-white">
                      {card.title}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-emerald-100/75 mt-0.5 leading-relaxed">
                      {card.detail}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
