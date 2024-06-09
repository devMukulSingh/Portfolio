'use client'
import Image from "next/image"

const SkillsPage = () => {
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
      { url: "/prisma.png", link: "https://www.prisma.io/" },
      { url: "/mongodb.png", link: "https://www.mongodb.com/" },
      { url: "/mysql.png", link: "https://www.mysql.com/" },
    ];
  return (
    <div className="flex flex-col gap-10 h-screen justify-center items-center ">
        <h1 className="text-4xl drop-shadow-lg drop-shadow-white">
            Skills
        </h1>
        <div className="
            grid 
            gap-14
            grid-cols-2
            lg:grid-cols-5
            md:grid-cols-3
        ">
            {
                skillsImg.map( (img: { link:string,url:string},index:number) => (
                    <a 
                        href={img.link}
                        target="_blank"
                        className="
                            relative 
                            w-[10rem] 
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
                            src={img.url}/>
                     </a>
                ))
            }
        </div>
    </div>
  )
}

export default SkillsPage