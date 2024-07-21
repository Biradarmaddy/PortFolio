import Link from "next/link";
import React from "react";
import { BiPhone } from "react-icons/bi";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";

const Contact = () => {
  return (
    <div
      className="pt-[4rem] bg-center bg-cover relative pb-[5rem] 
    mt-[2rem] mb-[3rem] bg-[url('/Images/c2.jpg')]"
    >
      <div className="absolut w-full h-full bg-[#000000a6] top-0 right-0 bottom-0"></div>

      <div
        className="w-[80%] relative z-[20] mx-auto grid grid-cols-1 
      lg:grid-cols-2 items-center gap-[3rem]"
      >
        {/* Text */}

        <div>
          <h1
            className="text-[30px] md:text-[40px] ld:text-[50]
             text-white font-bold leading-[3rem] md:leading-[4rem]"
          >
            Lests's get connected <br />
            <span>Make a Contact</span>
          </h1>

          <div className="flex mt-[2rem] items-center space-x-3">
            <div className="flex flex-col gap-2">
              <div className="w-[3rem] h-[3rem] bg-red-600 rounded-full flex items-center justify-center flex-col">
                <BiPhone className="w[1.7rem] h-[1.7rem] text-white " />
              </div>
              <div className="w-[3rem] h-[3rem] bg-red-600 rounded-full flex items-center justify-center flex-col">
                <MdMarkEmailRead className="w[1.7rem] h-[1.7rem] text-white " />
              </div>
            </div>
            <div className="gap-2">
              <h1 className="text-yellow-300 text-[30px] font-bold">
                +91 8208547728
              </h1>
              <h1 className="text-[20px] md:text-[30px] text-white font-semibold">
                madhavbiradar9730@gmail.com
              </h1>
            </div>
          </div>
        </div>

        <div>
          {/* SocialMedia Icons */}

          <h1
            className="text-[20px] md:text-[30px] ld:text-[40]
             text-yellow-300 font-bold leading-[3rem] md:leading-[4rem] float-right"
          >
            Visit My Social Media Accounts
          </h1>

          <div className="flex flex-row mt-[1rem] gap-6 float-left ml-[7rem]">
            <div className="w-[4rem] h-[4rem] bg-red-600 hover:bg-slate-800 hover:scale-110 rounded-full flex items-center justify-center flex-col">
              <Link href="https://www.linkedin.com/in/madhav-biradar-aa49aa250/"><FaLinkedin className="w-[2rem] h-[2rem] text-white " /></Link>
            </div>
            <div className="w-[4rem] h-[4rem] bg-red-600 hover:bg-slate-800 hover:scale-110 rounded-full flex items-center justify-center flex-col">
              <Link href="https://github.com/Biradarmaddy?tab=repositories"><FaGithubSquare className="w-[2rem] h-[2rem] text-white " /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
