"use client";

import { useEffect, useId, useState } from "react";

import { CV_DOWNLOAD_NAME, CV_FILE } from "../constants";
import { PdfDocumentViewer } from "./PdfDocumentViewer";

type CvActionsProps = {
  compact?: boolean;
};

export function CvActions({ compact = false }: CvActionsProps) {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!isViewerOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsViewerOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isViewerOpen]);

  return (
    <>
      <div className="flex flex-wrap gap-2">
        <button
          className="inline-flex cursor-pointer items-center rounded-[2px] border border-[var(--wiki-border-strong)] bg-linear-to-b from-[var(--wiki-control-bg)] to-[var(--wiki-control-bg-end)] px-2.5 py-1 text-[12.5px] font-bold text-[var(--wiki-link)] no-underline hover:bg-[var(--wiki-control-hover)] hover:underline"
          onClick={() => setIsViewerOpen(true)}
          type="button"
        >
          Review CV
        </button>
        <a
          className="inline-flex cursor-pointer items-center rounded-[2px] border border-[var(--wiki-border-strong)] bg-linear-to-b from-[var(--wiki-control-bg)] to-[var(--wiki-control-bg-end)] px-2.5 py-1 text-[12.5px] font-bold text-[var(--wiki-link)] no-underline hover:bg-[var(--wiki-control-hover)] hover:underline"
          download={CV_DOWNLOAD_NAME}
          href={CV_FILE}
        >
          {compact ? "Download" : "Download CV"}
        </a>
      </div>

      {isViewerOpen && (
        <div
          aria-labelledby={titleId}
          aria-modal="true"
          className="fixed inset-0 z-[300] flex items-center justify-center bg-black/45 px-4 py-6"
          onClick={() => setIsViewerOpen(false)}
          role="dialog"
        >
          <div
            className="flex h-full max-h-[900px] w-full max-w-[900px] flex-col border border-[var(--wiki-border-strong)] bg-[var(--wiki-surface)] shadow-[0_8px_30px_var(--wiki-dialog-shadow)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[var(--wiki-border)] bg-[var(--wiki-page-bg)] px-3 py-2">
              <div
                className="font-[family:var(--wiki-serif)] text-[18px] font-bold text-[var(--wiki-text)]"
                id={titleId}
              >
                Tamerlan Kangarli CV
              </div>
              <button
                className="cursor-pointer rounded-[2px] border border-[var(--wiki-border-strong)] bg-linear-to-b from-[var(--wiki-control-bg)] to-[var(--wiki-control-bg-end)] px-2.5 py-1 text-[12.5px] text-[var(--wiki-text)] hover:bg-[var(--wiki-control-hover)]"
                onClick={() => setIsViewerOpen(false)}
                type="button"
              >
                Close
              </button>
            </div>
            <PdfDocumentViewer src={CV_FILE} />
          </div>
        </div>
      )}
    </>
  );
}
