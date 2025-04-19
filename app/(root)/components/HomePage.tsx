"use client";
import { Button } from "@/components/ui/button";
import { resumeLink } from "@/lib/constants";
import { useAppDispatch } from "@/redux/hooks/hook";
import { setHomeRef } from "@/redux/rootReducer";
import { StickyNote } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

const HomePage = () => {
  return (
    <div
      id="homePage"
      className="md:flex-row flex flex-col items-center justify-center gap-5   h-[calc(100vh-5rem)]"
    >
      <div className="flex flex-col gap-10">
        <h1 className="text-xl font-semibold sm:text-3xl">
          Hi 🖐️ I am <br />
          <span className="sm:text-5xl text-4xl">Mukul Singh Bisht.</span>{" "}
          <br />
          <br />A passionate <span className="text-cyan-300">MERN</span> /{" "}
          <span className="text-cyan-300">Frontend</span> /{" "}
          <span className="text-cyan-300">Backend</span> developer
        </h1>
        <a className="" href={resumeLink} target="_">
          <Button
            className="
            w-fit
            gap-2
          "
          >
            <StickyNote />
            Resume/CV
          </Button>
        </a>
      </div>
    </div>
  );
};

export default HomePage;
