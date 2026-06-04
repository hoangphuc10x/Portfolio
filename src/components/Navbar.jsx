import { useEffect, useState } from "react";
import ScrollProgress from "./ScrollProgress.jsx";
import LanguageSwitcher from "./LanguageSwitcher.jsx";
import Logo from "./Logo.jsx";
import { useLang } from "../i18n/lang.jsx";

export default function Navbar() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#about", label: t.ui.nav.about },
    { href: "#skills", label: t.ui.nav.skills },
    { href: "#projects", label: t.ui.nav.projects },
    { href: "#experience", label: t.ui.nav.experience },
    { href: "#contact", label: t.ui.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <ScrollProgress />
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
          scrolled ? "py-3 backdrop-blur-xl bg-[#07070d]/70 border-b border-white/5" : "py-5"
        }`}
      >
        <nav className="mx-auto max-w-6xl px-6 flex items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg tracking-tight shrink-0">
            <Logo size={32} className="drop-shadow-[0_0_8px_rgba(34,211,238,0.35)]" />
            <span>
              <span className="gradient-text">Phúc</span>
              <span className="text-white">.dev</span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="nav-link">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <a
              href="#contact"
              className="hidden md:inline-flex btn-neon rounded-full px-5 py-2 text-sm font-semibold text-[#07070d]"
            >
              {t.ui.nav.cta}
            </a>
            <button
              className="md:hidden text-2xl text-white"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </nav>

        {open && (
          <div className="md:hidden mx-6 mt-3 glass p-4 flex flex-col gap-3 text-sm">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-1 text-gray-300 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
