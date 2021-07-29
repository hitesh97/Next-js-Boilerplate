/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

import Link from 'next/link';

import BrandLogo from './BrandLogo';

const Header = () => {
  const [showMenu, setToggleMenu] = useState(false);
  return (
    <header className="flex flex-wrap flex-row justify-between md:items-center md:space-x-4 py-4 px-6 border-b-2 z-10 bg-gray-100 fixed inset-x-0 top-0">
      <div>
        <a
          className="text-pink-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
          href="#"
        >
          <BrandLogo />
        </a>
      </div>
      <nav
        className={`absolute md:relative top-16 left-0 md:top-0 z-20 flex-grow md:flex flex-col md:flex-row md:space-x-6 font-semibold w-full md:w-auto shadow-md rounded-lg md:rounded-none md:shadow-none sm:px-6 bg-gray-100 ${
          showMenu ? 'flex' : 'hidden'
        }`}
      >
        <div className="align-middle">
          <Link href="/">
            <a
              href="#"
              className="block py-1 text-indigo-600 hover:underline align-text-middle"
            >
              Home
            </a>
          </Link>
        </div>
        <div className="align-middle">
          <Link href="/about">
            <a
              href="#"
              className="block py-1 text-indigo-600 hover:underline align-text-middle"
            >
              About us
            </a>
          </Link>
        </div>
        <div className="align-middle">
          <Link href="/services">
            <a
              href="#"
              className="block py-1 text-indigo-600 hover:underline align-text-middle"
            >
              Services
            </a>
          </Link>
        </div>
        <div className="align-middle">
          <Link href="/blog">
            <a
              href="#"
              className="block py-1 text-indigo-600 hover:underline align-text-middle"
            >
              Blog
            </a>
          </Link>
        </div>
        <div className="align-middle">
          <Link href="/contact-us">
            <a
              href="#"
              className="block py-1 text-indigo-600 hover:underline align-text-middle"
            >
              Contact us
            </a>
          </Link>
        </div>
      </nav>
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
        <div className="block md:hidden lg:hidden">
          <button
            type="button"
            className="flex items-center px-4 py-3 border rounded text-blue-500 border-blue-500 focus:outline-none"
            onClick={() => setToggleMenu(!showMenu)}
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
    </header>
  );
};
export default Header;
