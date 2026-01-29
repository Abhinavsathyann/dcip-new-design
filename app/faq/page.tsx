"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Accordion } from "@/components/ui/Accordion";
import { FadeIn } from "@/components/ui/Motion";
import Link from "next/link";

const FAQS = [
  {
    title: "What is the primary objective of DCIP?",
    content: "The programme aims to provide youth with a platform to understand the workings of the District Administration, engage in public service, and contribute to development initiatives through research and field assistance."
  },
  {
    title: "Is there any financial remuneration?",
    content: "No. DCIP is strictly a voluntary, non-stipendiary service internship. It is designed for individuals driven by a passion for public service and governance exposure."
  },
  {
    title: "What is the selection process?",
    content: "Selection is conducted periodically based on requirements. It typically involves a screening of academic profiles followed by an interaction to assess the candidate's aptitude for public administration."
  },
  {
    title: "What kind of certification is provided?",
    content: "Upon successful completion of the tenure and submission of the required project reports, interns receive a Certificate of Service/Completion from the District Administration."
  },
  {
    title: "Can this internship lead to a permanent job?",
    content: "No. This internship does not guarantee or imply any form of permanent employment, absorption, or placement in the government service or associated agencies."
  }
];

export default function FAQPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <PageHeader 
        title="Information Center" 
        subtitle="Common queries regarding the nature and scope of the internship programme."
      />
      
      <Container className="py-24 max-w-4xl">
        <FadeIn>
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12">
            <Accordion items={FAQS} />
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-12 text-center">
          <p className="text-slate-600 mb-6 text-sm">
            For specific queries not covered here, you may contact the programme office.
          </p>
          <div className="inline-block px-6 py-3 rounded-full bg-slate-200 text-slate-600 font-medium text-sm">
            dcip@malappuram.info
          </div>
        </FadeIn>
      </Container>
    </main>
  );
}