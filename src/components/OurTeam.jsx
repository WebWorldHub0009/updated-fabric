import React from "react";
import { FaUserTie, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const teamMembers = [
  { name: "Rohit Verma", position: "Design Lead", linkedin: "#" },
  { name: "Mohammed Talha", position: "Transport Manager", linkedin: "#" },
  { name: "Nikita Sharma", position: "Finance Manager", linkedin: "#" },
  { name: "Imran Qureshi", position: "Fabric Quality Supervisor", linkedin: "#" },
  { name: "Aarti Mehta", position: "Packaging & Inventory Head", linkedin: "#" },
  { name: "Zaid Khan", position: "Product Delivery Lead", linkedin: "#" },
];

export default function TeamInnovative() {
  return (
    <section className="py-10 px-6 md:px-16 bg-gradient-to-b from-[#ffffff] via-[#f2f8ff] to-[#dbeaff] text-[#102c57] overflow-hidden relative">
      <div className="text-center max-w-5xl mx-auto">
        <h4 className="text-sm uppercase font-[italiana] tracking-widest font-semibold text-[#1955a5] mb-3">
          Crafted by People, Not Machines
        </h4>

        <h2 className="text-4xl md:text-6xl font-bold font-[italiana] text-[#102c57] mb-6">
          Meet the <span className="text-[#1955a5]">Innovative Fabric</span> Team
        </h2>

        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
          Every thread we produce is a result of passion, craftsmanship, and collaboration.
          These are the individuals behind our signature quality and innovation.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-6">
          <Link to="/contact">
            <button className="bg-[#1955a5] hover:bg-[#123e7d] text-white px-6 py-3 rounded-full transition font-medium shadow-lg">
              Let’s Connect
            </button>
          </Link>
          <Link to="/about">
            <button className="border border-[#1955a5] text-[#1955a5] px-6 py-3 rounded-full hover:bg-[#1955a5] hover:text-white transition font-medium shadow-lg">
              Learn More
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden relative z-10">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
        >
          {teamMembers.map((member, idx) => (
            <SwiperSlide key={idx}>
              <TeamCard member={member} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:flex flex-wrap justify-center gap-10 relative z-10">
        {teamMembers.map((member, idx) => (
          <TeamCard key={idx} member={member} />
        ))}
      </div>

      {/* Bottom Line */}
      <div className="text-center mt-12 text-sm italic text-gray-600 max-w-xl mx-auto">
        These are the people who weave the fabric of our excellence.
      </div>
    </section>
  );
}

function TeamCard({ member }) {
  return (
    <div className="flex flex-col items-center space-y-5 text-center hover:scale-105 transition-transform duration-300">
      <div className="w-24 h-24 rounded-full border-4 border-[#1955a5] shadow-md flex items-center justify-center bg-blue-50">
        <FaUserTie className="text-4xl text-[#1955a5]" />
      </div>

      <h4 className="text-xl font-semibold text-[#102c57]">{member.name}</h4>
      <p className="text-sm text-gray-600">{member.position}</p>

      <div className="text-2xl text-[#1955a5] hover:text-[#123e7d] transition">
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}
