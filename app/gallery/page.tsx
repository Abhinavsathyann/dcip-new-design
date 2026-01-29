"use client";

import React from "react";
import { GallerySection } from "@/components/gallery/GalleryGrid";
import { PageHeader } from "@/components/ui/PageHeader";

export default function GalleryPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <PageHeader 
        title="Media Archives" 
        subtitle="Exploring the legacy of service through the lens."
        className="mb-0" 
      />
      {/* The GallerySection contains the specific grid and title requested */}
      <GallerySection />
    </main>
  );
}