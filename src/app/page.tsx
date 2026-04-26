import { WikiPortfolioPage } from "@/features/wiki-portfolio/WikiPortfolioPage";

export const dynamic = "force-static";
export const revalidate = false;

export default function Home() {
  return <WikiPortfolioPage />;
}
