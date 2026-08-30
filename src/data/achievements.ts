export interface Achievement {
  id: string;
  date: string;
  year: string;
  titleEn: string;
  titleVi: string;
  category: "research" | "competition" | "academic";
  scopeEn: string;
  scopeVi: string;
  organization: string;
  descriptionEn?: string;
  descriptionVi?: string;
  evidenceUrl?: string;
  imagePath?: string;
  featured?: boolean;
}

export const achievements: Achievement[] = [
  {
    id: "nckh-truong-2026",
    date: "04/2026",
    year: "2026",
    titleEn: "Finalist — HUIT University-Level Student Scientific Research Competition",
    titleVi: "Vào vòng Chung kết Cuộc thi Nghiên cứu Khoa học Sinh viên cấp Trường",
    category: "research",
    scopeEn: "University Level",
    scopeVi: "Cấp Trường",
    organization: "Trường Đại học Công Thương TP.HCM (HUIT)",
    descriptionEn: "Selected as university finalist for research on Transformer NLP models and data mining algorithms.",
    descriptionVi: "Được chọn vào vòng chung kết cấp trường với đề tài nghiên cứu mô hình Transformer và thuật toán khai phá dữ liệu.",
    evidenceUrl: "https://fit.huit.edu.vn/nghien-cuu/thong-bao-so-3-to-chuc-vong-chung-ket-cuoc-thi-nckh-sv-2025-2026",
    imagePath: "/portfolio/assets/img/thanhTich_2026/nckh_CapKhoa_2026.jpg",
    featured: true,
  },
  {
    id: "nckh-khoa-2026",
    date: "04/2026",
    year: "2026",
    titleEn: "Consolation Prize — Faculty-Level Student Scientific Research Competition",
    titleVi: "Giải Khuyến Khích Cuộc thi Nghiên cứu Khoa học Sinh viên cấp Khoa",
    category: "research",
    scopeEn: "Faculty Level",
    scopeVi: "Cấp Khoa",
    organization: "Khoa CNTT - Trường Đại học Công Thương TP.HCM",
    descriptionEn: "Awarded for scientific contribution in applied artificial intelligence and natural language processing.",
    descriptionVi: "Khen thưởng nghiên cứu khoa học sinh viên ứng dụng trong trí tuệ nhân tạo và xử lý ngôn ngữ tự nhiên.",
    imagePath: "/portfolio/assets/img/thanhTich_2026/nckh_CapKhoa_2026_1.png",
    featured: true,
  },
  {
    id: "khdl-khoa-2025",
    date: "12/2025",
    year: "2025",
    titleEn: "Finalist — HUIT Data Science & Mining Competition",
    titleVi: "Vào vòng Chung kết Cuộc thi Khai thác Dữ liệu & Khoa học Dữ liệu",
    category: "competition",
    scopeEn: "Faculty Level",
    scopeVi: "Cấp Khoa",
    organization: "Khoa CNTT - HUIT",
    descriptionEn: "Built high-utility data pattern mining pipelines using EMHUN and modern statistical validation.",
    descriptionVi: "Triển khai pipeline khai phá tập mẫu hữu ích cao với thuật toán EMHUN và đánh giá thực nghiệm định lượng.",
    imagePath: "/portfolio/assets/img/thanhTich_2025/khdl_CapKhoa_2025_1.png",
    featured: true,
  },
  {
    id: "db-challenge-2025",
    date: "12/2025",
    year: "2025",
    titleEn: "Consolation Prize — Database Design Challenge 2025",
    titleVi: "Giải Khuyến Khích Cuộc thi Thiết kế Cơ sở Dữ liệu 2025",
    category: "competition",
    scopeEn: "Faculty Level",
    scopeVi: "Cấp Khoa",
    organization: "Khoa CNTT - HUIT",
    descriptionEn: "Designed normalized relational schemas and optimized querying architectures under strict performance constraints.",
    descriptionVi: "Thiết kế lược đồ cơ sở dữ liệu quan hệ chuẩn hóa và tối ưu hóa truy vấn trong điều kiện tải cao.",
    evidenceUrl: "http://fit.huit.edu.vn/tin-tuc-hoat-dong/cuoc-thi-hoc-thuat-database-design-challenge-dien-ra-soi-noi-va-thanh-cong-tot-dep",
    imagePath: "/portfolio/assets/img/thanhTich_2025/hocthuatDB_CapKhoa_2025.jpg",
    featured: true,
  },
  {
    id: "sinh-vien-gioi-2025",
    date: "12/2025",
    year: "2025",
    titleEn: "Honor Student Award — Academic Year 2024-2025",
    titleVi: "Danh hiệu Sinh viên Giỏi / Sinh viên Xuất sắc năm học 2024-2025",
    category: "academic",
    scopeEn: "Academic Distinction",
    scopeVi: "Danh hiệu Học thuật",
    organization: "Trường Đại học Công Thương TP.HCM (HUIT)",
    descriptionEn: "Maintained GPA of 3.78/4.00 (8.78/10.0) across 54 accumulated credits.",
    descriptionVi: "Duy trì điểm trung bình tích lũy 8.78/10.0 (3.78/4.0) với 54 tín chỉ tích lũy.",
    imagePath: "/portfolio/assets/img/thanhTich_2025/svg_2024_2025.jpg",
    featured: true,
  },
  {
    id: "nckh-truong-2025",
    date: "05/2025",
    year: "2025",
    titleEn: "Consolation Prize — HUIT University-Level Scientific Research 2024-2025",
    titleVi: "Giải Khuyến Khích Nghiên cứu Khoa học Sinh viên cấp Trường 2024-2025",
    category: "research",
    scopeEn: "University Level",
    scopeVi: "Cấp Trường",
    organization: "Trường Đại học Công Thương TP.HCM (HUIT)",
    descriptionEn: "University-wide recognition for research in software computing and intelligent systems.",
    descriptionVi: "Đạt giải thưởng cấp trường trong đợt tổng kết công trình nghiên cứu khoa học sinh viên năm học 2024-2025.",
    evidenceUrl: "http://fit.huit.edu.vn/tin-tuc-hoat-dong/le-trao-giai-nghien-cuu-khoa-hoc-huit-nam-hoc-20224-2025-ghi-nhan-tri-tue-va-no-luc-sinh-vien",
    imagePath: "/portfolio/assets/img/thanhTich_2025/nckh_CapTruong_2025.jpg",
    featured: true,
  },
  {
    id: "nckh-khoa-2025-second",
    date: "04/2025",
    year: "2025",
    titleEn: "Second Prize — Faculty-Level Scientific Research Competition 2024-2025",
    titleVi: "Giải Nhì Cuộc thi Nghiên cứu Khoa học cấp Khoa 2024-2025",
    category: "research",
    scopeEn: "Faculty Level",
    scopeVi: "Cấp Khoa",
    organization: "Khoa CNTT - HUIT",
    descriptionEn: "Awarded 2nd Prize for applied machine learning and data processing architecture.",
    descriptionVi: "Đạt giải Nhì cấp Khoa cho đề tài nghiên cứu học máy và kiến trúc xử lý dữ liệu.",
    evidenceUrl: "http://fit.huit.edu.vn/thanh-tich-sinh-vien/cong-bo-ket-qua-vong-chung-ket-cuoc-thi-sinh-vien-nghien-cuu-khoa-hoc-khoa-cntt-nam-hoc-2024-2025",
    imagePath: "/portfolio/assets/img/thanhTich_2025/nckh_CapKhoa_2025_1.jpg",
    featured: true,
  },
  {
    id: "nckh-khoa-2025-third",
    date: "04/2025",
    year: "2025",
    titleEn: "Third Prize — Faculty-Level Scientific Research Competition 2024-2025",
    titleVi: "Giải Ba Cuộc thi Nghiên cứu Khoa học cấp Khoa 2024-2025",
    category: "research",
    scopeEn: "Faculty Level",
    scopeVi: "Cấp Khoa",
    organization: "Khoa CNTT - HUIT",
    descriptionEn: "Recognized for research implementation and quantitative model validation.",
    descriptionVi: "Đạt giải Ba cấp Khoa trong cuộc thi nghiên cứu khoa học sinh viên.",
    imagePath: "/portfolio/assets/img/thanhTich_2025/nckh_CapKhoa_2025_3.jpg",
    featured: false,
  }
];
