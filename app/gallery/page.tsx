"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { FadeIn, TextReveal } from "@/components/ui/Motion";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export default function GalleryPage() {
  return (
    <main className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <Container>
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="text-indigo-600 font-bold tracking-widest uppercase text-xs mb-4">Archives</div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-slate-900 mb-6">
            <TextReveal text="Moments in Time" className="justify-center" />
          </h1>
          <p className="text-slate-500 text-lg">
            A visual record of our interns in action, serving the district and its people.
          </p>
        </div>
        
        <FadeIn delay={0.3}>
          <GalleryGrid />
        </FadeIn>
      </Container>
    </main>
  );
}