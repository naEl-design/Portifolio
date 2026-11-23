import { useEffect, useState } from 'react';
import { motion, MotionConfig } from 'motion/react';
import { LanguageProvider } from './context/LanguageContext';
import { ScrollProgress } from './components/ScrollProgress';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { DesignProcessSection } from './components/DesignProcessSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

type ThemeMode = 'dark' | 'light';

const THEME_STORAGE_KEY = 'nael_theme';

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

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);

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

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <LanguageProvider>
      <MotionConfig reducedMotion="user">
        <ScrollProgress />
        <CustomCursor />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="min-h-screen flex flex-col bg-white text-slate-900 dark:bg-[#06110C] dark:text-white transition-colors duration-300"
        >
          <Navbar theme={theme} onToggleTheme={handleToggleTheme} />

          <main className="flex-1">
            <Hero />
            <AboutSection />
            <SkillsSection />
            <ServicesSection />
            <ProjectsSection />
            <ExperienceSection />
            <DesignProcessSection />
            <ContactSection />
          </main>

          <Footer />
        </motion.div>
      </MotionConfig>
    </LanguageProvider>
  );
}
