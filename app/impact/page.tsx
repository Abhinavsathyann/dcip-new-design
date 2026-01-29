"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { FadeIn, Counter, Parallax, StaggerContainer } from "@/components/ui/Motion";
import { CheckCircle2, TrendingUp, Users, MapPin, BarChart3 } from "lucide-react";

export default function ImpactPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <PageHeader 
        title="Community Impact" 
        subtitle="Tangible outcomes driven by youth intervention in local governance."
      />

      <Container className="py-24">
        {/* Key Metrics - Governance Focused */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          <MetricCard 
            icon={<CheckCircle2 className="w-6 h-6" />}
            value={45}
            label="Initiatives Supported"
            desc="Across Health, Education, and Revenue Depts."
          />
          <MetricCard 
            icon={<Users className="w-6 h-6" />}
            value={15000}
            label="Citizens Surveyed"
            desc="Direct data collection for welfare schemes."
            suffix="+"
          />
          <MetricCard 
            icon={<MapPin className="w-6 h-6" />}
            value={15}
            label="Panchayats Mapped"
            desc="Geotagging and resource mapping completed."
          />
          <MetricCard 
            icon={<BarChart3 className="w-6 h-6" />}
            value={120}
            label="Reports Filed"
            desc="Policy notes submitted to administration."
            suffix="+"
          />
        </div>

        {/* Featured Case Study - Editorial Layout */}
        <div className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
             <div className="order-2 lg:order-1">
               <FadeIn>
                 <div className="flex items-center gap-2 mb-6">
                   <div className="w-2 h-2 rounded-full bg-indigo-600" />
                   <div className="text-slate-500 font-bold uppercase tracking-widest text-xs">Case Study</div>
                 </div>
                 <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-6 leading-tight">
                   Mission Clean Malappuram
                 </h2>
                 <p className="text-slate-600 text-lg leading-relaxed mb-8">
                   DCIP interns spearheaded a district-wide waste management audit. By mapping over 200 illegal dumping spots and coordinating with local bodies, they helped institute a new rigorous collection protocol.
                 </p>
                 <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm space-y-4">
                   <ResultRow text="30% reduction in roadside waste dumping spots" />
                   <ResultRow text="10,000+ households verified for Haritha Karma Sena" />
                   <ResultRow text="Digital dashboard created for real-time monitoring" />
                 </div>
               </FadeIn>
             </div>
             <div className="order-1 lg:order-2 h-[400px] md:h-[600px] relative rounded-sm overflow-hidden shadow-2xl">
               <Parallax offset={30} className="h-[120%]">
                 <Image 
                   src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2000&auto=format&fit=crop"
                   alt="Cleanup Drive"
                   fill
                   className="object-cover"
                 />
               </Parallax>
               <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply" />
             </div>
          </div>
        </div>

        {/* Areas of Intervention - Visual Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif text-slate-900 mb-8 border-b border-slate-200 pb-4 inline-block">Focus Areas</h2>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AreaCard 
            title="Digital Governance"
            desc="Bridging the digital divide by facilitating e-literacy and e-governance adoption in rural pockets."
            image="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop"
          />
          <AreaCard 
            title="Social Audits"
            desc="Ensuring transparency by verifying the last-mile delivery of government welfare schemes."
            image="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=800&auto=format&fit