import React from "react";
import kitchenImg from "../assets/catalouge/kmain.jpg";
import Img from "../assets/catalouge/khero.jpg";
import { motion } from "framer-motion";

export default function KitchenFabric() {
  return (
    <div className="bg-white text-[#1C1C1C]">
      {/* Hero Section */}
      <section
  className="relative  py-24 px-6 text-center bg-cover bg-center"
  style={{ backgroundImage: `url(${Img})` }}
>
  <div className="absolute inset-0 bg-white/20 z-0"></div>

  <div className="max-w-5xl mx-auto relative z-10">
    <motion.h1
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-5xl font-bold text-[#3c3b6e] mb-4"
    >
      Premium Kitchen Fabric Solutions
    </motion.h1>
    <p className="text-xl text-gray-700">
      Style meets functionality — Stain-resistant, easy to clean, and flame-retardant fabric crafted for modern kitchens.
    </p>
  </div>
</section>


      {/* Image + Description */}
      <section className="py-20 px-6 bg-[#fefefe]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}
          >
            <img src={kitchenImg} alt="Kitchen Fabric" className="rounded-2xl shadow-xl" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold text-[#3c3b6e]">Designed for Function & Elegance</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our kitchen fabrics are thoughtfully engineered to withstand the daily demands of modern culinary spaces. Whether used for curtains, table covers, chair upholstery, or decorative elements, these fabrics are stain-resistant, water-repellent, and exceptionally easy to maintain.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With a variety of textures, patterns, and colors available, our fabrics allow you to create a kitchen that’s both beautiful and practical. The flame-retardant properties add a layer of safety, while the premium finish enhances the visual warmth of the space.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features & Use Cases */}
      <section className="bg-gradient-to-br from-[#f9f9f9] to-[#f2f2f2] py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h4 className="text-2xl font-bold mb-4 text-[#3c3b6e]">🍽️ Key Features</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
              <li>Stain-resistant & easy to clean</li>
              <li>Water-repellent surface coating</li>
              <li>Flame-retardant and odor-resistant</li>
              <li>Elegant finish with rich colors & textures</li>
              <li>UV-protected for long-lasting vibrancy</li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-4 text-[#3c3b6e]">🏡 Ideal Applications</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
              <li>Kitchen curtains & blinds</li>
              <li>Dining chair upholstery</li>
              <li>Kitchen table runners & covers</li>
              <li>Cabinet fabric paneling</li>
              <li>Decorative backsplashes & partitions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Expert Tip */}
      <section className="bg-[#fff] py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h4 className="text-2xl font-semibold text-[#3c3b6e] mb-4">🧠 Expert Tip</h4>
          <p className="text-lg text-gray-700 leading-relaxed">
            For enhanced kitchen hygiene and design continuity, consider using the same fabric for curtains and seat covers. Choose lighter shades for smaller spaces and darker textured patterns for high-traffic zones.
          </p>
        </div>
      </section>

      {/* Informational Full-width Section */}
      <section className="bg-[#f4f7fa] py-20 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h3 className="text-3xl font-bold text-[#3c3b6e]">Why Choose Our Kitchen Fabrics?</h3>
          <p className="text-lg text-gray-700 leading-loose">
            Our fabrics are rigorously tested to handle the heat, humidity, and occasional splashes that kitchens are known for. Engineered for longevity, they don’t fade or deteriorate easily and maintain their elegance even after repeated washes. With modern aesthetics, eco-friendly composition, and practical features — they strike the perfect balance between beauty and performance. Whether you're designing a cozy kitchen café or a high-end modular kitchen, our fabrics will elevate the ambiance while standing up to the real-world challenges of a cooking space.
          </p>
        </div>
      </section>
    </div>
  );
}
