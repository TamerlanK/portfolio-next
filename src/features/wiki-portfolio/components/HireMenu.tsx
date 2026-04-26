"use client";

import { useEffect, useRef, useState } from "react";

import { PERSON } from "@/lib/portfolio-data";

export function HireMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!PERSON.isOpenToWork) {
    return null;
  }

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        aria-expanded={isOpen}
        className="inline-flex cursor-pointer items-center rounded-[2px] border border-[var(--wiki-border-strong)] bg-linear-to-b from-[var(--wiki-control-bg)] to-[var(--wiki-control-bg-end)] px-2 py-0.5 text-[12.5px] font-bold text-[var(--wiki-link)] hover:bg-[var(--wiki-control-hover)] hover:underline"
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        Hire me
      </button>
      {isOpen && (
        <div className="absolute left-0 top-full z-40 mt-1 min-w-28 border border-[var(--wiki-border-strong)] bg-[var(--wiki-surface)] shadow-[0_2px_8px_var(--wiki-shadow)]">
          <a
            className="block px-2.5 py-1.5 text-[12.5px] text-[var(--wiki-link)] no-underline hover:bg-[var(--wiki-control-hover)] hover:underline"
            href={`https://${PERSON.linkedin}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            className="block px-2.5 py-1.5 text-[12.5px] text-[var(--wiki-link)] no-underline hover:bg-[var(--wiki-control-hover)] hover:underline"
            href={`mailto:${PERSON.email}`}
          >
            Email
          </a>
        </div>
      )}
    </div>
  );
}
