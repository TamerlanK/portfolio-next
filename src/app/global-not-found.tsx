"use client"

export default function GlobalNotFound({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen items-center justify-center bg-[var(--wiki-page-bg)] px-6 text-[var(--wiki-text)]">
          <section className="max-w-xl border border-[var(--wiki-border)] bg-[var(--wiki-surface)] p-6 text-center shadow-[0_2px_8px_var(--wiki-shadow)]">
            <h1 className="font-[family:var(--wiki-serif)] text-2xl font-normal">
              Something went wrong
            </h1>
            <p className="mt-3 text-sm text-[var(--wiki-muted-text)]">
              The portfolio could not be rendered. Try reloading the article.
            </p>
            <button
              className="mt-5 cursor-pointer rounded-[2px] border border-[var(--wiki-border-strong)] bg-linear-to-b from-[var(--wiki-control-bg)] to-[var(--wiki-control-bg-end)] px-3 py-1.5 text-sm font-bold text-[var(--wiki-link)] hover:bg-[var(--wiki-control-hover)] hover:underline"
              onClick={reset}
              type="button"
            >
              Reload page
            </button>
          </section>
        </main>
      </body>
    </html>
  )
}
