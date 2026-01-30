
"use client";

import React, { useRef } from "react";
import { Container } from "@/components/layout/Container";
import { FadeIn, StaggerContainer } from "@/components/ui/Motion";
import { Calendar, Users, FileText, CheckCircle2, AlertCircle, ArrowDown } from "lucide-react";
import { motion, useScroll } from "framer-motion";

export default function ProgrammePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-slate-900 text-white">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
             <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-indigo-500/20 rounded-full blur-[80px] md:blur-[120px] -translate-y-1/2 translate-x-1/2" />
             <div className="absolute bottom-0 left-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-blue-500/10 rounded-full blur-[60px] md:blur-[100px] translate-y-1/3 -translate-x-1/3" />
             <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-indigo-300 mb-6 md:mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Legacy & Milestones
            </motion.div>
            
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif font-medium leading-[1] md:leading-[0.9] tracking-tight mb-6 md:mb-8">
              History of <br/>
              <span className="text-indigo-400 italic">DCIP</span>.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-xl font-light leading-relaxed border-l border-white/20 pl-4 md:pl-6">
              Founded in 2016, DCIP stands as a testament to youth-driven governance. A journey marked by achievement, rigorous fieldwork, and transformative administrative interventions.
            </p>
          </div>
        </Container>
      </section>

      {/* History Timeline Section */}
      <section className="py-16 md:py-32 relative" ref={containerRef}>
        <Container>
           <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-24">
              {/* Sticky Title */}
              <div className="md:w-1/3">
                 <div className="md:sticky md:top-32">
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4 md:mb-6">Milestones of<br/>Impact.</h2>
                    <p className="text-slate-500 mb-6 md:mb-8 text-base md:text-lg leading-relaxed">
                      Tracing the evolution of DCIP from a visionary experiment to a pillar of district administration.
                    </p>
                    <div className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-indigo-600">
                      <ArrowDown className="w-4 h-4 animate-bounce" />
                      Scroll to explore history
                    </div>
                 </div>
              </div>

              {/* Historical Milestones List */}
              <div className="md:w-2/3 space-y-12 md:space-y-32">
                 <RoadmapStep 
                   number="2016"
                   title="Foundation"
                   duration="Inception"
                   description="DCIP was launched by the District Administration to bridge the gap between academic theory and administrative reality. It began with a small cohort of 20 students aimed at assisting in file digitization."
                 />
                 <RoadmapStep 
                   number="2018"
                   title="State Recognition"
                   duration="Award"
                   description="Received the 'Chief Minister's Award for Innovation in Public Policy'. The programme expanded to cover 10 major departments including Health, Education, and Revenue."
                 />
                 <RoadmapStep 
                   number="2020"
                   title="Crisis Response"
                   duration="COVID-19"
                   description="Interns formed the backbone of the District War Room. From managing oxygen supply logistics to coordinating volunteer networks, DCIP proved its worth in crisis management."
                 />
                 <RoadmapStep 
                   number="2023"
                   title="National Best Practice"
                   duration="Achievement"
                   description="Cited by NITI Aayog as a replicable model for youth engagement in governance. The programme's alumni network crossed 500 members, creating a global community of civil service aspirants."
                 />
              </div>
           </div>
        </Container>
      </section>

      {/* Info Grid */}
      <section className="pb-24 bg-slate-50">
         <Container>
            <div className="bg-white rounded-3xl p-6 md:p-12 shadow-sm border border-slate-100">
              <StaggerContainer className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                 <InfoCard 
                   icon={<Calendar className="w-5 h-5" />}
                   label="Duration"
                   value="4 Months"
                 />
                 <InfoCard 
                   icon={<Users className="w-5 h-5" />}
                   label="Mode"
                   value="On-Site"
                 />
                 <InfoCard 
                   icon={<FileText className="w-5 h-5" />}
                   label="Type"
                   value="Voluntary"
                 />
                 <InfoCard 
                   icon={<CheckCircle2 className="w-5 h-5" />}
                   label="Outcome"
                   value="Experience"
                 />
              </StaggerContainer>
            </div>
            
            {/* Disclaimer */}
            <div className="mt-8 flex justify-center">
              <div className="inline-flex items-center gap-2 text-[10px] md:text-xs text-slate-400 bg-slate-100 px-3 py-2 md:px-4 md:py-2 rounded-full text-center">
                 <AlertCircle className="w-3 h-3 shrink-0" />
                 <span>DCIP is a non-remunerative experiential learning programme.</span>
              </div>
            </div>
         </Container>
      </section>
    </main>
  );
}

function RoadmapStep({ number, title, duration, description }: any) {
  return (
    <FadeIn>
      <div className="group relative pl-6 md:pl-8 border-l border-slate-200 hover:border-indigo-500 transition-colors duration-500">
         <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full bg-slate-200 group-hover:bg-indigo-600 transition-colors duration-500" />
         
         <div className="flex items-baseline gap-4 mb-2">
            <span className="text-5xl md:text-8xl font-serif font-bold text-slate-100 group-hover:text-indigo-50 transition-colors duration-500 select-none -ml-4">
              {number}
            </span>
         </div>
         
         <div className="relative -mt-6 md:-mt-10">
            <div className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 text-[10px] font-bold uppercase tracking-widest rounded-md mb-3">
              {duration}
            </div>
            <h3 className="text-2xl md:text-4xl font-serif font-bold text-slate-900 mb-3 md:mb-4 group-hover:text-indigo-900 transition-colors">
              {title}
            </h3>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-xl">
              {description}
            </p>
         </div>
      </div>
    </FadeIn>
  );
}

function InfoCard({ icon, label, value }: any) {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4">
       <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 border border-slate-100 shrink-0">
         {icon}
       </div>
       <div>
         <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{label}</div>
         <div className="text-base md:text-lg font-serif font-bold text-slate-900">{value}</div>
       </div>
    </div>
  );
}
