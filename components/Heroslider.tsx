"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSlider() {
  const slides = [
    // ✅ First video slide retained
    {
      type: "video",
      src: "/videos/waste1.mp4",
      title: "GREEN LOOP WASTE MANAGEMENT",
      desc: "A smart, community-driven solution for waste sorting, AI-powered scheduling, and a cleaner, greener Ndagani.",
      cta: { label: "Get Started - Schedule Pickup", link: "/schedule" },
      color: "from-green-700 to-green-500",
    },

    // ✅ Updated slides start here
    {
      type: "image",
      src: "/images/pickup.jpg",
      title: "Schedule Waste Pickup",
      desc: "Book your waste collection easily and keep your environment clean and organized.",
      color: "from-green-700 to-green-500",
    },
    {
      type: "image",
      src: "/images/recycling.jpg",
      title: "Locate Recycling Centers",
      desc: "Find the nearest recycling stations and promote responsible waste management.",
      color: "from-yellow-600 to-green-500",
    },
    {
      type: "image",
      src: "/images/reports.jpg",
      title: "Sustainability Reports",
      desc: "Monitor community progress and data-driven reports on waste reduction and eco impact.",
      color: "from-green-700 to-emerald-600",
    },
    {
      type: "image",
      src: "/images/donate.jpg",
      title: "Donate to Foundation",
      desc: "Support Green Loop’s mission and help fund impactful waste management projects.",
      color: "from-emerald-700 to-green-500",
    },
    {
      type: "image",
      src: "/images/community.jpg",
      title: "Community Projects",
      desc: "Join our clean-up drives, sustainability workshops, and eco-innovation events.",
      color: "from-green-700 to-green-500",
    },
    {
      type: "image",
      src: "/images/awareness.jpg",
      title: "Environmental Awareness",
      desc: "Learn how to protect our planet through education and community outreach.",
      color: "from-yellow-600 to-green-500",
    },
  ];

  const [current, setCurrent] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-20" : "opacity-0 z-0"
          }`}
        >
          {/* --- Background Media --- */}
          {slide.type === "video" ? (
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              loop
              className="absolute inset-0 w-full h-full object-cover z-0"
              src={slide.src}
            />
          ) : (
            <div className="absolute inset-0">
              <Image
                src={slide.src}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          )}

          {/* --- Overlay --- */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>

          {/* --- Text & CTA --- */}
          <div className="absolute bottom-20 left-10 z-20 text-left text-white max-w-lg space-y-4">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="text-base md:text-lg text-gray-200 leading-relaxed">
              {slide.desc}
            </p>
            {slide.cta && (
              <Link
                href={slide.cta.link}
                className="inline-block px-8 py-3 text-base md:text-lg font-semibold text-white bg-green-600 rounded-full hover:bg-green-700 transition duration-300 shadow-lg transform hover:scale-105"
              >
                {slide.cta.label}
              </Link>
            )}
          </div>
        </div>
      ))}

      {/* --- Navigation Bar --- */}
      <div className="absolute bottom-0 left-0 w-full z-40 bg-white/10 backdrop-blur-sm shadow-xl">
        <div className="flex justify-center md:justify-start overflow-x-auto whitespace-nowrap px-4">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`relative p-4 mx-2 md:mx-4 text-sm md:text-base font-semibold transition-all duration-300 ease-in-out ${
                index === current
                  ? "text-white opacity-100"
                  : "text-gray-300 opacity-70 hover:opacity-100"
              }`}
              aria-label={`Go to ${slide.title} slide`}
            >
              <span className="relative z-10">{slide.title}</span>
              {index === current && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-green-400 rounded-t-sm animate-fade-in-up" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
