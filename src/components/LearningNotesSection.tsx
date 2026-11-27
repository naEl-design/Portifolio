import { useState } from 'react';
import { BookOpen, ChevronDown } from 'lucide-react';
import { LEARNING_NOTES } from '../data/portfolioConfig';
import { Reveal, StaggerCard } from './Reveal';

export function LearningNotesSection() {
  const [expandedId, setExpandedId] = useState<string | null>(LEARNING_NOTES[0]?.id ?? null);

  return (
    <section
      id="notes"
      className="py-20 md:py-24 border-t border-slate-200 dark:border-emerald-900/40 bg-[#F8FAF9]/80 dark:bg-[#0C1D15]/45"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-10">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#C2410C] dark:text-[#FB923C] mb-2">
              Learning Notes
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
              Short notes on what I&apos;m building and practicing.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LEARNING_NOTES.map((note, idx) => {
            const isExpanded = expandedId === note.id;
            const isOrange = idx % 2 === 0;
            return (
              <StaggerCard
                key={note.id}
                index={idx}
                className="rounded-[20px] border border-slate-200 dark:border-emerald-900/50 bg-white dark:bg-[#06110C] p-6 flex flex-col justify-between gap-4 transition-colors hover:border-[#EA580C]/60 dark:hover:border-[#FB923C]/60"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span
                      className={`font-semibold ${
                        isOrange
                          ? 'text-[#C2410C] dark:text-[#FB923C]'
                          : 'text-[#15803D] dark:text-[#4ADE80]'
                      }`}
                    >
                      {note.topic}
                    </span>
                    <span className="text-slate-500 dark:text-emerald-200/65">
                      {note.readTime}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    {note.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-emerald-100/75 leading-relaxed">
                    {note.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-emerald-900/50 space-y-2.5">
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    onClick={() => setExpandedId((prev) => (prev === note.id ? null : note.id))}
                    className="w-full inline-flex items-center justify-between gap-2 text-xs font-semibold text-[#15803D] dark:text-[#4ADE80] hover:text-[#C2410C] dark:hover:text-[#FB923C] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EA580C] rounded-xs"
                  >
                    <span className="inline-flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Key Takeaway</span>
                    </span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {isExpanded && (
                    <p className="text-xs text-slate-600 dark:text-emerald-100/80 bg-[#F8FAF9] dark:bg-[#0C1D15] border border-slate-200 dark:border-emerald-900/50 rounded-[10px] p-3 leading-relaxed">
                      {note.takeaway}
                    </p>
                  )}
                </div>
              </StaggerCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
