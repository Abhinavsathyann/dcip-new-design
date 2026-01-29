"use client";

import React, { useEffect } from "react";

export default function SmoothScroll({ children }: { children?: React.ReactNode }) {
  useEffect(() => {
    // Lazy load Lenis to avoid blocking main thread on initial load
    let lenis: any;
    let rafId: number;

    const initLenis = async () => {
      const Lenis = (await import("lenis")).default;
      
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easing
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        touchMultiplier: 2,
      });

      function raf(time: number) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }

      rafId = requestAnimationFrame(raf);
    };

    initLenis();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (lenis) lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}