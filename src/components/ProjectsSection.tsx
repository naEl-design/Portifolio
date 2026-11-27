import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowUpRight,
  BookOpen,
  Code2,
  ExternalLink,
  Github,
  LayoutTemplate,
  Smartphone,
  X,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import {
  PROJECTS,
  ProjectCategory,
  ProjectItem,
} from '../data/portfolioConfig';
import { Reveal, StaggerCard } from './Reveal';
import { TiltCard } from './TiltCard';

const FILTER_TABS: Array<'All' | ProjectCategory> = ['All', 'Web', 'UI/UX', 'Mobile'];

const HIGHLIGHT_META = [
  { icon: Smartphone, accent: 'orange' as const },
  { icon: LayoutTemplate, accent: 'green' as const },
  { icon: Code2, accent: 'orange' as const },
];

function ProjectThumbnail({
  project,
  categoryLabel,
  displayName,
  viewProjectLabel,
}: {
  project: ProjectItem;
  categoryLabel: string;
  displayName: string;
  viewProjectLabel: string;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {project.thumbnailUrl && !imgError ? (
        <img
          src={project.thumbnailUrl}
          alt={`${displayName} preview`}
          loading="lazy"
          onError={() => setImgError(true)}
          className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
        />
      ) : (
        /* Clean UI wireframe preview placeholder tailored to Orange, Green & White */
        <div
          aria-label={`${displayName} concept wireframe preview`}
          className="w-full h-full bg-gradient-to-br from-orange-50/70 via-white to-emerald-50/80 dark:from-[#0C1D15] dark:via-[#06110C] dark:to-[#132A1F] p-5 flex flex-col justify-between transition-transform duration-300 ease-out group-hover:scale-[1.03] select-none"
        >
          {/* Top browser/frame bar */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#EA580C]/70" />
              <span className="w-2 h-2 rounded-full bg-[#16A34A]/70" />
              <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-emerald-800" />
            </div>
            <span className="font-mono text-[10px] text-[#15803D] dark:text-[#4ADE80]">
              {categoryLabel}
            </span>
          </div>

          {project.thumbnailVariant === 'finance' && (
            <div className="space-y-2.5 my-auto pt-3">
              <div className="grid grid-cols-3 gap-2">
                <div className="h-9 rounded-[8px] bg-white dark:bg-[#0C1D15] border border-slate-200 dark:border-emerald-900/60 transition-transform duration-300 group-hover:-translate-y-0.5" />
                <div className="h-9 rounded-[8px] bg-emerald-100/70 dark:bg-[#16A34A]/20 border border-emerald-300/60 dark:border-emerald-700/50 transition-transform duration-300 delay-75 group-hover:-translate-y-0.5" />
                <div className="h-9 rounded-[8px] bg-orange-100/80 dark:bg-[#EA580C]/25 border border-orange-300/60 dark:border-orange-700/50 transition-transform duration-300 delay-150 group-hover:-translate-y-0.5" />
              </div>
              <div className="h-14 rounded-[8px] bg-white dark:bg-[#0C1D15] border border-slate-200 dark:border-emerald-900/60 flex items-end gap-1.5 p-2">
                <div className="w-1/5 h-4 origin-bottom rounded-xs bg-emerald-200 dark:bg-emerald-800 transition-transform duration-300 group-hover:scale-y-125" />
                <div className="w-1/5 h-7 origin-bottom rounded-xs bg-[#16A34A]/70 transition-transform duration-300 delay-75 group-hover:scale-y-110" />
                <div className="w-1/5 h-5 origin-bottom rounded-xs bg-emerald-200 dark:bg-emerald-800 transition-transform duration-300 delay-100 group-hover:scale-y-125" />
                <div className="w-1/5 h-9 origin-bottom rounded-xs bg-[#EA580C]/80 transition-transform duration-300 delay-150 group-hover:scale-y-110" />
                <div className="w-1/5 h-6 origin-bottom rounded-xs bg-[#16A34A]/60 transition-transform duration-300 delay-200 group-hover:scale-y-125" />
              </div>
            </div>
          )}

          {project.thumbnailVariant === 'portfolio' && (
            <div className="space-y-2.5 my-auto pt-3">
              <div className="h-10 rounded-[8px] bg-white dark:bg-[#0C1D15] border border-slate-200 dark:border-emerald-900/60 p-2 flex items-center justify-between transition-transform duration-300 group-hover:-translate-y-0.5">
                <div className="h-2.5 w-16 rounded bg-[#EA580C]/70" />
                <div className="flex gap-1.5">
                  <div className="h-2 w-6 rounded bg-emerald-200 dark:bg-emerald-800" />
                  <div className="h-2 w-6 rounded bg-emerald-200 dark:bg-emerald-800" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="h-14 rounded-[8px] bg-white dark:bg-[#0C1D15] border border-slate-200 dark:border-emerald-900/60 transition-transform duration-300 delay-75 group-hover:-translate-y-0.5" />
                <div className="h-14 rounded-[8px] bg-emerald-50 dark:bg-[#16A34A]/15 border border-emerald-200 dark:border-emerald-800/60 transition-transform duration-300 delay-150 group-hover:-translate-y-0.5" />
              </div>
            </div>
          )}

          <div
            dir="ltr"
            className="text-[11px] font-mono text-slate-500 dark:text-emerald-200/60 truncate"
          >
            {project.isPlaceholder
              ? 'Editable Concept Preview'
              : project.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}
          </div>
        </div>
      )}

      {/* Subtle Dark Gradient Scrim + View Project prompt on hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06110C]/85 via-[#06110C]/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-5"
      >
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <span>{viewProjectLabel}</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#FB923C]" />
        </span>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'All' | ProjectCategory>('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<ProjectItem | null>(null);

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((project) => project.filterTags.includes(activeFilter));

  useEffect(() => {
    if (!selectedCaseStudy) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCaseStudy(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCaseStudy]);

  const getLocalizedProject = (project: ProjectItem) => {
    const match = t.projects.items.find((item) => item.id === project.id);
    return {
      name: match?.name ?? project.name,
      description: match?.description ?? project.description,
      categoryLabel: project.filterTags.join(' · ') || match?.categoryLabel || project.category,
    };
  };

  const getCategoryLabel = (category: 'All' | ProjectCategory) => {
    if (category === 'All') return t.projects.allTab;
    return category;
  };

  return (
    <section
      id="projects"
      className="py-20 md:py-28 border-t border-slate-200 dark:border-emerald-900/40 bg-white/80 dark:bg-[#06110C]/75"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-12">
        <Reveal>
          {/* Header & Filter Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-xl">
              <p className="text-sm font-semibold text-[#15803D] dark:text-[#4ADE80] mb-2">
                {t.projects.eyebrow}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
                {t.projects.heading}
              </h2>
              <p className="mt-3 text-sm text-slate-600 dark:text-emerald-100/75">
                {t.projects.subtitle}
              </p>
            </div>

            {/* Functional Project Filters: All, Web, UI/UX, Mobile */}
            <div
              role="tablist"
              aria-label={t.projects.eyebrow}
              className="inline-flex flex-wrap items-center gap-1 p-1 rounded-[12px] border border-slate-200 dark:border-emerald-900/60 bg-[#F8FAF9] dark:bg-[#0C1D15] self-start md:self-auto"
            >
              {FILTER_TABS.map((category) => {
                const isActive = activeFilter === category;
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveFilter(category)}
                    className={`relative px-3.5 py-2 text-xs font-medium rounded-[8px] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EA580C] ${
                      isActive
                        ? 'text-white'
                        : 'text-slate-600 dark:text-emerald-100/75 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="projectFilterPill"
                        transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                        className="absolute inset-0 rounded-[8px] bg-[#C2410C] dark:bg-[#EA580C]"
                      />
                    )}
                    <span className="relative z-10">{getCategoryLabel(category)}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Animated Responsive Project Grid */}
          <motion.div
            layout
            className={`grid grid-cols-1 gap-6 ${
              filteredProjects.length === 1
                ? 'max-w-xl'
                : filteredProjects.length === 2
                  ? 'md:grid-cols-2'
                  : 'md:grid-cols-2 lg:grid-cols-3'
            }`}
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                const localized = getLocalizedProject(project);
                return (
                  <TiltCard key={project.id} maxTilt={4} className="h-full">
                    <motion.article
                      layout
                      data-cursor="expand"
                      initial={{ opacity: 0, y: 18, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.32, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                      className="group relative h-full rounded-[20px] border border-slate-200 dark:border-emerald-900/50 bg-[#F8FAF9]/95 dark:bg-[#0C1D15]/95 overflow-hidden flex flex-col transition-all duration-300 hover:border-[#EA580C]/80 dark:hover:border-[#FB923C]/80 hover:shadow-[0_22px_44px_-18px_rgba(234,88,12,0.28)] dark:hover:shadow-[0_22px_48px_-18px_rgba(0,0,0,0.85)]"
                    >
                      {/* Cursor-following subtle radial spotlight */}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background:
                            'radial-gradient(360px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(234, 88, 12, 0.1), transparent 65%)',
                        }}
                      />

                      {/* Thumbnail */}
                      <button
                        type="button"
                        onClick={() => setSelectedCaseStudy(project)}
                        aria-label={`Open ${localized.name} case study`}
                        className="relative z-20 block w-full h-56 overflow-hidden border-b border-slate-200 dark:border-emerald-900/50 text-start cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EA580C]"
                      >
                        <ProjectThumbnail
                          project={project}
                          categoryLabel={localized.categoryLabel}
                          displayName={localized.name}
                          viewProjectLabel="Read Case Study"
                        />
                      </button>

                      {/* Card Body */}
                      <div className="relative z-20 p-6 flex flex-col flex-1 justify-between gap-5">
                        <div>
                          <p className="text-xs font-semibold text-[#15803D] dark:text-[#4ADE80] mb-1.5">
                            {localized.categoryLabel}
                          </p>

                          <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#C2410C] dark:group-hover:text-[#FB923C] transition-colors">
                            <button
                              type="button"
                              onClick={() => setSelectedCaseStudy(project)}
                              className="text-start cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EA580C] rounded-xs"
                            >
                              {localized.name}
                            </button>
                          </h3>

                          <p className="mt-2 text-sm text-slate-600 dark:text-emerald-100/75 leading-relaxed">
                            {localized.description}
                          </p>

                          <p className="mt-3 text-xs text-slate-500 dark:text-emerald-200/70 leading-relaxed border-s-2 border-[#EA580C]/60 ps-3">
                            {project.caseStudy.role} · {project.caseStudy.result}
                          </p>
                        </div>

                        <div className="space-y-4">
                          {/* Technology Tags */}
                          <div className="flex flex-wrap gap-1.5">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2.5 py-1 text-[11px] font-medium rounded-[8px] border border-slate-200 dark:border-emerald-900/60 bg-white dark:bg-[#06110C] text-slate-700 dark:text-emerald-100/85 whitespace-nowrap"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* Card Actions: Case Study, Live Demo, Source Code */}
                          <div className="pt-2 border-t border-slate-200/80 dark:border-emerald-900/50 flex flex-wrap items-center gap-2.5">
                            <button
                              type="button"
                              onClick={() => setSelectedCaseStudy(project)}
                              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-[#C2410C] hover:bg-[#9A3412] dark:bg-[#EA580C] dark:hover:bg-[#C2410C] rounded-[10px] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EA580C]"
                            >
                              <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                              <span>Case Study</span>
                            </button>

                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#15803D] dark:text-[#4ADE80] border border-emerald-700/30 dark:border-emerald-800/70 bg-white dark:bg-[#06110C] hover:border-[#15803D] dark:hover:border-[#4ADE80] rounded-[10px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#15803D]"
                            >
                              <span>{t.projects.liveDemo}</span>
                              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                            </a>

                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-emerald-100 border border-slate-200 dark:border-emerald-900/60 bg-white dark:bg-[#06110C] hover:border-[#EA580C] dark:hover:border-[#FB923C] hover:text-[#C2410C] dark:hover:text-[#FB923C] rounded-[10px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EA580C]"
                            >
                              <Github className="w-3.5 h-3.5" aria-hidden="true" />
                              <span>Source Code</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  </TiltCard>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </Reveal>

        {/* Project Build Highlights Floating Moving Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
          {t.projects.highlights.map((item, idx) => {
            const meta = HIGHLIGHT_META[idx] ?? HIGHLIGHT_META[0];
            const Icon = meta.icon;
            const isOrange = meta.accent === 'orange';
            return (
              <div
                key={idx}
                style={{ animationDelay: `${idx * 0.7}s` }}
                className="animate-card-bob"
              >
                <StaggerCard
                  index={idx}
                  className="h-full rounded-[20px] border border-slate-200 dark:border-emerald-900/50 bg-[#F8FAF9]/95 dark:bg-[#0C1D15]/95 p-5 flex items-start gap-3.5 transition-colors hover:border-[#EA580C]/70 dark:hover:border-[#FB923C]/70 hover:shadow-md"
                >
                  <div
                    className={`w-10 h-10 rounded-[12px] flex items-center justify-center shrink-0 ${
                      isOrange
                        ? 'bg-orange-100 dark:bg-[#EA580C]/20 text-[#C2410C] dark:text-[#FB923C]'
                        : 'bg-emerald-100 dark:bg-[#16A34A]/20 text-[#15803D] dark:text-[#4ADE80]'
                    }`}
                  >
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-600 dark:text-emerald-100/75 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </StaggerCard>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Case Study Modal Dialog */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedCaseStudy(null)}
            className="fixed inset-0 z-[70] bg-slate-950/65 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="case-study-title"
              initial={{ opacity: 0, y: 16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.97 }}
              transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[20px] border border-slate-200 dark:border-emerald-800/70 bg-white dark:bg-[#06110C] p-6 sm:p-8 shadow-2xl space-y-6 my-auto"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 border-b border-slate-200 dark:border-emerald-900/50 pb-4">
                <div>
                  <p className="text-xs font-semibold text-[#15803D] dark:text-[#4ADE80]">
                    Case Study · {selectedCaseStudy.filterTags.join(' · ')}
                  </p>
                  <h3
                    id="case-study-title"
                    className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1"
                  >
                    {selectedCaseStudy.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-emerald-200/70 mt-1">
                    {selectedCaseStudy.caseStudy.role} · {selectedCaseStudy.caseStudy.timeline}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedCaseStudy(null)}
                  aria-label="Close case study"
                  className="w-9 h-9 rounded-[10px] border border-slate-200 dark:border-emerald-900/60 bg-[#F8FAF9] dark:bg-[#0C1D15] text-slate-600 dark:text-emerald-100 hover:text-[#C2410C] dark:hover:text-[#FB923C] flex items-center justify-center shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EA580C]"
                >
                  <X className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>

              {/* Problem */}
              <div className="space-y-2">
                <h4 className="font-display text-sm font-bold text-[#C2410C] dark:text-[#FB923C]">
                  The Problem
                </h4>
                <p className="text-sm text-slate-600 dark:text-emerald-100/80 leading-relaxed">
                  {selectedCaseStudy.caseStudy.problem}
                </p>
              </div>

              {/* Process: Sketches -> Wireframes -> Final UI */}
              <div className="space-y-3">
                <h4 className="font-display text-sm font-bold text-slate-900 dark:text-white">
                  Design &amp; Engineering Process
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {selectedCaseStudy.caseStudy.process.map((step, idx) => (
                    <div
                      key={step.stage}
                      className="rounded-[12px] border border-slate-200 dark:border-emerald-900/50 bg-[#F8FAF9] dark:bg-[#0C1D15] p-4 space-y-1.5"
                    >
                      <p className="font-mono text-[11px] font-semibold text-[#15803D] dark:text-[#4ADE80] tabular-nums">
                        0{idx + 1} · {step.stage}
                      </p>
                      <p className="text-xs text-slate-600 dark:text-emerald-100/75 leading-relaxed">
                        {step.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Result */}
              <div className="rounded-[12px] border border-emerald-200 dark:border-emerald-800/60 bg-emerald-50/70 dark:bg-[#16A34A]/10 p-4 space-y-1.5">
                <h4 className="font-display text-sm font-bold text-[#15803D] dark:text-[#4ADE80]">
                  Outcome &amp; Result
                </h4>
                <p className="text-sm text-slate-700 dark:text-emerald-100/85 leading-relaxed">
                  {selectedCaseStudy.caseStudy.result}
                </p>
              </div>

              {/* Footer Links */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 dark:border-emerald-900/50">
                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href={selectedCaseStudy.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#C2410C] hover:bg-[#9A3412] dark:bg-[#EA580C] dark:hover:bg-[#C2410C] rounded-[10px] transition-colors"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                  <a
                    href={selectedCaseStudy.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-700 dark:text-emerald-100 border border-slate-200 dark:border-emerald-800/70 bg-[#F8FAF9] dark:bg-[#0C1D15] hover:border-[#EA580C] dark:hover:border-[#FB923C] rounded-[10px] transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>View GitHub</span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedCaseStudy(null)}
                  className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-emerald-200/75 hover:text-slate-900 dark:hover:text-white cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
