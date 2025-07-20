import React from 'react';

const logos = [
  '/logos/logo1.png',
  '/logos/logo2.png',
  '/logos/logo3.png',
  '/logos/logo4.png',
  '/logos/logo5.png',
  '/logos/logo6.png',
  // Repeat logos for smooth loop
  '/logos/logo1.png',
  '/logos/logo2.png',
  '/logos/logo3.png',
  '/logos/logo1.png',
  '/logos/logo2.png',
  '/logos/logo3.png',
  '/logos/logo4.png',
  '/logos/logo5.png',
  '/logos/logo6.png',
  // Repeat logos for smooth loop
  '/logos/logo1.png',
  '/logos/logo2.png',
  '/logos/logo3.png',
];

const Customer = () => {
  return (
    <div className="bg-black py-8">
      <h2 className="text-center text-white text-2xl font-semibold mb-6">
        Our Customers
      </h2>
      <div className="overflow-hidden whitespace-nowrap">
        <div className="inline-flex animate-scroll">
          {logos.map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt={`Customer ${idx}`}
              className="h-16 mx-6 object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Customer;
