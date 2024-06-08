import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <div className="flex flex-col h-[100vh]  items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full sm:w-2/3 ">
        <figure className="relative w-[25rem] h-[25rem] rounded-md">
          <Image
            src={"/about.jpg"}
            alt="aboutPic"
            className="object-contain rounded-md"
            fill
          />
        </figure>
        <div className=" flex flex-col gap-5 justify-center">
          <h1 className="font-semibold text-xl">
            A dedicated Full Stack developer <br />
            based in Uttarakhand,India
          </h1>
          <h1 className="">
            I'm a skilled Full Stack Developer specializing in the MERN stack
            (MongoDB, Express.js, React, Node.js) and Next.js. With a passion
            for creating seamless and dynamic web applications, I bring a
            comprehensive understanding of both front-end and back-end
            development. My expertise lies in building robust APIs, crafting
            responsive user interfaces, and optimizing performance for web
            applications.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
