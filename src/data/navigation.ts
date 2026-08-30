export interface NavItem {
  labelEn: string;
  labelVi: string;
  href: string;
  external?: boolean;
}

export const navItems: NavItem[] = [
  { labelEn: "Work", labelVi: "Dự Án", href: "/work" },
  { labelEn: "Research", labelVi: "Nghiên Cứu", href: "/research" },
  { labelEn: "About", labelVi: "Giới Thiệu", href: "/about" },
  { labelEn: "Resume", labelVi: "Hồ Sơ", href: "/resume" },
];

export const socialLinks = [
  { name: "GitHub", href: "https://github.com/gibor06", icon: "github" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/gibor06/", icon: "linkedin" },
  { name: "Email", href: "mailto:gibor06.dev@gmail.com", icon: "mail" },
];
