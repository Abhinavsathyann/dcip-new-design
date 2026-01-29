"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { FadeIn, Counter, Parallax, StaggerContainer } from "@/components/ui/Motion";
import { CheckCircle2, TrendingUp, Users, MapPin } from "lucide-react";

export default function ImpactPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <PageHeader 
        title="Our Impact" 
        subtitle="Measuring the tangible change driven by youth intervention in governance."
      />

      <Container className="py-24">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          <MetricCard 
            icon={<CheckCircle2 className="w-6 h-6" />}
            value={45}
            label="Projects Completed"
            desc="Across 12 different government departments."
          />
          <MetricCard 
            icon={<Users className="w-6 h-6" />}
            value={15000}
            label="Beneficiaries"
            desc="Directly impacted through surveys and schemes."
            suffix="+"
          />
          <MetricCard 
            icon={<MapPin className="w-6 h-6" />}
            value={15}
            label="Panchayats Covered"
            desc="Deep rural penetration for data collection."
          />
          <MetricCard 
            icon={<TrendingUp className="w-6 h-6" />}
            value={100}
            label="Efficiency Boost"
            desc="In file movement and grievance redressal."
            suffix="%"
          />
        </div>

        {/* Featured Case Study */}
        <div className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
             <div className="order-2 lg:order-1">
               <FadeIn>
                 <div className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4">Case Study: 2023</div>
                 <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Mission Clean Malappuram</h2>
                 <p className="text-slate-600 text-lg leading-relaxed mb-8">
                   DCIP interns spearheaded a district-wide waste management audit. By mapping over 200 illegal dumping spots and coordinating with local bodies, they helped institute a new rigorous collection protocol.
                 </p>
                 <div className="space-y-4">
                   <ResultRow text="30% reduction in roadside waste" />
                   <ResultRow text="10,000+ households onboarded to Haritha Karma Sena" />
                   <ResultRow text="Digital dashboard created for monitoring" />
                 </div>
               </FadeIn>
             </div>
             <div className="order-1 lg:order-2 h-[500px] relative rounded-3xl overflow-hidden shadow-2xl">
               <Parallax offset={30} className="h-[120%]">
                 <Image 
                   src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2000&auto=format&fit=crop"
                   alt="Cleanup Drive"
                   fill
                   className="object-cover"
                 />
               </Parallax>
               <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/40 to-transparent" />
             </div>
          </div>
        </div>

        {/* Areas of Intervention */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-serif text-slate-900 mb-6">Areas of Intervention</h2>
          <p className="text-slate-500">We don't just work in offices. We work where the people are.</p>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AreaCard 
            title="Digital Governance"
            desc="Implementing e-office systems and training staff on digital tools to improve speed and transparency."
            image="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop"
          />
          <AreaCard 
            title="Social Welfare"
            desc="Ensuring that government schemes reach the most vulnerable sections of society through direct verification."
            image="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=800&auto=format&fit=crop"
          />
          <AreaCard 
            title="Infrastructure"
            desc="Assessing the quality of public works and proposing sustainable urban planning solutions."
            image="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=800&auto=format&fit=crop"
          />
        </StaggerContainer>

      </Container>
    </main>
  );
}

function MetricCard({ icon, value, label, desc, suffix = "" }: any) {
  return (
    <FadeIn className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
        {icon}
      </div>
      <div className="text-4xl font-serif font-bold text-slate-900 mb-2">
        <Counter value={value} />{suffix}
      </div>
      <div className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">{label}</div>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </FadeIn>
  );
}

function ResultRow({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
        <CheckCircle2 className="w-3 h-3" />
      </div>
      <span className="text-slate-700 font-medium">{text}</span>
    </div>
  );
}

function AreaCard({ title, desc, image }: any) {
  return (
    <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer">
      <Image 
        src={image} 
        alt={title} 
        fill 
        className="object-cover transition-transform duration-700 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 p-8 transform transition-transform duration-300 group-hover:-translate-y-2">
        <h3 className="text-2xl font-serif font-bold text-white mb-3">{title}</h3>
        <p className="text-slate-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          {desc}
        </p>
      </div>
    </div>
  );
}