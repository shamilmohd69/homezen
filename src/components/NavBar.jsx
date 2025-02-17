import Image from "next/image";
import React, { useState } from "react";
import LanguageSelect from "./LanguageSelect";
import { Menu, X } from "lucide-react"; // Importing Lucide icons

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50  bg-white border-b border-black flex items-center px-3 justify-between py-3">
      <Image src="/logo1.png" alt="logo" width={50} height={50} />

      {/* Desktop Menu */}

      <div className="hidden md:flex gap-5">
        <ul className="flex gap-8 text-lg font-semibold">
          {["Home", "Services", "About", "Contact"].map((item) => (
            <li key={item} className="relative cursor-pointer transition-all duration-300 ease-in-out hover:text-gray-700">
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </li>
          ))}
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
      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out md:hidden z-50`}>
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button onClick={() => setIsOpen(false)} className="text-2xl">
            <X />
          </button>
        </div>
        <ul className="flex flex-col gap-6 text-lg p-4">
          {["Home", "Services", "About", "Contact"].map((item) => (
            <li key={item} onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-gray-700 transition-all duration-300">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black bg-opacity-50 md:hidden"></div>
      )}
    </div>
  );
};

export default NavBar;
