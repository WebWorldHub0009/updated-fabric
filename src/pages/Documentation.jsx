import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import HeroCertificate from "../components/HeroCertificate";
import cert1 from "../assets/doc/1.webp";
import cert2 from "../assets/doc/2.webp";
import cert3 from "../assets/doc/3.webp";
import cert4 from "../assets/doc/4.webp";
import cert5 from "../assets/doc/5.webp";
import cert6 from "../assets/doc/6.webp";
import cert7 from "../assets/doc/7.webp";

const certificates = [cert1, cert2, cert3, cert4, cert5, cert6, cert7];

export default function Documentation() {
  const certSectionRef = useRef(null);

  return (
    <div className="text-black min-h-screen bg-white">
      {/* Pass the ref to HeroCertificate */}
      <HeroCertificate certSectionRef={certSectionRef} />

      {/* Certificates Grid */}
      <section ref={certSectionRef} className="py-16 px-6 md:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 place-items-center">
          {certificates.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`certificate-${index}`}
              className="w-full max-w-md h-auto object-cover rounded-xl shadow-xl border border-gray-300 cursor-pointer"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
