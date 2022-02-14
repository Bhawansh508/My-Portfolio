import React from "react";
import Image from "next/image";
export default function Body() {
  return (
    <>
      <div className="my services">
        <p className="myservicestext text-center mt-20 text-6xl text-white">
          My Services
        </p>
        <div className="myservices grid grid-cols-3 mt-10 items-center justify-center self-center ml-[100px] gap-5  grid-rows-2 grid-flow-col ">
          <div className="myservicesItem w-[300px] h-[200px]   bg-white mb-4">
            <Image
              className="avatar  "
              src={"/AppMakingThumbnail.svg"}
              height={200}
              width={290}
            />
          </div>{" "}
          <div className="myservicesItem w-[300px] h-[200px] pl-5  bg-[#1B62CD] mb-4">
            <Image
              className="avatar  "
              src={"/LoginUiMakingThumbnail.svg"}
              height={600}
              width={900}
            />
          </div>
          <div className="myservicesItem w-[300px] h-[200px] pl-5  bg-[#1B62CD] mb-4">
            <Image
              className="avatar  "
              src={"/ChatUIMakingThumbnail.png"}
              height={600}
              width={900}
            />
          </div>
          <div className="myservicesItem w-[300px] h-[200px]   bg-white mb-4">
            <Image
              className="avatar  "
              src={"/AppMakingThumbnail.svg"}
              height={200}
              width={290}
            />
          </div>{" "}
          <div className="myservicesItem w-[300px] h-[200px] pl-5  bg-[#1B62CD] mb-4">
            <Image
              className="avatar  "
              src={"/LoginUiMakingThumbnail.svg"}
              height={600}
              width={900}
            />
          </div>
          <div className="myservicesItem w-[300px] h-[200px]   bg-white mb-4">
            <Image
              className="avatar  "
              src={"/AppMakingThumbnail.svg"}
              height={200}
              width={290}
            />
          </div>
        </div>
      </div>
      <div className="my projects">
        <p className="myprojectstitle text-center mt-20 text-6xl text-white">
          My Projects
        </p>
        <div className="myprojects grid grid-cols-3 mt-10 items-center justify-center self-center ml-[100px] gap-5  grid-rows-2 grid-flow-col ">
          <div className="projectItem w-[300px] h-[200px]   bg-white mb-4">
            <Image
              className="avatar  "
              src={"/Chatty Thumbnail.svg"}
              height={200}
              width={290}
            />
          </div>{" "}
          <div className="projectItem w-[300px] h-[200px]   bg-white mb-4">
            <Image
              className="avatar  "
              src={"/Chatty Thumbnail.svg"}
              height={200}
              width={290}
            />
          </div>{" "}
          <div className="projectItem w-[300px] h-[200px]   bg-white mb-4">
            <Image
              className="avatar  "
              src={"/Chatty Thumbnail.svg"}
              height={200}
              width={290}
            />
          </div>{" "}
          <div className="projectItem w-[300px] h-[200px]   bg-white mb-4">
            <Image
              className="avatar  "
              src={"/Chatty Thumbnail.svg"}
              height={200}
              width={290}
            />
          </div>{" "}
          <div className="projectItem w-[300px] h-[200px]   bg-white mb-4">
            <Image
              className="avatar  "
              src={"/Chatty Thumbnail.svg"}
              height={200}
              width={290}
            />
          </div>
          <div className="projectItem w-[300px] h-[200px]   bg-white mb-4">
            <Image
              className="avatar  "
              src={"/Chatty Thumbnail.svg"}
              height={200}
              width={290}
            />
          </div>
        </div>
      </div>{" "}
    </>
  );
}
