import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/doc/bg2.avif"; 

const headings = [
  { main: "Verified ", highlight: "Excellence" },
  { main: "Trusted ", highlight: "Quality" },
  { main: "Certified ", highlight: "Craftsmanship" },
];

const HeroCertificate = ({ certSectionRef }) => {
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

  // ✅ Scroll function
  const scrollToCertificates = () => {
    if (certSectionRef?.current) {
      const yOffset = -80; // if you have a fixed header, adjust
      const y =
        certSectionRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative w-full min-h-[80vh] bg-no-repeat bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="relative z-10 px-6 md:px-16 max-w-4xl text-center">
        <motion.span
          className="uppercase tracking-wider text-sm text-[#001f5c] font-semibold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Certificates & Compliance
        </motion.span>

        <h1 className="text-3xl md:text-6xl font-bold leading-tight min-h-[110px] md:min-h-[130px] font-[Italiana] tracking-wide">
          {normalPart}
          <span className="text-[#001f5c]">{highlightedPart}</span>
          <span className="text-[#001f5c] animate-pulse inline-block w-[1ch]">|</span>
        </h1>

        <motion.p
          className="text-[#e0e0e0] text-base md:text-lg  mx-auto font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Our certifications are a testament to our commitment to global standards,
          customer trust, and sustainable innovation. View our recognized documents of quality.
        </motion.p>

        <motion.button
          onClick={scrollToCertificates}
          className="mt-8 px-6 py-3 bg-[#001f5c] text-white rounded-xl hover:bg-[#0d2a70] transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Certificates
        </motion.button>
      </div>
    </section>
  );
};

export default HeroCertificate;
