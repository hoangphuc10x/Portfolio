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
          <div className="reveal lg:col-span-1 mx-auto w-full max-w-xs lg:max-w-none">
            <div className="relative float">
              <div className="absolute -inset-2 rounded-[1.5rem] bg-gradient-to-br from-[var(--color-neon-cyan)] via-[var(--color-neon-purple)] to-[var(--color-neon-pink)] opacity-40 blur-2xl" />
              <div className="relative rounded-[1.3rem] p-[2px] bg-gradient-to-br from-[var(--color-neon-cyan)] via-[var(--color-neon-purple)] to-[var(--color-neon-pink)]">
                <img
                  src={t.profile.photo}
                  alt={t.profile.name}
                  loading="lazy"
                  className="rounded-[1.2rem] w-full aspect-[3/4] object-cover object-center bg-[var(--color-bg-soft)]"
                />
              </div>
            </div>
          </div>

          {/* Nội dung + số liệu */}
          <div className="lg:col-span-2 space-y-6">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="reveal text-lg sm:text-xl text-gray-300 leading-relaxed">
                {p}
              </p>
            ))}

            <div className="grid grid-cols-3 gap-4 pt-2">
              {about.stats.map((s) => (
                <div key={s.label} className="reveal glass glass-hover p-5 sm:p-6 text-center sm:text-left">
                  <div className="font-display font-bold text-3xl sm:text-4xl gradient-text">
                    {s.value}
                  </div>
                  <div className="mt-1 text-sm text-gray-400">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
