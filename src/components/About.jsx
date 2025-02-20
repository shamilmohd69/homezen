import React from 'react'
import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import Counter from './sub/Counter';

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const About = () => {
  return (
    <div className={`${spaceGrotesk.className}`}>
      <div className={`flex flex-col sm:flex-row sm:justify-between `}>
        <div className="relative w-full sm:w-1/2 h-64 sm:h-[400px]">
          <Image
            src="/caro3.jpg"
            alt="image"
            fill
            className="object-cover"
          />
        </div>


        <div className="w-full sm:w-1/2 p-4 flex flex-col gap-3 justify-center items-center px-5 sm:px-10">
          <h3 className='text-3xl '>Your Partner for Cool Comfort in Doha</h3>
          <p className=' '>We specialize in AC maintenance, repair, sales, and installation services across Doha, Qatar. Our team of dedicated professionals ensures your cooling systems run smoothly, keeping your space comfortable all year round. Whether you need a new AC unit, quick repairs, or expert installation, we’ve got you covered. We're committed to delivering top-quality service and ensuring customer satisfaction, making us the trusted choice for all your air conditioning needs.</p>
          <div className='flex gap-5 items-center'>
            <Image
              src='/ac_carrier.png'
              alt='carrier'
              width={70}
              height={70}
            />
            <Image
              src='/ac_daikin.png'
              alt='daikin'
              width={70}
              height={70}
            />
            <Image
              src='/ac_lg.png'
              alt='carrier'
              width={50}
              height={50}
            />
            <Image
              src='/ac_samsung.png'
              alt='carrier'
              width={80}
              height={80}
            />
          </div>
        </div>
      </div>

      <div className="py-10 flex items-center justify-center bg-[#F2EFE7]">
        <Counter />
      </div>

      <div className={`flex flex-col sm:flex-row sm:justify-between `}>


        <div className="w-full sm:w-1/2 p-4 flex flex-col gap-3 justify-center items-center px-5 sm:px-10">
          <h3 className='text-3xl '>Building Dreams, Crafting Excellence in Doha</h3>
          <p className=' '>In addition to our AC services, we also offer comprehensive building construction and renovation solutions. From new builds to remodeling existing spaces, our experienced team brings your vision to life with precision and care. We focus on quality craftsmanship and timely project delivery, ensuring your property is built to last. Whether you're planning a new construction project or looking to upgrade your current space, we’re here to make it happen.</p>
          
        </div>
        <div className="relative w-full sm:w-1/2 h-64 sm:h-[400px]">
          <Image
            src="/construction1.jpg"
            alt="image"
            fill
            className="object-cover"
          />
        </div>
      </div>

    </div>

  )
}

export default About