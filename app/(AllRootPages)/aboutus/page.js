import React from "react";

const About = () => {
  return (
    <div className="container mx-auto p-8">
      <div style={{marginBottom:'250px'}}>
        <h1 className="text-4xl font-bold text-center mb-6">Our Mission</h1>
        <p className="text-lg text-center mb-10">
          Our mission is to bridge the gap between businesses and global
          opportunities by offering tailored solutions that address the
          challenges of international trade. We aim to foster growth,
          innovation, and success for businesses of all sizes.
        </p>
      </div>
      <div style={{marginBottom:'250px'}}>
        <h1 className="text-4xl font-bold text-center mb-6">Our Values</h1>
        <p className="text-gray-700">
          Integrity, innovation, and customer-centricity are at the core of
          everything we do. We believe in building lasting relationships with
          our clients and partners based on trust and mutual success.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* About Us Section */}
        <div className="bg-gray-100 shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">About Us</h2>
          <p className="mb-4">We leverage cutting-edge technology and innovation.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Innovation</li>
            <li>Customer Centricity</li>
            <li>Expertise</li>
            <li>Integrity</li>
          </ul>
        </div>

        {/* Our Team Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <img
            className="w-full h-auto rounded-lg shadow-lg"
            src="/ourteam.avif"
            alt="Our Team"
          />
        </div>
      </div>
    </div>
  );
};

export default About;