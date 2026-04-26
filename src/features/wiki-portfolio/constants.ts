import { TOC_ITEMS } from "./content";

export const CV_FILE = "/TamerlanKangarliCV.pdf";
export const CV_DOWNLOAD_NAME = "TamerlanKangarliCV.pdf";
export const WIKI_THEME_STORAGE_KEY = "wiki-portfolio-theme";

export const HR_SUGGESTIONS = TOC_ITEMS.filter((item) =>
  ["career", "skills", "projects"].includes(item.id),
);
