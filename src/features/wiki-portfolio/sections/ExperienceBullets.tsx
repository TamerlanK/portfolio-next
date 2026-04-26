"use client";

import { useState } from "react";

type ExperienceBulletsProps = {
  bullets: string[];
};

export function ExperienceBullets({ bullets }: ExperienceBulletsProps) {
  const [expanded, setExpanded] = useState(false);
  const visibleBullets = expanded ? bullets : bullets.slice(0, 3);

  return (
    <div>
      <ul className="my-1.5 list-disc pl-6 text-[13.5px] leading-[1.7] [&>li]:mb-1">
        {visibleBullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      {bullets.length > 3 && (
        <button
          className="mt-0.5 inline-block cursor-pointer text-[12.5px] text-[var(--wiki-link)] hover:underline"
          onClick={() => setExpanded((value) => !value)}
          type="button"
        >
          [{expanded ? "show less" : `show ${bullets.length - 3} more`}]
        </button>
      )}
    </div>
  );
}
