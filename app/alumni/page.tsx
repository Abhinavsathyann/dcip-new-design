
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
  role: string;
  image: string;
};

// Batches Configuration
const BATCH_NAMES = ["Batch 1", "Batch 2", "Batch 3", "Batch 4", "Batch 5", "Batch 6"];

// --- Data Generation ---

const getAlumniData = (batch: string): Alumni[] => {
  // Batch 1: The Pioneers
  if (batch === "Batch 1") {
    return [
      { id: "b1-1", name: "Arjun Krishnan", role: "Coordinator", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop" },
      { id: "b1-2", name: "Lakshmi Priya", role: "Research", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop" },
      { id: "b1-3", name: "Mohammed Fayiz", role: "Field Ops", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop" },
      { id: "b1-4", name: "Anjali Menon", role: "Documentation", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop" },
      { id: "b1-5", name: "Rahul Vijay", role: "Tech Lead", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=500&auto=format&fit=crop" },
      { id: "b1-6", name: "Kavya S.", role: "Survey Lead", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&auto=format&fit=crop" },
      { id: "b1-7", name: "Vivek Thomas", role: "Analysis", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500&auto=format&fit=crop" },
      { id: "b1-8", name: "Nandini R.", role: "Outreach", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=500&auto=format&fit=crop" },
    ];
  }
  
  // Batch 2: The Innovators
  if (batch === "Batch 2") {
    return [
      { id: "b2-1", name: "Siddharth R.", role: "Planning", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=500&auto=format&fit=crop" },
      { id: "b2-2", name: "Meera N.", role: "Content", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&auto=format&fit=crop" },
      { id: "b2-3", name: "Adithya Dev", role: "Field Work", image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=500&auto=format&fit=crop" },
      { id: "b2-4", name: "Fathima H.", role: "HR Support", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=500&auto=format&fit=crop" },
      { id: "b2-5", name: "Vishnu Prasad", role: "Logistics", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&auto=format&fit=crop" },
      { id: "b2-6", name: "Sneha George", role: "PR", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500&auto=format&fit=crop" },
      { id: "b2-7", name: "Kiran Kumar", role: "Data Entry", image: "https://images.unsplash.com/photo-1522512115668-c09775d6f424?q=80&w=500&auto=format&fit=crop" },
      { id: "b2-8", name: "Pooja V.", role: "Design", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=500&auto=format&fit=crop" },
    ];
  }

  // Batch 3
  if (batch === "Batch 3") {
    return [
      { id: "b3-1", name: "Manu S.", role: "Team Lead", image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=500&auto=format&fit=crop" },
      { id: "b3-2", name: "Deepa K.", role: "Research", image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=500&auto=format&fit=crop" },
      { id: "b3-3", name: "Varun T.", role: "Projects", image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=500&auto=format&fit=crop" },
      { id: "b3-4", name: "Gayathri M.", role: "Admin", image: "https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?q=80&w=500&auto=format&fit=crop" },
      { id: "b3-5", name: "Rohan J.", role: "Field", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=500&auto=format&fit=crop" },
      { id: "b3-6", name: "Niya P.", role: "Social Media", image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=500&auto=format&fit=crop" },
    ];
  }

  // Batch 4
  if (batch === "Batch 4") {
    return [
       { id: "b4-1", name: "Akhil V.", role: "Coordinator", image: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=500&auto=format&fit=crop" },
       { id: "b4-2", name: "Swathi R.", role: "Research", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=500&auto=format&fit=crop" },
       { id: "b4-3", name: "Harish M.", role: "Tech", image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=500&auto=format&fit=crop" },
       { id: "b4-4", name: "Reshma S.", role: "Docs", image: "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=500&auto=format&fit=crop" },
    ];
  }

  // Batch 5
  if (batch === "Batch 5") {
    return [
      { id: "b5-1", name: "Jay A.", role: "Lead", image: "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=500&auto=format&fit=crop" },
      { id: "b5-2", name: "Maya L.", role: "Field", image: "https://images.unsplash.com/photo-1521146764736-56c929d59c83?q=80&w=500&auto=format&fit=crop" },
      { id: "b5-3", name: "Tom K.", role: "Planning", image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=500&auto=format&fit=crop" },
    ];
  }

  // Batch 6
  return [
    { id: "b6-1", name: "Nabeel K.", role: "Current Lead", image: "https://images.unsplash.com/photo-1482961674540-0b018b680d00?q=80&w=500&auto=format&fit=crop" },
    { id: "b6-2", name: "Sandra T.", role: "Associate", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=500&auto=format&fit=crop" },
    { id: "b6-3", name: "Kevin J.", role: "Field", image: "https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?q=80&w=500&auto=format&fit=crop" },
    { id: "b6-4", name: "Ammu V.", role: "Media", image: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=500&auto=format&fit=crop" },
  ];
};

const ALUMNI_DATA: Record<string, Alumni[]> = {};
BATCH_NAMES.forEach((batch) => {
  ALUMNI_DATA[batch] = getAlumniData(batch);
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
                
                {/* Name & Role */}
                <div className="text-center px-2">
                  <h3 className="text-lg md:text-xl font-serif font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">
                    {person.name}
                  </h3>
                  <p className="text-xs font-medium uppercase tracking-widest text-slate-400 mt-1">{person.role}</p>
                </div>
              </div>
            ))}
          </StaggerContainer>
        </div>

      </Container>
    </main>
  );
}
