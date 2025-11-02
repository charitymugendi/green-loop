"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSlider() {
  // Define slides — mix of videos and images
  const slides = [
    {
      type: "video",
      src: "/videos/waste1.mp4",
      title: "GREEN LOOP WASTE MANAGEMENT",
      desc: "A smart, community-driven solution for waste sorting, AI-powered scheduling, and a cleaner, greener Ndagani.",
      cta: { label: "Get Started - Schedule Pickup", link: "/schedule" },
      color: "from-green-700 to-green-500",
    },
    {
      type: "image",
      src: "/images/sorting.jpg",
      title: "Smart Waste Sorting",
      desc: "Empowering Ndagani with AI-powered waste categorization for a cleaner tomorrow.",
      color: "from-green-700 to-green-500",
    },
    {
      type: "image",
      src: "/images/collection.jpeg",
      title: "Eco-Friendly Collection",
      desc: "Track real-time waste collection routes designed to reduce pollution and save energy.",
      color: "from-yellow-600 to-green-500",
    },
    {
      type: "image",
      src: "/images/community.jpeg",
      title: "Community Sustainability",
      desc: "Together, we’re transforming Ndagani into a model of environmental stewardship.",
      color: "from-green-700 to-emerald-600",
    },
    {
      type: "image",
      src: "/images/research.jpeg",
      title: "Innovation & Research",
      desc: "Partnering with Chuka University students to drive waste management innovation.",
      color: "from-emerald-700 to-green-500",
    },
  ];

  const [current, setCurrent] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Automatically move to the next slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000); // 7 seconds per slide
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Loop through slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-20" : "opacity-0 z-0"
          }`}
        >
          {/* VIDEO SLIDE */}
          {slide.type === "video" && (
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              loop
              className="absolute inset-0 w-full h-full object-cover z-0"
              src={slide.src}
            />
          )}

          {/* IMAGE SLIDE */}
          {slide.type === "image" && (
            <div className="absolute inset-0">
              <Image
                src={slide.src}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} opacity-70`} />
            </div>
          )}

          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>

          {/* Text and CTA */}
          <div className="relative z-20 flex flex-col items-center justify-center text-center text-white h-full px-6">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4">
              {slide.title}
            </h1>
            <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto">
              {slide.desc}
            </p>
            {slide.cta && (
              <Link
                href={slide.cta.link}
                className="inline-block px-10 py-4 text-lg font-semibold text-white bg-green-600 rounded-full hover:bg-green-700 transition duration-300 shadow-xl transform hover:scale-105"
              >
                {slide.cta.label}
              </Link>
            )}
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/70 p-3 rounded-full transition z-40"
        aria-label="Previous slide"
      >
        <ChevronLeft className="text-green-800 w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/70 p-3 rounded-full transition z-40"
        aria-label="Next slide"
      >
        <ChevronRight className="text-green-800 w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-green-400" : "bg-white/50"
            }`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
}
