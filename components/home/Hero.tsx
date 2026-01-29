"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { FadeIn, Magnetic, MaskText } from "@/components/ui/Motion";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export const Hero = () => {
  const { scrollY } = useScroll();
  const heroScale = useTransform(scrollY, [0, 1000], [1, 1.2]);
  const heroOpacity = useTransform(scrollY, [0, 800], [1, 0]);

  return (
    <section className="relative h-screen min-h-[800px] w-full overflow-hidden bg-slate-950">
      {/* Dynamic Background */}
      <motion.div 
        style={{ scale: heroScale, opacity: heroOpacity }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <Image
          src="https://images.unsplash.com/photo-1596386461350-326ea77c3797?q=80&w=2940&auto=format&fit=crop"
          alt="Malappuram Landscape"
          fill
          className="object-cover opacity-50"
          priority
          sizes="100vw"
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
  );
};