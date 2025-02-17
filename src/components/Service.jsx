import React from 'react';
import { motion } from 'framer-motion';
import { Home, Tools, Cloud, RefreshCw, Hammer, Drill, Wrench, Cog } from 'lucide-react';
import { Space_Grotesk } from "next/font/google";
import Image from "next/image";


const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    display: "swap",
});

const Service = () => {
    return (
        <div>
            <div className={`w-full flex flex-col md:flex-row gap-6 px-4 py-10 md:py-20 bg-[#F2EFE7] ${spaceGrotesk.className}`}>
                {/* Card 1 */}
                <motion.div
                    className="w-full md:w-1/4 text-center flex flex-col items-center"
                    initial={{ opacity: 0, y: 50 }} // Start from bottom
                    whileInView={{ opacity: 1, y: 0 }} // Move to original position and fade in
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }} // Trigger animation once when in view
                >
                    <Hammer className='h-10 w-10 mb-2' />
                    <h3 className="text-2xl  mb-2">Building Construction</h3>
                    <p className="text-sm">
                        Expert construction services ensuring durability and modern design.
                    </p>
                </motion.div>
                <hr />
                {/* Card 2 */}
                <motion.div
                    className="w-full md:w-1/4 text-center flex flex-col items-center"
                    initial={{ opacity: 0, y: 50 }} // Start from bottom
                    whileInView={{ opacity: 1, y: 0 }} // Move to original position and fade in
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // Delay for sequential animation
                    viewport={{ once: true }} // Trigger animation once when in view
                >
                    <Drill className='h-10 w-10 mb-2' />
                    <h3 className="text-2xl mb-2">Building Renovation</h3>
                    <p className="text-sm">
                        Tailored renovation solutions to upgrade and enhance your space.
                    </p>
                </motion.div>
                <hr />
                {/* Card 3 */}
                <motion.div
                    className="w-full md:w-1/4 text-center flex flex-col items-center"
                    initial={{ opacity: 0, y: 50 }} // Start from bottom
                    whileInView={{ opacity: 1, y: 0 }} // Move to original position and fade in
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }} // Delay for sequential animation
                    viewport={{ once: true }} // Trigger animation once when in view
                >
                    <Cog className='h-10 w-10 mb-2' />
                    <h3 className="text-2xl mb-2">AC Installation & Setup</h3>
                    <p className="text-sm">
                        Professional AC installation for optimal performance.
                    </p>
                </motion.div>
                <hr />
                {/* Card 4 */}
                <motion.div
                    className="w-full md:w-1/4 text-center flex flex-col items-center"
                    initial={{ opacity: 0, y: 50 }} // Start from bottom
                    whileInView={{ opacity: 1, y: 0 }} // Move to original position and fade in
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }} // Delay for sequential animation
                    viewport={{ once: true }} // Trigger animation once when in view
                >
                    <Wrench className='h-10 w-10 mb-2' />
                    <h3 className="text-2xl mb-2">AC Repair & Maintenance</h3>
                    <p className="text-sm">
                        Reliable repair and maintenance services to keep your AC running smoothly.
                    </p>
                </motion.div>
            </div>
            <div className="h-full w-full relative">
                <Image
                    src="/service.jpg"
                    alt="logo"
                    width={1000}
                    height={1000}
                />
            </div>
        </div>

    );
};

export default Service;
