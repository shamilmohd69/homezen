'use client';

import About from "@/components/About";
import Footer from "@/components/Footer1";
import Hero2 from "@/components/Hero2";
import NavBar from "@/components/NavBar";
import Service from "@/components/Service";

import React, { useRef } from 'react'

const page = () => {

  const body1Ref = useRef(null);
  const body2Ref = useRef(null);
  const body3Ref = useRef(null);
  const body4Ref = useRef(null);

  const scrollToSection = (section) => {
    if (section === 'body1') {
      body1Ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (section === 'body2') {
      body2Ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (section === 'body3') {
      body3Ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (section === 'body4') {
      body4Ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


  return (
    <div className="bg-[#9ACBD0]">
      <NavBar scrollToSection={scrollToSection} />
      <div ref={body1Ref}>
        <Hero2 scrollToSection={scrollToSection} />
      </div>
      <div ref={body2Ref}>
        <Service />
      </div>
      <div ref={body3Ref}>
        <About />
      </div>
      <Footer />
    </div>
  )
}

export default page;