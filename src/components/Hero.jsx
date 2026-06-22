import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLang } from "../i18n/lang.jsx";
import Typewriter from "./Typewriter.jsx";
import Magnetic from "./Magnetic.jsx";

export default function Hero() {
  const { t } = useLang();
  const root = useRef(null);
  const allSkills = t.skills.flatMap((s) => s.items);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });
      tl.from(".hero-eyebrow", { opacity: 0, y: 20 })
        .from(".hero-title span", { opacity: 0, y: 40, stagger: 0.08 }, "-=0.6")
        .from(".hero-role", { opacity: 0, y: 20 }, "-=0.5")
        .from(".hero-tagline", { opacity: 0, y: 20 }, "-=0.6")
        .from(".hero-cta", { opacity: 0, y: 20, stagger: 0.1 }, "-=0.6")
        .from(".hero-marquee", { opacity: 0 }, "-=0.4");
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={root}
      className="relative min-h-screen flex flex-col justify-center px-6 pt-28 pb-16"
    >
      <div className="mx-auto max-w-6xl w-full">
        <p className="hero-eyebrow font-mono text-sm uppercase tracking-widest text-[var(--color-accent)] mb-5">
          <span className="inline-block w-2 h-2 rounded-full bg-[var(--color-accent)] mr-2 align-middle animate-pulse" />
          {t.profile.availability} · {t.profile.location}
        </p>

        <h1 className="hero-title font-display font-bold leading-[1.12] text-5xl sm:text-7xl lg:text-8xl tracking-tight">
          <span className="block text-[var(--color-ink)] pb-1">{t.ui.hero.greeting}</span>
          <span className="block text-[var(--color-ink)] pb-2">
            {t.profile.name}<span className="accent-text">.</span>
          </span>
        </h1>

        <div className="hero-role mt-6 font-mono text-xl sm:text-2xl text-[var(--color-ink-soft)]">
          <Typewriter key={`${t.profile.roles.join()}`} words={t.profile.roles} />
        </div>

        <p className="hero-tagline mt-6 max-w-2xl text-lg text-[var(--color-muted)] leading-relaxed">
          {t.profile.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Magnetic className="hero-cta">
            <a
              href="#projects"
              className="btn-primary inline-flex rounded-full px-7 py-3 font-semibold"
            >
              {t.ui.hero.viewProjects}
            </a>
          </Magnetic>
          <Magnetic className="hero-cta">
            <a
              href="#contact"
              className="inline-flex rounded-full px-7 py-3 font-semibold text-[var(--color-ink)] border border-[var(--color-ink)]/20 hover:border-[var(--color-ink)]/50 transition-colors"
            >
              {t.ui.hero.contactMe}
            </a>
          </Magnetic>
          {t.profile.resumeUrl && (
            <Magnetic className="hero-cta">
              <a
                href={t.profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full px-7 py-3 font-semibold text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors"
              >
                {t.ui.hero.downloadCv}
              </a>
            </Magnetic>
          )}
        </div>
      </div>

      {/* Marquee kỹ năng chạy ngang */}
      <div className="hero-marquee mt-20 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div className="marquee">
          {[...allSkills, ...allSkills].map((s, idx) => (
            <span
              key={idx}
              className="font-mono text-sm text-[var(--color-muted)] px-4 py-2 rounded-full border border-[var(--color-line)] bg-[#fffdf9] whitespace-nowrap"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
