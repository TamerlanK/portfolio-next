"use client";

import dynamic from "next/dynamic";
import { useEffect, useId, useState } from "react";

import { WikiAnchorButton, WikiButton } from "@/components/wiki/WikiButton";

import { CV_DOWNLOAD_NAME, CV_FILE } from "../constants";

const PdfDocumentViewer = dynamic(
  () =>
    import("./PdfDocumentViewer").then((module) => module.PdfDocumentViewer),
  {
    loading: () => (
      <div className="min-h-0 flex-1 bg-[var(--wiki-subtle-bg)] p-3">
        <div className="border border-[var(--wiki-border)] bg-[var(--wiki-surface)] px-3 py-2 text-center text-[13px] text-[var(--wiki-muted-text)]">
          Loading CV preview...
        </div>
      </div>
    ),
    ssr: false,
  },
);

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
        <WikiButton onClick={() => setIsViewerOpen(true)}>
          Review CV
        </WikiButton>
        <WikiAnchorButton download={CV_DOWNLOAD_NAME} href={CV_FILE}>
          {compact ? "Download" : "Download CV"}
        </WikiAnchorButton>
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
              <WikiButton
                className="font-normal text-[var(--wiki-text)] hover:no-underline"
                onClick={() => setIsViewerOpen(false)}
              >
                Close
              </WikiButton>
            </div>
            <PdfDocumentViewer src={CV_FILE} />
          </div>
        </div>
      )}
    </>
  );
}
