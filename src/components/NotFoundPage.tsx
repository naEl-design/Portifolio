import { ArrowLeft } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioConfig';

interface NotFoundPageProps {
  onReturnHome: () => void;
}

export function NotFoundPage({ onReturnHome }: NotFoundPageProps) {
  return (
    <main className="min-h-[80vh] flex items-center justify-center px-5 py-20">
      <div className="max-w-lg w-full rounded-[20px] border border-slate-200 dark:border-emerald-900/50 bg-[#F8FAF9] dark:bg-[#0C1D15] p-8 sm:p-10 text-center space-y-5 shadow-sm">
        <p className="font-mono text-sm font-semibold text-[#C2410C] dark:text-[#FB923C] tabular-nums">
          404 · Page Not Found
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
          This route does not exist.
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-emerald-100/75 leading-relaxed">
          You reached an unmapped path on {PERSONAL_INFO.name}&apos;s portfolio. Return to the main page to explore projects, skills, and case studies.
        </p>
        <div className="pt-2">
          <button
            type="button"
            onClick={onReturnHome}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#C2410C] hover:bg-[#9A3412] dark:bg-[#EA580C] dark:hover:bg-[#C2410C] rounded-[12px] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EA580C]"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Back to Portfolio</span>
          </button>
        </div>
      </div>
    </main>
  );
}
