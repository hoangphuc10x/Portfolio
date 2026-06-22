// ============================================================================
//  👉 NỘI DUNG ĐA NGÔN NGỮ — Tiếng Việt / English / 中文
//  Mỗi ngôn ngữ là một khối trong `content`. Sửa text trong đúng khối ngôn ngữ.
//  Thông tin không đổi theo ngôn ngữ (tên, email, link) nằm ở `profileBase`.
// ============================================================================

// Danh sách ngôn ngữ hiển thị trên nút chuyển đổi
export const languages = [
  { code: "vi", label: "VI", name: "Tiếng Việt" },
  { code: "en", label: "EN", name: "English" },
  { code: "zh", label: "中", name: "中文" },
];

// Thông tin chung, KHÔNG đổi theo ngôn ngữ
const profileBase = {
  name: "Nguyễn Thanh Hoàng Phúc",
  photo: "/profile.jpg", // 👈 ảnh chân dung (đặt trong thư mục public/)
  email: "ngthanhhoangphuc@gmail.com",
  socials: {
    github: "https://github.com/hoangphuc10x",
    linkedin: "https://www.linkedin.com/in/ngthanhhoangphuc/",
    email: "mailto:ngthanhhoangphuc@gmail.com",
  },
  resumeUrl: "", // 👈 link CV (PDF). Để trống thì nút "Tải CV" sẽ ẩn.
};

// Tech tags / skill items — dùng chung mọi ngôn ngữ (giữ nguyên tên công nghệ)
const skillItems = {
  frontend: ["React", "Next.js", "TypeScript", "JavaScript", "TailwindCSS", "SCSS"],
  backend: [".NET / ASP.NET Core", "C#", "NestJS", "Node.js", "Express", "RESTful API"],
  database: ["SQL Server", "MySQL", "MongoDB", "Redis", "TypeORM"],
  blockchain: ["Solana Web3.js", "Raydium SDK v2", "BullMQ", "AMM / CPMM / CLMM"],
  tooling: ["Git / GitHub", "CI/CD (GitHub Actions)", "Jest", "Postman", "JWT", "Webhooks", "Unity", "Unreal Engine", "Google Sheets API", "Claude AI"],
};

const projectTags = {
  solana: ["NestJS", "Solana Web3.js", "Raydium SDK v2", "BullMQ", "MongoDB"],
  wordbee: [".NET", "ASP.NET Core", "ReactJS", "TypeScript", "SQL Server", "Claude AI"],
  attendance: ["NestJS", "MySQL", "TypeORM", "JWT", "Redis"],
  flight: ["React.js", "Node.js", "Express", "REST API"],
  career: ["React", "Node.js", "Express", "MongoDB", "REST API"],
  forder: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "JWT"],
};

const stacks = {
  solana: "NestJS, TypeScript, Solana Web3.js, Raydium SDK v2, BullMQ, MongoDB",
  wordbee: ".NET, ASP.NET Core, ReactJS, TypeScript, SQL Server, Unity, Unreal Engine, Google Sheets API, Claude AI",
  aiot: "TypeScript, Node.js, NestJS, Express, React/Next.js, TailwindCSS, MySQL, Redis",
  sbay: "React.js, Node.js, Express, REST API",
  forder: "Node.js, Express, MongoDB, React, Socket.IO, JWT, REST API",
  career: "React, Node.js, Express, MongoDB, REST API",
};

const periods = {
  wordbee: "4/2026 — 6/2026",
  aiot: "6/2025 — 12/2025",
  solana: "1/2026 — 3/2026",
  sbay: "2/2025 — 5/2025",
  forder: "9/2024 — 12/2024", // 👈 mốc tạm — sửa lại cho đúng
  career: "3/2024 — 6/2024",  // 👈 mốc tạm — sửa lại cho đúng
};

