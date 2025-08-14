import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

import img1 from "../assets/home/hero2.avif";
import img2 from "../assets/home/hero3.jpg";
import img3 from "../assets/home/hero4.avif";
import img4 from "../assets/home/hero5.avif";

const faqs = [
  {
    question: "What sets Innovatives Fabric apart?",
    answer:
      "We combine craftsmanship, global textile sourcing, and tailored consultation to deliver premium fabric solutions with a refined edge.",
  },
  {
    question: "Can I request customized fabrics or samples?",
    answer:
      "Absolutely. We offer bespoke options, swatch requests, and designer consultations to ensure you find the perfect match.",
  },
  {
    question: "Do you work with both individuals and businesses?",
    answer:
      "Yes, whether you're a fashion house, interior designer, or private client — we cater to all with equal detail and care.",
  },
  {
    question: "Is consultation free for my first project?",
    answer:
      "Yes! We believe luxury should begin with guidance — your first consultation is complimentary and commitment-free.",
  },
];

const WhoWeAre = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#bed3ff8a] py-20 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-start">
        {/* Image Grid */}
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
          {[img1, img2, img3, img4].map((src, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden bg-white shadow aspect-square transform transition duration-300 hover:scale-105 hover:shadow-lg"
            >
              <img
                src={src}
                alt={`gallery-${idx}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <span className="bg-[#001f5C] text-white text-sm uppercase px-4 py-2 rounded-full inline-block">
            Frequently Asked Question
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-snug">
            Redefining fabrics with <br />
            <span className="text-[#1c7925]">craft, consultation & care</span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base">
            Innovatives Fabric is where tradition meets innovation — a space
            where every weave, texture, and tone is thoughtfully curated to meet
            your vision.
          </p>

          {/* Accordion FAQ */}
          <div className="space-y-4">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transition-all"
              >
                <button
                  className="w-full flex justify-between items-center text-left px-5 py-4 font-medium text-gray-800 hover:bg-gray-50 transition"
                  onClick={() => toggleAccordion(index)}
                >
                  {item.question}
                  {openIndex === index ? (
                    <FaMinus className="text-[#1c7925]" />
                  ) : (
                    <FaPlus className="text-[#1c7925]" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="px-5 pb-5 text-gray-600 text-sm">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
