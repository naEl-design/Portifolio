import { FormEvent, useEffect, useState } from 'react';
import { MessageSquarePlus, Quote, Trash2 } from 'lucide-react';
import { Reveal, StaggerCard } from './Reveal';

interface EndorsementItem {
  id: string;
  author: string;
  role: string;
  quote: string;
  createdAt: string;
}

const STORAGE_KEY = 'nael_endorsements_v1';

export function TestimonialsSection() {
  const [endorsements, setEndorsements] = useState<EndorsementItem[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  const [showForm, setShowForm] = useState(false);
  const [author, setAuthor] = useState('');
  const [role, setRole] = useState('');
  const [quote, setQuote] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(endorsements));
    } catch {
      // Ignore storage access errors
    }
  }, [endorsements]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const cleanAuthor = author.trim();
    const cleanRole = role.trim();
    const cleanQuote = quote.trim();

    if (!cleanAuthor || !cleanRole || !cleanQuote) {
      setError('Please complete your name, role (teacher, classmate, or client), and quote.');
      return;
    }

    const nextItem: EndorsementItem = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      author: cleanAuthor,
      role: cleanRole,
      quote: cleanQuote,
      createdAt: new Date().toLocaleDateString(undefined, {
        month: 'short',
        year: 'numeric',
      }),
    };

    setEndorsements((prev) => [nextItem, ...prev]);
    setAuthor('');
    setRole('');
    setQuote('');
    setError('');
    setShowForm(false);
  };

  const handleRemove = (id: string) => {
    setEndorsements((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <section
      id="testimonials"
      className="py-20 md:py-24 border-t border-slate-200 dark:border-emerald-900/40 bg-white/80 dark:bg-[#06110C]/75"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-10">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="text-sm font-semibold text-[#15803D] dark:text-[#4ADE80] mb-2">
                Recommendations &amp; Trust
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
                Feedback from teachers, classmates, and collaborators.
              </h2>
            </div>

            <button
              type="button"
              onClick={() => {
                setShowForm((prev) => !prev);
                setError('');
              }}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-[12px] border border-slate-200 dark:border-emerald-800/70 bg-[#F8FAF9] dark:bg-[#0C1D15] text-slate-800 dark:text-emerald-100 hover:border-[#EA580C] dark:hover:border-[#FB923C] hover:text-[#C2410C] dark:hover:text-[#FB923C] transition-colors self-start md:self-auto cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EA580C]"
            >
              <MessageSquarePlus className="w-4 h-4" aria-hidden="true" />
              <span>{showForm ? 'Cancel' : 'Add Endorsement'}</span>
            </button>
          </div>
        </Reveal>

        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="rounded-[20px] border border-slate-200 dark:border-emerald-900/50 bg-[#F8FAF9] dark:bg-[#0C1D15] p-6 space-y-4 max-w-2xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="endorse-author"
                  className="block text-xs font-medium text-slate-700 dark:text-emerald-100 mb-1.5"
                >
                  Name
                </label>
                <input
                  id="endorse-author"
                  type="text"
                  maxLength={80}
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="e.g. Instructor or Peer Name"
                  className="w-full px-3.5 py-2 text-sm rounded-[10px] border border-slate-300 dark:border-emerald-900/60 bg-white dark:bg-[#06110C] text-slate-900 dark:text-white focus:outline-none focus:border-[#EA580C]"
                />
              </div>

              <div>
                <label
                  htmlFor="endorse-role"
                  className="block text-xs font-medium text-slate-700 dark:text-emerald-100 mb-1.5"
                >
                  Role &amp; Organization
                </label>
                <input
                  id="endorse-role"
                  type="text"
                  maxLength={100}
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="e.g. SWD Teacher, Intango Technical School"
                  className="w-full px-3.5 py-2 text-sm rounded-[10px] border border-slate-300 dark:border-emerald-900/60 bg-white dark:bg-[#06110C] text-slate-900 dark:text-white focus:outline-none focus:border-[#EA580C]"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="endorse-quote"
                className="block text-xs font-medium text-slate-700 dark:text-emerald-100 mb-1.5"
              >
                Short Recommendation (1–2 lines)
              </label>
              <textarea
                id="endorse-quote"
                rows={3}
                maxLength={320}
                value={quote}
                onChange={(e) => setQuote(e.target.value)}
                placeholder="Share a quick note about working or studying with Shingiro Nael..."
                className="w-full px-3.5 py-2 text-sm rounded-[10px] border border-slate-300 dark:border-emerald-900/60 bg-white dark:bg-[#06110C] text-slate-900 dark:text-white focus:outline-none focus:border-[#EA580C]"
              />
            </div>

            {error && (
              <p role="alert" className="text-xs font-medium text-red-600 dark:text-red-400">
                {error}
              </p>
            )}

            <div className="flex items-center justify-between gap-4">
              <p className="text-[11px] text-slate-500 dark:text-emerald-200/65">
                Saved locally in this browser for previewing real recommendations.
              </p>
              <button
                type="submit"
                className="px-5 py-2 text-xs font-semibold text-white bg-[#C2410C] hover:bg-[#9A3412] dark:bg-[#EA580C] dark:hover:bg-[#C2410C] rounded-[10px] cursor-pointer"
              >
                Save Endorsement
              </button>
            </div>
          </form>
        )}

        {endorsements.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {endorsements.map((item, idx) => (
              <StaggerCard
                key={item.id}
                index={idx}
                className="rounded-[20px] border border-slate-200 dark:border-emerald-900/50 bg-[#F8FAF9] dark:bg-[#0C1D15] p-6 flex flex-col justify-between gap-5"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Quote className="w-5 h-5 text-[#C2410C] dark:text-[#FB923C]" aria-hidden="true" />
                    <button
                      type="button"
                      onClick={() => handleRemove(item.id)}
                      aria-label={`Remove endorsement from ${item.author}`}
                      className="p-1.5 rounded-[8px] text-slate-400 hover:text-red-600 dark:hover:text-red-400 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-emerald-100/85 leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-emerald-900/50">
                  <p className="font-display text-sm font-bold text-slate-900 dark:text-white">
                    {item.author}
                  </p>
                  <p className="text-xs text-[#15803D] dark:text-[#4ADE80] mt-0.5">
                    {item.role} · {item.createdAt}
                  </p>
                </div>
              </StaggerCard>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-[20px] border border-dashed border-slate-300 dark:border-emerald-800/70 bg-[#F8FAF9]/60 dark:bg-[#0C1D15]/40 p-6 space-y-2.5">
              <p className="text-xs font-semibold text-[#15803D] dark:text-[#4ADE80]">
                Teacher or Mentor Endorsement Slot
              </p>
              <p className="text-sm text-slate-600 dark:text-emerald-100/75 leading-relaxed">
                Verified feedback from a Software Development instructor at Intango Technical School or design mentor can be added here using &ldquo;Add Endorsement&rdquo;.
              </p>
            </div>

            <div className="rounded-[20px] border border-dashed border-slate-300 dark:border-emerald-800/70 bg-[#F8FAF9]/60 dark:bg-[#0C1D15]/40 p-6 space-y-2.5">
              <p className="text-xs font-semibold text-[#C2410C] dark:text-[#FB923C]">
                Classmate or Project Client Slot
              </p>
              <p className="text-sm text-slate-600 dark:text-emerald-100/75 leading-relaxed">
                Even one or two authentic lines from a teammate, peer developer, or project collaborator help recruiters confirm collaboration and craft.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
