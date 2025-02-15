import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import React from 'react';

const Footer = () => {
    return (
        <div className='w-full flex justify-center flex-col p-5 bg-gray-100'>

            <div className='w-full flex flex-col sm:flex-row justify-between px-3 sm:px-10 my-10 '>
               
                <div className='space-y-3'>
                    <div className='flex items-center gap-2'>
                        <Phone className='h-5 w-5 text-[#125a77]' /> +974 56 250 250
                    </div>
                    <div className='flex items-center gap-2'>
                        <Mail className='h-5 w-5 text-[#125a77]' /> example@gmail.com
                    </div>
                    <div className='flex items-center gap-2'>
                        <MapPin className='h-5 w-5 text-[#125a77]' /> Doha, Qatar
                    </div>
                </div>

                <div className='space-y-3 mt-3 sm:mt-0'>
                    <div className='flex items-center gap-2'>
                        <Instagram className='h-5 w-5 text-[#125a77]' /> Instagram
                    </div>
                    <div className='flex items-center gap-2'>
                        <Facebook className='h-5 w-5 text-[#125a77]' /> FaceBook
                    </div>
                    <div className='flex items-center gap-2'>
                        <Twitter className='h-5 w-5 text-[#125a77]' /> Twitter
                    </div>
                </div>
                <div className='sm:w-[40%] '>
                    <form className='flex flex-col gap-3'>
                        <input className='bg-gray-200 p-2 border border-gray-300 rounded-md' placeholder='Enter your email' />
                        <textarea className='bg-gray-200 p-2 border border-gray-300 rounded-md' placeholder='Enter your message' />
                        <button className='bg-[#125a77] text-white px-4 py-2 rounded-sm hover:bg-[#327691] transition duration-300'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Footer;
