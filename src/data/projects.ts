export interface ProjectMediaItem {
  src: string;
  captionEn: string;
  captionVi: string;
  kind: "screenshot" | "diagram" | "gif";
}

export interface ProjectImplementationBlock {
  moduleName: string;
  sourceFiles: string;
  descriptionEn: string;
  descriptionVi: string;
}

export interface ProjectChallenge {
  challengeEn: string;
  challengeVi: string;
  solutionEn: string;
  solutionVi: string;
  tradeoffEn: string;
  tradeoffVi: string;
}

export interface EngineeringProject {
  id: string;
  slug: string;
  legacySlugs?: string[];
  priorityOrder: number;
  featured: boolean;
  category: "Full-Stack Web (.NET MVC)" | "Desktop POS & Web API (.NET)" | "Frontend Web & E-Commerce" | "Systems & Data Structures";
  categoryVi: string;
  classificationEn: string;
  classificationVi: string;
  year: string;
  timelineEn: string;
  timelineVi: string;
  teamInfoEn: string;
  teamInfoVi: string;
  roleEn: string;
  roleVi: string;
  titleEn: string;
  titleVi: string;
  subtitleEn: string;
  subtitleVi: string;
  shortDescEn: string;
  shortDescVi: string;
  technologies: string[];
  repoUrl: string;
  demoUrl?: string;
  demoNoteEn?: string;
  demoNoteVi?: string;
  coverImage: string;
  secondaryImage?: string;
  architectureDiagram?: string;
  gallery: ProjectMediaItem[];
  verifiedHighlights: {
    labelEn: string;
    labelVi: string;
    value: string;
  }[];
  problemEn: string;
  problemVi: string;
  functionalRequirementsEn: string[];
  functionalRequirementsVi: string[];
  architectureSummaryEn: string;
  architectureSummaryVi: string;
  architectureLayers: {
    layerEn: string;
    layerVi: string;
    tech: string;
    detailsEn: string;
    detailsVi: string;
  }[];
  candidateContributionsEn: string[];
  candidateContributionsVi: string[];
  teamAttributionNoteEn: string;
  teamAttributionNoteVi: string;
  implementationDetails: ProjectImplementationBlock[];
  challenges: ProjectChallenge[];
  testingValidationEn: string[];
  testingValidationVi: string[];
  limitationsLessonsEn: string[];
  limitationsLessonsVi: string[];
}

