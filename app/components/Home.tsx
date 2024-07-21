
"use client"
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import Project from './Projects/Projects'
import Skills from './Skills/Skills'
import Internship from './Internship/Internship'
import Contact from './Contact/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {

  useEffect(()=>{
     const initAOS = async ()=>{
      await import('aos');
      AOS.init({
        duration:1000,
        easing:'ease',
        once: true,
        anchorPlacement: "top-center"
      });
     };

     initAOS();
  },[])

  return (
    <div>
        <Hero/>
        <Project/>
        <Skills />
        <Internship/>
        <Contact/>
    </div>
  )
}

export default Home
