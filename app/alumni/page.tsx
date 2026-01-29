"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { FadeIn, TiltCard, StaggerContainer } from "@/components/ui/Motion";
import { GraduationCap, Briefcase } from "lucide-react";

const PARTICIPANTS = [
  {
    id: 1,
    name: "Adithya Narayan",
    background: "MA Economics",
    institution: "University of Kerala",
    batch: "2022",
    contribution: "District Planning Board Assistance",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Sneha P.",
    background: "MSW",
    institution: "Tata Institute of Social Sciences",
    batch: "2023",
    contribution: "Tribal Welfare Survey",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Rahul Vijay",
    background: "B.Tech Civil",
    institution: "NIT Calicut",
    batch: "2021",
    contribution: "Disaster Management Mapping",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Anjali Krishna",
    background: "BA Sociology",
    institution: "Mar Ivanios College",
    batch: "2022",
    contribution: "Kudumbashree Coordination",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Mohammed Fayiz",
    background: "M.Sc Statistics",
    institution: "CUSAT",
    batch: "2023",
    contribution: "Data Analysis for Health Dept",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Lakshmi S.",
    background: "LLB",
    institution: "Govt Law College",
    batch: "2021",
    contribution: "Legal Cell Assistance",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function ParticipantsPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <PageHeader 
        title="Participant Network" 
        subtitle="A diverse community of students and graduates who have dedicated their time to public service."
      />

      <Container className="py-24">
        {/* Network Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 border-b border-slate-200 pb-16">
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

        {/* Directory */}
        <div className="mb-12">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-serif text-slate-900">Recent Participants</h2>
          </div>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PARTICIPANTS.map((person) => (
              <TiltCard key={person.id} className="group bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:border-slate-300 transition-all duration-300">
                <div className="flex items-center gap-5 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border border-slate-100 bg-slate-100">
                    <Image 
                      src={person.image} 
                      alt={person.name} 
                      fill 
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-bold text-slate-900">{person.name}</h3>
                    <p className="text-slate-400 text-xs uppercase tracking-wider font-medium">Batch {person.batch}</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-4">
                  <div className="flex gap-3">
                    <GraduationCap className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-slate-500">Background</div>
                      <div className="text-sm text-slate-800 font-medium">{person.background}</div>
                      <div className="text-xs text-slate-500">{person.institution}</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Briefcase className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-slate-500">Key Contribution</div>
                      <div className="text-sm text-slate-800">{person.contribution}</div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </StaggerContainer>
        </div>
      </Container>
    </main>
  );
}