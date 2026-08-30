export interface SkillGroup {
  id: string;
  titleEn: string;
  titleVi: string;
  descriptionEn: string;
  descriptionVi: string;
  primarySkills: string[];
  workingSkills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "languages-core",
    titleEn: "Core Software Engineering",
    titleVi: "Kỹ thuật Phần mềm Cốt lõi",
    descriptionEn: "Strong fundamentals in object-oriented programming, data structures, and algorithmic complexity.",
    descriptionVi: "Nền tảng vững chắc về lập trình hướng đối tượng, cấu trúc dữ liệu và độ phức tạp giải thuật.",
    primarySkills: ["C", "C++", "Java", "Python", "JavaScript / TypeScript"],
    workingSkills: ["C#", "Kotlin", "Data Structures & Algorithms", "OOP Design"]
  },
  {
    id: "ai-data",
    titleEn: "Applied AI & Data Mining",
    titleVi: "Trí tuệ Nhân tạo & Khai phá Dữ liệu",
    descriptionEn: "Hands-on experience in NLP fine-tuning, model validation, and high-utility data pattern mining.",
    descriptionVi: "Kinh nghiệm thực nghiệm tinh chỉnh NLP (PhoBERT), đánh giá mô hình và khai phá tập mẫu hữu ích cao.",
    primarySkills: ["Python", "PhoBERT / Transformers", "PyTorch", "Data Mining (EMHUN)", "Data Cleaning"],
    workingSkills: ["Machine Learning Pipelines", "Scikit-Learn", "Model Evaluation (F1/Precision/Recall)", "Data Normalization"]
  },
  {
    id: "web-systems",
    titleEn: "Web Systems & Architecture",
    titleVi: "Hệ thống Web & Kiến trúc Frontend",
    descriptionEn: "Crafting fast, accessible, responsive web applications with modern component architecture.",
    descriptionVi: "Phát triển ứng dụng web tối ưu tốc độ tải, chuẩn tiếp cận và kiến trúc component hiện đại.",
    primarySkills: ["HTML5 / Semantic Web", "Modern CSS / Tailwind CSS", "JavaScript (ESNext)", "React", "Astro"],
    workingSkills: ["Node.js", "RESTful API Integration", "Responsive Layouts", "Web Performance & SEO"]
  },
  {
    id: "databases-tools",
    titleEn: "Databases, DevOps & Tools",
    titleVi: "Cơ sở Dữ liệu & Công cụ Phát triển",
    descriptionEn: "Disciplined version control, schema normalization, and Linux development environment.",
    descriptionVi: "Quản lý phiên bản chặt chẽ, chuẩn hóa cơ sở dữ liệu và môi trường lập trình Linux/VS Code.",
    primarySkills: ["Git & GitHub", "MySQL", "SQL Server", "VS Code", "Linux Bash"],
    workingSkills: ["Database Schema Normalization", "IntelliJ IDEA", "Visual Studio", "Markdown / Documentation"]
  }
];
