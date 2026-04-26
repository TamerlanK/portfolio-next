"use client";

import { useScrollTopVisibility } from "@/hooks/useScrollTopVisibility";

import { ArticleChrome } from "./components/ArticleChrome";
import { ScrollToTopButton } from "./components/ScrollToTopButton";
import { WikiArticle } from "./components/WikiArticle";
import { WikiHeader } from "./components/WikiHeader";
import { useWikiTheme } from "./hooks";

export function WikiPortfolioPage() {
  const showScrollTop = useScrollTopVisibility();
  const { setTheme, theme } = useWikiTheme();

  return (
    <div className="min-h-screen bg-[var(--wiki-page-bg)] text-sm leading-[1.6] text-[var(--wiki-text)] transition-colors duration-150">
      <WikiHeader onThemeChange={setTheme} theme={theme} />
      <ArticleChrome>
        <WikiArticle />
      </ArticleChrome>
      <footer className="mx-auto max-w-[1100px] px-7 py-4 text-center text-xs leading-[1.7] text-[var(--wiki-muted-text)]">
        &copy; 2026 Tamerlan Kangarli. All rights reserved.
      </footer>
      <ScrollToTopButton visible={showScrollTop} />
    </div>
  );
}
