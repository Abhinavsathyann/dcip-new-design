
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Calendar, Briefcase, Hash, Building2 } from "lucide-react";
import { Certificate } from "@/data/certificates";
import { Container } from "@/components/layout/Container";
import Link from "next/link";

export const VerifiedView = ({ data }: { data: Certificate }) => {
  return (
    <div className="min-h-screen bg-slate-100 py-12 px-4 flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: "radial-gradient(#0f172a 1px, transparent 1px)", backgroundSize: "20px 20px" }} 
      />

      <Container className="relative z-10 max-w-md w-full">
        {/* Verification Status Banner */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-emerald-600 text-white px-6 py-4 rounded-t-2xl shadow-lg flex items-center justify-between relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-700" />
          <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')] mix-blend-overlay" />
          
          <div className="relative z-10 flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
              <ShieldCheck className="w-6 h-6 text-white animate-pulse" />
            </div>
            <div>
              <h1 className="font-bold text-sm uppercase tracking-wider">Officially Verified</h1>
              <p className="text-[10px] text-emerald-100 opacity-90">District Administration Records</p>
            </div>
          </div>
          <div className="relative z-10">
             <div className="w-2 h-2 bg-white rounded-full animate-ping" />
          </div>
        </motion.div>

        {/* Main Certificate Card */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-b-2xl shadow-2xl border-x border-b border-slate-200 overflow-hidden relative"
        >
          {/* Holographic Top Strip Effect */}
          <div className="h-2 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-50" />

          <div className="p-8">
            {/* Identity Section */}
            <div className="flex flex-col items-center text-center mb-8">
              <div className="relative w-32 h-32 mb-6">
                <div className="absolute inset-0 rounded-full border-4 border-slate-100 shadow-inner" />
                <div className="absolute -inset-1 rounded-full border border-slate-200 opacity-50 animate-spin-slow" />
                <Image 
                  src={data.photo}
                  alt={data.name}
                  fill
                  className="object-cover rounded-full p-1 bg-white"
                />
                <div className="absolute bottom-1 right-1 bg-emerald-500 text-white p-1.5 rounded-full border-2 border-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>

              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-1">{data.name}</h2>
              <p className="text-indigo-600 font-medium text-sm uppercase tracking-widest mb-4">{data.id}</p>
              
              <div className="inline-flex items-center px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold">
                <Briefcase className="w-3 h-3 mr-2 text-slate-400" />
                {data.role}
              </div>
            </div>

            {/* Details Grid */}
            <div className="space-y-4 border-t border-slate-100 pt-6">
              <DetailRow 
                icon={<Building2 className="w-4 h-4" />}
                label="Department"
                value={data.department}
              />
              <DetailRow 
                icon={<Calendar className="w-4 h-4" />}
                label="Duration"
                value={data.duration}
              />
               <DetailRow 
                icon={<Hash className="w-4 h-4" />}
                label="Batch"
                value={data.batch}
              />
            </div>

            {/* Security Footer */}
            <div className="mt-8 bg-slate-50 rounded-lg p-4 border border-slate-100">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Digital Fingerprint</span>
                <span className="text-[10px] text-emerald-600 font-bold">SECURE</span>
              </div>
              <code className="block text-[10px] text-slate-500 font-mono break-all leading-tight bg-white p-2 rounded border border-slate-200">
                {data.hash}
              </code>
              <div className="mt-2 text-[10px] text-slate-400 text-center">
                Verified at {new Date().toLocaleString()}
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link href="/">
                 <button className="text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors uppercase tracking-widest border-b border-indigo-200 pb-0.5 hover:border-indigo-600">
                    Verify another certificate
                 </button>
              </Link>
            </div>
          </div>
          
          {/* Watermark */}
          <div className="absolute bottom-4 right-4 text-[100px] font-serif font-bold text-slate-900 opacity-[0.02] pointer-events-none select-none leading-none">
            DCIP
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

function DetailRow({ icon, label, value }: any) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-0.5 text-slate-400 shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-0.5">{label}</div>
        <div className="text-sm font-medium text-slate-800 leading-snug">{value}</div>
      </div>
    </div>
  );
}
