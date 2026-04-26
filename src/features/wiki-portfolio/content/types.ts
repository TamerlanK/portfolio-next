export type TocItem = {
  id: string;
  label: string;
  num: string;
  sub?: boolean;
};

export type ExperienceItem = {
  year: string;
  role: string;
  company: string;
  bullets: string[];
};

export type EducationItem = {
  degree: string;
  school: string;
};

export type NotableWorkItem = {
  name: string;
  desc: string;
  company: string;
  tech: string;
};

export type LanguageItem = {
  lang: string;
  level: string;
};
