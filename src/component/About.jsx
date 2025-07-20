import React from "react";
import Renewable from "../assets/New folder/download.jpg";
import Voltage from "../assets/New folder/Voltage.jpg";
import Motor from "../assets/New folder/Motor.jpg";
import UPS from "../assets/New folder/UPS.jpg";
import Data from "../assets/New folder/Center.jpg";
import Telecom from "../assets/New folder/Telecom.jpg";
import Defense from "../assets/New folder/Defense.webp";
import Welding from "../assets/New folder/Welding.jpg";
import Medical from "../assets/New folder/Medical.jpg";
import Electric from "../assets/New folder/Electric.jpg";
import { motion } from "framer-motion";
import Banner from "../assets/Banner/aboutus.png";
import Vision from "./Vision";

const industries = [
  { title: "Renewables", icon: Renewable },
  { title: "High Voltage", icon: Voltage },
  { title: "Motor Control", icon: Motor },
  { title: "Electric Vehicles", icon: Electric },
  { title: "Data Centers", icon: Data },
  { title: "Defense", icon: Defense },
  { title: "Welding & Heating", icon: Welding },
  { title: "Medical", icon: Medical },
  { title: "Telecom", icon: Telecom },
  { title: "UPS", icon: UPS },
];

const DetailsAbout = [
  {
    id: 1,
    title: "Our Vision",
    description:
      "To be the global leader in the field of industrial automation and testing solutions, recognized for our commitment to precision, innovation, and customer satisfaction...",
  },
  {
    id: 2,
    title: "Our Value Drive Our Vision.",
    description:
      "We build trust and excellence through every action, every solution. Integrity. Trust. Reliability. Perseverance. Responsibility...",
  },
  {
    id: 3,
    title: "Our Social Responsibility.",
    description:
      "Engineering with Purpose. Growing with Responsibility. At Ethotron, we believe that progress is meaningful only when it contributes to the well-being of people, industry, and the planet...",
  },
];

const About = () => {
  return (
    <>
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
          className="hidden md:block w-full h-[450px] object-fill"
        />
      </div>
      {/* About Main Section */}
      <section className="bg-white text-gray-800 px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10">
          <div className="w-full">
            <div className="relative bg-white text-black rounded-2xl shadow-2xl pl-8 pr-8 pt-4 pb-4">
              <motion.div
                className="mt-16 max-w-7xl mx-auto"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {/* <img
                  src={Banner}
                  alt="About Ethotron"
                  className="w-full lg:w-72 h-auto object-cover rounded-xl lg:absolute right-8 top-8 lg:top-0 lg:bottom-0 lg:my-auto"
                /> */}

                <h2 className="text-4xl font-bold mb-6 leading-tight">
                  Innovation. Reliability. Integration.
                </h2>

                <div className="text-sm md:text-base leading-relaxed space-y-4">
                  <p>
                    Founded by industry experts with over <strong>18 </strong>
                    Years of experience, <strong>Ethotron Pvt. Ltd.</strong> is
                    a trusted name in the field of Surface Mount Technology
                    (SMT), Testing & Measuring Instruments supplier, and
                    Industrial Automation Solutions provider.
                  </p>
                  <p>
                    We specialize in delivering comprehensive, end-to-end
                    solutions—from pre-sales consultation to post-sales service
                    and complete turnkey project execution.
                  </p>

                  <p>
                    At Ethotron, we go beyond just supplying testing equipment.
                    We build long-term partnerships <br /> by offering a broad
                    portfolio of cutting-edge solutions under one roof,
                    including:
                  </p>

                  <ul className="list-disc list-inside mt-3 ml-4">
                    <li>Testing/Measuring Instruments</li>
                    <li>All type PCB Testing Fixtures</li>
                    <li>Cable Lugs/Terminals/Connectors</li>
                    <li>Crimping, Cutting and Stripping Tools</li>
                    <li>All type of wires/Cables</li>
                    <li>SMT Consumables & Spare Parts</li>
                    <li>ESD Products & Equipment</li>
                    <li>Special Purpose Machines (SPMs)</li>
                    <li>Material Handling Systems & Conveyor Lines</li>
                    <li>Hydraulic and Pneumatic Presses</li>
                    <li>
                      Custom Automation for Manufacturing & Testing Processes
                    </li>
                  </ul>

                  <p>
                    Our in-house team excels in the design and development of
                    automation systems, precision jigs and fixtures, digital
                    displays, calibration stations, and more. We support
                    industries such as electronics, electricals, appliance
                    manufacturing, and industrial engineering with tailored
                    solutions that match unique operational needs.
                  </p>

                  <p>
                    Ethotron thrives in a high-mix, low-volume manufacturing
                    environment and embraces the challenges of global
                    competition. By blending domain expertise with smart use of
                    technology and e-commerce, we deliver flexible, scalable,
                    and value-driven solutions to customers across India and
                    beyond.
                  </p>

                  <p>
                    Our mission: to empower manufacturers with innovative
                    testing solutions, intelligent automation, and unwavering
                    support.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision / Value Cards */}
      {/* <div className="flex max-w-7xl flex-wrap justify-around gap-6  ">
        {DetailsAbout.map((item, index) => (
          <motion.div
            key={item.id}
            className="bg-white w-full sm:w-[300px] p-6 rounded-xl shadow hover:shadow-xl hover:bg-blue-50 transition-all duration-300"
            initial={{ opacity: 0, y: 100 }} // more from bottom
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: index * 0.3, // more dramatic delay
              ease: "easeOut",
            }}
          >
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-700">{item.description}</p>
          </motion.div>
        ))}
      </div> */}
      <div>
        <Vision />
      </div>

      {/* Industries Served */}
      <section className="px-6 py-12 bg-white">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-2">
          Powerful Solutions – Powering the Future
        </h2>
        <p className="text-center text-gray-600 mb-10">Industries we serve:</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {industries.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md shadow-orange-500 rounded-md flex flex-col items-center p-4 w-full h-38 hover:bg-blue-100 hover:shadow-xl transition duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 120 }} // float from farther down
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: index * 0.1, // slightly staggered
                ease: "easeOut",
              }}
            >
              <img
                src={item.icon}
                alt={item.title}
                className="h-12 mb-2 object-contain"
              />
              <p className="text-center font-medium text-gray-800">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
