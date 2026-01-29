import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for DCIP Malappuram Official Website.",
};

export default function PrivacyPage() {
  return (
    <main>
      <PageHeader title="Privacy Policy" subtitle="Last Updated: February 2024" />
      <Container className="py-16 md:py-24">
        <div className="prose prose-slate prose-lg max-w-4xl mx-auto">
          <h3>1. Information We Collect</h3>
          <p>
            The DCIP Malappuram website collects minimal personal information necessary to facilitate the internship application process. When you apply for the programme, we may collect:
          </p>
          <ul>
            <li>Personal identification information (Name, email address, phone number, etc.)</li>
            <li>Educational background and qualifications</li>
            <li>Responses to application questions and statements of purpose</li>
          </ul>

          <h3>2. How We Use Your Information</h3>
          <p>
            The information collected is strictly used for administrative purposes related to the selection and management of interns. We do not sell, trade, or rent your personal identification information to others.
          </p>

          <h3>3. Data Security</h3>
          <p>
            We implement appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.
          </p>

          <h3>4. Third-Party Websites</h3>
          <p>
            Users may find content on our Site that links to the sites and services of other government agencies or partners. We do not control the content or links that appear on these sites and are not responsible for the practices employed by websites linked to or from our Site.
          </p>

          <h3>5. Changes to This Privacy Policy</h3>
          <p>
            The District Administration Malappuram has the discretion to update this privacy policy at any time. We encourage users to frequently check this page for any changes.
          </p>

          <h3>6. Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact us at: <strong>dcip@malappuram.info</strong>.
          </p>
        </div>
      </Container>
    </main>
  );
}