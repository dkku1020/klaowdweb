"use client";

import { useState } from "react";
import Link from "next/link";

export function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  // Hardcoded navigation items
  const navItems = [
    { title: "Men", path: "/collections/mens" },
    { title: "Women", path: "/collections/womens" },
    { title: "About Us", path: "/pages/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isHovered ? "bg-white shadow-lg py-4" : "bg-transparent py-2"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Left section: Nav Links */}
        <div className="flex-1">
          <ul className="flex space-x-6">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`transition-colors duration-200 ${
                  isHovered ? "text-black" : "text-white"
                } hover:text-blue-500`}
              >
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Center: Logo */}
        <Link
          href={"/"}
          prefetch={true}
          className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
        >
          <div
            className={`text-2xl font-bold transition-colors duration-200 ${
              isHovered ? "text-black" : "text-white"
            }`}
          >
            Klaowd
          </div>
        </Link>

        {/* Right section: Bag */}
        <div className="flex-1 flex justify-end">
          <div
            className={`transition-colors duration-200 ${
              isHovered ? "text-black" : "text-white"
            } hover:text-blue-500`}
          >
            Bag
          </div>
        </div>
      </div>
    </nav>
  );
}
