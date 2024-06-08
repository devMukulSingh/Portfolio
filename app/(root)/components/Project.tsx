'use client'
import Image from "next/image";
import { FC } from "react";
import TechCard from "./TechCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Github, Link2, SquareArrowOutUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface ProjectProps {
  project: {
    title: string;
    description: string;
    tech: string[];
    imageUrl: string;
    githubLink: string;
    hostedLink: string;
  };
}

const Project: FC<ProjectProps> = ({ project }) => {
    const router = useRouter();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 ">
      <figure className="relative w-[25rem] h-[25rem]">
        <Image
          src={project.imageUrl}
          alt="imageUrl"
          fill
          className="object-contain object-right"
        />
      </figure>
      <div className="flex flex-col gap-5 justify-center items-center">
        <h1 className="text-2xl font-semibold">{project.title}</h1>
        <h1 className="text-sm">{project.description}</h1>
        <div
          className="
            grid 
            grid-cols-2
            lg:grid-cols-4
            md:grid-cols-3
            gap-3
            "
        >
          {project.tech.map((tech, index) => (
            <TechCard tech={tech} key={index} />
          ))}
        </div>
        <div className="flex gap-5">
          <a
            className="
                flex
                items-center
                gap-3
                border
                rounded-md
                px-3
                py-2
                whitespace-nowrap
                text-sm
            "
            href={project.githubLink}
            target="_blank"
          >
            <FaGithub size={20} />
            Code
          </a>
          <a
            className="
                flex
                items-center
                gap-3
                border
                rounded-md
                px-3
                py-2
                whitespace-nowrap
                text-sm
            "
            href={project.hostedLink}
            target="_blank"
          >
            <SquareArrowOutUpRight size={20} />
            Live demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
