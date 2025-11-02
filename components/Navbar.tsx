"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Leaf, Search, Phone, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const topBarLinks = [
    { name: "Updates", href: "/updates" },
    { name: "Tunza mazingira", href: "/Tunza" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Awareness", href: "/awareness" },
    { name: "Careers", href: "/careers" },
    { name: "community foundation ", href: "/foundation" },
  
  ];

  const mainLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Customer Service", href: "/customer" },
    { name: "Investor Relations", href: "/investors" },
    { name: "Projects", href: "/projects" },
    { name: "Online Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
  ];

  const documentationDropdown = {
    name: "Downloads",
    links: [
      { name: "Reports", href: "/reports" },
      { name: "Tenders", href: "/tenders" },
      { name: "Policies", href: "/policies" },
    ],
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 font-sans">
      {/* === TOP BAR === */}
      <div className="hidden md:flex justify-between items-center bg-blue-900 text-white text-xs px-6 py-2">
        {/* Left Links */}
        <div className="flex flex-wrap gap-6">
          {topBarLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-blue-300 transition"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Utilities */}
        <div className="flex items-center gap-6">
          <Link href="/faq" className="hover:text-blue-300 transition">
            FAQs
          </Link>
          <div className="bg-yellow-400 text-black font-semibold px-2 py-0.5 rounded text-[11px]">
            USSD *207#
          </div>
          <button className="text-white hover:text-blue-300" title="Search">
            <Search className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* === MAIN NAVBAR === */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-8 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Leaf className="text-blue-800 w-8 h-8" />
            <span className="text-xl font-bold text-blue-900 uppercase">
              Green loop
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 text-gray-800 font-medium">
            {mainLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-blue-700 transition duration-150"
              >
                {link.name}
              </Link>
            ))}

            {/* Dropdown */}
            <div className="relative group">
              <button className="flex items-center hover:text-blue-700 transition duration-150">
                {documentationDropdown.name}
                <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute hidden group-hover:block w-48 mt-2 py-2 bg-white rounded-lg shadow-xl border border-gray-100 z-50">
                {documentationDropdown.links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* === MOBILE MENU === */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 space-y-4 px-6 border-t border-gray-100">
          {mainLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-gray-700 font-medium hover:text-blue-700 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          {/* Dropdown */}
          <p className="text-sm font-semibold text-gray-500 pt-2">
            {documentationDropdown.name}
          </p>
          {documentationDropdown.links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block pl-4 text-sm text-gray-600 hover:text-blue-700 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
