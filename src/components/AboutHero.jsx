import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/home/hero2.avif"; // Replace with fabric-themed image

const headings = [
  { main: "Weaving ", highlight: "Elegance" },
  { main: "Crafting ", highlight: "Innovation" },
  { main: "Redefining ", highlight: "Comfort" },
];

const HeroAbout = () => {
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
      className="relative w-full min-h-[80vh] bg-no-repeat bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Text Content */}
      <div className="relative z-10 px-6 md:px-16 max-w-4xl text-center ">
        <motion.span
          className="uppercase tracking-wider text-sm text-[#001f5c] font-semibold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Innovatives Fabric
        </motion.span>

        <h1 className="text-3xl md:text-6xl font-bold leading-tight  min-h-[110px] md:min-h-[130px] font-[Italiana] tracking-wide">
          {normalPart}
          <span className="text-[#001f5c]">
            {highlightedPart}
          </span>
          <span className="text-[#001f5c] animate-pulse inline-block w-[1ch]">|</span>
        </h1>

        <motion.p
          className=" text-[#e0e0e0] text-base md:text-lg max-w-2xl mx-auto font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          We specialize in high-end fabric solutions — from modular furniture and seat fabrics to cinema drapes and glazed cotton textiles. A fusion of style, durability, and innovation woven into every thread.
        </motion.p>

      <motion.button
  className="mt-8 px-8 py-3 text-lg font-semibold rounded-full bg-[#1c7925] text-black hover:bg-white transition duration-300 shadow-lg"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.5 }}
  onClick={() => {
    const section = document.getElementById("craftsmanship-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  Explore Our Craftsmanship
</motion.button>

      </div>
    </section>
  );
};

export default HeroAbout;
