import React from "react";
import { useState, useEffect } from "react";
// import Banner1 from "../../assets/Banner/banner1.jpg";
// import Banner2 from "../../assets/Banner/banner2.jpg";
// import Banner3 from "../../assets/Banner/banner3.jpg";
// import Banner4 from "../../assets/Banner/banner4.jpg";
import { Products } from '../../Data/productsData';
import { useNavigate } from "react-router-dom";

// const desktopSlides = [
//   { image: Banner1 },
//   { image: Banner2 },
//   { image: Banner3 },
//   { image: Banner4 },
// ];

// const mobileSlides = [
//   { image: Banner1 },
//   { image: Banner2 },
//   { image: Banner3 },
//   { image: Banner4 },
// ];

const TestMeasurePage = () => {
  // const [current, setCurrent] = useState(0);
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth < 768);
  //   };

  //   handleResize();
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev === activeSlides.length - 1 ? 0 : prev + 1));
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, [isMobile]);

  // const activeSlides = isMobile ? mobileSlides : desktopSlides;

 const navigate = useNavigate()
  const handleclick = ()=>{
    navigate('/enquery-form');
  }
  return (
    <div>
      {/* Banner Slideshow */}
      

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

export default TestMeasurePage;
