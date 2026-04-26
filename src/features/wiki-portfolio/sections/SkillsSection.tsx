import { SectionHeading } from "@/components/wiki/SectionHeading";
import { WikiLink } from "@/components/wiki/WikiLink";
import { WikiParagraph } from "@/components/wiki/WikiParagraph";
import { WikiCell, WikiTable } from "@/components/wiki/WikiTable";
import { SKILLS } from "../content";

export function SkillsSection() {
  return (
    <>
      <SectionHeading id="skills">Technical skills</SectionHeading>
      <WikiParagraph>
        Kangarli&apos;s technical expertise spans the full{" "}
        <WikiLink>JavaScript</WikiLink> ecosystem, with a primary focus on
        frontend frameworks, state management, UI architecture, testing, and
        practical backend collaboration.
      </WikiParagraph>
      <WikiTable className="text-[13px]">
        <tbody>
          {Object.entries(SKILLS).map(([category, items]) => (
            <tr key={category}>
              <WikiCell as="th" className="w-40 text-[13px]" header>
                {category}
              </WikiCell>
              <WikiCell>
                {items.map((skill) => (
                  <span
                    className="mr-1 mt-0.5 inline-block rounded-[2px] border border-[var(--wiki-skill-border)] bg-[var(--wiki-skill-bg)] px-2 py-px text-[12.5px] text-[var(--wiki-link)] hover:bg-[var(--wiki-skill-hover)]"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}
              </WikiCell>
            </tr>
          ))}
        </tbody>
      </WikiTable>
    </>
  );
}
