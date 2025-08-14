import React, { useEffect, useState } from "react";
import { FaArrowRight, FaGem, FaCouch, FaShieldAlt } from "react-icons/fa";
import img1 from "../assets/home/hero5.avif";
import img2 from "../assets/home/hero2.avif";
import img3 from "../assets/home/hero3.jpg";
import { Link } from "react-router-dom";

const images = [img1, img2, img3];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden font-serif">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 transition-all duration-1000 ease-in-out">
        <img
          src={images[currentImage]}
          alt="Fabric Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center px-4 sm:px-8 md:px-20 py-20 md:py-0 min-h-screen text-white">
        {/* Hero Text */}
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-5xl md:text-5xl mt-10 md:mt-0 font-extrabold text-[#1c7925] drop-shadow-xl">
            Exquisite Fabrics.
            <br />
            <span className="text-[#ffffff] font-serif tracking-wide">
              Exceptional Quality.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-200 mt-4">
            A legacy in domestic and global textiles.
            <br />
            <span className="text-white">
              Innovates Fabric creates luxurious, high-performance furnishing
              and upholstery fabrics tailored for elegant, modern interiors.
            </span>
          </p>
          <Link to={"/about"}>
            <button className="mt-6 bg-[#1c7925] hover:bg-[#155a1d] text-white px-5 py-2 sm:px-6 sm:py-3 rounded-full flex items-center gap-2 shadow-lg transition duration-300 text-sm sm:text-base">
              Explore More <FaArrowRight />
            </button>
          </Link>
        </div>

        {/* Premium Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mt-10">
          {[
            {
              icon: (
                <FaGem className="text-[#001f5c] text-4xl sm:text-5xl mb-3" />
              ),
              title: "Luxury Textures",
              text: "Crafted with the finest threads, our fabrics offer unmatched softness and elegance.",
            },
            {
              icon: (
                <FaCouch className="text-[#001f5c] text-4xl sm:text-5xl mb-3" />
              ),
              title: "Perfect for Interiors",
              text: "Designed to elevate any space with style, comfort, and contemporary appeal.",
            },
            {
              icon: (
                <FaShieldAlt className="text-[#001f5c] text-4xl sm:text-5xl mb-3" />
              ),
              title: "Durability Guaranteed",
              text: "Our textiles withstand wear & tear, maintaining brilliance and integrity for years.",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white/20 rounded-xl px-5 py-4 border border-white/20 hover:border-[#1c7925] transition-all duration-300 shadow-md backdrop-blur-sm"
            >
              {card.icon}
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-[#001f5c]">
                {card.title}
              </h3>
              <p className="text-sm text-white">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
