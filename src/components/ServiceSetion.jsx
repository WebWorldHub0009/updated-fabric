import React from "react";
import {
  FaCouch,
  FaHeadphones,
  FaTheaterMasks,
  FaChair,
  FaHome,
  FaCogs,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import img1 from "../assets/service/acoustic.jpg";
import img2 from "../assets/service/cinema.jpg";
import img3 from "../assets/service/modularfur.jpg";
import img4 from "../assets/service/glaze-contton.jpg";
import img5 from "../assets/service/home-theater.jpg";
import img6 from "../assets/service/chair.jpg";
import bg from "../assets/service/segsbg.jpg";

const fabricCategories = [
  {
    icon: <FaHeadphones className="text-2xl text-[#1e3a8a]" />,
    title: "Acoustic Fabrics",
    description:
      "Engineered to absorb sound while adding elegance — ideal for auditoriums, studios, and conference halls.",
    imgSrc: img1,
    route: "/services/fabric-for-acoustic",
  },
  {
    icon: <FaTheaterMasks className="text-2xl text-[#1e3a8a]" />,
    title: "Cinema Fabrics",
    description:
      "Specialized blackout and velvet fabrics curated for immersive cinematic environments.",
    imgSrc: img2,
    route: "/services/fabric-for-cinema",
  },
  {
    icon: <FaCouch className="text-2xl text-[#1e3a8a]" />,
    title: "Modular Furniture Fabric",
    description:
      "Durable and stylish fabrics tailored for modular furniture — comfort meets resilience.",
    imgSrc: img3,
    route: "/services/fabric-for-modular-kitchen",
  },
  {
    icon: <FaChair className="text-2xl text-[#1e3a8a]" />,
    title: "Glaze Cotton Stage Fabrics",
    description:
      "Premium-grade stage furnishing fabrics with glaze cotton and superior drape qualities.",
    imgSrc: img4,
    route: "/services/glaze-cotton-fabric-for-stage-furnishing",
  },
  {
    icon: <FaHome className="text-2xl text-[#1e3a8a]" />,
    title: "Home Theatre",
    description:
      "Textiles designed to optimize acoustics and aesthetics in luxury home cinema setups.",
    imgSrc: img5,
    route: "/services/fabric-for-home-theater",
  },
  {
    icon: <FaCogs className="text-2xl text-[#1e3a8a]" />,
    title: "Cinema Chair Upholstery",
    description:
      "Fire-retardant, high-performance textiles built to last in commercial cinema seating.",
    imgSrc: img6,
    route: "/services/cinema-chair-upholstery",
  },
];

export default function FabricCategories() {
  return (
    <section
      className="relative py-10 text-center bg-fixed bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 z-0" />

      <div className="relative z-10 px-2 max-w-6xl mx-auto">
        <h2 className="uppercase tracking-wider text-sm font-semibold text-blue-900">
          Crafted with Precision
        </h2>
        <h3 className="text-3xl sm:text-4xl font-[italiana] font-bold text-gray-800 mt-3">
          Our <span className="text-[#1e3a8a]">Fabric Categories</span>
        </h3>
        <p className="text-gray-700 max-w-3xl mx-auto mt-4 mb-10 text-sm sm:text-base">
          Innovatives Fabric offers high-end textile solutions engineered for
          performance, luxury, and sustainability across acoustic, cinematic,
          and commercial environments.
        </p>

        {/* Service Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {fabricCategories.map((service, idx) => (
            <Link
              key={idx}
              to={service.route}
              className="bg-white text-black shadow-md rounded-xl p-5 w-80 flex flex-col items-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={service.imgSrc}
                alt={service.title}
                className="w-full h-44 object-cover rounded-lg mb-4"
              />
              <div className="bg-white p-3 border border-blue-900 relative -top-10 rounded-full shadow-md">
                {service.icon}
              </div>
              <h4 className="text-lg font-bold text-[#1B2A41] uppercase -mt-5">
                {service.title}
              </h4>
              <p className="text-sm text-gray-600 mt-2">
                {service.description}
              </p>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <p className="mt-10 text-gray-700 text-sm sm:text-base">
          Need custom textile consultation?{" "}
          <Link
            to="/contact"
            className="text-blue-700 underline hover:text-blue-900 transition"
          >
            Talk to Our Experts
          </Link>
        </p>
      </div>
    </section>
  );
}
