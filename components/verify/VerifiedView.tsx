
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  CheckCircle2, 
  Calendar, 
  Building2, 
  Hash, 
  FileBadge,
  Clock,
  MapPin,
  Briefcase
} from "lucide-react";
import { Certificate } from "@/data/certificates";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export const VerifiedView = ({ data }: { data: Certificate }) => {
  return (
    <div className="min-h-screen bg-slate-100 py-8 md:py-12 px-4 flex items-center justify-center relative overflow-hidden">
      {/* Security Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none" 
           style={{ backgroundImage: "radial-gradient(#1e293b 1px, transparent 1px)", backgroundSize: "24px 24px" }} 
      />
      
      <Container className="relative z-10 max-w-lg w-full">
        {/* TOP STRIP: Animated Verified Badge */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex flex-col items-center justify-center text-center space-y-2"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-1.5 rounded-full shadow-lg shadow-emerald-500/20 border border-emerald-400/30 backdrop-blur-sm">
             <motion.div 
               initial={{ scale: 0 }}
               animate={{ scale: 1 }}
               transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
             >
               <ShieldCheck className="w-4 h-4" />
             </motion.div>
             <span className="text-xs font-bold uppercase tracking-widest">Official Credential Verified</span>
          </div>
          <p className="text-[10px] text-slate-400 uppercase tracking-widest font-medium">District Collector’s Internship Programme — Malappuram</p>
        </motion.div>

        {/* MAIN VERIFIED CARD */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden relative"
        >
          {/* Holographic Security Strip */}
          <div className="h-1.5 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 relative overflow-hidden">
             <div className="absolute inset-0 bg-white/30 animate-[shimmer_2s_infinite] skew-x-12" />
          </div>

          <div className="p-6 md:p-8">
            {/* 1. Profile Header */}
            <div className="flex flex-col items-center text-center border-b border-slate-100 pb-6 mb-6">
               <div className="relative w-28 h-28 mb-4">
                 <div className="absolute inset-0 rounded-full border-[3px] border-slate-100 shadow-inner" />
                 <Image 
                   src={data.photoUrl}
                   alt={data.fullName}
                   fill
                   className="object-cover rounded-full p-1 bg-white"
                 />
                 <div className="absolute bottom-0 right-0 bg-emerald-500 text-white p-1.5 rounded-full border-2 border-white shadow-sm z-10">
                   <CheckCircle2 className="w-4 h-4" />
                 </div>
               </div>
               
               <h1 className="text-2xl font-serif font-bold text-slate-900 mb-1">{data.fullName}</h1>
               <div className="flex items-center gap-2 text-xs font-mono text-slate-500 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                 <span>ID: {data.certificateId}</span>
                 <span className="w-1 h-1 rounded-full bg-slate-300" />
                 <span>SN: {data.certificateSerialNumber}</span>
               </div>
            </div>

            {/* 2. Core Internship Details */}
            <div className="space-y-5">
               <InfoRow 
                 icon={<FileBadge className="w-4 h-4 text-indigo-600" />}
                 label="Programme Name"
                 value={data.internshipProgramme}
                 highlight
               />
               
               <div className="grid grid-cols-2 gap-4">
                 <InfoRow 
                   icon={<Hash className="w-4 h-4 text-slate-400" />}
                   label="Batch Number"
                   value={data.batchNumber}
                 />
                 <InfoRow 
                   icon={<Clock className="w-4 h-4 text-slate-400" />}
                   label="Duration"
                   value={data.duration}
                 />
               </div>

               <InfoRow 
                 icon={<Briefcase className="w-4 h-4 text-slate-400" />}
                 label="Internship Type"
                 value={data.internshipType}
               />

               <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 space-y-3">
                  <InfoRow 
                    icon={<Building2 className="w-4 h-4 text-slate-400" />}
                    label="District Authority"
                    value={data.districtName}
                  />
                  <InfoRow 
                    icon={<MapPin className="w-4 h-4 text-slate-400" />}
                    label="Department"
                    value={data.departmentWorked}
                  />
               </div>

               {/* Project Tags */}
               <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-2">Project Areas</div>
                  <div className="flex flex-wrap gap-2">
                    {data.projectAreas.map((area, idx) => (
                      <span key={idx} className="inline-flex items-center px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-medium border border-indigo-100">
                        {area}
                      </span>
                    ))}
                  </div>
               </div>

               {/* Dates */}
               <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                 <div>
                   <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1">Period</div>
                   <div className="text-xs font-medium text-slate-700">
                     {data.startDate} — {data.endDate}
                   </div>
                 </div>
                 <div className="text-right">
                   <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1">Issue Date</div>
                   <div className="text-xs font-medium text-slate-900 flex items-center justify-end gap-1">
                     <Calendar className="w-3 h-3 text-slate-400" />
                     {data.issueDate}
                   </div>
                 </div>
               </div>
            </div>

            {/* 3. Security Footer */}
            <div className="mt-8 bg-slate-900 rounded-lg p-4 text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                 <ShieldCheck className="w-24 h-24" />
               </div>
               
               <div className="relative z-10">
                 <div className="flex justify-between items-center mb-2">
                   <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">Status: {data.certificateStatus}</span>
                   <span className="text-[10px] text-slate-400">Secure Hash</span>
                 </div>
                 <code className="block font-mono text-[9px] text-slate-300 break-all bg-white/10 p-2 rounded border border-white/10 mb-2">
                   {data.verificationHash}
                 </code>
                 <div className="text-[10px] text-slate-400 flex items-center gap-1">
                   <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                   Matched with official DCIP records • {new Date().toLocaleString()}
                 </div>
               </div>
            </div>

            {/* Return Link */}
            <div className="mt-6 text-center">
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-xs uppercase tracking-widest text-slate-500 hover:text-indigo-600">
                  Return to Official Website
                </Button>
              </Link>
            </div>
          </div>

          {/* Background Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none">
             <div className="text-6xl font-serif font-bold text-slate-900 -rotate-45 whitespace-nowrap">
               DCIP OFFICIAL
             </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

function InfoRow({ icon, label, value, highlight = false }: any) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-0.5">{label}</div>
        <div className={`text-sm leading-snug ${highlight ? 'font-bold text-indigo-900' : 'font-medium text-slate-700'}`}>
          {value}
        </div>
      </div>
    </div>
  );
}
