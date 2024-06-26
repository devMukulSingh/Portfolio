"use client";
import { useAppDispatch } from "@/redux/hooks/hook";
import { setSkillsRef } from "@/redux/rootReducer";
import Image from "next/image";
import { useEffect, useRef } from "react";

const SkillsPage = () => {
    const dispatch = useAppDispatch();
    const skillsRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
      dispatch(setSkillsRef(skillsRef));
    }, []);
  const skillsImg = [
    {
      url: "/typescript2.png",
      link: "https://www.typescriptlang.org",
      
    },
    { url: "/react.png", link: "https://react.dev/" },
    { url: "/tailwind.png", link: "https://tailwindcss.com/" },
    { url: "/next.png", link: "https://nextjs.org/" },
    { url: "/shadcn.png", link: "https://ui.shadcn.com/" },
    { url: "/express-js.png", link: "http://expressjs.com/" },
    { url: "/node.png", link: "https://nodejs.org/" },
    { url: "/prisma.jpg", link: "https://www.prisma.io/" },
    { url: "/mongodb.png", link: "https://www.mongodb.com/" },
    { url: "/mysql.png", link: "https://www.mysql.com/" },
  ];
  return (
    <div className="min-h-screen flex items-center" ref={skillsRef}>
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
            gap-7
            grid-cols-2
            lg:grid-cols-5
            md:grid-cols-3
        "
        >
          {skillsImg.map(
            (img: { link: string; url: string }, index: number) => (
              <a
                href={img.link}
                target="_blank"
                className="
                            relative  
                            w-full
                            min-w-[6rem]
                            max-w-[10rem] 
                            h-[10rem]
                            
                            "
                key={index}
              >
                <Image
                  fill
                  className="
                            hover:scale-90
                            transition-transform
                            cursor-pointer 
                            object-contain 
                            object-center"
                  alt="skillImg"
                  src={img.url}
                />
              </a>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
