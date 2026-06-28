"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Home, Newspaper, Users, Building2, Mail, Calendar } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "News", href: "/news" },
  {
    label: "Teams", href: "/teams",
    children: [
      { label: "Alle Teams", href: "/teams" },
      { label: "Männer", href: "/teams#maenner" },
      { label: "Frauen", href: "/teams#frauen" },
      { label: "Nachwuchs", href: "/teams#nachwuchs" },
      { label: "Freizeit", href: "/teams#freizeit" },
    ],
  },
  {
    label: "Verein", href: "/verein",
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

const bottomTabs = [
  { label: "Home", href: "/", icon: Home },
  { label: "News", href: "/news", icon: Newspaper },
  { label: "Teams", href: "/teams", icon: Users },
  { label: "Verein", href: "/verein", icon: Building2 },
  { label: "Kontakt", href: "/kontakt", icon: Mail },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <Image src="/images/logo.svg" alt="TV Muri" width={36} height={36} className="w-9 h-9 sm:w-10 sm:h-10" />
              <span className="text-base sm:text-lg font-bold text-secondary">Handball TV Muri</span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div key={item.href} className="relative group" onMouseEnter={() => setOpenDropdown(item.label)} onMouseLeave={() => setOpenDropdown(null)}>
                  {item.children ? (
                    <>
                      <Link href={item.href} className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${pathname.startsWith(item.href) ? "text-primary bg-primary/5" : "text-gray-700 hover:text-primary hover:bg-gray-50"}`}>
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
                    <Link href={item.href} className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${pathname === item.href ? "text-primary bg-primary/5" : "text-gray-700 hover:text-primary hover:bg-gray-50"}`}>
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <button className="lg:hidden p-2 rounded-lg hover:bg-gray-100" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden fixed inset-0 top-14 bg-white z-40 overflow-y-auto pb-20">
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.href}>
                  {item.children ? (
                    <>
                      <Link href={item.href} className="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50" onClick={() => setMobileOpen(false)}>
                        {item.label}
                      </Link>
                      <div className="ml-4 space-y-0.5 border-l-2 border-gray-100 pl-3">
                        {item.children.map((child) => (
                          <Link key={child.href} href={child.href} className="block px-3 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-50" onClick={() => setMobileOpen(false)}>
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link href={item.href} className={`block px-3 py-2.5 text-sm font-medium rounded-lg ${pathname === item.href ? "text-primary bg-primary/5" : "text-gray-700 hover:bg-gray-50"}`} onClick={() => setMobileOpen(false)}>
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 safe-area-bottom">
        <div className="flex items-center justify-around h-16">
          {bottomTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = pathname === tab.href || (tab.href !== "/" && pathname.startsWith(tab.href));
            return (
              <Link key={tab.href} href={tab.href} className={`flex flex-col items-center justify-center gap-0.5 px-3 py-1.5 rounded-lg transition-colors ${isActive ? "text-primary" : "text-gray-500 hover:text-gray-700"}`}>
                <Icon className="w-5 h-5" />
                <span className="text-[10px] font-medium">{tab.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
