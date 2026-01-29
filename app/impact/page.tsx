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
            image="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=800&auto=format&fit=crop"
          />
          <AreaCard 
            title="Urban Planning"
            desc="Assisting in the assessment of public infrastructure and proposing sustainable development solutions."
            image="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=800&auto=format&fit=crop"
          />
        </StaggerContainer>

      </Container>
    </main>
  );
}

function MetricCard({ icon, value, label, desc, suffix = "" }: any) {
  return (
    <FadeIn className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:border-slate-300 transition-colors">
      <div className="w-10 h-10 bg-slate-100 text-slate-700 rounded-lg flex items-center justify-center mb-6">
        {icon}
      </div>
      <div className="text-4xl font-serif font-bold text-slate-900 mb-2">
        <Counter value={value} />{suffix}
      </div>
      <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">{label}</div>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </FadeIn>
  );
}

function ResultRow({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
        <CheckCircle2 className="w-2.5 h-2.5" />
      </div>
      <span className="text-slate-700 text-sm font-medium">{text}</span>
    </div>
  );
}

function AreaCard({ title, desc, image }: any) {
  return (
    <div className="group relative aspect-[3/4] rounded-sm overflow-hidden cursor-pointer bg-slate-900">
      <Image 
        src={image} 
        alt={title} 
        fill 
        className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-60" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 p-8 transform transition-transform duration-500">
        <h3 className="text-2xl font-serif font-bold text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">{title}</h3>
        <p className="text-slate-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          {desc}
        </p>
      </div>
    </div>
  );
}