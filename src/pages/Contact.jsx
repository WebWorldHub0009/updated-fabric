import React from "react";
import { HiOutlinePhone } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { FaHeadphones, FaTheaterMasks, FaCouch, FaChair, FaHome, FaCogs } from "react-icons/fa";
import MapSection from "../components/MapSection";

// Fabric categories array
const fabricCategories = [
  { title: "Acoustic Fabrics", icon: <FaHeadphones className="text-2xl text-[#1e3a8a]" /> },
  { title: "Cinema Fabrics", icon: <FaTheaterMasks className="text-2xl text-[#1e3a8a]" /> },
  { title: "Modular Furniture Fabric", icon: <FaCouch className="text-2xl text-[#1e3a8a]" /> },
  { title: "Glaze Cotton Stage Fabrics", icon: <FaChair className="text-2xl text-[#1e3a8a]" /> },
  { title: "Home Theatre", icon: <FaHome className="text-2xl text-[#1e3a8a]" /> },
  { title: "Cinema Chair Upholstery", icon: <FaCogs className="text-2xl text-[#1e3a8a]" /> },
];

const ContactPage = () => {
  return (
    <>
      <section className="w-full bg-gradient-to-b from-[#fdfaf7] via-[#f5efe9] to-[#fef3e5] font-sans py-1">
        {/* Hero Section */}
        <div className="w-full bg-[#1c7925] text-white text-center px-6 py-20 relative overflow-hidden">
          <h1 className="text-5xl md:text-6xl font-[Great_Vibes] mb-4">
            Let’s Talk Textiles
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            Reach out to us for collaborations, fabric solutions, or simply to connect — we’re always listening.
          </p>
          <div className="absolute w-64 h-64 bg-white opacity-10 rounded-full bottom-[-80px] right-[-80px] z-0"></div>
        </div>

        {/* Contact Box */}
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl mt-[-60px] z-10 relative flex flex-col md:flex-row overflow-hidden px-6 md:px-12 py-12 md:py-16">
          
          {/* Contact Info Left */}
          <div className="bg-[#001f5c] text-white px-8 py-12 relative md:w-1/2 w-full rounded-2xl md:rounded-r-none">
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <p className="text-white/90 text-base mb-6">
              Whether it’s bulk fabric orders, product queries or collaboration opportunities — we’re happy to hear from you.
            </p>

            <div className="flex items-start gap-4 text-base mb-4">
              <HiOutlinePhone className="mt-1 text-white text-2xl" />
              <div>
                (+91) 9717958484 <br />
                (+91) 9643107914 <br />
                (+91) 8755092999
              </div>
            </div>

            <div className="flex items-start gap-4 text-base mb-4">
              <AiOutlineMail className="mt-1 text-white text-2xl" />
              <div>
                ashish@innovativesfabric.com <br />
                abhishek@innovativesfabric.com
              </div>
            </div>

            <div className="flex items-start gap-4 text-base mb-4">
              <BiMap className="mt-1 text-white text-2xl" />
              <div>
                KN-427, Building No. 983/49, Grower Saria Mill Compound, <br />
                Sewa Nagar, Meerut Road, Opp. RRTS Pillar No. 516, <br />
                Ghaziabad - 201001 U.P. (Delhi NCR)
              </div>
            </div>

            <div className="absolute w-80 h-80 bg-white opacity-10 rounded-full bottom-[-100px] right-[-100px] z-0"></div>
          </div>

          {/* Contact Form Right */}
          <div className="px-8 py-12 md:w-1/2 w-full">
            <form
              className="w-full"
              action="https://formsubmit.co/ashish@innovativesfabric.com"
              method="POST"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://innovativesfabric.com" />

              {/* Name & Email */}
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="flex-1">
                  <label className="block text-lg text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full border-b-2 border-gray-300 focus:border-[#4B3B2A] outline-none py-3 text-base"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-lg text-gray-700 mb-2">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="w-full border-b-2 border-gray-300 focus:border-[#4B3B2A] outline-none py-3 text-base"
                  />
                </div>
              </div>

              {/* Mobile Number */}
              <div className="mb-8">
                <label className="block text-lg text-gray-700 mb-2">Mobile Number</label>
                <input
                  type="tel"
                  name="mobile"
                  required
                  placeholder="+91 9876543210"
                  className="w-full border-b-2 border-gray-300 focus:border-[#4B3B2A] outline-none py-3 text-base"
                />
              </div>

              {/* Category Dropdown */}
              <div className="mb-8">
                <label className="block text-lg text-gray-700 mb-2">Product Category</label>
                <select
                  name="category"
                  required
                  className="w-full border-b-2 border-gray-300 focus:border-[#4B3B2A] outline-none py-3 text-base bg-transparent"
                >
                  <option value="">Select a category</option>
                  {fabricCategories.map((cat, index) => (
                    <option key={index} value={cat.title}>
                      {cat.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Subject */}
              <div className="mb-8">
                <label className="block text-lg text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="How can we help you?"
                  className="w-full border-b-2 border-gray-300 focus:border-[#4B3B2A] outline-none py-3 text-base"
                />
              </div>

              {/* Message */}
              <div className="mb-8">
                <label className="block text-lg text-gray-700 mb-2">Message</label>
                <textarea
                  rows="5"
                  name="message"
                  required
                  placeholder="Write your message here"
                  className="w-full border-b-2 border-gray-300 focus:border-[#4B3B2A] outline-none py-3 text-base resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="bg-[#1c7925] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#3b2f20] transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <MapSection />
    </>
  );
};

export default ContactPage;
