# Content Verification Report — GIBOR06 Portfolio (Interview Edition 2026)

**Verification Date:** 2026-10-14  
**Scope:** All personal details, academic status, project repositories, tech stacks, team vs. individual contributions, research presentations, awards, certificates, and quantitative claims.

---

## 1. Candidate Identity & Academic Status Verification

| Claim / Field | Previous Portfolio Value | Verified 2026 Value | Classification | Source Evidence |
| :--- | :--- | :--- | :--- | :--- |
| **Full Name** | Trần Gia Bảo | Trần Gia Bảo (`gibor06`) | **VERIFIED** | Official HUIT certificates, FAIR XIX 2026 certificates, GitHub profile |
| **University** | Ho Chi Minh City University of Industry and Trade (HUIT) | Ho Chi Minh City University of Industry and Trade (HUIT) | **VERIFIED** | Official HUIT Faculty of IT certificates |
| **Academic Status** | Second-year IT student | **Third-year Information Technology student** (Class `15DHTH02`, Cohort 2024–2028) | **VERIFIED** | Master Prompt Section 1.1 & 3.2; 2025–2026 & Oct 2026 academic progression |
| **Target Role** | Applied AI & Software Engineering | **Full-Stack Developer Intern** | **VERIFIED** | Master Prompt Section 1.1 & GitHub profile repositories |
| **GPA & Credits** | `8.78 / 10` (`54` credits) | **Omitted from public UI** (Recorded as stale Year-1/early Year-2 snapshot) | **UNVERIFIED (CURRENT)** | Previous value depended on a private tokenized portal URL from an earlier semester; omitted per Section 7.3 & 10.2 |
| **HUIT Portal Link** | `https://sinhvien.huit.edu.vn/...?k=KxOpNf...` | **Removed completely** | **SECURITY FIX** | Contained private student lookup token (`?k=...`); removed per Section 10.4 & 12.6 |

---

## 2. Featured Engineering Projects Verification

### 2.1 Featured Project A: Coffee Chain Management System (`coffee-chain-management`)
- **Repository URL:** `https://github.com/gibor06/GIBOR-COFFEE-CHAIN-MANAGEMENT` (**VERIFIED** — public repository, 158 files inspected).
- **Live Demo URL:** `http://quanlycaphegibor.runasp.net/` (**VERIFIED** — returns `HTTP 200 OK`, renders `"Đăng nhập - Quản Lý Chuỗi Cà Phê | Gibor Coffee"`, footer credits `team BBBAC`; note: `http://` is required because port 443 resets connection on RunASP).
- **Target Framework Reconciliation:**
  - *Discrepancy Found:* Repository `README.md` mentions `.NET 6.0`, whereas `QuanLyChuoiCaPhe.Web.csproj` explicitly declares `<TargetFramework>net8.0</TargetFramework>` and references `Microsoft.EntityFrameworkCore.SqlServer` `8.0.0`, `Microsoft.EntityFrameworkCore.Tools` `8.0.0`, and `Microsoft.EntityFrameworkCore.Design` `8.0.0`.
  - *Resolution:* Documented accurately as **ASP.NET Core 8.0 MVC (`net8.0`)** with a technical note explaining that the project file targets `.NET 8.0`.
- **Verified Architecture & Code Scope:**
  - **17 MVC Controllers:** `AccountController`, `BangLuongController`, `BaoCaoController`, `BaseController`, `CaLamViecController`, `ChamCongController`, `ChiNhanhController`, `DashboardController`, `DonHangController`, `KhachHangController`, `KhoController`, `LichPhanCongController`, `NgayDacBietController`, `NhanVienController`, `PhatDiMuonController`, `SanPhamController`, `TaiKhoanController`.
  - **9 Business Logic Services:** `AuthService`, `BangLuongService`, `BaoCaoService`, `CodeGenerator`, `DashboardService`, `DonHangService`, `FormatHelper`, `KhoService`, `PasswordService`.
  - **Custom Role Authorization:** `Filters/RoleAuthorizeAttribute.cs` (`IAuthorizationFilter`) validating session state (`MaTK`, `VaiTro`) across 5 operational roles (`Admin`, `Quản lý`, `Nhân viên`, `Kho`, `Kế toán`), paired with Cookie Authentication (`GiborCoffeeAuth`).
  - **Database Schema:** SQL Server database (`QuanLyChuoiCaPhe`) mapped via EF Core `QuanLyChuoiCaPheContext.cs` with **28 entity models** and **3 SQL views** (`VwBangLuongTongHop`, `VwCanhBaoTonKho`, `VwMenuChiNhanh`), backed by `GIBOR_COFFEE_COMPLETE.sql` and `DB_DA_QuanLyQuanCF_Professional.sql`.
- **Team & Attribution:** Collaborative academic project (`team BBBAC`). Presented honestly as a collaborative academic system where Trần Gia Bảo contributed to the full-stack ASP.NET Core MVC architecture, service-layer business workflows (order processing with automatic recipe-based inventory deduction, payroll calculation, role-based access control), and SQL Server database integration.
- **Security Note:** Demo credentials found in the repository's `Tài khoản.txt` are **not** published on the portfolio per Section 8.2.

