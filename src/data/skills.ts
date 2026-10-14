export interface SkillEvidenceLink {
  labelEn: string;
  labelVi: string;
  href: string;
}

export interface SkillItem {
  name: string;
  contextEn: string;
  contextVi: string;
}

export interface SkillGroup {
  id: string;
  index: string;
  titleEn: string;
  titleVi: string;
  descriptionEn: string;
  descriptionVi: string;
  primarySkills: string[];
  workingSkills: string[];
  items: SkillItem[];
  evidenceLinks: SkillEvidenceLink[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "backend",
    index: "01",
    titleEn: "Backend & Desktop Engineering",
    titleVi: "Phát triển Backend & Ứng dụng Desktop",
    descriptionEn:
      "Building server-side MVC applications, RESTful Web APIs, service-layer business logic, role-based authorization, and Windows desktop POS systems.",
    descriptionVi:
      "Xây dựng ứng dụng Web theo mô hình MVC, RESTful Web API, tầng xử lý nghiệp vụ (Service Layer), phân quyền theo vai trò và phần mềm POS Desktop trên nền tảng .NET 8.",
    primarySkills: [
      "C# (.NET 8.0)",
      "ASP.NET Core MVC",
      "ASP.NET Core Web API",
      "Entity Framework Core 8",
      "WPF (XAML / MVVM)",
    ],
    workingSkills: [
      "Cookie & Session RBAC",
      "PayOS & VietQR Integration",
      "Serverless API Functions",
      "QuestPDF & QRCoder",
    ],
    items: [
      {
        name: "C# & ASP.NET Core 8.0 MVC",
        contextEn: "Implemented 17 controllers, 9 business services, 7 ViewModels, and custom IAuthorizationFilter RBAC.",
        contextVi: "Triển khai 17 Controller, 9 Service nghiệp vụ, 7 ViewModel và bộ lọc phân quyền IAuthorizationFilter.",
      },
      {
        name: "ASP.NET Core 8.0 Web API",
        contextEn: "Built RESTful payment endpoints, HMAC webhook verification, and dual-mode PayOS/VietQR gateway service.",
        contextVi: "Xây dựng REST API thanh toán, xác thực chữ ký Webhook PayOS và tạo mã VietQR động.",
      },
      {
        name: "WPF (.NET 8 Windows) & MVVM",
        contextEn: "Architected RelayCommand bindings, 9 XAML value converters, input validation behaviors, and PDF receipt printing.",
        contextVi: "Thiết kế RelayCommand, 9 bộ chuyển đổi IValueConverter, hành vi kiểm tra dữ liệu XAML và xuất hóa đơn PDF.",
      },
    ],
    evidenceLinks: [
      {
        labelEn: "Coffee Chain Management (.NET 8 MVC)",
        labelVi: "Hệ thống Quản lý Chuỗi Cà phê (.NET 8 MVC)",
        href: "/work/coffee-chain-management",
      },
      {
        labelEn: "Coffee Shop Desktop POS + Payment API",
        labelVi: "Phần mềm Quản lý Quán Cà phê WPF + Web API",
        href: "/work/coffee-shop-desktop-pos",
      },
    ],
  },
  {
    id: "frontend",
    index: "02",
    titleEn: "Frontend & Web Interface Engineering",
    titleVi: "Kỹ thuật Giao diện & Phát triển Frontend Web",
    descriptionEn:
      "Designing and implementing responsive multi-page user interfaces, Razor views, client-side state synchronization, and interactive web experiences.",
    descriptionVi:
      "Thiết kế và lập trình giao diện Web đa trang đáp ứng (Responsive UI), Razor Views, đồng bộ trạng thái phía Client và tối ưu trải nghiệm tương tác.",
    primarySkills: [
      "HTML5 & Semantic Markup",
      "CSS3 & Responsive Layout",
      "JavaScript (ES6+)",
      "Razor Views (.cshtml)",
      "Bootstrap 5.3 & Tailwind CSS",
    ],
    workingSkills: [
      "Astro 5 & TypeScript",
      "Firebase Auth UI Integration",
      "DOM & LocalStorage State",
      "WCAG Accessibility & Print CSS",
    ],
    items: [
      {
        name: "Multi-Page Frontend Architecture",
        contextEn: "Served as Frontend Lead for GIBOR Coffee Web (Home, About, Contact, 15-store Branches filter, and main.js runtime).",
        contextVi: "Đảm nhiệm vai trò Frontend Lead dự án GIBOR Coffee Web (Trang chủ, Giới thiệu, Liên hệ, 15 Chi nhánh và main.js).",
      },
      {
        name: "Server-Rendered Razor Views & Bootstrap 5",
        contextEn: "Built data-driven management dashboards, order POS views, and form validation in ASP.NET Core MVC.",
        contextVi: "Phát triển giao diện bảng điều khiển, màn hình bán hàng và kiểm tra dữ liệu biểu mẫu trong ASP.NET Core MVC.",
      },
      {
        name: "Astro 5, TypeScript & Tailwind CSS 4",
        contextEn: "Engineered this bilingual static portfolio with custom design tokens and compositor-friendly motion.",
        contextVi: "Phát triển hệ thống Portfolio song ngữ tĩnh với hệ thống Design Token và hiệu ứng chuyển động mượt mà.",
      },
    ],
    evidenceLinks: [
      {
        labelEn: "GIBOR Coffee Shop E-Commerce Web",
        labelVi: "Website Thương mại Điện tử GIBOR Coffee",
        href: "/work/gibor-coffee-web",
      },
      {
        labelEn: "HUIT First-Year Retrospective Web",
        labelVi: "Website Tổng kết Năm nhất HUIT",
        href: "/work/web-tong-ket",
      },
    ],
  },
  {
    id: "database",
    index: "03",
    titleEn: "Database Design & Persistence",
    titleVi: "Thiết kế Cơ sở Dữ liệu & Truy vấn SQL Server",
    descriptionEn:
      "Relational schema normalization, ACID transaction management, Entity Framework Core mapping, SQL views, and inventory ledger consistency.",
    descriptionVi:
      "Chuẩn hóa lược đồ quan hệ, quản lý giao dịch ACID, ánh xạ Entity Framework Core, xây dựng SQL View và kiểm soát tồn kho chính xác.",
    primarySkills: [
      "Microsoft SQL Server",
      "Relational Schema Design",
      "T-SQL Queries & Views",
      "EF Core 8 (Code/DB First)",
      "ACID Transactions",
    ],
    workingSkills: [
      "ADO.NET (Microsoft.Data.SqlClient)",
      "EDMX Entity Data Models",
      "Stored Procedures & Triggers",
      "Audit Logging & Stock Ledgers",
    ],
    items: [
      {
        name: "Multi-Branch Relational Modeling (28 Entities + 3 Views)",
        contextEn: "Modeled branches, product variants, recipes (CongThucPhaChe), stock ledgers (LichSuKho), shifts, and payroll.",
        contextVi: "Mô hình hóa chi nhánh, biến thể sản phẩm, công thức pha chế, lịch sử kho, ca làm việc và bảng lương.",
      },
      {
        name: "Transactional Inventory & Recipe Deduction",
        contextEn: "Used BeginTransactionAsync() in EF Core 8 to atomically deduct ingredients and update loyalty points on order checkout.",
        contextVi: "Sử dụng giao dịch ACID trong EF Core 8 để tự động trừ nguyên liệu theo công thức và cộng điểm thành viên.",
      },
    ],
    evidenceLinks: [
      {
        labelEn: "SQL Server Schema in Coffee Chain MVC",
        labelVi: "Cấu trúc SQL Server — Chuỗi Cà phê MVC",
        href: "/work/coffee-chain-management",
      },
      {
        labelEn: "21-Table POS Database in Coffee Shop WPF",
        labelVi: "CSDL 21 Bảng — Phần mềm Quản lý Quán Cà phê",
        href: "/work/coffee-shop-desktop-pos",
      },
    ],
  },
  {
    id: "fundamentals",
    index: "04",
    titleEn: "Engineering Fundamentals & Algorithms",
    titleVi: "Nền tảng Kỹ thuật Phần mềm & Thuật toán",
    descriptionEn:
      "Strong grounding in Object-Oriented Programming, custom data structures, algorithmic optimization, and applied machine learning research.",
    descriptionVi:
      "Nền tảng vững chắc về Lập trình Hướng đối tượng (OOP), cấu trúc dữ liệu tự cài đặt, tối ưu hóa tổ hợp và nghiên cứu học máy ứng dụng.",
    primarySkills: [
      "Object-Oriented Programming (OOP)",
      "Data Structures & Algorithms",
      "C / C++ & Python",
      "Metaheuristic Optimization",
      "High-Utility Itemset Mining",
    ],
    workingSkills: [
      "3D Packing Heuristics (SFT / GSO)",
      "NLP (PhoBERT Transformers)",
      "Computer Vision (YOLO / SAM-ViT)",
      "Debugging & Memory Management",
    ],
    items: [
      {
        name: "Custom Data Structures & Memory Management (C/C++)",
        contextEn: "Built Doubly Linked Lists, LIFO Stack lane simulation, and binary/text file persistence in QuanLyBaiXe.",
        contextVi: "Tự cài đặt Danh sách liên kết đôi, Ngăn xếp LIFO mô phỏng làn xe và đọc/ghi file trong dự án Quản lý Bãi xe.",
      },
      {
        name: "Metaheuristics & Data Mining Research",
        contextEn: "Lead/Co-Author on two FAIR XIX 2026 3D packing papers and NCKH studies on Dynamic Cross-HUIM and EMHUN.",
        contextVi: "Tác giả chính/Đồng tác giả 2 bài báo FAIR XIX 2026 về 3D Packing và đề tài NCKH về khai thác tập hữu ích cao.",
      },
    ],
    evidenceLinks: [
      {
        labelEn: "QuanLyBaiXe (C/C++ Data Structures)",
        labelVi: "Quản lý Bãi xe (Cấu trúc Dữ liệu C/C++)",
        href: "/work/quan-ly-bai-xe",
      },
      {
        labelEn: "FAIR XIX 2026 & Algorithm Research",
        labelVi: "Nghiên cứu Khoa học & FAIR XIX 2026",
        href: "/research",
      },
    ],
  },
  {
    id: "tools",
    index: "05",
    titleEn: "Developer Tools & Collaborative Workflow",
    titleVi: "Công cụ Phát triển & Quy trình Làm việc Nhóm",
    descriptionEn:
      "Practical experience with modern IDEs, version control, database administration tools, cloud deployment, and structured team collaboration.",
    descriptionVi:
      "Sử dụng thànhạo các IDE chuyên dụng, quản lý phiên bản Git, công cụ quản trị CSDL, triển khai đám mây và phối hợp làm việc nhóm.",
    primarySkills: [
      "Git & GitHub Workflows",
      "Visual Studio 2022",
      "VS Code",
      "SQL Server Management Studio (SSMS)",
      "Swagger / OpenAPI & Postman",
    ],
    workingSkills: [
      "Vercel & GitHub Actions CI/CD",
      "RunASP (.NET Hosting)",
      "Firebase Console",
      "Technical Documentation",
    ],
    items: [
      {
        name: "Version Control & Multi-Member Collaboration",
        contextEn: "Collaborated in 3- to 5-member engineering & research teams using Git branches, module contracts, and code review.",
        contextVi: "Phối hợp trong các nhóm dự án 3–5 thành viên qua phân chia module, nhánh Git và tích hợp mã nguồn.",
      },
      {
        name: "Deployment & API Verification",
        contextEn: "Configured Swagger UI for .NET 8 Web APIs, deployed ASP.NET Core MVC to RunASP, and shipped static/serverless apps on Vercel & GitHub Pages.",
        contextVi: "Tích hợp Swagger UI kiểm thử Web API, triển khai ASP.NET Core MVC lên RunASP và vận hành CI/CD trên Vercel & GitHub Pages.",
      },
    ],
    evidenceLinks: [
      {
        labelEn: "GitHub Profile (@gibor06)",
        labelVi: "Hồ sơ GitHub (@gibor06)",
        href: "https://github.com/gibor06",
      },
    ],
  },
];
