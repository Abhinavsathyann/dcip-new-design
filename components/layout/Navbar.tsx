"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Globe } from "lucide-react";
import { Container } from "./Container";
import { Button } from "../ui/Button";
import { siteConfig } from "@/config/site";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-3"
          : "bg-transparent py-5"
      )}
    >
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 z-50">
             {/* Using a placeholder SVG logic or the file from public if it exists. 
                 Using a generic government-style shield icon for now as placeholder for the logo.svg */}
            <div className={clsx(
                "flex items-center justify-center w-10 h-10 rounded-full", 
                isScrolled ? "bg-indigo-600 text-white" : "bg-white text-indigo-900"
            )}>
               <Globe className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className={clsx(
                "font-bold text-lg leading-tight font-serif",
                isScrolled ? "text-slate-900" : "text-white"
              )}>
                DCIP Malappuram
              </span>
              <span className={clsx(
                "text-xs uppercase tracking-wider",
                isScrolled ? "text-slate-500" : "text-slate-200"
              )}>
                District Administration
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-6">
              {siteConfig.navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={clsx(
                      "text-sm font-medium transition-colors hover:text-indigo-400",
                      isScrolled ? "text-slate-700" : "text-slate-100"
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/apply">
              <Button
                variant={isScrolled ? "primary" : "outline"}
                size="sm"
                className={clsx(
                   !isScrolled && "border-white text-white hover:bg-white hover:text-slate-900"
                )}
              >
                Apply Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={clsx(
              "md:hidden z-50 p-2 rounded-md transition-colors",
              isScrolled ? "text-slate-900" : "text-white"
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </Container>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-white md:hidden"
          >
            <ul className="flex flex-col items-center gap-6 mb-8">
              {siteConfig.navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-serif text-slate-800 hover:text-indigo-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/apply" onClick={() => setIsOpen(false)}>
              <Button>
                Apply Now
              </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};