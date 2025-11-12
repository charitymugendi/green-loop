"use client";

import React from "react";
import Image from "next/image";

const Methodology = () => {
  const steps = [
    {
      title: "Collection",
      description:
        "Waste is collected from households, businesses, and community points in Ndagani, Slaughter, Muongoni, Lowland, and Tumaini.",
      icon: "/icons/truck.png", // replace with your icon
    },
    {
      title: "Sorting",
      description:
        "Waste is smartly sorted with AI guidance into recyclables, organic waste, and hazardous materials.",
      icon: "/icons/sorting.png",
    },
    {
      title: "Processing",
      description:
        "Organic waste is composted, recyclables are prepared for reuse, and hazardous materials are safely handled.",
      icon: "/icons/processing.png",
    },
    {
      title: "Community Awareness",
      description:
        "Campaigns and workshops educate residents on sustainable waste practices.",
      icon: "/icons/community.png",
    },
    {
      title: "Reporting & Feedback",
      description:
        "Users receive notifications, progress reports, and tips to track their contributions and environmental impact.",
      icon: "/icons/analytics.png",
    },
  ];

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold text-green-800 mb-4">Methodology</h2>
        <p className="text-lg text-gray-700">
          Turning Waste into Value — Step by Step
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform">
            <div className="mb-4 w-20 h-20 relative">
              <Image src={step.icon} alt={step.title} width={80} height={80} />
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-2">{step.title}</h3>
            <p className="text-gray-700 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Methodology;
