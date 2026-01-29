"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn, Parallax } from "@/components/ui/Motion";
import { PlayCircle } from "lucide-react";

export const VisualBreak = () => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
      <Parallax offset={100} className="absolute inset-0 h-[120%]">
        <Image
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2940&auto=format&fit=crop"
          alt="Conference"
          fill
          className="object-cover brightness-50"
          sizes="100vw"
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
  );
};