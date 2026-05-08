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
        Kangarli has 4+ years of experience building{" "}
        <WikiLink>React</WikiLink> applications across logistics, healthcare,
        accounting, and HR domains. He specializes in TypeScript architecture,
        real-time UI development with SSE, live search, and event-driven
        systems, and has a track record of improving test coverage from 40% to
        85% while delivering 40+ production modules across multi-tenant
        platforms.
      </WikiParagraph>
    </>
  );
}
