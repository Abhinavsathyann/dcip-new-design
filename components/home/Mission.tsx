"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { TextReveal } from "@/components/ui/Motion";

export const Mission = () => {
  return (
    <section className="py-24 md:py-48 bg-slate-50 overflow-hidden">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.2] md:leading-[1.1] text-slate-900 indent-0 md:indent-24">
            <TextReveal text="We invite the brightest minds to work alongside the District Collector and senior officials to solve real-world challenges in Malappuram." />
          </h2>
          <div className="mt-12 md:mt-16 flex justify-start md:justify-end">
            <div className="max-w-sm">
              <p className="text-slate-500 text-base md:text-lg leading-relaxed">
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
  );
};