import { PERSON } from "@/lib/portfolio-data";

import { CvActions } from "./CvActions";

const contactLinks = [
  {
    href: `mailto:${PERSON.email}`,
    label: "Email",
    text: PERSON.email,
  },
  {
    href: "https://t.me/tamerlankangarli",
    label: "Telegram",
    text: PERSON.telegram,
  },
  {
    href: `https://${PERSON.github}`,
    label: "GitHub",
    text: PERSON.github,
  },
  {
    href: `https://${PERSON.linkedin}`,
    label: "LinkedIn",
    text: PERSON.linkedin,
  },
] as const;

export function ContactLinks() {
  return (
    <div className="my-2.5 grid grid-cols-2 gap-2 max-md:grid-cols-1">
      {contactLinks.map((item) => (
        <div
          className="border border-[var(--wiki-border)] bg-[var(--wiki-page-bg)] px-3.5 py-2.5 text-[13px]"
          key={item.label}
        >
          <div className="mb-0.5 text-[11px] font-bold uppercase tracking-[0.04em] text-[var(--wiki-muted-text)]">
            {item.label}
          </div>
          <a
            className="text-[13.5px] text-[var(--wiki-link)] no-underline hover:underline"
            href={item.href}
            rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            target={item.href.startsWith("mailto:") ? undefined : "_blank"}
          >
            {item.text}
          </a>
        </div>
      ))}
      <div className="border border-[var(--wiki-border)] bg-[var(--wiki-page-bg)] px-3.5 py-2.5 text-[13px]">
        <div className="mb-0.5 text-[11px] font-bold uppercase tracking-[0.04em] text-[var(--wiki-muted-text)]">
          CV
        </div>
        <CvActions />
      </div>
    </div>
  );
}
