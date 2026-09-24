export type ThemeMode = 'dark' | 'light';

export interface Project {
  id: string;
  title: string;
  category: 'AI/ML' | 'Web' | 'Mobile' | 'IoT';
  shortDescription: string;
  fullDescription: string;
  problemStatement: string;
  solution: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  lessonsLearned: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  screenshots?: string[];
  featured: boolean;
}

export interface Skill {
  name: string;
  iconName: string;
  proficiency: number;
  color?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Achievement {
  id: string;
  title: string;
  event: string;
  organization: string;
  description: string;
  date: string;
  badge: string;
  icon: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl: string;
  certificatePdf: string;
  licenseId?: string;
  logo: string;
  skills: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  scoreLabel: string;
  scoreValue: string;
  highlights: string[];
}

export interface CodingProfile {
  name: string;
  platform: 'GitHub' | 'LinkedIn' | 'LeetCode' | 'HackerRank' | 'CodeChef';
  username: string;
  url: string;
  icon: string;
  statsLabel: string;
  statsValue: string;
  color: string;
  badge: string;
  isPlaceholder?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  label: string;
}
