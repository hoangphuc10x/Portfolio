import { useLang } from "../i18n/lang.jsx";
import { useReveal } from "./useReveal.js";
import Magnetic from "./Magnetic.jsx";

export default function Contact() {
  const { t, lang } = useLang();
  const ref = useReveal({}, [lang]);
  const c = t.ui.contact;
  const socials = Object.entries(t.profile.socials).filter(([, v]) => v);

  return (
    <section id="contact" ref={ref} className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <p className="reveal font-mono text-sm text-[var(--color-neon-cyan)] mb-4">
          {c.kicker}
        </p>
        <h2 className="reveal font-display font-bold text-4xl sm:text-6xl tracking-tight">
          <span className="text-white">{c.titleA}</span>{" "}
          <span className="gradient-text">{c.titleB}</span>
        </h2>
        <p className="reveal mt-6 text-lg text-gray-400 leading-relaxed">
          {c.paragraph}
        </p>

        <div className="reveal mt-10 flex justify-center">
          <Magnetic>
            <a
              href={`mailto:${t.profile.email}`}
              className="btn-neon inline-flex rounded-full px-8 py-4 font-semibold text-[#07070d] text-lg break-all"
            >
              {t.profile.email}
            </a>
          </Magnetic>
        </div>

        <div className="reveal mt-10 flex justify-center gap-6 font-mono text-sm">
          {socials.map(([key, url]) => (
            <a
              key={key}
              href={url}
              target={key === "email" ? undefined : "_blank"}
              rel="noreferrer"
              className="nav-link text-gray-400 hover:text-white"
            >
              {c.socials[key] || key} ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
