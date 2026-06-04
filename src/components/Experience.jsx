import { useLang } from "../i18n/lang.jsx";
import { useReveal } from "./useReveal.js";
import SectionHeading from "./SectionHeading.jsx";

export default function Experience() {
  const { t, lang } = useLang();
  const experience = t.experience;
  const ref = useReveal({ stagger: 0.18 }, [lang]);

  return (
    <section id="experience" ref={ref} className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="04" kicker={t.ui.sections.experience.kicker} title={t.ui.sections.experience.title} />

        <div className="relative ml-2 sm:ml-3 border-l border-white/10 pl-6 sm:pl-10 space-y-14 sm:space-y-20">
          {experience.map((job) => (
            <div key={job.role + job.company} className="reveal relative">
              {/* chấm trên timeline */}
              <span className="absolute -left-[31px] sm:-left-[51px] top-2 w-4 h-4 rounded-full bg-[var(--color-bg)] border-2 border-[var(--color-neon-cyan)] neon-glow" />

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                  {job.role}{" "}
                  <span className="text-[var(--color-neon-purple)]">@ {job.company}</span>
                </h3>
                <span className="font-mono text-sm text-gray-500">{job.period}</span>
              </div>

              {job.stack && (
                <p className="mt-3 font-mono text-xs sm:text-sm text-gray-500 break-words">{job.stack}</p>
              )}

              <ul className="mt-5 space-y-3.5">
                {job.points.map((pt, i) => (
                  <li key={i} className="flex gap-3 text-base sm:text-lg text-gray-300 leading-relaxed">
                    <span className="text-[var(--color-neon-cyan)] mt-1 shrink-0">▹</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
