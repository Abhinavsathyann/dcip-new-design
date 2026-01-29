"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Modal } from "@/components/ui/Modal";
import { Badge } from "@/components/ui/Badge";
import { clsx } from "clsx";
import { ZoomIn } from "lucide-react";

// Types
type Category = "All" | "Field Activities" | "Meetings" | "Community" | "Training";

interface GalleryItem {
  id: number;
  src: string;
  category: Exclude<Category, "All">;
  caption: string;
}

// Static Data - Using high quality placeholders from Unsplash source for demo
// In production, these would be local assets in /public/gallery/
const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1541872703-74c5963631df?auto=format&fit=crop&q=80&w=1000",
    category: "Meetings",
    caption: "District Development Committee Review Meeting",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1000",
    category: "Field Activities",
    caption: "Site inspection at tribal settlement project",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000",
    category: "Training",
    caption: "Orientation workshop for new intern batch",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80&w=1000",
    category: "Community",
    caption: "Public outreach program at Malappuram Town Hall",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1000",
    category: "Training",
    caption: "Skill development session on data analysis",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1000",
    category: "Meetings",
    caption: "Presentation of internship reports to District Collector",
  },
];

const CATEGORIES: Category[] = ["All", "Field Activities", "Meetings", "Community", "Training"];

export const GalleryGrid = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems = activeCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section className="py-16 bg-white">
      <Container>
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={clsx(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                activeCategory === cat
                  ? "bg-slate-900 text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl bg-slate-100"
              onClick={() => setSelectedImage(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedImage(item);
                }
              }}
              aria-label={`View image: ${item.caption}`}
            >
              <Image
                src={item.src}
                alt={item.caption}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/60 transition-colors duration-300 flex items-center justify-center">
                 <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 text-center p-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 text-white">
                      <ZoomIn className="w-6 h-6" />
                    </div>
                    <p className="text-white font-medium text-sm drop-shadow-md">
                      {item.caption}
                    </p>
                    <span className="inline-block mt-2 text-xs text-slate-300 uppercase tracking-wider">
                      {item.category}
                    </span>
                 </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            No images found in this category.
          </div>
        )}
      </Container>

      {/* Lightbox Modal */}
      <Modal 
        isOpen={!!selectedImage} 
        onClose={() => setSelectedImage(null)}
      >
        {selectedImage && (
          <div className="bg-transparent text-center">
            <div className="relative w-full h-[60vh] md:h-[75vh] mb-4">
              <Image
                src={selectedImage.src}
                alt={selectedImage.caption}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="bg-white/10 backdrop-blur-md inline-block px-6 py-3 rounded-lg">
              <p className="text-white font-medium text-lg">
                {selectedImage.caption}
              </p>
              <Badge variant="secondary" className="mt-2 bg-white/20 text-white border-none">
                {selectedImage.category}
              </Badge>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};