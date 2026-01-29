
"use client";

import React, { useState, FormEvent } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Label } from "@/components/ui/Label";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { clsx } from "clsx";

// Types
interface FormData {
  fullName: string;
  email: string;
  mobile: string;
  dob: string;
  gender: string;
  highestQualification: string;
  discipline: string;
  institution: string;
  yearOfCompletion: string;
  preferredDuration: string;
  areasOfInterest: string[];
  sop: string;
  declaration: boolean;
}

interface FormErrors {
  [key: string]: string;
}

const INITIAL_DATA: FormData = {
  fullName: "",
  email: "",
  mobile: "",
  dob: "",
  gender: "",
  highestQualification: "",
  discipline: "",
  institution: "",
  yearOfCompletion: "",
  preferredDuration: "",
  areasOfInterest: [],
  sop: "",
  declaration: false,
};

const AREAS_OF_INTEREST = [
  "Public Administration",
  "Research & Documentation",
  "Field Work & Surveys",
  "Digital Communication",
  "Community Engagement",
];

export default function ApplyPage() {
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  // Validation Logic
  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits";
    }

    if (!formData.highestQualification) newErrors.highestQualification = "Qualification is required";
    if (!formData.discipline) newErrors.discipline = "Discipline is required";
    if (!formData.preferredDuration) newErrors.preferredDuration = "Duration is required";

    // SOP Validation
    if (!formData.sop.trim()) {
      newErrors.sop = "Statement of Purpose is required";
    } else if (wordCount < 150) {
      newErrors.sop = `Minimum 150 words required (current: ${wordCount})`;
    } else if (wordCount > 300) {
      newErrors.sop = `Maximum 300 words allowed (current: ${wordCount})`;
    }

    if (!formData.declaration) newErrors.declaration = "You must accept the declaration";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      isValid = false;
      // Scroll to top of error
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }

    // Special handler for SOP word count
    if (name === "sop") {
      const count = value.trim() ? value.trim().split(/\s+/).length : 0;
      setWordCount(count);
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked, value } = e.target;
    
    if (name === "declaration") {
      setFormData(prev => ({ ...prev, declaration: checked }));
      if (errors.declaration) setErrors(prev => ({ ...prev, declaration: "" }));
    } else if (name === "areasOfInterest") {
      const currentAreas = [...formData.areasOfInterest];
      if (checked) {
        currentAreas.push(value);
      } else {
        const index = currentAreas.indexOf(value);
        if (index > -1) currentAreas.splice(index, 1);
      }
      setFormData(prev => ({ ...prev, areasOfInterest: currentAreas }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitting(false);
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleReset = () => {
    if (confirm("Are you sure you want to clear the form?")) {
      setFormData(INITIAL_DATA);
      setErrors({});
      setWordCount(0);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Success View
  if (isSuccess) {
    return (
      <div className="min-h-screen bg-slate-50">
        <PageHeader 
          title="Application Submitted" 
          subtitle="Thank you for your interest in DCIP Malappuram."
        />
        <Container className="py-20">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12 text-center">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
              Submission Successful!
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Your application for the District Collector’s Internship Programme has been received. Our team will review your application and contact you at <strong>{formData.email}</strong> regarding the next steps.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/">
                <Button variant="outline">Back to Home</Button>
              </Link>
              <Link href="/programme">
                <Button>View Programme Details</Button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  // Form View
  return (
    <div className="min-h-screen bg-slate-50">
      <PageHeader 
        title="Apply for DCIP Malappuram" 
        subtitle="Applications for the District Collector’s Internship Programme"
      />
      
      <Container className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          {/* Instructions Box */}
          <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 mb-8 flex gap-3">
             <AlertCircle className="w-6 h-6 text-indigo-600 shrink-0 mt-0.5" />
             <div className="text-sm text-indigo-900">
                <p className="font-bold mb-1">Important Instruction</p>
                <p>Please read the eligibility criteria carefully before submitting. Ensure all details provided are accurate. Incomplete or incorrect applications will be rejected.</p>
             </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white shadow-sm border border-slate-200 rounded-xl overflow-hidden">
            
            {/* SECTION A: Personal Details */}
            <div className="p-6 md:p-8 border-b border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-900 text-white text-xs">1</span>
                Personal Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                  label="Full Name" 
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="As per official documents"
                  required
                  error={errors.fullName}
                />
                <Input 
                  label="Email Address" 
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  error={errors.email}
                />
                <Input 
                  label="Mobile Number" 
                  name="mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="10 digit number"
                  required
                  error={errors.mobile}
                />
                <Input 
                  label="Date of Birth" 
                  name="dob"
                  type="date"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />
                <Select
                  label="Gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  options={[
                    { label: "Male", value: "Male" },
                    { label: "Female", value: "Female" },
                    { label: "Other", value: "Other" },
                  ]}
                />
              </div>
            </div>

            {/* SECTION B: Educational Details */}
            <div className="p-6 md:p-8 border-b border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-900 text-white text-xs">2</span>
                Educational Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Select
                  label="Highest Qualification"
                  name="highestQualification"
                  value={formData.highestQualification}
                  onChange={handleChange}
                  required
                  error={errors.highestQualification}
                  options={[
                    { label: "Graduate (Bachelors)", value: "Graduate" },
                    { label: "Postgraduate (Masters)", value: "Postgraduate" },
                    { label: "PhD / Research Scholar", value: "PhD" },
                    { label: "Other", value: "Other" },
                  ]}
                />
                <Input 
                  label="Discipline / Stream" 
                  name="discipline"
                  value={formData.discipline}
                  onChange={handleChange}
                  placeholder="e.g. Economics, B.Tech CS, etc."
                  required
                  error={errors.discipline}
                />
                <Input 
                  label="Institution Name" 
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  containerClassName="md:col-span-2"
                  placeholder="Name of College or University"
                />
                <Input 
                  label="Year of Completion" 
                  name="yearOfCompletion"
                  type="number"
                  value={formData.yearOfCompletion}
                  onChange={handleChange}
                  placeholder="YYYY"
                />
              </div>
            </div>

            {/* SECTION C: Internship Details */}
            <div className="p-6 md:p-8 border-b border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-900 text-white text-xs">3</span>
                Internship Preferences
              </h3>
              <div className="space-y-6">
                <Select
                  label="Preferred Duration"
                  name="preferredDuration"
                  value={formData.preferredDuration}
                  onChange={handleChange}
                  required
                  error={errors.preferredDuration}
                  options={[
                    { label: "3 Months", value: "3 Months" },
                    { label: "4 Months", value: "4 Months" },
                  ]}
                />
                
                <div>
                  <Label className="mb-3 block">Areas of Interest</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {AREAS_OF_INTEREST.map((area) => (
                      <label key={area} className="flex items-center gap-3 p-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors">
                        <input
                          type="checkbox"
                          name="areasOfInterest"
                          value={area}
                          checked={formData.areasOfInterest.includes(area)}
                          onChange={handleCheckboxChange}
                          className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <span className="text-sm text-slate-700 font-medium">{area}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION D: SOP */}
            <div className="p-6 md:p-8 border-b border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-900 text-white text-xs">4</span>
                Statement of Purpose
              </h3>
              <Textarea 
                label="Why do you want to join DCIP?"
                name="sop"
                value={formData.sop}
                onChange={handleChange}
                required
                wordCount={wordCount}
                minWords={150}
                maxWords={300}
                error={errors.sop}
                placeholder="Write a brief statement of purpose describing your motivation, relevant skills, and what you hope to achieve during this internship."
              />
            </div>

            {/* SECTION E: Declaration */}
            <div className="p-6 md:p-8 bg-slate-50">
               <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="declaration"
                    checked={formData.declaration}
                    onChange={handleCheckboxChange}
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <div className="text-sm leading-relaxed">
                    <span className="font-medium text-slate-900 block mb-1">Declaration</span>
                    <span className="text-slate-600">
                      I hereby declare that the information provided above is true and correct to the best of my knowledge. 
                      I understand that any false information may lead to the rejection of my application.
                    </span>
                    {errors.declaration && <p className="text-red-600 mt-2">{errors.declaration}</p>}
                  </div>
               </label>
            </div>

            {/* Actions */}
            <div className="p-6 md:p-8 flex flex-col-reverse md:flex-row items-center justify-end gap-4 border-t border-slate-200">
               <Button 
                 type="button" 
                 variant="ghost" 
                 onClick={handleReset}
                 disabled={isSubmitting}
               >
                 Reset Form
               </Button>
               <Button 
                 type="submit" 
                 size="lg" 
                 isLoading={isSubmitting}
                 className="w-full md:w-auto min-w-[200px]"
               >
                 Submit Application
               </Button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}
