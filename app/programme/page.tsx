"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { FadeIn, TextReveal, StaggerContainer } from "@/components/ui/Motion";
import { Calendar, Users, FileText, CheckCircle2, AlertCircle } from "lucide-react";

export default function ProgrammePage() {
  return (
    <main className="pt-32 pb-20 bg-slate-50">
      <Container>
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="inline-block px-4 py-1 rounded-full border border-slate-200 bg-white text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-6">
            Internship Structure
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-slate-900 mb-8 leading-[0.9]">
            <TextReveal text="The Roadmap of Service" className="justify-center" />
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-light">
            A rigorous 4-month voluntary engagement designed to provide exposure to the functioning of the District Administration.
          </p>
        </div>

        {/* Disclaimer Banner */}
        <FadeIn className="max-w-3xl mx-auto mb-24">
          <div className="bg-indigo-50 border border-indigo-100 p-6 rounded-2xl flex gap-4 items-start">
            <AlertCircle className="w-6 h-6 text-indigo-600 shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-indigo-900 text-sm uppercase tracking-wide mb-2">Important Note</h4>
              <p className="text-indigo-800/80 text-sm leading-relaxed">
                DCIP is strictly an experiential learning programme. It does not offer employment, stipend, or guarantee any future placement within the government or private sector.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Timeline Visual */}
        <div className="relative mb-32 max-w-5xl mx-auto">
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2" />
          
          <div className="space-y-12 md:space-y-24">
            <TimelineItem 
              step="01" 
              title="Induction & Orientation" 
              desc="Comprehensive workshop covering administrative hierarchy, office procedures, file management, and code of conduct."
              side="left"
            />
            <TimelineItem 
              step="02" 
              title="Department Attachment" 
              desc="Placement in specific sections (Development, Land Revenue, Disaster Management) to understand day-to-day operations."
              side="right"
            />
            <TimelineItem 
              step="03" 
              title="Field Projects" 
              desc="Active participation in surveys, site inspections, and beneficiary interactions to ground-truth government data."
              side="left"
            />
            <TimelineItem 
              step="04" 
              title="Documentation & Review" 
              desc="Consolidating findings into reports and policy notes presented to the District Collector and senior officials."
              side="right"
            />
            <TimelineItem 
              step="05" 
              title="Certification" 
              desc="Awarding of certificates acknowledging the voluntary service rendered to the district administration."
              side="left"
            />
          </div>
        </div>

        {/* Quick Facts Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
           <InfoCard 
             icon={<Calendar className="w-6 h-6" />}
             title="Duration"
             value="4 Months"
             desc="Full-time engagement. Interns are expected to adhere to office timings."
           />
           <InfoCard 
             icon={<Users className="w-6 h-6" />}
             title="Mode"
             value="On-Site"
             desc="Requires physical presence at the Civil Station or designated field offices."
           />
           <InfoCard 
             icon={<FileText className="w-6 h-6" />}
             title="Stipend"
             value="None"
             desc="This is a non-remunerative service internship. No allowances provided."
           />
           <InfoCard 
             icon={<CheckCircle2 className="w-6 h-6" />}
             title="Outcome"
             value="Experience"
             desc="Gain unparalleled insight into public administration and governance."
           />
        </StaggerContainer>

      </Container>
    </main>
  );
}

function TimelineItem({ step, title, desc, side }: { step: string, title: string, desc: string, side: "left" | "right" }) {
  return (
    <div className={`relative flex items-center md:justify-between ${side === "right" ? "md:flex-row-reverse" : ""}`}>
      {/* Dot */}
      <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-4 border-slate-900 rounded-full z-10 shadow-lg" />
      
      {/* Content */}
      <FadeIn className={`ml-16 md:ml-0 md:w-[45%] p-6 md:p-8 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-slate-300 transition-colors`}>
        <div className="text-3xl md:text-5xl font-serif text-slate-100 font-bold mb-4 absolute top-4 right-6 pointer-events-none select-none">{step}</div>
        <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-900 mb-3 relative z-10">{title}</h3>
        <p className="text-slate-600 leading-relaxed text-sm relative z-10">{desc}</p>
      </FadeIn>
      
      {/* Empty space for alignment */}
      <div className="hidden md:block md:w-[45%]" />
    </div>
  );
}

function InfoCard({ icon, title, value, desc }: any) {
  return (
    <div 
      className="bg-white p-8 rounded-xl border border-slate-100 hover:border-indigo-100 hover:shadow-lg transition-all duration-300 group"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-700 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
          {icon}
        </div>
        <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{title}</div>
      </div>
      <div className="text-3xl font-serif font-bold text-slate-900 mb-3">{value}</div>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}