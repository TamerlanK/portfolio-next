"use client";

import { scrollToPageTop } from "@/lib/dom/scroll";

type ScrollToTopButtonProps = {
  visible: boolean;
};

export function ScrollToTopButton({ visible }: ScrollToTopButtonProps) {
  return (
    <button
      className={`fixed right-7 bottom-7 z-[200] flex h-10 w-10 cursor-pointer items-center justify-center rounded-[2px] border border-[var(--wiki-border-strong)] bg-[var(--wiki-surface)] text-lg text-[var(--wiki-text)] shadow-[0_2px_6px_var(--wiki-shadow)] transition-[opacity,transform,background-color] duration-200 hover:bg-[var(--wiki-control-hover)] ${
        visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      }`}
      onClick={scrollToPageTop}
      title="Back to top"
      type="button"
    >
      &uarr;
    </button>
  );
}
