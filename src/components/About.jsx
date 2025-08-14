import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaLayerGroup, FaLeaf } from "react-icons/fa";
import aboutImage from "../assets/home/hero4.avif";

export default function AboutSection() {
  return (
    <section className="relative w-full py-14 px-5 md:px-20 bg-[#f4f4f4] overflow-hidden">
      {/* === Glowing Circle Background Effects === */}
      <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] bg-[#1c7925]/20 rounded-full blur-3xl animate-pulse-slow z-0"></div>
      <div className="absolute bottom-[10%] right-[10%] w-[200px] h-[200px] border-2 border-[#1c7925]/40 rounded-full animate-pulse-slow z-0"></div>
      
      {/* === Watermark Company Name === */}
      <div className="absolute text-[100px] md:text-[160px] font-bold text-[#1c7925]/5 -rotate-12 top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 select-none pointer-events-none">
        INNOVATES
      </div>

      {/* === Decorative SVG Top Right === */}
      <svg className="absolute right-0 top-0 w-64 h-64 opacity-10 z-0" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="80" fill="#1c7925" />
      </svg>

      {/* === Center Title === */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold text-[#001f5c] mb-4">
          About <span className="text-[#1c7925]">Innovates Fabric</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Redefining luxury textiles with sustainability, design, and craftsmanship.
        </p>
      </motion.div>

      {/* === Content Grid === */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Left - Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <img src={aboutImage} alt="About Us" className="w-full object-cover" />
          </div>
          <div className="absolute bottom-[-30px] left-[-30px] bg-white p-4 rounded-lg shadow-xl flex items-center gap-4">
            <FaAward className="text-3xl text-[#1c7925]" />
            <div>
              <p className="text-xl font-bold text-[#001f5c]">20+ Years</p>
              <p className="text-sm text-gray-500">Experience in Textiles</p>
            </div>
          </div>
        </motion.div>

        {/* Right - Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-4xl font-bold text-[#001f5c] mb-4">Who We Are</h3>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            At <span className="text-[#1c7925] font-semibold">Innovates Fabric</span>, we blend artistic innovation with textile mastery. With a heritage steeped in quality and a future-focused vision, we offer premium upholstery, furnishing, and decor materials trusted by top designers and global brands.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-5 rounded-xl shadow-lg flex items-center gap-4">
              <FaLayerGroup className="text-[#1c7925] text-3xl" />
              <div>
                <h4 className="font-bold text-[#001f5c]">Wide Fabric Range</h4>
                <p className="text-sm text-gray-600">500+ luxurious textures & finishes.</p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-lg flex items-center gap-4">
              <FaLeaf className="text-[#1c7925] text-3xl" />
              <div>
                <h4 className="font-bold text-[#001f5c]">Eco-Friendly Focus</h4>
                <p className="text-sm text-gray-600">Sustainable production & green practices.</p>
              </div>
            </div>
          </div>

          {/* Extra Points */}
          <ul className="space-y-3 text-gray-700 text-base pl-5 list-disc">
            <li><strong className="text-[#001f5c]">Vision:</strong> To revolutionize home decor with sustainable luxury fabrics.</li>
            <li><strong className="text-[#001f5c]">Mission:</strong> Inspire design through innovative materials rooted in tradition.</li>
            <li><strong className="text-[#001f5c]">Craftsmanship:</strong> Every yard crafted with precision, care, and design excellence.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
