"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { FadeIn, MaskText, Parallax } from "@/components/ui/Motion";
import { ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export const Hero = () => {
  const { scrollY } = useScroll();
  const heroScale = useTransform(scrollY, [0, 1000], [1.1, 1.3]);
  const heroOpacity = useTransform(scrollY, [0, 800], [1, 0.2]);
  const textY = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section className="relative h-[110vh] min-h-[800px] w-full overflow-hidden bg-slate-950 flex flex-col justify-center">
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 will-change-transform"
        >
          <Image
            src="https://images.unsplash.com/photo-1596386461350-326ea77c3797?q=80&w=2940&auto=format&fit=crop"
            alt="Malappuram Landscape"
            fill
            className="object-cover opacity-60 grayscale-[0.2]"
            priority
            sizes="100vw"
            quality={90}
          />
        </motion.div>
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-900/40 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.8)_100%)]" />
      </div>

      {/* Content Layer */}
      <Container className="relative z-10 h-full flex flex-col justify-center pt-32">
        <motion.div style={{ y: textY }} className="max-w-6xl mx-auto text-center">
          
          {/* Identity Badge */}
          <FadeIn delay={0.2} priority className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-xs font-bold tracking-[0.25em] text-white uppercase shadow-2xl">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
              Govt. of Kerala Initiative
            </div>
          </FadeIn>

          {/* Main Title */}
          <div className="mb-10 overflow-hidden">
             <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-serif font-medium text-white leading-[0.9] tracking-tight mix-blend-overlay opacity-90">
               <MaskText text={["Governance", "Reimagined"]} delay={0.1} />
             </h1>
          </div>

          {/* Subtitle / Mission */}
          <FadeIn delay={0.8} className="max-w-2xl mx-auto" priority>
            <p className="text-xl md:text-2xl text-slate-300/90 font-light leading-relaxed text-balance">
              Bridging the gap between academic theory and administrative reality. 
              <span className="text-white font-normal"> A platform for youth to serve, learn, and contribute</span> to the district's development.
            </p>
          </FadeIn>

        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-0 right-0 z-20 flex justify-center"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">Explore Programme</span>
          <div className="w-px h-16 bg-gradient-to-b from-white/0 via-white/30 to-white/0 overflow-hidden">
            <motion.div 
              animate={{ y: [-64, 64] }} 
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="w-full h-1/2 bg-white/50"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};