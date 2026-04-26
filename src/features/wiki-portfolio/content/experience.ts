import type { ExperienceItem } from "./types";

export const EXPERIENCE: ExperienceItem[] = [
  {
    year: "Aug 2025 - Apr 2026",
    role: "Fullstack Developer",
    company: "Andersen Lab",
    bullets: [
      "Architected and shipped production-grade React features across two enterprise platforms: a Warehouse Management System and a MedCare healthcare application.",
      "Worked in cross-functional teams of 15+ engineers across two simultaneous product tracks, consistently delivering user stories on a 2-week sprint cadence.",
      "Optimized performance by eliminating unnecessary re-renders, applying useMemo/useCallback where appropriate, and implementing lazy loading, route-level code splitting, and bundle optimization.",
      "Raised frontend test coverage from 40% to 85% by establishing a systematic Jest and React Testing Library workflow that reduced recurring production regressions.",
      "Established team-wide code review standards and a structured bug triage process with clear severity levels and ownership rules.",
      "Mentored 3 junior engineers through onboarding plans, weekly code walkthroughs, and internal documentation.",
      "Owned fullstack feature delivery on the MedCare application with React and NestJS, designing REST API endpoints and implementing JWT authentication with RBAC.",
      "Collaborated daily with backend engineers, QA, UI/UX designers, business analysts, and product owners to translate Figma designs into accessible, pixel-perfect interfaces.",
    ],
  },
  {
    year: "May 2024 - Jul 2025",
    role: "Frontend Developer",
    company: "Millisoft LLC",
    bullets: [
      "Built and owned enterprise modules across Sensible, a multi-tenant accounting and HR management platform with full CRUD interfaces, complex form flows, and data tables.",
      "Engineered real-time search and filtering across large datasets, querying and rendering results on keystroke while maintaining a smooth user experience.",
      "Implemented a live notification system with Server-Sent Events (SSE), replacing polling with persistent event-driven updates across tenant accounts.",
      "Architected multi-tenancy UI logic in a 3-person frontend team, ensuring complete data isolation and context-aware rendering for sensitive financial and HR data.",
      "Introduced component-level unit testing with Jest, improving coverage and catching regressions before they reached internal users.",
      "Worked directly with internal end-users to gather feedback, translate pain points into scoped UI improvements, and iterate within sprint cycles.",
      "Maintained scalable global state with Redux across a complex 100+ module platform, enforcing predictable data-flow patterns as the application scaled.",
    ],
  },
  {
    year: "Feb 2024 - May 2024",
    role: "Frontend Developer",
    company: "Caspian Innovation Center LLC",
    bullets: [
      "Contributed to the SOCAR Downstream public-facing landing page with responsive layouts, interactive UI components, and pixel-accurate Figma-to-code delivery.",
      "Delivered production-grade TypeScript and React applications independently within a 3-month contract.",
      "Rebuilt the company exam platform from scratch in React, redesigning the component architecture, implementing state management, and integrating the REST API layer.",
    ],
  },
  {
    year: "May 2023 - Feb 2024",
    role: "Frontend Developer (Intern)",
    company: "JET Academy",
    bullets: [
      "Won 1st place in a company-wide hackathon by leading the React frontend of a full-stack feedback management system within a single-day deadline.",
      "Built a fintech landing page with animated UI sections and conversion-focused layout using React and Tailwind CSS.",
      "Developed a multi-page e-commerce UI with component-driven architecture, product listings, and cart state management.",
      "Built a responsive travel landing page across desktop, tablet, and mobile from pixel-accurate Figma specifications.",
    ],
  },
];
