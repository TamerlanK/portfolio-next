import { SectionHeading } from "@/components/wiki/SectionHeading";
import { WikiLink } from "@/components/wiki/WikiLink";
import { WikiParagraph } from "@/components/wiki/WikiParagraph";
import { WikiCell, WikiTable } from "@/components/wiki/WikiTable";

import { LANGUAGES_SPOKEN } from "../content";

export function LanguagesSection() {
  return (
    <>
      <SectionHeading id="languages">Languages</SectionHeading>
      <WikiParagraph>
        Kangarli works professionally in Azerbaijani and English:
      </WikiParagraph>
      <WikiTable className="my-2 w-auto">
        <thead>
          <tr>
            <WikiCell as="th" className="px-3.5" header>
              Language
            </WikiCell>
            <WikiCell as="th" className="px-3.5" header>
              Proficiency
            </WikiCell>
          </tr>
        </thead>
        <tbody>
          {LANGUAGES_SPOKEN.map((language) => (
            <tr key={language.lang}>
              <WikiCell className="px-3.5">
                <WikiLink>{language.lang}</WikiLink>
              </WikiCell>
              <WikiCell className="px-3.5">
                {language.level}
              </WikiCell>
            </tr>
          ))}
        </tbody>
      </WikiTable>
    </>
  );
}
