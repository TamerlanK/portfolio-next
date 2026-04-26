import type { TocItem } from "./types";

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
];
