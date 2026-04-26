import { SectionHeading } from "@/components/wiki/SectionHeading";
import { WikiLink } from "@/components/wiki/WikiLink";
import { LANGUAGES_SPOKEN } from "@/lib/portfolio-data";

export function LanguagesSection() {
  return (
    <>
      <SectionHeading id="languages">Languages</SectionHeading>
      <p className="mb-2.5 text-sm leading-[1.65] text-[var(--wiki-text)]">
        Kangarli works professionally in Azerbaijani and English:
      </p>
      <table className="my-2 border-collapse text-[13.5px]">
        <thead>
          <tr>
            <th className="border border-[var(--wiki-border)] bg-[var(--wiki-subtle-bg)] px-3.5 py-1.5 text-left font-bold">
              Language
            </th>
            <th className="border border-[var(--wiki-border)] bg-[var(--wiki-subtle-bg)] px-3.5 py-1.5 text-left font-bold">
              Proficiency
            </th>
          </tr>
        </thead>
        <tbody>
          {LANGUAGES_SPOKEN.map((language) => (
            <tr key={language.lang}>
              <td className="border border-[var(--wiki-border)] px-3.5 py-1.5 text-left">
                <WikiLink>{language.lang}</WikiLink>
              </td>
              <td className="border border-[var(--wiki-border)] px-3.5 py-1.5 text-left">
                {language.level}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
