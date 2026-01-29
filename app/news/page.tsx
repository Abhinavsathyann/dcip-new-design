"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/ui/Motion";
import { NEWS_ITEMS } from "@/data/news";
import { ArrowUpRight } from "lucide-react";

export default function NewsPage() {
  return (
    <main className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <Container>
        <div className="mb-20 border-b border-slate-200 pb-12">
          <h1 className="text-4xl md:text-6xl font-serif text-slate-900 mb-4">Official Updates</h1>
          <p className="text-slate-500 text-lg max-w-xl">
            Latest announcements, press releases, and circulars from the District Administration regarding DCIP.
          </p>
        </div>

        <div className="space-y-12">
          {NEWS_ITEMS.map((item, idx) => (
            <FadeIn key={item.id} delay={idx * 0.1}>
              <Link href={`/news/${item.slug}`} className="group block">
                <article className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-slate-100 pb-12">
                   <div className="md:col-span-4 lg:col-span-3">
                      <div className="aspect-[4/3] relative rounded-xl overflow-hidden bg-slate-200">
                        <Image src={item.coverImage} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                      </div>
                   </div>
                   <div className="md:col-span-8 lg:col-span-9">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 rounded-full border border-slate-200 text-xs font-medium uppercase tracking-wider text-slate-500">
                          {item.category}
                        </span>
                        <span className="text-xs text-slate-400">
                          {new Date(item.publishedDate).toLocaleDateString()}
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-serif font-medium text-slate-900 mb-4 group-hover:text-indigo-700 transition-colors">
                        {item.title}
                      </h2>
                      <p className="text-slate-600 line-clamp-2 max-w-3xl mb-6">
                        {item.summary}
                      </p>
                      <div className="inline-flex items-center gap-2 text-indigo-600 font-bold text-sm tracking-wide group-hover:gap-3 transition-all">
                        Read Full Article <ArrowUpRight className="w-4 h-4" />
                      </div>
                   </div>
                </article>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </main>
  );
}