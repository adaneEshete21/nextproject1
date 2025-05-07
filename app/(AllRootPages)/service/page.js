import React from "react";
import Link from "next/link"; // Import Link for navigation

const Service = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-6">Our Services</h1>
      <p className="text-lg text-center mb-10">
        Explore our range of services designed to facilitate global trade and
        empower businesses worldwide.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Trade Financing</h2>
          <p className="text-gray-700">
            We provide tailored trade financing solutions to help businesses
            manage cash flow, reduce risks, and ensure smooth international
            transactions.
          </p>
          <Link href="/service/1">
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              View Details
            </button>
          </Link>
        </div>

        {/* Service 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Logistics and Supply Chain Management
          </h2>
          <p className="text-gray-700">
            Our logistics and supply chain management services ensure timely
            delivery, cost efficiency, and seamless operations for your global
            trade needs.
          </p>
          <Link href="/service/2">
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              View Details
            </button>
          </Link>
        </div>

        {/* Service 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Market Research and Analysis
          </h2>
          <p className="text-gray-700">
            Gain insights into global markets with our in-depth research and
            analysis, helping you make informed decisions and identify growth
            opportunities.
          </p>
          <Link href="/service/3">
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              View Details
            </button>
          </Link>
        </div>

        {/* Service 4 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Customs and Compliance
          </h2>
          <p className="text-gray-700">
            Navigate complex customs regulations and ensure compliance with
            international trade laws with our expert guidance and support.
          </p>
          <Link href="/service/4">
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              View Details
            </button>
          </Link>
        </div>

        {/* Service 5 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Digital Trade Solutions
          </h2>
          <p className="text-gray-700">
            Leverage cutting-edge digital tools and platforms to streamline your
            trade processes, enhance efficiency, and reduce costs.
          </p>
          <Link href="/service/5">
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              View Details
            </button>
          </Link>
        </div>

        {/* Service 6 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Consulting and Advisory
          </h2>
          <p className="text-gray-700">
            Our team of experts provides strategic consulting and advisory
            services to help you overcome challenges and achieve your trade
            objectives.
          </p>
          <Link href="/service/6">
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
