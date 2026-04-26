import { WikiLink } from "@/components/wiki/WikiLink";

export function ArticleIntro() {
  return (
    <>
      <p className="mb-2.5 text-sm leading-[1.65] text-[var(--wiki-text)]">
        <b>Tamerlan Kangarli</b> (born 2002) is an{" "}
        <WikiLink>Azerbaijani</WikiLink>{" "}
        <WikiLink>Frontend Engineer</WikiLink> based in{" "}
        <WikiLink>Baku, Azerbaijan</WikiLink>. He is currently open to frontend
        developer opportunities and has recently worked at{" "}
        <WikiLink>Andersen Lab</WikiLink>, where he mainly engineered scalable
        user interfaces for logistics applications while gaining practical
        exposure to backend workflows with <WikiLink>Node.js</WikiLink> and{" "}
        <WikiLink>NestJS</WikiLink>.
      </p>
      <p className="mb-2.5 text-sm leading-[1.65] text-[var(--wiki-text)]">
        Kangarli has over three years of professional experience building
        production-grade web applications, mainly with <WikiLink>React</WikiLink>{" "}
        and <WikiLink>TypeScript</WikiLink>. He is known for architecting
        large-scale frontend systems, designing reusable component libraries,
        and driving significant performance improvements across multiple
        enterprise platforms.
      </p>
    </>
  );
}
