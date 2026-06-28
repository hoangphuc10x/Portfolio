// Ảnh bìa SVG theo chủ đề cho từng dự án — tông sáng, đơn sắc (mực + terracotta).
// Chọn graphic theo tên dự án (tên giống nhau ở mọi ngôn ngữ).

const INK = "#1f1d1a";
const ACCENT = "#1d5a8a";
const MUTED = "#9c968a";

function pickType(title = "") {
  const t = title.toLowerCase();
  if (t.includes("solana") || t.includes("swap")) return "solana";
  if (t.includes("localization") || t.includes("wordbee")) return "localization";
  if (t.includes("attendance")) return "attendance";
  if (t.includes("flight") || t.includes("booking")) return "flight";
  if (t.includes("career") || t.includes("course") || t.includes("support")) return "course";
  if (t.includes("order") || t.includes("restaurant") || t.includes("forder")) return "restaurant";
  return "solana";
}

const svgProps = {
  viewBox: "0 0 400 180",
  preserveAspectRatio: "xMidYMid slice",
  className: "w-full h-full",
  "aria-hidden": "true",
};

function Bg() {
  return (
    <>
      <rect width="400" height="180" fill="#f3f0e8" />
      <g stroke="rgba(31,29,26,0.05)" strokeWidth="1">
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

/* ---------- Solana: biểu đồ nến lên xuống + đồng coin ---------- */
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
      <Bg />
      {/* đường xu hướng mờ — chạy nét đứt */}
      <polyline
        points="46,72 96,89 146,63 196,100 246,58 296,78"
        fill="none" stroke={ACCENT} strokeWidth="2" strokeOpacity="0.45"
        strokeDasharray="4 5" strokeLinecap="round"
      >
        <animate attributeName="stroke-dashoffset" values="18;0" dur="0.9s" repeatCount="indefinite" />
      </polyline>
      {/* nến: tăng = accent, giảm = mực nhạt — nảy lên lệch pha */}
      {candles.map((c, i) => {
        const col = c.up ? ACCENT : INK;
        return (
          <g key={i}>
            <animateTransform
              attributeName="transform" type="translate"
              values="0 4; 0 0; 0 4" dur="3.2s" begin={`${i * 0.25}s`} repeatCount="indefinite"
              calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
            />
            <line x1={c.x} y1={c.wt} x2={c.x} y2={c.wb} stroke={col} strokeWidth="2" strokeOpacity={c.up ? 0.9 : 0.55} />
            <rect
              x={c.x - 8} y={c.bt} width="16" height={c.bb - c.bt}
              rx="2" fill={col} fillOpacity={c.up ? 0.85 : 0.4}
            />
          </g>
        );
      })}
      {/* đồng coin — quay lật nhẹ + lấp lánh */}
      <g transform="translate(348,90)">
        <g>
          <animateTransform
            attributeName="transform" type="scale" values="1 1; 0.15 1; 1 1"
            dur="4.5s" repeatCount="indefinite"
            calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
          />
          <circle r="26" fill={ACCENT} />
          <g fill="#faf9f6" transform="translate(-348,-90)">
            <path d="M337,80 H363 L357,86 H331 Z" />
            <path d="M337,88 H363 L357,94 H331 Z" />
            <path d="M337,96 H363 L357,102 H331 Z" />
          </g>
        </g>
      </g>
    </svg>
  );
}

