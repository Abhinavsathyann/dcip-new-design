"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { TextReveal, FadeIn, Parallax, Magnetic, MaskText, Counter, TiltCard } from "@/components/ui/Motion";
import { ArrowRight, PlayCircle, Globe, Users, ArrowUpRight, BookOpen } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollY } = useScroll();
  const heroScale = useTransform(scrollY, [0, 1000], [1, 1.2]);
  const heroOpacity = useTransform(scrollY, [0, 800], [1, 0]);

  return (
    <>
      {/* 
        HERO SECTION: Cinematic, Depth-based 
      */}
      <section className="relative h-screen min-h-[800px] w-full overflow-hidden bg-slate-950">
        {/* Dynamic Background */}
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1596386461350-326ea77c3797?q=80&w=2940&auto=format&fit=crop"
            alt="Malappuram Landscape"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-950" />
        </motion.div>

        {/* Content Layer */}
        <Container className="relative z-10 h-full flex flex-col justify-center pt-24">
          <div className="max-w-5xl">
            <FadeIn delay={0.2} priority>
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-medium tracking-[0.2em] text-indigo-200 uppercase mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                District Administration Initiative
              </div>
            </FadeIn>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium text-white leading-[0.95] mb-8 tracking-tight">
              <MaskText text={["Governance", "Reimagined", "By the Youth."]} delay={0.1} />
            </h1>

            <FadeIn delay={0.8} className="max-w-xl ml-2 md:ml-4" priority>
              <p className="text-lg md:text-2xl text-slate-300 font-light leading-relaxed mb-12 text-balance border-l-2 border-indigo-500/50 pl-6">
                DCIP Malappuram bridges the gap between academic theory and administrative reality, empowering the next generation of leaders through direct public service.
              </p>
            </FadeIn>

            <FadeIn delay={1.0} className="flex flex-wrap gap-6 ml-2 md:ml-4" priority>
              <Magnetic>
                <Link href="/apply">
                  <button className="group relative px-8 py-5 bg-white text-slate-950 rounded-full font-bold text-lg transition-all hover:shadow-[0_0_50px_-10px_rgba(255,255,255,0.4)]">
                    <span className="relative z-10 flex items-center gap-3">
                      Join the Programme <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </button>
                </Link>
              </Magnetic>
              
              <Magnetic>
                <Link href="/programme">
                  <button className="px-8 py-5 rounded-full border border-white/20 text-white font-medium text-lg hover:bg-white/10 transition-colors backdrop-blur-sm">
                    How it Works
                  </button>
                </Link>
              </Magnetic>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* 
        MISSION STATEMENT: Editorial Scrolling Text
      */}
      <section className="py-32 md:py-48 bg-slate-50 overflow-hidden">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.1] text-slate-900 indent-24">
              <TextReveal text="We invite the brightest minds to work alongside the District Collector and senior officials to solve real-world challenges in Malappuram." />
            </h2>
            <div className="mt-16 flex justify-end">
              <div className="max-w-sm">
                <p className="text-slate-500 text-lg leading-relaxed">
                  This is not just an internship. It is a civic duty. A chance to serve the people, understand the system, and drive meaningful change from within.
                </p>
                <Link href="/about" className="inline-block mt-6 border-b border-slate-900 pb-1 text-sm font-bold uppercase tracking-widest hover:text-indigo-600 hover:border-indigo-600 transition-colors">
                  Read our Philosophy
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 
        IMPACT GRID: Asymmetric & 3D
      */}
      <section className="py-24 bg-white border-t border-slate-100">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <h3 className="text-5xl font-serif text-slate-900">
              <span className="block text-xl font-sans font-bold text-indigo-600 uppercase tracking-widest mb-2">Our Impact</span>
              Real Change.<br />Real Time.
            </h3>
            <Link href="/impact" className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 text-slate-900 font-medium hover:bg-slate-200 transition-colors">
              View Impact Report <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <TiltCard className="col-span-1 lg:col-span-2 relative h-[500px] rounded-3xl overflow-hidden group">
              <Image 
                src="https://images.unsplash.com/photo-1541872703-74c5963631df?q=80&w=2000&auto=format&fit=crop"
                alt="Field Work"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12">
                <div className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-2">Project Spotlight</div>
                <h4 className="text-3xl md:text-4xl text-white font-serif mb-4">Tribal Welfare Assessment</h4>
                <p className="text-slate-300 max-w-lg mb-6">Interns conducted a comprehensive survey of 50+ settlements to identify gaps in healthcare and education access.</p>
                <span className="text-white border-b border-white/50 pb-1 text-sm font-bold uppercase tracking-wider group-hover:border-white transition-colors">Read Case Study</span>
              </div>
            </TiltCard>

            <div className="col-span-1 space-y-8 lg:space-y-12 flex flex-col justify-center">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <div className="text-6xl font-serif text-indigo-600 mb-2 font-medium">
                  <Counter value={150} />+
                </div>
                <div className="text-sm font-bold text-slate-900 uppercase tracking-widest">Interns Graduated</div>
                <p className="text-slate-500 mt-2 text-sm">Empowered youth now working in policy, tech, and governance.</p>
              </div>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <div className="text-6xl font-serif text-indigo-600 mb-2 font-medium">
                  <Counter value={45} />
                </div>
                <div className="text-sm font-bold text-slate-900 uppercase tracking-widest">Projects Completed</div>
                <p className="text-slate-500 mt-2 text-sm">Direct interventions in waste management, education, and health.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 
        VIDEO/VISUAL BREAK
      */}
      <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
        <Parallax offset={100} className="absolute inset-0 h-[120%]">
          <Image
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2940&auto=format&fit=crop"
            alt="Conference"
            fill
            className="object-cover brightness-50"
          />
        </Parallax>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <FadeIn>
            <div className="w-24 h-24 mx-auto bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center mb-12 border border-white/20 cursor-pointer hover:scale-110 transition-transform duration-300 group">
              <PlayCircle className="w-10 h-10 text-white fill-white/20 group-hover:fill-white/100 transition-all" />
            </div>
            <h3 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
              In the Service<br/>of the People
            </h3>
            <Link href="/gallery">
              <button className="px-8 py-3 rounded-full border border-white/30 text-white font-medium hover:bg-white hover:text-slate-900 transition-all">
                Explore Gallery
              </button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* 
        LATEST INSIGHTS (BLOG)
      */}
      <section className="py-24 bg-slate-50">
        <Container>
          <div className="flex items-end justify-between mb-16">
            <h3 className="text-4xl md:text-5xl font-serif text-slate-900">Voices from the Field</h3>
            <Link href="/blog" className="text-indigo-600 font-bold uppercase tracking-widest text-sm hover:underline">View all stories</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Link href="/blog" key={i} className="group cursor-pointer">
                <div className="relative aspect-[3/2] rounded-2xl overflow-hidden mb-6">
                  <Image 
                    src={`https://images.unsplash.com/photo-${i === 1 ? '1454165804606-c3d57bc86b40' : i === 2 ? '1517048676732-d65bc937f952' : '1551836022-d5d88e9218df'}?q=80&w=800&auto=format&fit=crop`}
                    alt="Blog thumbnail"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Intern Experience</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span className="text-xs text-slate-500">Oct 12, 2023</span>
                </div>
                <h4 className="text-xl font-serif font-bold text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors">
                  {i === 1 ? "My journey from classroom to collectorate" : i === 2 ? "Implementing digital literacy in rural panchayats" : "Analyzing the impact of monsoon preparedness"}
                </h4>
                <p className="text-slate-500 text-sm line-clamp-2">
                  An inside look at the daily challenges and triumphs of working with the district administration.
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}