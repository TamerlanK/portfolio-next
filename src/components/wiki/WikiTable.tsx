import type { ReactNode, TableHTMLAttributes, TdHTMLAttributes } from "react";

type WikiTableProps = TableHTMLAttributes<HTMLTableElement> & {
  children: ReactNode;
};

type WikiCellProps = TdHTMLAttributes<HTMLTableCellElement> & {
  as?: "td" | "th";
  children: ReactNode;
  header?: boolean;
};

export function WikiTable({ children, className = "", ...props }: WikiTableProps) {
  return (
    <table
      className={`my-2.5 w-full border-collapse text-[13.5px] ${className}`}
      {...props}
    >
      {children}
    </table>
  );
}

export function WikiCell({
  as = "td",
  children,
  className = "",
  header = false,
  ...props
}: WikiCellProps) {
  const Tag = as;
  const headerClass = header
    ? "bg-[var(--wiki-subtle-bg)] font-bold"
    : "";

  return (
    <Tag
      className={`border border-[var(--wiki-border)] px-2.5 py-1.5 text-left align-top ${headerClass} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
