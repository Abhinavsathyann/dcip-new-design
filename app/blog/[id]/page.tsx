
import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Calendar, ChevronLeft, Share2, User } from "lucide-react";
import { BLOG_POSTS } from "@/data/blog";
import { siteConfig } from "@/config/site";

interface BlogPostProps {
  params: { id: string };
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.id === params.id);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url: `${siteConfig.url}/blog/${post.id}`,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostProps) {
  const post = BLOG_POSTS.find((p) => p.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 pb-20 pt-24 md:pt-32">
      <Container>
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Insights
          </Link>
        </div>

        <article className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          {/* Header Image */}
          <div className="relative h-64 md:h-[400px] w-full">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <Badge className="bg-indigo-600 border-none text-white">
                  {post.category}
                </Badge>
                <div className="flex items-center text-sm font-medium text-slate-200">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center text-sm font-medium text-slate-200">
                  <User className="w-4 h-4 mr-2" />
                  <span>{post.author}</span>
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif leading-tight text-shadow-sm">
                {post.title}
              </h1>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-10 lg:p-12">
            <div className="prose prose-slate prose-lg max-w-none">
              <p className="lead text-xl text-slate-600 font-serif italic mb-8 border-l-4 border-indigo-600 pl-4">
                {post.excerpt}
              </p>
              
              <div className="space-y-6 text-slate-800 leading-relaxed font-light">
                {post.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between">
              <div className="text-sm text-slate-500">
                <span className="font-semibold text-slate-900">DCIP Malappuram</span> • Insights Blog
              </div>
              <button 
                className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
                aria-label="Share"
              >
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </div>
        </article>
      </Container>
    </main>
  );
}
