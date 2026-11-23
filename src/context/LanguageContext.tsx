import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import {
  BUILTIN_TRANSLATIONS,
  EN_DICTIONARY,
  TranslationDictionary,
  WORLD_LANGUAGES,
} from '../data/translations';

interface CachedEntry {
  rtl: boolean;
  dictionary: TranslationDictionary;
}

interface LanguageContextValue {
  languageCode: string;
  languageName: string;
  isRtl: boolean;
  isTranslating: boolean;
  translationError: string | null;
  t: TranslationDictionary;
  selectLanguage: (code: string, displayName?: string) => Promise<void>;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const LANG_CODE_KEY = 'nael_selected_lang_code';
const LANG_NAME_KEY = 'nael_selected_lang_name';
const TRANSLATION_CACHE_KEY = 'nael_translation_cache_v1';

function readCache(): Record<string, CachedEntry> {
  try {
    const raw = localStorage.getItem(TRANSLATION_CACHE_KEY);
    return raw ? (JSON.parse(raw) as Record<string, CachedEntry>) : {};
  } catch {
    return {};
  }
}

function writeCache(code: string, entry: CachedEntry): void {
  try {
    const cache = readCache();
    cache[code] = entry;
    localStorage.setItem(TRANSLATION_CACHE_KEY, JSON.stringify(cache));
  } catch {
    // Ignore storage quota errors
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [languageCode, setLanguageCode] = useState<string>(() => {
    try {
      return localStorage.getItem(LANG_CODE_KEY) || 'en';
    } catch {
      return 'en';
    }
  });

  const [languageName, setLanguageName] = useState<string>(() => {
    try {
      return localStorage.getItem(LANG_NAME_KEY) || 'English';
    } catch {
      return 'English';
    }
  });

  const [dictionary, setDictionary] = useState<TranslationDictionary>(() => {
    const code = (() => {
      try {
        return localStorage.getItem(LANG_CODE_KEY) || 'en';
      } catch {
        return 'en';
      }
    })();

    if (BUILTIN_TRANSLATIONS[code]) {
      return BUILTIN_TRANSLATIONS[code];
    }
    const cached = readCache()[code];
    return cached?.dictionary ?? EN_DICTIONARY;
  });

  const [isRtl, setIsRtl] = useState<boolean>(() => {
    const code = (() => {
      try {
        return localStorage.getItem(LANG_CODE_KEY) || 'en';
      } catch {
        return 'en';
      }
    })();
    const known = WORLD_LANGUAGES.find((l) => l.code === code);
    if (known?.rtl) return true;
    const cached = readCache()[code];
    return Boolean(cached?.rtl);
  });

  const [isTranslating, setIsTranslating] = useState(false);
  const [translationError, setTranslationError] = useState<string | null>(null);

  useEffect(() => {
    document.documentElement.lang = languageCode;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
  }, [languageCode, isRtl]);

  const selectLanguage = async (code: string, displayName?: string) => {
    const normalizedCode = code.trim().toLowerCase();
    const known = WORLD_LANGUAGES.find(
      (l) => l.code.toLowerCase() === normalizedCode
    );
    const resolvedName =
      displayName?.trim() || known?.nativeName || known?.name || code.trim();

    setTranslationError(null);

    // 1. Built-in instant dictionary
    if (BUILTIN_TRANSLATIONS[normalizedCode]) {
      setLanguageCode(normalizedCode);
      setLanguageName(resolvedName);
      setDictionary(BUILTIN_TRANSLATIONS[normalizedCode]);
      setIsRtl(Boolean(known?.rtl));
      try {
        localStorage.setItem(LANG_CODE_KEY, normalizedCode);
        localStorage.setItem(LANG_NAME_KEY, resolvedName);
      } catch {
        // Ignore storage errors
      }
      return;
    }

    // 2. Cached dynamic translation
    const cacheKey = normalizedCode || resolvedName.toLowerCase();
    const cached = readCache()[cacheKey];
    if (cached?.dictionary) {
      setLanguageCode(cacheKey);
      setLanguageName(resolvedName);
      setDictionary(cached.dictionary);
      setIsRtl(Boolean(cached.rtl || known?.rtl));
      try {
        localStorage.setItem(LANG_CODE_KEY, cacheKey);
        localStorage.setItem(LANG_NAME_KEY, resolvedName);
      } catch {
        // Ignore storage errors
      }
      return;
    }

    // 3. Server-side translation for any world language
    setIsTranslating(true);
    try {
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          targetCode: cacheKey,
          targetLanguage: known ? `${known.name} (${known.nativeName})` : resolvedName,
          dictionary: EN_DICTIONARY,
        }),
      });

      const data = (await response.json()) as {
        error?: string;
        rtl?: boolean;
        dictionary?: TranslationDictionary;
      };

      if (!response.ok || !data.dictionary) {
        throw new Error(
          data.error || 'Could not translate into this language right now.'
        );
      }

      const rtlFlag = Boolean(data.rtl || known?.rtl);
      writeCache(cacheKey, { rtl: rtlFlag, dictionary: data.dictionary });
      setLanguageCode(cacheKey);
      setLanguageName(resolvedName);
      setDictionary(data.dictionary);
      setIsRtl(rtlFlag);

      try {
        localStorage.setItem(LANG_CODE_KEY, cacheKey);
        localStorage.setItem(LANG_NAME_KEY, resolvedName);
      } catch {
        // Ignore storage errors
      }
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'Translation failed. Please try again.';
      setTranslationError(message);
    } finally {
      setIsTranslating(false);
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        languageCode,
        languageName,
        isRtl,
        isTranslating,
        translationError,
        t: dictionary,
        selectLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}
