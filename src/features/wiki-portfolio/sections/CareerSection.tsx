import { SectionHeading } from "@/components/wiki/SectionHeading";
import { WikiLink } from "@/components/wiki/WikiLink";
import { WikiParagraph } from "@/components/wiki/WikiParagraph";
import { EXPERIENCE, PERSON } from "../content";

import { ExperienceBullets } from "./ExperienceBullets";

const careerSectionIds: Record<string, string> = {
  "Andersen Lab": "career-andersen",
  "Caspian Innovation Center LLC": "career-cic",
  "JET Academy": "career-jet",
  "Millisoft LLC": "career-millisoft",
};

function getCareerSectionId(company: string) {
  return careerSectionIds[company] ?? `career-${company.toLowerCase()}`;
}

export function CareerSection() {
  return (
    <>
      <SectionHeading id="career">Career</SectionHeading>
      <WikiParagraph>
        Kangarli began his professional career in May 2023 and progressed from a
        frontend internship to frontend and fullstack engineering roles across
        Azerbaijani and international technology organizations. His work spans
        logistics, healthcare, HR, accounting, public-facing landing pages, and
        real-time multi-tenant business systems.
      </WikiParagraph>

      {EXPERIENCE.map((experience) => (
        <section key={`${experience.company}-${experience.year}`}>
          <SectionHeading id={getCareerSectionId(experience.company)} level={3}>
            {experience.company} ({experience.year})
          </SectionHeading>
          <WikiParagraph>
            <b>{PERSON.name.split(" ")[1]}</b> served as a {experience.role} at{" "}
            <WikiLink>{experience.company}</WikiLink>, contributing to
            production delivery, frontend architecture, and cross-functional
            collaboration in professional engineering environments.
          </WikiParagraph>
          <ExperienceBullets bullets={experience.bullets} />
        </section>
      ))}

      <div className="relative my-2 mb-3.5 ml-2.5 border-l-[3px] border-[var(--wiki-border)] pl-[18px]">
        {EXPERIENCE.map((experience) => (
          <div
            className="relative mb-3.5 before:absolute before:left-[-24.5px] before:top-1.5 before:h-2.5 before:w-2.5 before:rounded-full before:border-2 before:border-[var(--wiki-surface)] before:bg-[var(--wiki-accent-bg)] before:content-['']"
            key={`${experience.company}-timeline`}
          >
            <div className="text-[13px] font-bold text-[var(--wiki-muted-text)]">
              {experience.year}
            </div>
            <div>
              <span className="font-bold text-[var(--wiki-text)]">
                {experience.role}
              </span>{" "}
              -{" "}
              <span className="text-[var(--wiki-link)] hover:underline">
                {experience.company}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
