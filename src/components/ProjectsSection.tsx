import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, Code2, ExternalLink, LayoutTemplate, Smartphone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import {
  PROJECTS,
  ProjectCategory,
  ProjectItem,
} from '../data/portfolioConfig';
import { Reveal, StaggerCard } from './Reveal';

const AVAILABLE_CATEGORIES: Array<'All' | ProjectCategory> = [
  'All',
  ...Array.from(new Set(PROJECTS.map((project) => project.category))),
];

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
                <div className="h-9 rounded-[8px] bg-white dark:bg-[#0C1D15] border border-slate-200 dark:border-emerald-900/60" />
                <div className="h-9 rounded-[8px] bg-emerald-100/70 dark:bg-[#16A34A]/20 border border-emerald-300/60 dark:border-emerald-700/50" />
                <div className="h-9 rounded-[8px] bg-orange-100/80 dark:bg-[#EA580C]/25 border border-orange-300/60 dark:border-orange-700/50" />
              </div>
              <div className="h-14 rounded-[8px] bg-white dark:bg-[#0C1D15] border border-slate-200 dark:border-emerald-900/60 flex items-end gap-1.5 p-2">
                <div className="w-1/5 h-4 rounded-xs bg-emerald-200 dark:bg-emerald-800" />
                <div className="w-1/5 h-7 rounded-xs bg-[#16A34A]/70" />
                <div className="w-1/5 h-5 rounded-xs bg-emerald-200 dark:bg-emerald-800" />
                <div className="w-1/5 h-9 rounded-xs bg-[#EA580C]/80" />
                <div className="w-1/5 h-6 rounded-xs bg-[#16A34A]/60" />
              </div>
            </div>
          )}

          {project.thumbnailVariant === 'portfolio' && (
            <div className="space-y-2.5 my-auto pt-3">
              <div className="h-10 rounded-[8px] bg-white dark:bg-[#0C1D15] border border-slate-200 dark:border-emerald-900/60 p-2 flex items-center justify-between">
                <div className="h-2.5 w-16 rounded bg-[#EA580C]/70" />
                <div className="flex gap-1.5">
                  <div className="h-2 w-6 rounded bg-emerald-200 dark:bg-emerald-800" />
                  <div className="h-2 w-6 rounded bg-emerald-200 dark:bg-emerald-800" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="h-14 rounded-[8px] bg-white dark:bg-[#0C1D15] border border-slate-200 dark:border-emerald-900/60" />
                <div className="h-14 rounded-[8px] bg-emerald-50 dark:bg-[#16A34A]/15 border border-emerald-200 dark:border-emerald-800/60" />
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
  const [noticeProjectId, setNoticeProjectId] = useState<string | null>(null);

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeFilter);

  const getLocalizedProject = (project: ProjectItem) => {
    const match = t.projects.items.find((item) => item.id === project.id);
    return {
      name: match?.name ?? project.name,
      description: match?.description ?? project.description,
      categoryLabel: match?.categoryLabel ?? project.category,
    };
  };

  const getCategoryLabel = (category: 'All' | ProjectCategory) => {
    if (category === 'All') return t.projects.allTab;
    const projectInCat = PROJECTS.find((p) => p.category === category);
    if (!projectInCat) return category;
    return getLocalizedProject(projectInCat).categoryLabel;
  };

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    url: string,
    projectId: string
  ) => {
    if (!url || url === '#') {
      e.preventDefault();
      setNoticeProjectId((prev) => (prev === projectId ? null : projectId));
    }
  };

  return (
    <section
      id="projects"
      className="py-20 md:py-28 border-t border-slate-200 dark:border-emerald-900/40 bg-white dark:bg-[#06110C]"
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

            {/* Functional Project Filter */}
            <div
              role="tablist"
              aria-label={t.projects.eyebrow}
              className="inline-flex flex-wrap items-center gap-1 p-1 rounded-[12px] border border-slate-200 dark:border-emerald-900/60 bg-[#F8FAF9] dark:bg-[#0C1D15] self-start md:self-auto"
            >
              {AVAILABLE_CATEGORIES.map((category) => {
                const isActive = activeFilter === category;
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => {
                      setActiveFilter(category);
                      setNoticeProjectId(null);
                    }}
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

          {/* Animated Responsive Project Grid (2 Live Projects, Live Demo only) */}
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
                  <motion.article
                    key={project.id}
                    layout
                    data-cursor="expand"
                    initial={{ opacity: 0, y: 18, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.32, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="group rounded-[20px] border border-slate-200 dark:border-emerald-900/50 bg-[#F8FAF9] dark:bg-[#0C1D15] overflow-hidden flex flex-col transition-all duration-300 md:hover:-translate-y-2 hover:border-[#EA580C]/80 dark:hover:border-[#FB923C]/80 hover:shadow-[0_22px_44px_-18px_rgba(234,88,12,0.28)] dark:hover:shadow-[0_22px_48px_-18px_rgba(0,0,0,0.85)]"
                  >
                    {/* Thumbnail */}
                    <a
                      href={project.liveUrl}
                      target={project.liveUrl !== '#' ? '_blank' : undefined}
                      rel={project.liveUrl !== '#' ? 'noreferrer' : undefined}
                      onClick={(e) => handleLinkClick(e, project.liveUrl, project.id)}
                      className="block w-full h-56 overflow-hidden border-b border-slate-200 dark:border-emerald-900/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EA580C]"
                    >
                      <ProjectThumbnail
                        project={project}
                        categoryLabel={localized.categoryLabel}
                        displayName={localized.name}
                        viewProjectLabel={t.projects.viewProject}
                      />
                    </a>

                    {/* Card Body */}
                    <div className="p-6 flex flex-col flex-1 justify-between gap-5">
                      <div>
                        <p className="text-xs font-semibold text-[#15803D] dark:text-[#4ADE80] mb-1.5">
                          {localized.categoryLabel}
                        </p>

                        <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#C2410C] dark:group-hover:text-[#FB923C] transition-colors">
                          {localized.name}
                        </h3>

                        <p className="mt-2 text-sm text-slate-600 dark:text-emerald-100/75 leading-relaxed">
                          {localized.description}
                        </p>
                      </div>

                      <div className="space-y-4">
                        {/* Technology Badges */}
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

                        {/* Action Link (Live Demo only) */}
                        <div className="pt-4 border-t border-slate-200 dark:border-emerald-900/50">
                          <a
                            href={project.liveUrl}
                            target={project.liveUrl !== '#' ? '_blank' : undefined}
                            rel={project.liveUrl !== '#' ? 'noreferrer' : undefined}
                            onClick={(e) => handleLinkClick(e, project.liveUrl, project.id)}
                            className="group/btn w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold rounded-[12px] bg-[#C2410C] hover:bg-[#9A3412] dark:bg-[#EA580C] dark:hover:bg-[#C2410C] text-white shadow-xs hover:shadow-[0_8px_20px_-6px_rgba(234,88,12,0.55)] hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EA580C]"
                          >
                            <span>{t.projects.liveDemo}</span>
                            <ExternalLink
                              className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                              aria-hidden="true"
                            />
                          </a>
                        </div>

                        {noticeProjectId === project.id && (
                          <p className="text-[11px] text-slate-600 dark:text-emerald-100/75 bg-white dark:bg-[#06110C] border border-slate-200 dark:border-emerald-900/60 rounded-[8px] px-3 py-2">
                            Placeholder link (<code className="font-mono">#</code>). Replace{' '}
                            <code className="font-mono">liveUrl</code> in{' '}
                            <code className="font-mono">src/data/portfolioConfig.ts</code>.
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </Reveal>

        {/* Project Build Highlights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
          {t.projects.highlights.map((item, idx) => {
            const meta = HIGHLIGHT_META[idx] ?? HIGHLIGHT_META[0];
            const Icon = meta.icon;
            const isOrange = meta.accent === 'orange';
            return (
              <StaggerCard
                key={idx}
                index={idx}
                className="rounded-[20px] border border-slate-200 dark:border-emerald-900/50 bg-[#F8FAF9] dark:bg-[#0C1D15] p-5 flex items-start gap-3.5 transition-colors hover:border-[#EA580C]/70 dark:hover:border-[#FB923C]/70 hover:shadow-md"
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
