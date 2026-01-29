"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { FadeIn, TextReveal, Parallax, StaggerContainer } from "@/components/ui/Motion";
import { Target, Compass, Users, Building2 } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="pt-32 pb-20 bg-slate-50">
      <Container>
        {/* Editorial Header */}
        <div className="max-w-6xl mx-auto mb-32">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-end border-b border-slate-200 pb-16">
            <div className="flex-1 w-full">
              <span className="text-indigo-600 font-bold tracking-widest uppercase text-xs mb-6 block">Our Philosophy</span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-slate-900 leading-[1] tracking-tight">
                <TextReveal text="Service beyond" />
                <span className="block text-slate-400 italic">
                  <TextReveal text="the classroom." delay={0.2} />
                </span>
              </h1>
            </div>
            <div className="w-full md:w-1/3 pb-2">
              <p className="text-base md:text-lg text-slate-600 leading-relaxed font-light">
                DCIP is not an employment scheme. It is an invitation to civic duty—offering a rare window into the machinery of district administration.
              </p>
            </div>
          </div>
        </div>

        {/* Visual Storytelling Block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-32 items-center">
           <div className="md:col-span-8 relative h-[400px] md:h-[600px] rounded-sm overflow-hidden">
              <Parallax offset={40} className="h-[120%]">
                 <Image 
                   src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=2800&auto=format&fit=crop"
                   alt="District Planning Meeting"
                   fill
                   className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                 />
              </Parallax>
              <div className="absolute bottom-0 left-0 p-6 md:p-8 bg-gradient-to-t from-black/80 to-transparent w-full">
                <div className="text-white font-serif italic text-xl md:text-2xl">"Governance requires perspective."</div>
              </div>
           </div>
           <div className="md:col-span-4 space-y-12 pl-0 md:pl-8">
              <ValueProp 
                icon={<Target className="w-6 h-6" />} 
                title="Structured Exposure" 
                desc="Gain first-hand insight into file flow, decision making, and public grievance redressal mechanisms."
              />
              <ValueProp 
                icon={<Compass className="w-6 h-6" />} 
                title="Field Immersion" 
                desc="Move beyond the office. Verify schemes, conduct surveys, and interact with citizens on the ground."
              />
              <ValueProp 
                icon={<Building2 className="w-6 h-6" />} 
                title="Institutional Memory" 
                desc="Contribute to the documentation and research capabilities of the District Administration."
              />
           </div>
        </div>

        {/* Leadership Context */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">
              An Initiative of the <br/>District Administration
            </h2>
            <div className="w-20 h-1 bg-indigo-500 mb-8" />
            <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-12">
              Conceived to bridge the gap between youth energy and administrative experience, DCIP allows the Collectorate to tap into fresh academic perspectives while molding the next generation of socially responsible citizens.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-8">
               <Stat number="2016" label="Year Established" />
               <Stat number="15+" label="Depts. Covered" />
               <Stat number="4 Mo" label="Programme Cycle" />
               <Stat number="∞" label="Public Value" />
            </div>
          </div>
        </div>

      </Container>
    </main>
  );
}

function ValueProp({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <FadeIn>
      <div className="group">
        <div className="w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-900 mb-4 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300 shadow-sm">
          {icon}
        </div>
        <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
      </div>
    </FadeIn>
  );
}

function Stat({ number, label }: { number: string, label: string }) {
  return (
    <div>
      <div className="text-3xl font-serif font-bold text-white mb-1">{number}</div>
      <div className="text-[10px] uppercase tracking-widest text-slate-400">{label}</div>
    </div>
  );
}