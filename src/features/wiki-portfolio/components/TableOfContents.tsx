"use client";

import { TOC_ITEMS } from "@/lib/portfolio-data";
import { scrollToElement } from "@/lib/dom/scroll";

type TableOfContentsProps = {
  onToggle: () => void;
  visible: boolean;
};

export function TableOfContents({ onToggle, visible }: TableOfContentsProps) {
  return (
    <div className="mb-[18px] inline-block min-w-60 border border-[var(--wiki-border)] bg-[var(--wiki-page-bg)] px-4 py-2.5">
      <div className="mb-1.5 flex justify-center gap-2 text-center text-sm font-bold">
        <span>Contents</span>
        <button
          className="cursor-pointer text-[12.5px] font-normal text-[var(--wiki-link)]"
          onClick={onToggle}
          type="button"
        >
          [{visible ? "hide" : "show"}]
        </button>
      </div>
      {visible && (
        <ul className="list-none p-0">
          {TOC_ITEMS.map((item) => (
            <li key={item.id} className={`py-px ${item.sub ? "pl-5" : ""}`}>
              <a
                className="text-[13px] text-[var(--wiki-link)] no-underline hover:underline"
                href={`#${item.id}`}
                onClick={(event) => {
                  event.preventDefault();
                  scrollToElement(item.id);
                }}
              >
                <span className="inline-block min-w-7 text-[var(--wiki-text)]">
                  {item.num}
                </span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
