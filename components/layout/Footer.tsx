import React from "react";
import Link from "next/link";
import { Container } from "./Container";
import { siteConfig } from "@/config/site";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Identity */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-serif font-bold">
              DCIP Malappuram
            </h3>
            <p className="text-sm leading-relaxed max-w-xs">
              An official initiative of the Malappuram District Administration
              empowering youth through governance and community engagement.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white text-sm font-bold uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About the Programme
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a 
                  href="https://malappuram.nic.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  District Website
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact/Address */}
          <div className="space-y-4">
            <h3 className="text-white text-sm font-bold uppercase tracking-wider">
              Contact
            </h3>
            <address className="not-italic text-sm leading-relaxed">
              District Collector's Internship Programme<br />
              Civil Station, Malappuram<br />
              Kerala, India - 676505<br />
              <br />
              Email: <a href="mailto:dcip@malappuram.info" className="hover:text-white">dcip@malappuram.info</a>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} District Administration Malappuram. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-slate-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};