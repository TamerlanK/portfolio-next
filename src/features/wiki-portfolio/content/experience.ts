import type { ExperienceItem } from "./types";

export const EXPERIENCE: ExperienceItem[] = [
  {
    year: "Aug 2025 - Apr 2026",
    role: "Fullstack Developer",
    company: "Andersen Lab",
    bullets: [
      "Collaborated with a cross functional team (UI/UX Designers, Backend Developers, QA, Business Analysts, and Product Owners) to deliver features for a Warehouse & Logistics Management System and a Healthcare Management Application.",
      "Developed production grade React features following agile practices, consistently delivering user stories on a two week sprint cadence.",
      "Optimized application performance by implementing useMemo, useCallback, lazy loading, route level code splitting, and bundle optimization, resulting in improved load times and Lighthouse scores.",
      "Increased frontend test coverage from 40% to 85% by establishing a structured testing framework using Jest and React Testing Library, significantly reducing regressions.",
      "Owned full stack feature development using React and NestJS, including designing REST APIs, implementing JWT authentication with Role Based Access Control (RBAC).",
      "Established code review standards and bug triage processes within the team, contributing to higher code quality and fewer recurring issues.",
      "Mentored 3 junior trainees through structured onboarding, weekly code walkthroughs, and documentation, helping improve team productivity.",
    ],
  },
  {
    year: "May 2023 - Jul 2025",
    role: "Frontend Developer",
    company: "Millisoft LLC",
    bullets: [
      "Built and owned enterprise modules across Sensible, a multi tenant, ERP accounting and HR management platform delivering full CRUD interfaces, complex form flows, and data tables that replaced manual internal workflows across multiple business units.",
      "Engineered real time search and filter across large data sets, querying, filtering, and rendering results on keystroke with a smooth, responsive UX while receiving consistent positive feedback from internal business users.",
      "Implemented a live notification system using Server Sent Events (SSE), replacing a polling based approach with a persistent, event driven connection that delivered instant real time updates across all tenant accounts without unnecessary network overhead.",
      "Architected multi tenancy UI logic in a 3 person frontend team, ensuring complete data isolation and context aware rendering per tenant, a critical correctness requirement for a platform handling sensitive financial and HR data.",
      "Championed frontend test quality by introducing component level unit testing with Jest, raising coverage across the platform and catching regressions before they reached internal users while reducing the volume of post release bug reports sprint over sprint.",
      "Worked directly with internal end users to gather feedback on pain points, translating qualitative insights into scoped UI improvements while iterating quickly within sprint cycles and maintaining high satisfaction across business teams.",
      "Maintained scalable, predictable global state using Redux across a complex 100+ module platform, enforcing clear data flow patterns, eliminating prop drilling, and keeping state logic consistent as the application scaled.",
    ],
  },
  {
    year: "Feb 2023 - May 2023",
    role: "Frontend Developer",
    company: "Caspian Innovation Center LLC",
    bullets: [
      "Contributed to the development of the SOCAR Downstream public facing landing page, implementing responsive layouts, interactive UI components, and pixel accurate Figma to code delivery for one of Azerbaijan's largest energy companies.",
      "Delivered production grade TypeScript and React applications independently within a 3 month contract, applying clean architecture principles and component driven design from day one in a professional engineering environment.",
      "Rebuilt the company's exam platform from scratch in React, redesigning the full component architecture, implementing state management, and integrating the REST API layer to improve platform stability and test taker experience.",
    ],
  },
  {
    year: "May 2022 - Feb 2023",
    role: "Frontend Developer",
    company: "JET Academy",
    bullets: [
      "Won 1st place in a company wide hackathon by leading the React frontend of a full stack feedback management system, delivering a complete, working product within a single day deadline alongside a cross functional team.",
      "Built three production quality frontend projects independently using React and Tailwind CSS: a fintech landing page with animated UI sections and conversion focused layout; a multi page ecommerce UI with component driven architecture, product listings, and cart state management; and a travel landing page with fully responsive design across desktop, tablet, and mobile, all built to pixel accurate Figma specifications.",
    ],
  },
];
