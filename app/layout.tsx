import type { Metadata } from "next";
import { Atkinson_Hyperlegible, Lexend, Space_Mono } from "next/font/google";
import "./globals.css";
import { GlobalEffects } from "@/components/GlobalEffects";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});

const atkinson = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-atkinson",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://expressit.example"),
  title: "EXPRESS IT | Learn. Express. Grow.",
  description:
    "A premium youth growth platform helping children, teenagers, parents, and schools build confidence, emotional intelligence, communication skills, and resilience.",
  keywords: [
    "EXPRESS IT",
    "emotional intelligence",
    "student confidence",
    "youth development",
    "parent workshops",
    "school wellbeing",
    "mind gym",
  ],
  openGraph: {
    title: "EXPRESS IT | Learn. Express. Grow.",
    description:
      "A cinematic youth growth platform for emotional intelligence, communication, confidence, and real-world life skills.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lexend.variable} ${atkinson.variable} ${spaceMono.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <GlobalEffects />
        {children}
      </body>
    </html>
  );
}
