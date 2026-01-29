
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { TextReveal, Parallax } from "@/components/ui/Motion";

export const Mission = () => {
  return (
    <section className="py-24 md:py-32 bg-slate-50 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side Image */}
          <div className="relative h-[500px] lg:h-[700px] w-full rounded-2xl overflow-hidden hidden lg:block shadow-2xl">
            <Parallax offset={20} className="h-[120%] w-full">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
                alt="District Administration Office"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </Parallax>
          </div>

          {/* Right Side Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.15] text-slate-900 mb-12">
              <TextReveal text="We invite the brightest minds to work alongside the District Collector and senior officials to solve real-world challenges in Malappuram." />
            </h2>
            <div className="flex justify-start md:justify-end">
              <div className="max-w-md">
                <p className="text-slate-500 text-base md:text-lg leading-relaxed">
                  This is not just an internship. It is a civic duty. A chance to serve the people, understand the system, and drive meaningful change from within.
                </p>
                <Link href="/about" className="inline-block mt-8 border-b border-slate-900 pb-1 text-sm font-bold uppercase tracking-widest hover:text-indigo-600 hover:border-indigo-600 transition-colors">
                  Read our Philosophy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
