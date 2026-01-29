import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50">
      <Container className="text-center">
        <div className="w-20 h-20 bg-slate-200 text-slate-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <FileQuestion className="w-10 h-10" />
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-slate-600 max-w-md mx-auto mb-8">
          The page you are looking for does not exist or has been moved. 
          Please check the URL or return to the homepage.
        </p>
        <Link href="/">
          <Button size="lg">Return Home</Button>
        </Link>
      </Container>
    </div>
  );
}