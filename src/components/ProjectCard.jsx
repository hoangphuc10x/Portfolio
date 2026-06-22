import ProjectCover from "./ProjectCover.jsx";

// Card dự án tĩnh, sạch — hover nhấc nhẹ, không nghiêng 3D / ánh sáng cầu vồng.
export default function ProjectCard({ project, featured, index = 0 }) {
  // card lớn (featured) trôi từ dưới; các card còn lại dạt xen kẽ trái / phải
  const dir = featured ? "" : index % 2 === 0 ? "reveal-left" : "reveal-right";
  const openLink = () => {
    if (project.link) window.open(project.link, "_blank", "noopener,noreferrer");
  };
  return (
    <article
      onClick={openLink}
      className={`reveal ${dir} card card-hover p-8 flex flex-col overflow-hidden ${
        project.link ? "cursor-pointer" : ""
      } ${featured ? "lg:col-span-6" : "lg:col-span-3"}`}
    >
      {/* ảnh bìa theo chủ đề, tràn ra sát mép card */}
      <div className="-mx-8 -mt-8 mb-6 h-32 sm:h-40 border-b border-[var(--color-line)]">
        <ProjectCover title={project.title} />
      </div>

      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display font-bold text-2xl sm:text-3xl text-[var(--color-ink)]">
          {project.title}
        </h3>
        <div className="flex gap-3 text-[var(--color-muted)] text-sm font-mono">
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="hover:text-[var(--color-accent)]">
              code↗
            </a>
          )}
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="hover:text-[var(--color-accent)]">
              live↗
            </a>
          )}
        </div>
      </div>

      <p className="mt-4 text-base sm:text-lg text-[var(--color-muted)] leading-relaxed flex-1">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span
            key={t}
            className="font-mono text-xs text-[var(--color-accent-ink)] px-2.5 py-1 rounded-md bg-[var(--color-accent)]/8 border border-[var(--color-accent)]/20"
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}
