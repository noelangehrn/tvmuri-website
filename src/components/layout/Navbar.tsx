"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "News", href: "/news" },
  {
    label: "Teams",
    href: "/teams",
    children: [
      { label: "Alle Teams", href: "/teams" },
      { label: "Männer", href: "/teams#maenner" },
      { label: "Frauen", href: "/teams#frauen" },
      { label: "Nachwuchs", href: "/teams#nachwuchs" },
      { label: "Freizeit", href: "/teams#freizeit" },
    ],
  },
  {
    label: "Verein",
    href: "/verein",
    children: [
      { label: "Übersicht", href: "/verein" },
      { label: "Vorstand", href: "/verein/vorstand" },
      { label: "Organisation", href: "/verein/organisation" },
      { label: "Geschichte", href: "/verein/geschichte" },
      { label: "Kalender", href: "/verein/kalender" },
      { label: "Schiedsrichter", href: "/verein/schiedsrichter" },
      { label: "Schnuppertraining", href: "/verein/schnuppertraining" },
      { label: "Downloads", href: "/verein/downloads" },
    ],
  },
  { label: "Sponsoren", href: "/sponsoren" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image src="/images/logo.svg" alt="TV Muri" width={40} height={40} className="w-10 h-10" />
            <span className="text-lg font-bold text-secondary hidden sm:block">Handball TV Muri</span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.href} className="relative group" onMouseEnter={() => setOpenDropdown(item.label)} onMouseLeave={() => setOpenDropdown(null)}>
                {item.children ? (
                  <>
                    <Link href={item.href} className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary rounded-lg hover:bg-gray-50 transition-colors">
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </Link>
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-lg border border-gray-100 py-2">
                        {item.children.map((child) => (
                          <Link key={child.href} href={child.href} className="block px-4 py-2 text-sm text-gray-700 hover:text-primary hover:bg-gray-50">
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={item.href} className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary rounded-lg hover:bg-gray-50 transition-colors">
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <button className="lg:hidden p-2 rounded-lg hover:bg-gray-100" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.href}>
                {item.children ? (
                  <>
                    <Link href={item.href} className="flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50" onClick={() => { setMobileOpen(false); }}>
                      {item.label}
                    </Link>
                    <div className="ml-4 space-y-1">
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href} className="block px-3 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-50" onClick={() => setMobileOpen(false)}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link href={item.href} className="block px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50" onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
