import { HeaderBrandButton } from "./HeaderBrandButton";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { WikiSearch } from "./WikiSearch";

export function WikiHeader() {
  return (
    <header className="sticky top-0 z-[100] flex items-center justify-between gap-4 border-b border-[var(--wiki-border)] bg-[var(--wiki-surface)] px-6 py-2 max-md:flex-wrap max-md:items-start max-md:gap-2 max-md:px-3.5">
      <HeaderBrandButton />
      <WikiSearch />
      <ThemeSwitcher />
    </header>
  );
}
