"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ZoomIn, ChevronRight, ImageIcon } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { clsx } from "clsx";
import { AnimatePresence, motion } from "framer-motion";

// --- Types ---
interface GalleryItemData {
  id: number;
  src: string;
  title: string;
  category: string;
  description: string;
}

// --- Static Data ---
const GALLERY_ITEMS: GalleryItemData[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1541872703-74c5963631df?auto=format&fit=crop&q=80&w=1000",
    title: "Planning Committee",
    category: "Meetings",
    description: "District officials reviewing the annual development plan.",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1000",
    title: "Field Inspection",
    category: "Field Work",
    description: "Interns verifying infrastructure projects in rural sectors.",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000",
    title: "Skills Workshop",
    category: "Training",
    description: "Capacity building session for new cohort members.",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80&w=1000",
    title: "Public Outreach",
    category: "Community",
    description: "engaging with citizens at the town hall meeting.",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1000",
    title: "Data Analysis",
    category: "Research",
    description: "Compiling survey data for the digital literacy report.",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1000",
    title: "Final Presentation",
    category: "Milestone",
    description: "Interns presenting their findings to the Collector.",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&q=80&w=1000",
    title: "Community Service",
    category: "Volunteering",
    description: "Weekend cleaning drive organized by the batch.",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000",
    title: "Collaborative Space",
    category: "Office",
    description: "Working together on group policy notes.",
  },
];

// --- Sub-Components ---

interface GalleryItemProps {
  item: GalleryItemData;
  onClick: (item: GalleryItemData) => void;
}

const GalleryItem = ({ 
  item, 
  onClick 
}: GalleryItemProps) => {
  return (
    <motion.button
      layoutId={`gallery-item-${item.id}`}
      onClick={() => onClick(item)}
      className="group relative block w-full aspect-[4/5] overflow-hidden rounded-xl bg-slate-200 focus:outline-none focus:ring-4 focus:ring-indigo-500/50"
      aria-label={`View image: ${item.title}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Image
        src={item.src}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-left">
        <span className="inline-block px-2 py-1 mb-2 text-[10px] font-bold uppercase tracking-widest text-indigo-200 bg-indigo-900/50 backdrop-blur-sm rounded-md w-fit">
          {item.category}
        </span>
        <h3 className="text-white font-serif font-bold text-lg leading-tight">
          {item.title}
        </h3>
        <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
           <p className="text-slate-300 text-xs mt-1 line-clamp-2">{item.description}</p>
        </div>
      </div>
      
      {/* Icon hint */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-white/20 backdrop-blur-md p-1.5 rounded-full text-white">
          <ZoomIn className="w-4 h-4" />
        </div>
      </div>
    </motion.button>
  );
};

const ImageModal = ({ 
  item, 
  onClose 
}: { 
  item: GalleryItemData; 
  onClose: () => void;
}) => {
  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = "unset"; };
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <motion.div
        layoutId={`gallery-item-${item.id}`}
        className="relative w-full max-w-5xl max-h-[90vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()} // Prevent close on image click
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 md:-right-12 p-2 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Close gallery"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Image Container */}
        <div className="relative w-full h-[60vh] md:h-[80vh] bg-black/20 rounded-lg overflow-hidden shadow-2xl">
          <Image
            src={item.src}
            alt={item.title}
            fill
            className="object-contain"
            priority
            quality={90}
          />
        </div>

        {/* Caption */}
        <div className="mt-6 text-center max-w-2xl">
          <h3 className="text-2xl font-serif text-white mb-2">{item.title}</h3>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            {item.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- Main Section Component ---

export const GallerySection = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItemData | null>(null);

  return (
    <section id="gallery" className="py-24 bg-white relative">
      <Container>
        {/* Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
            Gallery
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            A visual journey through the impact, fieldwork, and community engagements of the District Collector's Internship Programme.
          </p>
          <div className="w-24 h-1 bg-indigo-600 rounded-full mx-auto mt-8" />
        </div>

        {/* Grid - 2 Cols Mobile, 3 Tablet, 4 Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
          {GALLERY_ITEMS.map((item) => (
            <GalleryItem 
              key={item.id} 
              item={item} 
              onClick={(i) => setSelectedItem(i)} 
            />
          ))}
        </div>

        {/* Empty State / Loading would go here */}
        {GALLERY_ITEMS.length === 0 && (
          <div className="text-center py-20 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
            <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
              <ImageIcon className="w-8 h-8" />
            </div>
            <p className="text-slate-500 font-medium">No images available at the moment.</p>
          </div>
        )}
      </Container>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <ImageModal 
            item={selectedItem} 
            onClose={() => setSelectedItem(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

// Default export for cleaner imports if needed
export default GallerySection;