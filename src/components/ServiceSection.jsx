'use client';

import Image from "next/image";
import React, { forwardRef } from 'react';
import { Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';  // Import useRouter

const ServiceSection = forwardRef((props, ref) => {
    const router = useRouter();  // Initialize useRouter

    // Navigate to AC Maintenance page
    const goToACMaintenance = () => {
        router.push('/ac-maintenance');
    };

    // Navigate to Building Contracting page
    const goToBuildingContracting = () => {
        router.push('/building-contracting');
    };

    return (
        <div ref={ref} className='px-5 sm:px-10 min-h-[80vh] flex flex-col justify-center items-center'>

            <h1 className='text-2xl sm:text-2xl lg:text-3xl font-bold text-gray-950 mt-5 text-center'>Our Services</h1>

            <div className="grid gap-8 md:grid-cols-2 mt-10">
                {/* AC Maintenance Service Card */}
                <div
                    onClick={goToACMaintenance}  // Navigate to AC page on click
                    className="transform bg-[#f9f9f9] transition-transform hover:scale-[1.03] border border-gray-300 rounded-md cursor-pointer"
                >
                    <div className="flex flex-col items-center p-6">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                            <Image
                                src="/fan.svg"
                                alt="logo"
                                width={48}
                                height={48}
                                className='relative z-10 object-cover'
                            />
                        </motion.div>
                        <h3 className="mb-2 text-xl font-bold">AC Maintenance & Service</h3>
                        <p className="text-center text-gray-600 ">
                            Professional AC maintenance, repair, and installation services for residential and commercial
                            properties.
                        </p>
                    </div>
                </div>

                {/* Building Contracting Service Card */}
                <div
                    onClick={goToBuildingContracting}  // Navigate to Construction page on click
                    className="transform bg-[#f9f9f9] transition-transform hover:scale-[1.03] border border-gray-300 rounded-md cursor-pointer"
                >
                    <div className="flex flex-col items-center p-6">
                        <Building2 className="mb-4 h-12 w-12 text-[#125a77]" />
                        <h3 className="mb-2 text-xl font-bold">Building Contracting</h3>
                        <p className="text-center text-gray-600 ">
                            Complete building contracting services with expert planning, design, and execution.
                        </p>
                    </div>
                </div>

            </div>

        </div>
    );
});

export default ServiceSection;
