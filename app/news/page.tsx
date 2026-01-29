"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { Calendar, ArrowRight, Filter } from "lucide-react";
import { NEWS_ITEMS, NewsCategory } from "@/data/news";
import { clsx } from "clsx";

const CATEGORIES: ("All" | NewsCategory)[] = ["All", "Announcement", "Notice", "Update"];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState<"All" | NewsCategory>("All");

  const filteredNews = activeCategory === "All"
    ? NEWS_ITEMS
    : NEWS_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <PageHeader 
        title="News & Updates" 
        subtitle="Official announcements, notices, and updates from DCIP Malappuram."
      />

      <Container className="mt-12">
        {/* Filters */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-2 text-slate-500 font-medium">
            <Filter className="w-5 h-5" />
            <span>Filter by:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={clsx(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border",
                  activeCategory === cat
                    ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((item) => (
            <article 
              key={item.id} 
              className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full"
            >
              <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                <Image
                  src={item.coverImage}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <Badge 
                    variant={item.category === "Notice" ? "outline" : "default"}
                    className={clsx(
                      "shadow-sm",
                      item.category === "Notice" ? "bg-white text-red-600 border-red-200" :
                      item.category === "Announcement" ? "bg-indigo-600 text-white border-transparent" :
                      "bg-slate-900 text-white border-transparent"
                    )}
                  >
                    {item.category}
                  </Badge>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-slate-500 text-xs font-medium mb-3">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={item.publishedDate}>
                    {new Date(item.publishedDate).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>

                <h3 className="text-xl font-bold font-serif text-slate-900 mb-3 leading-snug group-hover:text-indigo-700 transition-colors line-clamp-2">
                  <Link href={`/news/${item.slug}`} className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {item.title}
                  </Link>
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {item.summary}
                </p>

                <div className="mt-auto flex items-center text-indigo-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                  Read Full Article <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredNews.length === 0 && (
          <div className="text-center py-24 bg-white rounded-xl border border-slate-200 border-dashed">
            <p className="text-slate-500 text-lg">No updates found in this category.</p>
            <button 
              onClick={() => setActiveCategory("All")}
              className="mt-4 text-indigo-600 font-medium hover:underline"
            >
              View all news
            </button>
          </div>
        )}

        {/* Pagination Placeholder */}
        {filteredNews.length > 0 && (
          <div className="mt-16 flex justify-center">
            <nav className="flex gap-2" aria-label="Pagination">
              <button disabled className="px-4 py-2 text-sm text-slate-400 border border-slate-200 rounded-md cursor-not-allowed">
                Previous
              </button>
              <button className="px-4 py-2 text-sm bg-indigo-600 text-white rounded-md">
                1
              </button>
              <button className="px-4 py-2 text-sm text-slate-600 border border-slate-200 rounded-md hover:bg-slate-50">
                2
              </button>
              <button className="px-4 py-2 text-sm text-slate-600 border border-slate-200 rounded-md hover:bg-slate-50">
                Next
              </button>
            </nav>
          </div>
        )}
      </Container>
    </main>
  );
}