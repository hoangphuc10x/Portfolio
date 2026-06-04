// Tiêu đề section dùng chung: số thứ tự mono + tên section gradient.
export default function SectionHeading({ index, title, kicker }) {
  return (
    <div className="mb-12 sm:mb-16 reveal">
      {kicker && (
        <p className="font-mono text-sm sm:text-base text-[var(--color-neon-cyan)] mb-3">
          {kicker}
        </p>
      )}
      <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight flex items-baseline gap-3 sm:gap-4">
        <span className="font-mono text-base sm:text-lg text-gray-600">{index}</span>
        <span className="text-white">{title}</span>
      </h2>
    </div>
  );
}