### 2.2 Featured Project B: Coffee Shop Management Desktop + Payment API (`coffee-shop-desktop-pos`)
- **Repository URL:** `https://github.com/gibor06/GIBOR06-COFFEE-SHOP-MANAGENMENT-SOFTWARE` (**VERIFIED** — public repository, 354 files across 3 solution projects inspected).
- **Verified Multi-Project Solution (`CoffeeShop.Wpf.sln`):**
  1. **`CoffeeShop.Wpf` (`net8.0-windows`):** WPF XAML desktop POS & management client implementing custom MVVM (`RelayCommand`, `RelayCommandT`, 9 XAML `IValueConverter`s, custom input validation behaviors `NumericTextBoxBehavior` & `QuantityValidationBehavior`), `QuestPDF` (`2026.2.4`) receipt generation, and `QRCoder` (`1.6.0`).
  2. **`CoffeeShop.PaymentApi` (`net8.0`):** Companion ASP.NET Core 8.0 Web API (`PaymentsController.cs`, `PayOsPaymentGatewayService.cs`, `PaymentRepository.cs`) handling `POST /api/payments/qr/create`, PayOS payment gateway integration (`ClientId`, `ApiKey`, `ChecksumKey`), VietQR fallback generation, webhook callback verification, and status polling.
  3. **`CoffeeShop.EFModel` (`.NET Framework 4.8`):** Database-First EDMX data model mapping 21 SQL Server tables (`Ban`, `KhuVuc`, `HoaDonBan`, `ChiTietHoaDonBan`, `Mon`, `CongThucMon`, `NguyenLieu`, `HoaDonNhap`, `LichSuTonKho`, `CaLamViec`, `KhachHang`, `KhuyenMai`, `AuditLog`, etc.).
- **Team & Attribution:** Verified 3-member academic team from `README.md`: **Trần Gia Bảo**, **Trần Dương Gia Bảo**, **Nguyễn Thế Anh**. Individual vs. team responsibilities are clearly distinguished.

### 2.3 Featured Project C: GIBOR Coffee Shop E-Commerce Website (`gibor-coffee-web`)
- **Repository URL:** `https://github.com/gibor06/GIBOR06_Coffee_Shop_Management_Web` (**VERIFIED** — active collaborative repository on `master` branch; replaces legacy `GIBOR-COFFEE-SHOP` link).
- **Live Demo URL:** `https://giborcoffee.vercel.app/` (**VERIFIED** — `HTTP 200 OK`).
- **Verified Team Breakdown & Candidate Role (from repository `README.md`):**
  - **Trần Gia Bảo — Frontend Lead:** Owned **Home (`index.html`, `home.css`), About (`about.html`, `about.css`), Contact (`contact.html`, `contact.css`), Branches (`branches.html`, `branches.css` — 15 stores across HCMC, Hanoi, Da Nang with region filtering), and Main Frontend Logic (`main.js` — shared navigation, dark mode toggle, responsive layout orchestration)**.
  - **Trần Dương Gia Bảo — Core Developer:** Data Layer (`data.js`), Cart (`cart.js`), Payment (`payment.js`), Account, Mobile runtime, Loyalty Points System.
  - **Nguyễn Thế Anh — Firebase Specialist:** Firebase Authentication (`loginregister.js` — Email/Password, Google OAuth, GitHub OAuth).
  - **Nguyễn Hoàng Bảo — Frontend Developer:** Menu UI (`menu.html`, `menu.js`), Promotional Popup System, Product UI.
- **Claims Corrected:** Removed false claim *"Eliminated bloated CSS frameworks"* (the project uses Bootstrap 5.3.3 alongside modular custom CSS) and removed unverified metrics (`-38% load time`, `83% task completion`).

### 2.4 Secondary Engineering Projects
1. **QuanLyBaiXe — C/C++ Parking Lot Management System (`quan-ly-bai-xe`):**
   - **Repo:** `https://github.com/gibor06/QuanLyBaiXe` (**VERIFIED**).
   - **Tech Stack:** C/C++, Doubly Linked Lists, LIFO Stack simulation, binary/text File I/O, Windows Console UI.
   - **Claims Corrected:** Removed unverified metrics (`100% accuracy (500 runs)`, `~35% faster vs Array`, `<8MB RAM`) and replaced with accurate algorithmic complexity explanations.
2. **HUIT First-Year Retrospective Web (`web-tong-ket`):**
   - **Repo:** `https://github.com/gibor06/HUIT_WebTongKetNam1` (**VERIFIED**).
   - **Live Demo:** `https://gibor06.github.io/HUIT_WebTongKetNam1/` (**VERIFIED** — `HTTP 200 OK`).
   - **Claims Corrected:** Removed unverified metrics (`-42% discovery time`, `71% read-through`).

---

## 3. Research & Publications Verification

All research items are verified against official certificates in `public/assets/img/thanhTich_2025/` and `public/assets/img/thanhTich_2026/` and separated into four distinct domains:

