"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { FadeIn } from "@/components/ui/Motion";
import { ArrowRight } from "lucide-react";

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-20">
      <Container className="max-w-2xl">
        <FadeIn>
          <div className="mb-12">
            <h1 className="text-4xl font-serif text-slate-900 mb-4">Application Form</h1>
            <p className="text-slate-500">
              Please ensure all details are accurate. Incomplete forms will be rejected.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <form className="space-y-8 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
            {/* Section 1 */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Full Name" placeholder="John Doe" />
                <Input label="Email" type="email" placeholder="john@example.com" />
                <Input label="Mobile" type="tel" placeholder="+91 98765 43210" />
                <Input label="Date of Birth" type="date" />
              </div>
            </div>

            {/* Section 2 */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">Education</h3>
              <div className="grid grid-cols-1 gap-6">
                <Select label="Highest Qualification" options={[
                    {label: "Graduate", value: "grad"},
                    {label: "Postgraduate", value: "pg"},
                    {label: "PhD", value: "phd"}
                ]} />
                <Input label="Institution / University" placeholder="Name of college" />
              </div>
            </div>

            {/* Section 3 */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">Statement of Purpose</h3>
              <Textarea label="Why do you want to join DCIP?" placeholder="Tell us about your motivation (min 150 words)..." rows={6} />
            </div>

            <div className="pt-6">
              <button className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-indigo-600 transition-colors flex items-center justify-center gap-2 group">
                Submit Application <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </FadeIn>
      </Container>
    </main>
  );
}