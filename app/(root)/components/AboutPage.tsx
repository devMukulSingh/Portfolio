"use client";
import { useAppDispatch } from "@/redux/hooks/hook";
import { setAboutRef } from "@/redux/rootReducer";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion"

const AboutPage = () => {
  const dispatch = useAppDispatch();
  const aboutRef = useRef<HTMLDivElement | null>(null);
  useEffect( () => {
    dispatch(setAboutRef(aboutRef))
  },[])
  return (
    <div
      className="flex flex-col sm:gap-0 gap-10 items-center w-full min-h-screen justify-center"
      ref={aboutRef}
    >
      {/* <div className="flex flex-col items-center"> */}
        <h1 className="text-4xl sm:text-5xl font-semibold ">About Me</h1>
        <div className="md:flex-row flex flex-col items-center justify-center md:gap-5 gap-0  ">
          <motion.div
            transition={{ duration: 0.5, ease: "easeInOut" }}
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="sm:block hidden relative w-[25rem] h-[22rem] rounded-md"
          >
            <Image
              src={"/about.jpg"}
              alt="aboutPic"
              className="object-contain rounded-md"
              fill
            />
          </motion.div>
          <motion.div
            transition={{ duration: 0.5, ease: "easeInOut" }}
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-5 justify-center items-center w-full md:w-1/2"
          >
            <h1 className="font-semibold text-xl text-center">
              A dedicated Full Stack developer <br />
              based in Uttarakhand,India
            </h1>
            <h1 className="sm:text-md text-sm break-words text-center">
              I&apos;m a skilled Full Stack Developer specializing in the MERN
              stack (MongoDB, Express.js, React, Node.js) and Next.js. With a
              passion for creating seamless and dynamic web applications, I
              bring a comprehensive understanding of both front-end and back-end
              development. My expertise lies in building robust APIs, crafting
              responsive user interfaces, and optimizing performance for web
              applications.
            </h1>
          </motion.div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default AboutPage;
