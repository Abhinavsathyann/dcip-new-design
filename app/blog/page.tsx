"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { FadeIn, StaggerContainer } from "@/components/ui/Motion";
import { ArrowUpRight } from "lucide-react";

const POSTS = [
  {
    id: 1,
    title: "Bridging the Digital Divide: Lessons from Rural Malappuram",
    excerpt: "How a simple survey transformed into a district-wide digital literacy campaign.",
    date: "Oct 12, 2023",
    category: "Field Notes",
    author: "Adithya N.",
    image: "https://images.unsplash.com/photo-1541872703-74c5963631df?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "The Art of Listening: Grievance Redressal in Local Governance",
    excerpt: "Understanding the importance of empathy when dealing with public petitions.",
    date: "Sep 28, 2023",
    category: "Insights",
    author: "Fathima R.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Sustainable Tourism: Mapping the Unexplored Trails",
    excerpt: "Developing a new tourism circuit plan for the eastern hill regions.",
    date: "Aug 15, 2023",
    category: "Projects",
    author: "Rahul V.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "A Day in the Life of a DCIP Intern",
    excerpt: "From morning briefings at the Collectorate to evening field visits.",
    date: "Aug 02, 2023",
    category: "Experience",
    author: "Sneha P.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop"
  }
];

export default function BlogPage() {
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
            <Link href="/blog/featured" className="group grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop"
                  alt="Featured"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-3 py-1 rounded-full border border-slate-200 text-xs font-bold uppercase tracking-wider text-indigo-600">Featured</span>
                  <span className="text-slate-500 text-sm">Nov 10, 2023</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6 group-hover:text-indigo-800 transition-colors">
                  Reimagining Public Spaces: The Malappuram Urban Project
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  How intern-led design thinking workshops are reshaping the way citizens interact with public parks and libraries.
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
          {POSTS.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id} className="group block">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-slate-200">
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