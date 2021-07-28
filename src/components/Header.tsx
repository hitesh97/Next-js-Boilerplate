/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import Link from 'next/link';

const Header = () => {
  return (
    <header className="border-b-2 z-10 bg-gray-100 fixed inset-x-0 top-0">
      <nav className="flex items-center justify-between p-6 container mx-auto">
        <a href="#">logo</a>
        <div className="text-lg text-gray-600 hidden lg:flex">
          <Link href="/">
            <a
              href="#"
              className="block mt-4 lg:inline-block text-teal-600 lg:mt-0 mr-10"
            >
              Home
            </a>
          </Link>
          <Link href="/">
            <a
              href="#"
              className="block mt-4 lg:inline-block hover:text-gray-700 lg:mt-0 mr-10"
            >
              Services
            </a>
          </Link>
          <Link href="/">
            <a
              href="#"
              className="block mt-4 lg:inline-block hover:text-gray-700 lg:mt-0 mr-10"
            >
              Portfolio
            </a>
          </Link>
          <Link href="/">
            <a
              href="#"
              className="block hover:text-gray-700 mt-4 lg:inline-block lg:mt-0 mr-10"
            >
              Company
            </a>
          </Link>
          <Link href="/">
            <a
              href="#"
              className="block hover:text-gray-700 mt-4 lg:inline-block lg:mt-0"
            >
              Contact
            </a>
          </Link>
        </div>

        <div className="flex items-center">
          <div className="mr-5 lg:mr-0">
            <button
              type="button"
              className="py-2 px-6 rounded-md text-gray-600 hover:text-gray-700 text-lg"
            >
              Sign in
            </button>
            <button
              type="button"
              className="py-2 px-6 bg-blue-500 hover:bg-blue-600 rounded-md text-white text-lg"
            >
              Sign up
            </button>
          </div>
          <div className="block lg:hidden">
            <button
              type="button"
              className="flex items-center px-4 py-3 border rounded text-blue-500 border-blue-500 focus:outline-none"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
