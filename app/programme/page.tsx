import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Clock, MapPin, Building2, Briefcase, FileText, Search, Users, BarChart3, Radio, GraduationCap } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Programme Overview",
  description: "Details about the District Collector’s Internship Programme structure, focus areas, and eligibility.",
  openGraph: {
    title: "Programme Overview | DCIP Malappuram",
    description: "Structure, focus areas, and eligibility for the internship programme.",
    url: `${siteConfig.url}/programme`,
  }
};

export default function ProgrammePage() {
  return (
    <>
      <PageHeader 
        title="Programme Overview" 
        subtitle="Understand the structure, scope, and requirements of the internship."
      />

      {/* Overview Text */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
             <p className="text-xl text-slate-600 leading-relaxed font-light">
               The programme is designed as a rigorous, full-time engagement where interns work closely with district officials. It follows a <strong>"learning-through-action"</strong> model, ensuring that theoretical knowledge is applied to solve real-world administrative challenges.
             </p>
          </div>
        </Container>
      </section>

      {/* Programme Structure */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-200">
        <Container>
          <SectionHeading title="Programme Structure" className="mb-12" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Duration</h4>
              <p className="text-slate-600 text-sm">3 – 4 Months</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Mode</h4>
              <p className="text-slate-600 text-sm">On-site (Full Time)</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Location</h4>
              <p className="text-slate-600 text-sm">Collectorate & Field Units</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Nature</h4>
              <p className="text-slate-600 text-sm">Non-stipendiary</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Badge variant="secondary" className="px-4 py-2">
              Working hours: As per district administration norms
            </Badge>
          </div>
        </Container>
      </section>

      {/* Focus Areas */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <SectionHeading title="Key Focus Areas" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              { icon: Building2, title: "Public Administration & Governance", desc: "Understanding the workflow of government offices." },
              { icon: FileText, title: "Field Surveys & Reporting", desc: "Gathering ground-level data for projects." },
              { icon: Search, title: "Research & Documentation", desc: "Analyzing data and documenting case studies." },
              { icon: Radio, title: "Digital Communication & Outreach", desc: "Managing public information dissemination." },
              { icon: BarChart3, title: "Data Collection & Analysis", desc: "Supporting decision-making with data." },
              { icon: Users, title: "Community Engagement", desc: "Direct interaction with the public." },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                <div className="shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center">
                    <item.icon className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Eligibility */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-serif mb-6">Eligibility Criteria</h2>
              <p className="text-slate-400 mb-8 text-lg">
                We are looking for passionate individuals ready to contribute to nation-building.
              </p>
              <ul className="space-y-6">
                {[
                  "Graduate or Postgraduate in any discipline",
                  "Strong communication and interpersonal skills",
                  "Deep commitment to public service",
                  "Willingness to travel for field assignments",
                  "Proficiency in English & Malayalam preferred"
                ].map((req, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-slate-200 font-medium">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Visual/Decorative Panel */}
            <div className="hidden lg:flex justify-center items-center p-8 bg-slate-800 rounded-2xl border border-slate-700">
               <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-indigo-600/20 text-indigo-400 mb-6">
                    <Users className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Join the Squad</h3>
                  <p className="text-slate-400 max-w-xs mx-auto text-sm">
                    Become part of a dynamic team driving change in Malappuram district.
                  </p>
               </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}