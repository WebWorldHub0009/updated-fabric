import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPalette, FaShieldAlt, FaIndustry, FaLeaf } from "react-icons/fa";

export default function WhyChooseUs() {
  const [selectedReason, setSelectedReason] = useState(null);

  const reasons = [
    {
      icon: <FaPalette size={32} />,
      title: "Design-Led Innovation",
      desc: "We blend creativity with textile engineering to produce exclusive, trend-setting fabric collections.",
      details:
        "At Innovatives Fabric, our design-led innovation process involves collaborating with world-class designers, experimenting with new textures, and integrating digital printing technologies to produce unique fabrics that set global trends.",
      active: true,
    },
    {
      icon: <FaShieldAlt size={32} />,
      title: "Performance & Durability",
      desc: "Our fabrics are fire-retardant, acoustically engineered, and made to withstand commercial-grade wear.",
      details:
        "We use advanced treatments to make fabrics resistant to wear, fire, and environmental factors. Our materials are tested rigorously to meet international safety and performance standards.",
    },
    {
      icon: <FaIndustry size={32} />,
      title: "State-of-the-Art Manufacturing",
      desc: "Vertically integrated production units ensure unmatched quality control and speed-to-market.",
      details:
        "Our manufacturing facilities are equipped with the latest weaving, dyeing, and finishing machinery, allowing us to maintain quality at every stage and deliver products faster to market.",
    },
    {
      icon: <FaLeaf size={32} />,
      title: "Sustainable Approach",
      desc: "From dyeing to dispatch, our processes focus on minimal environmental impact and eco-friendly practices.",
      details:
        "We prioritize eco-friendly dyes, water recycling systems, and energy-efficient processes to ensure minimal environmental footprint while delivering premium-quality fabrics.",
    },
  ];

  return (
    <section className="bg-[#f3f9fb] py-16 px-4 sm:px-8 md:px-16 lg:px-24 text-[#102036]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-bold font-[italiana] text-[#2E3A59] mb-2">
              Why Choose Innovatives Fabric?
            </h2>
            <p className="text-lg text-gray-700 max-w-xl">
              Quality. Innovation. Trust. Discover why global designers and commercial spaces choose Innovatives Fabric for high-end textile solutions.
            </p>
          </div>

          <Link
            to="/contact"
            className="bg-[#2E3A59] text-white px-6 py-3 rounded-full hover:bg-blue-800 transition shadow-md font-semibold"
          >
            Contact Us
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 flex flex-col justify-between items-center text-center shadow-lg min-h-[220px] ${
                reason.active
                  ? "bg-[#2E3A59] text-white"
                  : "bg-[#dceeff] text-[#2E3A59]"
              }`}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-full mb-1 shadow-md ${
                  reason.active
                    ? "bg-white text-[#2E3A59]"
                    : "bg-[#2E3A59] text-white"
                }`}
              >
                {reason.icon}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 justify-between">
                <h3 className="text-xl font-[italiana] font-semibold mb-1">{reason.title}</h3>
                <p className="text-sm leading-relaxed">{reason.desc}</p>
              </div>

              {/* Button */}
              <button
                onClick={() => setSelectedReason(reason)}
                className={`mt-6 px-5 py-2 rounded-full font-medium transition shadow ${
                  reason.active
                    ? "bg-white text-[#2E3A59] hover:bg-blue-100"
                    : "bg-[#2E3A59] text-white hover:bg-blue-800"
                }`}
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedReason && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
          <div className="bg-white rounded-xl p-6 max-w-lg w-full relative shadow-lg">
            <button
              onClick={() => setSelectedReason(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl font-bold"
            >
              ✕
            </button>
            <div className="flex items-center mb-4 gap-3">
              <div className="text-[#2E3A59]">{selectedReason.icon}</div>
              <h3 className="text-2xl font-bold text-[#2E3A59]">{selectedReason.title}</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">{selectedReason.details}</p>
          </div>
        </div>
      )}
    </section>
  );
}
