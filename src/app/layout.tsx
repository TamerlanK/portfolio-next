import type { Metadata } from "next";
import { Lato } from "next/font/google";

import { ThemeScript } from "./theme-script";

import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Tamerlan Kangarli | Wiki Portfolio",
  description:
    "Wikipedia-inspired portfolio website for Tamerlan Kangarli, recreated with Next.js, TypeScript, and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lato.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
