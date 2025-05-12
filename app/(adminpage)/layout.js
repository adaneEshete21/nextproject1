"use client"
import React from 'react'
import { RiAdminLine } from "react-icons/ri";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUsers } from "react-icons/fa";
import { CgFormatLeft } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { BsSignpost2 } from "react-icons/bs";
import { BiSolidReport } from "react-icons/bi";


  const Layout = ({children }) => {
    const menuItems = [
        { icon: <FaUsers />, label: "User Management",URL: "/admin/user" },
        { icon: <CgFormatLeft />, label: "Analysis",URL: "/admin/analysis"  },
        { icon: <CiSettings />, label: "Setting" , URL: "/admin/setting" },
        { icon: <BsSignpost2 />, label: "Post", URL: "/admin/post" },
        { icon: <BiSolidReport />, label: "Report" , URL: "/admin/report" }
      ];
      const pathname = usePathname();
  return (
    <div className=" flex flex-col min-h-screen">
      <div className=" col-sm bg-white-600 text-blue p-4 shadow-md">
        <nav className="container-fluid mx-auto flex justify-between items-center">
          {/* Left Links */}
          <div className="flex items-center space-x-6">
            <RiAdminLine style={{ height: "20px", width: "20px" }} />
            <Link href="/dashboard" className="text-2xl font-bold">
              <b> Admin Hub</b>
            </Link>
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="/dashboard"
                  className={`hover:text-gray-300 ${
                    pathname === "/" ? "text-blue-500 underline" : ""
                  }`}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/service" className="hover:text-gray-300">
                  users
                </Link>
              </li>
              <li>
                <Link href="/users" className="hover:text-gray-300">
                  Settings
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="flex h-screen">
        <div className=" w-1/4 container  mx-auto m-3 h-screen ">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {/* Sidebar */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <h2 className="text-xl font-bold mb-4 text-center">Admin Menu</h2>
              <ul className="space-y-4">
                {menuItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-4 p-3 hover:bg-gray-100 rounded-md cursor-pointer"
                  >
                    <span className="text-blue-500 text-xl">{item.icon}</span>
            
                    <span>
                      <Link
                        href={item.URL}
                        className={`hover:text-gray-300 ${
                          pathname === item.URL ? "text-blue-500 underline" : ""
                        }`}
                      >
                        {item.label}
                      </Link>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <main className="w-3/4  container-fluid m-3 h-screen">   
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout
