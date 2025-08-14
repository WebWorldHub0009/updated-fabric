import React from "react";
import fabricImg from "../assets/catalouge/acustic.jpg";
import heroBg from "../assets/home/hero1.avif"; // Add a high-quality bg image

const AcousticFabric = () => {
  return (
    <div className="bg-[#f7f9fc] text-gray-800">
      {/* HERO SECTION */}
      <section
        className="relative min-h-[75vh] bg-cover bg-center flex items-center justify-center text-[#7ccf89] px-6"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 10, 30, 0.7), rgba(10, 10, 30, 0.8)), url(${heroBg})`,
        }}
      >
        <div className="text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Premium Acoustic 
            <span className="text-[#3c3b6e]">Fabric Solutions</span> 
          </h1>
          <p className="text-xl md:text-2xl font-medium tracking-wide text-gray-200">
            Silence meets sophistication. Designed to perform, made to impress.
          </p>
        </div>
      </section>

      {/* HEADING + QUOTE */}
      <section className="py-8 px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
           Acoustic Fabric?
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 italic">
          “Acoustic fabrics don’t just absorb sound — they shape ambiance, aesthetics, and experience.”
        </p>
      </section>

    {/* IMAGE + DESCRIPTION - ENHANCED */}
<section className="py-10 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center bg-gradient-to-br from-[#f9fafc] via-[#f0f4f8] to-[#e4eaf2] rounded-3xl shadow-2xl">
  {/* Left Image */}
  <div data-aos="fade-right">
    <img
      src={fabricImg}
      alt="Premium Acoustic Fabric"
      className="rounded-3xl shadow-xl w-full object-cover border-4 border-[#3c3b6e]/10"
    />
  </div>

  {/* Right Content */}
  <div data-aos="fade-left" className="text-[#2e2e2e]">
    <h3 className="text-4xl font-extrabold mb-6 text-[#3c3b6e] leading-snug">
      What is Acoustic Fabric?
    </h3>
    <p className="text-lg leading-relaxed text-gray-800 mb-6">
      In today's world, controlling sound is essential for creating comfortable and productive spaces. Innovatives Fabric offers a range of high-performance acoustic fabrics designed to enhance sound quality and minimize unwanted noise. Our fabrics are engineered to work in conjunction with sound-absorbing materials, maximizing acoustic performance while offering a wide variety of aesthetic options.
    </p>
    <p className="text-lg leading-relaxed text-gray-800">
      Acoustic fabrics are designed with specific weave patterns and fiber compositions that allow sound waves to pass through them with minimal reflection. This enables the underlying acoustic material—such as fiberglass, mineral wool, or foam—to absorb the sound effectively. The key feature is <span className="font-semibold text-[#3c3b6e]">air permeability</span>, which ensures sound can pass through the fabric barrier for superior acoustic performance.
    </p>
  </div>
</section>


      {/* WHY CHOOSE US */}
      <section className="relative bg-[#eef2ff] py-10 px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#3c3b6e] mb-4">
            Why Choose Us for Acoustic Fabrics?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From design consultation to high-performance materials — we deliver quality you can hear and see.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Industry Grade Quality",
              desc: "Our fabrics are tested for optimal acoustic performance, durability & safety.",
            },
            {
              title: "Custom Aesthetic Matching",
              desc: "We offer various textures, weaves, and colors to fit your brand and decor.",
            },
            {
              title: "Expert Guidance",
              desc: "Need help? Our acoustic professionals help you pick and install the right material.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-[#3c3b6e] mb-3">{item.title}</h4>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>

       
      </section>

      {/* DETAILS SECTION */}
     <section className="bg-gradient-to-br from-[#f0f4ff] to-[#eaf3ff] py-20 px-6">
  <div className="max-w-6xl mx-auto space-y-16">
    
    {/* Heading Row */}
    <div className="text-center">
      <h2 className="text-4xl font-extrabold text-[#3c3b6e] mb-4">Why Choose Our Acoustic Fabric?</h2>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto">
        Designed for performance and elegance, our fabrics balance superior sound control with luxurious aesthetics.
      </p>
    </div>

    {/* Features + Applications Grid */}
    <div className="grid md:grid-cols-2 gap-10">
      
      {/* Key Features */}
      <div>
        <h4 className="text-2xl font-bold mb-4 text-[#3c3b6e] flex items-center gap-2">
          🧵 Key Features
        </h4>
        <ul className="list-disc pl-6 text-gray-700 text-lg space-y-3">
          <li>High sound absorption rating (NRC rated)</li>
          <li>Flame-retardant and moisture-resistant</li>
          <li>Durable, breathable, and easy to clean</li>
          <li>Visually premium — complements luxury spaces</li>
        </ul>
      </div>

      {/* Applications */}
      <div>
        <h4 className="text-2xl font-bold mb-4 text-[#3c3b6e] flex items-center gap-2">
          📍 Applications
        </h4>
        <ul className="list-disc pl-6 text-gray-700 text-lg space-y-3">
          <li>Recording Studios, Theaters, Offices, Hotels</li>
          <li>Home Cinemas, Co-working Hubs, Auditoriums</li>
          <li>Educational Institutions & Worship Spaces</li>
        </ul>
      </div>
    </div>

    {/* Expert Tip */}
    <div className="text-center bg-white shadow-xl rounded-xl p-8 max-w-3xl mx-auto border border-[#d6e0f5]">
      <h4 className="text-2xl font-bold mb-4 text-[#3c3b6e]">💬 Expert Tip</h4>
      <p className="text-lg text-gray-700 leading-relaxed">
        For optimal results, leave a small air gap behind the fabric or use it over acoustic panels to
        improve low-frequency absorption and boost overall performance.
      </p>
    </div>
  </div>
</section>

    </div>
  );
};

export default AcousticFabric;
