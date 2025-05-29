import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* 1 */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Company</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-900">
            About Us
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-900">
            Career
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-900">
            Blogs
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-900">
            Gift Cards
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-900">
            Magazine
          </p>
        </div>

        {/* 2 */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Support</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-900">
            Contact
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-900">
            Legal Notice
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-900">
            Privacy Policy
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-900">
            Terms & Conditions
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-900">
            SiteMap
          </p>
        </div>

        {/* 3 */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Other Services</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-900">
            Car Hire
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-900">
            Activities Finder
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-900">
            Tour List
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-900">
            Flight Finder
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-900">
            Travel Agents
          </p>
        </div>

        {/* 4 */}
        <div>
          <h1 className="text-lg font-bold">Contact Us</h1>
          <div className="mt-6">
            <h1 className="text-sm text-gray-600">Mobile Number</h1>
            <h1 className="text-base font-bold text-blue-950 mt-1">
              +92 312 0807922
            </h1>
          </div>
          <div className="mt-6">
            <h1 className="text-sm text-gray-600">My Email</h1>
            <h1 className="text-base font-bold text-blue-950 mt-1">
              masoodusman24@gmail.com
            </h1>
          </div>
        </div>
      </div>

      <div className="mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        <p className="text-center md:text-left">
          Copyright © 2025 Webdev. All rights reserved
        </p>

        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <span>Social :</span>

          <Link
            href="https://www.facebook.com/usman.masood.500792"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-800 transition-all duration-300 transform hover:scale-125"
          >
            <FaFacebook size={20} />
          </Link>

          <Link
            href="https://www.linkedin.com/in/usman-masood-developer-designer/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-800 transition-all duration-300 transform hover:scale-125"
          >
            <FaLinkedin size={20} />
          </Link>

          <Link
            href="https://github.com/masoodusman24"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-800 transition-all duration-300 transform hover:scale-125"
          >
            <FaGithub size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
