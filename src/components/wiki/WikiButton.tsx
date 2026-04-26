import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

const WIKI_BUTTON_CLASS =
  "inline-flex cursor-pointer items-center rounded-[2px] border border-[var(--wiki-border-strong)] bg-linear-to-b from-[var(--wiki-control-bg)] to-[var(--wiki-control-bg-end)] px-2.5 py-1 text-[12.5px] font-bold text-[var(--wiki-link)] no-underline hover:bg-[var(--wiki-control-hover)] hover:underline";

type WikiButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

type WikiAnchorButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

export function WikiButton({
  children,
  className = "",
  type = "button",
  ...props
}: WikiButtonProps) {
  return (
    <button
      className={`${WIKI_BUTTON_CLASS} ${className}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}

export function WikiAnchorButton({
  children,
  className = "",
  ...props
}: WikiAnchorButtonProps) {
  return (
    <a className={`${WIKI_BUTTON_CLASS} ${className}`} {...props}>
      {children}
    </a>
  );
}
