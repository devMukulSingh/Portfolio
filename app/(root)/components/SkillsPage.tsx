"use client";
import { skills } from "@/lib/constants";
import { useAppDispatch } from "@/redux/hooks/hook";
import { setSkillsRef } from "@/redux/rootReducer";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function SkillsPage() {
  const dispatch = useAppDispatch();
  // const skillsRef = useRef<HTMLDivElement | null>(null);
  // useEffect(() => {
  //   dispatch(setSkillsRef(skillsRef));
  // }, []);

  return (
    <div id="skillsPage" className="min-h-screen flex items-center">
      <div className="flex flex-col gap-10">
        <h1
          className="
            text-center 
            text-4xl
            sm:text-5xl 
            drop-shadow-lg 
            drop-shadow-white
            font-semibold
            "
        >
          Skills
        </h1>
        <div
          className="
            grid 
            sm:gap-14
            grid-cols-2
            lg:grid-cols-5
            md:grid-cols-3
        "
        >
          {skills.map((skillData, index: number) => (
            <Skill skillData={skillData} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

type Props = {
  skillData: {
    url: string;
    link: string;
    title: string;
  };
};

function Skill({ skillData }: Props) {
  return (
    <>
      <Link href={skillData.link} target="_blank">
        <figure
          className="
        flex   
        gap-5     
        min-w-[6rem]
        max-w-[10rem] 
        h-[10rem]
        relative  
        w-full    
        flex-col 
        "
        >
          <Image
            fill
            className="
            object-contain 
            object-center
            hover:scale-90
            transition-transform
            cursor-pointer 
          "
            alt="skillImg"
            src={skillData.url}
          />
        </figure>

        <h1 className="
        font-semibold
        text-center
        ">
          {skillData.title}
          
          </h1>
      </Link>
    </>
  );
}
