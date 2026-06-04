import { useRef } from "react";
import gsap from "gsap";
import ProjectCover from "./ProjectCover.jsx";

// Card dự án với hiệu ứng nghiêng 3D + ánh sáng bám theo con trỏ.
export default function ProjectCard({ project, featured }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    gsap.to(el, {
      rotateY: (px - 0.5) * 12,
      rotateX: (0.5 - py) * 12,
      duration: 0.5,
      ease: "power2.out",
      transformPerspective: 900,
    });
    el.style.setProperty("--gx", `${px * 100}%`);
    el.style.setProperty("--gy", `${py * 100}%`);
  };

  const reset = () => {
    gsap.to(ref.current, { rotateX: 0, rotateY: 0, duration: 0.7, ease: "elastic.out(1,0.5)" });
  };

  return (
    <article
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      className={`reveal tilt-card glass glass-hover p-8 flex flex-col overflow-hidden ${
        featured ? "lg:col-span-6" : "lg:col-span-3"
      }`}
    >
      {/* ảnh bìa theo chủ đề, tràn ra sát mép card */}
      <div className="-mx-8 -mt-8 mb-6 h-32 sm:h-40 border-b border-white/10">
        <ProjectCover title={project.title} />
      </div>

      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
          {project.title}
        </h3>
        <div className="flex gap-3 text-gray-400 text-sm font-mono">
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noreferrer" className="hover:text-white">
              code↗
            </a>
          )}
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer" className="hover:text-white">
              live↗
            </a>
          )}
        </div>
      </div>

      <p className="mt-4 text-base sm:text-lg text-gray-400 leading-relaxed flex-1">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span
            key={t}
            className="font-mono text-xs text-[var(--color-neon-cyan)] px-2.5 py-1 rounded-md bg-[var(--color-neon-cyan)]/10 border border-[var(--color-neon-cyan)]/20"
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}
