import React from "react";
import { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Gallery & Media",
  description: "Explore moments, field activities, and community engagements from the District Collector’s Internship Programme.",
  openGraph: {
    title: "Gallery | DCIP Malappuram",
    description: "Moments and activities from the internship programme.",
    url: `${siteConfig.url}/gallery`,
    images: [
      {
        url: `${siteConfig.url}/og-gallery.jpg`, // Placeholder
        width: 1200,
        height: 630,
        alt: "DCIP Malappuram Gallery",
      },
    ],
  },
};

export default function GalleryPage() {
  return (
    <main>
      <PageHeader 
        title="Gallery & Media" 
        subtitle="Moments and activities from the District Collector’s Internship Programme, Malappuram."
      />
      
      <GalleryGrid />
      
      <Testimonials className="border-t border-slate-200" />
    </main>
  );
}