import { SectionHeading } from "@/components/wiki/SectionHeading";

import { ContactLinks } from "./ContactLinks";
import { Infobox } from "./Infobox";
import { LastModified } from "./LastModified";
import { TableOfContents } from "./TableOfContents";
import { ArticleIntro } from "../sections/ArticleIntro";
import { CareerSection } from "../sections/CareerSection";
import { EducationSection } from "../sections/EducationSection";
import { ExternalLinksSection } from "../sections/ExternalLinksSection";
import { InterestsSection } from "../sections/InterestsSection";
import { LanguagesSection } from "../sections/LanguagesSection";
import { ProjectsSection } from "../sections/ProjectsSection";
import { SkillsSection } from "../sections/SkillsSection";

export function WikiArticle() {
  return (
    <div className="overflow-hidden">
      <Infobox />
      <ArticleIntro />
      <TableOfContents />
      <EducationSection />
      <CareerSection />
      <SkillsSection />
      <ProjectsSection />
      <InterestsSection />
      <LanguagesSection />
      <SectionHeading id="contact">Contact and links</SectionHeading>
      <ContactLinks />
      <ExternalLinksSection />
      <LastModified />
    </div>
  );
}
