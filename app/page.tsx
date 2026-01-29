"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Hero } from "@/components/home/Hero";

// Dynamic imports for code splitting
// Loading below-the-fold content lazily to improve FCP/LCP
const Mission = dynamic(() => import("@/components/home/Mission").then(mod => mod.Mission));

// Heavy interactive components load client-side only (SSR: false) to save hydration time
const Impact = dynamic(() => import("@/components/home/Impact").then(mod => mod.Impact), {
  ssr: false,
  loading: () => <div className="h-[500px] bg-slate-50" />
});

const VisualBreak = dynamic(() => import("@/components/home/VisualBreak").then(mod => mod.VisualBreak), {
  ssr: false,
  loading: () => <div className="h-[80vh] bg-slate-900" />
});

const LatestInsights = dynamic(() => import("@/components/home/LatestInsights").then(mod => mod.LatestInsights));

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <Impact />
      <VisualBreak />
      <LatestInsights />
    </>
  );
}