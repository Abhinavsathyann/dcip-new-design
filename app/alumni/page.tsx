"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { FadeIn, TiltCard, StaggerContainer } from "@/components/ui/Motion";
import { Linkedin } from "lucide-react";

const ALUMNI = [
  {
    id: 1,
    name: "Adithya Narayan",
    role: "Policy Researcher",
    currentOrg: "Kerala State Planning Board",
    batch: "2022",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Sneha P.",
    role: "Program Manager",
    currentOrg: "Kudumbashree Mission",
    batch: "2023",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Rahul Vijay",
    role: "Urban Planner",
    currentOrg: "Smart City Project",
    batch: "2021",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Anjali Krishna",
    role: "Social Worker",
    currentOrg: "UNICEF India",
    batch: "2022",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Mohammed Fayiz",
    role: "Data Analyst",
    currentOrg: "Information Kerala Mission",
    batch: "2023",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Lakshmi S.",
    role: "Research Fellow",
    currentOrg: "CDS Trivandrum",
    batch: "2021",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function AlumniPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <PageHeader 
        title="Alumni Network" 
        subtitle="Our former interns continue to contribute to governance, academia, and development sectors."
      />

      <Container className="py-24">
        {/* Network Value Prop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 border-b border-slate-200 pb-16">
          <div className="text-center">
            <div className="text-4xl font-serif text-indigo-600 font-bold mb-2">150+</div>
            <div className="text-sm font-bold uppercase tracking-widest text-slate-500">Active Members</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-serif text-indigo-600 font-bold mb-2">12</div>
            <div className="text-sm font-bold uppercase tracking-widest text-slate-500">Partner Orgs</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-serif text-indigo-600 font-bold mb-2">∞</div>
            <div className="text-sm font-bold uppercase tracking-widest text-slate-500">Collaborations</div>
          </div>
        </div>

        {/* Directory */}
        <div className="mb-12">
          <h2 className="text-3xl font-serif text-slate-900 mb-8">Alumni Directory</h2>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ALUMNI.map((person) => (
              <TiltCard key={person.id} className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:border-indigo-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-6 mb-6">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-slate-100 group-hover:border-indigo-500 transition-colors">
                    <Image 
                      src={person.image} 
                      alt={person.name} 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{person.name}</h3>
                    <p className="text-slate-500 text-sm">Batch of {person.batch}</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Current Role</div>
                    <div className="text-slate-800 font-medium">{person.role}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Organization</div>
                    <div className="text-slate-800 font-medium">{person.currentOrg}</div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-50 flex justify-between items-center">
                  <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">Alumni</span>
                  <button className="text-slate-400 hover:text-[#0077b5] transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </button>
                </div>
              </TiltCard>
            ))}
          </StaggerContainer>
        </div>
      </Container>
    </main>
  );
}