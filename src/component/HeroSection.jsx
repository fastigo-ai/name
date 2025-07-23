import React, { useState, useEffect } from "react";
import Banner1 from "../assets/Banner/6.png";
import Banner2 from "../assets/Banner/banner14.png";
import Banner3 from "../assets/Banner/banner3.jpg";
import Banner4 from "../assets/Banner/banner4.png";
import Banner5 from "../assets/adverticment/2.png";
import Banner6 from "../assets/adverticment/Ad1Banner.png";
import Banner7 from "../assets/adverticment/1.png";
import Banner8 from "../assets/adverticment/4.png";

const desktopSlides = [Banner1, Banner2, Banner3, Banner4];
const mobileSlides = [Banner5, Banner6, Banner7, Banner8];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [currentProduct, setCurrentProduct] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const activeSlides = isMobile ? mobileSlides : desktopSlides;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % activeSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeSlides]);

  useEffect(() => {
    const productInterval = setInterval(() => {
      setCurrentProduct((prev) => (prev + 1) % mobileSlides.length);
    }, 3000);
    return () => clearInterval(productInterval);
  }, []);

  return (
    <>
      {/* Top Banner Slideshow */}
      <div className="relative h-[40vh] sm:h-[35vh] md:h-[40vh] lg:h-[60vh] overflow-hidden">
        {activeSlides.map((image, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <section
              className="h-full w-full bg-center bg-no-repeat bg-cover flex items-center"
              style={{
                backgroundImage: `url(${image})`,
              }}
            ></section>
          </div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {activeSlides.map((_, idx) => (
            <span
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-3 w-3 sm:h-2 sm:w-2 rounded-full cursor-pointer transition duration-300 ${
                idx === current ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Product Image Slider + Company Info */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Column - Product Slider */}
        <div className="relative hidden md:block h-[300px] md:h-[400px] lg:h-[450px] w-full overflow-hidden rounded-lg">
          {[Banner5, Banner6, Banner7, Banner8].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Product ${idx + 1}`}
              className={`absolute h-full w-full border border-amber-500 shadow-md rounded-2xl object-cover transition-opacity duration-1000 ease-in-out ${
                idx === currentProduct ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            />
          ))}
        </div>

        {/* Right Column - Description */}
        <div className="space-y-4 text-gray-700">
          <h2 className="text-3xl font-bold">
            <span className="text-amber-500">Welcome to</span> Ethotron
          </h2>
          <p>
            With over 18 years of industry expertise, Ethotron Pvt. Ltd. is a
            leading provider of high-tech solutions for the electronics and
            manufacturing sectors. From SMT and testing instruments to
            custom-built automation systems and turnkey projects, we deliver
            innovation with reliability.
          </p>
          <p>
            We offer a comprehensive range of products and services under one
            roof—including Testing Instruments, FCT Fixtures, SMT Consumables,
            ESD Products, SPM Machines, and Automation Solutions—designed to
            meet the evolving needs of modern manufacturing.
          </p>
          <p>
            Ethotron has a wide variety of instrumentation including AC Power
            Sources, DC Power Supplies, DC Electronic Loads, AC Electronic
            Loads, Digital Power Meters, LCR Meters, Hipot Testers and Automatic
            Test Systems that are ideal for power input/output terminal tests
            and dynamic simulation.
          </p>
        </div>
      </div>

      {/* Additional Description */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 pb-10 space-y-4 text-gray-700">
        <p>
          The systems can be used to test PC/Servo/Telecom power supplies,
          adapters, chargers, backlight inverters, LED power drivers, UPS's, PV
          Inverters, EV chargers, and battery packs. With technical support
          available, Ethotron can provide automated test systems and the
          fabrication of test fixtures simultaneously at multiple locations
          across India.
        </p>
        <p>
          Ethotron is a premier supplier of EMC generators, proudly serving the
          automotive industry and standing among the leaders in testing
          solutions for IEC standards, telecommunications, medical devices, and
          electronic components.
        </p>
        <p>
          Our solutions are engineered to meet and exceed the most demanding
          industry specifications. We offer the capability to tailor test
          routines precisely to individual test standards to meet unique
          customer requirements.
        </p>
        <p>
          Ethotron systems are designed with user experience in mind—delivering
          intuitive, easy-to-operate software, highly sophisticated test
          routines, and cutting-edge technology. Our EMC generators are known
          for their exceptional reliability and consistent performance in the
          most rigorous testing environments.
        </p>
        <p>
          Driven by a skilled team and a passion for engineering excellence,
          Ethotron combines deep industry knowledge with cutting-edge technology
          to empower your production with precision, efficiency, and
          performance.
        </p>
      </div>
    </>
  );
};

export default HeroSection;
