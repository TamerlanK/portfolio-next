import { SectionHeading } from "@/components/wiki/SectionHeading";
import { WikiLink } from "@/components/wiki/WikiLink";
import { NOTABLE_WORK } from "@/lib/portfolio-data";

export function ProjectsSection() {
  return (
    <>
      <SectionHeading id="projects">Notable work and projects</SectionHeading>
      <p className="mb-2.5 text-sm leading-[1.65] text-[var(--wiki-text)]">
        Throughout his career, Kangarli has contributed to projects across
        logistics, healthcare, HR, and accounting domains.
      </p>
      <table className="my-2.5 w-full border-collapse text-[13.5px]">
        <thead>
          <tr>
            <th className="border border-[var(--wiki-border)] bg-[var(--wiki-subtle-bg)] px-2.5 py-1.5 text-left align-top font-bold">
              Project
            </th>
            <th className="border border-[var(--wiki-border)] bg-[var(--wiki-subtle-bg)] px-2.5 py-1.5 text-left align-top font-bold">
              Description
            </th>
            <th className="border border-[var(--wiki-border)] bg-[var(--wiki-subtle-bg)] px-2.5 py-1.5 text-left align-top font-bold">
              Company
            </th>
            <th className="border border-[var(--wiki-border)] bg-[var(--wiki-subtle-bg)] px-2.5 py-1.5 text-left align-top font-bold">
              Technologies
            </th>
          </tr>
        </thead>
        <tbody>
          {NOTABLE_WORK.map((project) => (
            <tr className="hover:[&>td]:bg-[var(--wiki-page-bg)]" key={project.name}>
              <td className="border border-[var(--wiki-border)] px-2.5 py-1.5 text-left align-top">
                <WikiLink>{project.name}</WikiLink>
              </td>
              <td className="border border-[var(--wiki-border)] px-2.5 py-1.5 text-left align-top">
                {project.desc}
              </td>
              <td className="border border-[var(--wiki-border)] px-2.5 py-1.5 text-left align-top">
                {project.company}
              </td>
              <td className="border border-[var(--wiki-border)] px-2.5 py-1.5 text-left align-top">
                <i>{project.tech}</i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
