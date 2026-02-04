"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  PhoneCall,
  Stethoscope,
  Ambulance,
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeParent, setActiveParent] = useState<string | null>(null);
  const [activeChild, setActiveChild] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setActiveParent(null);
        setActiveChild(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleParent = (menu: string) => {
    setActiveParent(activeParent === menu ? null : menu);
    setActiveChild(null);
  };

  const toggleChild = (menu: string) => {
    setActiveChild(activeChild === menu ? null : menu);
  };

  const menuItems = [
    { label: "Home", href: "/" },
    {
      label: "About Us",
      sub: [
        { label: "About Institution", href: "/about/institution" },
        { label: "About SVKM", href: "/about/svkm" },
        { label: "Vision & Mission", href: "/about/mission-vision" },
        { label: "President's Message", href: "/about/president" },
        { label: "Management", href: "/about/management" },
      ],
    },
    {
      label: "Hospital",
      sub: [
        { label: "Doctors", href: "/hospital/doctors" },
        {
          label: "Services Offered",
          sub: [
            { label: "Kayachikitsa", href: "/departments/kayachikitsa" },
            { label: "Shalya Tantra", href: "/departments/shalya" },
            { label: "Panchakarma", href: "/departments/panchakarma" },
          ],
        },
        { label: "Online Consulting", href: "/hospital/online-consultation" },
      ],
    },
    { label: "Research", href: "/research" },
    { label: "Career", href: "/career" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="bg-white/95 backdrop-blur-md border-b border-green-100 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="hidden lg:flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="/images/ayurveda_gemini_log.png"
                alt="Ayurveda Hospital Logo"
                width={90}
                height={90}
                className="h-[85px] w-auto"
                priority
              />
              <div className="leading-tight">
                <p className="text-sm font-semibold text-green-700">
                  SVKM&apos;s
                </p>
                <p className="text-lg font-bold text-green-900">
                  Smt. Krutiben Bhupeshbhai Patel
                </p>
                <p className="text-lg font-bold text-green-900">
                  Multispeciality Ayurveda Hospital
                </p>
                <p className="text-lg font-bold text-green-900">
                  &amp; Research Centre
                </p>
              </div>
            </div>

            {/* CENTER : CONTACT INFO */}
            <div className="flex gap-10 text-sm">
              <div className="flex items-center gap-2">
                <PhoneCall className="text-green-700" size={18} />
                <div>
                  <p className="font-semibold">OPD Appointment</p>
                  <p className="text-green-700">7045517269</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Stethoscope className="text-green-700" size={18} />
                <div>
                  <p className="font-semibold">Diagnostic Center</p>
                  <p className="text-green-700">99207 47327</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Ambulance className="text-red-600" size={18} />
                <div>
                  <p className="font-semibold text-red-600">Emergency</p>
                  <p>022 2427 8888</p>
                </div>
              </div>
            </div>

            {/* RIGHT : SVKM */}
            <div className="flex items-center gap-2 text-xs font-semibold text-green-800">
              <a href="https://svkm.ac.in" target="_blank">
                <Image
                  src="/images/svkm-logo.png"
                  width={70}
                  height={70}
                  alt="svkm-logo"
                />
              </a>
              {/* <span>Shri Vile Parle Kelavani Mandal</span> */}
            </div>
          </div>

          {/* ================= MOBILE VIEW ================= */}
          <div className="lg:hidden">
            {/* LOGO + NAME */}
            <div className="flex items-start gap-3">
              <Image
                src="/images/ayurveda_gemini_log.png"
                alt="Ayurveda Hospital Logo"
                width={70}
                height={70}
                className="h-[65px] w-auto shrink-0"
              />
              <div className="leading-tight">
                <p className="text-xs font-semibold text-green-700">
                  SVKM&apos;s
                </p>
                <p className="text-sm font-bold text-green-900">
                  Smt. Krutiben Bhupeshbhai Patel
                </p>
                <p className="text-sm font-bold text-green-900">
                  Multispeciality Ayurveda Hospital
                </p>
                <p className="text-xs font-bold text-green-900">
                  &amp; Research Centre
                </p>
              </div>
            </div>

            {/* CONTACT BUTTONS */}
            <div className="mt-3 flex justify-between gap-2 text-xs">
              <a
                href="tel:7045517269"
                className="flex items-center gap-1 bg-green-50 text-green-800 px-2 py-1 rounded"
              >
                <PhoneCall size={14} />
                OPD
              </a>

              <a
                href="tel:9920747327"
                className="flex items-center gap-1 bg-green-50 text-green-800 px-2 py-1 rounded"
              >
                <Stethoscope size={14} />
                Diagnostic
              </a>

              <a
                href="tel:02224278888"
                className="flex items-center gap-1 bg-red-50 text-red-600 px-2 py-1 rounded"
              >
                <Ambulance size={14} />
                Emergency
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <nav
        ref={dropdownRef}
        className="bg-gradient-to-r from-green-900 via-green-800 to-emerald-800 text-white shadow-md border-t border-green-900/40"
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-3">
          {/* Menu */}
          <ul className="hidden lg:flex items-center gap-6 font-medium">
            {menuItems.map((menu) => (
              <li key={menu.label} className="relative">
                {menu.sub ? (
                  <>
                    <button
                      onClick={() => toggleParent(menu.label)}
                      className="flex items-center gap-1 hover:text-green-300"
                    >
                      {menu.label}
                      <ChevronDown size={16} />
                    </button>

                    {activeParent === menu.label && (
                      <ul className="absolute top-full mt-3 w-56 text-green-800 dropdown-glass shadow-xl">
                        {menu.sub.map((sub) => (
                          <li key={sub.label} className="relative">
                            {sub.sub ? (
                              <>
                                <button
                                  onClick={() => toggleChild(sub.label)}
                                  className="flex justify-between w-full px-4 py-2 hover:bg-green-600 hover:text-white"
                                >
                                  {sub.label}
                                  <ChevronDown size={14} />
                                </button>

                                {activeChild === sub.label && (
                                  <ul className="absolute left-full top-0 w-56 dropdown-glass shadow-xl">
                                    {sub.sub.map((child) => (
                                      <li key={child.label}>
                                        <Link
                                          href={child.href}
                                          className="block px-4 py-2 hover:bg-green-600 hover:text-white"
                                        >
                                          {child.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </>
                            ) : (
                              <Link
                                href={sub.href}
                                className="block px-4 py-2 hover:bg-green-600 hover:text-white"
                              >
                                {sub.label}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link href={menu.href} className="hover:text-green-300">
                    {menu.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            href="/appointment"
            className="hidden lg:flex items-center gap-2 bg-green-500 px-4 py-2 rounded-md font-semibold hover:bg-green-600"
          >
            Online Consulting
          </Link>

          {/* Mobile Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-green-900 px-6 py-4">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href || "#"}
                className="block py-2 border-b border-green-700"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
