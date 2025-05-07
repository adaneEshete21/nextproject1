// pages/join-us.tsx
"use client";
import Head from "next/head";
import { useState,useEffect } from "react";
export default function JoinUs() {
  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[description, setDescription] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const data = { name, email, description };
    console.log(data)
    fetch("/api/joinus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setName("");
        setEmail("");
        setDescription("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  return (
    <>
      <Head>
        <title>Join Us - Your Company</title>
      </Head>

      <div className="min-h-screen bg-gray-100 py-12 px-4">
        <section className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-8">
          {/* Hero */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-blue-800">Join Us</h1>
            <p className="text-gray-600 mt-4 text-lg">
              Be a part of a growing team that is redefining global logistics.
              Whether you are a seasoned expert or just starting out, there is a
              place for you here.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Career Growth",
                desc: "Opportunities to level up with structured career paths and mentoring.",
              },
              {
                title: "Innovative Team",
                desc: "Work with passionate individuals in a collaborative culture.",
              },
              {
                title: "Global Impact",
                desc: "Make a difference in international trade and logistics.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-blue-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Job Roles */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">
              Open Positions
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li className="bg-gray-100 p-4 rounded shadow-sm hover:bg-gray-200 transition">
                🚚 Logistics Coordinator
              </li>
              <li className="bg-gray-100 p-4 rounded shadow-sm hover:bg-gray-200 transition">
                🏢 Warehouse Manager
              </li>
              <li className="bg-gray-100 p-4 rounded shadow-sm hover:bg-gray-200 transition">
                💼 Sales and Partnership Officer
              </li>
            </ul>
          </div>

          {/* Contact / Application Form */}
          <div>
            <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">
              Apply Now
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded"
                required
              />
              <textarea
                placeholder="Tell us why you'd be a great fit..."
                className="w-full p-3 border border-gray-300 rounded"
                rows={5}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
              >
                Submit Application
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
