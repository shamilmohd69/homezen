import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white border-b-[1px] border-black flex items-center px-3 justify-between py-3">
      <Image src="/logo1.png" alt="logo" width={70} height={70} />
      <div className="flex gap-5">
        <Image src="/translate.svg" alt="logo" width={20} height={20} />
        <button className="border border-black px-4 py-2 rounded-sm hover:bg-[#125a77] hover:text-white transition duration-300">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default NavBar;
