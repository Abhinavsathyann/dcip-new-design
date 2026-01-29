
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { BLOG_POSTS } from "@/data/blog";

export const LatestInsights = () => {
  // Take first 3 posts except the featured one, or just first 3
  const postsToShow = BLOG_POSTS.slice(0, 3);

  return (
    <section className="py-24 bg-slate-50">
      <Container>
        <div className="flex items-end justify-between mb-16">
          <h3 className="text-4xl md:text-5xl font-serif text-slate-900">Voices from the Field</h3>
          <Link href="/blog" className="text-indigo-600 font-bold uppercase tracking-widest text-sm hover:underline">View all stories</Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {postsToShow.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id} className="group cursor-pointer">
              <div className="relative aspect-[3/2] rounded-2xl overflow-hidden mb-6 shadow-sm border border-slate-100">
                <Image 
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">{post.category}</span>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <span className="text-xs text-slate-500">{post.date}</span>
              </div>
              <h4 className="text-xl font-serif font-bold text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors line-clamp-2">
                {post.title}
              </h4>
              <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};
