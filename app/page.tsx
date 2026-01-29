"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { TextReveal, FadeIn, Parallax, Magnetic } from "@/components/ui/Motion";
import { ArrowRight, ChevronRight, PlayCircle, Layers, Globe, Users } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollY } = useScroll();
  const heroScale = useTransform(scrollY, [0, 1000], [1, 1.1]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.5]);

  return (
    <>
      {/* 
        HERO SECTION: Cinematic, Depth-based 
      */}
      <section className="relative h-screen min-h-[800px] w-full overflow-hidden bg-slate-900">
        {/* Dynamic Background */}
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1626265774643-f1943311a86b?q=80&w=2940&auto=format&fit=crop"
            alt="Malappuram Landscape"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/60 to-slate-900" />
        </motion.div>

        {/* Content Layer */}
        <Container className="relative z-10 h-full flex flex-col justify-center pt-20">
          <div className="max-w-4xl">
            <FadeIn delay={0.2}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-xs font-medium tracking-wider text-indigo-300 uppercase mb-8">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                Official Initiative of District Administration
              </div>
            </FadeIn>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-white leading-[1.1] mb-8 text-balance">
              <span className="block mb-2 md:mb-4">
                <TextReveal text="Governance" delay={0.1} className="inline-flex mr-4 md:mr-6" />
                <TextReveal text="reimagined" delay={0.3} className="text-white/50 inline-flex" />
              </span>
              <span className="block">
                <TextReveal text="by the youth." delay={0.5} className="inline-flex" />
              </span>
            </h1>

            <FadeIn delay={0.8} className="max-w-xl">
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 text-balance">
                DCIP Malappuram bridges the gap between academic theory and administrative reality, empowering the next generation of leaders through direct public service.
              </p>
            </FadeIn>

            <FadeIn delay={1.0} className="flex flex-wrap gap-4">
              <Magnetic>
                <Link href="/apply">
                  <button className="group relative px-8 py-4 bg-white text-slate-900 rounded-full font-semibold transition-all hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                    <span className="relative z-10 flex items-center gap-2">
                      Join the Programme <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </button>
                </Link>
              </Magnetic>
              
              <Magnetic>
                <Link href="/about">
                  <button className="px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-colors backdrop-blur-sm">
                    Read the Manifesto
                  </button>
                </Link>
              </Magnetic>
            </FadeIn>
          </div>
        </Container>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-6 md:left-12 flex items-center gap-4 text-white/40 text-xs uppercase tracking-widest"
        >
          <div className="h-px w-12 bg-white/20" />
          Scroll to Explore
        </motion.div>
      </section>

      {/* 
        INTRO SECTION: Asymmetrical, Editorial Layout
      */}
      <section className="py-24 md:py-32 bg-slate-50 relative">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Left Col: Sticky Heading */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <FadeIn>
                <h2 className="text-3xl md:text-5xl font-serif text-slate-900 leading-tight mb-8">
                  Not just an internship.<br />
                  <span className="text-indigo-600 italic">A civic duty.</span>
                </h2>
                <div className="h-px w-20 bg-slate-200 mb-8" />
                <p className="text-slate-500 text-lg leading-relaxed max-w-sm">
                  We invite the brightest minds to work alongside the District Collector and senior officials to solve real-world challenges in Malappuram.
                </p>
              </FadeIn>
            </div>

            {/* Right Col: Narrative Cards */}
            <div className="lg:col-span-7 space-y-16">
               <FeatureBlock 
                 number="01"
                 title="Field Implementation"
                 desc="Go beyond the office. Conduct surveys, assess ground realities, and implement government schemes directly in the community."
                 icon={<Globe className="w-6 h-6" />}
               />
               <FeatureBlock 
                 number="02"
                 title="Policy Research"
                 desc="Analyze data to support decision-making. Your research documents will serve as the foundation for future district projects."
                 icon={<Layers className="w-6 h-6" />}
               />
               <FeatureBlock 
                 number="03"
                 title="Public Engagement"
                 desc="Bridge the gap between administration and citizens. Manage grievance redressal systems and organize public outreach programs."
                 icon={<Users className="w-6 h-6" />}
               />
            </div>
          </div>
        </Container>
      </section>

      {/* 
        SHOWCASE PARALLAX: Full width visual break
      */}
      <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
        <Parallax offset={100} className="absolute inset-0 h-[120%]">
          <Image
            src="https://images.unsplash.com/photo-1596386461350-326ea77c3797?q=80&w=2940&auto=format&fit=crop"
            alt="Teamwork"
            fill
            className="object-cover brightness-50"
          />
        </Parallax>
        <div className="relative z-10 text-center text-white px-4 max-w-3xl">
          <FadeIn>
            <div className="w-20 h-20 mx-auto bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-8 border border-white/20">
              <PlayCircle className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-4xl md:text-6xl font-serif mb-6">In the Service of the People</h3>
            <p className="text-lg text-slate-200 mb-10">
              Watch how DCIP interns are transforming the landscape of district governance, one project at a time.
            </p>
            <Link href="/gallery">
              <button className="text-sm font-bold tracking-widest uppercase border-b border-white pb-1 hover:text-indigo-300 hover:border-indigo-300 transition-colors">
                View Gallery
              </button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* 
        NUMBERS / IMPACT: Minimalist grid
      */}
      <section className="py-24 bg-slate-900 text-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-slate-800 pt-12">
            <StatItem value="150+" label="Interns Graduated" />
            <StatItem value="45+" label="Projects Completed" />
            <StatItem value="12" label="Departments" />
            <StatItem value="∞" label="Impact Created" />
          </div>
        </Container>
      </section>
    </>
  );
}

// Sub-components for Home
function FeatureBlock({ number, title, desc, icon }: { number: string, title: string, desc: string, icon: React.ReactNode }) {
  return (
    <FadeIn className="group">
      <div className="flex items-start gap-6">
        <div className="hidden md:block text-xs font-bold text-slate-300 mt-2">{number}</div>
        <div className="relative pl-6 md:pl-0 border-l border-slate-200 md:border-none">
          <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-indigo-600 mb-4 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3">{title}</h3>
          <p className="text-slate-600 leading-relaxed text-lg">{desc}</p>
        </div>
      </div>
    </FadeIn>
  );
}

function StatItem({ value, label }: { value: string, label: string }) {
  return (
    <div className="text-center md:text-left">
      <div className="text-4xl md:text-5xl font-serif font-bold text-indigo-400 mb-2">{value}</div>
      <div className="text-sm text-slate-400 font-medium tracking-wider uppercase">{label}</div>
    </div>
  );
}