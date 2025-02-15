'use client';

import React, { forwardRef } from 'react'
import { Fan, Building2, Divide } from 'lucide-react'

const ServiceSection = forwardRef((props, ref) => {
    return (
        <div ref={ref} className='px-5 sm:px-10 min-h-[80vh]'>

            <h1 className='text-2xl sm:text-2xl lg:text-3xl font-bold text-gray-950 mt-5 text-center'>Our Services</h1>

            <div className="grid gap-8 md:grid-cols-2 mt-10">
                <div className="transform transition-transform hover:scale-[1.03] border border-gray-300 rounded-md cursor-pointer">
                    <div className="flex flex-col items-center p-6">
                        <Fan className="mb-4 h-12 w-12 text-[#125a77]" />
                        <h3 className="mb-2 text-xl font-bold">AC Maintenance & Service</h3>
                        <p className="text-center text-gray-600 ">
                            Professional AC maintenance, repair, and installation services for residential and commercial
                            properties.
                        </p>
                    </div>
                </div>

                <div className="transform transition-transform hover:scale-[1.03] border border-gray-300 rounded-md cursor-pointer">
                    <div className="flex flex-col items-center p-6">
                        <Building2 className="mb-4 h-12 w-12 text-[#125a77]" />
                        <h3 className="mb-2 text-xl font-bold">Building Construction</h3>
                        <p className="text-center text-gray-600 ">
                            Complete building construction services with expert planning, design, and execution.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
})

export default ServiceSection