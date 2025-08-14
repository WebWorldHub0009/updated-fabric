import React from "react";
import { motion } from "framer-motion";
import stageFabricImage from "../assets/catalouge/ghero.jpg"; 
import FabricImage from "../assets/catalouge/gmain.jpg"; 
import { FaCheckCircle } from "react-icons/fa";

export default function GlazeCottonStage() {
  return (
    <div className="bg-[#faf7f2] text-[#2e2e2e]">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-28 px-6"
        style={{ backgroundImage: `url(${stageFabricImage})` }}
      >
        <div className="absolute inset-0 bg-black/40 "></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-[#3c3b6e] mb-4"
          >
            Glaze Cotton for Stage Furnishing
          </motion.h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Elevate your stage presence with rich, elegant cotton fabric — flame-resistant, crease-free, and built for visual drama.
          </p>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-8 px-6 text-center">
        <h2 className="text-4xl font-semibold text-[#3c3b6e] mb-4">
          "Where Performance Meets Presentation"
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our Glaze Cotton fabrics don't just dress a stage — they define it.
        </p>
      </section>

      {/* Two-Column Fabric Explanation */}
      <section className="py-10 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src={FabricImage}
            alt="Glaze Cotton for Stage"
            className="rounded-2xl shadow-lg"
          />
        </div>
        <div>
          <h3 className="text-3xl font-bold text-[#3c3b6e] mb-6">
            Designed for Theatrical Elegance & Performance
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Glaze Cotton stage fabrics are specifically crafted for dynamic stage settings, combining luxurious texture
            with performance-grade properties. Their matte finish absorbs excess lighting and enhances contrast, ensuring
            the stage focus stays on performers, not background reflections.
            <br /><br />
            These fabrics are flame-retardant, wrinkle-resistant, and highly durable — making them perfect for curtain drops,
            stage skirting, ceiling swags, and dramatic drapes. The weave density allows for excellent fall and drape, adding
            theatrical depth and elegance.
            <br /><br />
            Whether for concerts, drama theatres, auditoriums, or cultural stages — Glaze Cotton fabrics bring richness and structure
            without compromising safety and durability.
          </p>
        </div>
      </section>

<section className="relative py-12 px-6 bg-gradient-to-br from-[#f9f9fb] to-white">
  <div className="absolute inset-0 bg-[url('/your-glaze-stage-bg.jpg')] bg-cover bg-center opacity-10 mix-blend-multiply pointer-events-none"></div>

  <div className="max-w-6xl mx-auto text-center relative z-10">
    <h2 className="text-5xl font-bold text-[#3c3b6e] mb-6">
      Why Choose <span className="text-[#5fca88]">Glaze Cotton</span> for Stage Furnishing?
    </h2>
    <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
      Glaze cotton is the trusted choice for theatre, auditoriums, and performance spaces seeking elegance, performance, and safety.
    </p>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
      {[
        "Flame Retardant — Certified safe for public performances and auditoriums.",
        "Wrinkle Resistant — Maintains a crease-free look after folding or long storage.",
        "Rich Texture — Elegant drape with weight, perfect for a luxury stage backdrop.",
        "Custom Dyeing — Available in vibrant and deep theatrical shades.",
        "Easy Maintenance — Machine washable and long-lasting fabric.",
        "Versatile Uses — Ideal for curtains, wings, backdrops, partitions & table covers.",
      ].map((point, idx) => (
        <div key={idx} className="flex items-start gap-3">
          <FaCheckCircle className="text-[#5fca88] text-2xl mt-1" />
          <p className="text-lg text-gray-700 leading-relaxed">{point}</p>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
}
