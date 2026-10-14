export interface Achievement {
  id: string;
  date: string;
  year: string;
  titleEn: string;
  titleVi: string;
  category: "conference" | "research" | "competition" | "academic";
  scopeEn: string;
  scopeVi: string;
  organization: string;
  descriptionEn: string;
  descriptionVi: string;
  evidenceUrl?: string;
  imagePath: string;
  featured: boolean;
}

export const achievements: Achievement[] = [
  {
    id: "fair-2026-sft-lead",
    date: "10/2026",
    year: "2026",
    titleEn: "Presented at FAIR XIX 2026 (Lead Author) — SFT 3D E-Commerce Packing",
    titleVi: "Báo cáo tại Hội nghị Quốc gia FAIR XIX 2026 (Tác giả chính) — SFT 3D Packing",
    category: "conference",
    scopeEn: "National Scientific Conference",
    scopeVi: "Hội nghị Khoa học Quốc gia",
    organization: "FAIR XIX 2026 (Hosted at HUIT, 08/10/2026)",
    descriptionEn:
      "Lead Author of 'SFT: Fourier-Guided Starfish Optimization for 3D E-Commerce Packing', presented at the 19th National Scientific Conference on Fundamental and Applied IT Research.",
    descriptionVi:
      "Tác giả chính bài báo 'SFT: Fourier-Guided Starfish Optimization for 3D E-Commerce Packing' trình bày tại Hội nghị Khoa học Quốc gia lần thứ XIX (FAIR XIX 2026).",
    imagePath: "/assets/img/thanhTich_2026/fair-2026-sft-packing.jpg",
    featured: true,
  },
  {
    id: "fair-2026-truck-coauthor",
    date: "10/2026",
    year: "2026",
    titleEn: "Presented at FAIR XIX 2026 (Co-Author) — Genetic Starfish 3D Truck Loading",
    titleVi: "Báo cáo tại Hội nghị Quốc gia FAIR XIX 2026 (Đồng tác giả) — 3D Truck Loading",
    category: "conference",
    scopeEn: "National Scientific Conference",
    scopeVi: "Hội nghị Khoa học Quốc gia",
    organization: "FAIR XIX 2026 (Hosted at HUIT, 08/10/2026)",
    descriptionEn:
      "Co-Author of 'Genetic Starfish Optimization for Constrained Three-Dimensional Truck Loading', presented at FAIR XIX 2026.",
    descriptionVi:
      "Đồng tác giả bài báo 'Genetic Starfish Optimization for Constrained Three-Dimensional Truck Loading' trình bày tại Hội nghị Khoa học Quốc gia FAIR XIX 2026.",
    imagePath: "/assets/img/thanhTich_2026/fair-2026-truck-loading.jpg",
    featured: true,
  },
  {
    id: "nckh-truong-2026",
    date: "04/2026",
    year: "2026",
    titleEn: "University Finalist & Faculty Consolation Prize — Student Scientific Research 2025–2026",
    titleVi: "Chung kết Cấp Trường & Giải Khuyến khích Cấp Khoa — NCKH Sinh viên 2025–2026",
    category: "research",
    scopeEn: "University & Faculty Level",
    scopeVi: "Cấp Trường & Cấp Khoa",
    organization: "Ho Chi Minh City University of Industry and Trade (HUIT)",
    descriptionEn:
      "Co-authored 'Time Optimization in Dynamic Cross-High-Utility Itemset Mining over Transaction Databases with Positive and Negative Utilities' (04/04/2026).",
    descriptionVi:
      "Đồng tác giả đề tài 'Tối ưu thời gian trong khai thác tập mục hữu ích cao chéo trên cơ sở dữ liệu giao dịch động có lợi ích âm và dương' (04/04/2026).",
    evidenceUrl:
      "https://fit.huit.edu.vn/tin-tuc/thong-bao-ket-qua-vong-so-loai-cuoc-thi-sinh-vien-nghien-cuu-khoa-hoc-nam-hoc-2025-2026",
    imagePath: "/assets/img/thanhTich_2026/nckh_CapKhoa_2026_1.png",
    featured: true,
  },
  {
    id: "db-challenge-2025",
    date: "12/2025",
    year: "2025",
    titleEn: "Consolation Prize — HUIT Database Design Challenge 2025",
    titleVi: "Giải Khuyến khích — Cuộc thi Học thuật Database Design Challenge 2025",
    category: "competition",
    scopeEn: "Faculty Level",
    scopeVi: "Cấp Khoa CNTT",
    organization: "Faculty of Information Technology — HUIT (07/12/2025)",
    descriptionEn:
      "Awarded for relational database schema design, normalization, and SQL query engineering in the 2025–2026 academic competition.",
    descriptionVi:
      "Đạt Giải Khuyến khích cuộc thi học thuật chủ đề Thiết kế Cơ sở Dữ liệu (Database Design Challenge) ngày 07/12/2025.",
    evidenceUrl:
      "http://fit.huit.edu.vn/tin-tuc-hoat-dong/cuoc-thi-hoc-thuat-database-design-challenge-dien-ra-soi-noi-va-thanh-cong-tot-dep",
    imagePath: "/assets/img/thanhTich_2025/hocthuatDB_CapKhoa_2025.jpg",
    featured: true,
  },
  {
    id: "sinh-vien-gioi-2025",
    date: "12/2025",
    year: "2025",
    titleEn: "Honor Student Commendation (Sinh viên Giỏi) — Academic Year 2024–2025",
    titleVi: "Danh hiệu Sinh viên Giỏi năm học 2024–2025 (Quyết định 5360/QĐ-DCT)",
    category: "academic",
    scopeEn: "University Level",
    scopeVi: "Cấp Trường",
    organization: "Ho Chi Minh City University of Industry and Trade (HUIT)",
    descriptionEn:
      "Official Rector's Commendation Certificate (Decision No. 5360/QĐ-DCT dated 30/12/2025) recognizing academic distinction in Class 15DHTH02.",
    descriptionVi:
      "Giấy khen của Hiệu trưởng Trường ĐH Công Thương TP.HCM (Quyết định số 5360/QĐ-DCT ngày 30/12/2025) cho sinh viên lớp 15DHTH02.",
    imagePath: "/assets/img/thanhTich_2025/svg_2024_2025.jpg",
    featured: true,
  },
  {
    id: "khdl-khoa-2025",
    date: "12/2025",
    year: "2025",
    titleEn: "Double Finalist — HUIT Data Science Competition 2025 (YOLO+SAM-ViT & ViT)",
    titleVi: "2 Đề tài vào Chung kết Cuộc thi Khoa học Dữ liệu HUIT 2025",
    category: "competition",
    scopeEn: "Faculty Level",
    scopeVi: "Cấp Khoa CNTT",
    organization: "Faculty of Information Technology — HUIT (20/12/2025)",
    descriptionEn:
      "Selected for the final round with two computer vision studies: Rice Planthopper Segmentation (YOLO + SAM-ViT, Lead Author) and Skin Cancer Classification (ViT, Co-Author).",
    descriptionVi:
      "Vào Vòng Chung kết với 2 đề tài Thị giác máy tính: Phân đoạn giống rầy trên cây lúa (YOLO + SAM-ViT) và Phân loại ung thư da trên ảnh soi da (ViT).",
    imagePath: "/assets/img/thanhTich_2025/khdl_CapKhoa_2025_1.png",
    featured: false,
  },
  {
    id: "nckh-khoa-2025-second",
    date: "05/2025",
    year: "2025",
    titleEn: "Second Prize (Faculty) & Consolation Prize (University) — EMHUN Data Mining Research",
    titleVi: "Giải Nhì Cấp Khoa & Giải Khuyến khích Cấp Trường — NCKH Thuật toán EMHUN",
    category: "research",
    scopeEn: "University & Faculty Level",
    scopeVi: "Cấp Trường & Cấp Khoa",
    organization: "Ho Chi Minh City University of Industry and Trade (HUIT)",
    descriptionEn:
      "Recognized at both Faculty (18/04/2025) and University (31/05/2025) levels for researching the EMHUN high-utility itemset mining algorithm and applying it to an electronics e-commerce website.",
    descriptionVi:
      "Đạt Giải Nhì cấp Khoa (18/04/2025) và Giải Khuyến khích cấp Trường (31/05/2025) với đề tài nghiên cứu thuật toán EMHUN ứng dụng vào website bán sản phẩm điện tử.",
    evidenceUrl:
      "http://fit.huit.edu.vn/thanh-tich-sinh-vien/cong-bo-ket-qua-vong-chung-ket-cuoc-thi-sinh-vien-nghien-cuu-khoa-hoc-khoa-cntt-nam-hoc-2024-2025",
    imagePath: "/assets/img/thanhTich_2025/nckh_CapKhoa_2025_1.jpg",
    featured: true,
  },
  {
    id: "nckh-khoa-2025-third",
    date: "04/2025",
    year: "2025",
    titleEn: "Third Prize (Faculty) — Multi Aura Social Network with PhoBERT Moderation",
    titleVi: "Giải Ba NCKH Cấp Khoa — Mạng xã hội Multi Aura ứng dụng mô hình PhoBERT",
    category: "research",
    scopeEn: "Faculty Level",
    scopeVi: "Cấp Khoa CNTT",
    organization: "Faculty of Information Technology — HUIT (18/04/2025)",
    descriptionEn:
      "Awarded Third Prize for building the Multi Aura social network integrating PhoBERT to detect and prevent inappropriate Vietnamese comments.",
    descriptionVi:
      "Đạt Giải Ba cấp Khoa CNTT (18/04/2025) với đề tài xây dựng mạng xã hội Multi Aura ứng dụng PhoBERT phát hiện và ngăn chặn bình luận không phù hợp.",
    imagePath: "/assets/img/thanhTich_2025/nckh_CapKhoa_2025_2.jpg",
    featured: false,
  },
];
