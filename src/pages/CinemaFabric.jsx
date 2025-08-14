import React from "react";
import { motion } from "framer-motion";
import heroBg from "../assets/catalouge/cinemabg.jpg";
import cinemaImg from "../assets/catalouge/hero.jpg";

export default function CinemaFabric() {
  return (
    <div className="">
      {/* Hero Section */}
      <section
        className="relative h-[75vh] flex items-center justify-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/40"></div>
        <div className="relative z-10 text-center  max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Premium Cinema Acoustic Fabric
          </motion.h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 font-medium">
            Enhance every frame. Absorb every note. Engineered for immersive audio & aesthetics.
          </p>
        </div>
      </section>

      {/* Title & Quote */}
      <section className="bg-[#f7f9fc] py-8 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-4">Cinema Fabric</h2>
        <p className="text-xl text-gray-600 italic">
          “Cinema begins where sound becomes atmosphere — and fabric plays the silent role.”
        </p>
      </section>

      {/* Image + Description */}
      <section className="bg-white py-8 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 ">
          <motion.img
            src={cinemaImg}
            alt="Cinema Acoustic Fabric"
            className="w-full h-auto rounded-xl shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold text-[#3c3b6e] mb-4">Engineered for Audio Precision & Luxury</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
  Our specialized cinema fabrics are meticulously engineered to absorb sound reflections and control reverberations, ensuring crystal-clear audio across every seat in the auditorium. With their luxurious texture and glare-free matte finish, these fabrics eliminate screen reflections while significantly enhancing the visual aesthetics of your cinema interiors. They are flame-retardant, acoustically transparent, and highly durable — making them a perfect choice for speaker covers, wall panels, and stretch wall systems. Additionally, these fabrics are available in a range of elegant colors and textures that blend seamlessly with modern theater designs. Easy to install and maintain, they offer both functional and decorative benefits, providing a high-end experience for both commercial cinemas and home theaters alike.
</p>

          </motion.div>
        </div>
      </section>

      {/* Features + Application + Expert Tip */}
      <section className="bg-gradient-to-br mx-auto from-[#eef2f7] to-[#dbe5f1] py-10 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          {/* Key Features */}
          <div>
            <h4 className="text-2xl font-bold mb-4 text-[#3c3b6e]">🧵 Key Features</h4>
            <ul className="list-disc pl-6 text-gray-800 text-lg space-y-2">
              <li>High acoustic transparency</li>
              <li>Anti-glare matte finish for screens</li>
              <li>Flame-retardant, anti-dust surface</li>
              <li>Perfect for luxury cinema walls & ceilings</li>
            </ul>
          </div>

          {/* Applications */}
          <div>
            <h4 className="text-2xl font-bold mb-4 text-[#3c3b6e]">📍 Applications</h4>
            <ul className="list-disc  text-gray-800 text-lg space-y-2">
              <li>Multiplexes & Home Theaters</li>
              <li>Luxury Private Cinemas</li>
              <li>Auditoriums & Media Rooms</li>
              <li>AV Showrooms & Studio Setups</li>
            </ul>
          </div>
        </div>

        {/* Expert Tip */}
        <div className="text-center mt-16">
          <div className="inline-block bg-white shadow-xl rounded-xl px-8 py-6 max-w-3xl mx-auto">
            <h4 className="text-xl font-semibold text-[#3c3b6e] mb-2">💬 Expert Tip</h4>
            <p className="text-gray-700 text-lg leading-relaxed">
              For the best cinematic experience, install the fabric on acoustic panels using stretch wall frames.
              Maintain at least a 25mm air gap behind for enhanced bass absorption.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