// ============================================================================
//  TIẾNG VIỆT
// ============================================================================
const vi = {
  profile: {
    ...profileBase,
    roles: ["Lập trình viên Fullstack", "Kỹ sư .NET & React", "Kỹ sư Backend Blockchain"],
    tagline:
      "Mình xây dựng các ứng dụng fullstack mở rộng tốt — từ .NET / NestJS phía backend tới React / Next.js phía frontend — và cả những hệ thống on-chain hiệu năng cao trên Solana.",
    location: "Việt Nam",
    availability: "Sẵn sàng cho cơ hội mới",
  },
  about: {
    paragraphs: [
      "Mình là Lập trình viên Fullstack với kinh nghiệm trải dài cả hệ sinh thái .NET / ASP.NET Core lẫn Node.js / NestJS, làm việc thành thạo với React, Next.js và TypeScript ở phía giao diện.",
      "Mình từng xây hệ thống quản lý dịch thuật cho Wordbee, dịch vụ token swap hiệu năng cao trên Solana, hệ thống chấm công với phân quyền RBAC, và tích hợp nhiều nền tảng — từ Unity, Unreal Engine tới Google Sheets API và Claude AI.",
      "Mình coi trọng code sạch (SOLID, MVC), kiến trúc rõ ràng, kiểm thử kỹ và tận dụng AI để tăng tốc phát triển mà vẫn giữ chất lượng.",
    ],
    stats: [
      { value: "4", label: "Vị trí đã trải qua" },
      { value: "15+", label: "Công nghệ thành thạo" },
      { value: "100%", label: "Tận tâm với chất lượng" },
    ],
  },
  skills: [
    { category: "Frontend", items: skillItems.frontend },
    { category: "Backend", items: skillItems.backend },
    { category: "Database & Cache", items: skillItems.database },
    { category: "Blockchain", items: skillItems.blockchain },
    { category: "Công cụ & Tích hợp", items: skillItems.tooling },
  ],
  projects: [
    {
      title: "Solana Token Swap Service",
      description:
        "Dịch vụ token swap hiệu năng cao trên Solana dùng Raydium SDK v2, hỗ trợ đồng thời AMM, CPMM và CLMM qua một kiến trúc swap thống nhất. Xử lý trọn vòng đời giao dịch: wrap SOL/WSOL, ATA, ký và theo dõi xác nhận on-chain, kèm trading đa ví song song bằng BullMQ.",
      tags: projectTags.solana, link: "https://raydium.io/swap/?inputMint=sol&outputMint=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", repo: "", featured: true,
    },
    {
      title: "Wordbee Localization Platform",
      description:
        "Tính năng cho nền tảng quản lý dịch thuật & tự động hoá quy trình: backend .NET, frontend ReactJS, RESTful API. Tích hợp Unity, Unreal Engine và Google Sheets API để đồng bộ dữ liệu tự động cho pipeline sản xuất nội dung, tận dụng Claude AI để tăng tốc phát triển.",
      tags: projectTags.wordbee, link: "https://www.wordbee.com", repo: "", featured: true,
    },
    {
      title: "Attendance Management System",
      description:
        "Hệ thống chấm công với xác thực, phân quyền theo vai trò (RBAC), quản lý đơn nghỉ phép và dashboard quản trị. Xây trên NestJS + MySQL + TypeORM, bảo mật bằng JWT và tối ưu bằng Redis, tuân thủ chuẩn RESTful API.",
      tags: projectTags.attendance, link: "https://hr-aiot-managerment.vercel.app/", repo: "", featured: false,
    },
    {
      title: "Flight Ticket Booking Website",
      description:
        "Website đặt vé máy bay với frontend React.js và backend Node.js (Express). Tích hợp API của Bamboo Airways để lấy lịch bay, giá vé và xử lý đặt chỗ; xây RESTful API kèm kiểm tra dữ liệu và bộ test case cho các luồng chính.",
      tags: projectTags.flight, link: "https://flight.sbaygroup.com/", repo: "", featured: false,
    },
    {
      title: "F-ORDER — Restaurant Order Management",
      description:
        "Đồ án Capstone 2 — nền tảng quản lý gọi món nhà hàng full-stack dựng bằng Node.js, Express, MongoDB, React và Socket.IO. Theo dõi đơn hàng thời gian thực, phân quyền theo vai trò, quản lý sản phẩm/khách hàng và dashboard phân tích; REST API, xác thực JWT và thông báo qua WebSocket, tối ưu hiệu năng cơ sở dữ liệu.",
      tags: projectTags.forder, link: "https://order-management-amber-seven.vercel.app/", repo: "", featured: false,
    },
    {
      title: "Career Support System",
      description:
        "Đồ án Capstone 1 — nền tảng web nơi gia sư tạo và đăng khoá học, học viên đăng ký, thanh toán và học trực tuyến. Bao quát quản lý khoá học, luồng thanh toán và toàn bộ trải nghiệm truy cập – học tập.",
      tags: projectTags.career, link: "", repo: "", featured: false,
    },
  ],
  experience: [
    {
      role: "Lập trình viên Fullstack", company: "Wordbee (Freelance)", period: periods.wordbee, stack: stacks.wordbee,
      points: [
        "Phát triển & bảo trì ứng dụng fullstack bằng .NET (backend) và ReactJS (frontend), bổ sung các tính năng quy trình nghiệp vụ có khả năng mở rộng.",
        "Thiết kế RESTful API, business logic và tích hợp frontend cho quản lý dịch thuật và tự động hoá quy trình.",
        "Xây tích hợp tuỳ biến với Unity, Unreal Engine và Google Sheets để đồng bộ dữ liệu tự động.",
        "Phối hợp với đội ngũ quốc tế và tận dụng Claude AI để tăng tốc phát triển, cải thiện chất lượng code.",
      ],
    },
    {
      role: "Kỹ sư Backend Blockchain", company: "Solana Coin (Freelance)", period: periods.solana, stack: stacks.solana,
      points: [
        "Xây dịch vụ token swap hiệu năng cao trên Solana dùng Raydium SDK v2.",
        "Hỗ trợ nhiều mô hình thanh khoản (AMM, CPMM, CLMM) qua một kiến trúc swap thống nhất.",
        "Quản lý vòng đời giao dịch: wrap SOL/WSOL, ATA, ký giao dịch, theo dõi xác nhận on-chain.",
        "Tối ưu thực thi swap (batching, compute budget, priority fees) và trading đa ví song song bằng BullMQ.",
      ],
    },
    {
      role: "Lập trình viên Fullstack", company: "Công ty AIoT", period: periods.aiot, stack: stacks.aiot,
      points: [
        "Làm việc theo Git workflow (Git Flow, Feature Branch, PR Review) và Agile/Scrum (Jira).",
        "Triển khai các module cốt lõi cho hệ thống chấm công: xác thực, RBAC, đơn nghỉ phép, dashboard quản trị (NestJS, MySQL, TypeORM, JWT, Redis).",
        "Xây website công ty với UI/UX responsive và tối ưu SEO bằng SCSS, tối ưu hình ảnh.",
        "Viết code sạch theo SOLID/MVC, code review, unit test (Jest, Postman) và CI/CD (GitHub Actions).",
      ],
    },
    {
      role: "Thực tập sinh Fullstack", company: "Công ty SBay", period: periods.sbay, stack: stacks.sbay,
      points: [
        "Phát triển website đặt vé máy bay với frontend React.js và backend Node.js (Express).",
        "Tích hợp API Bamboo Airways để lấy lịch bay, giá vé và xử lý đặt chỗ.",
        "Xây RESTful API, kiểm tra dữ liệu và thiết kế test case cho các tính năng chính.",
      ],
    },
    {
      role: "Lập trình viên Fullstack (Đồ án Capstone 2)", company: "F-ORDER", period: periods.forder, stack: stacks.forder,
      points: [
        "Xây nền tảng quản lý gọi món nhà hàng full-stack với Node.js, Express, MongoDB, React và Socket.IO.",
        "Triển khai theo dõi đơn hàng thời gian thực, phân quyền theo vai trò, quản lý sản phẩm/khách hàng và dashboard phân tích.",
        "Phát triển REST API, xác thực JWT, thông báo qua WebSocket và tối ưu hiệu năng cơ sở dữ liệu.",
      ],
    },
    {
      role: "Lập trình viên Fullstack (Đồ án Capstone 1)", company: "Career Support System", period: periods.career, stack: stacks.career,
      points: [
        "Xây nền tảng web cho phép gia sư tạo và đăng khoá học, học viên đăng ký – thanh toán – học trực tuyến.",
        "Phát triển frontend React và backend Node.js/Express, thiết kế RESTful API trên MongoDB.",
        "Triển khai luồng thanh toán và quản lý quyền truy cập khoá học theo trạng thái mua.",
      ],
    },
  ],
  ui: {
    nav: { about: "Giới thiệu", skills: "Kỹ năng", projects: "Dự án", experience: "Kinh nghiệm", contact: "Liên hệ", cta: "Hợp tác" },
    hero: { greeting: "Xin chào, mình là", viewProjects: "Xem dự án →", contactMe: "Liên hệ mình", downloadCv: "↓ Tải CV", scroll: "cuộn" },
    sections: {
      about: { kicker: "// về mình", title: "Giới thiệu" },
      skills: { kicker: "// công cụ", title: "Kỹ năng" },
      projects: { kicker: "// sản phẩm", title: "Dự án nổi bật" },
      experience: { kicker: "// hành trình", title: "Kinh nghiệm" },
    },
    contact: {
      kicker: "// liên hệ", titleA: "Cùng xây dựng", titleB: "điều gì đó.",
      paragraph: "Mình luôn sẵn sàng cho các cơ hội và dự án thú vị. Gửi mình một lời chào nhé!",
      socials: { github: "GitHub", linkedin: "LinkedIn", email: "Email" },
    },
    footer: { built: "Xây bằng React + GSAP", top: "↑ Lên đầu trang" },
  },
};

