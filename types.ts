export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: React.ReactNode;
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 100
  category: "Frontend" | "Backend" | "Tools";
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
}

export enum SectionId {
  HERO = "hero",
  ABOUT = "about",
  SKILLS = "skills",
  EXPERIENCE = "experience",
  PROJECTS = "projects",
  CONTACT = "contact",
}
