import React from "react";
import { motion } from "framer-motion";
import Image1 from "../../assets/automation/image1.png";
import Image2 from "../../assets/automation/image2.png";
import Image3 from "../../assets/automation/Untitled.png";

// Replace with your actual image paths
const imageCards = [
  {
    image: Image1,
    title: "Test Jig Rack Systems",
    description:
      "Ethotron is a trusted name and leading manufacturer and supplier of Functional Test Jigs, Automation Systems, and Special Purpose Machines (SPMs). With a strong presence in the industry, we deliver reliable, high-quality solutions tailored to meet the evolving needs of our clients across diverse sectors.",
  },
  {
    image: Image2,
    title: "State-of-the-Art Infrastructure",
    description:
      "We operate from a modern, fully-equipped manufacturing facility that supports the design, fabrication, and assembly of advanced test jigs, automation solutions, and SPM machines. Our infrastructure allows us to maintain exceptional quality standards while ensuring efficient delivery timelines.",
  },
  {
    image: Image3,
    title: "Expert Engineering Team",
    description: `Our dedicated team of experienced engineers specializes in:

• Functional Test Jig development
• Pin fixture design and fabrication
• System debugging and technical support`,
  },
];

const AutomationPage = () => {
  return (
    <section className="bg-gray-50 text-gray-800 px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold  mb-12">
          Functional Test Jigs, Automation & SPM Solutions
        </h1>

        {/* Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {imageCards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-4 text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-gray-600">{card.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Remaining Sections */}
        <div className="space-y-10 max-w-4xl mx-auto p-4">
          <Section
            title="Ethotron"
            text="Ethotron is a trusted name and leading manufacturer and supplier of Functional Test Jigs, Automation Systems, and Special Purpose Machines (SPMs). With a strong presence in the industry, we deliver reliable, high-quality solutions tailored to meet the evolving needs of our clients across diverse sectors."
          />
          <Section
            title="State-of-the-Art Infrastructure"
            text="We operate from a modern, fully-equipped manufacturing facility that supports the design, fabrication, and assembly of advanced test jigs, automation solutions, and SPM machines. Our infrastructure allows us to maintain exceptional quality standards while ensuring efficient delivery timelines."
          />
          <Section
            title="Expert Engineering Team"
            text={`Our dedicated team of experienced engineers specializes in:
• Functional Test Jig development
• Pin fixture design and fabrication
• System debugging and technical support`}
          />
          <Section
            title="Product Excellence"
            text={`We are committed to delivering:
• 100% reliable test contacts using high-quality test probes (TPs)
• Top-tier hardware components for durability and performance
• Comprehensive electrical wiring solutions

Supply of internal accessories including:
• Power supplies
• Customized PCBA
• Control cards
• Embedded system solutions`}
          />
          <Section
            title="Complete Turnkey Solutions"
            text="From mechanical design and electrical integration to software development, Ethotron provides end-to-end solutions. We excel in the assembly and integration of automated functional test systems tailored to exact customer specifications."
          />

          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Design & Supply of New Fixtures</li>
              <li>Upgrade & Retrofit of Existing Fixtures with new features</li>
              <li>Annual Maintenance Contracts (AMC)</li>
              <li>Industrial Automation Solutions</li>
              <li>Design & Manufacturing of Special Purpose Machines (SPM)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const Section = ({ title, text }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h2 className="text-2xl font-semibold mb-2">{title}</h2>
    <p className="text-gray-700 whitespace-pre-line">{text}</p>
  </motion.div>
);

export default AutomationPage;
