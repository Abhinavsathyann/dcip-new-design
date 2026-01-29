import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Calendar, ChevronLeft, Share2 } from "lucide-react";
import { NEWS_ITEMS } from "@/data/news";
import { siteConfig } from "@/config/site";
import { clsx } from "clsx";

interface NewsDetailProps {
  params: { slug: string };
}

// SEO Metadata
export async function generateMetadata({ params }: NewsDetailProps): Promise<Metadata> {
  const item = NEWS_ITEMS.find((n) => n.slug === params.slug);

  if (!item) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: item.title,
    description: item.summary,
    openGraph: {
      title: item.title,
      description: item.summary,
      type: "article",
      publishedTime: item.publishedDate,
      url: `${siteConfig.url}/news/${item.slug}`,
      images: [
        {
          url: item.coverImage,
          width: 1200,
          height: 630,
          alt: item.title,
        },
      ],
    },
  };
}

export default function NewsDetailPage({ params }: NewsDetailProps) {
  const item = NEWS_ITEMS.find((n) => n.slug === params.slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 pb-20 pt-24 md:pt-32">
      <Container>
        {/* Breadcrumb / Back Link */}
        <div className="mb-8">
          <Link 
            href="/news" 
            className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to News & Updates
          </Link>
        </div>

        <article className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          {/* Article Header */}
          <div className="relative h-64 md:h-96 w-full">
            <Image
              src={item.coverImage}
              alt={item.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
              <div className="flex items-center gap-4 mb-4">
                <Badge className={clsx(
                   "border-none",
                   item.category === "Announcement" ? "bg-indigo-600" : 
                   item.category === "Notice" ? "bg-red-600" : "bg-slate-700"
                )}>
                  {item.category}
                </Badge>
                <div className="flex items-center text-sm font-medium text-slate-200">
                  <Calendar className="w-4 h-4 mr-2" />
                  <time dateTime={item.publishedDate}>
                    {new Date(item.publishedDate).toLocaleDateString("en-IN", {
                      weekday: 'long',
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif leading-tight text-shadow">
                {item.title}
              </h1>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-6 md:p-10 lg:p-12">
            <div className="prose prose-slate prose-lg max-w-none">
              <p className="lead text-xl text-slate-600 font-serif italic mb-8 border-l-4 border-indigo-600 pl-4">
                {item.summary}
              </p>
              
              <div className="space-y-6 text-slate-800 leading-relaxed">
                {item.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Share / Footer */}
            <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between">
              <span className="text-sm text-slate-500 font-medium">
                Official Release by District Administration
              </span>
              <button 
                className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
                aria-label="Share this article"
              >
                <Share2 className="w-4 h-4" />
                Share Article
              </button>
            </div>
          </div>
        </article>
      </Container>
    </main>
  );
}