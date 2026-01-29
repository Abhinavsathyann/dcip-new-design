"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Globe, ChevronRight } from "lucide-react";
import { Container } from "./Container";
import { siteConfig } from "@/config/site";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled ? "py-3" : "py-6"
        )}
      >
        <Container className="max-w-[1440px]">
          <div className={clsx(
            "relative flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500",
            isScrolled 
              ? "bg-slate-900/80 backdrop-blur-xl shadow-2xl shadow-black/10 border border-white/10" 
              : "bg-transparent"
          )}>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative flex items-center justify-center w-10 h-10 overflow-hidden rounded-full bg-white text-slate-900 shadow-lg shadow-white/10 transition-transform group-hover:scale-105">
                 <Globe className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className={clsx(
                  "font-bold text-sm leading-tight font-serif tracking-wide transition-colors",
                  isScrolled ? "text-white" : "text-white"
                )}>
                  DCIP Malappuram
                </span>
                <span className={clsx(
                  "text-[10px] uppercase tracking-widest opacity-60",
                  isScrolled ? "text-slate-300" : "text-slate-200"
                )}>
                  District Administration
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center">
              <nav className="bg-white/5 rounded-full px-2 p-1.5 backdrop-blur-md border border-white/10">
                <ul className="flex items-center gap-1">
                  {siteConfig.navItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={clsx(
                          "relative px-5 py-2 text-xs font-medium uppercase tracking-wider rounded-full transition-all duration-300",
                          isScrolled 
                            ? "text-slate-300 hover:text-white hover:bg-white/10" 
                            : "text-slate-200 hover:text-white hover:bg-white/10"
                        )}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </Container>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-slate-950/98 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 p-4 text-white/50 hover:text-white transition-colors border border-white/10 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>

            <nav className="text-center w-full max-w-sm px-6">
              <div className="mb-12 text-center">
                <div className="inline-block w-16 h-1 bg-indigo-500 rounded-full mb-6" />
                <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">Navigation</h2>
              </div>
              <ul className="space-y-6">
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
                      className="group flex items-center justify-between text-3xl font-serif text-slate-300 hover:text-white transition-colors border-b border-white/5 pb-4"
                    >
                      <span>{item.name}</span>
                      <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-indigo-400" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};