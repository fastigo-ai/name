import React from "react";
import HrMission from "../assets/New folder/hr_mission.jpg";
import HrVission from "../assets/New folder/hr_vision.jpg";
import Hrobjective from "../assets/New folder/hr_objective.jpg";
import Banner from '../assets/Banner/about.png'

const Career = () => {
  return (
    <div className="text-gray-800">
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

      {/* Page Content */}
      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Card Section */}
        <div className="bg-white shadow-amber-500 shadow rounded-2xl p-6 flex flex-col">
          <div>
            <h2 className="text-2xl font-bold text-amber-500 mb-2 ">
              HR Vision
            </h2>
          </div>
          <div className="flex">
            <p>
              To be a trusted strategic partner in driving organizational
              excellence by unlocking the full potential of our people. We aim
              to foster a culture of growth, inclusion, and continuous
              development—creating meaningful opportunities for professional
              advancement, personal well-being, and long-term success.
            </p>
            <img
              src={HrVission}
              alt=""
              className="items-end rounded-full h-28 w-28"
            />
          </div>
        </div>

        <div className="flex flex-col bg-white shadow-amber-500 shadow rounded-2xl p-6">
          <div>
            <h2 className="text-2xl font-bold text-amber-500 mb-2 ">
              HR Mission
            </h2>
          </div>
          <div className="flex">
            <p>
              Our mission is to attract, develop, and retain exceptional talent
              by cultivating an inclusive, engaging, and high-performance work
              environment. We are committed to empowering employees through
              continuous learning, transparent communication, and holistic
              support—ensuring every individual thrives while contributing to
              the company’s growth and innovation.
            </p>
            <img
              src={HrMission}
              alt=""
              className="items-end rounded-full h-28 w-28"
            />
          </div>
        </div>

        <div className="bg-white shadow-amber-500 shadow rounded-2xl p-6 flex flex-col">
          <h2 className="text-2xl font-bold text-amber-500 mb-2">HR Objectives</h2>
          <div className="flex ">
            <pre className="whitespace-pre-wrap font-sans">
              {`"Embed Core Values
Strengthen and sustain the organization’s foundational values across all levels.
Promote Job Fulfillment
Encourage employee satisfaction by fostering empowerment, accountability, and a sense of purpose.
Enhance Skills & Competencies
Support continuous development through accessible, flexible learning opportunities and growth-driven challenges.
Inspire Innovation
Nurture a workplace culture that sparks creativity, forward-thinking, and enthusiastic contribution.
Support Employee Well-being
Improve the quality of life for employees and their families through thoughtful policies and holistic support.
Ensure Fairness & Transparency
Maintain consistency, equity, and integrity in all HR practices and interactions."`}
            </pre>
            <img
              src={Hrobjective}
              alt=""
              className="items-end rounded-full h-28 w-28 "
            />
          </div>
        </div>

        <div className="bg-white shadow-amber-500 shadow rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Life@Ethotron</h2>

          <p>
            At Ethotron, we believe that every challenge is a chance, every idea
            is a spark, and every moment is a miracle waiting to unfold.
          </p>

          <p>
            <strong>A Culture of Challenge, Growth & Possibility:</strong>
          </p>
          <p>
            At Ethotron, work is more than just a job—it’s a journey of
            continuous learning, innovation, and personal fulfillment...
          </p>

          <p>
            <strong>Empowering Growth & Individual Success:</strong>
          </p>
          <p>At Ethotron, we don’t just build careers—we build people...</p>

          <p>
            <strong>Open, Agile & Transparent:</strong>
          </p>
          <p>
            We believe in a flat organizational structure that encourages open
            communication...
          </p>

          <p className="font-semibold">
            Join us at Ethotron—where your potential meets purpose, and your
            work creates lasting impact.
          </p>
        </div>

        <div className="bg-white shadow-amber-500 shadow rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-2">Current Job Openings</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Male / Female Export & Import Coordinator - 1</li>
            <li>Male / Female Accountant - 1</li>
            <li>Male / Female Sales Coordinator - 1</li>
            <li>Male / Female Sales & Application Engineer - 1</li>
            <li>Male / Female Sr. Sales & Application Engineer - 1</li>
            <li>Male / Female Sales Manager - 1</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Career;
