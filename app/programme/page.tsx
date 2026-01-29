"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { FadeIn, TextReveal, StaggerContainer } from "@/components/ui/Motion";
import { motion } from "framer-motion";
import { Calendar, Users, FileText, CheckCircle2, ChevronRight } from "lucide-react";

export default function ProgrammePage() {
  return (
    <main className="pt-32 pb-20 bg-slate-50">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-serif text-slate-900 mb-8">
            <TextReveal text="The Roadmap to Impact" className="justify-center" />
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A rigorous 4-month engagement designed to test your mettle, expand your horizons, and deliver tangible results for the district.
          </p>
        </div>

        {/* Timeline Visual */}
        <div className="relative mb-32 max-w-5xl mx-auto">
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2" />
          
          <div className="space-y-12 md:space-y-24">
            <TimelineItem 
              step="01" 
              title="Induction & Orientation" 
              desc="Intensive 3-day workshop covering district administration structure, office procedures, and project management basics."
              side="left"
            />
            <TimelineItem 
              step="02" 
              title="Department Allocation" 
              desc="Interns are assigned to specific departments (Health, Education, Planning) based on their background and district needs."
              side="right"
            />
            <TimelineItem 
              step="03" 
              title="Field Immersion" 
              desc="The core phase. Visiting sites, conducting surveys, interacting with beneficiaries, and collecting primary data."
              side="left"
            />
            <TimelineItem 
              step="04" 
              title="Analysis & Reporting" 
              desc="Synthesizing field data into actionable policy notes and presentation to the District Collector."
              side="right"
            />
            <TimelineItem 
              step="05" 
              title="Graduation" 
              desc="Presentation of final reports, certification ceremony, and alumni induction."
              side="left"
            />
          </div>
        </div>

        {/* Quick Facts Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-32">
           <InfoCard 
             icon={<Calendar className="w-6 h-6" />}
             title="Duration"
             value="3 - 4 Months"
             desc="Full-time engagement requiring presence at the Collectorate or designated field offices."
           />
           <InfoCard 
             icon={<Users className="w-6 h-6" />}
             title="Mode"
             value="On-Site / Hybrid"
             desc="Primarily on-site to ensure direct mentorship and field exposure."
           />
           <InfoCard 
             icon={<FileText className="w-6 h-6" />}
             title="Stipend"
             value="Non-Stipendiary"
             desc="This is a voluntary service learning programme. No financial remuneration is provided."
           />
           <InfoCard 
             icon={<CheckCircle2 className="w-6 h-6" />}
             title="Certification"
             value="Official Certificate"
             desc="Upon successful completion, interns receive a certificate signed by the District Collector."
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
      <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-4 border-indigo-600 rounded-full z-10" />
      
      {/* Content */}
      <div className={`ml-16 md:ml-0 md:w-[45%] p-6 md:p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-indigo-200 transition-colors`}>
        <div className="text-4xl font-serif text-indigo-100 font-bold mb-4 absolute top-4 right-6 pointer-events-none">{step}</div>
        <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{desc}</p>
      </div>
      
      {/* Empty space for alignment */}
      <div className="hidden md:block md:w-[45%]" />
    </div>
  );
}

function InfoCard({ icon, title, value, desc }: any) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 hover:border-indigo-100"
    >
      <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
        {icon}
      </div>
      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">{title}</div>
      <div className="text-2xl font-serif font-bold text-slate-900 mb-3">{value}</div>
      <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}