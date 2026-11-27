import { useEffect, useState } from 'react';
import { motion, MotionConfig } from 'motion/react';
import { LanguageProvider } from './context/LanguageContext';
import { AnimatedBackground } from './components/AnimatedBackground';
import { ScrollProgress } from './components/ScrollProgress';
import { CustomCursor } from './components/CustomCursor';
import { PageLoader } from './components/PageLoader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MotionMarquee } from './components/MotionMarquee';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { DesignProcessSection } from './components/DesignProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LearningNotesSection } from './components/LearningNotesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { NotFoundPage } from './components/NotFoundPage';

type ThemeMode = 'dark' | 'light';

const THEME_STORAGE_KEY = 'nael_theme';
const REDUCE_MOTION_STORAGE_KEY = 'nael_reduce_motion';

function getInitialTheme(): ThemeMode {
  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') {
      return saved;
    }
    if (
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: light)').matches
    ) {
      return 'light';
    }
  } catch {
    // Ignore storage access errors
  }
  return 'dark';
}

function getInitialReduceMotion(): boolean {
  try {
    const saved = localStorage.getItem(REDUCE_MOTION_STORAGE_KEY);
    if (saved === 'true') return true;
    if (saved === 'false') return false;
    if (
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return true;
    }
  } catch {
    // Ignore storage access errors
  }
  return false;
}

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);
  const [reduceMotion, setReduceMotion] = useState<boolean>(getInitialReduceMotion);
  const [pathname, setPathname] = useState<string>(() =>
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Ignore storage access errors
    }
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-reduce-motion', reduceMotion ? 'true' : 'false');

    try {
      localStorage.setItem(REDUCE_MOTION_STORAGE_KEY, reduceMotion ? 'true' : 'false');
    } catch {
      // Ignore storage access errors
    }
  }, [reduceMotion]);

  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleToggleReduceMotion = () => {
    setReduceMotion((prev) => !prev);
  };

  const handleReturnHome = () => {
    window.history.pushState({}, '', '/');
    setPathname('/');
  };

  const isNotFound = pathname !== '/' && pathname !== '/index.html';

  return (
    <LanguageProvider>
      <MotionConfig reducedMotion={reduceMotion ? 'always' : 'user'}>
        <PageLoader reduceMotion={reduceMotion} />
        <ScrollProgress />
        {!reduceMotion && <CustomCursor />}

        <div className="relative min-h-screen flex flex-col bg-white text-slate-900 dark:bg-[#06110C] dark:text-white transition-colors duration-300">
          <AnimatedBackground reduceMotion={reduceMotion} />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 min-h-screen flex flex-col"
          >
            <Navbar theme={theme} onToggleTheme={handleToggleTheme} />

            {isNotFound ? (
              <NotFoundPage onReturnHome={handleReturnHome} />
            ) : (
              <main className="flex-1">
                <Hero />
                <MotionMarquee />
                <AboutSection />
                <SkillsSection />
                <ServicesSection />
                <ProjectsSection />
                <MotionMarquee reverse />
                <ExperienceSection />
                <DesignProcessSection />
                <TestimonialsSection />
                <LearningNotesSection />
                <ContactSection />
              </main>
            )}

            <Footer
              reduceMotion={reduceMotion}
              onToggleReduceMotion={handleToggleReduceMotion}
            />
          </motion.div>
        </div>

        <BackToTop />
      </MotionConfig>
    </LanguageProvider>
  );
}
