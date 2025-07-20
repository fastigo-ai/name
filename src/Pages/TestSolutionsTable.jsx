import React from "react";
import { useState, useEffect } from "react";
import Banner1 from "../assets/Banner/banner1.jpg";
import Banner2 from "../assets/Banner/bannerr 11.png";
import Banner3 from "../assets/Banner/banner3.jpg";
import Banner4 from "../assets/Banner/Bannerr 12.png";
import { Products } from '../Data/productsData';
import { useNavigate } from "react-router-dom";

const desktopSlides = [
  { image: Banner1 },
  { image: Banner2 },
  { image: Banner3 },
  { image: Banner4 },
];

const mobileSlides = [
  { image: Banner1 },
  { image: Banner2 },
  { image: Banner3 },
  { image: Banner4 },
];

const TestSolutionsTable = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === activeSlides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isMobile]);

  const activeSlides = isMobile ? mobileSlides : desktopSlides;

 const navigate = useNavigate()
  const handleclick = ()=>{
    navigate('/enquery-form');
  }
  return (
    <div>
      {/* Banner Slideshow */}
      <div className="relative h-[40vh] md:h-[35vh] lg:h-[40vh] overflow-hidden">
        {activeSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <section
              className="h-[40vh] bg-cover bg-top md:bg-center flex items-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            ></section>
          </div>
        ))}

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {activeSlides.map((_, idx) => (
            <span
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 w-2 rounded-full cursor-pointer ${
                idx === current ? "bg-white" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
      </div>

      <section className="py-20 px-6 lg:px-20 text-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex  mb-10 flex-wrap gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Featured of Product <br />
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Products.map((product) => (
              <div
                key={product.id}
                className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition-all"
              >
                <img
                  src={product.icon}
                  alt={product.title}
                  className="w-full h-48 object-contain mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                <p className="text-sm text-gray-600 whitespace-pre-line">
                  {product.description}
                </p>
                <button
                  className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm hover:bg-blue-700 cursor-pointer mt-2"
                  onClick={handleclick}
                >
                  Enquiry
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestSolutionsTable;
