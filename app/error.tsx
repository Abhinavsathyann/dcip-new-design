'use client';

import React, { useEffect } from 'react';
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50">
      <Container className="text-center">
        <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-10 h-10" />
        </div>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
          Something went wrong!
        </h2>
        <p className="text-lg text-slate-600 max-w-md mx-auto mb-8">
          We apologize for the inconvenience. An unexpected error has occurred.
        </p>
        <Button onClick={reset} size="lg">
          Try again
        </Button>
      </Container>
    </div>
  );
}