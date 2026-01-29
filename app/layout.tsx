import React from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { defaultMetadata } from "./metadata";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";

// Configure Fonts
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Government Organization Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GovernmentOrganization",
    "name": "District Collector’s Internship Programme Malappuram",
    "alternateName": "DCIP Malappuram",
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/logo.svg`,
    "description": siteConfig.description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Malappuram",
      "addressRegion": "Kerala",
      "postalCode": "676505",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "dcip@malappuram.info",
      "contactType": "public service"
    },
    "parentOrganization": {
      "@type": "GovernmentOrganization",
      "name": "District Administration Malappuram"
    }
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}