"use client";

import React, { useState } from "react";
import Image from "next/image"; // ✅ Added for logo image

// ✅ Reusable NavItem component
const NavItem = ({
  name,
  href,
  isDropdown,
}: {
  name: string;
  href: string;
  isDropdown?: boolean;
}) => (
  <a
    href={href}
    className="py-2 px-3 text-gray-700 hover:text-green-700 font-medium flex items-center transition-colors"
  >
    {name}
    {isDropdown && (
      <svg
        className="ml-1 w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        ></path>
      </svg>
    )}
  </a>
);

const WasteManagementNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative bg-white shadow-md z-50 font-sans">
      {/* === 1. Top Utility Bar (Dark Green/Blue) === */}
      <div className="bg-green-800 text-white text-xs hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-end space-x-6">
          <a href="#updates" className="hover:text-yellow-400 transition-colors">
            Updates
          </a>
          <a href="#tunza" className="hover:text-yellow-400 transition-colors">
            Tunza Mazingira
          </a>
          <a
            href="#sustainability"
            className="hover:text-yellow-400 transition-colors"
          >
            Sustainability
          </a>
          <a href="#awareness" className="hover:text-yellow-400 transition-colors">
            Awareness
          </a>
          <a href="#careers" className="hover:text-yellow-400 transition-colors">
            Careers
          </a>
          <a href="#foundation" className="hover:text-yellow-400 transition-colors">
            Community Foundation
          </a>
          <a href="#institute" className="hover:text-yellow-400 transition-colors">
            Training Institute
          </a>
          <a href="#faqs" className="hover:text-yellow-400 transition-colors">
            FAQs
          </a>
          {/* USSD (or hotline) section */}
          <div className="border-l border-white/50 pl-6 flex items-center">
            <svg
              className="w-4 h-4 mr-1 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2.003 5.884l2-3A1 1 0 015 2h3a1 1 0 01.894.553l1.447 2.894A1 1 0 0110.447 7H5.618l1.894 3.789a1 1 0 01-.894 1.447H5a1 1 0 01-.894-.553l-2-4A1 1 0 012.003 5.884z" />
            </svg>
            <span className="font-bold">Hotline: 0800 123 456</span>
          </div>
        </div>
      </div>

      {/* === 2. Main Navigation Bar === */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* ✅ Logo Section with actual logo image */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center">
              <Image
                src="/images/logo.png" // ✅ Path to your logo in /public/images
                alt="Green Loop Logo"
                width={40}
                height={40}
                className="mr-2 rounded-full shadow-md"
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:ml-6 lg:flex lg:space-x-4">
            <NavItem name="Home" href="/" />
            <NavItem name="About Us" href="/about" />
            <NavItem name="Waste Collection" href="/collection" />
            <NavItem name="Recycling Programs" href="/recycling" />
            <NavItem name="Register Now" href="/Register Now" />
          </div>

          <div className="flex items-center">
            {/* Mobile Menu Button */}
            <div className="lg:hidden ml-3">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-700 hover:text-green-700"
              >
                {isMenuOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* === 3. Mobile Menu === */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-md">
          <div className="flex flex-col p-4 space-y-3">
            {[
              "Home",
              "About Us",
              "Waste Collection",
              "Recycling Programs",
              "Register Now",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                className="text-gray-700 hover:text-green-700 font-medium transition"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default WasteManagementNavBar;
