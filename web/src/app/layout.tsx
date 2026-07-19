import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grabov Aerial Media | Drone Photography & Video — North Central Texas",
  description:
    "FAA Part 107 certified drone photography and aerial video for real estate, land, ranches, construction and roof inspections across North Central Texas. Listing-ready files in 24–48 hours.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Grabov Aerial Media — Drone Photography & Video",
    description:
      "Aerial photography that makes property sell itself. Real estate, land and ranches across North Central Texas.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
