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

const SITE_URL = "https://abovecapture.com";
const DESCRIPTION =
  "FAA Part 107 certified drone photography and aerial video for real estate, land, ranches, construction and roof inspections across North Central Texas. Listing-ready files in 24–48 hours.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "AboveCapture | Drone Photography & Video — North Central Texas",
  description: DESCRIPTION,
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "AboveCapture — Aerial Photography & Video",
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "AboveCapture",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "AboveCapture — aerial photography & video across North Central Texas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AboveCapture — Aerial Photography & Video",
    description: DESCRIPTION,
    images: ["/og.jpg"],
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
