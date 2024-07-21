
"use client"
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Skills = () => {
  return (
    <div className="mt-[3rem] md:mt-[5rem] mb-[2rem] md:mb-[4rem]">
      <h1 className="heading text-gray-900">
        Explore all the TOP and Demanding <br />
        <span className="font-bold uppercase text-red-400 ">
           Industry Skills
        </span>
      </h1>
       
       {/* Cursor div */}
      <div className="w-[80%] mt-[4rem] mx-auto gap-2">
           
           <Carousel
            additionalTransfrom={0}
            arrows={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            centerMode={false}
            infinite
            responsive={responsive}
            itemClass="item"
            showDots={false}>

           <Card
           name="Html"
           images="/images/html.png"/>

          <Card
           name="CSS"
           images="/images/css.png"/>

          <Card
           name="Javascript"
           images="/images/javascript.png"/>

          <Card
           name="Tailwind"
           images="/images/tailwind css.png"/>

          <Card
           name="React.js"
           images="/images/react.png"/>

           <Card
           name="Next.js"
           images="/images/next js.png"/>

           <Card
           name="C++"
           images="/images/c++.png"/>

          <Card
           name="SQL"
           images="/images/youtube.png"/>



           </Carousel>
      </div>
      
      </div>
  );
};

export default Skills;