// ============================================================================
//  ENGLISH
// ============================================================================
const en = {
  profile: {
    ...profileBase,
    roles: ["Fullstack Developer", ".NET & React Engineer", "Blockchain Backend Engineer"],
    tagline:
      "I build scalable fullstack applications — from .NET / NestJS on the backend to React / Next.js on the frontend — plus high-performance on-chain systems on Solana.",
    location: "Vietnam",
    availability: "Open to opportunities",
  },
  about: {
    paragraphs: [
      "I'm a Fullstack Developer with experience across both the .NET / ASP.NET Core ecosystem and Node.js / NestJS, working fluently with React, Next.js and TypeScript on the frontend.",
      "I've built a translation management system for Wordbee, a high-performance token swap service on Solana, an attendance system with RBAC, and integrated many platforms — from Unity and Unreal Engine to the Google Sheets API and Claude AI.",
      "I value clean code (SOLID, MVC), clear architecture, thorough testing, and leveraging AI to speed up development while keeping quality high.",
    ],
    stats: [
      { value: "4", label: "Roles held" },
      { value: "15+", label: "Technologies" },
      { value: "100%", label: "Committed to quality" },
    ],
  },
  skills: [
    { category: "Frontend", items: skillItems.frontend },
    { category: "Backend", items: skillItems.backend },
    { category: "Database & Cache", items: skillItems.database },
    { category: "Blockchain", items: skillItems.blockchain },
    { category: "Tooling & Integrations", items: skillItems.tooling },
  ],
  projects: [
    {
      title: "Solana Token Swap Service",
      description:
        "A high-performance token swap service on Solana built with Raydium SDK v2, supporting AMM, CPMM and CLMM through a unified swap architecture. Handles the full transaction lifecycle — SOL/WSOL wrapping, ATA, signing and on-chain confirmation tracking — with concurrent multi-wallet trading via BullMQ.",
      tags: projectTags.solana, link: "https://raydium.io/swap/?inputMint=sol&outputMint=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", repo: "", featured: true,
    },
    {
      title: "Wordbee Localization Platform",
      description:
        "Features for a translation management & workflow automation platform: .NET backend, ReactJS frontend, RESTful APIs. Integrated Unity, Unreal Engine and the Google Sheets API to automatically sync data for the content production pipeline, leveraging Claude AI to accelerate development.",
      tags: projectTags.wordbee, link: "https://www.wordbee.com", repo: "", featured: true,
    },
    {
      title: "Attendance Management System",
      description:
        "An attendance system with authentication, role-based access control (RBAC), leave-request management and an admin dashboard. Built on NestJS + MySQL + TypeORM, secured with JWT and optimized with Redis, following RESTful API standards.",
      tags: projectTags.attendance, link: "", repo: "", featured: false,
    },
    {
      title: "Flight Ticket Booking Website",
      description:
        "A flight booking website with a React.js frontend and Node.js (Express) backend. Integrated the Bamboo Airways API to fetch flight schedules and fares and handle bookings; built RESTful APIs with data validation and test cases for the main flows.",
      tags: projectTags.flight, link: "https://flight.sbaygroup.com/", repo: "", featured: false,
    },
    {
      title: "F-ORDER — Restaurant Order Management",
      description:
        "Capstone 2 — a full-stack restaurant order management platform built with Node.js, Express, MongoDB, React and Socket.IO. Real-time order tracking, role-based access, product/customer management and analytics dashboards, plus REST APIs, JWT auth and WebSocket-based notifications with optimized database performance.",
      tags: projectTags.forder, link: "https://order-management-amber-seven.vercel.app/", repo: "", featured: false,
    },
    {
      title: "Career Support System",
      description:
        "Capstone 1 — a web platform where tutors create and publish courses and students enroll, pay and learn online. Covers course management, the payment flow and the full access-and-learning experience.",
      tags: projectTags.career, link: "", repo: "", featured: false,
    },
  ],
  experience: [
    {
      role: "Fullstack Developer", company: "Wordbee (Freelance)", period: periods.wordbee, stack: stacks.wordbee,
      points: [
        "Developed & maintained fullstack apps using .NET (backend) and ReactJS (frontend), adding scalable business-workflow features.",
        "Designed RESTful APIs, business logic and frontend integrations for translation management and workflow automation.",
        "Built custom integrations with Unity, Unreal Engine and Google Sheets for automated data synchronization.",
        "Collaborated with international teams and leveraged Claude AI to speed up development and improve code quality.",
      ],
    },
    {
      role: "Blockchain Backend Engineer", company: "Solana Coin (Freelance)", period: periods.solana, stack: stacks.solana,
      points: [
        "Built a high-performance token swap service on Solana using Raydium SDK v2.",
        "Supported multiple liquidity models (AMM, CPMM, CLMM) through a unified swap architecture.",
        "Managed the transaction lifecycle: SOL/WSOL wrapping, ATA, transaction signing, on-chain confirmation tracking.",
        "Optimized swap execution (batching, compute budget, priority fees) and concurrent multi-wallet trading via BullMQ.",
      ],
    },
    {
      role: "Fullstack Developer", company: "AIoT Company", period: periods.aiot, stack: stacks.aiot,
      points: [
        "Worked with a Git workflow (Git Flow, Feature Branch, PR Review) and Agile/Scrum (Jira).",
        "Implemented core modules for an attendance system: authentication, RBAC, leave requests, admin dashboard (NestJS, MySQL, TypeORM, JWT, Redis).",
        "Built the company website with a responsive UI/UX and SEO optimization using SCSS and image optimization.",
        "Wrote clean code following SOLID/MVC, did code reviews, unit tests (Jest, Postman) and CI/CD (GitHub Actions).",
      ],
    },
    {
      role: "Intern Fullstack Developer", company: "SBay Company", period: periods.sbay, stack: stacks.sbay,
      points: [
        "Developed a flight booking website with a React.js frontend and Node.js (Express) backend.",
        "Integrated the Bamboo Airways API to fetch flight schedules and fares and handle bookings.",
        "Built RESTful APIs, data validation and designed test cases for the main features.",
      ],
    },
    {
      role: "Fullstack Developer (Capstone 2)", company: "F-ORDER", period: periods.forder, stack: stacks.forder,
      points: [
        "Built a full-stack restaurant order management platform with Node.js, Express, MongoDB, React and Socket.IO.",
        "Implemented real-time order tracking, role-based access, product/customer management and analytics dashboards.",
        "Developed REST APIs, JWT auth, WebSocket-based notifications and optimized database performance.",
      ],
    },
    {
      role: "Fullstack Developer (Capstone 1)", company: "Career Support System", period: periods.career, stack: stacks.career,
      points: [
        "Built a web platform where tutors create and publish courses and students enroll, pay and learn online.",
        "Developed a React frontend and a Node.js/Express backend with RESTful APIs over MongoDB.",
        "Implemented the payment flow and purchase-based course access control.",
      ],
    },
  ],
  ui: {
    nav: { about: "About", skills: "Skills", projects: "Projects", experience: "Experience", contact: "Contact", cta: "Let's talk" },
    hero: { greeting: "Hi, I'm", viewProjects: "View projects →", contactMe: "Get in touch", downloadCv: "↓ Download CV", scroll: "scroll" },
    sections: {
      about: { kicker: "// about me", title: "About" },
      skills: { kicker: "// toolkit", title: "Skills" },
      projects: { kicker: "// work", title: "Featured projects" },
      experience: { kicker: "// journey", title: "Experience" },
    },
    contact: {
      kicker: "// contact", titleA: "Let's build", titleB: "something.",
      paragraph: "I'm always open to interesting opportunities and projects. Say hello!",
      socials: { github: "GitHub", linkedin: "LinkedIn", email: "Email" },
    },
    footer: { built: "Built with React + GSAP", top: "↑ Back to top" },
  },
};

