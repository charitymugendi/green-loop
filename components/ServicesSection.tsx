"use client";

import Image from "next/image";

const services = [
  {
    title: "Smart Waste Pickup",
    description:
      "Easily schedule waste collection from your home or business using our digital platform — no more missed pickups.",
    imageSrc: "/images/smart-waste-pickup.png",
  },
  {
    title: "AI Waste Sorting",
    description:
      "Our system uses smart technology to classify waste into recyclables, organics, and non-recyclables efficiently.",
    imageSrc: "/images/ai-waste-sorting.png",
  },
  {
    title: "Community Engagement",
    description:
      "We empower students, collectors, and communities to take part in local clean-up and recycling initiatives.",
    imageSrc: "/images/community-engagement.png",
  },
  {
    title: "Recycling Rewards Program",
    description:
      "Earn Green Points each time you recycle correctly and redeem them for discounts or community benefits.",
    imageSrc: "/images/reward program.png", // Add a relevant image in public/images
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 p-6 flex flex-col items-center text-center"
            >
              <div className="mb-4 w-full h-48 relative rounded-xl overflow-hidden">
                <Image
                  src={service.imageSrc}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
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
