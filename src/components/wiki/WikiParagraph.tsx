import type { ReactNode } from "react";

type WikiParagraphProps = {
  children: ReactNode;
};

export function WikiParagraph({ children }: WikiParagraphProps) {
  return (
    <p className="mb-2.5 text-sm leading-[1.65] text-[var(--wiki-text)]">
      {children}
    </p>
  );
}
