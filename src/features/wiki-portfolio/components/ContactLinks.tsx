import { WikiInfoCard } from "@/components/wiki/WikiInfoCard"

import { PERSON } from "../content"

import { CvActions } from "./CvActions"
import { SectionHeading } from "@/components/wiki/SectionHeading"

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
] as const

export function ContactSection() {
  return (
    <>
      <SectionHeading id="contact">Contact and links</SectionHeading>

      <div className="my-2.5 grid grid-cols-2 gap-2 max-md:grid-cols-1">
        {contactLinks.map((item) => (
          <WikiInfoCard key={item.label} label={item.label}>
            <a
              className="text-[13.5px] text-[var(--wiki-link)] no-underline hover:underline"
              href={item.href}
              rel={
                item.href.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
              target={item.href.startsWith("mailto:") ? undefined : "_blank"}
            >
              {item.text}
            </a>
          </WikiInfoCard>
        ))}
        <WikiInfoCard label="CV">
          <CvActions />
        </WikiInfoCard>
      </div>
    </>
  )
}
