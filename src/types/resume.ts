export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  behance: string;
  github: string;
  summary: string;
  languages: { name: string; proficiency: string }[];
  stats: { label: string; value: string }[];
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  experiences: Experience[];
  architectureShowcase: ArchitectureItem[];
  skillCategories: SkillCategory[];
  certifications: Certification[];
  coinboxGames: GameProject[];
  openSourceLibraries: OpenSourceLibrary[];
}

export interface ExperienceProject {
  id: string;
  name: string;
  summary: string;
  highlights: string[];
  technologies: string[];
  links?: { label: string; url: string }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  highlights: string[];
  technologies: string[];
  isCurrent: boolean;
  projects?: ExperienceProject[];
  metrics?: { label: string; value: string }[];
}

export interface ArchitectureItem {
  id: string;
  title: string;
  company: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  tags: string[];
  diagramType: 'micro-frontend' | 'signals' | 'canvas-engine' | 'design-system' | 'full-stack';
  layers?: string[];
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: number; // 1-100
    experienceYears: string;
    description: string;
    featured?: boolean;
  }[];
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  duration?: string;
  credentialUrl?: string;
  highlight?: boolean;
}

export interface GameProject {
  id: string;
  title: string;
  type: 'Slot' | 'Scratch' | 'Keno';
  background: string;
  lines?: number;
  previewUrl?: string;
  featured?: boolean;
}

export interface OpenSourceLibrary {
  id: string;
  name: string;
  packageName: string;
  description: string;
  githubUrl: string;
  npmUrl: string;
  docsUrl?: string;
  category: string;
  installCmd: string;
  tags: string[];
  features: string[];
  codeSample: string;
}
