'use client'
import { useAppDispatch } from "@/redux/hooks/hook";
import { setHomeRef } from "@/redux/rootReducer";
import Image from "next/image";
import { useEffect, useRef } from "react";

const HomePage = () => {
    const dispatch = useAppDispatch();
    const aboutRef = useRef<HTMLDivElement | null >(null);
    useEffect(() => {
      dispatch(setHomeRef(aboutRef));
    }, []);
  return (
    <div className="md:flex-row flex flex-col items-center justify-center gap-5 h-[calc(100vh-5rem)]" ref={aboutRef}>
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl sm:text-4xl font-semibold">FULL STACK developer</h1>
        <h1 className="text-md sm:text-lg">
          Hi 🖐️ I am Mukul Singh Bisht. <br />A passionate MERN and Next js
          developer
        </h1>
      </div>
      <figure
        className="
          relative
          w-[15rem]
          h-[15rem]
        "
      >
        <Image
          className="object-contain rounded-full"
          fill
          src={"/profile.jpg"}
          alt="profilePic"
        />
      </figure>
    </div>
  );
};

export default HomePage;
