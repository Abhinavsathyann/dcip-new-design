"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { FadeIn, TextReveal } from "@/components/ui/Motion";
import { motion } from "framer-motion";
import { Calendar, Users, FileText, CheckCircle2 } from "lucide-react";

export default function ProgrammePage() {
  return (
    <main className="pt-32 pb-20 bg-slate-50">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-serif text-slate-900 mb-8">
            <TextReveal text="Structure & Eligibility" className="justify-center" />
          </h1>
          <p className="text-xl text-slate-600">
            A rigorous 4-month engagement designed to test your mettle and expand your horizons.
          </p>
        </div>

        {/* Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-32">
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
        </div>

        {/* Eligibility Section - Dark Mode */}
        <div className="rounded-3xl bg-slate-900 text-white p-8 md:p-16 overflow-hidden relative">
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
             <div>
                <h2 className="text-4xl font-serif mb-6">Who are we looking for?</h2>
                <p className="text-slate-400 text-lg mb-8">
                  We seek individuals who are not just looking for a certificate, but for an opportunity to serve.
                </p>
                <ul className="space-y-4">
                  <EligibilityItem text="Graduates or Postgraduates in any discipline" />
                  <EligibilityItem text="Strong command over English & Malayalam" />
                  <EligibilityItem text="Proficiency in MS Office & Digital Tools" />
                  <EligibilityItem text="Willingness to travel across the district" />
                </ul>
             </div>
             <div className="flex items-center justify-center">
                <div className="w-full aspect-square bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-2xl opacity-20 rotate-3 blur-3xl absolute" />
                <div className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-2xl max-w-sm w-full relative z-10">
                   <h3 className="text-xl font-bold mb-4">Selection Process</h3>
                   <div className="space-y-6">
                      <Step number="01" text="Online Application" />
                      <Step number="02" text="Resume Screening" />
                      <Step number="03" text="Personal Interview" />
                      <Step number="04" text="Final Onboarding" />
                   </div>
                </div>
             </div>
           </div>
        </div>
      </Container>
    </main>
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

function EligibilityItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3">
      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
      <span className="text-slate-200">{text}</span>
    </li>
  );
}

function Step({ number, text }: { number: string, text: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="font-mono text-indigo-400 opacity-80">{number}</div>
      <div className="h-px flex-1 bg-white/10" />
      <div className="text-sm font-medium">{text}</div>
    </div>
  );
}