import type { ReactNode } from "react";

type WikiLinkProps = {
  children: ReactNode;
  className?: string;
  href?: string;
};

export function WikiLink({ children, className = "", href }: WikiLinkProps) {
  if (!href) {
    return (
      <strong className={`font-semibold text-[var(--wiki-text)] ${className}`}>
        {children}
      </strong>
    );
  }

  return (
    <a
      className={`text-[var(--wiki-link)] no-underline hover:text-[var(--wiki-link-hover)] hover:underline ${className}`}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}
