import { navLinks } from "@/Constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: props) => {
  return (
    <div>
      {/* Overlay */}
      {showNav && (
        <div
          className="fixed inset-0 z-[1002] bg-black opacity-70 transition-opacity duration-300"
          onClick={closeNav}
        />
      )}

      {/* Side Nav */}
      <div
        className={`text-white fixed top-0 left-0 justify-center flex flex-col h-full transform transition-transform duration-500 ${
          showNav ? "translate-x-0" : "-translate-x-full"
        } w-[80%] sm:w-[60%] bg-rose-900 space-y-6 z-[1050]`}
      >
        {navLinks.map((link) => (
          <Link key={link.id} href={link.url}>
            <p className="text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
              {link.label}
            </p>
          </Link>
        ))}

        {/* Close Button */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.5rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default MobileNav;
