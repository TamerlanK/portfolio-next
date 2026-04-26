import { ArticleChrome } from "./components/ArticleChrome";
import { ScrollToTopButton } from "./components/ScrollToTopButton";
import { WikiArticle } from "./components/WikiArticle";
import { WikiHeader } from "./components/WikiHeader";

export function WikiPortfolioPage() {
  return (
    <div className="min-h-screen bg-[var(--wiki-page-bg)] text-sm leading-[1.6] text-[var(--wiki-text)] transition-colors duration-150">
      <WikiHeader />
      <ArticleChrome>
        <WikiArticle />
      </ArticleChrome>
      <footer className="mx-auto max-w-[1100px] px-7 py-4 text-center text-xs leading-[1.7] text-[var(--wiki-muted-text)]">
        &copy; 2026 Tamerlan Kangarli. All rights reserved.
      </footer>
      <ScrollToTopButton />
    </div>
  );
}
