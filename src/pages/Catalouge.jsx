import React, { useState, useEffect } from "react";
import HeroProduct from "../components/ProductHero";
import pdf1 from "../assets/catalouge/1.pdf";
import pdf2 from "../assets/catalouge/2.pdf";
import pdf3 from "../assets/catalouge/3.pdf";
import pdf4 from "../assets/catalouge/4.pdf";
import pdf5 from "../assets/catalouge/5.pdf";
import pdf6 from "../assets/catalouge/6.pdf";
import pdf7 from "../assets/catalouge/7.pdf";
import pdf8 from "../assets/catalouge/8.pdf";
import pdf9 from "../assets/catalouge/9.pdf";
import pdf10 from "../assets/catalouge/10.pdf";
import pdf11 from "../assets/catalouge/11.pdf";
import pdf12 from "../assets/catalouge/12.pdf";
import cover from "../assets/catalouge/mainlogo.PNG";

const catalogues = [
  { file: pdf1, thumbnail: cover },
  {  file: pdf2, thumbnail: cover },
  {  file: pdf3, thumbnail: cover },
  {  file: pdf4, thumbnail: cover },
  {  file: pdf5, thumbnail: cover },
  { file: pdf6, thumbnail: cover },
  {  file: pdf7, thumbnail: cover },
  {  file: pdf8, thumbnail: cover },
  {  file: pdf9, thumbnail: cover },
  { file: pdf10, thumbnail: cover },
  {  file: pdf11, thumbnail: cover },
  {  file: pdf12, thumbnail: cover },
];

const Catalouge = () => {
  const [selectedPDF, setSelectedPDF] = useState(null);
  const [preloadedPDFs, setPreloadedPDFs] = useState({}); // store blob URLs

  useEffect(() => {
    // Preload all PDFs
    catalogues.forEach((cat) => {
      fetch(cat.file)
        .then((res) => res.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          setPreloadedPDFs((prev) => ({ ...prev, [cat.title]: url }));
        })
        .catch((err) => console.error("Error preloading PDF:", err));
    });

    // Cleanup: revoke object URLs on unmount
    return () => {
      Object.values(preloadedPDFs).forEach((url) => URL.revokeObjectURL(url));
    };
  }, []);

  const openPDF = (title) => {
    if (preloadedPDFs[title]) setSelectedPDF(preloadedPDFs[title]);
  };

  const closeModal = () => setSelectedPDF(null);

  return (
    <>
      <HeroProduct />

      <section id="craftsmanship" className="min-h-screen bg-[#F9F9F9] py-16 px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Explore Our Exclusive Catalogues</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dive into a world of design, elegance, and inspiration — curated with precision and luxury in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {catalogues.map((cat, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-4 hover:shadow-2xl transition duration-300"
            >
              <img
                src={cat.thumbnail}
                alt={cat.title}
                className="w-full h-52 object-cover rounded-lg mb-4"
              />

              <div className="flex justify-between mt-4">
                <button
                  onClick={() => openPDF(cat.title)}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                >
                  View
                </button>
                <a
                  href={cat.file}
                  download
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
                >
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedPDF && (
          <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center">
            <div className="bg-white rounded-xl w-11/12 md:w-4/5 h-[90vh] relative shadow-2xl overflow-hidden">
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
              >
                Close
              </button>
              <iframe
                src={selectedPDF}
                title="PDF Viewer"
                className="w-full h-full rounded-xl"
              ></iframe>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Catalouge;
