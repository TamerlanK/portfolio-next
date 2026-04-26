"use client";

import { scrollToPageTop } from "@/lib/dom/scroll";

export function HeaderBrandButton() {
  return (
    <button
      className="flex min-w-0 shrink-0 cursor-pointer items-center gap-3 text-left"
      onClick={scrollToPageTop}
      title="Back to top"
      type="button"
    >
      <div className="flex h-[50px] w-[50px] items-center justify-center">
        <span className="text-[38px] grayscale">&#127760;</span>
      </div>
      <div className="flex flex-col">
        <span className="font-[family:var(--wiki-serif)] text-[19px] leading-[1.1] text-[var(--wiki-text)]">
          Frontend Engineer
        </span>
        <span className="text-[10.5px] italic tracking-[0.02em] text-[var(--wiki-muted-text)]">
          Building clean systems
        </span>
      </div>
    </button>
  );
}
