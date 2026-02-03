
"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { AlertTriangle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const InvalidView = ({ id }: { id: string }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <Container className="max-w-md">
        <div className="bg-white rounded-2xl shadow-xl border border-red-100 p-8 text-center relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute top-0 left-0 w-full h-2 bg-red-500" />
          
          <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-10 h-10" />
          </div>
          
          <h1 className="text-2xl font-serif font-bold text-slate-900 mb-2">
            Verification Failed
          </h1>
          
          <p className="text-slate-500 text-sm leading-relaxed mb-6">
            The certificate ID <span className="font-mono font-bold text-slate-700 bg-slate-100 px-1 rounded">{id}</span> could not be found in the official District Administration records.
          </p>

          <div className="bg-red-50 border border-red-100 rounded-lg p-4 text-xs text-red-700 text-left mb-8">
            <strong>Note:</strong> This could be due to an incorrect URL, a revoked certificate, or an invalid QR code. If you believe this is an error, please contact the programme office.
          </div>

          <Link href="/">
            <Button variant="secondary" className="w-full gap-2">
              <ArrowLeft className="w-4 h-4" /> Return to Official Site
            </Button>
          </Link>
        </div>
        
        <div className="text-center mt-8 text-xs text-slate-400">
          &copy; District Administration Malappuram
        </div>
      </Container>
    </div>
  );
};
