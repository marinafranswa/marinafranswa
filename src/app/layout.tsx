import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";
const brice = localFont({
  src: "../../public/fonts/Brice-Regular.otf",
  variable: "--font-brice",
});





export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("font-sans", brice.variable)}>
      <body >{children}</body>
    </html>
  );
}
