import Image from "next/image";
import React, { useState } from "react";
import LanguageSelect from "./LanguageSelect";
import { Menu, X } from "lucide-react";

const NavBar = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50  bg-[#F2EFE7] flex items-center px-3 justify-between py-3">
      <div className="flex items-center gap-2">
        <Image src="/logo1.png" alt="logo" width={50} height={50} />
        <h3 className="text-2xl font-semibold">Homezen</h3>
      </div>

      {/* Desktop Menu */}

      <div className="hidden md:flex gap-5">
        <ul className="flex gap-8 text-lg font-semibold">
          <li className="cursor-pointer" onClick={() => scrollToSection('body1')}>Home</li>
          <li className="cursor-pointer" onClick={() => scrollToSection('body2')}>Services</li>
          <li className="cursor-pointer" onClick={() => scrollToSection('body3')}>About</li>
        </ul>
        <LanguageSelect />
      </div>

      <div className="flex gap-2 md:hidden">
        <LanguageSelect />
        <button onClick={() => setIsOpen(true)} className=" text-2xl">
          <Menu />
        </button>
      </div>


      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-[#F2EFE7] shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out md:hidden z-50`}>
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button onClick={() => setIsOpen(false)} className="text-2xl">
            <X />
          </button>
        </div>
        <ul className="flex flex-col gap-6 text-lg p-4">
          <li className="cursor-pointer" onClick={() => { scrollToSection('body1'); setIsOpen(false)}}>Home</li>
          <li className="cursor-pointer" onClick={() => {scrollToSection('body2'); setIsOpen(false)}}>Services</li>
          <li className="cursor-pointer" onClick={() => {scrollToSection('body3'); setIsOpen(false)}}>About</li>
        </ul>
      </div>

      {/* Overlay (Click to close sidebar) */}
      {isOpen && (
        <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black bg-opacity-50 md:hidden"></div>
      )}
    </div>
  );
};

export default NavBar;
