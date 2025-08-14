// src/components/CinemaUpholstery.jsx
import React from "react";
import cinemaFabricImg from "../assets/service/blueseat.jpg"
import heroBg from "../assets/service/redseat.jpg"; 

const CinemaUpholstery = () => {
  return (
    <div className="bg-[#f7f9fc] text-gray-800">
      {/* HERO SECTION */}
      <section
        className="relative min-h-[75vh] bg-cover bg-center flex items-center justify-center text-[#7ccf89] px-6"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 10, 30, 0.7), rgba(10, 10, 30, 0.8)), url(${heroBg})`,
        }}
      >
        <div className="text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Premium Cinema 
            <span className="text-[#3c3b6e]">Upholstery Fabrics</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium tracking-wide text-gray-200">
            Comfort meets luxury. Designed for cinemas, built to last.
          </p>
        </div>
      </section>

      {/* HEADING + QUOTE */}
      <section className="py-8 px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Cinema Upholstery Fabric?
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 italic">
          “Cinema fabrics don’t just seat the audience — they elevate comfort, aesthetics, and experience.”
        </p>
      </section>

      {/* IMAGE + DESCRIPTION - ENHANCED */}
      <section className="py-10 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center bg-gradient-to-br from-[#f9fafc] via-[#f0f4f8] to-[#e4eaf2] rounded-3xl shadow-2xl">
        {/* Left Image */}
        <div data-aos="fade-right">
          <img
            src={cinemaFabricImg}
            alt="Cinema Upholstery Fabric"
            className="rounded-3xl shadow-xl w-full object-cover border-4 border-[#3c3b6e]/10"
          />
        </div>

        {/* Right Content */}
        <div data-aos="fade-left" className="text-[#2e2e2e]">
          <h3 className="text-4xl font-extrabold mb-6 text-[#3c3b6e] leading-snug">
            What is Cinema Upholstery Fabric?
          </h3>
          <p className="text-lg leading-relaxed text-gray-800 mb-6">
            Our cinema upholstery fabrics are designed for maximum comfort, durability, and luxury aesthetics. Perfect for movie theaters, auditoriums, and premium entertainment spaces, they provide long-lasting seating quality and a visually appealing environment.
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            Made with high-resilience fibers and luxurious textures, our fabrics are easy to clean, flame-retardant, and moisture-resistant. The fabric ensures comfort during long sessions and complements the overall theater design. The key feature is <span className="font-semibold text-[#3c3b6e]">ergonomic cushioning support</span> combined with premium visual appeal.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative bg-[#eef2ff] py-10 px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#3c3b6e] mb-4">
            Why Choose Our Cinema Fabrics?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From durability to comfort — our fabrics are engineered to enhance every cinema experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Premium Durability",
              desc: "High-resilience fabrics that withstand heavy usage and maintain aesthetics.",
            },
            {
              title: "Custom Colors & Textures",
              desc: "We offer a wide variety of fabrics that match your cinema theme and interior design.",
            },
            {
              title: "Expert Guidance",
              desc: "Our team provides recommendations for fabric selection, installation, and maintenance.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-[#3c3b6e] mb-3">{item.title}</h4>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DETAILS SECTION */}
      <section className="bg-gradient-to-br from-[#f0f4ff] to-[#eaf3ff] py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* Heading Row */}
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-[#3c3b6e] mb-4">Why Our Cinema Upholstery?</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Designed for comfort and elegance, our fabrics offer premium durability and visual appeal for any cinema environment.
            </p>
          </div>

          {/* Features + Applications Grid */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Key Features */}
            <div>
              <h4 className="text-2xl font-bold mb-4 text-[#3c3b6e] flex items-center gap-2">
                🧵 Key Features
              </h4>
              <ul className="list-disc pl-6 text-gray-700 text-lg space-y-3">
                <li>High durability & abrasion resistance</li>
                <li>Flame-retardant and moisture-resistant</li>
                <li>Soft yet supportive cushioning</li>
                <li>Visually premium — enhances luxury cinema interiors</li>
              </ul>
            </div>

            {/* Applications */}
            <div>
              <h4 className="text-2xl font-bold mb-4 text-[#3c3b6e] flex items-center gap-2">
                📍 Applications
              </h4>
              <ul className="list-disc pl-6 text-gray-700 text-lg space-y-3">
                <li>Movie Theaters, Auditoriums, Home Cinemas</li>
                <li>Multiplexes, Entertainment Hubs, Lounges</li>
                <li>Corporate Screening Rooms & Premium Seating Areas</li>
              </ul>
            </div>
          </div>

          {/* Expert Tip */}
          <div className="text-center bg-white shadow-xl rounded-xl p-8 max-w-3xl mx-auto border border-[#d6e0f5]">
            <h4 className="text-2xl font-bold mb-4 text-[#3c3b6e]">💬 Expert Tip</h4>
            <p className="text-lg text-gray-700 leading-relaxed">
              Choose fabrics with a balance of softness and support. Ensure proper installation with ergonomic cushioning for maximum comfort and longevity.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CinemaUpholstery;