| Domain | Title | Role & Authors | Verified Status / Award | Certificate Evidence |
| :--- | :--- | :--- | :--- | :--- |
| **1. Optimization & Metaheuristics** | *SFT: Fourier-Guided Starfish Optimization for 3D E-Commerce Packing* | **Lead Author** (Tran Gia Bao, Tran Duong Gia Bao, Bao Quang Le, Dinh Nguyen Trong Nghia, Toan Dinh Tran) | **Presented at FAIR XIX 2026** (National Scientific Conference on Fundamental and Applied IT Research, 08/10/2026) | `Fair2026 (2).jpg` / `fair-2026-sft-packing.jpg` |
| **1. Optimization & Metaheuristics** | *Genetic Starfish Optimization for Constrained Three-Dimensional Truck Loading* | **Co-Author** (Luu Hoan Kim, Tran Duong Gia Bao, Tran Bao Anh, Tran Gia Bao, Dinh Nguyen Trong Nghia, Nguyen Thi Huyen Trang) | **Presented at FAIR XIX 2026** (08/10/2026) | `Fair2026 (1).jpg` / `fair-2026-truck-loading.jpg` |
| **2. High-Utility Itemset Mining (HUIM)** | *Time Optimization in Dynamic Cross-High-Utility Itemset Mining over Transaction Databases with Positive and Negative Utilities* | **Co-Author** (Trần Dương Gia Bảo, Trần Gia Bảo; Advisors: ThS. Vũ Văn Vinh, HV. Phạm Tấn Thuận) | **University-Level Finalist & Faculty-Level Consolation Prize** — HUIT Student Scientific Research 2025–2026 (04/04/2026) | `nckh_CapKhoa_2026_1.png`, `nckh_CapKhoa_2026.jpg` |
| **2. High-Utility Itemset Mining (HUIM)** | *Research on EMHUN High-Utility Itemset Mining Algorithm and Application to an Electronics E-Commerce Website* | **Co-Author** (Nguyễn Huy Hoàng, Hà Trọng Thắng, Nguyễn Công Dũng, Trần Gia Bảo, Nguyễn Bình An; Advisor: ThS. Vũ Văn Vinh) | **Second Prize (Faculty-Level)** & **Consolation Prize (University-Level)** — HUIT Student Scientific Research 2024–2025 | `nckh_CapKhoa_2025_1.jpg`, `nckh_CapTruong_2025.jpg` |
| **3. Natural Language Processing (NLP)** | *Building Multi Aura Social Network Using PhoBERT to Detect and Prevent Inappropriate Comments* | **Co-Author** (Nguyễn Công Dũng, Nguyễn Huy Hoàng, Hà Trọng Thắng, Trần Gia Bảo, Nguyễn Bình An) | **Third Prize (Faculty-Level)** — HUIT Student Scientific Research 2024–2025 (18/04/2025) | `nckh_CapKhoa_2025_2.jpg`, `nckh_CapKhoa_2025_3.jpg` |
| **4. Applied Computer Vision** | *Classification and Segmentation of Rice Planthoppers Using a YOLO and SAM-ViT Pipeline* | **Lead Author** (Trần Gia Bảo, Trần Dương Gia Bảo) | **Finalist** — HUIT Data Science Competition 2025 (20/12/2025) | `khdl_CapKhoa_2025_1.png` |
| **4. Applied Computer Vision** | *Applying Vision Transformer (ViT) for Dermoscopic Skin Cancer Classification* | **Co-Author** (Nguyễn Hữu Thắng, Trần Gia Bảo, Trần Dương Gia Bảo, Nguyễn Thị Hồng Quyên) | **Finalist** — HUIT Data Science Competition 2025 (20/12/2025) | `khdl_CapKhoa_2025_2.png` |

---

## 4. Remaining Items Requiring Owner Confirmation

1. **Current Third-Year GPA & Accumulated Credits:** Previous portfolio listed `8.78 / 10` (`54` credits) from Year 1/early Year 2. This has been omitted from prominent public badges until the owner confirms the updated Semester 5 (2026) cumulative GPA.
2. **Exact Sub-Module Ownership inside `GIBOR-COFFEE-CHAIN-MANAGEMENT` (`team BBBAC`):** Git commits in the public repository were uploaded in consolidated batches under `gibor06`. The case study presents verified architecture facts from the codebase and credits `team BBBAC` collaboratively; the owner may further specify individual controller/service assignments if desired.
3. **FAIR XIX 2026 Proceedings ISBN / Page Numbers:** Status is conservatively presented as `"Presented at FAIR XIX 2026"` per certificate evidence (`08/10/2026`) without inventing DOIs or indexing metadata.
4. **Updated PDF Resume Document:** `public/cv/Tran-Gia-Bao-CV.pdf` was previously generated during second year; the online `/resume` and `/vi/resume` pages are now fully updated to 2026 (Third-Year Full-Stack Developer Intern) with fixed `@media print` rules so the owner or any recruiter can export a clean, up-to-date PDF directly from the browser.
