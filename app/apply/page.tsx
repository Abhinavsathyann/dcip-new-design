"use client";

import React, { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { FadeIn } from "@/components/ui/Motion";
import { ArrowRight, Check, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";

export default function ApplyPage() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const nextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-20">
      <Container className="max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif text-slate-900 mb-4">Application Form</h1>
          <p className="text-slate-500">Batch of 2024</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12 relative">
          <div className="h-1 bg-slate-200 rounded-full w-full absolute top-1/2 -translate-y-1/2" />
          <div 
            className="h-1 bg-indigo-600 rounded-full absolute top-1/2 -translate-y-1/2 transition-all duration-500" 
            style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
          />
          <div className="flex justify-between relative z-10">
            {[1, 2, 3].map((num) => (
              <div 
                key={num}
                className={clsx(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300",
                  step >= num 
                    ? "bg-indigo-600 border-indigo-600 text-white" 
                    : "bg-white border-slate-200 text-slate-400"
                )}
              >
                {step > num ? <Check className="w-4 h-4" /> : num}
              </div>
            ))}
          </div>
        </div>

        <FadeIn>
          <form className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 min-h-[400px] flex flex-col justify-between" onSubmit={nextStep}>
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input label="Full Name" placeholder="John Doe" required />
                    <Input label="Email" type="email" placeholder="john@example.com" required />
                    <Input label="Mobile" type="tel" placeholder="+91 98765 43210" required />
                    <Input label="Date of Birth" type="date" required />
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Education & Qualifications</h3>
                  <Select label="Highest Qualification" options={[
                      {label: "Graduate", value: "grad"},
                      {label: "Postgraduate", value: "pg"},
                      {label: "PhD", value: "phd"}
                  ]} required />
                  <Input label="Institution / University" placeholder="Name of college" required />
                  <Input label="Field of Study" placeholder="e.g. Economics, Engineering" required />
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Statement of Purpose</h3>
                  <Textarea 
                    label="Why do you want to join DCIP?" 
                    placeholder="Tell us about your motivation (min 150 words)..." 
                    rows={8} 
                    minWords={150}
                    required
                  />
                  <div className="flex items-center gap-2 text-sm text-slate-600 bg-slate-50 p-4 rounded-lg">
                    <input type="checkbox" id="consent" required className="w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-600" />
                    <label htmlFor="consent">I confirm that all provided information is accurate.</label>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex justify-between mt-12 pt-6 border-t border-slate-100">
              <button 
                type="button" 
                onClick={prevStep}
                disabled={step === 1}
                className={clsx(
                  "flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors",
                  step === 1 ? "text-slate-300 cursor-not-allowed" : "text-slate-600 hover:bg-slate-50"
                )}
              >
                <ChevronLeft className="w-4 h-4" /> Back
              </button>
              
              <button 
                type="submit"
                className="flex items-center gap-2 px-8 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-indigo-600 transition-colors"
              >
                {step === totalSteps ? "Submit Application" : "Continue"} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </FadeIn>
      </Container>
    </main>
  );
}