import {
  Braces,
  CheckCircle2,
  Code2,
  ExternalLink,
  Figma,
  FileCode2,
  GitBranch,
  Github,
  Grid,
  Layers,
  Layout,
  Palette,
  PenTool,
  Search,
  Sliders,
  Smartphone,
  Terminal,
  Wind,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CONTACT_INFO, TOOLS_AND_LEARNING } from '../data/portfolioConfig';
import { Reveal, StaggerCard } from './Reveal';
import { TiltCard } from './TiltCard';

const FRONTEND_SKILLS = [
  { name: 'HTML5', level: 'Core', icon: FileCode2 },
  { name: 'CSS3', level: 'Core', icon: Palette },
  { name: 'JavaScript', level: 'Core', icon: Braces },
];

const UIUX_ICONS = [Figma, Layout, Layers, Search];
const TOOL_ICONS = [GitBranch, Terminal, Code2, Wind];
const WORKFLOW_ICONS = [Smartphone, Grid, Sliders, CheckCircle2];

export function SkillsSection() {
  const { t, isRtl } = useLanguage();

  const renderWorkflowStreamCopy = (copyIndex: number) => (
    <div
      key={copyIndex}
      aria-hidden={copyIndex === 1}
      className="flex items-stretch shrink-0 gap-5 pe-5"
    >
      {t.skills.workflowCards.map((card, index) => {
        const Icon = WORKFLOW_ICONS[index] ?? Smartphone;
        const isOrange = index % 2 === 1;
        return (
          <div
            key={`${copyIndex}-${index}`}
            dir={isRtl ? 'rtl' : 'ltr'}
            className="group w-[265px] sm:w-[290px] shrink-0 rounded-[20px] border border-slate-200 dark:border-emerald-900/50 bg-[#F8FAF9]/95 dark:bg-[#0C1D15]/95 p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#EA580C]/70 dark:hover:border-[#FB923C]/70 hover:shadow-md"
          >
            <div
              className={`w-9 h-9 rounded-[8px] flex items-center justify-center mb-3.5 transition-transform duration-200 group-hover:scale-110 ${
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
          </div>
        );
      })}
    </div>
  );

  return (
    <section
      id="skills"
      className="py-20 md:py-28 border-t border-slate-200 dark:border-emerald-900/40 bg-white/80 dark:bg-[#06110C]/75"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-10">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-[#15803D] dark:text-[#4ADE80] mb-2">
                {t.skills.eyebrow}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
                {t.skills.heading}
              </h2>
            </div>

            {/* Code & Design Proof Links */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={CONTACT_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-[12px] border border-slate-200 dark:border-emerald-900/60 bg-[#F8FAF9] dark:bg-[#0C1D15] text-slate-800 dark:text-emerald-100 hover:border-[#EA580C] dark:hover:border-[#FB923C] hover:text-[#C2410C] dark:hover:text-[#FB923C] transition-colors whitespace-nowrap"
              >
                <Github className="w-3.5 h-3.5" aria-hidden="true" />
                <span>GitHub Code</span>
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </a>
              {CONTACT_INFO.behanceUrl && (
                <a
                  href={CONTACT_INFO.behanceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-[12px] border border-slate-200 dark:border-emerald-900/60 bg-[#F8FAF9] dark:bg-[#0C1D15] text-slate-800 dark:text-emerald-100 hover:border-[#15803D] dark:hover:border-[#4ADE80] transition-colors whitespace-nowrap"
                >
                  <span>Behance Designs</span>
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </a>
              )}
              {CONTACT_INFO.dribbbleUrl && (
                <a
                  href={CONTACT_INFO.dribbbleUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-[12px] border border-slate-200 dark:border-emerald-900/60 bg-[#F8FAF9] dark:bg-[#0C1D15] text-slate-800 dark:text-emerald-100 hover:border-[#EA580C] dark:hover:border-[#FB923C] transition-colors whitespace-nowrap"
                >
                  <span>Dribbble Shots</span>
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </a>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Frontend Development Card (3D Tilt Moving Card) */}
            <StaggerCard index={0} className="h-full">
              <TiltCard className="h-full">
                <div className="h-full rounded-[20px] border border-slate-200 dark:border-emerald-900/50 bg-[#F8FAF9]/95 dark:bg-[#0C1D15]/95 p-6 sm:p-8 flex flex-col justify-between transition-colors duration-200 hover:border-[#15803D]/60 dark:hover:border-[#4ADE80]/60 hover:shadow-md">
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
                            <div className="flex items-center justify-between gap-2">
                              <div className="flex items-center gap-2.5">
                                <SkillIcon
                                  className="w-4 h-4 text-[#15803D] dark:text-[#4ADE80] transition-transform duration-200 group-hover:scale-110 shrink-0"
                                  aria-hidden="true"
                                />
                                <p className="font-display text-sm font-semibold text-slate-900 dark:text-white group-hover:text-[#15803D] dark:group-hover:text-[#4ADE80] transition-colors">
                                  {skill.name}
                                </p>
                              </div>
                              <span className="text-[11px] font-medium text-[#15803D] dark:text-[#4ADE80]">
                                {skill.level}
                              </span>
                            </div>
                            <p className="text-xs text-slate-500 dark:text-emerald-100/70 mt-1.5 leading-relaxed">
                              {t.skills.frontendFocuses[idx] ?? ''}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </StaggerCard>

            {/* UI/UX Design Card (3D Tilt Moving Card) */}
            <StaggerCard index={1} className="h-full">
              <TiltCard className="h-full">
                <div className="h-full rounded-[20px] border border-slate-200 dark:border-emerald-900/50 bg-[#F8FAF9]/95 dark:bg-[#0C1D15]/95 p-6 sm:p-8 flex flex-col justify-between transition-colors duration-200 hover:border-[#EA580C]/60 dark:hover:border-[#FB923C]/60 hover:shadow-md">
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
                            <div className="flex items-center justify-between gap-2">
                              <div className="flex items-center gap-2.5">
                                <SkillIcon
                                  className="w-4 h-4 text-[#C2410C] dark:text-[#FB923C] transition-transform duration-200 group-hover:scale-110 shrink-0"
                                  aria-hidden="true"
                                />
                                <p className="font-display text-sm font-semibold text-slate-900 dark:text-white group-hover:text-[#C2410C] dark:group-hover:text-[#FB923C] transition-colors">
                                  {skill.name}
                                </p>
                              </div>
                              <span className="text-[11px] font-medium text-[#C2410C] dark:text-[#FB923C]">
                                Core
                              </span>
                            </div>
                            <p className="text-xs text-slate-500 dark:text-emerald-100/70 mt-1.5 leading-relaxed">
                              {skill.focus}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </StaggerCard>
          </div>
        </Reveal>

        {/* Tools & Currently Learning Strip (Git/GitHub, VS Code, React, Tailwind) */}
        <div className="rounded-[20px] border border-slate-200 dark:border-emerald-900/50 bg-[#F8FAF9]/95 dark:bg-[#0C1D15]/95 p-6 sm:p-7">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
            <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
              Developer Tools &amp; Frameworks Learning
            </h3>
            <p className="text-xs text-slate-500 dark:text-emerald-200/70">
              Git / GitHub · VS Code · React · Tailwind CSS
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TOOLS_AND_LEARNING.map((tool, idx) => {
              const Icon = TOOL_ICONS[idx] ?? Terminal;
              const isLearning = tool.level === 'Learning';
              return (
                <StaggerCard
                  key={tool.name}
                  index={idx}
                  className="rounded-[12px] border border-slate-200 dark:border-emerald-900/50 bg-white dark:bg-[#06110C] p-4 flex flex-col justify-between gap-2"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Icon
                        className={`w-4 h-4 shrink-0 ${
                          isLearning
                            ? 'text-[#C2410C] dark:text-[#FB923C]'
                            : 'text-[#15803D] dark:text-[#4ADE80]'
                        }`}
                        aria-hidden="true"
                      />
                      <span className="font-display text-sm font-semibold text-slate-900 dark:text-white">
                        {tool.name}
                      </span>
                    </div>
                    <span
                      className={`text-[11px] font-medium ${
                        isLearning
                          ? 'text-[#C2410C] dark:text-[#FB923C]'
                          : 'text-[#15803D] dark:text-[#4ADE80]'
                      }`}
                    >
                      {tool.level}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-emerald-100/70 leading-relaxed">
                    {tool.detail}
                  </p>
                </StaggerCard>
              );
            })}
          </div>
        </div>

        {/* Continuous Moving Practical Craft Cards Stream (pauses on hover/focus) */}
        <div
          className="group/stream relative overflow-hidden py-2 -mx-2 px-2"
          style={{
            maskImage:
              'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)',
          }}
        >
          <div
            dir="ltr"
            className="flex w-max will-change-transform animate-cards-stream group-hover/stream:[animation-play-state:paused] group-focus-within/stream:[animation-play-state:paused] motion-reduce:hidden"
          >
            {renderWorkflowStreamCopy(0)}
            {renderWorkflowStreamCopy(1)}
          </div>

          {/* Static fallback grid for prefers-reduced-motion users */}
          <div className="hidden motion-reduce:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.skills.workflowCards.map((card, index) => {
              const Icon = WORKFLOW_ICONS[index] ?? Smartphone;
              const isOrange = index % 2 === 1;
              return (
                <StaggerCard
                  key={index}
                  index={index}
                  className="rounded-[20px] border border-slate-200 dark:border-emerald-900/50 bg-[#F8FAF9] dark:bg-[#0C1D15] p-5"
                >
                  <div
                    className={`w-9 h-9 rounded-[8px] flex items-center justify-center mb-3.5 ${
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
      </div>
    </section>
  );
}
