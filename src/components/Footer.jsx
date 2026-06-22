import { useLang } from "../i18n/lang.jsx";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="px-6 py-10 border-t border-[var(--color-line)]">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--color-faint)]">
        <p className="font-mono">
          © {t.profile.name} — {t.ui.footer.built}
        </p>
        <a href="#top" className="font-mono hover:text-[var(--color-accent)] transition-colors">
          {t.ui.footer.top}
        </a>
      </div>
    </footer>
  );
}
