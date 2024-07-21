import Link from "next/link";
import React from "react";
import { PiStudentFill } from "react-icons/pi";

const Nav = () => {
  return (
    <div className="w-[100%] bg-gray-200">
      <div className="w-full flex text-center items-center justify-between">
        {/* Icon and Name */}
        
          <Link href="/" className="flex gap-1 m-3 cursor-pointer">
          <PiStudentFill className="w-[2rem] h-[2rem] text-blue-500" />
          <h2 className="font-bold mt-1">Madhav</h2>
          </Link>
       
        {/* Nav Links */}
        <div>
          <ul className="hidden md:flex lg:flex items-center gap-3">
            <Link href="/" className="links">
              About
            </Link>
            <Link href="/projects" className="links">
              Projects
            </Link>
            <Link href="/skills" className="links">
              Skills
            </Link>
            <Link href="/internship" className="links">
              Experience
            </Link>
            <Link href="/contact" className="links">
              Contact
            </Link>
          </ul>
        </div>


        {/* Buttons */}

        <div className="flex gap-3 mr-4">
             <button className="p-2 bg-slate-600 rounded-md text-gray-200 hover:bg-gray-950 hover:scale-110">
                <Link href="https://drive.google.com/file/d/13Ldcom14B7kHhK0Jh0fCbIsb-8Zv8x_M/view?usp=drivesdk">View CV</Link>
             </button>

             <button className="p-2 bg-slate-600 rounded-md text-gray-200 hover:bg-gray-950 hover:scale-110">
                 <Link href="/contact">Hire Me</Link>
             </button>
        </div>


      </div>
    </div>
  );
};

export default Nav;
