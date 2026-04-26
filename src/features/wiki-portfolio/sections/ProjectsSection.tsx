import { SectionHeading } from "@/components/wiki/SectionHeading";
import { WikiLink } from "@/components/wiki/WikiLink";
import { WikiParagraph } from "@/components/wiki/WikiParagraph";
import { WikiCell, WikiTable } from "@/components/wiki/WikiTable";
import { NOTABLE_WORK } from "../content";

export function ProjectsSection() {
  return (
    <>
      <SectionHeading id="projects">Notable work and projects</SectionHeading>
      <WikiParagraph>
        Throughout his career, Kangarli has contributed to projects across
        logistics, healthcare, HR, and accounting domains.
      </WikiParagraph>
      <WikiTable>
        <thead>
          <tr>
            <WikiCell as="th" header>Project</WikiCell>
            <WikiCell as="th" header>Description</WikiCell>
            <WikiCell as="th" header>Company</WikiCell>
            <WikiCell as="th" header>Technologies</WikiCell>
          </tr>
        </thead>
        <tbody>
          {NOTABLE_WORK.map((project) => (
            <tr className="hover:[&>td]:bg-[var(--wiki-page-bg)]" key={project.name}>
              <WikiCell>
                <WikiLink>{project.name}</WikiLink>
              </WikiCell>
              <WikiCell>
                {project.desc}
              </WikiCell>
              <WikiCell>
                {project.company}
              </WikiCell>
              <WikiCell>
                <i>{project.tech}</i>
              </WikiCell>
            </tr>
          ))}
        </tbody>
      </WikiTable>
    </>
  );
}
