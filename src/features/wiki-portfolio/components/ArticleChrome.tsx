import type { ReactNode } from "react"

import { WikiLink } from "@/components/wiki/WikiLink"
import { PERSON } from "../content"

type ArticleChromeProps = {
  children: ReactNode
}

export function ArticleChrome({ children }: ArticleChromeProps) {
  return (
    <main className="mx-auto min-h-screen max-w-[1100px] border border-t-0 border-[var(--wiki-border)] bg-[var(--wiki-surface)] px-7 pb-10 pt-5 max-md:px-3.5 max-md:pb-[30px] max-md:pt-3.5">
      <h1 className="border-b border-[var(--wiki-border-strong)] pb-1 font-[family:var(--wiki-serif)] text-3xl font-normal leading-[1.2]">
        {PERSON.name}
      </h1>

      <div className="mb-4 mt-2 flex items-center gap-2 rounded-[2px] border border-[var(--wiki-success-border)] bg-[var(--wiki-success-bg)] px-3.5 py-2 text-[13px]">
        <span className="text-lg">&#10003;</span>
        This article is about the software developer from Azerbaijan. Content is
        maintained and verified by the subject.
      </div>

      <div className="mb-3.5 pl-6 text-[13px] italic text-[var(--wiki-muted-text)]">
        This article is about the Frontend Engineer. For the historical Kangarli
        district, see{" "}
        <WikiLink href="https://en.wikipedia.org/wiki/Kangarli_District">
          Kangarli (disambiguation)
        </WikiLink>
        .
      </div>

      {children}
    </main>
  )
}
