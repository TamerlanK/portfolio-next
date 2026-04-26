"use client";

import { useEffect, useRef, useState } from "react";
import type { PDFDocumentLoadingTask } from "pdfjs-dist/types/src/pdf";

type PdfDocumentViewerProps = {
  src: string;
};

export function PdfDocumentViewer({ src }: PdfDocumentViewerProps) {
  const pagesRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState("Loading CV...");

  useEffect(() => {
    let cancelled = false;
    const container = pagesRef.current;

    if (!container) {
      return;
    }

    const pagesContainer: HTMLDivElement = container;

    pagesContainer.replaceChildren();

    async function renderPdf() {
      let loadingTask: PDFDocumentLoadingTask | undefined;

      try {
        const pdfjs = await import("pdfjs-dist/legacy/build/pdf.mjs");
        pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";
        loadingTask = pdfjs.getDocument(src);
        const pdf = await loadingTask.promise;

        if (cancelled) {
          void loadingTask.destroy();
          return;
        }

        setStatus(
          `Rendering ${pdf.numPages} page${pdf.numPages === 1 ? "" : "s"}...`,
        );

        for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
          if (cancelled) {
            return;
          }

          const page = await pdf.getPage(pageNumber);
          const viewport = page.getViewport({ scale: 1 });
          const availableWidth = Math.max(pagesContainer.clientWidth - 24, 320);
          const scale = Math.min(availableWidth / viewport.width, 1.7);
          const scaledViewport = page.getViewport({ scale });
          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");

          if (!context) {
            continue;
          }

          canvas.width = Math.floor(scaledViewport.width);
          canvas.height = Math.floor(scaledViewport.height);
          canvas.style.width = `${Math.floor(scaledViewport.width)}px`;
          canvas.style.height = `${Math.floor(scaledViewport.height)}px`;
          canvas.className = "block max-w-full";

          const pageWrapper = document.createElement("div");
          pageWrapper.className =
            "max-w-full border border-[var(--wiki-border-strong)] bg-white p-2 shadow-[0_1px_4px_var(--wiki-shadow)]";
          pageWrapper.append(canvas);
          pagesContainer.append(pageWrapper);

          await page.render({
            canvas,
            canvasContext: context,
            viewport: scaledViewport,
          }).promise;
        }

        if (!cancelled) {
          setStatus("");
        }
      } catch {
        if (!cancelled) {
          setStatus("CV preview could not be loaded. Please use Download CV.");
        }
      } finally {
        if (cancelled) {
          void loadingTask?.destroy();
        }
      }
    }

    void renderPdf();

    return () => {
      cancelled = true;
      pagesContainer.replaceChildren();
    };
  }, [src]);

  return (
    <div className="min-h-0 flex-1 overflow-y-auto bg-[var(--wiki-subtle-bg)] p-3">
      {status && (
        <div className="mb-3 border border-[var(--wiki-border)] bg-[var(--wiki-surface)] px-3 py-2 text-center text-[13px] text-[var(--wiki-muted-text)]">
          {status}
        </div>
      )}
      <div className="flex flex-col items-center gap-3" ref={pagesRef} />
    </div>
  );
}
