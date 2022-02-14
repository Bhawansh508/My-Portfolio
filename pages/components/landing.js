import React from "react";
import Image from "next/image";
export default function Landing() {
  return (
    <div className="flex flex-row mt-20">
      <div className="introduction w-3/4">
        <p className=" width-[44%] pl-[5.5rem] text-[#64FFDA] text-xl">
          Hi , my name is
        </p>
        <p className="font-semibold whitespace-nowrap text-[#ccd6f6] text-6xl mx-20 px-20 ml-0   w-[44%] text">
          Bhawansh Rahariya
        </p>
        <p className="font-semibold  text-[#8892b0] text-6xl mx-20 px-20 ml-0   w-[68%] text">
          I build amazing apps.
        </p>
        <p className="font-semibold  text-[#8892b0] text-xl  px-20   mt-4 w-[73%] text">
          I am specialised in building responsive flutter apps for Windows, Web
          , Android and IOS . I am also a passionate learner and I am always
          ready to get oppurtunities for making beautiful app as I provide
          freelance services on
          <br />
          <a
            href="fiverr"
            className="link link-underline link-underline-black text-[#64FFDA]  "
          >
            Fiverr
          </a>
        </p>
      </div>
      <Image className="avatar  " src={"/mine.png"} height={400} width={400} />
      <div className="p-4"></div>
    </div>
  );
}
