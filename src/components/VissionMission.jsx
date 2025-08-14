import React from "react";
import { FaEye, FaBullseye } from "react-icons/fa";

export default function VisionMission() {
  return (
    <section className="relative bg-[#e6eef8] py-10 overflow-hidden">
      {/* Decorative SVG background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 800 600" fill="none">
          <circle cx="150" cy="100" r="250" fill="#e0efff" opacity="0.3" />
          <circle cx="700" cy="500" r="180" fill="#cde8ff" opacity="0.4" />
        </svg>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#102c57] font-[Italiana]">
            Our Vision & <span className="text-[#1c7925]"> Mission</span>
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            "Weaving the future of fashion and function through sustainable, smart fabric innovations."
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Vision Card */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-blue-100 hover:shadow-2xl transition duration-300">
            <div className="flex items-center gap-4 mb-5 text-[#1955a5]">
              <FaEye className="text-3xl" />
              <h3 className="text-2xl font-semibold font-[Poppins]">
                Our Vision
              </h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To revolutionize the textile industry by becoming a global leader in smart, eco-friendly, and adaptive fabric technologies that empower creativity, comfort, and sustainability for future generations.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-blue-100 hover:shadow-2xl transition duration-300">
            <div className="flex items-center gap-4 mb-5 text-[#1955a5]">
              <FaBullseye className="text-3xl" />
              <h3 className="text-2xl font-semibold font-[Poppins]">
                Our Mission
              </h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To craft innovative and high-performance fabric solutions that combine cutting-edge technology, environmental responsibility, and superior aesthetics—backed by a team dedicated to continuous research, customer delight, and excellence in every thread.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
