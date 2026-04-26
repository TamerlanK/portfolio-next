"use client";

import { useEffect, useRef, useState } from "react";

import { WikiButton } from "@/components/wiki/WikiButton";

import { PERSON } from "../content";

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
      <WikiButton
        aria-expanded={isOpen}
        className="px-2 py-0.5"
        onClick={() => setIsOpen((current) => !current)}
      >
        Hire me
      </WikiButton>
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
