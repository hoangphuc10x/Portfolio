import { useLang } from "../i18n/lang.jsx";
import { useReveal } from "./useReveal.js";
import SectionHeading from "./SectionHeading.jsx";
import { SKILL_ICONS } from "../data/icons.js";

export default function Skills() {
  const { t, lang } = useLang();
  const skills = t.skills;
  const ref = useReveal({}, [lang]);

  return (
    <section id="skills" ref={ref} className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="02" kicker={t.ui.sections.skills.kicker} title={t.ui.sections.skills.title} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, i) => (
            <div
              key={group.category}
              className={`reveal ${i % 2 === 0 ? "reveal-left" : "reveal-right"} card card-hover p-7`}
            >
              <h3 className="font-display font-semibold text-xl text-[var(--color-ink)] mb-5 flex items-center gap-2">
                <span className="w-1.5 h-5 rounded bg-[var(--color-accent)]" />
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const icon = SKILL_ICONS[item];
                  return (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 font-mono text-sm sm:text-base text-[var(--color-ink-soft)] px-3 py-1.5 rounded-lg bg-[var(--color-surface)] border border-[var(--color-line)] hover:border-[var(--color-accent)]/50 hover:text-[var(--color-ink)] transition-colors"
                    >
                      {icon && (
                        <img
                          src={icon}
                          alt=""
                          aria-hidden="true"
                          loading="lazy"
                          className="w-4 h-4 sm:w-[18px] sm:h-[18px] object-contain shrink-0"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      )}
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
