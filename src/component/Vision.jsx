import React from "react";
import { motion } from "framer-motion";
import Mission from '../assets/New folder/mission.jpg'
import VIsion from '../assets/New folder/vision.jpg'
import Why from '../assets/New folder/whyus.jpg'

const Vision = () => {
  const Details = [
    {
      id: 1,
      title: "Our Mission",
      description:
        "At Ethotron Pvt. Ltd., our mission is to be a trusted partner in providing innovative, reliable, and high-performance solutions that empower our customers. We aim to be at the forefront of technology by delivering cutting-edge automation, testing, and manufacturing solutions, ensuring operational excellence and fostering long-term partnerships based on trust and value.",
      image: Mission
    },
    {
      id: 2,
      title: "Our Vision",
      description:
        "To be the global leader in the field of industrial automation and testing solutions, recognized for our commitment to precision, innovation, and customer satisfaction. We envision transforming manufacturing processes through advanced technologies and customized solutions, driving the future of automation and ensuring sustainable growth for our clients and stakeholders.",
      image: VIsion
    },
    {
      id: 3,
      title: "Why Us",
      description:
        "At Ethotron Pvt. Ltd., we stand out for our commitment to quality, affordability, and reliability. We offer a comprehensive range of high-performance products, each carefully designed to meet the most demanding industry standards. Our Objective: We are committed to consistently fulfilling our customers’ unique requirements with 100% quality assurance, offering the best value at the most competitive prices.",
      image: Why
    },
  ];

  return (
    <div className="py-20  text-gray-800 relative">
      <div className="flex px-4 lg:px-8   gap-6 justify-between max-w-7xl mx-auto">
        {Details.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white hover:bg-blue-100  rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer w-2xl sm:w-[300px] text-start"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.3,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full mx-auto mb-4 rounded-2xl object-contain border-amber-500 border-2"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 ">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Vision;
