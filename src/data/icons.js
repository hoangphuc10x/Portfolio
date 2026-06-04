// Logo cho từng skill. Dùng CDN devicon (logo nhiều màu) + simpleicons (cho
// những logo devicon không có). Item nào không có logo → không hiện ảnh, chỉ chữ.
// Nếu URL lỗi/404, component sẽ tự ẩn ảnh (onError) nên luôn an toàn.
const dev = (p) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${p}`;
const si = (slug, color = "ffffff") => `https://cdn.simpleicons.org/${slug}/${color}`;

export const SKILL_ICONS = {
  // Frontend
  "React": dev("react/react-original.svg"),
  "Next.js": si("nextdotjs", "ffffff"),
  "TypeScript": dev("typescript/typescript-original.svg"),
  "JavaScript": dev("javascript/javascript-original.svg"),
  "TailwindCSS": dev("tailwindcss/tailwindcss-original.svg"),
  "SCSS": dev("sass/sass-original.svg"),

  // Backend
  ".NET / ASP.NET Core": dev("dotnetcore/dotnetcore-original.svg"),
  "C#": dev("csharp/csharp-original.svg"),
  "NestJS": dev("nestjs/nestjs-original.svg"),
  "Node.js": dev("nodejs/nodejs-original.svg"),
  "Express": si("express", "ffffff"),
  "RESTful API": si("openapiinitiative", "6BA539"),

  // Database & Cache
  "SQL Server": dev("microsoftsqlserver/microsoftsqlserver-plain.svg"),
  "MySQL": dev("mysql/mysql-original.svg"),
  "MongoDB": dev("mongodb/mongodb-original.svg"),
  "Redis": dev("redis/redis-original.svg"),
  "TypeORM": si("typeorm", "FE0902"),

  // Blockchain
  "Solana Web3.js": si("solana", "9945FF"),
  "Raydium SDK v2": null,
  "BullMQ": null,
  "AMM / CPMM / CLMM": null,

  // Tooling & Integrations
  "Git / GitHub": dev("git/git-original.svg"),
  "CI/CD (GitHub Actions)": si("githubactions", "2088FF"),
  "Jest": dev("jest/jest-plain.svg"),
  "Postman": si("postman", "FF6C37"),
  "JWT": si("jsonwebtokens", "ffffff"),
  "Webhooks": si("webhooks", "ffffff"),
  "Unity": si("unity", "ffffff"),
  "Unreal Engine": si("unrealengine", "ffffff"),
  "Google Sheets API": si("googlesheets", "34A853"),
  "Claude AI": si("anthropic", "D97757"),
};
