import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Target, Lightbulb, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about DCIP Malappuram, an official initiative aimed at engaging youth in governance and community development.",
  openGraph: {
    title: "About DCIP Malappuram",
    description: "Empowering youth through governance and community engagement.",
    url: `${siteConfig.url}/about`,
  }
};

export default function AboutPage() {
  return (
    <>
      <PageHeader 
        title="About DCIP Malappuram" 
        subtitle="Empowering youth through governance, innovation, and community engagement."
      />

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-900 mb-6">
              About the Programme
            </h3>
            <div className="prose prose-slate prose-lg text-slate-600 leading-relaxed text-justify">
              <p className="mb-6">
                The District Collector’s Internship Programme (DCIP) Malappuram is an official initiative of the Malappuram District Administration aimed at engaging graduates and young professionals in district-level governance and community development.
              </p>
              <p className="mb-6">
                The programme offers interns an opportunity to gain firsthand exposure to public administration, policy implementation, research, documentation, and field-based initiatives that directly impact citizens.
              </p>
              <p>
                DCIP Malappuram seeks to nurture socially responsible individuals with strong professional values, leadership skills, and a deep understanding of governance systems.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-200">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Vision Card */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 relative overflow-hidden group hover:border-indigo-100 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Lightbulb className="w-24 h-24 text-indigo-600" />
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900">Our Vision</h3>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg">
                “To develop a generation of youth equipped with governance insight, civic responsibility, and leadership qualities.”
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 relative overflow-hidden group hover:border-indigo-100 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Target className="w-24 h-24 text-indigo-600" />
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900">Our Mission</h3>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg">
                “To provide structured, hands-on exposure to district administration and enable interns to contribute meaningfully to public service initiatives.”
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Why DCIP */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <SectionHeading 
            title="Why DCIP Malappuram?" 
            subtitle="A unique opportunity to bridge the gap between academic learning and practical governance."
          />
          
          <div className="mt-12 max-w-3xl mx-auto">
            <ul className="space-y-6">
              {[
                "Direct exposure to district administration functions",
                "Mentorship from senior government officials",
                "Real-world public service experience",
                "Skill development and professional discipline",
                "Opportunity to contribute to community development"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-indigo-600 shrink-0 mt-0.5" />
                  <span className="text-lg text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}