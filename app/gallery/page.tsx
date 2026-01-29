"use client";

import React from "react";
import { GallerySection } from "@/components/gallery/GalleryGrid";
import { PageHeader } from "@/components/ui/PageHeader";
import { Navbar } from "@/components/layout/Navbar";

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <div className="bg-slate-50 min-h-screen">
        <PageHeader 
          title="Media Archives" 
          subtitle="Exploring the legacy of service through the lens."
          className="mb-0" 
        />
        <GallerySection />
      </div>
    </>
  );
}