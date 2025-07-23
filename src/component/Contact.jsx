import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

import Left from "../assets/New folder/R.jpg";
import Banner from "../assets/Banner/contactUs.png";

const Contact = () => {
  return (
    <div className="bg-gray-50 ">
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
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 max-w-7xl mx-auto py-8 px-4 md:px-10">
  {/* Left Map */}
  <div className="w-full lg:w-1/4">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7007.793584841946!2d77.43315984277284!3d28.55662036670725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee9b0e34c8c5%3A0xd109b5e1f9625276!2sAditya%20High%20Street%2C%20Lal%20Kuan%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201009!5e0!3m2!1sen!2sin!4v1716374459893!5m2!1sen!2sin"
      frameBorder="0"
      className="rounded-xl w-full h-64"
      allowFullScreen=""
      loading="lazy"
    />
  </div>

  {/* Center Contact Card */}
  <div className="w-full lg:w-1/2">
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="bg-orange-500 text-white px-6 py-3 text-lg font-semibold">
        Delhi Office
      </div>
      <div className="p-8 space-y-4 text-gray-700 text-sm leading-relaxed">
        <p className="flex items-start">
          <MapPin className="w-5 h-5 mt-1 mr-2 text-orange-600" />
          <span>
            <strong>Ethotron Pvt Ltd</strong>, AHS-610, 6th Floor, Aditya High Street,
            South Side GT Road Industrial Area, Ghaziabad (Delhi-NCR), India-201009
          </span>
        </p>
        <p className="flex items-center">
          <Phone className="w-5 h-5 mr-2 text-orange-600" />
          +91-9997547656
        </p>
        <p className="flex items-center">
          <Mail className="w-5 h-5 mr-2 text-orange-600" />
          info@ethotron.com
        </p>
      </div>
    </div>
  </div>

  {/* Right Image */}
  <div className="w-full lg:w-1/4">
    <img
      src={Left}
      alt="Building Right"
      className="rounded-xl shadow-lg object-cover w-full h-64"
    />
  </div>
</div>

    </div>
  );
};

export default Contact;
