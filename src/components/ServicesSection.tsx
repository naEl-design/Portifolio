import { Code2, MonitorSmartphone, Palette } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SERVICES } from '../data/portfolioConfig';
import { Reveal, StaggerCard } from './Reveal';

const SERVICE_ICONS = {
  'frontend-dev': Code2,
  'ui-ux-design': Palette,
  'responsive-web': MonitorSmartphone,
};

export function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section
      id="services"
      className="py-20 md:py-28 border-t border-slate-200 dark:border-emerald-900/40 bg-[#F8FAF9] dark:bg-[#0C1D15]/55"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-semibold text-[#C2410C] dark:text-[#FB923C] mb-2">
              {t.services.eyebrow}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
              {t.services.heading}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => {
              const Icon =
                SERVICE_ICONS[service.id as keyof typeof SERVICE_ICONS] ?? Code2;
              const isOrangeAccent = index % 2 === 0;
              const localized = t.services.items[index] ?? {
                title: service.title,
                description: service.description,
                deliverables: service.deliverables,
              };

              return (
                <StaggerCard key={service.id} index={index} className="h-full">
                  <article className="group relative overflow-hidden h-full rounded-[20px] border border-slate-200 dark:border-emerald-900/50 bg-white dark:bg-[#06110C] p-7 flex flex-col justify-between transition-all duration-300 hover:border-[#EA580C]/70 dark:hover:border-[#FB923C]/70 hover:shadow-[0_18px_40px_-18px_rgba(234,88,12,0.28)] dark:hover:shadow-[0_18px_44px_-16px_rgba(234,88,12,0.22)]">
                    {/* Subtle hover background gradient wash */}
                    <div
                      aria-hidden="true"
                      className={`pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        isOrangeAccent
                          ? 'bg-gradient-to-br from-[#EA580C]/[0.05] via-transparent to-transparent dark:from-[#EA580C]/[0.1]'
                          : 'bg-gradient-to-br from-[#16A34A]/[0.05] via-transparent to-transparent dark:from-[#16A34A]/[0.1]'
                      }`}
                    />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <div
                          className={`w-11 h-11 rounded-[12px] flex items-center justify-center transition-all duration-200 group-hover:-translate-y-0.5 group-hover:scale-105 ${
                            isOrangeAccent
                              ? 'bg-orange-100 dark:bg-[#EA580C]/20 text-[#C2410C] dark:text-[#FB923C] group-hover:bg-[#C2410C] group-hover:text-white dark:group-hover:bg-[#EA580C]'
                              : 'bg-emerald-100 dark:bg-[#16A34A]/20 text-[#15803D] dark:text-[#4ADE80] group-hover:bg-[#15803D] group-hover:text-white dark:group-hover:bg-[#16A34A]'
                          }`}
                        >
                          <Icon className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <span className="font-mono text-xs font-medium text-slate-400 dark:text-emerald-200/50 tabular-nums">
                          {service.number}
                        </span>
                      </div>

                      <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                        {localized.title}
                      </h3>

                      <p className="mt-3 text-sm text-slate-600 dark:text-emerald-100/75 leading-relaxed">
                        {localized.description}
                      </p>
                    </div>

                    <div className="relative z-10 mt-7 pt-5 border-t border-slate-200 dark:border-emerald-900/50">
                      <p className="text-xs font-medium text-slate-500 dark:text-emerald-200/60 mb-2.5">
                        {t.services.includesLabel}
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {localized.deliverables.map((item) => (
                          <div
                            key={item}
                            className="px-2.5 py-1.5 rounded-[8px] border border-slate-200/80 dark:border-emerald-900/60 bg-[#F8FAF9] dark:bg-[#0C1D15] text-[11px] font-medium text-slate-800 dark:text-emerald-100/90 truncate"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                </StaggerCard>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
