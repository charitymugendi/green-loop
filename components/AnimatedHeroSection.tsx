"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AnimatedHeroSection = () => {
  return (
    <section className="relative bg-blue-900 overflow-hidden py-20 md:py-28 lg:py-36 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="grid grid-cols-8 h-full w-full">
          {Array.from({ length: 32 }).map((_, i) => (
            <div
              key={i}
              className={`${
                i % 2 === 0 ? "border-r border-b border-blue-700/20" : ""
              } bg-blue-800/20`}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 sm:px-8 lg:px-12">
        
        {/* LEFT: Text Section */}
        <motion.div
          className="lg:w-2/3 text-center lg:text-left mb-10 lg:mb-0"
          initial={{ opacity: 0, rotateY: -90 }}
          whileInView={{ opacity: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Upgrade Your Bin Service
          </h1>

          <p className="text-lg md:text-xl mb-5 max-w-2xl mx-auto lg:mx-0 text-blue-100">
            Our{" "}
            <span className="font-semibold text-yellow-300">
              Bin Upgrade Program
            </span>{" "}
            is designed for all existing customers who wish to improve their
            waste collection service.
          </p>

          <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto lg:mx-0 text-blue-200">
            Select a larger bin, add recycling options, or adjust your pickup
            frequency — all in a simple, two-step process. In many cases,
            switching is absolutely{" "}
            <span className="font-semibold text-green-400">FREE</span>.
          </p>

          <a
            href="#learn-more-upgrade"
            className="inline-flex items-center justify-center px-8 py-3 font-medium rounded-md shadow-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-400/40 transition-all duration-300"
          >
            Learn more
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 
                6a1 1 0 010 1.414l-6 6a1 1 0 
                01-1.414-1.414L14.586 11H3a1 1 0 
                110-2h11.586l-4.293-4.293a1 1 0 
                010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </motion.div>

        {/* RIGHT: Image Section */}
        <motion.div
          className="relative lg:w-1/3 flex justify-center items-center h-64 md:h-80 lg:h-96"
          initial={{ opacity: 0, rotateY: 90 }}
          whileInView={{ opacity: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Yellow Glow */}
          <div className="absolute inset-x-0 bottom-0 h-4/5 bg-yellow-400 opacity-60 transform skew-x-12 -rotate-6 scale-x-150 blur-2xl"></div>

          {/* Smart Bin Image */}
          <div className="relative z-20 w-48 h-full flex items-center justify-center">
            <Image
              src="/images/smart-bin.png"
              alt="Smart Waste Bin"
              width={300}
              height={500}
              className="object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedHeroSection;
