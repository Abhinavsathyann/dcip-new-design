"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { clsx } from "clsx";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-200 last:border-none">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-6 text-left focus:outline-none group"
      >
        <span className={clsx("text-lg md:text-xl font-serif font-medium transition-colors", isOpen ? "text-indigo-600" : "text-slate-900 group-hover:text-indigo-600")}>
          {title}
        </span>
        <div className={clsx("ml-4 flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300", isOpen ? "border-indigo-600 bg-indigo-600 text-white rotate-180" : "border-slate-300 text-slate-400 group-hover:border-indigo-600 group-hover:text-indigo-600")}>
          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="pb-8 pt-2 text-slate-600 leading-relaxed text-lg">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Accordion: React.FC<{ items: { title: string; content: React.ReactNode }[] }> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={activeIndex === index}
          onClick={() => setActiveIndex(activeIndex === index ? null : index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};