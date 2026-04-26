import { WikiParagraph } from "@/components/wiki/WikiParagraph";
import { WikiLink } from "@/components/wiki/WikiLink";

export function ArticleIntro() {
  return (
    <>
      <WikiParagraph>
        <b>Tamerlan Kangarli</b> (born 2002) is an{" "}
        <WikiLink>Azerbaijani</WikiLink>{" "}
        <WikiLink>Frontend Engineer</WikiLink> based in{" "}
        <WikiLink>Baku, Azerbaijan</WikiLink>. He is currently open to frontend
        developer opportunities and has recently worked at{" "}
        <WikiLink>Andersen Lab</WikiLink>, where he delivered React and NestJS
        features across logistics and healthcare platforms.
      </WikiParagraph>
      <WikiParagraph>
        Kangarli has over three years of professional experience building
        production-grade web applications, mainly with <WikiLink>React</WikiLink>{" "}
        and <WikiLink>TypeScript</WikiLink>. He is known for TypeScript
        architecture, real-time UI engineering with SSE and live search,
        improving test coverage from 40% to 85%, and shipping 40+ production
        modules across multi-tenant enterprise platforms.
      </WikiParagraph>
    </>
  );
}
