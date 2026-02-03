
"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { AlertOctagon, XCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const InvalidView = ({ id }: { id: string }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <Container className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl border border-red-100 overflow-hidden relative">
          {/* Top Red Strip */}
          <div className="bg-red-600 h-2 w-full" />
          
          <div className="p-8 text-center">
            <div className="w-20 h-20 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6 ring-8 ring-red-50/50">
              <AlertOctagon className="w-10 h-10" />
            </div>
            
            <h1 className="text-2xl font-serif font-bold text-slate-900 mb-2">
              Credential Not Found
            </h1>
            
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              The certificate ID <span className="font-mono font-bold text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded mx-1">{id}</span> is not present in the official District Administration records.
            </p>

            {/* Error Details Card */}
            <div className="bg-red-50 border border-red-100 rounded-xl p-4 text-left mb-8 space-y-3">
              <div className="flex items-center gap-2 text-red-700 text-xs font-bold uppercase tracking-wide border-b border-red-200 pb-2 mb-2">
                <XCircle className="w-4 h-4" />
                Verification Failed
              </div>
              <ul className="text-xs text-red-800 space-y-2 list-disc pl-4">
                <li>This ID does not match any issued certificate.</li>
                <li>The certificate may have been revoked.</li>
                <li>This may be a fraudulent or invalid QR code.</li>
              </ul>
            </div>

            <Link href="/" className="block">
              <Button variant="secondary" className="w-full gap-2 border border-slate-200 bg-white text-slate-700 hover:bg-slate-50">
                <ArrowLeft className="w-4 h-4" /> Return to Official Website
              </Button>
            </Link>
          </div>
          
          <div className="bg-slate-50 p-4 text-center border-t border-slate-100">
             <p className="text-[10px] text-slate-400 uppercase tracking-widest font-medium">
               District Administration Malappuram
             </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
