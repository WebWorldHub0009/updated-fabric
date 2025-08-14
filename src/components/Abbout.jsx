import React from "react";
import { motion } from "framer-motion";
import { FaCouch, FaIndustry, FaChair } from "react-icons/fa";
import img1 from "../assets/service/acoustic.jpg"; // Static image
import smallImage from "../assets/product/p5.jpg";

export default function HeroSection() {
  return (
    <section  id="craftsmanship-section" className="bg-white relative overflow-hidden py-16 px-6 md:px-20">
      {/* Left Background Glow */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] z-0">
        <svg className="w-full h-full" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="glowLeft" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1c7925" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#1c7925" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="300" cy="300" r="300" fill="url(#glowLeft)" />
        </svg>
      </div>

      {/* Circular Hollow Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] z-0 opacity-50">
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <radialGradient id="ringGlow" cx="50%" cy="50%" r="50%">
              <stop offset="70%" stopColor="#1c7925" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#1c7925" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle
            cx="250"
            cy="250"
            r="180"
            fill="none"
            stroke="url(#ringGlow)"
            strokeWidth="40"
          />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Text Content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left space-y-6"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-4xl font-[italiana] font-extrabold text-gray-900 leading-tight">
            Elevating <span className="text-[#1c7925]">Fabric</span> Standards <br />
            With <span className="text-[#001f5c]">Innovation</span> & Style
          </h1>

          <p className="text-lg text-gray-700">
            Innovatives Fabric crafts world-class furnishing, seating, and interior fabrics that
            combine durability, aesthetics, and comfort. Trusted for cinema halls, modular furniture,
            transport seating, and premium interiors across industries.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-8">
            <div className="flex flex-col items-center bg-gray-100 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300">
              <FaChair className="text-[#1c7925] text-3xl" />
              <div>
                <h3 className="text-lg font-bold text-gray-800">Seating Fabrics</h3>
                <p className="text-sm text-gray-600">For offices, lounges & auditoriums.</p>
              </div>
            </div>
            <div className="flex flex-col items-center bg-gray-100 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300">
              <FaIndustry className="text-[#1c7925] text-3xl" />
              <div>
                <h3 className="text-lg font-bold text-gray-800">Industrial Strength</h3>
                <p className="text-sm text-gray-600">Built to withstand heavy use & wear.</p>
              </div>
            </div>
            <div className="flex flex-col items-center bg-gray-100 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300">
              <FaCouch className="text-[#1c7925] text-3xl" />
              <div>
                <h3 className="text-lg font-bold text-gray-800">Elegant Upholstery</h3>
                <p className="text-sm text-gray-600">Refined finishes & glazed cottons.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="md:w-1/2 flex justify-center mb-12 md:mb-0 relative"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-80 h-96 rounded-tr-[100px] rounded-bl-[100px] overflow-hidden shadow-2xl border-8 border-white transition-all duration-700 ease-in-out">
            <img
              src={img1}
              alt="Fabric Showcase"
              className="w-full h-full object-cover scale-110 hover:scale-125 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute bottom-0 w-full text-center bg-gradient-to-t from-white via-transparent to-transparent py-3">
              <p className="text-gray-800 font-semibold">Premium Textile Aesthetics</p>
            </div>

            {/* Floating Small Image */}
            <div className="absolute bottom-3 right-3 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
              <img
                src={smallImage}
                alt="Mini Showcase"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Glow */}
      <div className="absolute top-40 bottom-0 right-0 w-[600px] h-[600px] z-0">
        <svg className="w-full h-full" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="glowRight" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#001fc5" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#001fc5" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="300" cy="300" r="300" fill="url(#glowRight)" />
        </svg>
      </div>
    </section>
  );
}
