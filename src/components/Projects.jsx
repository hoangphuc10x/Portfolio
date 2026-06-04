import { useLang } from "../i18n/lang.jsx";
import { useReveal } from "./useReveal.js";
import SectionHeading from "./SectionHeading.jsx";
import ProjectCard from "./ProjectCard.jsx";

export default function Projects() {
  const { t, lang } = useLang();
  const projects = t.projects;
  const ref = useReveal({ stagger: 0.15 }, [lang]);

  return (
    <section id="projects" ref={ref} className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="03" kicker={t.ui.sections.projects.kicker} title={t.ui.sections.projects.title} />

        <div className="grid lg:grid-cols-6 gap-6 lg:gap-7 [perspective:1200px]">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} featured={p.featured} />
          ))}
        </div>
      </div>
    </section>
  );
}
