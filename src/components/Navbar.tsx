import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioConfig';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

interface NavbarProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

const SECTION_MAP: Record<string, string> = {
  home: '#home',
  about: '#about',
  skills: '#about',
  services: '#services',
  projects: '#projects',
  experience: '#experience',
  process: '#experience',
  contact: '#contact',
};

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('#home');

  const navLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.contact, href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = Object.keys(SECTION_MAP);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const topId = visible[0].target.id;
          const mapped = SECTION_MAP[topId];
          if (mapped) {
            setActiveHref(mapped);
          }
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.35, 0.6],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-white/90 dark:bg-[#06110C]/80 backdrop-blur-xl border-slate-200/80 dark:border-emerald-900/50 shadow-[0_6px_28px_-12px_rgba(0,0,0,0.18)] dark:shadow-[0_8px_32px_-12px_rgba(0,0,0,0.65)]'
          : 'bg-transparent backdrop-blur-none border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-6">
        {/* Left: Brand Logo */}
        <a
          href="#home"
          className="font-display text-lg font-bold tracking-tight text-slate-900 dark:text-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EA580C] rounded-[8px]"
        >
          <span>NAEL</span>
          <span className="text-[#C2410C] dark:text-[#FB923C]">.dev</span>
        </a>

        {/* Center: Desktop Navigation with Active Section Indicator */}
        <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeHref === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-1.5 text-sm font-medium transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EA580C] rounded-[8px] ${
                  isActive
                    ? 'text-[#C2410C] dark:text-[#FB923C]'
                    : 'text-slate-600 dark:text-emerald-100/75 hover:text-[#15803D] dark:hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="activeNavUnderline"
                    transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                    className="absolute left-0 right-0 bottom-0 h-[2px] rounded-full bg-[#EA580C] dark:bg-[#FB923C] shadow-[0_0_8px_rgba(234,88,12,0.45)]"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Language Switcher, Theme Switcher & Mobile Menu Toggle */}
        <div className="flex items-center gap-2 shrink-0">
          <LanguageSwitcher />

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="inline-flex items-center justify-center w-10 h-10 rounded-[12px] border border-slate-200 dark:border-emerald-900/60 bg-white/80 dark:bg-[#0C1D15]/80 text-slate-700 dark:text-emerald-100 hover:border-[#EA580C] dark:hover:border-[#FB923C] hover:text-[#C2410C] dark:hover:text-[#FB923C] transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EA580C]"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ opacity: 0, rotate: -35, scale: 0.75 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 35, scale: 0.75 }}
                transition={{ duration: 0.18 }}
                className="flex items-center justify-center"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4" aria-hidden="true" />
                ) : (
                  <Moon className="w-4 h-4" aria-hidden="true" />
                )}
              </motion.span>
            </AnimatePresence>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-[12px] border border-slate-200 dark:border-emerald-900/60 bg-white/80 dark:bg-[#0C1D15]/80 text-slate-800 dark:text-white hover:border-[#EA580C] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EA580C]"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileMenuOpen ? 'close' : 'open'}
                initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
                transition={{ duration: 0.16 }}
                className="flex items-center justify-center"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" aria-hidden="true" />
                ) : (
                  <Menu className="w-5 h-5" aria-hidden="true" />
                )}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-navigation"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out border-t ${
          mobileMenuOpen
            ? 'max-h-96 opacity-100 border-slate-200 dark:border-emerald-900/50 bg-white/95 dark:bg-[#0C1D15]/95 backdrop-blur-xl'
            : 'max-h-0 opacity-0 border-transparent pointer-events-none'
        }`}
      >
        <nav aria-label="Mobile Navigation" className="px-5 py-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = activeHref === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2.5 px-3 rounded-[8px] text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-[#C2410C] dark:text-[#FB923C] bg-orange-50/70 dark:bg-[#EA580C]/12'
                    : 'text-slate-700 dark:text-emerald-100/80 hover:text-[#C2410C] dark:hover:text-[#FB923C] hover:bg-orange-50 dark:hover:bg-emerald-950/60'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <p className="mt-2 pt-2 px-3 border-t border-slate-200 dark:border-emerald-900/50 text-xs text-slate-500 dark:text-emerald-200/60">
            {PERSONAL_INFO.name} · {PERSONAL_INFO.location}
          </p>
        </nav>
      </div>
    </motion.header>
  );
}
