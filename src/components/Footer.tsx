import { Github, Instagram, Linkedin, MessageCircle, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CONTACT_INFO } from '../data/portfolioConfig';

interface FooterProps {
  reduceMotion?: boolean;
  onToggleReduceMotion?: () => void;
}

export function Footer({ reduceMotion = false, onToggleReduceMotion }: FooterProps) {
  const { t } = useLanguage();

  const footerLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.projects, href: '#projects' },
    { label: 'Endorsements', href: '#testimonials' },
    { label: 'Notes', href: '#notes' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <footer className="border-t border-slate-200 dark:border-emerald-900/50 bg-white dark:bg-[#06110C] py-12">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Navigation Links */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 dark:text-emerald-100/75 hover:text-[#C2410C] dark:hover:text-[#FB923C] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EA580C] rounded-xs"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links & WhatsApp */}
          <div className="flex flex-wrap items-center gap-3">
            {onToggleReduceMotion && (
              <button
                type="button"
                onClick={onToggleReduceMotion}
                aria-pressed={reduceMotion}
                className="inline-flex items-center gap-1.5 px-3 h-10 rounded-[12px] border border-slate-200 dark:border-emerald-900/60 bg-[#F8FAF9] dark:bg-[#0C1D15] text-xs font-medium text-slate-600 dark:text-emerald-100/80 hover:border-[#EA580C] dark:hover:border-[#FB923C] hover:text-[#C2410C] dark:hover:text-[#FB923C] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EA580C]"
              >
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{reduceMotion ? 'Animations: Off' : 'Reduce Motion'}</span>
              </button>
            )}

            <a
              href={CONTACT_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message Shingiro Nael on WhatsApp"
              className="w-10 h-10 rounded-[12px] border border-slate-200 dark:border-emerald-900/60 bg-[#F8FAF9] dark:bg-[#0C1D15] text-slate-600 dark:text-emerald-100/75 hover:text-[#15803D] dark:hover:text-[#4ADE80] hover:border-[#15803D] dark:hover:border-[#4ADE80] hover:-translate-y-0.5 hover:scale-105 flex items-center justify-center transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href={CONTACT_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Shingiro Nael on LinkedIn"
              className="w-10 h-10 rounded-[12px] border border-slate-200 dark:border-emerald-900/60 bg-[#F8FAF9] dark:bg-[#0C1D15] text-slate-600 dark:text-emerald-100/75 hover:text-[#15803D] dark:hover:text-[#4ADE80] hover:border-[#15803D] dark:hover:border-[#4ADE80] hover:-translate-y-0.5 hover:scale-105 flex items-center justify-center transition-all duration-200"
            >
              <Linkedin className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href={CONTACT_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Shingiro Nael on GitHub"
              className="w-10 h-10 rounded-[12px] border border-slate-200 dark:border-emerald-900/60 bg-[#F8FAF9] dark:bg-[#0C1D15] text-slate-600 dark:text-emerald-100/75 hover:text-[#C2410C] dark:hover:text-[#FB923C] hover:border-[#EA580C] dark:hover:border-[#FB923C] hover:-translate-y-0.5 hover:scale-105 flex items-center justify-center transition-all duration-200"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Shingiro Nael on Instagram"
              className="w-10 h-10 rounded-[12px] border border-slate-200 dark:border-emerald-900/60 bg-[#F8FAF9] dark:bg-[#0C1D15] text-slate-600 dark:text-emerald-100/75 hover:text-[#15803D] dark:hover:text-[#4ADE80] hover:border-[#15803D] dark:hover:border-[#4ADE80] hover:-translate-y-0.5 hover:scale-105 flex items-center justify-center transition-all duration-200"
            >
              <Instagram className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-200 dark:border-emerald-900/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-500 dark:text-emerald-200/60">
          <p>{t.footer.copyright}</p>
          <p>{t.footer.credit}</p>
        </div>
      </div>
    </footer>
  );
}
