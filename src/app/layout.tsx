import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marina Franswa — Frontend Developer",
  description: "Frontend Developer specializing in React.js, Next.js & TypeScript. Building beautiful, performant web experiences.",
  keywords: ["Frontend Developer", "React", "Next.js", "TypeScript", "Alexandria", "Egypt"],
  authors: [{ name: "Marina Franswa" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
