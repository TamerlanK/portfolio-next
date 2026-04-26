"use client";

import { useEffect, useState } from "react";

import { WIKI_THEME_STORAGE_KEY } from "./constants";
import type { WikiTheme } from "./types";

function isWikiTheme(value: string | null): value is WikiTheme {
  return value === "dark" || value === "light";
}

function getPreferredTheme(): WikiTheme {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = window.localStorage.getItem(WIKI_THEME_STORAGE_KEY);
  if (isWikiTheme(storedTheme)) {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function useWikiTheme() {
  const [theme, setTheme] = useState<WikiTheme>("light");
  const [hasLoadedPreference, setHasLoadedPreference] = useState(false);

  useEffect(() => {
    setTheme(getPreferredTheme());
    setHasLoadedPreference(true);
  }, []);

  useEffect(() => {
    if (!hasLoadedPreference) {
      return;
    }

    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(WIKI_THEME_STORAGE_KEY, theme);
  }, [hasLoadedPreference, theme]);

  return { setTheme, theme };
}
