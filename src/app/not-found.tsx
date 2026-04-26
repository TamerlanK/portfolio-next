import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--wiki-page-bg)] px-6 text-[var(--wiki-text)]">
      <section className="max-w-xl border border-[var(--wiki-border)] bg-[var(--wiki-surface)] p-6 text-center shadow-[0_2px_8px_var(--wiki-shadow)]">
        <p className="text-xs font-bold uppercase tracking-[0.08em] text-[var(--wiki-muted-text)]">
          404
        </p>
        <h1 className="mt-2 font-[family:var(--wiki-serif)] text-2xl font-normal">
          Article not found
        </h1>
        <p className="mt-3 text-sm text-[var(--wiki-muted-text)]">
          The requested WikiPortfolio article does not exist.
        </p>
        <Link
          className="mt-5 inline-flex rounded-[2px] border border-[var(--wiki-border-strong)] bg-linear-to-b from-[var(--wiki-control-bg)] to-[var(--wiki-control-bg-end)] px-3 py-1.5 text-sm font-bold text-[var(--wiki-link)] no-underline hover:bg-[var(--wiki-control-hover)] hover:underline"
          href="/"
        >
          Return to article
        </Link>
      </section>
    </main>
  );
}
