"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

export const LatestInsights = () => {
  return (
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
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
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
  );
};