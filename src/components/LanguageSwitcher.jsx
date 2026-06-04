import { useLang } from "../i18n/lang.jsx";

// Nút chuyển ngôn ngữ dạng segmented: VI / EN / 中
export default function LanguageSwitcher({ className = "" }) {
  const { lang, setLang, languages } = useLang();

  return (
    <div
      className={`inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] p-1 ${className}`}
      role="group"
      aria-label="Language"
    >
      {languages.map((l) => {
        const active = l.code === lang;
        return (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            title={l.name}
            aria-pressed={active}
            className={`relative px-3 py-1 rounded-full text-sm font-mono font-medium transition-colors ${
              active
                ? "text-[#07070d]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {active && (
              <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[var(--color-neon-cyan)] to-[var(--color-neon-purple)]" />
            )}
            {l.label}
          </button>
        );
      })}
    </div>
  );
}
