import { FormEvent, useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Send,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CONTACT_INFO } from '../data/portfolioConfig';
import { Reveal } from './Reveal';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactSection() {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [validatedSuccess, setValidatedSuccess] = useState(false);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!name.trim()) {
      nextErrors.name = t.contact.errName;
    }
    if (!email.trim()) {
      nextErrors.email = t.contact.errEmail;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = t.contact.errEmailInvalid;
    }
    if (!message.trim()) {
      nextErrors.message = t.contact.errMessage;
    }
    return nextErrors;
  };

  /**
   * NOTE FOR BACKEND / EMAIL SERVICE INTEGRATION:
   * Replace this handler with a fetch() request to your backend endpoint,
   * Formspree, Web3Forms, or EmailJS when ready to send live emails.
   */
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setValidatedSuccess(false);
      return;
    }

    setErrors({});
    setValidatedSuccess(true);
  };

  const contactMethods = [
    {
      id: 'phone',
      label: t.contact.phoneLabel,
      value: CONTACT_INFO.phoneDisplay,
      href: CONTACT_INFO.phoneHref,
      icon: Phone,
      external: false,
      accent: 'green' as const,
      ltrValue: true,
    },
    {
      id: 'email',
      label: t.contact.emailLabel,
      value: CONTACT_INFO.email,
      href: CONTACT_INFO.emailHref,
      icon: Mail,
      external: false,
      accent: 'orange' as const,
      ltrValue: true,
    },
    {
      id: 'linkedin',
      label: t.contact.linkedinLabel,
      value: CONTACT_INFO.linkedinLabel,
      href: CONTACT_INFO.linkedinUrl,
      icon: Linkedin,
      external: true,
      accent: 'green' as const,
      ltrValue: false,
    },
    {
      id: 'github',
      label: t.contact.githubLabel,
      value: CONTACT_INFO.githubDisplay,
      href: CONTACT_INFO.githubUrl,
      icon: Github,
      external: true,
      accent: 'orange' as const,
      ltrValue: true,
    },
    {
      id: 'instagram',
      label: t.contact.instagramLabel,
      value: CONTACT_INFO.instagramDisplay,
      href: CONTACT_INFO.instagramUrl,
      icon: Instagram,
      external: true,
      accent: 'green' as const,
      ltrValue: true,
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 md:py-28 border-t border-slate-200 dark:border-emerald-900/40 bg-[#F8FAF9]/80 dark:bg-[#0C1D15]/45"
    >
      {/* Subtle Ambient CTA Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 start-1/4 w-[420px] h-[420px] -z-10 rounded-full bg-[#EA580C]/8 dark:bg-[#EA580C]/14 blur-3xl animate-ambient-pulse"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 end-10 w-[340px] h-[340px] -z-10 rounded-full bg-[#16A34A]/8 dark:bg-[#16A34A]/12 blur-3xl animate-ambient-pulse"
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Headline & Direct Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <p className="text-sm font-semibold text-[#C2410C] dark:text-[#FB923C] mb-2">
                  {t.contact.eyebrow}
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
                  {t.contact.heading}
                </h2>
                <p className="mt-4 text-base text-slate-600 dark:text-emerald-100/75 leading-relaxed">
                  {t.contact.supportingText}
                </p>
              </div>

              <div className="space-y-3">
                {contactMethods.map((item, idx) => {
                  const Icon = item.icon;
                  const isOrange = item.accent === 'orange';
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noreferrer' : undefined}
                      style={{ transitionDelay: `${idx * 40}ms` }}
                      className="group flex items-center gap-3.5 p-3.5 rounded-[12px] border border-slate-200 dark:border-emerald-900/50 bg-white dark:bg-[#06110C] hover:-translate-y-0.5 hover:border-[#EA580C] dark:hover:border-[#FB923C] hover:shadow-md transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EA580C]"
                    >
                      <div
                        className={`w-10 h-10 rounded-[8px] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105 ${
                          isOrange
                            ? 'bg-orange-100 dark:bg-[#EA580C]/20 text-[#C2410C] dark:text-[#FB923C]'
                            : 'bg-emerald-100 dark:bg-[#16A34A]/20 text-[#15803D] dark:text-[#4ADE80]'
                        }`}
                      >
                        <Icon className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-medium text-slate-500 dark:text-emerald-200/60">
                          {item.label}
                        </p>
                        <p
                          dir={item.ltrValue ? 'ltr' : undefined}
                          className="text-sm font-medium text-slate-900 dark:text-white group-hover:text-[#C2410C] dark:group-hover:text-[#FB923C] transition-colors truncate"
                        >
                          {item.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Validated Contact Form */}
            <div className="lg:col-span-7">
              <div className="rounded-[20px] border border-slate-200 dark:border-emerald-900/50 bg-white dark:bg-[#06110C] p-6 sm:p-8 shadow-sm">
                {validatedSuccess ? (
                  <div className="py-8 space-y-4">
                    <div className="w-12 h-12 rounded-[12px] bg-emerald-500/15 text-[#15803D] dark:text-[#4ADE80] flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                      {t.contact.successTitlePrefix} {name}.
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-emerald-100/75 leading-relaxed">
                      {t.contact.successBody}{' '}
                      <span
                        dir="ltr"
                        className="font-medium text-slate-900 dark:text-white"
                      >
                        {CONTACT_INFO.email}
                      </span>
                      .
                    </p>
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <a
                        href={`${CONTACT_INFO.emailHref}?subject=${encodeURIComponent(
                          `Portfolio Inquiry from ${name}`
                        )}&body=${encodeURIComponent(
                          `Name: ${name}\nEmail: ${email}\n\n${message}`
                        )}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#C2410C] hover:bg-[#9A3412] dark:bg-[#EA580C] dark:hover:bg-[#C2410C] rounded-[12px] hover:-translate-y-0.5 transition-all duration-200"
                      >
                        <Mail className="w-4 h-4" aria-hidden="true" />
                        <span>{t.contact.openMailApp}</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          setValidatedSuccess(false);
                          setName('');
                          setEmail('');
                          setMessage('');
                        }}
                        className="px-4 py-2.5 text-sm font-medium text-slate-600 dark:text-emerald-100/75 hover:text-slate-900 dark:hover:text-white cursor-pointer"
                      >
                        {t.contact.resetForm}
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-medium text-slate-800 dark:text-emerald-50 mb-1.5"
                      >
                        {t.contact.nameLabel}
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                        }}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'error-name' : undefined}
                        placeholder={t.contact.namePlaceholder}
                        className="w-full px-4 py-2.5 text-sm rounded-[12px] border border-slate-300 dark:border-emerald-900/60 bg-[#F8FAF9] dark:bg-[#0C1D15] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-emerald-200/40 focus:outline-none focus:border-[#EA580C] dark:focus:border-[#FB923C] focus:ring-4 focus:ring-[#EA580C]/15 transition-all duration-200"
                      />
                      {errors.name && (
                        <p
                          id="error-name"
                          role="alert"
                          className="mt-1.5 inline-flex items-center gap-1.5 text-xs font-medium text-red-600 dark:text-red-400"
                        >
                          <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-medium text-slate-800 dark:text-emerald-50 mb-1.5"
                      >
                        {t.contact.emailInputLabel}
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        dir="ltr"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                        }}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'error-email' : undefined}
                        placeholder={t.contact.emailPlaceholder}
                        className="w-full px-4 py-2.5 text-sm rounded-[12px] border border-slate-300 dark:border-emerald-900/60 bg-[#F8FAF9] dark:bg-[#0C1D15] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-emerald-200/40 focus:outline-none focus:border-[#EA580C] dark:focus:border-[#FB923C] focus:ring-4 focus:ring-[#EA580C]/15 transition-all duration-200"
                      />
                      {errors.email && (
                        <p
                          id="error-email"
                          role="alert"
                          className="mt-1.5 inline-flex items-center gap-1.5 text-xs font-medium text-red-600 dark:text-red-400"
                        >
                          <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-sm font-medium text-slate-800 dark:text-emerald-50 mb-1.5"
                      >
                        {t.contact.messageLabel}
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        value={message}
                        onChange={(e) => {
                          setMessage(e.target.value);
                          if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                        }}
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={errors.message ? 'error-message' : undefined}
                        placeholder={t.contact.messagePlaceholder}
                        className="w-full px-4 py-3 text-sm rounded-[12px] border border-slate-300 dark:border-emerald-900/60 bg-[#F8FAF9] dark:bg-[#0C1D15] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-emerald-200/40 focus:outline-none focus:border-[#EA580C] dark:focus:border-[#FB923C] focus:ring-4 focus:ring-[#EA580C]/15 transition-all duration-200 resize-y"
                      />
                      {errors.message && (
                        <p
                          id="error-message"
                          role="alert"
                          className="mt-1.5 inline-flex items-center gap-1.5 text-xs font-medium text-red-600 dark:text-red-400"
                        >
                          <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    <div className="pt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <p className="text-xs text-slate-500 dark:text-emerald-200/60">
                        {t.contact.frontendNote}
                      </p>
                      <button
                        type="submit"
                        className="group inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-[#C2410C] hover:bg-[#9A3412] dark:bg-[#EA580C] dark:hover:bg-[#C2410C] rounded-[12px] shadow-xs hover:shadow-[0_8px_20px_-6px_rgba(234,88,12,0.5)] hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EA580C]"
                      >
                        <span>{t.contact.sendButton}</span>
                        <Send
                          className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
