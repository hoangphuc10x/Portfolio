// Ảnh bìa SVG theo chủ đề cho từng dự án (neon, khớp tông màu, không cần mạng).
// Chọn graphic theo tên dự án (tên giống nhau ở mọi ngôn ngữ).

function pickType(title = "") {
  const t = title.toLowerCase();
  if (t.includes("solana") || t.includes("swap")) return "solana";
  if (t.includes("localization") || t.includes("wordbee")) return "localization";
  if (t.includes("attendance")) return "attendance";
  if (t.includes("flight") || t.includes("booking")) return "flight";
  return "solana";
}

const svgProps = {
  viewBox: "0 0 400 180",
  preserveAspectRatio: "xMidYMid slice",
  className: "w-full h-full",
  "aria-hidden": "true",
};

function Bg({ id, from = "#0d1424", to = "#0a0a12" }) {
  return (
    <>
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={from} />
          <stop offset="1" stopColor={to} />
        </linearGradient>
      </defs>
      <rect width="400" height="180" fill={`url(#${id}-bg)`} />
      <g stroke="rgba(255,255,255,0.04)" strokeWidth="1">
        {[36, 72, 108, 144].map((y) => (
          <line key={y} x1="0" y1={y} x2="400" y2={y} />
        ))}
        {[80, 160, 240, 320].map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="180" />
        ))}
      </g>
    </>
  );
}

/* ---------- Solana: biểu đồ nến lên xuống + đồng SOL ---------- */
function Solana() {
  const candles = [
    { x: 46, wt: 40, wb: 104, bt: 56, bb: 88, up: true },
    { x: 96, wt: 58, wb: 120, bt: 72, bb: 106, up: false },
    { x: 146, wt: 34, wb: 96, bt: 48, bb: 78, up: true },
    { x: 196, wt: 62, wb: 130, bt: 82, bb: 118, up: false },
    { x: 246, wt: 30, wb: 88, bt: 44, bb: 72, up: true },
    { x: 296, wt: 50, wb: 112, bt: 62, bb: 94, up: true },
  ];
  return (
    <svg {...svgProps}>
      <Bg id="sol" from="#101a2e" />
      <defs>
        <linearGradient id="sol-coin" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#9945FF" />
          <stop offset="1" stopColor="#14F195" />
        </linearGradient>
        <linearGradient id="sol-trend" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#22d3ee" />
          <stop offset="1" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      {/* đường xu hướng mờ */}
      <polyline
        points="46,72 96,89 146,63 196,100 246,58 296,78"
        fill="none" stroke="url(#sol-trend)" strokeWidth="2" strokeOpacity="0.5"
        strokeDasharray="4 5" strokeLinecap="round"
      />
      {/* nến */}
      {candles.map((c, i) => {
        const col = c.up ? "#34d399" : "#fb7185";
        return (
          <g key={i}>
            <line x1={c.x} y1={c.wt} x2={c.x} y2={c.wb} stroke={col} strokeWidth="2" />
            <rect
              x={c.x - 8} y={c.bt} width="16" height={c.bb - c.bt}
              rx="2" fill={col} fillOpacity="0.85"
            />
          </g>
        );
      })}
      {/* đồng SOL (đặt ở dải giữa để không bị cắt trên card rộng) */}
      <g>
        <circle cx="348" cy="90" r="26" fill="url(#sol-coin)" />
        <circle cx="348" cy="90" r="26" fill="none" stroke="#fff" strokeOpacity="0.25" />
        <g fill="#fff">
          <path d="M337,80 H363 L357,86 H331 Z" />
          <path d="M337,88 H363 L357,94 H331 Z" />
          <path d="M337,96 H363 L357,102 H331 Z" />
        </g>
      </g>
    </svg>
  );
}

/* ---------- Localization: quả địa cầu + ngôn ngữ ---------- */
function Localization() {
  const bubbles = [
    { x: 250, y: 62, t: "A", c: "#22d3ee" },
    { x: 318, y: 90, t: "文", c: "#a855f7" },
    { x: 250, y: 118, t: "あ", c: "#ec4899" },
  ];
  return (
    <svg {...svgProps}>
      <Bg id="loc" from="#0d1726" />
      <defs>
        <linearGradient id="loc-globe" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#22d3ee" />
          <stop offset="1" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      {/* địa cầu */}
      <g transform="translate(118,90)" fill="none" stroke="url(#loc-globe)" strokeWidth="2">
        <circle r="58" />
        <ellipse rx="58" ry="22" />
        <ellipse rx="58" ry="42" />
        <ellipse rx="22" ry="58" />
        <ellipse rx="42" ry="58" />
        <line x1="-58" y1="0" x2="58" y2="0" />
      </g>
      {/* đường nối tới các bong bóng ngôn ngữ */}
      {bubbles.map((b, i) => (
        <line
          key={`l${i}`} x1="176" y1="90" x2={b.x} y2={b.y}
          stroke={b.c} strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="3 5"
        />
      ))}
      {/* bong bóng glyph */}
      {bubbles.map((b, i) => (
        <g key={`b${i}`}>
          <rect
            x={b.x - 20} y={b.y - 18} width="40" height="36" rx="11"
            fill="#0a0a12" stroke={b.c} strokeWidth="2"
          />
          <text
            x={b.x} y={b.y + 7} textAnchor="middle"
            fontSize="20" fontWeight="700" fill={b.c}
            fontFamily="'Space Grotesk', sans-serif"
          >
            {b.t}
          </text>
        </g>
      ))}
    </svg>
  );
}

