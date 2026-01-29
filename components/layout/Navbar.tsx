
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe, ChevronRight, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { clsx } from "clsx";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 sm:pt-6 pointer-events-none"
      >
        <div
          className={clsx(
            "pointer-events-auto relative flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            scrolled
              ? "w-[90%] md:w-auto md:min-w-[700px] bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl shadow-black/20 py-2.5 px-4"
              : "w-[95%] max-w-7xl bg-transparent border border-transparent py-4 px-0"
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative z-10 shrink-0">
            <div
              className={clsx(
                "flex items-center justify-center w-10 h-10 rounded-full transition-all duration-500 overflow-hidden",
                scrolled
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 rotate-0"
                  : "bg-white text-slate-900 shadow-xl rotate-0"
              )}
            >
              <Globe className="w-5 h-5 animate-spin-slow" />
            </div>
            <div
              className={clsx(
                "flex flex-col transition-opacity duration-300",
                scrolled ? "hidden lg:flex" : "flex"
              )}
            >
              <span
                className={clsx(
                  "font-bold font-serif leading-none tracking-tight",
                  scrolled ? "text-white" : "text-white"
                )}
              >
                DCIP
              </span>
              <span
                className={clsx(
                  "text-[9px] uppercase tracking-widest font-medium opacity-80",
                  scrolled ? "text-slate-300" : "text-slate-200"
                )}
              >
                Malappuram
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 mx-4">
            <div className={clsx(
              "flex items-center px-1 py-1 rounded-full transition-colors", 
              scrolled ? "bg-transparent" : "bg-black/20 backdrop-blur-sm border border-white/5"
            )}>
              {siteConfig.navItems.slice(0, 5).map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative px-4 py-2 text-xs lg:text-sm font-medium transition-colors group"
                  >
                    <span
                      className={clsx(
                        "relative z-10 transition-colors duration-300",
                        isActive
                          ? "text-white"
                          : scrolled
                          ? "text-slate-400 group-hover:text-white"
                          : "text-slate-300 group-hover:text-white"
                      )}
                    >
                      {item.name}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="navbar-pill"
                        className={clsx(
                          "absolute inset-0 rounded-full -z-0",
                          scrolled ? "bg-white/10" : "bg-white/10"
                        )}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
              {/* Dropdown/More trigger could go here for remaining items */}
            </div>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 shrink-0">
             <Link 
               href="/apply"
               className={clsx(
                 "hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300",
                 scrolled 
                   ? "bg-white text-slate-950 hover:bg-indigo-50"
                   : "bg-white text-slate-950 shadow-xl hover:scale-105"
               )}
             >
               Apply Now
             </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(true)}
              className={clsx(
                "p-2.5 rounded-full transition-all duration-300 group",
                scrolled
                  ? "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
                  : "bg-black/20 text-white hover:bg-black/40 backdrop-blur-md"
              )}
              aria-label="Open menu"
            >
              <div className="flex flex-col gap-[5px] w-5 items-end group-hover:items-center transition-all">
                <span className="w-5 h-0.5 bg-current rounded-full" />
                <span className="w-3 group-hover:w-5 h-0.5 bg-current rounded-full transition-all duration-300" />
                <span className="w-4 group-hover:w-5 h-0.5 bg-current rounded-full transition-all duration-300" />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-slate-950 flex flex-col items-center justify-center p-6"
          >
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
               <div className="absolute -top-[20%] -right-[20%] w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[100px]" />
               <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[80px]" />
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 p-3 text-white/50 hover:text-white transition-colors border border-white/10 hover:bg-white/10 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="w-full max-w-md relative z-10">
              <div className="text-center mb-12">
                 <span className="text-indigo-500 font-bold tracking-widest uppercase text-xs">Menu</span>
              </div>
              
              <ul className="space-y-4">
                {siteConfig.navItems.map((item, idx) => (
                  <motion.li
                    key={item.name}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center justify-between text-4xl md:text-5xl font-serif text-slate-400 hover:text-white transition-colors py-2"
                    >
                      <span className="group-hover:translate-x-4 transition-transform duration-300">{item.name}</span>
                      <ArrowRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-indigo-500" />
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center text-slate-500 text-sm">
                 <span>&copy; DCIP Malappuram</span>
                 <div className="flex gap-4">
                    <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    <a href="#" className="hover:text-white transition-colors">Facebook</a>
                 </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
