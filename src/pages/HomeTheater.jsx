import React from "react";
import heroImg from "../assets/catalouge/thero.avif";
import mainImg from "../assets/catalouge/hmain.jpg";
import { motion } from "framer-motion";

export default function HomeTheaterFabric() {
  return (
    <div className="bg-white text-[#1C1C1C]">
      {/* Hero Section */}
      <section
        className="relative py-34 px-6 text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/30 z-0"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-white mb-4"
          >
            Home Theater Acoustic Fabric
          </motion.h1>
          <p className="text-xl text-gray-200">
            Designed for acoustic clarity, luxurious comfort, and timeless elegance — all in one.
          </p>
        </div>
      </section>

      {/* Image + Description */}
      <section className="py-10 px-6 bg-[#fefefe]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}
          >
            <img src={mainImg} alt="Home Theater Fabric" className="rounded-2xl shadow-xl" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold text-[#3CB371]">Engineered for the Ultimate Viewing Experience</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our home theater fabrics are crafted to create an immersive audio-visual atmosphere. They absorb unwanted echoes and reduce sound reflection, ensuring crisp, undistorted acoustics. With rich textures and a premium finish, these fabrics not only enhance performance but elevate the style of your space.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Designed for wall paneling, acoustic treatments, and drapery, these fabrics are fire-retardant, easy to maintain, and available in a range of deep cinematic hues. Whether you're building a personal theater or a commercial screening room — these fabrics deliver both function and form.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features & Use Cases */}
      <section className="bg-gradient-to-br from-[#f9f9f9] to-[#f2f2f2] py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h4 className="text-2xl font-bold mb-4 text-[#3CB371]">🎬 Key Features</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
              <li>Excellent sound absorption & echo reduction</li>
              <li>Velvet-matte finish for luxurious ambiance</li>
              <li>Fire-retardant & acoustically transparent</li>
              <li>Anti-glare surface for screen-side installations</li>
              <li>Available in deep blacks, navy, maroon & more</li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-4 text-[#3CB371]">🏠 Ideal Applications</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
              <li>Wall & ceiling acoustic panels</li>
              <li>Speaker cover panels</li>
              <li>Home cinema curtains & drapery</li>
              <li>Stretch fabric wall systems</li>
              <li>Backdrop & projector screen borders</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Expert Tip */}
      <section className="bg-white py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h4 className="text-2xl font-semibold text-[#3CB371] mb-4">🎧 Expert Tip</h4>
          <p className="text-lg text-gray-700 leading-relaxed">
            For optimal acoustic performance, combine fabric panels with high-density foam or rockwool backing.
            Also, use darker shades to eliminate light reflection and maintain a true cinematic effect in low-light settings.
          </p>
        </div>
      </section>

      {/* Informational Full-width Section */}
      <section className="bg-[#eef3f6] py-20 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h3 className="text-3xl font-bold text-[#3CB371]">Why Our Fabric Stands Out</h3>
          <p className="text-lg text-gray-700 leading-loose">
            We understand the demands of modern home theaters — from controlling acoustics to setting the right mood.
            Our fabrics are engineered with a balance of elegance and engineering precision. They’re fire-safe, durable,
            easy to install, and built to last. Whether it’s a cozy room or a grand screening hall, these fabrics help
            create an atmosphere worthy of the big screen. Transform any room into an immersive experience without compromise.
          </p>
        </div>
      </section>
    </div>
  );
}
