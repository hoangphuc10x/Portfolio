import ProjectCover from "./ProjectCover.jsx";
import { useLang } from "../i18n/lang.jsx";

// Card dự án tĩnh, sạch — hover nhấc nhẹ, không nghiêng 3D / ánh sáng cầu vồng.
export default function ProjectCard({ project, featured, index = 0 }) {
  const { t } = useLang();
  const L = t.ui.project;
  // card lớn (featured) trôi từ dưới; các card còn lại dạt xen kẽ trái / phải
  const dir = featured ? "" : index % 2 === 0 ? "reveal-left" : "reveal-right";

  const open = (url) => (e) => {
    e.stopPropagation();
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  // Click vào card mở link dự án (nếu có) như một lối tắt tiện lợi.
  return (
    <article
      onClick={project.link ? open(project.link) : undefined}
      className={`reveal ${dir} card card-hover p-8 flex flex-col overflow-hidden ${
        project.link ? "cursor-pointer" : ""
      } ${featured ? "lg:col-span-6" : "lg:col-span-3"}`}
    >
      {/* ảnh bìa theo chủ đề, tràn ra sát mép card */}
      <div className="-mx-8 -mt-8 mb-6 h-48 sm:h-60 border-b border-[var(--color-line)]">
        <ProjectCover title={project.title} />
      </div>

      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display font-bold text-2xl sm:text-3xl text-[var(--color-ink)]">
          {project.title}
        </h3>
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-[var(--color-muted)] text-sm font-mono hover:text-[var(--color-accent)] shrink-0"
          >
            {L.code}↗
          </a>
        )}
      </div>

      <p className="mt-4 text-base sm:text-lg text-[var(--color-muted)] leading-relaxed flex-1">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs text-[var(--color-accent-ink)] px-2.5 py-1 rounded-md bg-[var(--color-accent)]/8 border border-[var(--color-accent)]/20"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Hai hành động: mở link dự án & xem sơ đồ kiến trúc */}
      {(project.link || project.doc) && (
        <div className="mt-6 flex flex-wrap gap-3">
          {project.link && (
            <button
              type="button"
              onClick={open(project.link)}
              className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium text-white bg-[var(--color-accent)] hover:opacity-90 transition-opacity"
            >
              {L.live} ↗
            </button>
          )}
          {project.doc && (
            <button
              type="button"
              onClick={open(project.doc)}
              className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium text-[var(--color-ink)] border border-[var(--color-line)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
            >
              {L.doc} ↗
            </button>
          )}
        </div>
      )}
    </article>
  );
}
