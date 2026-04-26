"use client";

import { useEffect, useState } from "react";

export function LastModified() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const timer = window.setInterval(() => setNow(new Date()), 60000);
    return () => window.clearInterval(timer);
  }, []);

  if (!now) {
    return (
      <div className="mt-5 border-t border-[var(--wiki-border)] pt-2 text-[12.5px] text-[var(--wiki-muted-text)]">
        This page was last edited recently.
      </div>
    );
  }

  const date = now.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="mt-5 border-t border-[var(--wiki-border)] pt-2 text-[12.5px] text-[var(--wiki-muted-text)]">
      This page was last edited on {date}, at {time}.
    </div>
  );
}
