import React from "react";
import { Link } from "react-router-dom";
import productCategories from "../../Data/productMain";
import { motion } from "framer-motion";
import Banner from "../../assets/Banner/bannerr14.png";
import Banner1 from "../../assets/Banner/banner16.png";
import Vision from "../../component/Vision";

const ProductMain = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Top Banner Image */}
      <div className="w-full relative">
        {/* Mobile Banner */}
        <img
          src={Banner}
          alt="Mobile Banner"
          className="block md:hidden w-full h-[200px] object-fill"
        />
        {/* Desktop Banner */}
        <img
          src={Banner}
          alt="Desktop Banner"
          className="hidden md:block w-full h-[500px] object-fill"
        />
      </div>

      {/* Introductory Paragraph */}
      <div className="max-w-7xl mx-auto py-4 px-4 lg:px-8 pb-10">
        <motion.div
          className="mt-16 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <h2 className="font-bold mb-4 text-3xl">
            <span className="font-bold text-amber-500 text-3xl">Our</span> Product
          </h2>
          <p className="mb-4">
            We offer a comprehensive range of products and services under one
            roof—including Testing Instruments, FCT Fixtures, SMT Consumables,
            ESD Products, SPM Machines, and Automation Solutions—designed to
            meet the evolving needs of modern manufacturing...
          </p>
          <p className="mb-4">
            The systems can be used to test PC/Server/Telecom power supplies,
            adapters, chargers, backlight inverters, LED power drivers, UPS’s,
            PV Inverters, EV chargers, and battery packs...
          </p>
          <p>
            Ethotron is a premier supplier of EMC generators, proudly serving
            the automotive industry and standing among the leaders in testing
            solutions for IEC standards, telecommunications, medical devices,
            and electronic components.
          </p>
        </motion.div>
      </div>

      {/* Product Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 p-5 flex flex-col"
            >
              <div className="space-y-4 mb-4">
                <img
                  src={category.image1}
                  alt={category.title}
                  className="w-full h-40 object-contain rounded-md"
                />
                <img
                  src={category.image2}
                  alt={category.title}
                  className="w-full h-40 object-contain rounded-md"
                />
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {category.title}
              </h3>

              {category.items.length > 0 && (
                <ul className="text-sm text-gray-600 list-disc list-inside mb-4">
                  {category.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}

              <div className="mt-auto">
                <Link
                  to={category.link}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-md transition-all duration-300"
                >
                  More Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner with Button */}
        <div className="w-full relative mt-5">
          {/* Mobile Banner */}
          <img
            src={Banner1}
            alt="Mobile Banner"
            className="block md:hidden w-full h-[200px] object-fill"
          />
          {/* Desktop Banner */}
          <img
            src={Banner1}
            alt="Desktop Banner"
            className="hidden md:block w-full h-[500px] object-fill"
          />
          {/* Centered Button Below Image */}
          <div className="flex justify-center mt-2">
            <a href="https://www.elpress.net/en-us/products/">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 text-lg">
                View More
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Vision Component */}
      <div>
        <Vision />
      </div>
    </div>
  );
};

export default ProductMain;
