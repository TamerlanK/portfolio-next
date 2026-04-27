type PdfDocumentViewerProps = {
  src: string;
};

export function PdfDocumentViewer({ src }: PdfDocumentViewerProps) {
  const viewerSrc = `${src}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`;

  return (
    <div className="min-h-0 flex-1 bg-[var(--wiki-subtle-bg)]">
      <iframe
        className="h-full min-h-[70vh] w-full bg-white"
        src={viewerSrc}
        title="Tamerlan Kangarli CV PDF preview"
      />
    </div>
  );
}
