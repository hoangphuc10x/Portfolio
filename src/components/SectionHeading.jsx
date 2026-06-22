// Tiêu đề section dùng chung: số thứ tự mono + tên section gradient.
export default function SectionHeading({ index, title, kicker }) {
  return (
    <div className="mb-12 sm:mb-16 reveal">
      {kicker && (
        <p className="font-mono text-sm sm:text-base uppercase tracking-widest text-[var(--color-accent)] mb-3">
          {kicker}
        </p>
      )}
      <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight flex items-baseline gap-3 sm:gap-4">
        <span className="font-mono text-base sm:text-lg text-[var(--color-faint)]">{index}</span>
        <span className="text-[var(--color-ink)]">{title}</span>
      </h2>
    </div>
  );
}
