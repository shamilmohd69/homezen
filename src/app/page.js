'use client';

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import ServiceSection from "@/components/ServiceSection";

import React, { useRef } from 'react'

const page = () => {

  const body1Ref = useRef(null);

  const scrollToSection = (section) => {
    if (section === 'body1') {
      body1Ref.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className="bg-[#A1E3F9]">
      <NavBar />
      <Hero scrollToSection={scrollToSection} />
      <ServiceSection ref={body1Ref} />
      <Footer />
    </div>
  )
}

export default page;