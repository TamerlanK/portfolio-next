export type TocItem = {
  id: string
  label: string
  num: string
  sub?: boolean
}

export type ExperienceItem = {
  year: string
  role: string
  company: string
  bullets: string[]
}

export type EducationItem = {
  degree: string
  school: string
}

export type NotableWorkItem = {
  name: string
  desc: string
  company: string
  tech: string
}

export type LanguageItem = {
  lang: string
  level: string
}

export const PERSON = {
  name: "Tamerlan Kangarli",
  born: { date: "2002", location: "Baku, Azerbaijan" },
  nationality: "Azerbaijani",
  occupation: "Frontend Engineer",
  title: "Frontend Engineer",
  isOpenToWork: true,
  almaMater: [
    "Azerbaijan State University of Economics",
    "Azerbaijan State Oil and Industry University",
  ],
  email: "tamerlankengerli2002@gmail.com",
  telegram: "@tamerlankangarli",
  github: "github.com/TamerlanK",
  linkedin: "linkedin.com/in/tamerlankangarli",
  knownFor:
    "Frontend Architecture, Scalable UI Systems, Reusable Component Design",
  yearsActive: "2023 - present",
} as const

export const EDUCATION: EducationItem[] = [
  {
    degree: "Master of Cybersecurity",
    school: "Azerbaijan State University of Economics",
  },
  {
    degree: "Bachelor of Information Assurance",
    school: "Azerbaijan State Oil and Industry University",
  },
]

export const EXPERIENCE: ExperienceItem[] = [
  {
    year: "Aug 2025 - Apr 2026",
    role: "Frontend Engineer",
    company: "Andersen Lab",
    bullets: [
      "Architected responsive interfaces for a high-volume logistics warehouse management system using React, TypeScript, and Redux while sustaining performance under heavy real-time data flows.",
      "Raised frontend test coverage from 40% to 85% with Jest-based unit and integration testing, reducing post-release defects.",
      "Applied code splitting, lazy loading, and rendering optimizations that cut load times by 35%.",
      "Mentored 3 junior engineers on React patterns, component architecture, and delivery workflows.",
      "Collaborated with product owners and cross-functional stakeholders in Agile/Scrum delivery.",
      "Led peer code reviews to catch regressions early and improve shared ownership.",
    ],
  },
  {
    year: "May 2024 - Jul 2025",
    role: "Frontend Developer",
    company: "Millisoft LLC",
    bullets: [
      "Owned development and enhancement of 30+ modules in an enterprise HR and accounting system with CRUD, real-time search, and advanced filtering.",
      "Built reusable, type-safe UI components and dynamic forms using Formik and Yup to accelerate team delivery.",
      "Improved first-load performance by 30-35% through code splitting and lazy loading.",
      "Implemented client-side routing and a dynamic searchable sidebar with React Router.",
      "Partnered closely with backend engineers on REST API integration and edge-case handling.",
    ],
  },
  {
    year: "Feb 2024 - May 2024",
    role: "Frontend Developer",
    company: "Caspian Innovation Center LLC",
    bullets: [
      "Built scalable, maintainable frontend applications with TypeScript under senior engineering mentorship.",
      "Reverse-engineered and rebuilt the company exam platform end to end.",
      "Delivered multiple React projects from concept through deployment with minimal supervision.",
    ],
  },
  {
    year: "May 2023 - Feb 2024",
    role: "Frontend Developer (Intern)",
    company: "JET Academy",
    bullets: [
      "Designed and built a fully responsive travel landing page with HTML, CSS, and JavaScript.",
      "Developed a multi-page e-commerce interface in React using reusable components.",
      "Translated Figma designs into pixel-accurate, production-style interfaces.",
      "Won 1st place in a company hackathon by leading frontend work on a feedback management system.",
    ],
  },
]

export const SKILLS: Record<string, string[]> = {
  "Core Languages": ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  "Frontend Frameworks": [
    "React.js",
    "Next.js",
    "React Router",
    "React Hooks",
    "Custom Hooks",
  ],
  "State Management": [
    "Redux",
    "Redux Toolkit",
    "Context API",
    "Zustand",
    "React Query (TanStack)",
  ],
  Styling: [
    "Tailwind CSS",
    "Sass/SCSS",
    "Styled Components",
    "CSS Modules",
    "Material UI",
    "Ant Design",
  ],
  "Forms & Validation": ["React Hook Form", "Formik", "Zod", "Yup"],
  "Backend Familiarity": [
    "Node.js",
    "Express.js",
    "NestJS",
    "REST API Design",
    "MongoDB",
    "PostgreSQL",
  ],
  Testing: [
    "Jest",
    "React Testing Library",
    "Unit Testing",
    "Component Testing",
  ],
  Performance: [
    "Code Splitting",
    "Lazy Loading",
    "Memoization",
    "Web Performance Optimization",
    "SLO/SLA Principles",
  ],
  "DevOps & Tooling": [
    "Git",
    "GitHub",
    "GitLab",
    "Docker",
    "Webpack",
    "Vite",
    "ESLint",
    "Prettier",
    "npm",
    "Yarn",
    "pnpm",
  ],
  Practices: [
    "Clean Code",
    "Component Reusability",
    "Code Review",
    "Agile/Scrum",
    "CI/CD",
    "Accessibility (a11y)",
  ],
}

export const NOTABLE_WORK: NotableWorkItem[] = [
  {
    name: "Logistics Warehouse Management System",
    desc: "Scalable and responsive UI for a high-volume logistics platform built with React, TypeScript, and Redux.",
    company: "Andersen Lab",
    tech: "React, TypeScript, Redux",
  },
  {
    name: "Medical Care Application Integration",
    desc: "Frontend integration work with backend APIs, applying practical understanding of Node.js, NestJS, and healthcare data flows.",
    company: "Andersen Lab",
    tech: "React, REST APIs, NestJS familiarity",
  },
  {
    name: "HR & Accounting Platform",
    desc: "Led frontend development for 30+ modules delivering CRUD operations, real-time search, and advanced filtering.",
    company: "Millisoft",
    tech: "React, Formik, Yup, React Router",
  },
]

export const LANGUAGES_SPOKEN: LanguageItem[] = [
  { lang: "Azerbaijani", level: "Native" },
  { lang: "English", level: "Professional proficiency" },
]

export const TOC_ITEMS: TocItem[] = [
  { id: "early-life", label: "Early life and education", num: "1" },
  { id: "career", label: "Career", num: "2" },
  {
    id: "career-andersen",
    label: "Andersen Lab (2025-2026)",
    num: "2.1",
    sub: true,
  },
  {
    id: "career-millisoft",
    label: "Millisoft (2024-2025)",
    num: "2.2",
    sub: true,
  },
  {
    id: "career-cic",
    label: "Caspian Innovation Center (2024)",
    num: "2.3",
    sub: true,
  },
  { id: "career-jet", label: "JET Academy (2023-2024)", num: "2.4", sub: true },
  { id: "skills", label: "Technical skills", num: "3" },
  { id: "projects", label: "Notable work and projects", num: "4" },
  { id: "hobbies", label: "Personal interests", num: "5" },
  { id: "languages", label: "Languages", num: "6" },
  { id: "contact", label: "Contact and links", num: "7" },
  { id: "external", label: "External links", num: "8" },
]
