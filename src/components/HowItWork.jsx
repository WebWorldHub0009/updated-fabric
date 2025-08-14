import React from "react";
import {
  FaComments,
  FaCubes,
  FaTags,
  FaClipboardCheck,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const steps = [
  {
    id: 1,
    title: "Consultation",
    description:
      "Begin with a personalized consultation to understand your aesthetic, purpose, and project vision.",
    icon: <FaComments className="text-4xl text-[#2E3A59]" />,
    extra: "Available online or in-store — your style journey starts here.",
  },
  {
    id: 2,
    title: "Fabric Selection",
    description:
      "Browse our curated collections or request exclusive samples tailored to your taste.",
    icon: <FaCubes className="text-4xl text-[#2E3A59]" />,
    extra: "From sustainable silks to luxury weaves — explore without limits.",
  },
  {
    id: 3,
    title: "Pricing & Customization",
    description:
      "We provide transparent quotes with optional custom finishing and sizing advice.",
    icon: <FaTags className="text-4xl text-[#2E3A59]" />,
    extra: "Tailored to your budget and volume — no surprises.",
  },
  {
    id: 4,
    title: "Order Placement",
    description:
      "Confirm your selection and relax. We’ll handle the rest with seamless delivery.",
    icon: <FaClipboardCheck className="text-4xl text-[#2E3A59]" />,
    extra: "Track your order in real time and get post-purchase support.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#f9f9f9] to-white">
      {/* Header */}
      <div className="text-center mb-14 px-6">
        <p className="text-sm text-[#1c7925] font-semibold uppercase tracking-widest">
          Seamless Process
        </p>
        <h2 className="text-4xl sm:text-5xl font-[Italiana] text-[#2E3A59]">
          How It Works
        </h2>
        <p className="mt-3 text-gray-900 max-w-2xl mx-auto text-sm sm:text-base">
          From concept to creation — our process makes luxury fabric sourcing simple, refined, and collaborative.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 max-w-7xl mx-auto">
        {steps.map((step, idx) => (
          <div
            key={step.id}
            className="relative group border border-gray-200 bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            {/* Step Number */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white border-2 border-[#1c7925] text-[#2E3A59] font-bold text-sm group-hover:bg-[#1c792c] group-hover:text-white transition-all duration-300">
                {idx + 1}
              </div>
            </div>

            {/* Icon */}
            <div className="flex justify-center mb-5 mt-6">{step.icon}</div>

            {/* Title */}
            <h3 className="text-center text-xl font-semibold mb-2 text-[#2E3A59]">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-center text-gray-600 text-sm mb-3">
              {step.description}
            </p>

            {/* Extra */}
            <p className="text-center text-gray-400 text-xs mb-6">{step.extra}</p>

            {/* Learn More CTA */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full px-4">
              <div className="opacity-0 translate-y-1 group-hover:translate-y-8 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                <Link to="/contact">
                  <button className="w-full rounded-full bg-[#2E3A59] text-white text-sm py-2 hover:bg-[#1c263b] transition">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-14 text-center px-6 max-w-3xl mx-auto">
        <p className="text-lg text-gray-700 font-medium mb-6">
          Whether it’s a signature project or your personal creation, we’re here to bring it to life — beautifully.
        </p>
        <Link to="/contact">
          <button className="bg-[#2E3A59] cursor-pointer text-white px-8 py-3 rounded-full text-sm hover:bg-[#1a202e] transition font-semibold shadow-md">
            Book Your Consultation
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HowItWorks;
