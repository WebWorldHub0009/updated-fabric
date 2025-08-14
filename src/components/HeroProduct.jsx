import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/catalouge/productbg.jpg"; 

const headings = [
  { main: "Unrivaled ", highlight: "Fabric" },
  { main: "Tailored ", highlight: "Elegance" },
  { main: "Premium ", highlight: "Textiles" },
];

const HeroProduct = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const fullText =
    headings[currentHeadingIndex].main + headings[currentHeadingIndex].highlight;
  const splitIndex = headings[currentHeadingIndex].main.length;

  useEffect(() => {
    if (isTyping) {
      if (charIndex < fullText.length) {
        const timeout = setTimeout(() => {
          setCurrentText((prev) => prev + fullText[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 60);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
        setTimeout(() => setIsTyping(true), 1200);
      }
    } else {
      const nextIndex = (currentHeadingIndex + 1) % headings.length;
      setTimeout(() => {
        setCurrentText("");
        setCharIndex(0);
        setCurrentHeadingIndex(nextIndex);
      }, 1000);
    }
  }, [charIndex, isTyping, currentHeadingIndex, fullText]);

  const normalPart = currentText.slice(0, Math.min(splitIndex, currentText.length));
  const highlightedPart =
    currentText.length > splitIndex ? currentText.slice(splitIndex) : "";

  return (
    <section
      className="relative w-full min-h-[90vh] bg-no-repeat bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80 z-0" />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-16 max-w-5xl text-center text-white">
        <motion.span
          className="uppercase tracking-wider text-sm text-[#7ccf89] font-semibold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          The Fabric of Distinction
        </motion.span>

        <h1 className="text-3xl md:text-6xl font-bold leading-tight min-h-[110px] md:min-h-[130px] font-[Italiana] tracking-wide mt-2">
          {normalPart}
          <span className="text-[#7ccf89]">{highlightedPart}</span>
          <span className="text-[#7ccf89] animate-pulse inline-block w-[1ch]">|</span>
        </h1>

        <motion.p
          className="text-gray-200 text-base md:text-lg mt-4 font-light max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Discover a curated collection of premium textiles—engineered for luxury,
          comfort, and performance. Crafted to elevate interiors, fashion, and
          industrial standards with unmatched sophistication.
        </motion.p>

        {/* Feature Highlights */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm md:text-base text-gray-300 font-medium">
          <div className="bg-white/10 px-5 py-2 rounded-full border border-white/20">
            Flame Retardant
          </div>
          <div className="bg-white/10 px-5 py-2 rounded-full border border-white/20">
            ISO Certified Quality
          </div>
          <div className="bg-white/10 px-5 py-2 rounded-full border border-white/20">
            Eco-Friendly Threads
          </div>
          <div className="bg-white/10 px-5 py-2 rounded-full border border-white/20">
            Soft-Touch Weaves
          </div>
        </div>

        {/* CTA */}
        <motion.button
          className="mt-10 px-8 py-3 text-lg font-semibold rounded-full bg-[#7ccf89] text-black hover:bg-white transition duration-300 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Explore Our Collection
        </motion.button>
      </div>
    </section>
  );
};

export default HeroProduct;
