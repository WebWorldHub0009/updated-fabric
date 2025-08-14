import React, { useEffect, useState } from "react";
import { FaRulerCombined, FaSmile, FaCubes, FaUsers } from "react-icons/fa";
import logo from "../assets/fabric.png";

// Reusable StatCard with counter
const StatCard = ({ icon: Icon, label, target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const cleanTarget = target.trim().toUpperCase();
    let multiplier = 1;

    if (cleanTarget.includes("K")) multiplier = 1000;
    if (cleanTarget.includes("M")) multiplier = 1000000;

    const numericPart = parseFloat(cleanTarget.replace(/[^\d.]/g, ""));
    const finalTarget = Math.floor(numericPart * multiplier);
    const duration = 2000;
    const increment = finalTarget / (duration / 10);
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= finalTarget) {
        current = finalTarget;
        clearInterval(interval);
      }
      setCount(Math.floor(current));
    }, 10);

    return () => clearInterval(interval);
  }, [target]);

  const formatCount = () => {
    const plus = target.includes("+") ? "+" : "";
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M${plus}`;
    if (count >= 1000) return `${Math.floor(count / 1000)}K${plus}`;
    return `${count}${plus}`;
  };

  return (
    <div className="flex flex-col items-center">
      <Icon className="text-3xl text-[#001f5c] mb-2" />
      <div className="text-2xl font-semibold text-[#001f5c]">
        {formatCount()}
      </div>
      <p className="text-sm text-gray-800 mt-1">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <div className="relative z-10 py-14 px-6 md:px-20 text-[#001f5c] overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#a7fce2] via-[#ececec] to-[#023b74] z-[-10]" />

      {/* SVG Watermark */}
      <div className="absolute inset-0 top-35 flex items-center justify-center pointer-events-none z-0">
        <svg
          className="w-96 h-96 opacity-5"
          fill="none"
          stroke="#001f5c"
          strokeWidth="1"
          viewBox="0 0 100 100"
        >
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="14"
            fontWeight="bold"
            fill="#001f5c"
          >
            INNOVATIVES
          </text>
        </svg>
      </div>

      {/* Decorative Corners */}
      <svg className="absolute top-0 left-0 w-40 h-40 opacity-10" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="40" stroke="#001f5c" strokeWidth="4" />
      </svg>
      <svg className="absolute bottom-0 right-0 w-40 h-40 opacity-10" viewBox="0 0 100 100" fill="none">
        <rect x="10" y="10" width="80" height="80" stroke="#001f5c" strokeWidth="3" rx="12" />
      </svg>

      {/* Header */}
      <div className="text-center mb-8 z-10 relative max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#001f5c] mb-4">
          Crafted to Inspire. Built to Last.
        </h2>
        <p className="text-lg md:text-xl text-gray-700 italic">
          “Every thread we weave tells a story of excellence and innovation.”
        </p>
      </div>

      {/* Brand Statement */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16 z-10 relative">
        <div>
          <h2 className="text-5xl font-bold text-[#001f5c] mb-4">25+</h2>
          <p className="text-gray-800 mb-3 leading-relaxed">
            For decades, <span className="text-[#001f5c] font-semibold">Innovatives Fabric</span> has redefined textile craftsmanship—delivering world-class quality and sustainable production. We're trusted by thousands globally for elegance, performance, and innovation.
          </p>
        </div>
        <div className="flex items-center justify-end gap-4">
          <img
            src={logo}
            alt="Innovatives Fabric"
            className="w-20 h-20 rounded-full object-center shadow-lg"
          />
          <div>
            <p className="font-semibold text-[#001f5c]">Innovatives Fabric</p>
            <p className="text-gray-800 text-sm">Delhi NCR</p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center border-t border-gray-300 pt-10 z-10 relative">
        <StatCard icon={FaRulerCombined} label="Metres of Fabric Made" target="12M+" />
        <StatCard icon={FaSmile} label="Happy Clients" target="11K+" />
        <StatCard icon={FaCubes} label="Fibres Manufactured" target="23K+" />
        <StatCard icon={FaUsers} label="Team Members" target="112+" />
      </div>
    </div>
  );
};

export default StatsSection;
