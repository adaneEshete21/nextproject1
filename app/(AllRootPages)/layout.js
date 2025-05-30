import React from 'react';
import Link from 'next/link';
    import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-white-600 text-blue p-4 shadow-md">
        <div className="container-fluid mx-auto flex justify-between items-center">
          {/* Left Links */}
          <div className="flex items-center space-x-6">
            <img
              src="/icon.jpeg"
              alt="Logo"
              className="h-8 w-8 inline-block mr-2"
            />
            <Link href="/" className="text-2xl font-bold">
              GlobalTradeConntect
            </Link>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/service" className="hover:text-gray-300">
                  Service
                </Link>
              </li>
              <li>
                <Link href="/aboutus" className="hover:text-gray-300">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Links */}
          <ul className="flex space-x-6">
            <li>
              <Link href="/contact" className="hover:text-gray-300">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/news" className="hover:text-gray-300">
                News
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow container-fluid    ">{children}</main>

      {/* Footer */}
      <footer
        className="bg-gray-800 text-white p-4"
        style={{ marginTop: "auto", height: "300px" }}
      >
        <div className="container mx-auto flex flex-col items-center">
          {/* Subscribe Section */}
          <div className="text-center mb-6">
            <form>
              <label htmlFor="email" className="text-sm mb-2 block">
                Subscribe to our newsletter
              </label>
              <div className="flex justify-center items-center space-x-2">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="p-2 rounded-md text-gray-800 bg-white"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          {/* Icon with Name and Links */}
          <div className="flex justify-between items-center w-full max-w-screen-lg mb-6">
            <div className="flex items-center space-x-4">
              <img
                src="/icon.jpeg"
                alt="Logo"
                className="h-8 w-8 inline-block"
              />
              <Link href="/" className="text-2xl font-bold">
                GlobalTradeConnect
              </Link>
            </div>
            <ul className="flex space-x-6">
              <li>
                <Link href="/aboutus" className="hover:text-gray-400">
                About Us
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-gray-400">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* All Rights Reserved and Social Media Icons */}
          <div className="flex justify-between items-center w-full max-w-screen-lg">
            <p className="text-sm">
              © 2025 GlobalTradeConnect. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
               <FaFacebook/>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
               <FaTwitter/>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin/>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;