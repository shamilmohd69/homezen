import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const Hero2 = ({ scrollToSection }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const phoneNumber = "+97450225005";
  const message = "Hello, I am interested in your services"; 

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="h-screen flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 md:pl-10 mt-[65px] sm:mt-0 pt-20 md:pt-0 relative">

      <div className={`text-black px-3 md:max-w-[50%] z-10 ${spaceGrotesk.className}`}>

        <h1 className="text-3xl md:text-5xl font-[500]">
          Expert Building Construction & AC Repair Services in Doha
        </h1>
        <p className="text-sm md:text-xl font-[300] mt-3">
          From foundation to finishing, we provide top-quality construction, renovation, AC installation, and efficient AC maintenance and repair services to ensure durability, comfort, and optimal performance for your home or business.
        </p>

        <div className="w-full flex flex-col md:flex-row mt-5 gap-2">
          <button className="bg-[#125a77] w-full text-white px-4 py-2 rounded-sm hover:bg-[#327691] transition duration-300" onClick={handleWhatsAppClick}>
            <Image
              src="/whatsapp.svg"
              alt="logo"
              width={20}
              height={20}
              className="inline mb-1 mr-2"
            />
            Book Service Now
          </button>
          <button className="bg-[#48A6A7] w-full text-white px-4 py-2 rounded-sm hover:bg-[#397778] transition duration-300" onClick={() => scrollToSection('body2')}>
            View More
          </button>
        </div>
      </div>

      <div className="md:max-w-[50%] h-full w-full relative">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: isImageLoaded ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Image
            src="/dohaImage.jpg"
            alt="Doha Image"
            fill
            className="absolute inset-0 object-cover"
            onLoad={() => setIsImageLoaded(true)}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero2;