export const engineeringProjects: EngineeringProject[] = [
  {
    id: "proj-01",
    slug: "coffee-chain-management",
    priorityOrder: 1,
    featured: true,
    category: "Full-Stack Web (.NET MVC)",
    categoryVi: "Full-Stack Web (.NET MVC)",
    classificationEn: "Academic Collaborative Project (Team BBBAC)",
    classificationVi: "Đồ án Học thuật Nhóm (Team BBBAC)",
    year: "2026",
    timelineEn: "2025 – 2026 (Academic Year 3)",
    timelineVi: "2025 – 2026 (Năm học thứ 3)",
    teamInfoEn: "Team BBBAC (Collaborative Academic Team)",
    teamInfoVi: "Nhóm BBBAC (Đồ án học thuật làm việc nhóm)",
    roleEn: "Full-Stack .NET Developer (MVC Architecture, Service Layer & SQL Server)",
    roleVi: "Full-Stack .NET Developer (Kiến trúc MVC, Tầng Service & SQL Server)",
    titleEn: "GIBOR Coffee Chain Management System",
    titleVi: "Hệ thống Quản lý Chuỗi Cà phê GIBOR (ASP.NET Core 8 MVC)",
    subtitleEn: "Multi-branch enterprise operations platform built with ASP.NET Core 8.0 MVC, Entity Framework Core 8.0, and SQL Server.",
    subtitleVi: "Hệ thống quản trị vận hành chuỗi cửa hàng đa chi nhánh xây dựng trên ASP.NET Core 8.0 MVC, Entity Framework Core 8.0 và SQL Server.",
    shortDescEn:
      "End-to-end web management system handling multi-branch POS orders, recipe-based ingredient stock deduction, shift scheduling, automated payroll calculation, and 5-role authorization across 17 MVC controllers and 28 relational tables.",
    shortDescVi:
      "Hệ thống web quản lý toàn diện chuỗi cà phê: xử lý đơn hàng đa chi nhánh, tự động trừ tồn kho nguyên liệu theo định mức công thức pha chế, phân ca, tính lương tự động và phân quyền 5 vai trò trên 17 Controller và 28 bảng SQL Server.",
    technologies: [
      "C#",
      "ASP.NET Core 8.0 MVC",
      "Entity Framework Core 8.0",
      "SQL Server",
      "Razor Views (.cshtml)",
      "Bootstrap 5.3",
      "jQuery Validation",
    ],
    repoUrl: "https://github.com/gibor06/GIBOR-COFFEE-CHAIN-MANAGEMENT",
    demoUrl: "http://quanlycaphegibor.runasp.net/",
    demoNoteEn:
      "Public deployment hosted on RunASP (HTTP port 80). For security, test credentials are not published on this portfolio.",
    demoNoteVi:
      "Bản triển khai thực tế trên RunASP (giao thức HTTP). Để đảm bảo an toàn, tài khoản thử nghiệm không công khai trên portfolio.",
    coverImage: "/assets/img/projects/coffee-chain-showcase.png",
    secondaryImage: "/assets/img/projects/coffee-chain-login-live.png",
    architectureDiagram: "/assets/img/projects/coffee-chain-architecture.svg",
    gallery: [
      {
        src: "/assets/img/projects/coffee-chain-login-live.png",
        captionEn: "Live deployed authentication portal at quanlycaphegibor.runasp.net (Authentic Screenshot)",
        captionVi: "Cổng đăng nhập thực tế đang hoạt động tại quanlycaphegibor.runasp.net (Ảnh chụp màn hình thực tế)",
        kind: "screenshot",
      },
      {
        src: "/assets/img/projects/coffee-chain-showcase.png",
        captionEn: "Architectural overview & live deployment summary (QuanLyChuoiCaPhe.Web)",
        captionVi: "Tổng quan kiến trúc hệ thống và thông số kỹ thuật (QuanLyChuoiCaPhe.Web)",
        kind: "diagram",
      },
      {
        src: "/assets/img/projects/coffee-chain-architecture.svg",
        captionEn: "4-Tier MVC + Service Layer + EF Core 8 + SQL Server Architecture Diagram (Illustrative — Verified from Source)",
        captionVi: "Sơ đồ kiến trúc 4 tầng MVC + Service + EF Core 8 + SQL Server (Sơ đồ minh họa từ mã nguồn thực tế)",
        kind: "diagram",
      },
    ],
    verifiedHighlights: [
      { labelEn: "Target Framework", labelVi: "Nền tảng .NET", value: ".NET 8.0 (net8.0)" },
      { labelEn: "MVC Controllers", labelVi: "Số lượng Controller", value: "17 Controllers" },
      { labelEn: "Domain Services", labelVi: "Tầng Nghiệp vụ", value: "9 Services" },
      { labelEn: "Database Schema", labelVi: "Lược đồ SQL Server", value: "28 Tables + 3 Views" },
    ],
    problemEn:
      "Managing a multi-branch coffee chain requires tight synchronization between point-of-sale order entry, branch-level raw ingredient inventory, employee shift attendance, and monthly payroll. Disconnected spreadsheets or single-store POS tools fail to enforce role boundaries across branch managers, warehouse staff, accountants, and cashiers, and cannot automatically deduct raw materials (coffee beans, milk, syrups) based on drink recipes when an order is completed.",
    problemVi:
      "Quản lý chuỗi cà phê nhiều chi nhánh đòi hỏi sự đồng bộ chặt chẽ giữa khâu tạo đơn hàng tại quầy, tồn kho nguyên vật liệu theo từng chi nhánh, chấm công ca làm việc và tính lương cuối tháng. Các công cụ rời rạc hoặc phần mềm đơn lẻ không thể phân tách quyền hạn rõ ràng giữa Admin, Quản lý chi nhánh, Nhân viên bán hàng, Thủ kho và Kế toán, đồng thời không tự động trừ định mức nguyên liệu theo công thức pha chế khi phát sinh đơn hàng.",
    functionalRequirementsEn: [
      "Multi-role authentication and authorization across 5 operational roles: Admin, Branch Manager (Quản lý), Staff (Nhân viên), Warehouse (Kho), and Accountant (Kế toán).",
      "Multi-branch catalog & menu management supporting product size variants (BienTheSanPham), add-on toppings (TuyChonThem), and branch-specific availability (SanPhamChiNhanh).",
      "Transactional order creation (DonHang & ChiTietDonHang) with automatic recipe-based ingredient deduction (CongThucPhaChe -> TonKhoNguyenLieu) and customer loyalty point accumulation.",
      "Warehouse stock initialization, import/export transaction ledger (LichSuKho), supplier management (NhaCungCap), and low-stock alert views (VwCanhBaoTonKho).",
      "Shift scheduling (LichPhanCong), attendance tracking (ChamCong), late penalty rules (PhatDiMuon), holiday wage multipliers (NgayDacBiet), and automated monthly payroll generation (BangLuong).",
      "Executive and branch-level analytics dashboards (DashboardController, BaoCaoController) summarizing revenue, order volume, and inventory health.",
    ],
    functionalRequirementsVi: [
      "Xác thực và phân quyền theo 5 vai trò vận hành: Admin, Quản lý, Nhân viên, Kho và Kế toán.",
      "Quản lý thực đơn đa chi nhánh hỗ trợ biến thể kích cỡ (BienTheSanPham), tùy chọn thêm/topping (TuyChonThem) và trạng thái kinh doanh tại từng chi nhánh (SanPhamChiNhanh).",
      "Tạo đơn hàng giao dịch (DonHang & ChiTietDonHang) tích hợp tự động trừ tồn kho nguyên liệu theo công thức pha chế (CongThucPhaChe -> TonKhoNguyenLieu) và tích điểm khách hàng.",
      "Khởi tạo tồn kho, ghi nhận nhật ký nhập/xuất kho (LichSuKho), quản lý nhà cung cấp (NhaCungCap) và cảnh báo nguyên liệu sắp hết (VwCanhBaoTonKho).",
      "Phân công lịch làm việc (LichPhanCong), chấm công (ChamCong), cấu hình phạt đi muộn (PhatDiMuon), hệ số lương ngày đặc biệt (NgayDacBiet) và tổng hợp bảng lương (BangLuong).",
      "Bảng điều khiển thống kê doanh thu, sản lượng đơn hàng và báo cáo vận hành theo chi nhánh (DashboardController, BaoCaoController).",
    ],
    architectureSummaryEn:
      "The application (`QuanLyChuoiCaPhe.Web.csproj`, targeting `net8.0`) follows a layered ASP.NET Core MVC architecture with an explicit Business Service Layer registered via Dependency Injection in `Program.cs`. HTTP requests pass through Cookie Authentication (`GiborCoffeeAuth`) and a custom `RoleAuthorizeAttribute` filter before reaching the 17 controllers. Complex multi-table workflows are encapsulated inside 9 dedicated domain services that coordinate ACID transactions over Entity Framework Core 8.0 (`QuanLyChuoiCaPheContext`) against a normalized SQL Server database.",
    architectureSummaryVi:
      "Ứng dụng (`QuanLyChuoiCaPhe.Web.csproj`, target `net8.0`) được thiết kế theo kiến trúc phân tầng ASP.NET Core MVC kết hợp Tầng Dịch vụ Nghiệp vụ (Service Layer) đăng ký qua Dependency Injection trong `Program.cs`. Mọi HTTP Request đi qua middleware Cookie Authentication (`GiborCoffeeAuth`) và bộ lọc phân quyền tùy chỉnh `RoleAuthorizeAttribute` trước khi tới 17 Controller. Các luồng nghiệp vụ liên quan nhiều bảng được đóng gói trong 9 Service chuyên biệt, điều phối giao dịch ACID qua Entity Framework Core 8.0 (`QuanLyChuoiCaPheContext`) xuống SQL Server.",
    architectureLayers: [
      {
        layerEn: "01 / Presentation & Auth Filter",
        layerVi: "01 / Giao diện Razor & Bộ lọc Phân quyền",
        tech: "Razor Views (.cshtml) • Bootstrap 5.3 • RoleAuthorizeAttribute.cs",
        detailsEn:
          "Server-rendered Razor views backed by 7 strongly-typed ViewModels (`DonHangCreateViewModel`, `BangLuongCreateViewModel`, `KhoGiaoDichViewModel`, `DashboardViewModel`, etc.) and protected by `IAuthorizationFilter` checking session keys `MaTK` and `VaiTro`.",
        detailsVi:
          "Giao diện Razor kết xuất phía server sử dụng 7 ViewModel định kiểu mạnh và được bảo vệ bởi bộ lọc `IAuthorizationFilter` kiểm tra phiên đăng nhập (`MaTK`, `VaiTro`).",
      },
      {
        layerEn: "02 / Controller Layer (17 Controllers)",
        layerVi: "02 / Tầng Điều hướng (17 MVC Controllers)",
        tech: "BaseController.cs • DonHangController • KhoController • BangLuongController",
        detailsEn:
          "Inherits shared session/branch context from `BaseController.cs`. Handles routing, model state validation, and delegates business rules to injected domain services.",
        detailsVi:
          "Kế thừa ngữ cảnh chi nhánh và người dùng từ `BaseController.cs`, chịu trách nhiệm định tuyến, kiểm tra `ModelState` và gọi tầng Service xử lý nghiệp vụ.",
      },
      {
        layerEn: "03 / Business Logic Services (9 Services)",
        layerVi: "03 / Tầng Dịch vụ Nghiệp vụ (9 Domain Services)",
        tech: "DonHangService • KhoService • BangLuongService • DashboardService • BaoCaoService",
        detailsEn:
          "Encapsulates multi-step domain operations including recipe-driven stock deduction, stock ledger auditing, holiday-weighted payroll calculation, and SHA-256/BCrypt password verification (`AuthService`, `PasswordService`, `CodeGenerator`).",
        detailsVi:
          "Đóng gói các quy tắc nghiệp vụ phức tạp: trừ nguyên liệu theo công thức khi bán hàng, ghi sổ cái kho, tính lương theo ca/ngày lễ/phạt đi muộn và bảo mật mật khẩu.",
      },
      {
        layerEn: "04 / Persistence & SQL Server Layer",
        layerVi: "04 / Tầng Lưu trữ EF Core 8 & SQL Server",
        tech: "QuanLyChuoiCaPheContext.cs • 28 Entities • 3 SQL Views",
        detailsEn:
          "Entity Framework Core 8.0 (`Microsoft.EntityFrameworkCore.SqlServer` 8.0.0) mapping 28 relational tables and 3 SQL views (`VwBangLuongTongHop`, `VwCanhBaoTonKho`, `VwMenuChiNhanh`).",
        detailsVi:
          "Entity Framework Core 8.0 ánh xạ 28 bảng dữ liệu quan hệ và 3 khung nhìn SQL View (`VwBangLuongTongHop`, `VwCanhBaoTonKho`, `VwMenuChiNhanh`).",
      },
    ],
    candidateContributionsEn: [
      "Participated in designing the multi-tier ASP.NET Core 8.0 MVC architecture, separating controller routing from the 9-service business logic layer (`Services/`).",
      "Implemented transactional order & inventory synchronization in `DonHangService.cs` and `KhoService.cs`, ensuring that completing an order atomically deducts raw ingredients according to `CongThucPhaChe` and logs `LichSuKho` entries.",
      "Built role-based access control using `Filters/RoleAuthorizeAttribute.cs` and `Controllers/BaseController.cs` to enforce branch-level and role-level permissions across 5 staff roles.",
      "Contributed to relational database schema modeling (`GIBOR_COFFEE_COMPLETE.sql`) and EF Core 8 `QuanLyChuoiCaPheContext` configuration covering 28 tables and 3 reporting views.",
    ],
    candidateContributionsVi: [
      "Tham gia thiết kế kiến trúc phân tầng ASP.NET Core 8.0 MVC, tách biệt rõ ràng 17 Controller với 9 Service xử lý nghiệp vụ (`Services/`).",
      "Xây dựng luồng xử lý giao dịch đơn hàng và đồng bộ tồn kho trong `DonHangService.cs` và `KhoService.cs`, đảm bảo khi hoàn tất đơn hàng sẽ tự động trừ nguyên liệu theo `CongThucPhaChe` và ghi vết `LichSuKho`.",
      "Triển khai cơ chế phân quyền theo vai trò qua `Filters/RoleAuthorizeAttribute.cs` và `Controllers/BaseController.cs` cho 5 nhóm người dùng trong chuỗi.",
      "Tham gia thiết kế lược đồ CSDL quan hệ SQL Server (`GIBOR_COFFEE_COMPLETE.sql`) và cấu hình EF Core 8 `QuanLyChuoiCaPheContext` gồm 28 bảng và 3 SQL View.",
    ],
    teamAttributionNoteEn:
      "Developed collaboratively by Team BBBAC as an academic software engineering project at HUIT. While the repository was consolidated and deployed under gibor06, credit for the complete 17-controller system is shared across the project team.",
    teamAttributionNoteVi:
      "Dự án được phát triển bởi nhóm sinh viên Team BBBAC tại HUIT. Kho mã nguồn và bản triển khai được lưu trữ trên tài khoản gibor06; kết quả toàn hệ thống 17 Controller là công sức chung của tập thể nhóm.",
    implementationDetails: [
      {
        moduleName: "Transactional Order & Recipe Stock Deduction",
        sourceFiles: "Services/DonHangService.cs, Models/CongThucPhaChe.cs, Models/TonKhoNguyenLieu.cs",
        descriptionEn:
          "Uses `_context.Database.BeginTransactionAsync()` when creating an order (`DonHang`). Iterates through each `ChiTietDonHang`, queries `CongThucPhaChe` for the ordered product variant, deducts exact ingredient quantities from the branch's `TonKhoNguyenLieu`, records `LichSuKho` audit rows, and updates customer loyalty points before committing.",
        descriptionVi:
          "Sử dụng `_context.Database.BeginTransactionAsync()` khi tạo `DonHang`. Duyệt qua từng dòng `ChiTietDonHang`, truy vấn định mức `CongThucPhaChe` theo biến thể món, trừ lượng nguyên liệu tương ứng trong `TonKhoNguyenLieu` của chi nhánh, ghi nhật ký `LichSuKho` và cộng điểm khách hàng trước khi commit.",
      },
      {
        moduleName: "Custom Role & Session Authorization Filter",
        sourceFiles: "Filters/RoleAuthorizeAttribute.cs, Controllers/BaseController.cs, Program.cs",
        descriptionEn:
          "Implements `IAuthorizationFilter` to inspect `HttpContext.Session` for `MaTK` and `VaiTro`. Normalizes role strings and restricts controller actions to authorized roles (`Admin`, `Quản lý`, `Nhân viên`, `Kho`, `Kế toán`), redirecting unauthenticated users to `/Account/Login`.",
        descriptionVi:
          "Cài đặt giao diện `IAuthorizationFilter` kiểm tra `MaTK` và `VaiTro` trong Session, chuẩn hóa chuỗi vai trò và giới hạn quyền truy cập từng Controller/Action theo đúng 5 nhóm nghiệp vụ.",
      },
      {
        moduleName: "Automated Payroll & Attendance Calculation",
        sourceFiles: "Services/BangLuongService.cs, Controllers/BangLuongController.cs, Models/VwBangLuongTongHop.cs",
        descriptionEn:
          "Aggregates verified attendance records (`ChamCong`) per employee and shift (`CaLamViec`), applies special holiday rate multipliers (`NgayDacBiet`), subtracts late arrival penalties (`PhatDiMuon`), and persists monthly salary sheets (`BangLuong`).",
        descriptionVi:
          "Tổng hợp dữ liệu chấm công (`ChamCong`) theo ca làm việc (`CaLamViec`), nhân hệ số lương ngày lễ (`NgayDacBiet`), khấu trừ các khoản phạt đi muộn (`PhatDiMuon`) và kết xuất bảng lương tổng hợp (`BangLuong`).",
      },
    ],
    challenges: [
      {
        challengeEn:
          "Maintaining inventory consistency when an order contains multiple drinks that share the same raw ingredients (e.g., espresso beans and fresh milk) under concurrent branch operations.",
        challengeVi:
          "Đảm bảo tính nhất quán tồn kho khi một đơn hàng gồm nhiều món đồ uống cùng sử dụng chung nguyên liệu nền (hạt cà phê, sữa tươi) tại chi nhánh.",
        solutionEn:
          "Wrapped order insertion, recipe lookup, stock deduction, and stock history logging inside an explicit EF Core database transaction (`BeginTransactionAsync`) with rollback on insufficient stock or validation failure.",
        solutionVi:
          "Đóng gói toàn bộ quá trình lưu đơn, tra cứu công thức, trừ kho và ghi lịch sử kho vào một giao dịch cơ sở dữ liệu (`BeginTransactionAsync`), tự động rollback nếu phát sinh lỗi.",
        tradeoffEn:
          "Increases transaction lock duration slightly during checkout in exchange for strict ACID consistency between sales and warehouse ledgers.",
        tradeoffVi:
          "Tăng nhẹ thời gian giữ khóa giao dịch khi thanh toán nhưng đổi lại đảm bảo tính toàn vẹn ACID tuyệt đối giữa dữ liệu bán hàng và sổ kho.",
      },
      {
        challengeEn:
          "Reconciling documentation vs. build configuration across team environments (README referenced .NET 6 while EF Core 8 packages required .NET 8).",
        challengeVi:
          "Đồng bộ cấu hình môi trường phát triển giữa các thành viên (tài liệu ban đầu ghi .NET 6 nhưng các gói EF Core 8.0.0 yêu cầu .NET 8.0).",
        solutionEn:
          "Standardized `QuanLyChuoiCaPhe.Web.csproj` on `<TargetFramework>net8.0</TargetFramework>` with EF Core `8.0.0` packages and consolidated SQL initialization scripts (`GIBOR_COFFEE_COMPLETE.sql`).",
        solutionVi:
          "Chuẩn hóa tệp dự án `QuanLyChuoiCaPhe.Web.csproj` lên `net8.0` đồng bộ với bộ thư viện Entity Framework Core `8.0.0` và kịch bản khởi tạo SQL thống nhất.",
        tradeoffEn:
          "Requires .NET 8 SDK on developer and hosting machines, which RunASP supports natively.",
        tradeoffVi:
          "Yêu cầu máy trạm và máy chủ cài đặt .NET 8 Runtime (được hỗ trợ sẵn trên hạ tầng RunASP).",
      },
    ],
    testingValidationEn: [
      "Verified end-to-end compilation and deployment of `QuanLyChuoiCaPhe.Web` (`.NET 8.0`) to RunASP (`http://quanlycaphegibor.runasp.net/`).",
      "Validated SQL schema integrity and seed data execution using `GIBOR_COFFEE_COMPLETE.sql` across all 28 tables and 3 views in SQL Server Management Studio.",
      "Tested role-based access restrictions across Admin, Branch Manager, Warehouse, Accountant, and Staff accounts to confirm unauthorized routes redirect properly.",
    ],
    testingValidationVi: [
      "Kiểm tra biên dịch và triển khai thực tế dự án `QuanLyChuoiCaPhe.Web` (`.NET 8.0`) lên môi trường hosting RunASP (`http://quanlycaphegibor.runasp.net/`).",
      "Xác thực tính toàn vẹn khóa ngoại, ràng buộc dữ liệu và View bằng kịch bản `GIBOR_COFFEE_COMPLETE.sql` trên SQL Server Management Studio (SSMS).",
      "Kiểm thử phân quyền thực tế trên từng nhóm tài khoản (Admin, Quản lý, Kho, Kế toán, Nhân viên) đảm bảo chặn truy cập trái phép giữa các phân hệ.",
    ],
    limitationsLessonsEn: [
      "The public RunASP free-tier hosting environment operates over HTTP rather than HTTPS and sleeps after idle periods.",
      "Authorization currently combines Cookie Authentication with session role checks (`RoleAuthorizeAttribute`); migrating role claims directly into signed ASP.NET Core Identity / JWT claims would improve stateless scalability.",
    ],
    limitationsLessonsVi: [
      "Gói hosting miễn phí trên RunASP hiện chỉ hỗ trợ HTTP tiêu chuẩn và có thể khởi động lại App Pool sau thời gian nghỉ.",
      "Cơ chế phân quyền hiện kết hợp Cookie Auth và biến Session (`RoleAuthorizeAttribute`); trong tương lai có thể tích hợp toàn bộ vai trò vào Claims-based Identity để hỗ trợ mở rộng không trạng thái (stateless).",
    ],
  },
  {
    id: "proj-02",
    slug: "coffee-shop-desktop-pos",
    priorityOrder: 2,
    featured: true,
    category: "Desktop POS & Web API (.NET)",
    categoryVi: "Phần mềm POS Desktop & Web API (.NET)",
    classificationEn: "Academic Collaborative Project (3-Member Team)",
    classificationVi: "Đồ án Học thuật Nhóm (3 Thành viên)",
    year: "2026",
    timelineEn: "2025 – 2026 (Academic Year 3)",
    timelineVi: "2025 – 2026 (Năm học thứ 3)",
    teamInfoEn: "3 Members: Trần Gia Bảo, Trần Dương Gia Bảo, Nguyễn Thế Anh",
    teamInfoVi: "3 Thành viên: Trần Gia Bảo, Trần Dương Gia Bảo, Nguyễn Thế Anh",
    roleEn: "Full-Stack .NET Developer (WPF MVVM Client, Web API & SQL Server Integration)",
    roleVi: "Full-Stack .NET Developer (Ứng dụng WPF MVVM, Web API & Tích hợp SQL Server)",
    titleEn: "Coffee Shop Management Desktop POS + Payment Web API",
    titleVi: "Phần mềm Quản lý Quán Cà phê (WPF MVVM) & Web API Thanh toán QR",
    subtitleEn: "Multi-project .NET 8 solution combining a Windows WPF MVVM POS client with an ASP.NET Core 8.0 Payment Web API (PayOS & VietQR).",
    subtitleVi: "Giải pháp .NET 8 đa dự án kết hợp phần mềm POS Desktop WPF (MVVM) và ASP.NET Core 8.0 Web API tích hợp cổng thanh toán PayOS & VietQR.",
    shortDescEn:
      "Three-project Visual Studio solution (`CoffeeShop.Wpf.sln`) featuring a native Windows WPF POS client (`net8.0-windows`), a companion ASP.NET Core 8.0 REST Web API (`CoffeeShop.PaymentApi`) for dynamic PayOS/VietQR checkout and webhook verification, QuestPDF invoice generation, and a 21-table SQL Server database.",
    shortDescVi:
      "Giải pháp 3 project trong `CoffeeShop.Wpf.sln` gồm ứng dụng Desktop WPF (`net8.0-windows`) theo mẫu MVVM, dịch vụ ASP.NET Core 8.0 Web API (`CoffeeShop.PaymentApi`) xử lý tạo mã QR động PayOS/VietQR và xác thực Webhook, in hóa đơn PDF bằng QuestPDF trên nền CSDL SQL Server 21 bảng.",
    technologies: [
      "C#",
      "WPF (.NET 8 Windows)",
      "XAML & MVVM",
      "ASP.NET Core 8.0 Web API",
      "SQL Server",
      "PayOS & VietQR",
      "QuestPDF",
      "QRCoder",
    ],
    repoUrl: "https://github.com/gibor06/GIBOR06-COFFEE-SHOP-MANAGENMENT-SOFTWARE",
    coverImage: "/assets/img/projects/coffee-desktop-showcase.png",
    architectureDiagram: "/assets/img/projects/coffee-desktop-architecture.svg",
    gallery: [
      {
        src: "/assets/img/projects/coffee-desktop-showcase.png",
        captionEn: "Multi-project solution breakdown: CoffeeShop.Wpf + CoffeeShop.PaymentApi + CoffeeShop.EFModel",
        captionVi: "Cấu trúc giải pháp 3 dự án: CoffeeShop.Wpf + CoffeeShop.PaymentApi + CoffeeShop.EFModel",
        kind: "diagram",
      },
      {
        src: "/assets/img/projects/coffee-desktop-architecture.svg",
        captionEn: "System Architecture Diagram: WPF MVVM Client + ASP.NET Core 8 Payment Web API + SQL Server (Illustrative — Verified from Source)",
        captionVi: "Sơ đồ Kiến trúc Hệ thống: WPF MVVM Client + ASP.NET Core 8 Payment Web API + SQL Server (Minh họa từ mã nguồn thực tế)",
        kind: "diagram",
      },
    ],
    verifiedHighlights: [
      { labelEn: "Solution Structure", labelVi: "Cấu trúc Solution", value: "3 Projects (354 Files)" },
      { labelEn: "Desktop Client", labelVi: "Ứng dụng Desktop", value: "WPF net8.0-windows" },
      { labelEn: "Payment Backend", labelVi: "Backend Thanh toán", value: "ASP.NET Core 8 API" },
      { labelEn: "Database Schema", labelVi: "CSDL SQL Server", value: "21 Relational Tables" },
    ],
    problemEn:
      "In-store coffee shop cashiers need a responsive desktop POS interface for rapid table management, order splitting, shift reconciliation, and thermal/PDF receipt printing, while customers increasingly pay via instant bank QR codes (VietQR / PayOS). A standalone desktop app cannot securely receive public payment gateway webhooks directly without exposing database credentials or local network ports.",
    problemVi:
      "Thu ngân tại quán cà phê cần một giao diện POS Desktop phản hồi tức thời để quản lý sơ đồ bàn, gọi món, chốt ca và in hóa đơn PDF, trong khi khách hàng ngày càng chuộng quét mã QR ngân hàng (VietQR / PayOS). Một ứng dụng Desktop đơn thuần không thể nhận trực tiếp Webhook xác nhận giao dịch từ cổng thanh toán quốc tế/nội địa một cách an toàn nếu không thông qua tầng Web API trung gian.",
    functionalRequirementsEn: [
      "Visual floor and table state management (`Ban`, `KhuVuc`, `DatBan`) supporting dine-in, takeaway, table transfer, and active bill tracking (`HoaDonBan`, `ChiTietHoaDonBan`).",
      "Custom MVVM data-binding infrastructure with `RelayCommand`, `RelayCommandT`, 9 XAML `IValueConverter` classes, and custom XAML input validation behaviors (`NumericTextBoxBehavior`, `QuantityValidationBehavior`).",
      "Companion ASP.NET Core 8.0 Web API (`CoffeeShop.PaymentApi`) exposing REST endpoints to create dynamic QR payment sessions (`POST /api/payments/qr/create`), poll status, and process PayOS webhooks.",
      "Dual-mode QR payment engine (`PayOsPaymentGatewayService.cs`): integrates live PayOS payment links with cryptographic checksum verification and falls back to standardized VietQR generation (`QRCoder`) when offline.",
      "Recipe management (`CongThucMon`), raw material inventory (`NguyenLieu`, `HoaDonNhap`, `LichSuTonKho`), promotions (`KhuyenMai`), customer loyalty (`KhachHang`), shift closing summaries (`CaTongKetModel`), and `AuditLog` tracking.",
      "Automated PDF invoice and shift report generation using `QuestPDF` (`2026.2.4`).",
    ],
    functionalRequirementsVi: [
      "Quản lý sơ đồ bàn và khu vực trực quan (`Ban`, `KhuVuc`, `DatBan`), hỗ trợ phục vụ tại bàn, mang đi, chuyển/gộp bàn và theo dõi hóa đơn (`HoaDonBan`, `ChiTietHoaDonBan`).",
      "Hạ tầng MVVM tự xây dựng gồm `RelayCommand`, `RelayCommandT`, 9 bộ chuyển đổi `IValueConverter` cho XAML và các Behavior kiểm tra dữ liệu đầu vào (`NumericTextBoxBehavior`, `QuantityValidationBehavior`).",
      "Dịch vụ ASP.NET Core 8.0 Web API (`CoffeeShop.PaymentApi`) cung cấp các endpoint tạo phiên thanh toán QR (`POST /api/payments/qr/create`), kiểm tra trạng thái và nhận Webhook từ PayOS.",
      "Cơ chế thanh toán QR kép (`PayOsPaymentGatewayService.cs`): hỗ trợ đồng thời cổng PayOS (xác thực chữ ký ChecksumKey) và chế độ dự phòng tạo mã tĩnh VietQR (`QRCoder`).",
      "Quản lý định mức công thức (`CongThucMon`), nhập kho nguyên liệu (`NguyenLieu`, `HoaDonNhap`, `LichSuTonKho`), khuyến mãi (`KhuyenMai`), khách hàng thân thiết (`KhachHang`), chốt ca (`CaTongKetModel`) và nhật ký hệ thống (`AuditLog`).",
      "Kết xuất và in hóa đơn bán hàng / báo cáo ca ra định dạng PDF chuyên nghiệp qua thư viện `QuestPDF` (`2026.2.4`).",
    ],
    architectureSummaryEn:
      "The repository is organized as a 3-project Visual Studio solution (`CoffeeShop.Wpf.sln`). `CoffeeShop.Wpf` (`net8.0-windows`) implements the desktop presentation and MVVM ViewModels, communicating with SQL Server via `DbConnectionFactory` (`Microsoft.Data.SqlClient` 5.2.2 & EF6) and calling `CoffeeShop.PaymentApi` (`net8.0`) over HTTP for QR checkout workflows. `CoffeeShop.EFModel` (`.NET Framework 4.8`) maintains the Database-First EDMX schema mapping all 21 SQL Server tables.",
    architectureSummaryVi:
      "Kho mã nguồn được tổ chức thành Solution 3 dự án (`CoffeeShop.Wpf.sln`). `CoffeeShop.Wpf` (`net8.0-windows`) đảm nhận giao diện XAML và tầng ViewModel theo mẫu MVVM, kết nối SQL Server qua `DbConnectionFactory` (`Microsoft.Data.SqlClient` 5.2.2) và giao tiếp HTTP với `CoffeeShop.PaymentApi` (`net8.0`) khi thực hiện thanh toán QR. Dự án thứ ba `CoffeeShop.EFModel` lưu trữ mô hình thực thể EDMX ánh xạ 21 bảng SQL Server.",
    architectureLayers: [
      {
        layerEn: "01 / WPF Desktop Client (CoffeeShop.Wpf)",
        layerVi: "01 / Ứng dụng Desktop WPF (CoffeeShop.Wpf)",
        tech: ".NET 8.0 Windows • XAML • MVVM • QuestPDF 2026.2.4 • QRCoder 1.6.0",
        detailsEn:
          "Separates XAML views from stateful ViewModels using `RelayCommand`, 9 custom value converters (`Converters/`), XAML behaviors (`Behaviors/`), and helper utilities (`PasswordBoxHelper`, `ValidationHelper`, `TextNormalizationHelper`).",
        detailsVi:
          "Tách biệt giao diện XAML và ViewModel thông qua `RelayCommand`, 9 lớp `IValueConverter`, các XAML Behavior kiểm soát nhập liệu và bộ tiện ích chuẩn hóa chuỗi/mật khẩu.",
      },
      {
        layerEn: "02 / Payment Web API (CoffeeShop.PaymentApi)",
        layerVi: "02 / Web API Thanh toán (CoffeeShop.PaymentApi)",
        tech: "ASP.NET Core 8.0 Web API • PayOsPaymentGatewayService.cs • Swashbuckle Swagger",
        detailsEn:
          "Exposes `PaymentsController.cs` endpoints (`qr/create`, status polling, PayOS webhook receiver, manual confirmation) backed by `PaymentRepository.cs` and `PayOsOptions.cs`.",
        detailsVi:
          "Cung cấp các REST API trong `PaymentsController.cs` (tạo mã QR, truy vấn trạng thái, nhận Webhook PayOS, xác nhận thủ công) kết nối CSDL qua `PaymentRepository.cs`.",
      },
      {
        layerEn: "03 / Relational Database & EDMX (CoffeeShop.EFModel)",
        layerVi: "03 / Cơ sở Dữ liệu SQL Server & EDMX (21 Bảng)",
        tech: "SQL Server • Microsoft.Data.SqlClient 5.2.2 • 21 Normalized Tables",
        detailsEn:
          "Covers `Ban`, `KhuVuc`, `DatBan`, `HoaDonBan`, `ChiTietHoaDonBan`, `ThanhToan`, `Mon`, `LoaiMon`, `CongThucMon`, `NguyenLieu`, `HoaDonNhap`, `ChiTietHoaDonNhap`, `LichSuTonKho`, `NhaCungCap`, `NhanVien`, `TaiKhoan`, `VaiTro`, `CaLamViec`, `KhachHang`, `KhuyenMai`, and `AuditLog`.",
        detailsVi:
          "Bao gồm đầy đủ 21 bảng phục vụ bán hàng tại bàn, thanh toán QR, định mức pha chế, nhập xuất tồn kho, phân ca nhân viên, khuyến mãi và nhật ký kiểm toán (`AuditLog`).",
      },
    ],
    candidateContributionsEn: [
      "Collaborated in a 3-member engineering team (Trần Gia Bảo, Trần Dương Gia Bảo, Nguyễn Thế Anh) to architect the multi-project `.NET 8` solution (`CoffeeShop.Wpf` + `CoffeeShop.PaymentApi`).",
      "Contributed to the WPF MVVM client architecture, custom command/converter bindings, POS billing workflows, and SQL Server data access layer (`DbConnectionFactory`).",
      "Participated in integrating the companion ASP.NET Core 8.0 `CoffeeShop.PaymentApi` service supporting dynamic PayOS/VietQR checkout and real-time payment state synchronization with the desktop POS.",
    ],
    candidateContributionsVi: [
      "Phối hợp trong nhóm 3 thành viên (Trần Gia Bảo, Trần Dương Gia Bảo, Nguyễn Thế Anh) thiết kế kiến trúc giải pháp đa dự án `.NET 8` (`CoffeeShop.Wpf` + `CoffeeShop.PaymentApi`).",
      "Tham gia xây dựng hạ tầng MVVM trên WPF, cơ chế binding Command/Converter, luồng nghiệp vụ bán hàng POS tại bàn và tầng kết nối dữ liệu SQL Server (`DbConnectionFactory`).",
      "Tham gia tích hợp dịch vụ `CoffeeShop.PaymentApi` (ASP.NET Core 8.0 Web API) hỗ trợ tạo mã thanh toán động PayOS/VietQR và đồng bộ trạng thái giao dịch về màn hình thu ngân.",
    ],
    teamAttributionNoteEn:
      "Built collaboratively by a 3-student team at HUIT (Trần Gia Bảo, Trần Dương Gia Bảo, Nguyễn Thế Anh) as documented in the repository README.",
    teamAttributionNoteVi:
      "Dự án được thực hiện bởi nhóm 3 sinh viên tại HUIT (Trần Gia Bảo, Trần Dương Gia Bảo, Nguyễn Thế Anh) theo đúng thông tin ghi nhận trong README của repository.",
    implementationDetails: [
      {
        moduleName: "Dual-Mode PayOS & VietQR Payment Gateway Service",
        sourceFiles: "CoffeeShop.PaymentApi/Controllers/PaymentsController.cs, Services/PayOsPaymentGatewayService.cs, Data/PaymentRepository.cs",
        descriptionEn:
          "When the WPF client requests a QR checkout (`CreateQrPaymentRequest`), `PayOsPaymentGatewayService` either creates a signed payment session via PayOS API (`ClientId`, `ApiKey`, `ChecksumKey`) or generates a compliant VietQR payload rendered via `QRCoder`, persisting the transaction state in the `ThanhToan` table.",
        descriptionVi:
          "Khi ứng dụng WPF gửi yêu cầu thanh toán (`CreateQrPaymentRequest`), `PayOsPaymentGatewayService` tạo liên kết thanh toán có chữ ký bảo mật qua PayOS hoặc sinh chuỗi VietQR tiêu chuẩn qua `QRCoder`, đồng thời lưu trạng thái giao dịch vào bảng `ThanhToan`.",
      },
      {
        moduleName: "WPF MVVM Binding & Input Validation Behaviors",
        sourceFiles: "CoffeeShop.Wpf/Behaviors/NumericTextBoxBehavior.cs, Behaviors/QuantityValidationBehavior.cs, Converters/*",
        descriptionEn:
          "Prevents invalid POS quantity and currency entries at the XAML UI layer using attached WPF behaviors (`Microsoft.Xaml.Behaviors.Wpf`), while 9 custom `IValueConverter` classes handle status colors, currency formatting, and visibility toggling without polluting ViewModels with UI types.",
        descriptionVi:
          "Ngăn chặn nhập sai số lượng và mệnh giá tiền ngay tại tầng giao diện XAML bằng các Attached Behavior, kết hợp 9 lớp `IValueConverter` giúp chuyển đổi màu sắc trạng thái bàn, định dạng tiền tệ và ẩn/hiện phần tử mà không làm bẩn logic của ViewModel.",
      },
      {
        moduleName: "QuestPDF Receipt & Shift Summary Export",
        sourceFiles: "CoffeeShop.Wpf (QuestPDF 2026.2.4 integration), Models/CaTongKetModel.cs",
        descriptionEn:
          "Generates formatted PDF sales invoices (`HoaDonBan`) and end-of-shift reconciliation summaries (`CaTongKetModel`) with itemized drink lines, discounts, and QR verification metadata.",
        descriptionVi:
          "Tạo phiếu thanh toán (`HoaDonBan`) và biên bản bàn giao ca (`CaTongKetModel`) dưới dạng tệp PDF sắc nét bằng thư viện `QuestPDF`, hiển thị chi tiết món, khuyến mãi và thông tin đối soát QR.",
      },
    ],
    challenges: [
      {
        challengeEn:
          "Decoupling asynchronous bank transfer confirmation from the synchronous Windows WPF desktop UI thread without freezing the cashier screen.",
        challengeVi:
          "Tách biệt quá trình chờ xác nhận chuyển khoản ngân hàng bất đồng bộ khỏi luồng giao diện chính (UI Thread) của ứng dụng Desktop WPF để không làm đơ màn hình thu ngân.",
        solutionEn:
          "Extracted payment creation and webhook handling into `CoffeeShop.PaymentApi` (`ASP.NET Core 8.0`) and implemented non-blocking async status polling (`GET /api/payments/{id}/status`) plus manual cashier override (`POST /api/payments/{id}/confirm`) in the WPF checkout modal.",
        solutionVi:
          "Tách riêng khâu tạo giao dịch và nhận Webhook sang project `CoffeeShop.PaymentApi` (`ASP.NET Core 8.0`), đồng thời sử dụng cơ chế truy vấn trạng thái bất đồng bộ (`async/await`) kết hợp nút xác nhận thủ công dự phòng trên hộp thoại thanh toán WPF.",
        tradeoffEn:
          "Requires running the companion Web API alongside the WPF client when using live PayOS webhooks, mitigated by automatic VietQR fallback mode.",
        tradeoffVi:
          "Cần khởi chạy dịch vụ Web API đi kèm khi muốn nhận Webhook PayOS thời gian thực, nhưng đã có chế độ tạo mã VietQR nội bộ dự phòng khi chạy độc lập.",
      },
    ],
    testingValidationEn: [
      "Verified multi-project solution structure (`CoffeeShop.Wpf.sln`) across `CoffeeShop.Wpf` (`net8.0-windows`), `CoffeeShop.PaymentApi` (`net8.0`), and `CoffeeShop.EFModel`.",
      "Tested REST payment endpoints via integrated Swagger/OpenAPI UI (`Swashbuckle.AspNetCore` 6.6.2) in `CoffeeShop.PaymentApi`.",
      "Validated database creation and seed scripts against the 21-table SQL Server schema.",
    ],
    testingValidationVi: [
      "Kiểm tra cấu trúc Solution đa dự án (`CoffeeShop.Wpf.sln`) kết nối đồng bộ giữa `CoffeeShop.Wpf` (`net8.0-windows`), `CoffeeShop.PaymentApi` (`net8.0`) và `CoffeeShop.EFModel`.",
      "Kiểm thử các REST API thanh toán thông qua giao diện tài liệu Swagger/OpenAPI tích hợp sẵn trong `CoffeeShop.PaymentApi`.",
      "Xác thực kịch bản khởi tạo CSDL và ràng buộc toàn vẹn trên 21 bảng SQL Server.",
    ],
    limitationsLessonsEn: [
      "Because `CoffeeShop.Wpf` targets Windows desktop (`net8.0-windows`) and local SQL Server, it cannot run directly inside a browser tab; architectural diagrams and source-verified module breakdowns are provided for web inspection.",
      "`CoffeeShop.EFModel` retains a `.NET Framework 4.8` EDMX diagram for visual schema inspection alongside `.NET 8` `Microsoft.Data.SqlClient` execution.",
    ],
    limitationsLessonsVi: [
      "Do `CoffeeShop.Wpf` là ứng dụng Windows Desktop (`net8.0-windows`) kết nối SQL Server cục bộ nên không thể chạy trực tiếp trên trình duyệt web; hồ sơ cung cấp đầy đủ sơ đồ kiến trúc và phân tích mã nguồn thực tế.",
      "Project `CoffeeShop.EFModel` được giữ ở `.NET Framework 4.8` để phục vụ thiết kế sơ đồ thực thể EDMX trực quan, trong khi tầng thực thi chính chạy trên `.NET 8.0`.",
    ],
  },
  {
    id: "proj-03",
    slug: "gibor-coffee-web",
    legacySlugs: ["gibor-coffee"],
    priorityOrder: 3,
    featured: true,
    category: "Frontend Web & E-Commerce",
    categoryVi: "Frontend Web & Thương mại Điện tử",
    classificationEn: "Academic Collaborative Project (4-Member Team, Semester 4)",
    classificationVi: "Đồ án Học thuật Nhóm (4 Thành viên — Học kỳ 4)",
    year: "2026",
    timelineEn: "2025 – 2026 (Semester 4, Academic Year 2–3)",
    timelineVi: "2025 – 2026 (Học kỳ 4, Năm học 2025–2026)",
    teamInfoEn: "4 Members (Team 4): Trần Gia Bảo (Frontend Lead), Trần Dương Gia Bảo, Nguyễn Thế Anh, Nguyễn Hoàng Bảo",
    teamInfoVi: "4 Thành viên (Nhóm 4): Trần Gia Bảo (Frontend Lead), Trần Dương Gia Bảo, Nguyễn Thế Anh, Nguyễn Hoàng Bảo",
    roleEn: "Frontend Lead (Home, About, Contact, 15-Store Branches UI & Shared main.js Logic)",
    roleVi: "Frontend Lead (Trang chủ, Giới thiệu, Liên hệ, Hệ thống 15 Chi nhánh & Logic dùng chung main.js)",
    titleEn: "GIBOR Coffee Shop E-Commerce Website",
    titleVi: "Website Thương mại Điện tử & Đặt hàng GIBOR Coffee",
    subtitleEn: "Responsive multi-page coffee storefront featuring 15 regional branches, Firebase Authentication, cart/loyalty workflows, and Vercel serverless PayOS checkout.",
    subtitleVi: "Website thương mại điện tử đa trang tích hợp tra cứu 15 chi nhánh, xác thực Firebase Auth, giỏ hàng tích điểm và thanh toán Serverless PayOS trên Vercel.",
    shortDescEn:
      "Multi-page e-commerce web application built by a 4-member team. As Frontend Lead, I architected and implemented the Home, About, Contact, and 15-location Branches experience (`index.html`, `about.html`, `contact.html`, `branches.html`), the core design token stylesheet (`style.css`), and shared navigation/theme logic (`main.js`).",
    shortDescVi:
      "Ứng dụng web thương mại điện tử đa trang do nhóm 4 thành viên phát triển. Với vai trò Frontend Lead, tôi trực tiếp thiết kế và lập trình các trang Trang chủ, Giới thiệu, Liên hệ, Hệ thống 15 Chi nhánh (`index.html`, `about.html`, `contact.html`, `branches.html`), hệ thống CSS dùng chung (`style.css`) và logic điều hướng/giao diện (`main.js`).",
    technologies: [
      "HTML5",
      "CSS3",
      "Bootstrap 5.3.3",
      "JavaScript (ES6+)",
      "Firebase Auth",
      "Vercel Serverless API",
      "PayOS Checkout",
    ],
    repoUrl: "https://github.com/gibor06/GIBOR06_Coffee_Shop_Management_Web",
    demoUrl: "https://giborcoffee.vercel.app/",
    demoNoteEn: "Live deployment hosted on Vercel with active regional branch finder, product catalog, and responsive dark/light theme.",
    demoNoteVi: "Bản triển khai thực tế trên Vercel với đầy đủ tính năng tra cứu chi nhánh theo khu vực, thực đơn và chuyển đổi giao diện Sáng/Tối.",
    coverImage: "/assets/img/projects/gibor-coffee-web-hero.png",
    secondaryImage: "/assets/img/projects/gibor-coffee-web-branches.png",
    architectureDiagram: "/assets/img/projects/gibor-web-architecture.svg",
    gallery: [
      {
        src: "/assets/img/projects/gibor-coffee-web-hero.png",
        captionEn: "Live Home Page (`index.html` & `home.css`) implemented by Trần Gia Bảo as Frontend Lead — giborcoffee.vercel.app",
        captionVi: "Giao diện Trang chủ thực tế (`index.html` & `home.css`) do Trần Gia Bảo (Frontend Lead) xây dựng — giborcoffee.vercel.app",
        kind: "screenshot",
      },
      {
        src: "/assets/img/projects/gibor-coffee-web-branches.png",
        captionEn: "Interactive 15-Branch Finder (`branches.html`) across HCMC, Hanoi, and Da Nang — Authentic Screenshot",
        captionVi: "Trang Hệ thống 15 Chi nhánh (`branches.html`) lọc theo TP.HCM, Hà Nội, Đà Nẵng — Ảnh chụp màn hình thực tế",
        kind: "screenshot",
      },
      {
        src: "/assets/img/projects/gibor-coffee-web-home.png",
        captionEn: "Brand story & curated product showcase section on the live GIBOR Coffee homepage",
        captionVi: "Phân khu câu chuyện thương hiệu và thực đơn nổi bật trên Trang chủ thực tế",
        kind: "screenshot",
      },
      {
        src: "/assets/img/projects/gibor-web-architecture.svg",
        captionEn: "Module Ownership & Frontend/Cloud Architecture Diagram (Illustrative — Verified from README)",
        captionVi: "Sơ đồ Kiến trúc & Phân công Module Nhóm 4 (Minh họa đối chiếu từ README chính thức)",
        kind: "diagram",
      },
    ],
    verifiedHighlights: [
      { labelEn: "Verified Role", labelVi: "Vai trò Xác thực", value: "Frontend Lead" },
      { labelEn: "Owned Pages", labelVi: "Trang Phụ trách", value: "Home, Branches, About, Contact" },
      { labelEn: "Store Network UI", labelVi: "Hệ thống Chi nhánh", value: "15 Stores (3 Regions)" },
      { labelEn: "Live Status", labelVi: "Trạng thái Demo", value: "Vercel HTTPS 200 OK" },
    ],
    problemEn:
      "A modern coffee brand storefront needs more than a static menu list: customers need to browse seasonal promotions, locate nearby branches across major cities (Ho Chi Minh City, Hanoi, Da Nang), customize drink sizes/toppings, authenticate via social accounts, and complete online orders with QR payment.",
    problemVi:
      "Một website thương mại điện tử ngành F&B hiện đại không chỉ dừng ở danh sách thực đơn tĩnh mà cần trải nghiệm đồng bộ: khám phá ưu đãi theo mùa, tìm kiếm chi nhánh gần nhất tại TP.HCM, Hà Nội, Đà Nẵng, tùy chọn kích cỡ/topping, đăng nhập tài khoản mạng xã hội và thanh toán QR trực tuyến.",
    functionalRequirementsEn: [
      "Responsive landing experience (`index.html`) with promotional carousels, brand storytelling, featured drinks showcase, and persistent navigation.",
      "Interactive 15-branch directory (`branches.html`) with regional filtering (Ho Chi Minh City, Hanoi, Da Nang), real-time keyword search, and detailed branch cards.",
      "Brand heritage (`about.html`) and customer inquiry form (`contact.html`) with client-side validation and feedback states.",
      "Shared frontend runtime (`main.js`, `style.css`) handling sticky navigation, dark/light theme persistence, and cross-page cart badge synchronization.",
      "Integration with teammate modules: 65+ item catalog & cart/loyalty system (`data.js`, `cart.js`, `payment.js`), Firebase Auth (`loginregister.js`), and Vercel Serverless PayOS API (`/api/create-payos-payment.js`).",
    ],
    functionalRequirementsVi: [
      "Trang chủ đáp ứng (`index.html`) tích hợp băng chuyền khuyến mãi, câu chuyện thương hiệu, danh mục món nổi bật và thanh điều hướng cố định.",
      "Hệ thống tra cứu 15 chi nhánh (`branches.html`) hỗ trợ lọc theo khu vực (TP. Hồ Chí Minh, Hà Nội, Đà Nẵng), tìm kiếm theo tên/địa chỉ và xem chi tiết từng quán.",
      "Trang Giới thiệu (`about.html`) và Liên hệ (`contact.html`) có kiểm tra hợp lệ dữ liệu biểu mẫu trực quan.",
      "Tầng logic dùng chung (`main.js`, `style.css`) điều khiển thanh điều hướng, chế độ Sáng/Tối (Dark Mode) và đồng bộ số lượng giỏ hàng giữa các trang.",
      "Kết nối mượt mà với các module của đồng đội: Thực đơn hơn 65 món & Giỏ hàng/Tích điểm (`data.js`, `cart.js`, `payment.js`), Firebase Auth (`loginregister.js`) và Vercel Serverless PayOS API.",
    ],
    architectureSummaryEn:
      "The application uses a modular multi-page architecture deployed on Vercel (`docs/` static root + `api/` Node.js serverless functions). Bootstrap 5.3.3 provides the responsive grid foundation, layered with page-specific stylesheets (`home.css`, `branches.css`, `about.css`, `contact.css`, `menu.css`, `cart.css`) and ES6 JavaScript modules communicating via shared `localStorage` state contracts and Firebase Authentication.",
    architectureSummaryVi:
      "Ứng dụng được tổ chức theo kiến trúc đa trang (Multi-Page Application) triển khai trên Vercel (thư mục tĩnh `docs/` kết hợp Serverless Functions tại `api/`). Bootstrap 5.3.3 cung cấp lưới bố cục đáp ứng, kết hợp hệ thống CSS chuyên biệt cho từng trang (`home.css`, `branches.css`, `about.css`, `contact.css`) và các module JavaScript ES6 giao tiếp qua `localStorage` cùng Firebase Authentication.",
    architectureLayers: [
      {
        layerEn: "01 / Frontend Lead Pages & Core Runtime (Trần Gia Bảo)",
        layerVi: "01 / Các Trang & Logic Cốt lõi do Frontend Lead Phụ trách",
        tech: "index.html • branches.html • about.html • contact.html • main.js • style.css",
        detailsEn:
          "Architected the global header/footer layout, dark-mode theme toggle, responsive typography, homepage hero/promotions, brand story, contact workflow, and the 15-branch interactive directory.",
        detailsVi:
          "Thiết kế khung bố cục Header/Footer toàn cục, bộ chuyển đổi giao diện Sáng/Tối, trang chủ, câu chuyện thương hiệu, biểu mẫu liên hệ và bộ lọc tương tác 15 chi nhánh.",
      },
      {
        layerEn: "02 / Collaborative Client Modules (Team 4 Members)",
        layerVi: "02 / Các Module Phía Client của Thành viên Cùng Nhóm",
        tech: "data.js • cart.js • payment.js • menu.js • loginregister.js",
        detailsEn:
          "Integrated cleanly with Core Developer modules (Trần Dương Gia Bảo: Data layer, Cart, Payment, Loyalty), Frontend Menu/Popup modules (Nguyễn Hoàng Bảo), and Firebase Auth (Nguyễn Thế Anh).",
        detailsVi:
          "Tích hợp chặt chẽ với module Dữ liệu/Giỏ hàng/Thanh toán/Tích điểm (Trần Dương Gia Bảo), Thực đơn/Popup quảng cáo (Nguyễn Hoàng Bảo) và Xác thực Firebase (Nguyễn Thế Anh).",
      },
      {
        layerEn: "03 / Vercel Serverless PayOS API & Firebase Cloud",
        layerVi: "03 / Tầng Serverless API (Vercel) & Đám mây Firebase",
        tech: "api/create-payos-payment.js • api/get-payos-payment.js • Firebase Auth",
        detailsEn:
          "Serverless Node.js endpoints sign PayOS checkout requests using environment secrets on Vercel without exposing API keys in client-side JavaScript.",
        detailsVi:
          "Các hàm Serverless trên Vercel thực hiện ký số yêu cầu thanh toán PayOS bằng biến môi trường bảo mật, không để lộ khóa bí mật dưới trình duyệt.",
      },
    ],
    candidateContributionsEn: [
      "Served as Frontend Lead for the 4-member project team, establishing shared layout conventions (`style.css`), navigation patterns, and dark/light theme support (`main.js`).",
      "Designed and implemented `index.html` and `home.css`, including the hero section, promotional banner carousel, brand values grid, and curated drink highlights.",
      "Engineered the 15-branch locator experience (`branches.html`, `branches.css`) supporting filtering across Ho Chi Minh City (5 branches), Hanoi (5 branches), and Da Nang (5 branches) with dynamic master-detail selection.",
      "Built `about.html` (`about.css`) and `contact.html` (`contact.css`) with responsive layouts and client-side form validation.",
    ],
    candidateContributionsVi: [
      "Đảm nhiệm vai trò Frontend Lead của nhóm 4 thành viên, xây dựng quy chuẩn bố cục chung (`style.css`), thanh điều hướng và chế độ Dark/Light Mode (`main.js`).",
      "Trực tiếp thiết kế và lập trình Trang chủ (`index.html`, `home.css`) gồm khu vực Hero, băng chuyền ưu đãi, giá trị cốt lõi và sản phẩm nổi bật.",
      "Phát triển trang Hệ thống 15 Chi nhánh (`branches.html`, `branches.css`) tại TP.HCM, Hà Nội và Đà Nẵng với bộ lọc khu vực, tìm kiếm tức thời và khung xem chi tiết chi nhánh.",
      "Xây dựng trang Giới thiệu (`about.html`, `about.css`) và Liên hệ (`contact.html`, `contact.css`) đảm bảo tương thích đa thiết bị.",
    ],
    teamAttributionNoteEn:
      "Verified 4-member team attribution from repository README: Trần Gia Bảo (Frontend Lead: Home, About, Contact, Branches, main.js), Trần Dương Gia Bảo (Core Developer: Data Layer, Cart, Payment, Account, Mobile, Points), Nguyễn Thế Anh (Firebase Specialist: Auth, Login/Register, Google/GitHub OAuth), Nguyễn Hoàng Bảo (Frontend Developer: Menu, Popup System, Ads, Product UI).",
    teamAttributionNoteVi:
      "Phân công thực tế 4 thành viên theo đúng README dự án: Trần Gia Bảo (Frontend Lead: Trang chủ, Giới thiệu, Liên hệ, Chi nhánh, main.js), Trần Dương Gia Bảo (Core Developer: Data Layer, Giỏ hàng, Thanh toán, Tài khoản, Mobile, Tích điểm), Nguyễn Thế Anh (Firebase Specialist: Đăng nhập/Đăng ký, Google/GitHub OAuth), Nguyễn Hoàng Bảo (Frontend Developer: Thực đơn, Popup, Quảng cáo, Giao diện sản phẩm).",
    implementationDetails: [
      {
        moduleName: "Interactive 15-Branch Regional Locator",
        sourceFiles: "docs/branches.html, docs/css/branches.css, docs/js/main.js",
        descriptionEn:
          "Renders 15 coffee shop locations across Ho Chi Minh City, Hanoi, and Da Nang with synchronized region dropdown filtering, address/street keyword search, and an interactive master-detail branch preview panel.",
        descriptionVi:
          "Hiển thị và lọc 15 chi nhánh tại TP.HCM, Hà Nội và Đà Nẵng theo khu vực kết hợp tìm kiếm từ khóa địa chỉ và khung hiển thị thông tin chi tiết từng điểm bán.",
      },
      {
        moduleName: "Shared Navigation, Theme Controller & State Sync",
        sourceFiles: "docs/js/main.js, docs/css/style.css",
        descriptionEn:
          "Coordinates sticky header transitions, mobile navigation toggling, persistent Dark Mode CSS custom properties, and real-time cart item badge updates across all HTML pages.",
        descriptionVi:
          "Điều phối thanh điều hướng cố định, menu di động, lưu trữ trạng thái giao diện Sáng/Tối qua biến CSS và cập nhật huy hiệu số lượng giỏ hàng xuyên suốt các trang.",
      },
    ],
    challenges: [
      {
        challengeEn:
          "Maintaining visual consistency, shared header/footer state, and dark mode styling across 8 separate HTML pages worked on concurrently by 4 team members without a bundler.",
        challengeVi:
          "Duy trì sự đồng nhất về giao diện, trạng thái Header/Footer, giỏ hàng và chế độ Dark Mode trên nhiều tệp HTML độc lập khi 4 thành viên cùng code song song mà không dùng Framework SPA.",
        solutionEn:
          "Centralized shared CSS variables and component rules in `style.css` while isolating page-specific styles into dedicated files (`home.css`, `branches.css`, `menu.css`, `cart.css`) and exposing shared lifecycle hooks in `main.js`.",
        solutionVi:
          "Tập trung toàn bộ biến màu sắc/typography vào `style.css`, tách riêng CSS từng trang (`home.css`, `branches.css`, `menu.css`, `cart.css`) và chuẩn hóa hàm khởi tạo chung trong `main.js`.",
        tradeoffEn:
          "Multi-page HTML requires duplicating `<header>` markup across files, which taught our team why component frameworks (like Astro or ASP.NET Razor layouts) are valuable.",
        tradeoffVi:
          "Kiến trúc HTML thuần đòi hỏi đồng bộ thủ công khung `<header>` giữa các file, giúp cả nhóm rút ra bài học thực tế về lợi ích của Layout Component trong ASP.NET Razor và Astro.",
      },
    ],
    testingValidationEn: [
      "Verified live production deployment at `https://giborcoffee.vercel.app/` across desktop (`1440px`) and mobile (`390px`) viewports.",
      "Tested regional branch filtering, dark mode persistence, navigation links, and modal dismissal on live pages.",
    ],
    testingValidationVi: [
      "Kiểm tra bản triển khai thực tế tại `https://giborcoffee.vercel.app/` trên cả màn hình máy tính (`1440px`) và điện thoại (`390px`).",
      "Kiểm thử bộ lọc chi nhánh 3 miền, chuyển đổi giao diện Sáng/Tối và luồng điều hướng liên trang.",
    ],
    limitationsLessonsEn: [
      "Product catalog data (`data.js`) and cart history are stored client-side in `localStorage` rather than a relational database, which motivated building our subsequent SQL Server + ASP.NET Core MVC and WPF systems.",
    ],
    limitationsLessonsVi: [
      "Dữ liệu danh mục (`data.js`) và giỏ hàng được lưu ở `localStorage` phía trình duyệt thay vì CSDL quan hệ; đây chính là động lực để nhóm phát triển tiếp các hệ thống SQL Server + ASP.NET Core MVC và WPF sau đó.",
    ],
  },
  {
    id: "proj-04",
    slug: "quan-ly-bai-xe",
    priorityOrder: 4,
    featured: false,
    category: "Systems & Data Structures",
    categoryVi: "Lập trình Hệ thống & Cấu trúc Dữ liệu",
    classificationEn: "Academic Course Project (Data Structures & Algorithms)",
    classificationVi: "Đồ án Môn học (Cấu trúc Dữ liệu & Giải thuật)",
    year: "2025",
    timelineEn: "2025 (Academic Year 2)",
    timelineVi: "2025 (Năm học thứ 2)",
    teamInfoEn: "Academic Project — Owned & maintained by Trần Gia Bảo",
    teamInfoVi: "Đồ án học thuật — Phát triển & lưu trữ bởi Trần Gia Bảo",
    roleEn: "Core C/C++ Developer (Custom Data Structures, Memory Management & File I/O)",
    roleVi: "Lập trình viên C/C++ (Cấu trúc dữ liệu tự cài đặt, Quản lý bộ nhớ & File I/O)",
    titleEn: "QuanLyBaiXe — C/C++ Parking Lot Management Engine",
    titleVi: "QuanLyBaiXe — Hệ thống Quản lý Bãi đỗ xe bằng Cấu trúc Dữ liệu C/C++",
    subtitleEn: "Console-based vehicle check-in/out, lane simulation, and fee calculation built from scratch with Doubly Linked Lists and LIFO Stacks.",
    subtitleVi: "Ứng dụng quản lý xe ra/vào, mô phỏng làn đỗ và tính phí xây dựng từ gốc bằng Danh sách Liên kết Đôi và Ngăn xếp LIFO trong C/C++.",
    shortDescEn:
      "Academic systems programming project implementing custom Doubly Linked Lists and LIFO Stacks in C/C++ without STL containers to manage vehicle check-in/out, narrow-lane maneuver simulation, license plate search, and file persistence.",
    shortDescVi:
      "Đồ án lập trình hệ thống cài đặt thủ công Danh sách liên kết đôi (Doubly Linked List) và Ngăn xếp (LIFO Stack) bằng C/C++ để quản lý xe ra/vào, mô phỏng di chuyển làn hẹp, tra cứu biển số và lưu trữ tệp.",
    technologies: [
      "C / C++",
      "Doubly Linked List",
      "LIFO Stack",
      "Dynamic Pointers",
      "File I/O Persistence",
      "Windows Console UI",
    ],
    repoUrl: "https://github.com/gibor06/QuanLyBaiXe",
    coverImage: "/assets/img/quanlybaixe-og.png",
    secondaryImage: "/assets/img/quanlybaixe-live.gif",
    gallery: [
      {
        src: "/assets/img/quanlybaixe-live.gif",
        captionEn: "Live C/C++ console runtime recording showing vehicle check-in, lane status, and fee calculation (Authentic GIF)",
        captionVi: "Ảnh động ghi lại quá trình chạy thực tế trên Console C/C++: nhận xe, kiểm tra bãi và tính phí (GIF thực tế)",
        kind: "gif",
      },
      {
        src: "/assets/img/quanlybaixe-og.png",
        captionEn: "Repository preview and system overview for QuanLyBaiXe",
        captionVi: "Tổng quan kho mã nguồn dự án QuanLyBaiXe",
        kind: "screenshot",
      },
    ],
    verifiedHighlights: [
      { labelEn: "Core Structures", labelVi: "Cấu trúc Cốt lõi", value: "Doubly Linked List + Stack" },
      { labelEn: "Deletion Complexity", labelVi: "Độ phức tạp Xóa node", value: "O(1) Pointer Re-link" },
      { labelEn: "Persistence", labelVi: "Lưu trữ Dữ liệu", value: "Binary/Text File I/O" },
      { labelEn: "Memory Safety", labelVi: "Quản lý Bộ nhớ", value: "Explicit free / delete" },
    ],
    problemEn:
      "Standard fixed-size arrays require expensive $O(N)$ element shifting when vehicles enter and leave out of order, while physical narrow parking lanes require temporary LIFO buffer maneuvering when an inner vehicle exits.",
    problemVi:
      "Mảng tĩnh kích thước cố định đòi hỏi phép dịch chuyển phần tử tốn chi phí $O(N)$ khi xe ra/vào không theo thứ tự, trong khi các làn đỗ xe hẹp thực tế cần mô phỏng cơ chế lùi xe tạm thời theo nguyên tắc vào sau ra trước (LIFO).",
    functionalRequirementsEn: [
      "Vehicle check-in and check-out tracking license plate, vehicle type (motorbike/car), entry timestamp, and ticket ID.",
      "Custom Doubly Linked List implementation supporting $O(1)$ node removal once located without contiguous array shifting.",
      "LIFO Stack lane simulation handling temporary vehicle displacement when retrieving an inner parked vehicle.",
      "Time-based and overnight parking fee calculation with revenue summary reporting.",
      "Persistent state serialization and deserialization via C/C++ File I/O.",
    ],
    functionalRequirementsVi: [
      "Quản lý nhận xe và trả xe theo biển số, phân loại phương tiện (xe máy/ô tô), thời gian vào bãi và mã vé.",
      "Tự cài đặt Danh sách liên kết đôi (Doubly Linked List) hỗ trợ tách nút với độ phức tạp $O(1)$ không cần dồn mảng.",
      "Mô phỏng làn đỗ hẹp bằng cấu trúc Ngăn xếp (LIFO Stack) khi cần di chuyển tạm các xe chắn phía ngoài.",
      "Tính phí gửi xe theo khung giờ / qua đêm và thống kê tổng doanh thu bãi xe.",
      "Đọc và ghi toàn bộ trạng thái bãi xe xuống tệp tin trên ổ cứng (File I/O).",
    ],
    architectureSummaryEn:
      "Built natively in C/C++ using manual pointer manipulation (`prev`/`next` node pointers), modular header/source separation, and deterministic heap deallocation on exit.",
    architectureSummaryVi:
      "Xây dựng thuần trên C/C++ sử dụng con trỏ động (`prev`/`next`), phân tách rõ tầng cấu trúc dữ liệu, xử lý nghiệp vụ tính phí và giải phóng vùng nhớ Heap an toàn.",
    architectureLayers: [
      {
        layerEn: "01 / Custom Data Structure Layer",
        layerVi: "01 / Tầng Cấu trúc Dữ liệu Tự cài đặt",
        tech: "Doubly Linked List • LIFO Stack • Manual Heap Pointers",
        detailsEn: "Implements node allocation, insertion, traversal, and pointer re-linking without relying on high-level STL containers.",
        detailsVi: "Cài đặt thủ công cấp phát nút, chèn, duyệt và nối lại con trỏ hai chiều mà không phụ thuộc thư viện dựng sẵn.",
      },
      {
        layerEn: "02 / Fee Engine & File Persistence",
        layerVi: "02 / Tầng Nghiệp vụ Tính phí & Lưu trữ File",
        tech: "Time-Delta Billing • Structured File Read/Write",
        detailsEn: "Computes elapsed parking duration and serializes active vehicle records to disk between sessions.",
        detailsVi: "Tính toán thời lượng gửi xe thực tế và đồng bộ danh sách phương tiện đang gửi xuống đĩa cứng.",
      },
    ],
    candidateContributionsEn: [
      "Designed and implemented the doubly linked list and stack data structures, pointer manipulation logic, billing rules, and console menu interface.",
    ],
    candidateContributionsVi: [
      "Trực tiếp thiết kế và lập trình cấu trúc danh sách liên kết đôi, ngăn xếp, thuật toán tính phí và giao diện điều khiển Console.",
    ],
    teamAttributionNoteEn: "Academic Data Structures & Algorithms project maintained in the candidate's public GitHub repository.",
    teamAttributionNoteVi: "Đồ án môn Cấu trúc Dữ liệu & Giải thuật được lưu trữ công khai trên GitHub cá nhân.",
    implementationDetails: [
      {
        moduleName: "Doubly Linked List Node Removal & Stack Maneuver",
        sourceFiles: "QuanLyBaiXe source files (C/C++)",
        descriptionEn:
          "Re-links `node->prev->next` and `node->next->prev` pointers directly when a vehicle checks out, freeing heap memory immediately and preventing memory leaks.",
        descriptionVi:
          "Nối trực tiếp con trỏ `node->prev->next` và `node->next->prev` khi xe rời bãi, giải phóng vùng nhớ động tức thời để tránh rò rỉ bộ nhớ (memory leak).",
      },
    ],
    challenges: [
      {
        challengeEn: "Preventing dangling pointers and memory corruption when deleting head, tail, or single-element nodes in a doubly linked list.",
        challengeVi: "Tránh lỗi con trỏ treo (dangling pointer) và truy cập vùng nhớ không hợp lệ khi xóa phần tử đầu, cuối hoặc phần tử duy nhất trong danh sách liên kết đôi.",
        solutionEn: "Implemented explicit boundary guards for `head == tail`, `node == head`, and `node == tail` cases before calling `delete`/`free`.",
        solutionVi: "Xử lý chặt chẽ các điều kiện biên (`head == tail`, `node == head`, `node == tail`) trước khi hủy vùng nhớ của nút.",
        tradeoffEn: "Requires more verbose pointer check code than `std::list`, but demonstrates low-level memory discipline.",
        tradeoffVi: "Mã nguồn dài hơn so với dùng thư viện STL có sẵn nhưng giúp nắm vững bản chất quản lý bộ nhớ cấp thấp.",
      },
    ],
    testingValidationEn: [
      "Verified insertion, search, checkout, and file reload operations across empty, single-vehicle, and full-capacity boundary scenarios.",
    ],
    testingValidationVi: [
      "Kiểm thử các thao tác thêm xe, tìm kiếm, xuất bến và đọc lại tệp dữ liệu qua các trường hợp biên: bãi rỗng, bãi có 1 xe và bãi đầy.",
    ],
    limitationsLessonsEn: [
      "Linear license plate search is $O(N)$; adding a hash table index by license plate string would reduce lookup time to $O(1)$ average case.",
    ],
    limitationsLessonsVi: [
      "Tìm kiếm biển số trên danh sách liên kết có độ phức tạp $O(N)$; nếu bổ sung bảng băm (Hash Table) theo biển số sẽ đưa tốc độ tra cứu trung bình về $O(1)$.",
    ],
  },
  {
    id: "proj-05",
    slug: "web-tong-ket",
    legacySlugs: ["multi-aura"],
    priorityOrder: 5,
    featured: false,
    category: "Frontend Web & E-Commerce",
    categoryVi: "Frontend Web & Giao diện Tương tác",
    classificationEn: "Personal / Academic Retrospective Web Project",
    classificationVi: "Dự án Web Tổng kết Học thuật Cá nhân",
    year: "2025",
    timelineEn: "2025 (End of First Academic Year at HUIT)",
    timelineVi: "2025 (Tổng kết Năm học thứ nhất tại HUIT)",
    teamInfoEn: "Individual Project — Trần Gia Bảo",
    teamInfoVi: "Dự án Cá nhân — Trần Gia Bảo",
    roleEn: "Frontend Developer (UI Layout, Timeline Storytelling & GitHub Pages Deployment)",
    roleVi: "Frontend Developer (Thiết kế bố cục, Timeline tương tác & Triển khai GitHub Pages)",
    titleEn: "HUIT First-Year Academic Retrospective Web",
    titleVi: "Website Tổng kết Hành trình Học tập Năm nhất tại HUIT",
    subtitleEn: "Interactive timeline and media archive documenting first-year computer science coursework, research milestones, and academic activities.",
    subtitleVi: "Website lưu trữ trực quan hành trình học tập, nghiên cứu khoa học và hoạt động học thuật năm thứ nhất tại Khoa CNTT — HUIT.",
    shortDescEn:
      "Static web archive built with semantic HTML5, modern CSS Grid/Flexbox, and vanilla JavaScript to organize first-year academic milestones, certificates, and project artifacts into a fast, responsive timeline.",
    shortDescVi:
      "Trang web tĩnh xây dựng bằng HTML5 ngữ nghĩa, CSS Grid/Flexbox và JavaScript thuần nhằm hệ thống hóa các cột mốc học tập, chứng nhận nghiên cứu khoa học và dự án năm nhất theo trục thời gian trực quan.",
    technologies: ["HTML5", "CSS3 Grid & Flexbox", "Vanilla JavaScript", "GitHub Pages"],
    repoUrl: "https://github.com/gibor06/HUIT_WebTongKetNam1",
    demoUrl: "https://gibor06.github.io/HUIT_WebTongKetNam1/",
    demoNoteEn: "Live static deployment hosted on GitHub Pages.",
    demoNoteVi: "Bản triển khai tĩnh đang hoạt động trên GitHub Pages.",
    coverImage: "/assets/img/webtongket-live.gif",
    gallery: [
      {
        src: "/assets/img/webtongket-live.gif",
        captionEn: "Live interactive walkthrough of HUIT_WebTongKetNam1 deployed on GitHub Pages (Authentic GIF)",
        captionVi: "Trải nghiệm thực tế trang web HUIT_WebTongKetNam1 trên GitHub Pages (GIF thực tế)",
        kind: "gif",
      },
    ],
    verifiedHighlights: [
      { labelEn: "Architecture", labelVi: "Kiến trúc", value: "Zero-Dependency HTML/CSS/JS" },
      { labelEn: "Deployment", labelVi: "Triển khai", value: "GitHub Pages Live" },
      { labelEn: "Layout", labelVi: "Bố cục", value: "Responsive CSS Grid" },
      { labelEn: "Role", labelVi: "Vai trò", value: "Solo Developer" },
    ],
    problemEn:
      "First-year coursework, competition certificates, and research milestones were scattered across folders and social posts, making it difficult to review progress chronologically.",
    problemVi:
      "Các kết quả môn học, giấy khen cuộc thi học thuật và hình ảnh nghiên cứu khoa học năm nhất nằm rải rác, thiếu một không gian trực tuyến tập trung để nhìn lại theo trình tự thời gian.",
    functionalRequirementsEn: [
      "Chronological timeline presenting semester milestones, NCKH awards, and coursework outputs.",
      "Responsive image gallery and certificate viewer compatible with mobile and desktop browsers.",
      "Lightweight static deployment on GitHub Pages without external framework overhead.",
    ],
    functionalRequirementsVi: [
      "Trục thời gian trực quan trình bày các cột mốc học kỳ, giải thưởng NCKH và sản phẩm môn học.",
      "Thư viện hình ảnh và giấy chứng nhận tương thích tốt trên cả điện thoại và máy tính.",
      "Triển khai tĩnh gọn nhẹ trên GitHub Pages không phụ thuộc thư viện ngoài.",
    ],
    architectureSummaryEn:
      "Engineered with semantic HTML5 sections, responsive CSS custom properties, and intersection-based reveal scripts hosted directly on GitHub Pages.",
    architectureSummaryVi:
      "Xây dựng bằng HTML5 ngữ nghĩa, hệ thống biến CSS đáp ứng đa màn hình và kịch bản JavaScript thuần triển khai trực tiếp trên GitHub Pages.",
    architectureLayers: [
      {
        layerEn: "01 / Semantic Markup & Responsive Grid",
        layerVi: "01 / Cấu trúc HTML5 Ngữ nghĩa & CSS Grid",
        tech: "HTML5 • CSS3 Custom Properties • Flexbox/Grid",
        detailsEn: "Organizes milestones into structured cards and timeline nodes with fluid mobile breakpoints.",
        detailsVi: "Tổ chức các cột mốc thành thẻ thông tin và nút thời gian tự động co giãn theo kích thước màn hình.",
      },
    ],
    candidateContributionsEn: [
      "Independently designed, coded, and deployed the entire retrospective website on GitHub Pages.",
    ],
    candidateContributionsVi: [
      "Độc lập thiết kế giao diện, lập trình HTML/CSS/JS và triển khai trang web lên GitHub Pages.",
    ],
    teamAttributionNoteEn: "Individual project created by Trần Gia Bảo.",
    teamAttributionNoteVi: "Dự án cá nhân do Trần Gia Bảo tự thực hiện.",
    implementationDetails: [
      {
        moduleName: "Chronological Milestone Archive",
        sourceFiles: "index.html, style.css, script.js",
        descriptionEn: "Structures first-year HUIT achievements and coursework into an accessible single-page narrative.",
        descriptionVi: "Hệ thống hóa thành tích và hoạt động học tập năm nhất tại HUIT thành câu chuyện trực quan trên một trang duy nhất.",
      },
    ],
    challenges: [
      {
        challengeEn: "Presenting numerous high-resolution certificate photos without causing layout shift on mobile screens.",
        challengeVi: "Hiển thị nhiều ảnh chụp giấy khen độ phân giải cao mà không gây vỡ khung hoặc nhảy bố cục trên màn hình di động.",
        solutionEn: "Applied explicit aspect-ratio containers and lazy loading on media elements.",
        solutionVi: "Sử dụng khung tỷ lệ cố định (`aspect-ratio`) kết hợp thuộc tính tải trễ (`loading=\"lazy\"`) cho toàn bộ hình ảnh.",
        tradeoffEn: "Static HTML updates require manual editing, which led to adopting Astro Content Collections in this portfolio.",
        tradeoffVi: "Việc thêm dữ liệu mới trên HTML tĩnh phải chỉnh sửa thủ công, tạo tiền đề để tôi chuyển sang kiến trúc Astro hướng dữ liệu ở Portfolio hiện tại.",
      },
    ],
    testingValidationEn: [
      "Verified live availability at `https://gibor06.github.io/HUIT_WebTongKetNam1/` (`HTTP 200 OK`).",
    ],
    testingValidationVi: [
      "Xác nhận trang web hoạt động ổn định tại `https://gibor06.github.io/HUIT_WebTongKetNam1/` (`HTTP 200 OK`).",
    ],
    limitationsLessonsEn: [
      "Served as an early foundational web project before advancing to full-stack ASP.NET Core MVC, Web API, and Astro TypeScript architectures.",
    ],
    limitationsLessonsVi: [
      "Là dự án web nền tảng năm nhất trước khi phát triển lên các hệ thống Full-Stack ASP.NET Core MVC, Web API và Astro TypeScript.",
    ],
  },
];

export function getFeaturedProjects(): EngineeringProject[] {
  return engineeringProjects
    .filter((p) => p.featured)
    .sort((a, b) => a.priorityOrder - b.priorityOrder);
}

export function getSecondaryProjects(): EngineeringProject[] {
  return engineeringProjects
    .filter((p) => !p.featured)
    .sort((a, b) => a.priorityOrder - b.priorityOrder);
}

export function getAllProjectsSorted(): EngineeringProject[] {
  return [...engineeringProjects].sort((a, b) => a.priorityOrder - b.priorityOrder);
}

export function getProjectBySlug(slug: string): EngineeringProject | undefined {
  return engineeringProjects.find(
    (p) => p.slug === slug || (p.legacySlugs && p.legacySlugs.includes(slug))
  );
}
