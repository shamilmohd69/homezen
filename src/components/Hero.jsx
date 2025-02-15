import React from 'react'
import Image from "next/image";
import { Outfit } from "next/font/google";

const poppins = Outfit({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});


const Hero = ({ scrollToSection }) => {
    return (
        <div className='w-full h-screen flex flex-col justify-center items-center px-5'>
            <Image
                src="/logo.png"
                alt="logo"
                width={200}
                height={200}
                className='sm:h-[180px] sm:w-[180px] object-cover'
            />
            <div className=''>
                <h1 className={`text-2xl  sm:text-4xl lg:text-5xl font-bold text-gray-950 mt-5 ${poppins.className} text-center`}>Homezen Trading and Contracting</h1>
                <h3 className='text-center mt-5 text-base sm:text-xl text-gray-700'>Your trusted partner for AC maintenance and comprehensive contracting solutions in Qatar</h3>
            </div>
            <div>
                <button className="bg-[#125a77] text-white px-4 py-2 rounded-sm mt-5 hover:bg-[#327691] transition duration-300" onClick={() => scrollToSection('body1')}>
                    Our Services
                </button>
            </div>
        </div>
    )
}

export default Hero