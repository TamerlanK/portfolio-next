"use client";

import { useWikiTheme } from "../hooks";
import type { WikiTheme } from "../types";

const THEME_OPTIONS: WikiTheme[] = ["light", "dark"];

export function ThemeSwitcher() {
  const { hasLoadedPreference, setTheme, theme } = useWikiTheme();

  return (
    <div className="flex shrink-0 flex-wrap items-center justify-end gap-3 text-xs max-md:justify-start">
      <div
        aria-label="Appearance"
        className="flex items-center overflow-hidden rounded-[2px] border border-[var(--wiki-border-strong)] bg-[var(--wiki-page-bg)]"
        role="group"
      >
        {THEME_OPTIONS.map((themeOption) => (
          <button
            aria-pressed={hasLoadedPreference && theme === themeOption}
            className={`min-w-14 cursor-pointer border-r border-[var(--wiki-border-strong)] px-2 py-1 text-center text-[12px] text-[var(--wiki-link)] last:border-r-0 hover:bg-[var(--wiki-control-hover)] hover:underline ${
              hasLoadedPreference && theme === themeOption
                ? "bg-[var(--wiki-surface)] font-bold text-[var(--wiki-text)] hover:bg-[var(--wiki-surface)] hover:no-underline"
                : ""
            }`}
            key={themeOption}
            onClick={() => setTheme(themeOption)}
            type="button"
          >
            {themeOption === "light" ? "Light" : "Dark"}
          </button>
        ))}
      </div>
    </div>
  );
}
