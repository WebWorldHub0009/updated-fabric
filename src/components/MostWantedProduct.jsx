import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaArrowRight } from "react-icons/fa";

import p1 from "../assets/product/p1.jpg";
import p2 from "../assets/product/p2.jpg";
import p3 from "../assets/product/p3.jpg";
import p4 from "../assets/product/p4.jpg";
import p5 from "../assets/product/p5.jpg";
import p6 from "../assets/product/p6.jpg";

const products = [
  { id: 1, image: p1, route: "/collection/fabrics" },
  { id: 2, image: p2, route: "/collection/fabrics" },
  { id: 3, image: p3, route: "/collection/fabrics" },
  { id: 4, image: p4, route: "/collection/fabrics" },
  { id: 5, image: p5, route: "/collection/fabrics" },
  { id: 6, image: p6, route: "/collection/fabrics" },
];

export default function ProductSlider() {
  const navigate = useNavigate();
  const timer = useRef();
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 25 },
      },
    },
  });

  useEffect(() => {
    if (!slider) return;
    timer.current = setInterval(() => {
      slider.current?.next();
    }, 3500);
    return () => clearInterval(timer.current);
  }, [slider]);

  return (
    <section className="relative py-20 bg-gradient-to-br from-[#a7fce2] via-[#ececec] to-[#023b74] overflow-hidden">
      {/* Decorative SVG Blob */}
      <svg
        className="absolute top-[-100px] left-[-100px] opacity-10 w-[400px] h-[400px] z-0"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#014058"
          d="M38.3,-66.2C48.6,-56.1,54.4,-43.1,60.7,-30.4C67.1,-17.6,73.9,-5.1,72.3,6.6C70.7,18.3,60.6,29.3,50.4,39.7C40.2,50,30,59.7,17.6,65.1C5.1,70.5,-9.5,71.6,-22.6,66.7C-35.7,61.7,-47.4,50.8,-54.3,38.2C-61.2,25.6,-63.4,11.3,-63.5,-3.1C-63.7,-17.6,-61.9,-32.1,-53.5,-44.3C-45.1,-56.6,-30.2,-66.6,-14.1,-71.2C2,-75.8,40.2,-76.2,38.3,-66.2Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* Heading */}
      <div className="relative z-10 text-center mb-14">
        <p className="text-center text-[#1c7925]">Our Showcase</p>
        <h2 className="text-4xl md:text-5xl font-[Italiana] text-[#2E3A59]">
          Crafted for the Visionaries
        </h2>
        <p className="text-gray-700 mt-3 text-base italic">
          “Elegance woven into every fiber.”
        </p>
        <div className="w-24 h-[3px] bg-[#b8ddf5] mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Slider */}
      <div ref={sliderRef} className="keen-slider relative z-10 px-4 md:px-12">
        {products.map((product) => (
          <div
            key={product.id}
            className="keen-slider__slide bg-white/50 rounded-3xl overflow-hidden shadow-xl group transition-all duration-700"
          >
            <div className="relative w-full h-[360px] sm:h-[450px] md:h-[520px]">
              <img
                src={product.image}
                alt={`product-${product.id}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl" />
              <div className="absolute bottom-5 right-5">
                <button
                  onClick={() => navigate(product.route)}
                  className="bg-white p-3 rounded-full shadow-md hover:bg-[#F5F5DC] transition"
                >
                  <FaArrowRight className="text-[#2e3a59] text-sm" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
