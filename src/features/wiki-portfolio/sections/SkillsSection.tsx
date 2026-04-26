import { SectionHeading } from "@/components/wiki/SectionHeading";
import { WikiLink } from "@/components/wiki/WikiLink";
import { SKILLS } from "@/lib/portfolio-data";

export function SkillsSection() {
  return (
    <>
      <SectionHeading id="skills">Technical skills</SectionHeading>
      <p className="mb-2.5 text-sm leading-[1.65] text-[var(--wiki-text)]">
        Kangarli&apos;s technical expertise spans the full{" "}
        <WikiLink>JavaScript</WikiLink> ecosystem, with a primary focus on
        frontend frameworks, state management, UI architecture, testing, and
        practical backend collaboration.
      </p>
      <table className="my-2.5 w-full border-collapse text-[13px]">
        <tbody>
          {Object.entries(SKILLS).map(([category, items]) => (
            <tr key={category}>
              <th className="w-40 border border-[var(--wiki-border)] bg-[var(--wiki-subtle-bg)] px-2.5 py-1.5 text-left align-top text-[13px] font-bold">
                {category}
              </th>
              <td className="border border-[var(--wiki-border)] px-2.5 py-1.5 text-left align-top">
                {items.map((skill) => (
                  <span
                    className="mr-1 mt-0.5 inline-block rounded-[2px] border border-[var(--wiki-skill-border)] bg-[var(--wiki-skill-bg)] px-2 py-px text-[12.5px] text-[var(--wiki-link)] transition-colors hover:bg-[var(--wiki-skill-hover)]"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
