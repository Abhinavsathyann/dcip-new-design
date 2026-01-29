
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { FadeIn, StaggerContainer } from "@/components/ui/Motion";
import { ArrowUpRight } from "lucide-react";
import { BLOG_POSTS } from "@/data/blog";

export default function BlogPage() {
  const featuredPost = BLOG_POSTS.find(p => p.featured) || BLOG_POSTS[0];
  const regularPosts = BLOG_POSTS.filter(p => p.id !== featuredPost.id);

  return (
    <main className="bg-slate-50 min-h-screen">
      <PageHeader 
        title="Insights" 
        subtitle="Stories of governance, development, and change from the ground up."
      />

      <Container className="py-24">
        {/* Featured Post (Big) */}
        <div className="mb-24">
          <FadeIn>
            <Link href={`/blog/${featuredPost.id}`} className="group grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
                <Image 
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-3 py-1 rounded-full border border-slate-200 text-xs font-bold uppercase tracking-wider text-indigo-600 bg-white">Featured</span>
                  <span className="text-slate-500 text-sm">{featuredPost.date}</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6 group-hover:text-indigo-800 transition-colors leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  {featuredPost.excerpt}
                </p>
                <div className="inline-flex items-center gap-2 text-indigo-600 font-bold tracking-wide uppercase text-sm border-b border-indigo-600 pb-1">
                  Read Article <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </FadeIn>
        </div>

        {/* Regular Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {regularPosts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id} className="group block">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-slate-200 shadow-sm border border-slate-100">
                <Image 
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">{post.category}</span>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <span className="text-xs text-slate-500">{post.date}</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3 group-hover:text-indigo-700 transition-colors">
                {post.title}
              </h3>
              <p className="text-slate-500 line-clamp-2 leading-relaxed">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </StaggerContainer>

      </Container>
    </main>
  );
}
