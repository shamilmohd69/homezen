import React from "react";
import Image from "next/image";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const Hero2 = () => {
  return (
    <div className="h-screen flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3  md:pl-10 mt-[65px] sm:mt-0 pt-20 md:pt-0 relative">
      {/* Text Section */}
      <div className={`text-black px-3 md:max-w-[50%] z-10 ${spaceGrotesk.className}`}>
        <h1 className="text-3xl md:text-5xl font-[500]">
        Expert Building Construction & AC Repair Services in Doha
        </h1>
        <p className="text-sm md:text-xl font-[300] mt-3">
        From foundation to finishing, we provide top-quality construction and renovation, along with efficient AC maintenance and repair services to ensure durability, comfort, and optimal performance for your home or business.
        </p>
        <div className="w-full flex flex-col md:flex-row mt-5 gap-2">
          <button className="bg-[#125a77] w-full text-white px-4 py-2 rounded-sm hover:bg-[#327691] transition duration-300">
            <Image
              src="/whatsapp.svg"
              alt="logo"
              width={20}
              height={20}
              className="inline mb-1 mr-2"
            />
            Book Service Now
          </button>
          <button className="bg-[#48A6A7] w-full text-white px-4 py-2 rounded-sm hover:bg-[#397778] transition duration-300">
            View More
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:max-w-[50%] h-full w-full relative">
        <Image
          src="/dohaImage.jpg"
          alt="logo"
          layout="fill" // Makes image cover the div
          objectFit="cover" // Ensures the image covers without distortion
          className="absolute inset-0"
        />
      </div>
    </div>
  );
};

export default Hero2;
