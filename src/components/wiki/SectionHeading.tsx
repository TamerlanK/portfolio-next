import type { ReactNode } from "react";

type SectionHeadingProps = {
  children: ReactNode;
  id: string;
  level?: 2 | 3;
};

export function SectionHeading({
  children,
  id,
  level = 2,
}: SectionHeadingProps) {
  const Tag = level === 2 ? "h2" : "h3";

  return (
    <Tag
      className={`scroll-mt-24 ${
        level === 2
          ? "mb-2.5 mt-7 flex items-baseline gap-2 border-b border-[var(--wiki-border-strong)] pb-0.5 text-[22px] font-normal"
          : "mb-1.5 mt-[18px] flex items-baseline gap-2 text-[17px] font-bold"
      } font-[family:var(--wiki-serif)]`}
      id={id}
    >
      {children}
      <span className="ml-1 text-xs font-normal text-[var(--wiki-muted-text)]">
        [edit]
      </span>
    </Tag>
  );
}
