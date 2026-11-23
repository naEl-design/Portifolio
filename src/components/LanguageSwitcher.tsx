import { useEffect, useRef, useState } from 'react';
import { Check, Globe, Loader2, Search, X } from 'lucide-react';
import { WORLD_LANGUAGES } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';

export function LanguageSwitcher() {
  const {
    languageCode,
    languageName,
    isTranslating,
    translationError,
    t,
    selectLanguage,
  } = useLanguage();

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);
    setTimeout(() => searchInputRef.current?.focus(), 20);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  const normalizedQuery = query.trim().toLowerCase();
  const filteredLanguages = normalizedQuery
    ? WORLD_LANGUAGES.filter(
        (lang) =>
          lang.name.toLowerCase().includes(normalizedQuery) ||
          lang.nativeName.toLowerCase().includes(normalizedQuery) ||
          lang.code.toLowerCase().includes(normalizedQuery)
      )
    : WORLD_LANGUAGES;

  const instantLanguages = filteredLanguages.filter((l) => l.builtin);
  const worldLanguages = filteredLanguages.filter((l) => !l.builtin);

  const exactMatchExists = WORLD_LANGUAGES.some(
    (l) =>
      l.name.toLowerCase() === normalizedQuery ||
      l.nativeName.toLowerCase() === normalizedQuery ||
      l.code.toLowerCase() === normalizedQuery
  );

  const handleChoose = async (code: string, name: string) => {
    await selectLanguage(code, name);
    setQuery('');
    setOpen(false);
  };

  const handleCustomTranslate = async () => {
    const clean = query.trim();
    if (!clean) return;
    const customSlug = clean.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    await handleChoose(customSlug || clean, clean);
  };

  const badgeCode =
    languageCode.length <= 5
      ? languageCode.toUpperCase()
      : languageName.slice(0, 3).toUpperCase();

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label={`Change language (current: ${languageName})`}
        title={`Language: ${languageName}`}
        className="inline-flex items-center justify-center gap-1.5 h-10 px-2.5 rounded-lg border border-slate-200 dark:border-emerald-900/60 bg-white dark:bg-[#0D2018] text-slate-700 dark:text-emerald-100 hover:border-[#EA580C] dark:hover:border-[#FB923C] hover:text-[#C2410C] dark:hover:text-[#FB923C] transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EA580C]"
      >
        {isTranslating ? (
          <Loader2 className="w-4 h-4 animate-spin text-[#EA580C]" aria-hidden="true" />
        ) : (
          <Globe className="w-4 h-4" aria-hidden="true" />
        )}
        <span className="font-mono text-xs font-medium">{badgeCode}</span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Select website language"
          className="absolute right-0 mt-2 w-72 sm:w-80 rounded-2xl border border-slate-200 dark:border-emerald-900/70 bg-white dark:bg-[#0D2018] shadow-xl overflow-hidden z-50"
        >
          {/* Search Input */}
          <div className="p-3 border-b border-slate-200 dark:border-emerald-900/50 space-y-2">
            <div className="relative flex items-center">
              <Search
                className="w-4 h-4 text-slate-400 dark:text-emerald-200/50 absolute left-3 pointer-events-none"
                aria-hidden="true"
              />
              <input
                ref={searchInputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && query.trim()) {
                    if (filteredLanguages.length > 0 && !exactMatchExists && filteredLanguages.length === 1) {
                      void handleChoose(
                        filteredLanguages[0].code,
                        filteredLanguages[0].nativeName
                      );
                    } else if (filteredLanguages.length === 0 || !exactMatchExists) {
                      void handleCustomTranslate();
                    }
                  }
                }}
                placeholder={t.languagePicker.searchPlaceholder}
                className="w-full pl-9 pr-8 py-2 text-xs rounded-lg border border-slate-200 dark:border-emerald-900/60 bg-[#F8FAF9] dark:bg-[#07140F] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-emerald-200/40 focus:outline-none focus:border-[#EA580C]"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  aria-label="Clear language search"
                  className="absolute right-2.5 text-slate-400 hover:text-slate-700 dark:hover:text-white cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {isTranslating && (
              <div className="flex items-center gap-2 text-xs text-[#C2410C] dark:text-[#FB923C] px-1">
                <Loader2 className="w-3.5 h-3.5 animate-spin" aria-hidden="true" />
                <span>{t.languagePicker.translating}</span>
              </div>
            )}

            {translationError && (
              <p
                role="alert"
                className="text-xs text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 rounded-lg px-2.5 py-1.5"
              >
                {translationError}
              </p>
            )}
          </div>

          {/* Language List */}
          <div className="max-h-72 overflow-y-auto p-2 space-y-3">
            {instantLanguages.length > 0 && (
              <div>
                <p className="px-2 py-1 text-[11px] font-semibold text-[#15803D] dark:text-[#4ADE80]">
                  {t.languagePicker.instantGroup}
                </p>
                <div className="space-y-0.5">
                  {instantLanguages.map((lang) => {
                    const active = languageCode === lang.code;
                    return (
                      <button
                        key={lang.code}
                        type="button"
                        disabled={isTranslating}
                        onClick={() => void handleChoose(lang.code, lang.nativeName)}
                        className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs text-left transition-colors cursor-pointer ${
                          active
                            ? 'bg-orange-50 dark:bg-[#EA580C]/20 text-[#C2410C] dark:text-[#FB923C] font-semibold'
                            : 'text-slate-700 dark:text-emerald-100/85 hover:bg-slate-100 dark:hover:bg-[#07140F]'
                        }`}
                      >
                        <span className="truncate">
                          {lang.nativeName}{' '}
                          <span className="text-slate-400 dark:text-emerald-200/50 font-normal">
                            ({lang.name})
                          </span>
                        </span>
                        {active && <Check className="w-3.5 h-3.5 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {worldLanguages.length > 0 && (
              <div>
                <p className="px-2 py-1 text-[11px] font-semibold text-slate-500 dark:text-emerald-200/60">
                  {t.languagePicker.worldGroup}
                </p>
                <div className="space-y-0.5">
                  {worldLanguages.map((lang) => {
                    const active = languageCode === lang.code.toLowerCase();
                    return (
                      <button
                        key={lang.code}
                        type="button"
                        disabled={isTranslating}
                        onClick={() => void handleChoose(lang.code, lang.nativeName)}
                        className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs text-left transition-colors cursor-pointer ${
                          active
                            ? 'bg-orange-50 dark:bg-[#EA580C]/20 text-[#C2410C] dark:text-[#FB923C] font-semibold'
                            : 'text-slate-700 dark:text-emerald-100/85 hover:bg-slate-100 dark:hover:bg-[#07140F]'
                        }`}
                      >
                        <span className="truncate">
                          {lang.nativeName}{' '}
                          <span className="text-slate-400 dark:text-emerald-200/50 font-normal">
                            ({lang.name})
                          </span>
                        </span>
                        {active && <Check className="w-3.5 h-3.5 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Custom Language Trigger for literally ANY world language */}
            {normalizedQuery && !exactMatchExists && (
              <div className="p-2 border-t border-slate-200 dark:border-emerald-900/50 space-y-2">
                {filteredLanguages.length === 0 && (
                  <p className="text-[11px] text-slate-500 dark:text-emerald-200/60 px-1">
                    {t.languagePicker.noMatches}
                  </p>
                )}
                <button
                  type="button"
                  disabled={isTranslating}
                  onClick={() => void handleCustomTranslate()}
                  className="w-full py-2 px-3 rounded-lg bg-[#C2410C] hover:bg-[#9A3412] dark:bg-[#EA580C] dark:hover:bg-[#C2410C] text-white text-xs font-semibold transition-colors cursor-pointer truncate"
                >
                  {t.languagePicker.translateCustomPrefix} &ldquo;{query.trim()}&rdquo;
                </button>
              </div>
            )}
          </div>

          {languageCode !== 'en' && (
            <div className="p-2.5 border-t border-slate-200 dark:border-emerald-900/50 bg-[#F8FAF9] dark:bg-[#07140F]">
              <button
                type="button"
                onClick={() => void handleChoose('en', 'English')}
                className="w-full py-1.5 text-xs font-medium text-[#15803D] dark:text-[#4ADE80] hover:underline cursor-pointer"
              >
                {t.languagePicker.resetToEnglish}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
