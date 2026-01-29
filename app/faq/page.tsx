"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Accordion } from "@/components/ui/Accordion";
import { FadeIn } from "@/components/ui/Motion";
import Link from "next/link";

const FAQS = [
  {
    title: "Who is eligible to apply for DCIP?",
    content: "Any graduate or postgraduate from a recognized university is eligible. We look for candidates with a strong academic record, proficiency in English and Malayalam, and a genuine passion for public service. Final year students awaiting results may also apply provisionally."
  },
  {
    title: "Is this a paid internship?",
    content: "No, DCIP is a voluntary service-learning programme. It is non-stipendiary. However, interns gain invaluable experience, mentorship from senior IAS officers, and an official certification from the District Administration upon successful completion."
  },
  {
    title: "What is the duration of the programme?",
    content: "The standard duration is 4 months. However, depending on project requirements and intern performance, this can be extended. Interns are expected to commit full-time during this period."
  },
  {
    title: "Will I get a certificate?",
    content: "Yes. Upon successful completion of the internship and submission of the final project report, you will receive a certificate of completion signed by the District Collector, Malappuram."
  },
  {
    title: "Can I do this internship part-time or remotely?",
    content: "No. DCIP is a full-time, on-site engagement. The nature of work involves field visits, office coordination, and real-time problem solving which cannot be done remotely."
  },
  {
    title: "What kind of projects will I work on?",
    content: "Projects vary based on current district priorities. Past projects have included tribal welfare surveys, waste management audits, digital literacy campaigns, disaster management planning, and tourism circuit mapping."
  }
];

export default function FAQPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <PageHeader 
        title="Frequently Asked Questions" 
        subtitle="Everything you need to know about the District Collector's Internship Programme."
      />
      
      <Container className="py-24 max-w-4xl">
        <FadeIn>
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12">
            <Accordion items={FAQS} />
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-12 text-center">
          <p className="text-slate-600 mb-6">Still have questions? We are here to help.</p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="px-6 py-3 rounded-full bg-slate-900 text-white font-medium hover:bg-indigo-600 transition-colors">
              Contact Support
            </Link>
            <Link href="/apply" className="px-6 py-3 rounded-full border border-slate-300 text-slate-900 font-medium hover:bg-slate-100 transition-colors">
              Apply Now
            </Link>
          </div>
        </FadeIn>
      </Container>
    </main>
  );
}