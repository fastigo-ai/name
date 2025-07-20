import React, { useRef, useEffect } from "react";
import { Products } from "../../Data/ProductData";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductPage = () => {
  const navigate = useNavigate();
  const scrollRef = useRef();

  const handleClick = () => {
    navigate("/product");
  };

  const scroll = (direction) => {
    const scrollAmount = 300; // pixels
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      scroll("right");
    }, 3000); // scroll every 3 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <section className="py-20  text-gray-800 relative">
      <div className="max-w-7xl  px-4 lg:px-8 mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0">
            <span className="text-amber-500 font-bold text-4xl">Featured</span>{" "}
            Products
          </h2>
          <div>
            <button
              className="text-black text-lg bg-amber-300 px-6 py-4 rounded-full font-bold"
              onClick={handleClick}
            >
              View All Services
            </button>
          </div>
        </div>

        {/* Scroll Buttons */}
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute -left-6 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-blue-100"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute -right-6 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-blue-100"
          >
            <ChevronRight />
          </button>

          {/* Product Scroll Container */}
          <div ref={scrollRef} className="overflow-x-auto overflow-y-hidden scrollbar-hide">
            <div className="flex space-x-4 w-max gap-4">
              {Products.map((product, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl border border-amber-500 hover:shadow-xl transition duration-300 cursor-pointer min-w-[280px] max-w-[300px] flex-shrink-0"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  <img
                    src={product.icon}
                    alt={product.title}
                    className="w-full h-48 object-contain mb-4"
                  />
                  <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                  <p className="text-sm text-gray-600">{product.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
