import Image from "next/image";
import React from "react";
import youtube from "@/public/Images/youtube.png";
import Link from "next/link";
import amazon from "@/public/Images/amazon.png";
import b1 from "@/public/Images/b1.jpg";
import l1 from "@/public/Images/l1.png";
import game from "@/public/Images/game.png";
import job from "@/public/Images/job.jpg";

const Project = () => {
  return (
    <div className="pt-[5rem] pb-[5rem] ">
      <h1 className="heading">
        Dynamic and User-Friendly
        <br />
        <span className="pl-2 text-blue-700">Projects</span>
      </h1>

      {/* Cards sections */}
      <div
        className="w-[85%] md:w-[80%] mt-[3rem] md:mt-[5rem] mx-auto grid
       grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]"
      >
        {/* First Card */}
        <div 
        data-aos="fade-left" 
        data-aos-anchor-placement="top-center">
          <div className="p-6 hover:bg-black hover:text-white rounded-md transition-all duration-200 md:hover:scale-105 cursor-pointe">
            <Image src={youtube} alt="You-Tube" className="rounded-md" />

            <h1 className="text-[20px] md:text-[25px] lg:text-[30px] text-center text-blue-500 p-1">
              U-Tube
            </h1>

            <p>
              Developed a YouTube-like video-sharing platform with React and
              Rapid API integration for enhanced search functionality. Focused
              on user interface design and video streaming optimization. <br />
              <span className="font-medium text-blue-400 mt-2">
                Skills: React, API integration, video streaming, UX/UI design
              </span>
            </p>

            <div className="try_it">
              <button>
                <Link href="https://661575aa6b6b810752f46d13--admirable-churros-1997fd.netlify.app//">Try It</Link>
              </button>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-anchor-placement="top-center"
        >
          <div className="p-6 hover:bg-black hover:text-white rounded-lg transition-all duration-200 md:hover:scale-105 cursor-pointe mt-[2rem]">
            <Image src={amazon} alt="Amazon" className="rounded-md" />

            <h1 className="text-[20px] md:text-[25px] lg:text-[30px] text-center text-blue-500 p-1">
              Amazon Clone
            </h1>

            <p>
              Created an online shopping platform replica using React and
              Firebase. Integrated dynamic product catalog, search bar, and
              shopping cart features. <br />
              <span className="font-medium text-blue-400 mt-2">
                Skills: React, Firebase, Tailwind CSS.
              </span>
            </p>

            <div className="try_it">
              <button>
                <Link href="https://inquisitive-mandazi-0d7232.netlify.app/">Try It</Link>
              </button>
            </div>
          </div>
        </div>

        {/* Third Card */}
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-anchor-placement="top-center"
        >
          <div className="p-6 hover:bg-black hover:text-white rounded-lg transition-all duration-200 md:hover:scale-105 cursor-pointe">
            <Image src={b1} alt="BurgerBite" className="rounded-md" />

            <h1 className="text-[20px] md:text-[25px] lg:text-[30px] text-center text-blue-500 p-1">
              BurgerBite
            </h1>

            <p>
              project involves creating a dynamic website for a burger joint.
              Users can easily navigate the site,find their favorite burgers,
              and place orders for delivery or pickup. <br />
              <span className="font-medium text-blue-400">
                Skills: Typescript, React.js, Next.js, Tailwind CSS, React icons
              </span>
            </p>

            <div className="try_it">
              <button>
                <Link href="https://github.com/Biradarmaddy/BurgerBite">
                  Try It
                </Link>
              </button>
            </div>
          </div>
        </div>

        {/* Fourth Card */}
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <div className="p-6 hover:bg-black hover:text-white rounded-lg transition-all duration-200 md:hover:scale-105 cursor-pointe">
            <Image src={l1} alt="You-Tube" className="rounded-md" />

            <h1 className="text-[20px] md:text-[25px] lg:text-[30px] text-center text-blue-500 p-1">
              InteractLens
            </h1>

            <p>
              Developed personalized product recommendation systems to analyze
              user preferences, enhancing user engagement and driving sales.
              Developed data visualization tools to analyze user behavior and
              trends. Implemented personalized product recommendations and a
              client-side chatbot using OpenAI.
              <br />
              <span className="font-medium text-blue-400">
                Skills: OpenAI API, data visualization, React, Tailwind.
              </span>
            </p>

            <div className="try_it">
              <button>
                <Link href="https://github.com/Biradarmaddy/InteractLens">
                  Try It
                </Link>
              </button>
            </div>
          </div>
        </div>

        {/* Fifth Card */}
        <div 
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-anchor-placement="top-center">
          <div className="p-6 hover:bg-black hover:text-white rounded-lg transition-all duration-200 md:hover:scale-105 cursor-pointe mt-5">
            <Image src={game} alt="You-Tube" className="rounded-md" />

            <h1 className="text-[20px] md:text-[25px] lg:text-[30px] text-center text-blue-500 p-1">
              Tic-Tac-Toe
            </h1>

            <p>
              This project implements a classic Tic-Tac-Toe game where two
              players take turns marking a 3x3 grid with X and O. The goal is to
              align three of their symbols horizontally, vertically, or
              diagonally. The project includes a user-friendly interface, tracks
              player turns, and detects win or draw conditions. <br />
              <span className="font-medium text-blue-400">
                Skills: Html, css, Javascript.
              </span>
            </p>

            <div className="try_it">
              <button>
                <Link href="https://github.com/Biradarmaddy/Tic-Tac-Toe-Game">
                  Try It
                </Link>
              </button>
            </div>
          </div>
        </div>

        {/* Six Card */}
        <div 
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-anchor-placement="top-center">
          <div className="p-6 hover:bg-black hover:text-white rounded-lg transition-all duration-200 md:hover:scale-105 cursor-pointe">
            <Image src={job} alt="JOBHAI" className="rounded-md" />

            <h1 className="text-[20px] md:text-[25px] lg:text-[30px] text-center text-blue-500 p-1">
              JOBHAI
            </h1>

            <p>
              Personalized job searches platform. Tailor your hunt with advanced
              filters, explore global opportunities, and receive alerts. Smart
              recommendations, company insights, multilingual support, make your
              job search seamless. Find your perfect job effortlessly with
              JOBHAI.
              <br />
              <span className="font-medium text-blue-400">
                Skills: Javascript, React, Tailwind, Firebase
              </span>
            </p>

            <div className="try_it">
              <button>
                <Link href="https://github.com/Biradarmaddy/JOBHAI">
                  Try It
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
