"use client";

import type { WikiTheme } from "../types";
import { scrollToPageTop } from "@/lib/dom/scroll";
import { WikiSearch } from "./WikiSearch";

type WikiHeaderProps = {
  onThemeChange: (theme: WikiTheme) => void;
  theme: WikiTheme;
};

export function WikiHeader({ onThemeChange, theme }: WikiHeaderProps) {
  return (
    <header className="sticky top-0 z-[100] flex items-center justify-between gap-4 border-b border-[var(--wiki-border)] bg-[var(--wiki-surface)] px-6 py-2 max-md:flex-wrap max-md:items-start max-md:gap-2 max-md:px-3.5">
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

      <WikiSearch />

      <div className="flex shrink-0 flex-wrap items-center justify-end gap-3 text-xs max-md:justify-start">
        <div
          aria-label="Appearance"
          className="flex items-center overflow-hidden rounded-[2px] border border-[var(--wiki-border-strong)] bg-[var(--wiki-page-bg)]"
          role="group"
        >
          {(["light", "dark"] as const).map((themeOption) => (
            <button
              aria-pressed={theme === themeOption}
              className={`min-w-14 cursor-pointer border-r border-[var(--wiki-border-strong)] px-2 py-1 text-center text-[12px] text-[var(--wiki-link)] last:border-r-0 hover:bg-[var(--wiki-control-hover)] hover:underline ${
                theme === themeOption
                  ? "bg-[var(--wiki-surface)] font-bold text-[var(--wiki-text)] hover:bg-[var(--wiki-surface)] hover:no-underline"
                  : ""
              }`}
              key={themeOption}
              onClick={() => onThemeChange(themeOption)}
              type="button"
            >
              {themeOption === "light" ? "Light" : "Dark"}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
