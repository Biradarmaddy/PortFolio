import Image from "next/image";
import React from "react";
import Link from "next/link";
import company from "@/public/Images/company.jpg";

const Internship = () => {
  return (
    <div className="mt-[1.5rem] md:mt-[6rem] mb-[1rem] md:mb-[3rem] ">
      <h1 className="heading text-blue-700 uppercase">Real World Experience</h1>

      <div
        className="w-[100%] h-[88vh] flex items-center justify-center 
        flex-col p-1"
      >
        <div className=" w-[80%] grid grid-cols-1 md:grid-cols-2  gap-[2rem] mx-auto ">
          <div className="justify-center items-center hidden md:block">
            <div data-aos="fade-right" data-aos-anchor-placement="top-center">
            <Image
              src={company}
              alt="Madhav"
              width={300}
              height={200}
              className=" items-center rounded-2xl mt-[1rem] md:mt-[2rem] h-[360px]"
            />
             </div>
            <h2 className="mt-3 font-semibold text-[25px] text-black hover:underline cursor-pointer">
              <Link href="https://www.baoiam.com/">Baoiam Innovation Pvt Limited</Link>
            </h2>
          </div>

          <div className="flex flex-col">
            <h1 className="text-[30px] md:-text-[35px] lg:text-[40px] text-gray-900">
              Web Developer Intern
            </h1>
            <p className="mt-2 text-[12px] md:text-[18px] text-gray-500 ">
              Assisted in developing front-end functionalities using HTML, CSS,
              JavaScript, and React. <br />
              Developed a Nykaa Website Clone for a better user experience and added new components like new at nykaa.
              <br />
              Collaborated with team members to troubleshoot and resolve technical issues.
            </p>

            <h3 className="mt-[3rem] font-semibold text-[20px] md:[25px] lg:text-[30px] text-gray-900">
              View Certification
            </h3>
            <div className="flex justify-between mt-[1.5rem]">
              <button className="button">
                <Link href="https://drive.google.com/file/d/13OuCz8GhmaBESRizb36-GwDh6JDy5dS9/view?usp=drivesdk">Click Here</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internship;
