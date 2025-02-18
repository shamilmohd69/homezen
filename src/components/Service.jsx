import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Hammer, Drill, Cog, Wrench } from 'lucide-react';
import { Space_Grotesk } from "next/font/google";
import Image from "next/image";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const Service = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className={`w-full flex flex-col md:flex-row gap-6 px-4 py-10 md:py-20 bg-[#F2EFE7] ${spaceGrotesk.className}`}>
        {/* Card 1 */}
        <motion.div
          className="w-full md:w-1/4 text-center flex flex-col items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: isMobile ? 0 : 0.0,
          }}
          viewport={{ once: true }}
        >
          <Hammer className='h-10 w-10 mb-2' />
          <h3 className="text-2xl mb-2">Building Construction</h3>
          <p className="text-sm">
            Expert construction services ensuring durability and modern design.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="w-full md:w-1/4 text-center flex flex-col items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: isMobile ? 0 : 0.2,
          }}
          viewport={{ once: true }}
        >
          <Drill className='h-10 w-10 mb-2' />
          <h3 className="text-2xl mb-2">Building Renovation</h3>
          <p className="text-sm">
            Tailored renovation solutions to upgrade and enhance your space.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="w-full md:w-1/4 text-center flex flex-col items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: isMobile ? 0 : 0.4,
          }}
          viewport={{ once: true }}
        >
          <Cog className='h-10 w-10 mb-2' />
          <h3 className="text-2xl mb-2">AC Installation & Setup</h3>
          <p className="text-sm">
            Professional AC installation for optimal performance.
          </p>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          className="w-full md:w-1/4 text-center flex flex-col items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: isMobile ? 0 : 0.6,
          }}
          viewport={{ once: true }}
        >
          <Wrench className='h-10 w-10 mb-2' />
          <h3 className="text-2xl mb-2">AC Repair & Maintenance</h3>
          <p className="text-sm">
            Reliable repair and maintenance services to keep your AC running smoothly.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-between">
        <div className="relative w-full sm:w-1/2 h-64 sm:h-[400px]">
          <Image
            src="/caro3.jpg"
            alt="Doha Image"
            fill
            className="object-cover"
          />
        </div>


        <div className="w-full sm:w-1/2 p-4 flex flex-col gap-3 justify-center items-center px-5 sm:px-10">
          <h3 className='text-3xl '>Your Partner for Cool Comfort in Doha</h3>
          <p className='text-lg'>At Homezen Trading and Contracting, we specialize in providing top-notch AC maintenance and repair services across Doha, Qatar. Our dedicated team of professionals ensures that your cooling systems run efficiently, keeping your environment comfortable year-round. We pride ourselves on our commitment to quality service and customer satisfaction, making us the trusted choice for all your air conditioning needs.</p>
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

      <div
        className="w-full h-60 md:h-96 cursor-pointer relative"
        onClick={() => window.open("https://www.google.com/maps/place/Doha", "_blank")}
      >
        <iframe
          title=""
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115666.27827319023!2d51.4196373707179!3d25.285632882459244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45dad68a8ff1b7%3A0xd6a51a7f45f4a5cf!2sDoha%2C%20Qatar!5e0!3m2!1sen!2sqa!4v1708173204047!5m2!1sen!2sqa&zoom=12&disableDefaultUI=true"
        />
      </div>


    </div>
  );
};

export default Service;
