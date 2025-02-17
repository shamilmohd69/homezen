'use client';

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import NavBar from "@/components/NavBar";
import Service from "@/components/Service";
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
    <div className="bg-[#9ACBD0]">
      {/* 
      <Hero scrollToSection={scrollToSection} />
      <ServiceSection ref={body1Ref} />
      <Footer /> */}
      <NavBar />
      <Hero2 />
      <Service />
    </div>
  )
}

export default page;