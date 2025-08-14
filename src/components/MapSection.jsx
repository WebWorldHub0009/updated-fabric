import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";

const MapSection = () => {
  return (
    <section className="relative z-10 bg-[#f9f9f9] py-20 px-4">
      {/* Decorative overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/white-wall.png')] z-0" />

      <div className="relative z-10 text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0f1f1c] flex justify-center items-center gap-3">
          <FaMapMarkedAlt className="text-[#001f5c]" />
          Our Location
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto italic">
          “Crafted in the heart of Ghaziabad, delivering fabrics across the nation and beyond.”
        </p>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-[#001f5c]">
          <iframe
            title="Innovatives Fabric Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14011.73588700461!2d77.44382409073789!3d28.688145301037842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf179e9f39c1f%3A0x7cf1651965bd9aa9!2sInnovatives%2C%20Building%20No.%20983%2F49%2C%20Grower%20Saria%20Mill%20Compound%2C%20Pillar%20No.%20516%2C%20KN-427%2C%20Meerut%20Rd%2C%20opp.%20RRTS%2C%20Sewa%20Nagar%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201001!5e0!3m2!1sen!2sin!4v1722330577757!5m2!1sen!2sin"
            width="100%"
            height="500"
            allowFullScreen=""
            loading="lazy"
            className="w-full h-[300px] md:h-[400px] border-none"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
