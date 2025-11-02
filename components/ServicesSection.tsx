"use client";

import { Recycle, Calendar, BarChart3, Users, Globe2 } from "lucide-react";

const services = [
  {
    title: "Smart Waste Pickup",
    description:
      "Easily schedule waste collection from your home or business using our digital platform — no more missed pickups.",
    icon: <Calendar className="w-10 h-10 text-green-600" />,
  },
  {
    title: "AI Waste Sorting",
    description:
      "Our system uses smart technology to classify waste into recyclables, organics, and non-recyclables efficiently.",
    icon: <Recycle className="w-10 h-10 text-green-600" />,
  },
  {
    title: "Data Insights & Reporting",
    description:
      "Track your recycling habits, view reports, and measure your environmental impact in real time.",
    icon: <BarChart3 className="w-10 h-10 text-green-600" />,
  },
  {
    title: "Community Engagement",
    description:
      "We empower students, collectors, and communities to take part in local clean-up and recycling initiatives.",
    icon: <Users className="w-10 h-10 text-green-600" />,
  },
  {
    title: "Sustainability Awareness",
    description:
      "We promote environmental education and awareness to build a circular, waste-free economy.",
    icon: <Globe2 className="w-10 h-10 text-green-600" />,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Header */}
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          What We Do
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Green Loop is transforming waste management in Ndagani and beyond —
          combining technology, data, and community action to build a
          sustainable future.
        </p>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 p-8 flex flex-col items-center text-center"
            >
              <div className="mb-4 bg-green-50 rounded-full p-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
