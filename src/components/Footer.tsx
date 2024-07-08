import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-main  ">
      <div className="mx-auto w-full max-w-screen-xl overflow-x-hidden">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4 border-b border-gray-100 border-opacity-10">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
              Navigate
            </h2>
            <ul className="text-gray-200 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className=" hover:underline">
                  Home
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Terms and conditions
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
              Shop
            </h2>
            <ul className="text-gray-200 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className=" hover:underline">
                  Women
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Men
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Jackets
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  New Arrivals
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Hot Picks
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
              Explore
            </h2>
            <ul className="text-gray-200 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className=" hover:underline">
                  T-Shirts
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  My Orders
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Whilist
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Coats
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="relative  flex flex-col gap-9">
              <Image
                loading="lazy"
                src="/logo (1).svg"
                alt="Footer Logo"
                height={52}
                width={200}
                quality={70}
              />
              <div className="relative text-gray-200">
                <p>60-49 Road 11378 New York </p>
                <p>+65 11 188 888</p>
                <p>chicseduire@gmail.com</p>
              </div>
              <div className="mt-8 flex">
                <img
                  src="/Facebook.svg"
                  alt="Facebook"
                  className="w-6 h-6 mr-4"
                />
                <img
                  src="/Instagram.svg"
                  alt="Instagram"
                  className="w-6 h-6 mr-4"
                />
                <img
                  src="/WhatsApp.svg"
                  alt="WhatsApp"
                  className="w-6 h-6 mr-4"
                />
                <img src="/Twitter.svg" alt="Twitter" className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-6 bg-main   md:flex md:items-center md:justify-center">
          <div>
            <span className="text-sm text-gray-200 dark:text-gray-300 sm:text-center">
              Copyright © 2023 . All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
