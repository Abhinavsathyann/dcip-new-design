
import React from "react";
import { Metadata } from "next";
import { getCertificate } from "@/data/certificates";
import { VerifiedView } from "@/components/verify/VerifiedView";
import { InvalidView } from "@/components/verify/InvalidView";

interface PageProps {
  params: {
    certificateId: string;
  };
}

// Ensure these pages are NOT indexed by search engines
export const metadata: Metadata = {
  title: "Certificate Verification | DCIP Malappuram",
  description: "Official Certificate Verification Portal",
  robots: {
    index: false,
    follow: false,
  },
};

export default function VerifyPage({ params }: PageProps) {
  const certificate = getCertificate(params.certificateId);

  if (!certificate || certificate.status !== 'valid') {
    return <InvalidView id={params.certificateId} />;
  }

  return <VerifiedView data={certificate} />;
}
