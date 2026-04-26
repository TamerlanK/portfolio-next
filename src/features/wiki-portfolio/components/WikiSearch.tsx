"use client"

import { useMemo, useState } from "react"

import { TOC_ITEMS } from "../content"
import { scrollToElement } from "@/lib/dom/scroll"

import { HR_SUGGESTIONS } from "../constants"

export function WikiSearch() {
  const [query, setQuery] = useState("")
  const [showDropdown, setShowDropdown] = useState(false)

  const hasQuery = query.trim().length > 0
  const filteredSections = useMemo(() => {
    if (!hasQuery) {
      return HR_SUGGESTIONS
    }

    return TOC_ITEMS.filter((item) => !item.sub).filter((item) =>
      item.label.toLowerCase().includes(query.toLowerCase()),
    )
  }, [hasQuery, query])

  return (
    <div className="relative flex min-w-[220px] max-w-[420px] flex-1 items-center max-md:order-3 max-md:w-full max-md:max-w-none">
      <input
        className="min-w-0 flex-1 rounded-[2px] border border-[var(--wiki-border-strong)] bg-[var(--wiki-surface)] px-2 py-1 text-[13px] text-[var(--wiki-text)] outline-none placeholder:text-[var(--wiki-muted-text)] focus:border-[var(--wiki-link-hover)]"
        onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
        onChange={(event) => {
          setQuery(event.target.value)
          setShowDropdown(true)
        }}
        onFocus={() => setShowDropdown(true)}
        placeholder="Search this article..."
        type="text"
        value={query}
      />
      <button
        className="ml-1 cursor-pointer rounded-[2px] border border-[var(--wiki-border-strong)] bg-linear-to-b from-[var(--wiki-control-bg)] to-[var(--wiki-control-bg-end)] px-2.5 py-1 text-[13px] text-[var(--wiki-text)] hover:bg-[var(--wiki-control-hover)]"
        title="Search"
        type="button"
      >
        &#128269;
      </button>
      {showDropdown && filteredSections.length > 0 && (
        <div className="absolute left-0 top-full z-50 w-full border border-[var(--wiki-border-strong)] bg-[var(--wiki-surface)] shadow-[0_2px_8px_var(--wiki-shadow)]">
          {!hasQuery && (
            <div className="border-b border-[var(--wiki-border)] bg-[var(--wiki-page-bg)] px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.04em] text-[var(--wiki-muted-text)]">
              Recruiters may be interested in
            </div>
          )}
          {filteredSections.map((section) => (
            <button
              className="block w-full cursor-pointer px-2.5 py-1.5 text-left text-[13px] text-[var(--wiki-link)] hover:bg-[var(--wiki-control-hover)]"
              key={section.id}
              onMouseDown={() => {
                scrollToElement(section.id)
                setQuery("")
                setShowDropdown(false)
              }}
              type="button"
            >
              {section.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
