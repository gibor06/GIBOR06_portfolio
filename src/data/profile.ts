export interface Profile {
  name: string;
  vietnameseName: string;
  handle: string;
  role: string;
  subRole: string;
  institution: string;
  institutionEn: string;
  location: string;
  bioEn: string;
  bioVi: string;
  sloganEn: string;
  sloganVi: string;
  email: string;
  github: string;
  linkedin: string;
  facebook: string;
  instagram: string;
  calendly: string;
  googleCalendar: string;
  formspreeEndpoint: string;
  academic: {
    gpa10: string;
    gpa4: string;
    credits: number;
    standing: string;
    standingEn: string;
    status: string;
    statusEn: string;
    transcriptUrl: string;
  };
}

export const profile: Profile = {
  name: "Tran Gia Bao",
  vietnameseName: "Trần Gia Bảo",
  handle: "gibor06",
  role: "Software Engineer & Applied AI",
  subRole: "Computer Science @ HUIT • Researcher & Builder",
  institution: "Trường Đại học Công Thương TP.HCM (HUIT)",
  institutionEn: "Ho Chi Minh City University of Industry and Trade (HUIT)",
  location: "Ho Chi Minh City, Vietnam",
  bioEn: "Second-year Computer Science student at HUIT with a strong foundation in software engineering, applied machine learning, and data systems. Focused on building high-performance, disciplined, and production-ready applications with verifiable outcomes.",
  bioVi: "Sinh viên năm 2 ngành Công nghệ Thông tin tại Đại học Công Thương TP.HCM (HUIT), tập trung phát triển kỹ thuật phần mềm, trí tuệ nhân tạo ứng dụng và hệ thống dữ liệu với tinh thần kỷ luật và hiệu quả thực chứng.",
  sloganEn: "Continuous learning, continuous growth — engineered with discipline and passion.",
  sloganVi: "Không ngừng học hỏi, không ngừng phát triển — xây dựng công nghệ bằng đam mê và kỷ luật.",
  email: "gibor06.dev@gmail.com",
  github: "https://github.com/gibor06",
  linkedin: "https://www.linkedin.com/in/gibor06/",
  facebook: "https://www.facebook.com/gibor06",
  instagram: "https://www.instagram.com/gibor06",
  calendly: "https://calendly.com/gibor06/30min",
  googleCalendar: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Interview+with+Tran+Gia+Bao+(gibor06)&details=Connect+via+gibor06+portfolio&add=gibor06.dev@gmail.com",
  formspreeEndpoint: "https://formspree.io/f/mojyqdka",
  academic: {
    gpa10: "8.78",
    gpa4: "3.78",
    credits: 54,
    standing: "Giỏi / Xuất sắc",
    standingEn: "Excellent / High Distinction",
    status: "Đang học (Học tiếp)",
    statusEn: "Enrolled / In Good Standing",
    transcriptUrl: "https://sinhvien.huit.edu.vn/tra-cuu/ket-qua-hoc-tap.html?k=KxOpNfz3rTnww6PJ-qIPffan7GI6ejnUf4b_2BsB-dTUFD4E9WvOGTllDcJy95m1"
  }
};
