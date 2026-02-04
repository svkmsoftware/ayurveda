"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white via-emerald-50 to-green-100 text-green-800 pt-16 border-t border-green-500/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-4 gap-12">
        {/* About Us */}
        <div>
          <h3 className="text-2xl font-bold mb-4">About Us</h3>
          <p className="text-green-700 text-sm leading-relaxed">
            SVKM&apos;s Smt. Krutiben Bhupeshbhai Patel Multispeciality Ayurveda
            Hospital &amp; Research Centre blends classical Ayurvedic wisdom
            with modern infrastructure for holistic care.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/" className="hover:text-green-500 transition-colors duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-green-500 transition-colors duration-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/treatments" className="hover:text-green-500 transition-colors duration-300">
                Treatments
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-green-500 transition-colors duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Contact</h3>
          <p className="flex items-center gap-2 text-sm mb-2 text-green-700">
            <Phone size={18} className="text-green-500" /> OPD: 70455 17269
          </p>
          <p className="flex items-center gap-2 text-sm text-green-700">
            <Mail size={18} className="text-green-500" /> ayurveda.hospital@svkm.ac.in
          </p>
          <p className="mt-4 text-sm leading-relaxed text-green-700">
            SVKM&apos;s Ayurveda College &amp; Hospital campus, Mumbai, India
          </p>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <Link
              href="#"
              className="p-3 bg-green-100 text-green-700 rounded-full hover:bg-green-500 hover:text-white transition-colors duration-300 flex items-center justify-center"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href="#"
              className="p-3 bg-green-100 text-green-700 rounded-full hover:bg-green-500 hover:text-white transition-colors duration-300 flex items-center justify-center"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="#"
              className="p-3 bg-green-100 text-green-700 rounded-full hover:bg-green-500 hover:text-white transition-colors duration-300 flex items-center justify-center"
            >
              <Linkedin size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-16 border-t border-green-200 py-6 text-center text-sm text-green-600">
        © {new Date().getFullYear()} SVKM&apos;s Smt. Krutiben Bhupeshbhai Patel
        Multispeciality Ayurveda Hospital &amp; Research Centre. All rights
        reserved.
      </div>
    </footer>
  );
}
