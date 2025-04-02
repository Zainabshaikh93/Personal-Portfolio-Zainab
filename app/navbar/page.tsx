'use client';
import React, { useState } from "react";
import Link from "next/link"; // Import the Link component from next/link

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-teal-400 to-cyan-600 p-6 shadow-xl">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo or Brand */}
          <h1 className="text-white text-2xl font-bold uppercase tracking-wider cursor-pointer hover:text-yellow-300 transition-all duration-300">
            Zeen
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex flex-grow justify-center space-x-8 text-white font-medium">
            <li className="hover:text-yellow-400 cursor-pointer transition-all duration-300">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-yellow-400 cursor-pointer transition-all duration-300">
              <Link href="/hero">About</Link>
            </li>
            <li className="hover:text-yellow-400 cursor-pointer transition-all duration-300">
              <Link href="/skills">Skills</Link>
            </li>
            <li className="hover:text-yellow-400 cursor-pointer transition-all duration-300">
              <Link href="/certification">Certification</Link>
            </li>
            <li className="hover:text-yellow-400 cursor-pointer transition-all duration-300">
              <Link href="/experience">Experience</Link>
            </li>
          </ul>

          {/* Hamburger Icon */}
          <button
            className="lg:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className={`w-8 h-8 transition-all duration-300 ${isOpen ? "transform rotate-45" : ""}`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:hidden transition-all transform bg-transparent text-white mt-4 p-6 rounded-lg shadow-lg space-y-6 text-center w-full`}
        >
          <ul>
            <li className="text-xl hover:text-yellow-400 cursor-pointer transition-all duration-300">
              <Link href="/">Home</Link>
            </li>
            <li className="text-xl hover:text-yellow-400 cursor-pointer transition-all duration-300">
              <Link href="/hero">About</Link>
            </li>
            <li className="text-xl hover:text-yellow-400 cursor-pointer transition-all duration-300">
              <Link href="/skills">Skills</Link>
            </li>
            <li className="text-xl hover:text-yellow-400 cursor-pointer transition-all duration-300">
              <Link href="/certification">Certification</Link>
            </li>
            <li className="text-xl hover:text-yellow-400 cursor-pointer transition-all duration-300">
              <Link href="/experience">Experience</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
