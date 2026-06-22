import { useLang } from "../i18n/lang.jsx";
import { useReveal } from "./useReveal.js";
import SectionHeading from "./SectionHeading.jsx";

export default function About() {
  const { t, lang } = useLang();
  const about = t.about;
  const ref = useReveal({}, [lang]);

  return (
    <section id="about" ref={ref} className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="01" kicker={t.ui.sections.about.kicker} title={t.ui.sections.about.title} />

        <div className="grid lg:grid-cols-3 gap-10 lg:gap-14 items-start">
          {/* Ảnh chân dung với khung gradient + glow */}
          <div className="reveal reveal-left lg:col-span-1 mx-auto w-full max-w-xs lg:max-w-none">
            <div className="relative float">
              {/* khung lệch tinh tế thay cho viền gradient phát sáng */}
              <img
                src={t.profile.photo}
                alt={t.profile.name}
                loading="lazy"
                className="relative rounded-[1.1rem] w-full aspect-[3/4] object-cover object-center bg-[var(--color-surface)] border border-[var(--color-line)]"
              />
            </div>
          </div>

          {/* Nội dung + số liệu */}
          <div className="lg:col-span-2 space-y-6">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="reveal reveal-right text-lg sm:text-xl text-[var(--color-ink-soft)] leading-relaxed">
                {p}
              </p>
            ))}

            <div className="grid grid-cols-3 gap-4 pt-2">
              {about.stats.map((s) => (
                <div key={s.label} className="reveal card card-hover p-5 sm:p-6 text-center sm:text-left">
                  <div className="font-display font-bold text-3xl sm:text-4xl text-[var(--color-accent)]">
                    {s.value}
                  </div>
                  <div className="mt-1 text-sm text-[var(--color-muted)]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
