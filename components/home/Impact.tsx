
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Counter, TiltCard } from "@/components/ui/Motion";
import { ArrowUpRight, X, CheckCircle2 } from "lucide-react";
import { Modal } from "@/components/ui/Modal";

export const Impact = () => {
  const [showCaseStudy, setShowCaseStudy] = useState(false);

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <h3 className="text-4xl md:text-5xl font-serif text-slate-900">
            <span className="block text-sm md:text-xl font-sans font-bold text-indigo-600 uppercase tracking-widest mb-2">Our Impact</span>
            Real Change.<br />Real Time.
          </h3>
          <Link href="/impact" className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 text-slate-900 font-medium hover:bg-slate-200 transition-colors">
            View Impact Report <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Clickable Project Card */}
          <div 
            onClick={() => setShowCaseStudy(true)} 
            className="col-span-1 lg:col-span-2 cursor-pointer focus:outline-none focus:ring-4 focus:ring-indigo-500/50 rounded-3xl"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if(e.key === 'Enter' || e.key === ' ') setShowCaseStudy(true); }}
          >
            <TiltCard className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden group">
              <Image 
                src="https://images.unsplash.com/photo-1541872703-74c5963631df?q=80&w=2000&auto=format&fit=crop"
                alt="Field Work"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12">
                <div className="text-indigo-400 font-bold uppercase tracking-widest text-xs md:text-sm mb-2">Project Spotlight</div>
                <h4 className="text-2xl md:text-4xl text-white font-serif mb-4">Tribal Welfare Assessment</h4>
                <p className="text-slate-300 max-w-lg mb-6 text-sm md:text-base">Interns conducted a comprehensive survey of 50+ settlements to identify gaps in healthcare and education access.</p>
                <span className="text-white border-b border-white/50 pb-1 text-xs md:text-sm font-bold uppercase tracking-wider group-hover:border-white transition-colors">Read Case Study</span>
              </div>
            </TiltCard>
          </div>

          <div className="col-span-1 space-y-8 lg:space-y-12 flex flex-col justify-center">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <div className="text-5xl md:text-6xl font-serif text-indigo-600 mb-2 font-medium">
                <Counter value={150} />+
              </div>
              <div className="text-sm font-bold text-slate-900 uppercase tracking-widest">Interns Engaged</div>
              <p className="text-slate-500 mt-2 text-sm">Youth empowered with direct experience in district administration and governance.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <div className="text-5xl md:text-6xl font-serif text-indigo-600 mb-2 font-medium">
                <Counter value={45} />
              </div>
              <div className="text-sm font-bold text-slate-900 uppercase tracking-widest">Projects Completed</div>
              <p className="text-slate-500 mt-2 text-sm">Direct interventions in waste management, education, and health.</p>
            </div>
          </div>
        </div>
        
        {/* Mobile View More Link */}
        <div className="mt-8 md:hidden">
           <Link href="/impact" className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-100 text-slate-900 font-medium hover:bg-slate-200 transition-colors w-full">
            View Impact Report <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>

      {/* Case Study Modal */}
      <Modal 
        isOpen={showCaseStudy} 
        onClose={() => setShowCaseStudy(false)} 
        className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full mx-4 max-h-[90vh] flex flex-col shadow-2xl"
      >
        <div className="relative h-48 md:h-64 shrink-0">
           <Image 
             src="https://images.unsplash.com/photo-1541872703-74c5963631df?q=80&w=2000&auto=format&fit=crop"
             alt="Tribal Welfare"
             fill
             className="object-cover"
           />
           <div className="absolute inset-0 bg-slate-900/60 flex items-end p-6 md:p-8">
             <div className="relative z-10">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-widest mb-3">
                 Case Study
               </div>
               <h2 className="text-2xl md:text-4xl font-serif font-bold text-white">Tribal Welfare Assessment</h2>
             </div>
           </div>
           
           {/* Modal Close Button (Desktop overlay) */}
           <div className="absolute top-4 right-4 z-20">
             <button 
               onClick={() => setShowCaseStudy(false)}
               className="p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors backdrop-blur-md"
               aria-label="Close modal"
             >
               <X className="w-5 h-5" />
             </button>
           </div>
        </div>
        
        <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
          <div className="prose prose-slate max-w-none">
            <h3 className="text-xl font-bold text-slate-900 mb-4 font-serif">Project Overview</h3>
            <p className="text-slate-600 leading-relaxed mb-8">
              The Tribal Welfare Assessment project was initiated to bridge the data gap regarding the socio-economic conditions of tribal settlements in the eastern hill regions of Malappuram. A team of 12 interns spent 3 weeks in the field, conducting direct interviews and site inspections to map critical vulnerabilities.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center">
                 <div className="text-2xl md:text-3xl font-bold text-indigo-600 mb-1">54</div>
                 <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Settlements</div>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center">
                 <div className="text-2xl md:text-3xl font-bold text-indigo-600 mb-1">1.2k</div>
                 <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Households</div>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center">
                 <div className="text-2xl md:text-3xl font-bold text-indigo-600 mb-1">21</div>
                 <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Days</div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-4 font-serif">Key Findings</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <span>Last-mile connectivity remains a major hurdle for emergency medical access in 30% of surveyed hamlets.</span>
              </li>
              <li className="flex gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <span>High dropout rates observed in secondary education due to lack of affordable transport options.</span>
              </li>
              <li className="flex gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <span>Traditional livelihood methods (agriculture/foraging) are declining without proper market linkage support.</span>
              </li>
            </ul>

            <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6">
              <h3 className="text-lg font-bold text-indigo-900 mb-2 font-serif">Impact & Outcomes</h3>
              <p className="text-indigo-800/80 leading-relaxed text-sm md:text-base">
                Based on the report submitted by the interns, the District Administration has sanctioned a pilot project for <strong>Mobile Medical Units</strong> to visit these settlements weekly. Additionally, a proposal for a dedicated KSRTC minibus service for students has been forwarded to the transport department.
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </section>
  );
};
