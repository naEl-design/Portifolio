import {
  Braces,
  CheckCircle2,
  Code2,
  Figma,
  FileCode2,
  Grid,
  Layers,
  Layout,
  Palette,
  PenTool,
  Search,
  Sliders,
  Smartphone,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Reveal, StaggerCard } from './Reveal';

const FRONTEND_SKILLS = [
  { name: 'HTML', icon: FileCode2 },
  { name: 'CSS', icon: Palette },
  { name: 'JavaScript', icon: Braces },
];

const UIUX_ICONS = [Figma, Layout, Layers, Search];
const WORKFLOW_ICONS = [Smartphone, Grid, Sliders, CheckCircle2];

export function SkillsSection() {
  const { t } = useLanguage();

  return (
    <section
      id="skills"
      className="py-20 md:py-28 border-t border-slate-200 dark:border-emerald-900/40 bg-white dark:bg-[#06110C]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-10">
        <Reveal>
          <div className="max-w-2xl mb-10">
            <p className="text-sm font-semibold text-[#15803D] dark:text-[#4ADE80] mb-2">
              {t.skills.eyebrow}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
              {t.skills.heading}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Frontend Development Card */}
            <StaggerCard
              index={0}
              className="rounded-[20px] border border-slate-200 dark:border-emerald-900/50 bg-[#F8FAF9] dark:bg-[#0C1D15] p-6 sm:p-8 flex flex-col justify-between transition-colors duration-200 hover:border-[#15803D]/50 dark:hover:border-[#4ADE80]/50"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-[12px] flex items-center justify-center shrink-0 bg-emerald-100 dark:bg-[#16A34A]/20 text-[#15803D] dark:text-[#4ADE80]">
                    <Code2 className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                    {t.skills.frontendCategory}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 dark:text-emerald-100/75 mb-6">
                  {t.skills.frontendSubtitle}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {FRONTEND_SKILLS.map((skill, idx) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="group rounded-[12px] border border-slate-200 dark:border-emerald-900/50 bg-white dark:bg-[#06110C] px-4 py-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#15803D] dark:hover:border-[#4ADE80]/70 hover:shadow-sm"
                      >
                        <div className="flex items-center gap-2.5">
                          <SkillIcon
                            className="w-4 h-4 text-[#15803D] dark:text-[#4ADE80] transition-transform duration-200 group-hover:scale-110 shrink-0"
                            aria-hidden="true"
                          />
                          <p className="font-display text-sm font-semibold text-slate-900 dark:text-white group-hover:text-[#15803D] dark:group-hover:text-[#4ADE80] transition-colors">
                            {skill.name}
                          </p>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-emerald-100/70 mt-1.5 leading-relaxed">
                          {t.skills.frontendFocuses[idx] ?? ''}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </StaggerCard>

            {/* UI/UX Design Card */}
            <StaggerCard
              index={1}
              className="rounded-[20px] border border-slate-200 dark:border-emerald-900/50 bg-[#F8FAF9] dark:bg-[#0C1D15] p-6 sm:p-8 flex flex-col justify-between transition-colors duration-200 hover:border-[#EA580C]/50 dark:hover:border-[#FB923C]/50"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-[12px] flex items-center justify-center shrink-0 bg-orange-100 dark:bg-[#EA580C]/20 text-[#C2410C] dark:text-[#FB923C]">
                    <PenTool className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                    {t.skills.uiuxCategory}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 dark:text-emerald-100/75 mb-6">
                  {t.skills.uiuxSubtitle}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {t.skills.uiuxItems.map((skill, idx) => {
                    const SkillIcon = UIUX_ICONS[idx] ?? Figma;
                    return (
                      <div
                        key={idx}
                        className="group rounded-[12px] border border-slate-200 dark:border-emerald-900/50 bg-white dark:bg-[#06110C] px-4 py-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#EA580C] dark:hover:border-[#FB923C]/70 hover:shadow-sm"
                      >
                        <div className="flex items-center gap-2.5">
                          <SkillIcon
                            className="w-4 h-4 text-[#C2410C] dark:text-[#FB923C] transition-transform duration-200 group-hover:scale-110 shrink-0"
                            aria-hidden="true"
                          />
                          <p className="font-display text-sm font-semibold text-slate-900 dark:text-white group-hover:text-[#C2410C] dark:group-hover:text-[#FB923C] transition-colors">
                            {skill.name}
                          </p>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-emerald-100/70 mt-1.5 leading-relaxed">
                          {skill.focus}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </StaggerCard>
          </div>
        </Reveal>

        {/* Additional Practical Craft Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.skills.workflowCards.map((card, index) => {
            const Icon = WORKFLOW_ICONS[index] ?? Smartphone;
            const isOrange = index % 2 === 1;
            return (
              <StaggerCard
                key={index}
                index={index}
                className="group rounded-[20px] border border-slate-200 dark:border-emerald-900/50 bg-[#F8FAF9] dark:bg-[#0C1D15] p-5 transition-colors hover:border-[#EA580C]/70 dark:hover:border-[#FB923C]/70 hover:shadow-md"
              >
                <div
                  className={`w-9 h-9 rounded-[8px] flex items-center justify-center mb-3.5 transition-transform duration-200 group-hover:scale-105 ${
                    isOrange
                      ? 'bg-orange-100 dark:bg-[#EA580C]/20 text-[#C2410C] dark:text-[#FB923C]'
                      : 'bg-emerald-100 dark:bg-[#16A34A]/20 text-[#15803D] dark:text-[#4ADE80]'
                  }`}
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </div>
                <h3 className="font-display text-sm font-bold text-slate-900 dark:text-white">
                  {card.title}
                </h3>
                <p className="mt-1.5 text-xs text-slate-600 dark:text-emerald-100/75 leading-relaxed">
                  {card.detail}
                </p>
              </StaggerCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
