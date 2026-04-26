import type { ReactNode } from "react";

type WikiInfoCardProps = {
  children: ReactNode;
  label: string;
};

export function WikiInfoCard({ children, label }: WikiInfoCardProps) {
  return (
    <div className="border border-[var(--wiki-border)] bg-[var(--wiki-page-bg)] px-3.5 py-2.5 text-[13px]">
      <div className="mb-0.5 text-[11px] font-bold uppercase tracking-[0.04em] text-[var(--wiki-muted-text)]">
        {label}
      </div>
      {children}
    </div>
  );
}
