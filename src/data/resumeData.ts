import data from './resumeData.json';
import type { ResumeData } from '../types/resume';

// Keep the existing component imports while the content lives in portable JSON.
export const RESUME_DATA = data as ResumeData;

export const PERSONAL_INFO = RESUME_DATA.personalInfo;
export const EXPERIENCES = RESUME_DATA.experiences;
export const ARCHITECTURE_SHOWCASE = RESUME_DATA.architectureShowcase;
export const SKILL_CATEGORIES = RESUME_DATA.skillCategories;
export const CERTIFICATIONS = RESUME_DATA.certifications;
export const COINBOX_GAMES = RESUME_DATA.coinboxGames;
export const OPEN_SOURCE_LIBRARIES = RESUME_DATA.openSourceLibraries;
