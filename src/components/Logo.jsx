// Logo monogram chữ "P" cách điệu — badge bo góc, viền gradient + chấm neon.
export default function Logo({ size = 34, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#22d3ee" />
          <stop offset="0.5" stopColor="#a855f7" />
          <stop offset="1" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      {/* badge nền tối + viền gradient */}
      <rect x="4" y="4" width="92" height="92" rx="26" fill="#0a0a12" />
      <rect
        x="4" y="4" width="92" height="92" rx="26"
        fill="none" stroke="url(#logo-grad)" strokeWidth="3"
      />
      {/* chữ P cách điệu: thân + bụng tròn */}
      <path
        d="M37 26 V76"
        fill="none" stroke="url(#logo-grad)" strokeWidth="12" strokeLinecap="round"
      />
      <path
        d="M37 26 H56 a17 17 0 0 1 0 34 H37"
        fill="none" stroke="url(#logo-grad)" strokeWidth="12"
        strokeLinecap="round" strokeLinejoin="round"
      />
      {/* chấm neon nhấn — đặt bên trái chữ P */}
      <circle cx="38" cy="82" r="6.5" fill="#22d3ee"></circle>
    </svg>
  );
}
