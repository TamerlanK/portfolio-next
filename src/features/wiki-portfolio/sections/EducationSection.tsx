import { SectionHeading } from "@/components/wiki/SectionHeading";
import { WikiLink } from "@/components/wiki/WikiLink";
import { WikiParagraph } from "@/components/wiki/WikiParagraph";
import { WikiCell, WikiTable } from "@/components/wiki/WikiTable";
import { EDUCATION } from "../content";

export function EducationSection() {
  return (
    <>
      <SectionHeading id="early-life">Early life and education</SectionHeading>
      <WikiParagraph>
        Tamerlan Kangarli was born in 2002 in <WikiLink>Baku</WikiLink>, the
        capital of <WikiLink>Azerbaijan</WikiLink>. He pursued higher education
        in the field of information technology and cybersecurity.
      </WikiParagraph>
      <WikiParagraph>
        He earned a <WikiLink>Bachelor&apos;s degree</WikiLink> in Information
        Assurance from{" "}
        <WikiLink>Azerbaijan State Oil and Industry University</WikiLink> and
        then continued with a <WikiLink>Master&apos;s program</WikiLink> in
        Cybersecurity at{" "}
        <WikiLink>Azerbaijan State University of Economics</WikiLink>.
      </WikiParagraph>
      <WikiTable className="my-2">
        <thead>
          <tr>
            <WikiCell as="th" header>Degree</WikiCell>
            <WikiCell as="th" header>Institution</WikiCell>
          </tr>
        </thead>
        <tbody>
          {EDUCATION.map((education) => (
            <tr key={education.degree}>
              <WikiCell>
                <WikiLink>{education.degree}</WikiLink>
              </WikiCell>
              <WikiCell>
                {education.school}
              </WikiCell>
            </tr>
          ))}
        </tbody>
      </WikiTable>
    </>
  );
}
