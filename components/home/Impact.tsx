"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Counter, TiltCard } from "@/components/ui/Motion";
import { ArrowUpRight } from "lucide-react";

export const Impact = () => {
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
          <TiltCard className="col-span-1 lg:col-span-2 relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden group">
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
    </section>
  );
};