// ============================================================================
//  中文
// ============================================================================
const zh = {
  profile: {
    ...profileBase,
    roles: ["全栈开发工程师", ".NET 与 React 工程师", "区块链后端工程师"],
    tagline:
      "我构建可扩展的全栈应用——后端使用 .NET / NestJS，前端使用 React / Next.js——以及在 Solana 上的高性能链上系统。",
    location: "越南",
    availability: "欢迎合作机会",
  },
  about: {
    paragraphs: [
      "我是一名全栈开发工程师，熟悉 .NET / ASP.NET Core 生态以及 Node.js / NestJS，前端方面精通 React、Next.js 和 TypeScript。",
      "我曾为 Wordbee 构建翻译管理系统、在 Solana 上开发高性能代币兑换服务、搭建带 RBAC 的考勤系统，并集成了多种平台——从 Unity、Unreal Engine 到 Google Sheets API 和 Claude AI。",
      "我注重整洁代码（SOLID、MVC）、清晰的架构、充分的测试，并善用 AI 在保证质量的同时加快开发。",
    ],
    stats: [
      { value: "4", label: "担任职位" },
      { value: "15+", label: "掌握技术" },
      { value: "100%", label: "追求高质量" },
    ],
  },
  skills: [
    { category: "前端", items: skillItems.frontend },
    { category: "后端", items: skillItems.backend },
    { category: "数据库与缓存", items: skillItems.database },
    { category: "区块链", items: skillItems.blockchain },
    { category: "工具与集成", items: skillItems.tooling },
  ],
  projects: [
    {
      title: "Solana Token Swap Service",
      description:
        "基于 Raydium SDK v2 在 Solana 上构建的高性能代币兑换服务，通过统一的兑换架构同时支持 AMM、CPMM 和 CLMM。处理完整的交易生命周期——SOL/WSOL 封装、ATA、签名与链上确认追踪——并通过 BullMQ 实现多钱包并发交易。",
      tags: projectTags.solana, link: "https://raydium.io/swap/?inputMint=sol&outputMint=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", repo: "", featured: true,
    },
    {
      title: "Wordbee Localization Platform",
      description:
        "为翻译管理与流程自动化平台开发功能：.NET 后端、ReactJS 前端、RESTful API。集成 Unity、Unreal Engine 和 Google Sheets API，为内容生产流水线自动同步数据，并借助 Claude AI 加速开发。",
      tags: projectTags.wordbee, link: "https://www.wordbee.com", repo: "", featured: true,
    },
    {
      title: "Attendance Management System",
      description:
        "考勤管理系统，具备身份验证、基于角色的访问控制（RBAC）、请假管理和管理后台。基于 NestJS + MySQL + TypeORM 构建，使用 JWT 保障安全、Redis 优化性能，遵循 RESTful API 规范。",
      tags: projectTags.attendance, link: "", repo: "", featured: false,
    },
    {
      title: "Flight Ticket Booking Website",
      description:
        "机票预订网站，前端使用 React.js，后端使用 Node.js（Express）。集成 Bamboo Airways API 获取航班时刻、票价并处理预订；构建带数据校验的 RESTful API，并为主要流程编写测试用例。",
      tags: projectTags.flight, link: "https://flight.sbaygroup.com/", repo: "", featured: false,
    },
    {
      title: "Career Support System",
      description:
        "毕业设计 1 —— 一个网络平台，导师可创建并发布课程，学生可注册、付费并在线学习。涵盖课程管理、支付流程以及完整的访问与学习体验。",
      tags: projectTags.career, link: "", repo: "", featured: false,
    },
    {
      title: "F-ORDER — Restaurant Order Management",
      description:
        "毕业设计 2 —— 使用 Node.js、Express、MongoDB、React 和 Socket.IO 构建的全栈餐厅点餐管理平台。具备实时订单追踪、基于角色的访问控制、商品/客户管理和分析仪表盘，并提供 REST API、JWT 认证和基于 WebSocket 的通知，同时优化数据库性能。",
      tags: projectTags.forder, link: "https://order-management-amber-seven.vercel.app/", repo: "", featured: false,
    },
  ],
  experience: [
    {
      role: "全栈开发工程师", company: "Wordbee（自由职业）", period: periods.wordbee, stack: stacks.wordbee,
      points: [
        "使用 .NET（后端）和 ReactJS（前端）开发与维护全栈应用，增加可扩展的业务流程功能。",
        "设计 RESTful API、业务逻辑和前端集成，用于翻译管理与流程自动化。",
        "与 Unity、Unreal Engine 和 Google Sheets 构建自定义集成，实现数据自动同步。",
        "与国际团队协作，并借助 Claude AI 加速开发、提升代码质量。",
      ],
    },
    {
      role: "区块链后端工程师", company: "Solana Coin（自由职业）", period: periods.solana, stack: stacks.solana,
      points: [
        "使用 Raydium SDK v2 在 Solana 上构建高性能代币兑换服务。",
        "通过统一的兑换架构支持多种流动性模型（AMM、CPMM、CLMM）。",
        "管理交易生命周期：SOL/WSOL 封装、ATA、交易签名、链上确认追踪。",
        "优化兑换执行（批处理、计算预算、优先费用），并通过 BullMQ 实现多钱包并发交易。",
      ],
    },
    {
      role: "全栈开发工程师", company: "AIoT 公司", period: periods.aiot, stack: stacks.aiot,
      points: [
        "采用 Git 工作流（Git Flow、功能分支、PR 审查）和敏捷 / Scrum（Jira）。",
        "实现考勤系统的核心模块：身份验证、RBAC、请假、管理后台（NestJS、MySQL、TypeORM、JWT、Redis）。",
        "使用 SCSS 和图片优化构建响应式 UI/UX 的公司网站并优化 SEO。",
        "遵循 SOLID/MVC 编写整洁代码，进行代码审查、单元测试（Jest、Postman）和 CI/CD（GitHub Actions）。",
      ],
    },
    {
      role: "全栈开发实习生", company: "SBay 公司", period: periods.sbay, stack: stacks.sbay,
      points: [
        "开发机票预订网站，前端使用 React.js，后端使用 Node.js（Express）。",
        "集成 Bamboo Airways API 获取航班时刻、票价并处理预订。",
        "构建 RESTful API、数据校验，并为主要功能设计测试用例。",
      ],
    },
    {
      role: "全栈开发工程师（毕业设计 2）", company: "F-ORDER", period: periods.forder, stack: stacks.forder,
      points: [
        "使用 Node.js、Express、MongoDB、React 和 Socket.IO 构建全栈餐厅点餐管理平台。",
        "实现实时订单追踪、基于角色的访问控制、商品/客户管理和分析仪表盘。",
        "开发 REST API、JWT 认证、基于 WebSocket 的通知，并优化数据库性能。",
      ],
    },
    {
      role: "全栈开发工程师（毕业设计 1）", company: "Career Support System", period: periods.career, stack: stacks.career,
      points: [
        "构建网络平台，导师可创建并发布课程，学生可注册、付费并在线学习。",
        "开发 React 前端与 Node.js/Express 后端，基于 MongoDB 设计 RESTful API。",
        "实现支付流程与基于购买状态的课程访问控制。",
      ],
    },
  ],
  ui: {
    nav: { about: "关于", skills: "技能", projects: "项目", experience: "经历", contact: "联系", cta: "合作" },
    hero: { greeting: "你好，我是", viewProjects: "查看项目 →", contactMe: "联系我", downloadCv: "↓ 下载简历", scroll: "向下滚动" },
    sections: {
      about: { kicker: "// 关于我", title: "关于我" },
      skills: { kicker: "// 工具", title: "技能" },
      projects: { kicker: "// 作品", title: "精选项目" },
      experience: { kicker: "// 历程", title: "工作经历" },
    },
    contact: {
      kicker: "// 联系", titleA: "一起打造", titleB: "些什么。",
      paragraph: "我随时欢迎有趣的机会与项目，欢迎来打个招呼！",
      socials: { github: "GitHub", linkedin: "LinkedIn", email: "邮箱" },
    },
    footer: { built: "使用 React + GSAP 构建", top: "↑ 返回顶部" },
  },
};

// Toàn bộ nội dung, truy cập theo mã ngôn ngữ: content[lang]
export const content = { vi, en, zh };
