"use client";

import { useCallback, useEffect } from "react";

import { WIKI_THEME_STORAGE_KEY } from "./constants";
import type { WikiTheme } from "./types";

function isWikiTheme(value: string | null | undefined): value is WikiTheme {
  return value === "dark" || value === "light";
}

function getStoredTheme(): WikiTheme | null {
  try {
    const storedTheme = window.localStorage.getItem(WIKI_THEME_STORAGE_KEY);
    return isWikiTheme(storedTheme) ? storedTheme : null;
  } catch {
    return null;
  }
}

function getPreferredTheme(): WikiTheme {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = getStoredTheme();
  if (storedTheme) {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyWikiTheme(theme: WikiTheme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  document
    .querySelectorAll<HTMLButtonElement>("[data-theme-option]")
    .forEach((button) => {
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.themeOption === theme),
      );
    });

  try {
    window.localStorage.setItem(WIKI_THEME_STORAGE_KEY, theme);
  } catch {
    // Keep the visual update even when storage is blocked.
  }
}

export function useWikiTheme() {
  const setTheme = useCallback((nextTheme: WikiTheme) => {
    applyWikiTheme(nextTheme);
  }, []);

  useEffect(() => {
    applyWikiTheme(getPreferredTheme());

    const handleStorage = (event: StorageEvent) => {
      if (event.key !== WIKI_THEME_STORAGE_KEY) {
        return;
      }

      const nextTheme = isWikiTheme(event.newValue)
        ? event.newValue
        : getPreferredTheme();

      applyWikiTheme(nextTheme);
    };

    window.addEventListener("storage", handleStorage);

    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return { setTheme };
}
