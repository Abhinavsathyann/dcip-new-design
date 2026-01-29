import React from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* 
        HERO SECTION 
        Note: Using a high-quality placeholder image for the background.
        In production, replace 'https://picsum.photos/1920/1080?grayscale' with '/hero-bg.jpg'.
      */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://picsum.photos/id/29/1920/1080')",
          }}
        >
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-slate-900/70 hero-gradient" />
        </div>

        {/* Content */}
        <Container className="relative z-10 text-center text-white pt-20">
          <Badge variant="secondary" className="mb-6 backdrop-blur-sm bg-white/10 text-white border-white/20">
            Official Initiative
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-serif leading-tight mb-6 drop-shadow-lg">
            District Collector’s<br className="hidden md:block" /> Internship Programme
          </h1>
          
          <div className="w-24 h-1 bg-indigo-500 mx-auto mb-8 rounded-full" />
          
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            An official initiative of the Malappuram District Administration empowering youth through governance and community engagement.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="min-w-[160px] group">
              Learn More
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="min-w-[160px] border-white text-white hover:bg-white hover:text-slate-900"
            >
              Programme Overview
            </Button>
          </div>
        </Container>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
           <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
             <div className="w-1 h-2 bg-white/50 rounded-full" />
           </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4">
              About The Initiative
            </span>
            
            <SectionHeading 
              title="Empowering the Future of Governance"
              className="mb-8"
            />

            <p className="text-lg md:text-2xl text-slate-600 leading-relaxed font-serif text-center">
              “DCIP Malappuram is a structured internship programme initiated by the District Administration to engage young graduates in governance, public service, research, and field-level implementation of development initiatives.”
            </p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-left">
               {/* Feature 1 */}
               <div className="p-6 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="h-10 w-10 bg-indigo-100 text-indigo-600 rounded-md flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Public Service</h3>
                  <p className="text-slate-600 text-sm">Direct exposure to administrative functions and public interaction.</p>
               </div>
               
               {/* Feature 2 */}
               <div className="p-6 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="h-10 w-10 bg-indigo-100 text-indigo-600 rounded-md flex items-center justify-center mb-4">
                     <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Research & Innovation</h3>
                  <p className="text-slate-600 text-sm">Opportunities to conduct studies and propose innovative solutions.</p>
               </div>

               {/* Feature 3 */}
               <div className="p-6 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="h-10 w-10 bg-indigo-100 text-indigo-600 rounded-md flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Community Engagement</h3>
                  <p className="text-slate-600 text-sm">Grassroots level interaction and project implementation.</p>
               </div>
            </div>

            <div className="mt-12">
               <Button variant="outline" className="border-slate-300 text-slate-700 hover:border-slate-800">
                 Read Programme Guidelines
               </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}