import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "Rajeev Malhotra",
    title: "Interior Designer, Mumbai",
    text: "Innovative Fabric has transformed our design projects with their premium and sustainable fabric choices. The quality and finish are unmatched.",
  },
  {
    name: "Anita Verma",
    title: "Furniture Manufacturer, Delhi",
    text: "Their upholstery fabrics are not only durable but also elevate the aesthetic appeal of our products. Excellent service and delivery timelines!",
  },
  {
    name: "Sameer Khan",
    title: "Cinema Hall Owner, Lucknow",
    text: "The acoustic and fire-retardant fabrics are top-notch. We've received so many compliments on the new look and comfort of our theaters.",
  },
  {
    name: "Sneha Rathi",
    title: "Founder, LuxeLounges",
    text: "We source all our modular furniture fabrics from Innovative Fabric. Their innovative textures and palettes keep us ahead in the market.",
  },
  {
    name: "Vikas Sharma",
    title: "Architect, Bengaluru",
    text: "From concept to reality, their team helps in selecting the right fabrics. Their glazed cotton finishes added luxury to our hotel interiors.",
  },
];

export default function TestimonialSlider() {
  return (
    <section className="relative z-10 bg-gradient-to-b from-[#f6f6f7] via-[#f2f8ff] to-[#e3ecfa] py-20 px-5 md:px-12 font-[Poppins] overflow-hidden">
      {/* Glowing Background Bubbles */}
      <div className="absolute top-[-50px] left-[-80px] w-80 h-80 bg-blue-200 opacity-20 blur-3xl rounded-full" />
      <div className="absolute bottom-[-80px] right-[-60px] w-96 h-96 bg-blue-100 opacity-20 blur-2xl rounded-full" />

      {/* Heading */}
      <motion.div
        className="text-center mb-16 relative z-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold font-[italiana] text-[#102c57]">
          What Our Clients Say About{" "}
          <span className="inline-block bg-blue-100 text-[#1c7925] px-4 py-1 rounded-xl shadow-md">
            Innovative Fabric
          </span>
        </h2>
        <p className="mt-4 text-gray-600 italic max-w-2xl mx-auto text-base md:text-lg">
          "Redefining comfort, style, and sustainability — one thread at a time."
        </p>
      </motion.div>

      {/* Testimonial Slider */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-7xl mx-auto relative z-20"
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            <motion.div
              className={`group transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl rounded-3xl p-6 border bg-white/80 backdrop-blur-md ${
                idx % 2 === 0
                  ? "border-blue-200"
                  : "border-blue-300 bg-[#f4faff]"
              }`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <FaQuoteLeft className="text-3xl text-[#1955a5] mb-4 opacity-80" />
              <p className="italic text-gray-700 mb-6 leading-relaxed">
                "{item.text}"
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-[#102c57] text-lg">{item.name}</p>
                <p className="text-sm text-gray-500">{item.title}</p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
