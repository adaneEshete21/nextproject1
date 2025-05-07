import React from 'react';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-white-600 text-blue p-4 shadow-md">
        <div className="container-fluid mx-auto flex justify-between items-center">
          {/* Left Links */}
          <div className="flex items-center space-x-6">
            <img src="/icon.jpeg" alt="Logo" className="h-8 w-8 inline-block mr-2" />
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
      <footer className="bg-gray-800 text-white p-4" style={{ marginTop: 'auto' ,height: '300px'}}>
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-sm">
            © 2025 GlobalTradeConnect. All rights reserved.
          </p>
          <ul className="flex space-x-6">
            <li>
              <Link href="/privacy" className="hover:text-gray-400">
                Privacy Policy
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
      </footer>
    </div>
  );
};

export default Layout;