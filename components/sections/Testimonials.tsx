import React from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Quote } from "lucide-react";
import { clsx } from "clsx";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  batch: string;
  content: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Arjun K.",
    role: "Postgraduate in Economics",
    batch: "Batch of 2023",
    content: "My time with DCIP was an eye-opener. Working directly with the District Collectorate allowed me to understand the complexities of policy implementation at the grassroots level. It bridged the gap between my academic theory and practical governance.",
  },
  {
    id: 2,
    name: "Fathima R.",
    role: "MSW Graduate",
    batch: "Batch of 2023",
    content: "The field exposure in tribal areas was the highlight of my internship. We were able to conduct surveys that actually contributed to decision-making. The mentorship from senior officials was invaluable for my career growth.",
  },
  {
    id: 3,
    name: "Vishnu Prasad",
    role: "B.Tech Civil Engineering",
    batch: "Batch of 2022",
    content: "DCIP gave me a unique platform to apply my technical skills in public infrastructure assessment. It is not just an internship; it is a crash course in responsible citizenship and administrative leadership.",
  },
];

interface TestimonialsProps {
  className?: string;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ className }) => {
  return (
    <section className={clsx("py-16 md:py-24 bg-slate-50", className)}>
      <Container>
        <SectionHeading 
          title="Intern Voices" 
          subtitle="Hear from former interns about their journey and impact."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div 
              key={item.id} 
              className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col h-full relative group hover:border-indigo-100 transition-colors"
            >
              <div className="absolute top-6 right-6 text-indigo-100 group-hover:text-indigo-50 transition-colors">
                <Quote className="w-10 h-10" />
              </div>
              
              <blockquote className="flex-grow mb-6 relative z-10">
                <p className="text-slate-600 leading-relaxed italic">
                  "{item.content}"
                </p>
              </blockquote>

              <div className="pt-6 border-t border-slate-100 mt-auto">
                <div className="font-bold text-slate-900 font-serif text-lg">
                  {item.name}
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 mt-1">
                  {item.role}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  {item.batch}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};