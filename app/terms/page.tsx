import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions for DCIP Malappuram Official Website.",
};

export default function TermsPage() {
  return (
    <main>
      <PageHeader title="Terms & Conditions" subtitle="Last Updated: February 2024" />
      <Container className="py-16 md:py-24">
        <div className="prose prose-slate prose-lg max-w-4xl mx-auto">
          <h3>1. Acceptance of Terms</h3>
          <p>
            By accessing the DCIP Malappuram website, you agree to be bound by these Terms and Conditions, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
          </p>

          <h3>2. Use License</h3>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on DCIP Malappuram's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
          </p>

          <h3>3. Application Process</h3>
          <p>
            The submission of an application does not guarantee selection for the internship. The District Administration reserves the right to reject any application without assigning any reason. False information provided during the application process will lead to immediate disqualification.
          </p>

          <h3>4. Intellectual Property</h3>
          <p>
            The content, organization, graphics, design, compilation, and other matters related to the Site are protected under applicable copyrights and other proprietary (including but not limited to intellectual property) rights.
          </p>

          <h3>5. Disclaimer</h3>
          <p>
            The materials on DCIP Malappuram's website are provided on an 'as is' basis. The District Administration makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>

          <h3>6. Governing Law</h3>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in Kerala State.
          </p>
        </div>
      </Container>
    </main>
  );
}