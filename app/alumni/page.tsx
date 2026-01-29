"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { FadeIn, StaggerContainer } from "@/components/ui/Motion";
import { clsx } from "clsx";

// Types
type Alumni = {
  id: string;
  name: string;
  image: string;
};

// Batches Configuration
const BATCH_NAMES = ["Batch 1", "Batch 2", "Batch 3", "Batch 4", "Batch 5", "Batch 6"];

// Shared Assets for Demo (Using consistent high-quality portraits)
const PROFILE_IMAGES = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&auto=format&fit=crop"
];

// Names Pool
const NAMES = [
  "Adithya Narayan", "Sneha P.", "Rahul Vijay", "Anjali Krishna", 
  "Mohammed Fayiz", "Lakshmi S.", "Arjun K.", "Fathima R.",
  "Vishnu Prasad", "Kavya Menon", "Siddharth R.", "Meera N."
];

// Static Data Generation for Batches
const ALUMNI_DATA: Record<string, Alumni[]> = {};

BATCH_NAMES.forEach((batch, batchIndex) => {
  // Generate 8 profiles per batch, shifting the starting index to create variety
  ALUMNI_DATA[batch] = Array.from({ length: 8 }).map((_, i) => ({
    id: `${batch}-${i}`,
    name: NAMES[(i + batchIndex * 2) % NAMES.length],
    image: PROFILE_IMAGES[(i + batchIndex) % PROFILE_IMAGES.length]
  }));
});

export default function AlumniPage() {
  const [activeBatch, setActiveBatch] = useState(BATCH_NAMES[0]);

  return (
    <main className="bg-slate-50 min-h-screen">
      <PageHeader 
        title="Alumni Network" 
        subtitle="Former interns who contributed to district administration initiatives."
      />

      <Container className="py-24">
        {/* Network Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 border-b border-slate-200 pb-16">
          <div className="text-center">
            <div className="text-4xl font-serif text-slate-900 font-bold mb-2">150+</div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Total Interns</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-serif text-slate-900 font-bold mb-2">12</div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Departments Served</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-serif text-slate-900 font-bold mb-2">5000+</div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Hours Contributed</div>
          </div>
        </div>

        {/* Batch Selection Controls */}
        <FadeIn className="mb-16">
          <div className="flex flex-col items-center">
            <div className="inline-block px-4 py-1 rounded-full border border-slate-200 bg-white text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-6">
              Select Cohort
            </div>
            
            {/* Scrollable Container for Mobile */}
            <div className="w-full overflow-x-auto pb-4 -mx-4 px-4 md:overflow-visible md:pb-0 md:px-0 flex justify-start md:justify-center">
              <div className="flex space-x-2 md:space-x-3 min-w-max">
                {BATCH_NAMES.map((batch) => (
                  <button
                    key={batch}
                    onClick={() => setActiveBatch(batch)}
                    className={clsx(
                      "px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                      activeBatch === batch 
                        ? "bg-slate-900 text-white shadow-lg transform scale-105" 
                        : "bg-white text-slate-500 border border-slate-200 hover:border-indigo-200 hover:text-indigo-600 hover:shadow-sm"
                    )}
                    aria-pressed={activeBatch === batch}
                  >
                    {batch}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
        
        {/* Alumni Grid - Filtered View */}
        <div className="min-h-[400px]">
          <StaggerContainer 
            key={activeBatch} // Forces re-mount animation on batch switch
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12 md:gap-x-8 md:gap-y-16"
          >
            {ALUMNI_DATA[activeBatch].map((person) => (
              <div key={person.id} className="group flex flex-col items-center">
                {/* Photo */}
                <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden mb-6 bg-slate-100 border-4 border-white shadow-sm group-hover:shadow-xl group-hover:scale-105 transition-all duration-500 ease-out">
                  <Image 
                    src={person.image} 
                    alt={person.name} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                
                {/* Name */}
                <h3 className="text-lg md:text-xl font-serif font-bold text-slate-900 group-hover:text-indigo-700 transition-colors text-center px-2">
                  {person.name}
                </h3>
              </div>
            ))}
          </StaggerContainer>
        </div>

      </Container>
    </main>
  );
}