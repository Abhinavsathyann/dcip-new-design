"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { FadeIn, TextReveal, Parallax } from "@/components/ui/Motion";
import { Target, Compass, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="pt-32 pb-20 bg-slate-50">
      <Container>
        {/* Editorial Header */}
        <div className="max-w-5xl mb-24">
          <h1 className="text-6xl md:text-8xl font-serif text-slate-900 leading-[0.9] mb-12 tracking-tight">
            <TextReveal text="Bridging the gap between theory" />
            <span className="block text-slate-400 italic font-serif">
              <TextReveal text="& practice." delay={0.4} />
            </span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-5 md:col-start-8">
              <p className="text-lg text-slate-600 leading-relaxed">
                DCIP Malappuram is an official initiative aimed at engaging graduates in district-level governance. We don't just offer an internship; we offer a front-row seat to democracy in action.
              </p>
            </div>
          </div>
        </div>

        {/* Visual Storytelling Block */}
        <div className="relative w-full h-[60vh] rounded-2xl overflow-hidden mb-32">
          <Parallax offset={50} className="h-[120%]">
             <Image 
               src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=2800&auto=format&fit=crop"
               alt="Meeting"
               fill
               className="object-cover"
             />
          </Parallax>
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Mission / Vision Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 mb-32">
          <div>
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-indigo-600" />
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Our Mission</span>
              </div>
              <h2 className="text-4xl font-serif text-slate-900 mb-6">To nurture socially responsible leaders.</h2>
              <p className="text-slate-600 leading-relaxed">
                We aim to provide a structured platform for youth to contribute to nation-building while gaining professional discipline and administrative insight.
              </p>
            </FadeIn>
          </div>
          <div className="pt-0 md:pt-32">
            <FadeIn delay={0.2}>
              <div className="flex items-center gap-3 mb-6">
                <Compass className="w-6 h-6 text-indigo-600" />
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Our Vision</span>
              </div>
              <h2 className="text-4xl font-serif text-slate-900 mb-6">Governance enriched by youth innovation.</h2>
              <p className="text-slate-600 leading-relaxed">
                To create a symbiotic relationship where the administration benefits from fresh perspectives, and the youth gain mentorship from seasoned civil servants.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Values Horizontal Scroll (Visual Simulation) */}
        <div className="bg-white rounded-3xl p-8 md:p-16 border border-slate-100 shadow-sm">
          <h3 className="text-2xl font-serif text-slate-900 mb-12 text-center">Core Pillars of DCIP</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard 
              title="Integrity" 
              desc="Upholding the highest standards of public service ethics."
            />
            <ValueCard 
              title="Innovation" 
              desc="Finding new solutions to age-old administrative hurdles."
            />
            <ValueCard 
              title="Impact" 
              desc="Focusing on tangible outcomes that benefit the common man."
            />
          </div>
        </div>
      </Container>
    </main>
  );
}

function ValueCard({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="text-center p-6 hover:bg-slate-50 rounded-xl transition-colors duration-300">
      <div className="w-12 h-1 bg-indigo-600 mx-auto mb-6 rounded-full" />
      <h4 className="text-xl font-bold text-slate-900 mb-3">{title}</h4>
      <p className="text-slate-600">{desc}</p>
    </div>
  );
}