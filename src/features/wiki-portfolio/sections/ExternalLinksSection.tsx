import { ExternalLinkIcon } from "@/components/wiki/ExternalLinkIcon";
import { SectionHeading } from "@/components/wiki/SectionHeading";
import { PERSON } from "@/lib/portfolio-data";

const externalLinks = [
  {
    href: `https://${PERSON.github}`,
    label: "GitHub profile - TamerlanK",
  },
  {
    href: `https://${PERSON.linkedin}`,
    label: "LinkedIn profile - Tamerlan Kangarli",
  },
  {
    href: "https://t.me/tamerlankangarli",
    label: "Telegram - @tamerlankangarli",
  },
] as const;

export function ExternalLinksSection() {
  return (
    <>
      <SectionHeading id="external">External links</SectionHeading>
      <ul className="list-disc pl-7 text-sm leading-loose [&_a]:text-[var(--wiki-link)] [&_a]:no-underline [&_a:hover]:underline">
        {externalLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} rel="noopener noreferrer" target="_blank">
              {link.label}
            </a>{" "}
            <ExternalLinkIcon />
          </li>
        ))}
      </ul>
    </>
  );
}
