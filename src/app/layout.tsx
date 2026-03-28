import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SchemaOrg } from "@/components/layout/SchemaOrg";

const BASE_URL = "https://tripleoutputdcpowersupply.com";

// ✅ Full SEO metadata for the entire site
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Triple Output DC Power Supply | Precision Lab Instruments",

  description:
    "Precision power solutions and expert insights for modern electronics labs, R&D professionals, and automated testing environments.",
  keywords: [
    "triple output DC power supply",
    "programmable bench power supply",
    "linear power supply",
    "lab bench power supply",
    "etm series power supply",
    "triple output power supply",
    "SCPI power supply",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Triple Output DC Power Supply",
    title: "Triple Output DC Power Supply | Precision Lab Instruments",
    description:
      "Precision power solutions for modern electronics labs, R&D professionals, and automated testing environments.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Triple Output DC Power Supply — eTM Series",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Triple Output DC Power Supply | Precision Lab Instruments",
    description:
      "Precision power solutions for modern electronics labs, R&D professionals, and automated testing environments.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased min-h-screen flex flex-col selection:bg-lab-accent/30 selection:text-white`}>
        <SchemaOrg />
        <NavBar />
        <Breadcrumbs />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

