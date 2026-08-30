export interface Certificate {
  id: string;
  titleEn: string;
  titleVi: string;
  issuer: string;
  category: "ai" | "data" | "cloud";
  imagePath: string;
  pdfPath?: string;
  credentialUrl?: string;
  highlight?: boolean;
}

export const certificates: Certificate[] = [
  {
    id: "google-ai-essentials",
    titleEn: "Google AI Essentials",
    titleVi: "Chứng chỉ Google AI Essentials",
    issuer: "Google / Coursera",
    category: "ai",
    imagePath: "/portfolio/assets/img/GOOGLE AI/Google_AI.png",
    pdfPath: "/portfolio/assets/img/GOOGLE AI/Coursera 6K999EVPU1V0.pdf",
    highlight: true,
  },
  {
    id: "google-ai-fundamentals",
    titleEn: "Google AI — Fundamentals",
    titleVi: "Google AI — Nền tảng Trí tuệ Nhân tạo",
    issuer: "Google / Coursera",
    category: "ai",
    imagePath: "/portfolio/assets/img/GOOGLE AI/Fundamentals.png",
    highlight: true,
  },
  {
    id: "google-ai-app-building",
    titleEn: "Google AI — App Building with Generative AI",
    titleVi: "Google AI — Xây dựng ứng dụng với AI tạo sinh",
    issuer: "Google / Coursera",
    category: "ai",
    imagePath: "/portfolio/assets/img/GOOGLE AI/App_Building.png",
    highlight: true,
  },
  {
    id: "google-ai-data-analysis",
    titleEn: "Google AI — Data Analysis & Insights",
    titleVi: "Google AI — Phân tích Dữ liệu và Insights",
    issuer: "Google / Coursera",
    category: "data",
    imagePath: "/portfolio/assets/img/GOOGLE AI/Data_Analysis.png",
    highlight: true,
  },
  {
    id: "gemini-faculty",
    titleEn: "Gemini for Faculty & Education",
    titleVi: "Chứng chỉ Gemini for Faculty",
    issuer: "Google / Faculty of IT",
    category: "ai",
    imagePath: "/portfolio/assets/img/GEMENI/CC_Gemini_Faculty.png",
    pdfPath: "/portfolio/assets/img/GEMENI/CC_Gemini_Faculty.pdf",
    highlight: true,
  },
  {
    id: "google-da-foundations",
    titleEn: "Google Data Analytics — Foundations: Data, Data, Everywhere",
    titleVi: "Google Data Analytics — Nền tảng Phân tích Dữ liệu",
    issuer: "Google / Coursera",
    category: "data",
    imagePath: "/portfolio/assets/img/ChungChiDA/Foundations.png",
    highlight: true,
  },
  {
    id: "google-da-decisions",
    titleEn: "Google Data Analytics — Ask Questions to Make Data-Driven Decisions",
    titleVi: "Google Data Analytics — Đặt câu hỏi ra quyết định bằng Dữ liệu",
    issuer: "Google / Coursera",
    category: "data",
    imagePath: "/portfolio/assets/img/ChungChiDA/Ask_Questions_to Make_Data_Driven_Decisions.png",
    highlight: false,
  },
  {
    id: "google-da-prepare",
    titleEn: "Google Data Analytics — Prepare Data for Exploration",
    titleVi: "Google Data Analytics — Chuẩn bị Dữ liệu để Khám phá",
    issuer: "Google / Coursera",
    category: "data",
    imagePath: "/portfolio/assets/img/ChungChiDA/Prepare_Data_for Exploration.png",
    highlight: false,
  },
  {
    id: "google-da-process",
    titleEn: "Google Data Analytics — Process Data from Dirty to Clean",
    titleVi: "Google Data Analytics — Xử lý và Làm sạch Dữ liệu",
    issuer: "Google / Coursera",
    category: "data",
    imagePath: "/portfolio/assets/img/ChungChiDA/Process_Data from_Dirty_to_Clean.png",
    highlight: false,
  },
  {
    id: "google-ai-brainstorming",
    titleEn: "Google AI — Brainstorming & Planning",
    titleVi: "Google AI — Lập kế hoạch và Đổi mới Ý tưởng",
    issuer: "Google / Coursera",
    category: "ai",
    imagePath: "/portfolio/assets/img/GOOGLE AI/Brainstorming and Planning.png",
    highlight: false,
  },
  {
    id: "google-ai-writing",
    titleEn: "Google AI — Writing & Communicating",
    titleVi: "Google AI — Viết và Truyền thông Hiệu quả",
    issuer: "Google / Coursera",
    category: "ai",
    imagePath: "/portfolio/assets/img/GOOGLE AI/Writing_and_Communicating.png",
    highlight: false,
  },
  {
    id: "google-ai-research",
    titleEn: "Google AI — Research & Insights",
    titleVi: "Google AI — Nghiên cứu và Khai thác Thông tin",
    issuer: "Google / Coursera",
    category: "ai",
    imagePath: "/portfolio/assets/img/GOOGLE AI/Research_and_Insights.png",
    highlight: false,
  }
];
