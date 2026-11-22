import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Geist,
  Ma_Shan_Zheng,
  Noto_Serif_SC,
} from "next/font/google";
import { profile } from "@/lib/content";
import "./globals.css";

const sans = Geist({ variable: "--font-sans", subsets: ["latin"] });

const latin = Cormorant_Garamond({
  variable: "--font-latin",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const brush = Ma_Shan_Zheng({
  variable: "--font-brush",
  subsets: ["latin"],
  weight: "400",
  preload: false,
});

const serifSc = Noto_Serif_SC({
  variable: "--font-serif-sc",
  subsets: ["latin"],
  weight: ["400", "600"],
  preload: false,
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${latin.variable} ${brush.variable} ${serifSc.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
