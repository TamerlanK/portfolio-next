import { SectionHeading } from "@/components/wiki/SectionHeading";
import { WikiLink } from "@/components/wiki/WikiLink";
import { EDUCATION } from "@/lib/portfolio-data";

export function EducationSection() {
  return (
    <>
      <SectionHeading id="early-life">Early life and education</SectionHeading>
      <p className="mb-2.5 text-sm leading-[1.65] text-[var(--wiki-text)]">
        Tamerlan Kangarli was born in 2002 in <WikiLink>Baku</WikiLink>, the
        capital of <WikiLink>Azerbaijan</WikiLink>. He pursued higher education
        in the field of information technology and cybersecurity.
      </p>
      <p className="mb-2.5 text-sm leading-[1.65] text-[var(--wiki-text)]">
        He earned a <WikiLink>Bachelor&apos;s degree</WikiLink> in Information
        Assurance from{" "}
        <WikiLink>Azerbaijan State Oil and Industry University</WikiLink> and
        then continued with a <WikiLink>Master&apos;s program</WikiLink> in
        Cybersecurity at{" "}
        <WikiLink>Azerbaijan State University of Economics</WikiLink>.
      </p>
      <table className="my-2 w-full border-collapse text-[13.5px]">
        <thead>
          <tr>
            <th className="border border-[var(--wiki-border)] bg-[var(--wiki-subtle-bg)] px-2.5 py-1.5 text-left align-top font-bold">
              Degree
            </th>
            <th className="border border-[var(--wiki-border)] bg-[var(--wiki-subtle-bg)] px-2.5 py-1.5 text-left align-top font-bold">
              Institution
            </th>
          </tr>
        </thead>
        <tbody>
          {EDUCATION.map((education) => (
            <tr key={education.degree}>
              <td className="border border-[var(--wiki-border)] px-2.5 py-1.5 text-left align-top">
                <WikiLink>{education.degree}</WikiLink>
              </td>
              <td className="border border-[var(--wiki-border)] px-2.5 py-1.5 text-left align-top">
                {education.school}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