/* ---------- Localization: quả địa cầu xoay + ngôn ngữ trôi nổi ---------- */
function Localization() {
  const bubbles = [
    { x: 250, y: 58, t: "A", dur: "3.4s" },
    { x: 322, y: 90, t: "文", dur: "4.2s" },
    { x: 250, y: 122, t: "あ", dur: "3.8s" },
  ];
  return (
    <svg {...svgProps}>
      <defs>
        <radialGradient id="loc-globe" cx="38%" cy="34%" r="75%">
          <stop offset="0%" stopColor={ACCENT} stopOpacity="0.22" />
          <stop offset="60%" stopColor={ACCENT} stopOpacity="0.08" />
          <stop offset="100%" stopColor={ACCENT} stopOpacity="0.02" />
        </radialGradient>
      </defs>
      <Bg />

      {/* vầng sáng nền cho địa cầu */}
      <circle cx="118" cy="90" r="70" fill={ACCENT} opacity="0.05">
        <animate attributeName="r" values="68;74;68" dur="5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.04;0.08;0.04" dur="5s" repeatCount="indefinite" />
      </circle>

      {/* địa cầu */}
      <g transform="translate(118,90)">
        <circle r="58" fill="url(#loc-globe)" stroke={INK} strokeWidth="2" strokeOpacity="0.8" />
        <g fill="none" stroke={INK} strokeWidth="1.6" strokeOpacity="0.7">
          {/* vĩ tuyến (ngang) — đứng yên */}
          <ellipse rx="58" ry="22" />
          <ellipse rx="58" ry="42" />
          <line x1="-58" y1="0" x2="58" y2="0" />
          {/* kinh tuyến (dọc) — co giãn để giả lập địa cầu xoay */}
          <ellipse ry="58">
            <animate attributeName="rx" values="58;8;58" dur="6s" repeatCount="indefinite" />
            <animate attributeName="stroke-opacity" values="0.7;0.25;0.7" dur="6s" repeatCount="indefinite" />
          </ellipse>
          <ellipse ry="58">
            <animate attributeName="rx" values="30;58;8;30" dur="6s" repeatCount="indefinite" />
          </ellipse>
        </g>
      </g>

      {/* đường nối chạy nét đứt tới các bong bóng */}
      {bubbles.map((b, i) => (
        <line
          key={`l${i}`} x1="178" y1="90" x2={b.x} y2={b.y}
          stroke={ACCENT} strokeWidth="1.5" strokeOpacity="0.45" strokeDasharray="3 6" strokeLinecap="round"
        >
          <animate attributeName="stroke-dashoffset" values="18;0" dur="0.9s" repeatCount="indefinite" />
        </line>
      ))}

      {/* bong bóng glyph — trôi nổi nhẹ, lệch pha nhau */}
      {bubbles.map((b, i) => (
        <g key={`b${i}`}>
          <animateTransform
            attributeName="transform" type="translate"
            values="0 0; 0 -5; 0 0" dur={b.dur} repeatCount="indefinite"
            calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
          />
          <rect
            x={b.x - 20} y={b.y - 18} width="40" height="36" rx="12"
            fill="#fffdf9" stroke={ACCENT} strokeWidth="2"
          />
          <text
            x={b.x} y={b.y + 7} textAnchor="middle"
            fontSize="20" fontWeight="700" fill={ACCENT}
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
      <Bg />
      {/* lịch */}
      <g>
        <rect x="40" y="40" width="150" height="110" rx="12" fill="#fffdf9" stroke={INK} strokeWidth="2" strokeOpacity="0.8" />
        <rect x="40" y="40" width="150" height="26" rx="12" fill={ACCENT} fillOpacity="0.14" />
        <line x1="68" y1="34" x2="68" y2="50" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <line x1="162" y1="34" x2="162" y2="50" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        {/* các ô ngày */}
        {[0, 1, 2, 3].map((r) =>
          [0, 1, 2, 3].map((c) => {
            const cx = 60 + c * 36;
            const cy = 82 + r * 18;
            const checked = r === 1 && c === 2;
            return checked ? (
              <g key={`${r}-${c}`}>
                <circle cx={cx} cy={cy} r="9" fill={ACCENT}>
                  <animate attributeName="r" values="0;9;9;9" dur="3s" keyTimes="0;0.2;0.9;1" repeatCount="indefinite" />
                </circle>
                <path
                  d={`M${cx - 4},${cy} l3,3 l5,-6`}
                  fill="none" stroke="#fffdf9" strokeWidth="2.2"
                  strokeLinecap="round" strokeLinejoin="round"
                  strokeDasharray="16" strokeDashoffset="16"
                >
                  <animate attributeName="stroke-dashoffset" values="16;16;0;0" dur="3s" keyTimes="0;0.2;0.45;1" repeatCount="indefinite" />
                </path>
              </g>
            ) : (
              <circle key={`${r}-${c}`} cx={cx} cy={cy} r="5" fill="rgba(31,29,26,0.18)" />
            );
          })
        )}
      </g>
      {/* nhân sự — người ở giữa nhấp nhẹ lên xuống */}
      {[250, 300, 350].map((x, i) => (
        <g key={i} fill="none" stroke={i === 1 ? ACCENT : INK} strokeOpacity={i === 1 ? 1 : 0.7} strokeWidth="3">
          {i === 1 && (
            <animateTransform
              attributeName="transform" type="translate" values="0 0; 0 -6; 0 0"
              dur="2.6s" repeatCount="indefinite"
              calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
            />
          )}
          <circle cx={x} cy="78" r="14" />
          <path d={`M${x - 22},132 a22 24 0 0 1 44 0`} />
        </g>
      ))}
    </svg>
  );
}

/* ---------- Flight: máy bay + đường bay + ghim địa điểm ---------- */
function Flight() {
  return (
    <svg {...svgProps}>
      <Bg />
      {/* đường bay cong */}
      <path
        id="flight-path"
        d="M52,140 Q200,10 348,120"
        fill="none" stroke={ACCENT} strokeWidth="2.5"
        strokeDasharray="2 8" strokeLinecap="round"
      >
        <animate attributeName="stroke-dashoffset" values="20;0" dur="1.4s" repeatCount="indefinite" />
      </path>
      {/* ghim điểm đi / đến — nhấp nháy lệch pha */}
      {[
        { x: 52, y: 140 },
        { x: 348, y: 120 },
      ].map((p, i) => (
        <g key={i} transform={`translate(${p.x - 11},${p.y - 26})`}>
          <path
            d="M11,1 a9 9 0 0 0-9 9 c0 6 9 16 9 16 s9-10 9-16 a9 9 0 0 0-9-9 z"
            fill="#fffdf9" stroke={ACCENT} strokeWidth="2"
          />
          <circle cx="11" cy="10" r="3.5" fill={ACCENT}>
            <animate attributeName="r" values="3.5;5;3.5" dur="1.8s" begin={`${i * 0.9}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}
      {/* máy bay bay dọc theo đường bay */}
      <g fill={INK}>
        <g transform="scale(1.9)">
          <path d="M2 16 L24 9 L2 2 L2 7.5 L15 9 L2 10.5 Z" transform="translate(-12,-9)" />
        </g>
        <animateMotion dur="5s" repeatCount="indefinite" rotate="auto" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
          <mpath href="#flight-path" />
        </animateMotion>
      </g>
      {/* điểm trang trí */}
      <g fill="rgba(31,29,26,0.14)">
        <circle cx="120" cy="60" r="3" />
        <circle cx="270" cy="56" r="2.5" />
        <circle cx="300" cy="150" r="3" />
        <circle cx="90" cy="120" r="2.5" />
      </g>
    </svg>
  );
}

/* ---------- Course / Career: sách mở + nút play khoá học online ---------- */
function Course() {
  return (
    <svg {...svgProps}>
      <Bg />
      {/* sách mở */}
      <g transform="translate(70,58)" stroke={INK} strokeWidth="2" strokeOpacity="0.85">
        <path d="M0,4 C30,-8 60,-8 90,4 V64 C60,52 30,52 0,64 Z" fill="#fffdf9" />
        <line x1="45" y1="-2" x2="45" y2="58" />
        <g stroke={ACCENT} strokeOpacity="0.55" strokeWidth="2">
          <line x1="12" y1="18" x2="38" y2="13" />
          <line x1="12" y1="30" x2="38" y2="25" />
          <line x1="12" y1="42" x2="34" y2="38" />
          <line x1="52" y1="13" x2="78" y2="18" />
          <line x1="52" y1="25" x2="78" y2="30" />
          <line x1="52" y1="38" x2="74" y2="42" />
        </g>
      </g>
      {/* mũ tốt nghiệp nhỏ */}
      <g transform="translate(115,34)">
        <polygon points="0,0 34,11 0,22 -34,11" fill={INK} fillOpacity="0.85" />
        <line x1="34" y1="11" x2="34" y2="26" stroke={INK} strokeWidth="1.5" strokeOpacity="0.7" />
        <circle cx="34" cy="28" r="3" fill={ACCENT} />
      </g>
      {/* nút play (khoá học online) — vòng sóng lan + nhịp đập */}
      <g transform="translate(308,90)">
        <circle r="34" fill={ACCENT} fillOpacity="0.25">
          <animate attributeName="r" values="34;46;34" dur="2.4s" repeatCount="indefinite" />
          <animate attributeName="fill-opacity" values="0.3;0;0.3" dur="2.4s" repeatCount="indefinite" />
        </circle>
        <g>
          <animateTransform
            attributeName="transform" type="scale" values="1;1.08;1" dur="2.4s" repeatCount="indefinite"
            calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
          />
          <circle r="34" fill={ACCENT} />
          <path d="M-10,-16 L18,0 L-10,16 Z" fill="#faf9f6" />
        </g>
      </g>
    </svg>
  );
}

/* ---------- Restaurant / F-ORDER: đĩa ăn + dao nĩa + chuông gọi món ---------- */
function Restaurant() {
  return (
    <svg {...svgProps}>
      <Bg />
      {/* nĩa */}
      <g stroke={INK} strokeWidth="3" strokeOpacity="0.85" strokeLinecap="round" fill="none">
        <line x1="58" y1="46" x2="58" y2="66" />
        <line x1="66" y1="46" x2="66" y2="66" />
        <line x1="74" y1="46" x2="74" y2="66" />
        <path d="M58,66 H74" />
        <line x1="66" y1="66" x2="66" y2="132" />
      </g>
      {/* đĩa — tâm đĩa nhịp nhẹ */}
      <g transform="translate(150,92)">
        <circle r="56" fill="#fffdf9" stroke={INK} strokeWidth="2" strokeOpacity="0.8" />
        <circle r="40" fill="none" stroke={INK} strokeOpacity="0.18" strokeWidth="1.5" />
        <circle r="22" fill={ACCENT} fillOpacity="0.9">
          <animate attributeName="r" values="22;25;22" dur="2.8s" repeatCount="indefinite" />
        </circle>
      </g>
      {/* dao */}
      <g stroke={INK} strokeWidth="3" strokeOpacity="0.85" strokeLinecap="round" fill="none">
        <path d="M236,46 q9,16 0,34" />
        <line x1="236" y1="80" x2="236" y2="132" />
      </g>
      {/* chuông gọi món — lắc lư như đang rung */}
      <g transform="translate(322,98)">
        <animateTransform
          attributeName="transform" type="rotate" values="0 0 24; -7 0 24; 7 0 24; 0 0 24"
          dur="0.6s" begin="0s;chime.end+2.4s" id="chime"
        />
        <path d="M-26,16 h52 a4 4 0 0 1 0 8 h-52 a4 4 0 0 1 0-8 Z" fill={ACCENT} />
        <path d="M-22,16 a22 22 0 0 1 44 0 Z" fill="#fffdf9" stroke={INK} strokeWidth="2" strokeOpacity="0.8" />
        <line x1="0" y1="-6" x2="0" y2="-12" stroke={INK} strokeWidth="2" strokeLinecap="round" />
        <circle cx="0" cy="-14" r="3" fill={ACCENT} />
      </g>
    </svg>
  );
}

const COVERS = {
  solana: Solana,
  localization: Localization,
  attendance: Attendance,
  flight: Flight,
  course: Course,
  restaurant: Restaurant,
};

// Ảnh thật cho từng dự án (đặt trong public/projects/). Không có thì dùng cover SVG động.
const IMAGES = {
  solana: "/projects/solana.png",
  localization: "/projects/wordbee.png",
  attendance: "/projects/attendance.png",
  flight: "/projects/s-bay.png",
  course: "/projects/career.png",
  restaurant: "/projects/forder.png",
};

export default function ProjectCover({ title }) {
  const type = pickType(title);
  const img = IMAGES[type];
  if (img) {
    return (
      <img
        src={img}
        alt={title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105"
      />
    );
  }
  const Cover = COVERS[type] || Solana;
  return <Cover />;
}
