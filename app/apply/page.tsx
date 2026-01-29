"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Info, ArrowLeft } from "lucide-react";

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center">
      <Container className="max-w-xl">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 text-center">
          <div className="w-16 h-16 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Info className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-serif font-bold text-slate-900 mb-4">
            Applications are Closed
          </h1>
          <p className="text-slate-600 mb-8 leading-relaxed">
            The District Collector’s Internship Programme admits interns periodically based on departmental requirements. 
            There is no active application cycle at this moment.
          </p>
          <div className="space-y-4">
            <div className="bg-slate-50 p-4 rounded-lg text-sm text-slate-500">
              Please check the <strong>News & Updates</strong> section for official notifications regarding future cohorts.
            </div>
            <Link href="/" className="inline-block">
              <Button variant="secondary" className="gap-2">
                <ArrowLeft className="w-4 h-4" /> Return Home
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}