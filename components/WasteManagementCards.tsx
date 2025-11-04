"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Configuration Data ---
const serviceSegments = [
  { id: "residential", name: "Residential" },
  { id: "commercial", name: "Commercial & SME" },
  { id: "industrial", name: "Industrial" },
];

const wasteServiceCards = [
  {
    title: "New Customers",
    description:
      "If you're looking to set up waste collection for your home or business (for standard bins below 5 cubic meters, or larger skip bins for major setups), this process is for you.",
    imageAlt: "New Customer Setup",
    learnMoreLink: "#new-customer-details",
  },
  {
    title: "Scheduled Customers (Token-Based)",
    description:
      "Subscription/Token-Based System: As a scheduled customer, you pre-purchase service tokens (e.g., for 4 weekly pickups) which credit your service account. Tokens can be bought via mobile money, banks, or vendors.",
    imageAlt: "Scheduled Service Tokens",
    learnMoreLink: "#token-details",
  },
  {
    title: "On-Demand Customers (Monthly Billing)",
    description:
      "Monthly Billing: As an On-Demand customer, you request pickups throughout the month (for bulk waste or construction debris) and receive a consolidated bill at the end of the cycle, based on actual pickups.",
    imageAlt: "On-Demand Billing",
    learnMoreLink: "#billing-details",
  },
];
// -----------------------------

// --- Sub-Components ---
const CommercialSmeProcedure = () => (
  <motion.div
    key="commercial"
    initial={{ opacity: 0, x: 40 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -40 }}
    transition={{ duration: 0.5 }}
    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  >
    <div className="flex flex-col md:flex-row bg-white rounded-lg p-6 md:p-10 shadow-xl overflow-hidden relative">
      <div className="md:w-1/3 lg:w-2/5 mb-6 md:mb-0 md:pr-8 z-10">
        <div className="h-64 bg-green-600 rounded-lg shadow-inner flex items-center justify-center">
          <span className="text-white text-lg font-semibold"></span>
        </div>
      </div>

      <div className="md:w-2/3 lg:w-3/5 z-10">
        <div className="border-b border-gray-300 pb-6 mb-6"></div>
        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          SMEs Application Procedure
        </h2>
        <p className="text-gray-600 mb-6 text-base">
          This application procedure is tailored for <strong>Small & Medium Enterprises (SMEs)</strong> whose waste profile requires regular scheduled service and involves volumes between 500 Litres (1–2 large bins) to 3 Cubic Meters (Skip/Compactor service) per week.
        </p>
        <p className="text-gray-600 mb-8 text-base">
          It specifically applies to businesses whose service location is easily accessible by our standard route vehicles (e.g., direct street access, minimal logistical challenges).
        </p>
        <a
          href="#sme-full-application"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800 shadow-lg transition-colors"
        >
          Learn more
          <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 
              011.414 0l6 6a1 1 0 010 
              1.414l-6 6a1 1 0 
              01-1.414-1.414L14.586 
              11H3a1 1 0 110-2h11.586l-4.293-4.293a1 
              1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  </motion.div>
);

const IndustrialProcedure = () => (
  <motion.div
    key="industrial"
    initial={{ opacity: 0, x: 40 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -40 }}
    transition={{ duration: 0.5 }}
    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  >
    <div className="flex flex-col md:flex-row bg-white rounded-lg p-6 md:p-10 shadow-xl overflow-hidden relative">
      <div className="md:w-1/3 lg:w-2/5 mb-6 md:mb-0 md:pr-8 z-10">
        <div className="h-64 bg-green-600 rounded-lg shadow-inner flex items-center justify-center">
          <span className="text-white text-lg font-semibold"></span>
        </div>
      </div>

      <div className="md:w-2/3 lg:w-3/5 z-10">
        <div className="border-b border-gray-300 pb-6 mb-6"></div>
        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          Industrial Application Procedure
        </h2>
        <p className="text-gray-600 mb-6 text-base">
          Applying for a waste management contract as an <strong>industrial customer</strong> is a specialized process designed to meet the high-volume and regulatory demands of industrial operations, including handling complex and designated waste streams.
        </p>
        <p className="text-gray-600 mb-8 text-base">
          Follow these detailed steps to ensure a smooth and efficient application, from preparing necessary waste audits and licensing documents to the final deployment of your customized collection system.
        </p>
        <a
          href="#industrial-full-application"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800 shadow-lg transition-colors"
        >
          Start Application
          <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 
              011.414 0l6 6a1 1 0 010 
              1.414l-6 6a1 1 0 
              01-1.414-1.414L14.586 
              11H3a1 1 0 110-2h11.586l-4.293-4.293a1 
              1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  </motion.div>
);

// --- Main Component ---
const WasteManagementSection = () => {
  const [activeSegment, setActiveSegment] = useState("residential");
  const learnMoreStyle =
    "flex items-center justify-center px-4 py-2 mt-auto border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors";

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
      {/* Tabs Section */}
      <div className="border-b border-gray-200 mb-12">
        <nav className="-mb-px flex flex-wrap gap-4 sm:space-x-8" aria-label="Segments">
          {serviceSegments.map((segment) => (
            <button
              key={segment.id}
              onClick={() => setActiveSegment(segment.id)}
              className={`whitespace-nowrap py-3 px-1 border-b-2 text-lg font-semibold transition-colors duration-200 ${
                activeSegment === segment.id
                  ? "border-green-600 text-green-700"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              {segment.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Animated Content */}
      <AnimatePresence mode="wait">
        {activeSegment === "residential" && (
          <motion.div
            key="residential"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {wasteServiceCards.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col transform hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="relative h-48 bg-gray-100 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
                  <span className="relative z-10 text-gray-700 text-sm font-medium bg-white/70 px-3 py-1 rounded">
                    {card.imageAlt}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">{card.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                    {card.description}
                  </p>
                  <a href={card.learnMoreLink} className={learnMoreStyle}>
                    Learn More
                    <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 
                        011.414 0l6 6a1 1 0 010 
                        1.414l-6 6a1 1 0 
                        01-1.414-1.414L14.586 
                        11H3a1 1 0 110-2h11.586l-4.293-4.293a1 
                        1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {activeSegment === "commercial" && <CommercialSmeProcedure />}
        {activeSegment === "industrial" && <IndustrialProcedure />}
      </AnimatePresence>
    </section>
  );
};

export default WasteManagementSection;