/* ---------- Attendance: lịch chấm công + nhân sự ---------- */
function Attendance() {
  return (
    <svg {...svgProps}>
      <Bg id="att" from="#101522" />
      <defs>
        <linearGradient id="att-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#22d3ee" />
          <stop offset="1" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      {/* lịch */}
      <g>
        <rect x="40" y="40" width="150" height="110" rx="12" fill="#0a0a12" stroke="url(#att-g)" strokeWidth="2" />
        <rect x="40" y="40" width="150" height="26" rx="12" fill="url(#att-g)" fillOpacity="0.18" />
        <line x1="68" y1="34" x2="68" y2="50" stroke="#22d3ee" strokeWidth="4" strokeLinecap="round" />
        <line x1="162" y1="34" x2="162" y2="50" stroke="#ec4899" strokeWidth="4" strokeLinecap="round" />
        {/* các ô ngày */}
        {[0, 1, 2, 3].map((r) =>
          [0, 1, 2, 3].map((c) => {
            const cx = 60 + c * 36;
            const cy = 82 + r * 18;
            const checked = r === 1 && c === 2;
            return checked ? (
              <g key={`${r}-${c}`}>
                <circle cx={cx} cy={cy} r="9" fill="url(#att-g)" />
                <path
                  d={`M${cx - 4},${cy} l3,3 l5,-6`}
                  fill="none" stroke="#0a0a12" strokeWidth="2.2"
                  strokeLinecap="round" strokeLinejoin="round"
                />
              </g>
            ) : (
              <circle key={`${r}-${c}`} cx={cx} cy={cy} r="5" fill="rgba(255,255,255,0.18)" />
            );
          })
        )}
      </g>
      {/* nhân sự */}
      {[
        { x: 250, c: "#22d3ee" },
        { x: 300, c: "#a855f7" },
        { x: 350, c: "#ec4899" },
      ].map((p, i) => (
        <g key={i} fill="none" stroke={p.c} strokeWidth="3">
          <circle cx={p.x} cy="78" r="14" />
          <path d={`M${p.x - 22},132 a22 24 0 0 1 44 0`} />
        </g>
      ))}
    </svg>
  );
}

/* ---------- Flight: máy bay + đường bay + ghim địa điểm ---------- */
function Flight() {
  return (
    <svg {...svgProps}>
      <Bg id="fly" from="#0c1626" />
      <defs>
        <linearGradient id="fly-g" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#22d3ee" />
          <stop offset="1" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      {/* đường bay cong */}
      <path
        d="M52,140 Q200,10 348,120"
        fill="none" stroke="url(#fly-g)" strokeWidth="2.5"
        strokeDasharray="2 8" strokeLinecap="round"
      />
      {/* ghim điểm đi / đến */}
      {[
        { x: 52, y: 140, c: "#22d3ee" },
        { x: 348, y: 120, c: "#ec4899" },
      ].map((p, i) => (
        <g key={i} transform={`translate(${p.x - 11},${p.y - 26})`}>
          <path
            d="M11,1 a9 9 0 0 0-9 9 c0 6 9 16 9 16 s9-10 9-16 a9 9 0 0 0-9-9 z"
            fill="#0a0a12" stroke={p.c} strokeWidth="2"
          />
          <circle cx="11" cy="10" r="3.5" fill={p.c} />
        </g>
      ))}
      {/* máy bay ở dải giữa đường bay (tránh bị cắt trên card rộng) */}
      <g transform="translate(176,72) rotate(20) scale(1.9)" fill="url(#fly-g)">
        <path d="M2 16 L24 9 L2 2 L2 7.5 L15 9 L2 10.5 Z" />
      </g>
      {/* mây/điểm trang trí */}
      <g fill="rgba(255,255,255,0.12)">
        <circle cx="120" cy="60" r="3" />
        <circle cx="270" cy="56" r="2.5" />
        <circle cx="300" cy="150" r="3" />
        <circle cx="90" cy="120" r="2.5" />
      </g>
    </svg>
  );
}

const COVERS = {
  solana: Solana,
  localization: Localization,
  attendance: Attendance,
  flight: Flight,
};

export default function ProjectCover({ title }) {
  const Cover = COVERS[pickType(title)] || Solana;
  return <Cover />;
}
