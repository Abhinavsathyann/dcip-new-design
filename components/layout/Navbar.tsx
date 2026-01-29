"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Globe, ArrowUpRight } from "lucide-react";
import { Container } from "./Container";
import { siteConfig } from "@/config/site";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
          isScrolled ? "py-4" : "py-6"
        )}
      >
        <Container className="max-w-[1440px]">
          <div className={clsx(
            "relative flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500",
            isScrolled 
              ? "bg-white/70 backdrop-blur-xl shadow-lg shadow-black/5 border border-white/20" 
              : "bg-transparent"
          )}>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative flex items-center justify-center w-10 h-10 overflow-hidden rounded-full bg-slate-900 text-white transition-transform group-hover:scale-105">
                 <Globe className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className={clsx(
                  "font-bold text-sm leading-tight font-serif tracking-wide transition-colors",
                  isScrolled ? "text-slate-900" : "text-white"
                )}>
                  DCIP Malappuram
                </span>
                <span className={clsx(
                  "text-[10px] uppercase tracking-widest opacity-80",
                  isScrolled ? "text-slate-500" : "text-slate-300"
                )}>
                  Govt. of Kerala
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center bg-slate-100/10 rounded-full px-2 p-1 backdrop-blur-md border border-white/10">
              <nav>
                <ul className="flex items-center gap-1">
                  {siteConfig.navItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={clsx(
                          "relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 hover:bg-white/20",
                          isScrolled ? "text-slate-600 hover:text-slate-900" : "text-slate-200 hover:text-white"
                        )}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* CTA */}
            <div className="hidden md:block">
              <Link href="/apply" className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-full overflow-hidden transition-transform hover:scale-105">
                <span className="relative z-10">Apply Now</span>
                <ArrowUpRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                <div className="absolute inset-0 bg-indigo-500 transition-transform origin-left scale-x-0 group-hover:scale-x-100 duration-300 ease-out" />
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className={clsx(
                "md:hidden p-2 transition-colors",
                isScrolled ? "text-slate-900" : "text-white"
              )}
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
            className="fixed inset-0 z-[60] bg-slate-900/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 p-2 text-white/50 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <nav className="text-center">
              <ul className="space-y-8">
                {siteConfig.navItems.map((item, idx) => (
                  <motion.li
                    key={item.name}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + idx * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-4xl font-serif text-slate-300 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12"
              >
                <Link
                  href="/apply"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg"
                >
                  Apply Now <ArrowUpRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};