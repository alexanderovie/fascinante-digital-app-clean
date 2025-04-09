"use client";  // Asegúrate de agregar esta línea al principio

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex flex-col antialiased">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-900 max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center">
            {/* Logo */}
            <a href="#" className="flex mr-6">
              <img
                src="/logo.svg"
                className="mr-3 h-8"
                alt="Fascinante Digital Logo"
              />
            </a>
          </div>

          {/* Navigation links (desktop only) */}
          <div className="hidden lg:flex justify-between items-center lg:order-2">
            <ul className="flex mt-0 mr-4 w-full text-sm font-medium text-gray-900 dark:text-white">
              <li>
                <Link href="#" className="py-3 px-4 hover:text-primary-600 dark:hover:text-primary-500">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="#" className="py-3 px-4 hover:text-primary-600 dark:hover:text-primary-500">
                  Company
                </Link>
              </li>
              <li>
                <Link href="#" className="py-3 px-4 hover:text-primary-600 dark:hover:text-primary-500">
                  Support
                </Link>
              </li>
            </ul>

            {/* Action Buttons (desktop only) */}
            <div className="flex space-x-3">
              <button
                type="button"
                className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:outline-none hover:text-primary-700"
              >
                Feedback
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            id="toggleMobileMenuButton"
            onClick={toggleMobileMenu}
            className="p-2 text-gray-500 rounded-lg md:ml-2 md:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
          >
            <span className="sr-only">Open menu</span>
            <svg className="w-[18px] h-[18px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <nav
        id="toggleMobileMenu"
        className={`${isMobileMenuOpen ? "block" : "hidden"} bg-white border-b border-gray-200 shadow-sm dark:bg-gray-900 md:hidden dark:border-gray-800`}
      >
        <div className="px-0 lg:px-6">
          <div className="flex items-center">
            <ul className="flex flex-col w-full text-sm font-medium md:flex-row">
              <li className="block md:inline">
                <Link href="#" className="block py-3 px-4 text-gray-500 dark:text-gray-400 hover:text-primary-600 hover:border-b-2 dark:hover:text-primary-500 dark:hover:border-primary-500">
                  Overview
                </Link>
              </li>
              <li className="block md:inline">
                <Link href="#" className="block py-3 px-4 text-gray-500 dark:text-gray-400 hover:text-primary-600 hover:border-b-2 dark:hover:text-primary-500 dark:hover:border-primary-500">
                  Movil
                </Link>
              </li>
              <li className="block md:inline">
                <Link href="#" className="block py-3 px-4 text-gray-500 dark:text-gray-400 hover:text-primary-600 hover:border-b-2 dark:hover:text-primary-500 dark:hover:border-primary-500">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;