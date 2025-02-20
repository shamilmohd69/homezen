import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Hammer, Drill, Cog, Wrench } from 'lucide-react';
import { Space_Grotesk } from "next/font/google";


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
    <div className={`${spaceGrotesk.className}`}>
      <div className={`w-full flex flex-col md:flex-row gap-6 px-4 py-10 md:py-20 bg-[#F2EFE7] `}>
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


    </div>
  );
};

export default Service;
