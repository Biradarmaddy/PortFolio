import Image from "next/image";
import React from "react";
import Link from "next/link";
import M1 from "@/public/Images/M1.png";

const Hero = () => {
  return (
    <div
      className="w-[100%] h-[88vh] flex items-center justify-center 
        flex-col bg-gray-700 md:clip_path"
    >
      <div className="w-[80%] grid grid-cols-1 md:grid-cols-2  gap-[2rem] mx-auto">
        <div className="justify-center items-center hidden md:block">
          <div data-aos="fade-left" data-aos-anchor-placement="top-center">
            <Image
              src={M1}
              alt="Madhav"
              width={300}
              height={300}
              className=" items-center rounded-2xl mt-[2rem]"
            />
          </div>

          <h2 className="mt-3 ml-10 font-semibold text-[25px] text-yellow-200 hover:underline cursor-pointer">
            Madhav Biradar
          </h2>
        </div>

        <div className="flex flex-col">
          <h1 className="text-[30px] md:-text-[35px] lg:text-[40px] text-yellow-200">
            Software Developer
          </h1>
          <p className="mt-2 text-[15px] md:-[25px] lg-[30px] opacity-80 text-gray-400">
            Entry-Level Software Engineer with a strong foundation in developing
            SaaS-based applications. Proficient in front-end technologies,
            including JavaScript, React, Next and API integrations. Passionate
            about creating innovative solutions and improving user experiences.
          </p>

          <h3 className="mt-[3rem] text-center font-semibold text-[20px] md:[25px] lg:text-[30px] text-blue-300">
            Certifications
          </h3>
          <div className="flex justify-between mt-[2rem]">
            <button className="button">
              <Link href="https://drive.google.com/file/d/13XABMUK5Vki0c_V8KaHRn11u_n7FYXpe/view?usp=drivesdk">
                Basic to Advance C++
              </Link>
            </button>
            <button className="button">
              <Link href="/">Mern-Frontend</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
