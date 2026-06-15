import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { ReactNode } from "react";

import { SignalStrip } from "@/components/SignalStrip";
import { SystemsHeader } from "@/components/SystemsHeader";
import { profile } from "@/data/profile";

import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || profile.siteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dhruv Toprani",
    template: "%s | Dhruv Toprani"
  },
  description:
    "Portfolio of Dhruv Toprani - product, technical program, operations, and engineering work focused on measurable improvement, sustainability, and community impact.",
  keywords: [
    "Dhruv Toprani",
    "computer engineering",
    "AI systems",
    "robotics",
    "sustainability",
    "technical program management",
    "product management",
    "operations",
    "continuous improvement"
  ],
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: "/",
    title: profile.name,
    description:
      "Product, program, operations, and engineering work focused on measurable improvement and meaningful impact.",
    siteName: profile.name,
    images: [
      {
        url: "/work/atlasfx.png",
        alt: "Dhruv Toprani portfolio - product, program, operations, and technical work"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: profile.name,
    description:
      "Product, program, operations, and engineering work focused on measurable improvement and meaningful impact.",
    images: ["/work/atlasfx.png"]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0B0B"
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="font-sans antialiased">
        <SignalStrip />
        <SystemsHeader />
        {children}
      </body>
    </html>
  );
}
