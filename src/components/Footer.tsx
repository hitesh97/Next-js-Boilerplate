/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import Link from 'next/link';

import { FooterMenu } from '../data/footer-menu';
import { MenuItem, MenuItemGroup } from '../data/menuItem';
import BrandLogo from './BrandLogo';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-8">
        <div className="w-full flex flex-col md:flex-row py-6">
          <div className="flex-1 mb-6 text-black">
            <a
              className="text-pink-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              href="#"
            >
              <BrandLogo />
              LANDING
            </a>
          </div>
          {FooterMenu.map((menuGroup: MenuItemGroup) => (
            <div key={`footer-group-${menuGroup.index}`} className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6">
                {menuGroup.heading}
              </p>
              <ul className="list-reset mb-6">
                {menuGroup.menuItems.map((menuItem: MenuItem) => (
                  <li
                    key={`footer-item-${menuItem.index}`}
                    className="mt-2 inline-block mr-2 md:block md:mr-0"
                  >
                    <Link href={menuItem.href}>
                      <a
                        href={menuItem.href}
                        className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                      >
                        {menuItem.label}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
