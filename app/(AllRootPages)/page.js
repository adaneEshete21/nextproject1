import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="contaner-fluid">
      <div
        className=" container-fluid bg-cover bg-center bg-no-repeat text-white min-h-screen flex items-center "
        style={{
          backgroundImage: "url('/homebg1.jpg')",
          backgroundAttacs: "scroll", // Makes the background image fixed during scrolling
          backgroundSize: "cover", // Ensures the image covers the entire container
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <div className="con./styles/globals.css'tainer mx-auto p-10  bg-opacity-50 rounded-lg shadow-lg">
          <h1 className="text-5xl font-extrabold mb-4  text-center">
            Global Import/Export Service
          </h1>
          <p className="text-lg text-info text-center ">
            Connecting businesses to the world, one shipment at a time,seamless
            logistics solutions for your global trade needs.
          </p>
          <button
            className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 "
            style={{ display: "block", margin: "0 auto" }}
          >
            Get Started
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <div
          className="w-full max-w-screen-lg px-4 py-6 w-full"
          style={{ width: "100%" }}
        >
          <h1 className="text-center text-2xl font-bold mb-6">Our Services</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Sea Freight",
                desc: "Reliable ocean shipment solutions",
                img: "/sea.jfif",
              },
              {
                title: "Air Freight",
                desc: "Fresh and secure air transport",
                img: "/air.jfif",
              },
              {
                title: "Land Freight",
                desc: "Effective trucks and rail logistics",
                img: "/land.jfif",
              },
              {
                title: "Warehousing",
                desc: "Secure storage and inventory management",
                img: "/warehouse.jfif",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-3 rounded-lg shadow-lg flex flex-col items-center"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-32 object-cover rounded-md"
                />
                <h2 className="text-md font-bold mt-2 text-center">
                  {service.title}
                </h2>
                <p className="text-sm text-center">{service.desc}</p>
                <button className="mt-2 px-3 py-1.5 text-sm bg-blue-500 text-white rounded hover:bg-blue-600">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center ">
        <div className="w-full max-w-screen-lg px-4 py-6 ">
          <h1 className="text-center text-2xl font-bold mb-6">Why Choose Us</h1>
          <div className="flex gap-4">
            {[
              {
                title: "Global coverage",
                desc: "Around the globe and reach every corner",
                img: "/global.jfif",
              },
              {
                title: "services expertise",
                desc: " Experienced professionals in logistics",
                img: "/expert.jfif",
              },
              {
                title: "Logistics excellence",
                desc: "Streamlined processes for efficiency",
                img: "/ware.jfif",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="flex-1 bg-white p-3 rounded-lg shadow-lg flex flex-col items-center"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-32 object-cover rounded-md"
                />
                <h2 className="text-md font-bold mt-2 text-center">
                  {service.title}
                </h2>
                <p className="text-sm text-center">{service.desc}</p>
                <button className="mt-2 px-3 py-1.5 text-sm bg-blue-500 text-white rounded hover:bg-blue-600">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="flex gap-6 justify-center items-stretch py-8  w-full max-w-screen-lg px-4 py-6"
        style={{ marginLeft: "100px", marginRight: "0px" }}
      >
        <div
          className="bg-primary text-white p-6 rounded-lg flex-1 min-h-[350px] flex flex-col justify-between shadow-md"
          style={{ backgroundColor: "#1E3A8A" }}
        >
          <div>
            <h1 className="text-center text-2xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-center text-base">
              Have questions or need assistance? Our team is here to help you
              navigate the world of global trade. Contact us today for
              personalized support and solutions tailored to your business
              needs.
            </p>
          </div>
          <div className="flex justify-center mt-6">
            <Link
              href="/detail/joinus"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Join Us
            </Link>
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-white p-4 rounded-lg flex-1 min-h-[350px] flex items-center justify-center shadow-md">
          <img
            src="/join.jfif"
            alt="Contact Us"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
