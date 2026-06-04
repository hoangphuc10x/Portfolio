import { useLang } from "../i18n/lang.jsx";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="px-6 py-10 border-t border-white/5">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <p className="font-mono">
          © {t.profile.name} — {t.ui.footer.built}
        </p>
        <a href="#top" className="font-mono hover:text-white transition-colors">
          {t.ui.footer.top}
        </a>
      </div>
    </footer>
  );
}
