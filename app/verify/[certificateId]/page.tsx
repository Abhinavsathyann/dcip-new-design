
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

// SECURITY: Ensure verification pages are NOT indexed by search engines
export const metadata: Metadata = {
  title: "Official Credential Verification | DCIP Malappuram",
  description: "Official government certificate verification portal.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function VerifyPage({ params }: PageProps) {
  // Decode ID in case it contains encoded characters
  const decodedId = decodeURIComponent(params.certificateId);
  const certificate = getCertificate(decodedId);

  // If no certificate found or status is not verified
  if (!certificate || certificate.certificateStatus !== 'Verified') {
    return <InvalidView id={decodedId} />;
  }

  return <VerifiedView data={certificate} />;
}
